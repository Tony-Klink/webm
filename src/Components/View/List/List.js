import React from 'react';
import { ListElement } from './ListElement';

export const List = (props) => {
    console.log(props);
    return (
        <div className="tempList">
        {props.threadData.threads.map((post) => (
            <ListElement key={post.num} data={post}/>
        ))}
        </div>
    );
}