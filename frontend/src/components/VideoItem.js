import React from 'react';

const VideoItem = ({ video, onDelete, onEdit }) => {
    return (
        <div className="video-item">
            <h3>{video.title}</h3>
            <p>{video.description}</p>
            <p>Uploaded on: {new Date(video.uploadDate).toLocaleDateString()}</p>
            <button onClick={() => onEdit(video.id)}>Edit</button>
            <button onClick={() => onDelete(video.id)}>Delete</button>
        </div>
    );
};

export default VideoItem;
