import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './../reducers/main.js';
import exampleVideoData from '../data/exampleVideoData.js';

// TODO:  Create your redux store, apply thunk as a middleware, and export it
var initialState = {
    videoList: exampleVideoData,
    currentVideo: null
}

var store = createStore(rootReducer, {videoList: exampleVideoData, currentVideo: exampleVideoData[0]}, applyMiddleware(thunk));
// var configureStore = function() {
//     return createStore(rootReducer, applyMiddleware(thunk));
// }
// export default configureStore;
export default store;