import { combineReducers } from 'redux';
import { threadsList, threadsListHasErrored, threadsListIsLoading } from './threadsList';
import { threadGalleryHasErrored, threadGalleryIsLoading, filesList, selectedId} from './threadGallery';
import { boardOptionsHasErrored, boardOptionsIsLoading, boardOptions, selectedBoardId } from './boardOptions';
import { currentVideo } from './selectVideo';

export default combineReducers({
    selectedBoardId,
    boardOptions,
    boardOptionsIsLoading,
    boardOptionsHasErrored,
    threadsList,
    threadsListIsLoading,
    threadsListHasErrored,
    selectedId,
    filesList,
    threadGalleryIsLoading,
    threadGalleryHasErrored,
    currentVideo
});