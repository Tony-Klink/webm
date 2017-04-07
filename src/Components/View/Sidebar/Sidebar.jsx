import React from 'react';
import './Sidebar.css';
import ListElement from '../List/ListElement';

export const Sidebar = (props) => {
    return (
        <div className="sidebar threadsList">
            {props.data.items.map((post) => (
                <ListElement key={post.num} data={post} />
            ))}
        </div>
    );
}