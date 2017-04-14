import React, { Component } from 'react';
import { connect } from 'react-redux';
import { AttachmentView } from './AttachmentView';
import { Item } from 'semantic-ui-react';

import { selectedThreadContentId, threadGalleryFetchData, threadGalleryHasErrored } from '../../../Actions/threadGallery';

const htmlDecode = (input) => {
    let doc = new DOMParser().parseFromString(input, "text/html");
    return doc.documentElement.textContent;
}

class ListElement extends Component {
    handleSelection = (id) => {
        console.log(`thread @${id} is selected`);
        this.props.resetError();
        this.props.fetchThreadDataById(id);
        this.props.fetchVideos('https://2ch.hk/' + this.props.selectedBoard + '/res/' + id + '.json');
    }
    render() {
        if (!this.props.data) {
            return (
                <div>Sorry, something went wrong</div>
            );
        } else {
            return (
                <Item className="listElement" onClick={this.handleSelection.bind(this, this.props.data.num)}>
                    <AttachmentView data={this.props.data.files} />
                    <Item.Content>
                        <Item.Header as='p'>{htmlDecode(this.props.data.subject)}</Item.Header>
                        <Item.Extra>{this.props.data.date}</Item.Extra>
                    </Item.Content>
                </Item>
            );
        }
    }
}

const mapStateToProps = (state) => {
    return {
        selectedBoard: state.selectedBoardId
    };
}

const mapDispatchToProps = (dispatch) => {
    return {
        fetchThreadDataById: (id) => dispatch(selectedThreadContentId(id)),
        fetchVideos: (url) => dispatch(threadGalleryFetchData(url)),
        resetError: () => dispatch(threadGalleryHasErrored(false))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ListElement)
//<Item.Description dangerouslySetInnerHTML={{__html: htmlDecode(this.props.data.comment)}}></Item.Description>