import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { threadsListFetchData, selectedThreadId } from '../../Actions/threadsList';

import { Sidebar } from '../View/Sidebar/Sidebar';


class SidebarContainer extends Component {
    htmlDecode(input) {
        let doc = new DOMParser().parseFromString(input, "text/html");
        return doc.documentElement.textContent;
    }

    getDate(timestamp) {
        let date = new Date(timestamp*1000);
        return date.getDay() + '/' + date.getMonth() + '/' + date.getFullYear();
    }

    render() {
        if (this.props.hasErrored) {
        return <p>ERROR! HUI SOSI!</p>;
        }
        if (this.props.isLoading) {
            return <p>Падажжи, ёбана...</p>;
        }
        return (
            <div>
            <Sidebar data={this.props} />
            </div>
        )
    }
}

SidebarContainer.PropTypes = {
    fetchData: PropTypes.func.isRequired,
    items: PropTypes.array.isRequired,
    hasErrored: PropTypes.bool.isRequired,
    isLoading: PropTypes.bool.isRequired
}

const mapStateToProps = (state) => {
    return {
        items: state.threadsList,
        currentBoard: state.selectedBoardId,
        hasErrored: state.itemsHasErrored,
        isLoading: state.itemsIsLoading
    };
};
const mapDispatchToProps = (dispatch) => {
    return {
        fetchData: (url) => dispatch(threadsListFetchData(url)),
        getComments: (postId) => {dispatch(selectedThreadId(postId))}
    };
};
export default connect(mapStateToProps, mapDispatchToProps)(SidebarContainer);