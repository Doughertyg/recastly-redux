var changeVideoList = (videos) => {
  //TODO:  Return some action object to change the list of videos in VideoList.
  return {
    type: 'CHANGE_VIDEO_LIST',
    videos: videos
  }
};


//function that updates currentVideoList 

//update current videoplayer when title clicked

export default changeVideoList;
