export const boardOptionsHasErrored = (state = false, action) => {
  switch (action.type) {
    case 'THREADS_LIST_HAS_ERRORED':
      return action.hasErrored;
  
    default:
      return state;
  }
}

export const boardOptionsIsLoading = (state = false, action) => {
  switch (action.type) {
    case 'THREADS_LIST_IS_LOADING':
      return action.isLoading;
  
    default:
      return state;
  }
}

export const boardOptions = (state = [], action) => {
  switch (action.type) {
    case 'BOARD_OPTIONS_FETCH_DATA_SUCCESS':
      return action.options;
  
    default:
      return state;
  }
}

export const selectedBoardId = (state = "kpop", action) => {
  switch (action.type) {
    case 'SELECTED_BOARD_ID':
      return action.boardId;
    default:
      return state;
  }
}