import { combineReducers } from 'redux';
import { threads, board, itemsHasErrored, itemsIsLoading } from './items';

export default combineReducers({
    board,
    threads,
    itemsHasErrored,
    itemsIsLoading
});