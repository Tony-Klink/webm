export const currentVideo = (url) => {
    return {
        type: 'CURRENT_VIDEO_SELECTED_ID',
        selectedId: url
    };
}