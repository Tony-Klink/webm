export const itemsHasErrored = (state = false, action) => {
  switch (action.type) {
    case 'ITEMS_HAS_ERRORED':
      return action.hasErrored;
    default:
      return state;
  }
}

export const itemsIsLoading = (state = false, action) => {
  switch (action.type) {
    case 'ITEMS_IS_LOADING':
      return action.isLoading;
    default:
      return state;
  }
}

export const threads = (state = [], action) => {
  switch (action.type) {
    case 'THREADS_FETCH_DATA_SUCCESS':
      return action.threads;
    case 'THREADS_REMOVE_ITEM':
      return [
        ...state.slice(0, action.index),
        ...state.slice(action.index + 1)
      ];
    default:
      return state;
  }
}

export const board = (state = '', action) => {
  switch (action.type) {
    case 'BOARD_NAME_FETCH_DATA_SUCCESS':
      return action.board;
    case 'BOARD_FETCH_BY_NAME':
      return action.board;
    default:
      return state;
  }
}