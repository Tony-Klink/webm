import React, { Component } from 'react';
import { connect } from 'react-redux';

import { boardOptionsFetchData, selectedBoardId } from '../../../Actions/boardOptions';
import { threadsListFetchData } from '../../../Actions/threadsList';

class BoardsDropdown extends Component {
    componentDidMount() {
        this.props.fetchBoardList('https://2ch.hk/makaba/mobile.fcgi?task=get_boards');
        this.props.fetchThreadsList('https://2ch.hk/' + this.props.selectedBoard + '/catalog.json')
    }
    handleSelection = (id) => {
        console.log(id.target.value);
        this.props.boardId(id.target.value);
        this.props.fetchThreadsList('https://2ch.hk/' + id.target.value + '/catalog.json')
    }
    render() {
        return (
            <select className="ui dropdown" name="board-selector" id="search-select" onChange={this.handleSelection.bind(this)} value={this.props.selectedBoard}>
                {Object.keys(this.props.options).map((category, index) => (
                    <optgroup key={index} label={category}>
                        {this.props.options[category].map((board, index) => (
                            <option key={index} value={board.id}>{'/' + board.id + '/ - ' + board.name }</option>
                        ))}
                    </optgroup>
                ))}
            </select>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        selectedBoard: state.selectedBoardId,
        options: state.boardOptions
    };
}

const mapDispatchToProps = (dispatch) => {
    return {
        fetchBoardList: (url) => dispatch(boardOptionsFetchData(url)),
        fetchThreadsList: (url) => dispatch(threadsListFetchData(url)),
        boardId: (id) => dispatch(selectedBoardId(id))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(BoardsDropdown);