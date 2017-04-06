import React from 'react';
import { AttachmentView } from './AttachmentView';

const htmlDecode = (input) => {
    let doc = new DOMParser().parseFromString(input, "text/html");
    return doc.documentElement.textContent;
}


export const ListElement = (props) => {
    if (!props.data) {
        return (
            <div>Sorry, something went wrong</div>
        );
    } else {
        return (
            <div className="listElement">
                <div>{props.data.date}</div>
                <div>{htmlDecode(props.data.subject)}</div>
                <AttachmentView data={props.data.files} />
            </div>
        );
    }
}
