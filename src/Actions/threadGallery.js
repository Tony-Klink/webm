export const threadGalleryHasErrored = (bool) => {
    return {
        type: 'THREAD_GALLERY_HAS_ERRORED',
        hasErrored: bool
    };
}

export const threadGalleryIsLoading = (bool) => {
    return {
        type: 'THREAD_GALLERY_IS_LOADING',
        isLoading: bool
    };
}

export const threadGalleryFetchDataSuccess = (thumbs) => {
    return {
        type: 'THREAD_GALLERY_FETCH_DATA_SUCCESS',
        thumbs
    };
}

export const threadGalleryFetchData = (url) => {
    return (dispatch) => {
        dispatch(threadsListIsLoading(true));
        let files = [];
        fetch(url)
            .then((response) => {
                if (!response.ok) {
                    throw Error(response.statusText);
                }
                dispatch(threadsListIsLoading(false));
                console.log('Hooray2!');
                return response;
            })
            .then((response) => response.json())
            .then((items) => {
                dispatch(threadsListFetchDataSuccess(items.threads))
                })
            .catch(() => dispatch(threadsListHasErrored(true)));
    };
}