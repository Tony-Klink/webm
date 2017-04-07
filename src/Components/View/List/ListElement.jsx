import React, { Component } from 'react';
import { connect } from 'react-redux';
import { AttachmentView } from './AttachmentView';

import { selectedThreadId } from '../../../Actions/threadsList';

const htmlDecode = (input) => {
    let doc = new DOMParser().parseFromString(input, "text/html");
    return doc.documentElement.textContent;
}

class ListElement extends Component {
    handleSelection = (id) => {
        console.log(`thread @${id} is selected`);
        this.props.handleSelectionA(id);
    }
    render() {
        if (!this.props.data) {
            return (
                <div>Sorry, something went wrong</div>
            );
        } else {
            return (
                <div className="listElement" onClick={this.handleSelection.bind(this, this.props.data.num)}>
                    <div>{this.props.data.date}</div>
                    <div>{htmlDecode(this.props.data.subject)}</div>
                    <AttachmentView data={this.props.data.files} />
                </div>
            );
        }
    }
}

const mapStateToProps = (state) => {
    return {};
}

const mapDispatchToProps = (dispatch) => {
    return {
        handleSelectionA: (id) => dispatch(selectedThreadId(id))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ListElement)