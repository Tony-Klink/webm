import React from 'react';

import { threadDetails } from '../../../MockupData/threadDetails';

const vid = threadDetails[0].files[0];

export const Player = () => {
    return (
        <video width="320" height="240" controls autoPlay="true" poster={'https:/2ch.hk' + vid.thumbnail}>
            <source src={'https:/2ch.hk' + vid.path} />
        </video>
    );
}