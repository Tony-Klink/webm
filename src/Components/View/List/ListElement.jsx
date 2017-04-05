import React from 'react';
import { AttachmentView } from './AttachmentView';

export const ListElement = (props) => {
    if (!props.data) {
        return (
            <div>Sorry, something went wrong</div>
        );
    } else {
        return (
            <div>
                <div>{props.data.subject}</div>
                <AttachmentView data={props.data.files} />
            </div>
        );
    }
}