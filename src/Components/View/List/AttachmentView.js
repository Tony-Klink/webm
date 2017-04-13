import React from 'react';
import { Image } from 'semantic-ui-react';

import './AttachmentView.css';

export const AttachmentView = (props) => {
    return (
        <div>
            {props.data.map((thumb, index) => (
                <a key={index} href={'https://2ch.hk' + thumb.path} target="_blank"><Container data={thumb} /></a>
            ))}
        </div>
    );
}

const ThumbImage = (props) => {
    return (
        <Image width="48" height="48" shape="rounded" className="picThumb" src={'https://2ch.hk' + props.data.thumbnail} alt=""/>
    );
}

const Vid = (props) => {
    return (
        <Image width="48" height="48" shape="rounded" className="videoThumb" src={'https://2ch.hk' + props.data.thumbnail} alt=""/>
    );
}

const Container = (props) => {
    if (props.data.type !== 6) {
        return (<ThumbImage data={props.data} />);
    } else {
        return (<Vid data={props.data} />);
    }
}