import React from 'react';

export const AttachmentView = (props) => {
    return (
        <div>
            {props.data.map((thumb, index) => (
                    <img key={index} src={'https://2ch.hk' + thumb.thumbnail} alt=""/>
                ))}
        </div>
    );
}