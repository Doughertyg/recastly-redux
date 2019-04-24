import searchYouTube from '../lib/searchYouTube.js';
import changeVideoList from './videoList.js';
import changeVideo from './currentVideo.js';
import YOUTUBE_API_KEY from '../config/youtube.js';


var handleVideoSearch = (q) => {
  //searchYouTube({YOUTUBE_API_KEY, q, max = 5}, callback)
  //TODO:  Write an asynchronous action to handle a video search!
  //export function videoSearch(q) {
  
    return function(dispatch){
      /*
      //dispatch(searchYouTube({YOUTUBE_API_KEY, q, max = 5}, callback));
  
      callback = (videos) => {
        console.log("callback");
          //if succcess on done
          // then update changeVideoList
          dispatch(changeVideoList(videos))
          //change current video
          dispatch(changeVideo(videos[0]))
      }
  */
  
    }
  //} 
};
/*
export function videoSearch(q) {
  
  return function(dispatch){

    dispatch(searchYouTube({YOUTUBE_API_KEY, q, max = 5}, callback));

    callback = () => {
      console.log("callback");
        //if succcess on done
        // then update changeVideoList
        //(dispatch(changeVideoList(videos)))
        //change current video
        //(dispatch(changeVideo(video)))
    }


  }
}*/


// var searchYouTube = ({key, query, max = 5}, callback) => {
//   $.get('https://www.googleapis.com/youtube/v3/search', {
//     part: 'snippet',
//     key: key,
//     q: query,
//     maxResults: max,
//     type: 'video',
//     videoEmbeddable: 'true'
//   })
//     .done(({items}) => {
//       if (callback) {
//         callback(items);
//       }
//     })
//     .fail(({responseJSON}) => {
//       responseJSON.error.errors.forEach((err) =>
//         console.error(err)
//       );
//     });
// };
//App.js
// getYouTubeVideos(query) {
//   var options = {
//     key: this.props.API_KEY,
//     query: query
//   };

//   this.props.searchYouTube(options, (videos) =>
//     this.setState({
//       videos: videos,
//       currentVideo: videos[0]
//     })
//   );
// }
export default handleVideoSearch;
