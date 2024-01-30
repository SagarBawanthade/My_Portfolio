import React from 'react';
import { DefaultPlayer as Video } from 'react-html5video';
import video from '../assests/recording.mp4';
import 'react-html5video/dist/styles.css';

function ReactVideoPlayer() {
    return (
        <div style={{ display: "block", margin: "auto", alignItems: "center", height: "50rem", width: "100rem" }}>
            <Video autoplay loop >
                <source src={video} width={50}
                    height={50} type='video/webm' fluid={false} />
            </Video>
        </div>
    )
}

export default ReactVideoPlayer;