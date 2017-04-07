export const threadGalleryHasErrored = (state = false, action) => {
  switch (action.type) {
    case 'THREAD_GALLERY_HAS_ERRORED':
      return action.hasErrored;
  
    default:
      return state;
  }
}

export const threadGalleryIsLoading = (state = false, action) => {
  switch (action.type) {
    case 'THREAD_GALLERY_IS_LOADING':
      return action.isLoading;
  
    default:
      return state;
  }
}

export const filesList = (state = [], action) => {
  switch (action.type) {
    case 'THREAD_GALLERY_FETCH_DATA_SUCCESS':
      return action.thumbs;
  
    default:
      return state;
  }
}
