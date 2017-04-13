import React, { Component } from 'react';
import { connect } from 'react-redux';

import { Image } from 'semantic-ui-react';
//import './GaleryFooter.css';

import GaleryItem from './GaleryItem';

class GaleryFooter extends Component {
    render() {
        if (this.props.hasErrored) {
            return <p>ERROR! HUI SOSI!</p>;
        }
        if (this.props.isLoading) {
            return <p>Падажжи, ёбана...</p>;
        }
        return (
            <Image.Group size="small" className="galleryFooter">
                {this.props.items.map((post, index) => (
                    <GaleryItem key={index} data={post} itemId={index}/>
                ))}
            </Image.Group>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        items: state.filesList,
        hasErrored: state.threadGalleryHasErrored,
        isLoading: state.threadGalleryIsLoading
    };
};
const mapDispatchToProps = (dispatch) => {
    return {};
};
export default connect(mapStateToProps, mapDispatchToProps)(GaleryFooter);