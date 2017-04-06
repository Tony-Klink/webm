import React from 'react';

export const GaleryItem = (props) => {
    return (
        <a className="videoThumbLink" href={'https://2ch.hk' + props.data.path} target="_blank"><img className="videoThumbGallery" src={'https://2ch.hk' + props.data.thumbnail} alt=""/></a>
    );
}