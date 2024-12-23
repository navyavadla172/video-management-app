import React from 'react';
import VideoItem from './VideoItem';

const VideoList = ({ videos }) => {
    return (
        <div>
            <h2>Video List</h2>
            {videos.length > 0 ? (
                <div>
                    {videos.map((video) => (
                        <VideoItem key={video.id} video={video} />
                    ))}
                </div>
            ) : (
                <p>No videos available.</p>
            )}
        </div>
    );
};

export default VideoList;
