export const threadsListHasErrored = (bool) => {
    return {
        type: 'THREADS_LIST_HAS_ERRORED',
        hasErrored: bool
    };
}

export const threadsListIsLoading = (bool) => {
    return {
        type: 'THREADS_LIST_IS_LOADING',
        isLoading: bool
    };
}

export const threadsListFetchDataSuccess = (threads) => {
    return {
        type: 'THREADS_LIST_FETCH_DATA_SUCCESS',
        threads
    };
}

export const threadsListFetchData = (url) => {
    return (dispatch) => {
        dispatch(threadsListIsLoading(true));
        threadsListHasErrored(false);
        fetch('https://crossorigin.me/' + url, {mode: 'cors'})
        //fetch(url, {mode: 'no-cors'})
            .then((response) => {
                if (!response.ok) {
                    throw Error(response.statusText);
                }
                
                dispatch(threadsListIsLoading(false));
                console.log('Threads list has been fetched: ', response.body);
                return response;
            })
            .then((response) => response.json())
            .then((items) => {
                dispatch(threadsListFetchDataSuccess(items.threads))
                })
            .catch(() => dispatch(threadsListHasErrored(true)));
    };
}