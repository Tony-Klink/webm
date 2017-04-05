export const itemsHasErrored = (bool) => {
    return {
        type: 'ITEMS_HAS_ERRORED',
        hasErrored: true
    };
}

export const itemsIsLoading = (bool) => {
    return {
        type: 'ITEMS_IS_LOADING',
        isLoading: bool
    };
}

export const itemsFetchDataSuccess = (threads) => {
    return {
        type: 'THREADS_FETCH_DATA_SUCCESS',
        threads
    };
}

export const itemsDeleteItem = (index) => {
    return {
        type: 'THREADS_REMOVE_ITEM',
        index
    }
}

export const boardNameFetchDataSuccess = (board) => {
    return {
        type: 'BOARD_NAME_FETCH_DATA_SUCCESS',
        board
    };
}

export const boardFetchByName = (board) => {
    return {
        type: 'BOARD_FETCH_BY_NAME',
        board
    };
}


export const itemsFetchData = (url) => {
    return (dispatch) => {
        dispatch(itemsIsLoading(true));

        fetch(url)
            .then((response) => {
                if (!response.ok) {
                    throw Error(response.statusText);
                }
                dispatch(itemsIsLoading(false));
                console.log('Hooray!');
                return response;
            })
            .then((response) => response.json())
            .then((items) => {
                dispatch(itemsFetchDataSuccess(items.threads))
                dispatch(boardNameFetchDataSuccess(items.board))
                })
            .catch(() => dispatch(itemsHasErrored(true)));
    };
}