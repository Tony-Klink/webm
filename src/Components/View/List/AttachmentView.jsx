import React from 'react';

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
        <img className="picThumb" src={'https://2ch.hk' + props.data.thumbnail} alt=""/>
    );
}

const Vid = (props) => {
    return (
        <img className="videoThumb" src={'https://2ch.hk' + props.data.thumbnail} alt=""/>
    );
}

const Container = (props) => {
    if (props.data.type !== 6) {
        return (<ThumbImage data={props.data} />);
    } else {
        return (<Vid data={props.data} />);
    }
}