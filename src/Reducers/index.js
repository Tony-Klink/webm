import { combineReducers } from 'redux';
import { threadsList, threadsListHasErrored, threadsListIsLoading, selectedId } from './threadsList';
import { threadGalleryHasErrored, threadGalleryIsLoading, filesList} from './threadGallery';

export default combineReducers({
    threadsList,
    threadsListHasErrored,
    threadsListIsLoading,
    selectedId,
    threadGalleryHasErrored,
    threadGalleryIsLoading,
    filesList
});