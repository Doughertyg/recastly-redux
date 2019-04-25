import { connect } from 'react-redux';
import VideoPlayer from '../components/VideoPlayer.js';

var VideoPlayerContainer = (props) => {
    return (
        <VideoPlayer video = {props.currentVideo}></VideoPlayer>
    )

};

//TODO: define a VideoPlayerContainer component which will hook up your action
//dispatchers with your VideoPlayer component props.
const mapStateToProps = function(state) {
    return {
      video: state.currentVideo
    }
  }
export default connect(mapStateToProps)(VideoPlayerContainer);
