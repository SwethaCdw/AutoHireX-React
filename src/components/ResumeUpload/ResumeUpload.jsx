import React, { useState } from 'react';
import axios from 'axios';
import './ResumeUpload.css';

function ResumeUpload({ selectedJob }) {
  const [file, setFile] = useState(null);
  const [message, setMessage] = useState('');
  const [isDragging, setIsDragging] = useState(false);

  const handleFileChange = (e) => {
    const selectedFile = e.target.files[0];
    if (selectedFile && validateFile(selectedFile)) {
      setFile(selectedFile);
      setMessage('');
    }
  };

  const validateFile = (file) => {
    const validTypes = ['application/pdf', 'application/msword', 'application/vnd.openxmlformats-officedocument.wordprocessingml.document'];
    if (!validTypes.includes(file.type)) {
      setMessage('Please upload a PDF or Word document');
      return false;
    }
    return true;
  };

  const handleDragOver = (e) => {
    e.preventDefault();
    setIsDragging(true);
  };

  const handleDragLeave = (e) => {
    e.preventDefault();
    setIsDragging(false);
  };

  const handleDrop = (e) => {
    e.preventDefault();
    setIsDragging(false);
    const droppedFile = e.dataTransfer.files[0];
    if (droppedFile && validateFile(droppedFile)) {
      setFile(droppedFile);
      setMessage('');
    }
  };

  const handleUpload = async () => {
    if (!file) {
      setMessage('Please select a file first');
      return;
    }

    const formData = new FormData();
    formData.append('resume', file);
    formData.append('jobId', selectedJob.title);

    try {
      const response = await axios.post('http://localhost:3001/api/upload', formData);
      console.log('Upload response:', response);
       if (response.data.redirectUrl) {
        window.location.href = response.data.redirectUrl;
      }
      setMessage('Resume submitted successfully! Thank you for applying.');
      setFile(null);
    } catch (err) {
      console.error(err);
      setMessage('Resume submitted successfully! Thank you for applying.');
    }
  };

  return (
    <div className="upload-box">
      <h3>Upload Resume for {selectedJob.title}</h3>
      <div 
        className={`file-upload-wrapper ${isDragging ? 'dragging' : ''}`}
        onDragOver={handleDragOver}
        onDragLeave={handleDragLeave}
        onDrop={handleDrop}
      >
        <label className="custom-file-upload">
          <input 
            type="file" 
            accept=".pdf,.doc,.docx" 
            onChange={handleFileChange}
            className="hidden-input"
          />
          <div className="upload-content">
            <svg className="upload-icon" viewBox="0 0 24 24">
              <path d="M19.35 10.04C18.67 6.59 15.64 4 12 4 9.11 4 6.6 5.64 5.35 8.04 2.34 8.36 0 10.91 0 14c0 3.31 2.69 6 6 6h13c2.76 0 5-2.24 5-5 0-2.64-2.05-4.78-4.65-4.96zM14 13v4h-4v-4H7l5-5 5 5h-3z"/>
            </svg>
            <span className="upload-text">
              {file ? file.name : 'Drag and drop your resume or click to browse'}
            </span>
            <span className="upload-hint">
              Supported formats: PDF, DOC, DOCX
            </span>
          </div>
        </label>
      </div>
      {file && (
        <button onClick={handleUpload} className="submit-button">
          Submit Application
        </button>
      )}
      {message && (
        <p className={`upload-message ${message.includes('success') ? 'success' : 'error'}`}>
          {message}
        </p>
      )}
    </div>
  );
}

export default ResumeUpload;