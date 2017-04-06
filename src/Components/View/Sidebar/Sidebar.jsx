import React from 'react';
import './Sidebar.css';
import { ListElement } from '../List/ListElement';

export const Sidebar = (props) => {
    return (
        <div className="sidebar threadsList">
        {props.threadData.threads.map((post) => (
            <ListElement key={post.num} data={post}/>
        ))}
        </div>
    );
}