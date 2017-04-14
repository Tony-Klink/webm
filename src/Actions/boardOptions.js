export const boardOptionsHasErrored = (bool) => {
    return {
        type: 'BOARD_OPTIONS_HAS_ERRORED',
        hasErrored: bool
    };
}

export const boardOptionsIsLoading = (bool) => {
    return {
        type: 'BOARD_OPTIONS_IS_LOADING',
        isLoading: bool
    };
}

export const boardOptionsFetchDataSuccess = (options) => {
    return {
        type: 'BOARD_OPTIONS_FETCH_DATA_SUCCESS',
        options
    };
}

export const selectedBoardId = (boardId) => {
    return {
        type: 'SELECTED_BOARD_ID',
        boardId
    }
}

export const boardOptionsFetchData = (url) => {
    return (dispatch) => {
        dispatch(boardOptionsIsLoading(true));
        boardOptionsHasErrored(false);
        fetch('https://crossorigin.me/' + url, {mode: 'cors'})
        //fetch(url, {mode: 'no-cors'})
            .then((response) => {
                if (!response.ok) {
                    throw Error(response.statusText);
                }
                dispatch(boardOptionsIsLoading(false));
                console.log('Board options fetched: ', response.body);
                return response;
            })
            .then((response) => response.json())
            .then((boards) => {
                dispatch(boardOptionsFetchDataSuccess(boards))
                })
            .catch(() => dispatch(boardOptionsHasErrored(true)));
    };
}