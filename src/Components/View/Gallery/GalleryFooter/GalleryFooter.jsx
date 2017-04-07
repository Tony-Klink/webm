import React from 'react';
import { connect } from 'react-redux';
import './GaleryFooter.css';

import { GaleryItem } from './GaleryItem';

//Move to actions
const getAttachmentList = (data) => {
    let files = [];
    for(let elem of data) {
        for(let file of elem.files) {
            switch (file.type) {
                case 6:
                    files.push(file);
                    break;
                default:
                    break;
            }
        }
    }
    //console.log(files);
    return files;
}

export const GalleryFooter = (props) => {
    return (
        <div className="galleryFooter">
            {getAttachmentList(props.threadData).map((post, index) => (
            <GaleryItem key={index} data={post}/>
        ))}
        </div>
    );
}