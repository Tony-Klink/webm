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

export const selectedThreadId = (threadId) => {
    return {
        type: 'SELECTED_THREAD_ID',
        threadId
    }
}

export const threadsListFetchData = (url) => {
    return (dispatch) => {
        dispatch(threadsListIsLoading(true));

        fetch(url)
            .then((response) => {
                if (!response.ok) {
                    throw Error(response.statusText);
                }
                dispatch(threadsListIsLoading(false));
                console.log('Hooray!');
                return response;
            })
            .then((response) => response.json())
            .then((items) => {
                dispatch(threadsListFetchDataSuccess(items.threads))
                })
            .catch(() => dispatch(threadsListHasErrored(true)));
    };
}