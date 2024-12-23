import React, { useState, useEffect } from 'react';

const AddVideo = ({ onAdd, currentVideo, onUpdate }) => {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [uploadDate, setUploadDate] = useState('');

    // Set the form fields if editing an existing video
    useEffect(() => {
        if (currentVideo.id) {
            setTitle(currentVideo.title);
            setDescription(currentVideo.description);
            setUploadDate(currentVideo.uploadDate);
        }
    }, [currentVideo]);

    const handleSubmit = (e) => {
        e.preventDefault();
        const video = { title, description, uploadDate };
        if (currentVideo.id) {
            onUpdate({ ...video, id: currentVideo.id });
        } else {
            onAdd(video);
        }
        setTitle('');
        setDescription('');
        setUploadDate('');
    };

    return (
        <div>
            <h2>{currentVideo.id ? 'Edit Video' : 'Add New Video'}</h2>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Title:</label>
                    <input
                        type="text"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                    />
                </div>
                <div>
                    <label>Description:</label>
                    <input
                        type="text"
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                    />
                </div>
                <div>
                    <label>Upload Date:</label>
                    <input
                        type="date"
                        value={uploadDate}
                        onChange={(e) => setUploadDate(e.target.value)}
                    />
                </div>
                <button type="submit">{currentVideo.id ? 'Update Video' : 'Add Video'}</button>
            </form>
        </div>
    );
};

export default AddVideo;
