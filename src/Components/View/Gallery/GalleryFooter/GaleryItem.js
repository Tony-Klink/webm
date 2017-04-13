import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Image } from 'semantic-ui-react';

import { currentVideo } from '../../../../Actions/selectVideo';

import './GaleryFooter.css';

class GaleryItem extends Component {
    handleSelection = (url) => {
        //console.log(`video @id: ${url.id} is selected`, url);
        this.props.selectVideo(url);
    }
    render() {
        return (
            <Image src={'https://2ch.hk' + this.props.data.thumbnail}
                   shape="rounded"
                   className="galleryImage"
                   onClick={this.handleSelection.bind(this, {path: this.props.data.path, thumbnail: this.props.data.thumbnail, width: this.props.data.width, height: this.props.data.height, id: this.props.itemId})}
            />
        );
    }
}

const mapStateToProps = (state) => {
    return {};
}

const mapDispatchToProps = (dispatch) => {
    return {
        selectVideo: (url) => dispatch(currentVideo(url))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(GaleryItem)