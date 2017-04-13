export const currentVideo = (state = {}, action) => {
  switch (action.type) {
    case 'CURRENT_VIDEO_SELECTED_ID':
      return action.selectedId;
    default:
      return state;
  }
}