import React, { Component } from 'react';
import { connect } from 'react-redux';

class Player extends Component {
    render() {
        if(this.props.video === undefined) {
            return <video width="1280px" height="720px" controls autoPlay={false} loop={true} />
        } else
        return (
            <video key={this.video} width="1280px" height="720px" controls autoPlay={false} loop={true} poster={'https://2ch.hk' + this.props.thumbnail}
            src={'https://2ch.hk' + this.props.video} />
        );
    }
}

const mapStateToProps = (state) => {
    return {
        video: state.currentVideo.path,
        thumbnail: state.currentVideo.thumbnail,
        vid_width: state.currentVideo.width,
        vid_height: state.currentVideo.height
    };
}

const mapDispatchToProps = (dispatch) => {
    return {}
}

export default connect(mapStateToProps, mapDispatchToProps)(Player)