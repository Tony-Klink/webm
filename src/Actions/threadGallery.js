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

export const selectedThreadContentId = (threadId) => {
    return {
        type: 'SELECTED_THREAD_CONTENT_ID',
        threadId
    }
}

const getAttachmentList = (data) => {
    let files = [];
    for(let elem of data[0].posts) {
        for(let file of elem.files) {
            switch (file.type) {
                case 6:
                    files.push(file);
                    break;
                default:
                    break;
            }
        }
    }
    return files;
}

export const threadGalleryFetchData = (url) => {
    return (dispatch) => {
        dispatch(threadGalleryIsLoading(true));
        threadGalleryHasErrored(false);
        fetch('https://crossorigin.me/' + url, {mode: 'cors'})
        //fetch(url, {mode: 'no-cors'})
            .then((response) => {
                if (!response.ok) {
                    throw Error(response.statusText);
                }
                dispatch(threadGalleryIsLoading(false));
                console.log('Gallery items has been fetched: ', response.body);
                return response;
            })
            .then((response) => response.json())
            .then((items) => {
                dispatch(threadGalleryFetchDataSuccess(getAttachmentList(items.threads)))
                })
            .catch(() => dispatch(threadGalleryHasErrored(true)));
    };
}