export const threadsListHasErrored = (state = false, action) => {
  switch (action.type) {
    case 'THREADS_LIST_HAS_ERRORED':
      return action.hasErrored;
  
    default:
      return state;
  }
}

export const threadsListIsLoading = (state = false, action) => {
  switch (action.type) {
    case 'THREADS_LIST_IS_LOADING':
      return action.isLoading;
  
    default:
      return state;
  }
}

export const threadsList = (state = [], action) => {
  switch (action.type) {
    case 'THREADS_LIST_FETCH_DATA_SUCCESS':
      return action.threads;
  
    default:
      return state;
  }
}

export const selectedId = (state = "", action) => {
  switch (action.type) {
    case 'SELECTED_THREAD_ID':
      return action.threadId;
    default:
      return state;
  }
}