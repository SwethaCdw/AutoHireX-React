import React, { useState } from 'react';
import JobList from './components/JobList/JobList';
import ResumeUpload from './components/ResumeUpload/ResumeUpload';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import './App.css';

function App() {
  const [selectedJob, setSelectedJob] = useState(null);

  return (
    <div className="app-container">
      <Header />
      <main className="main-content">
        <JobList onJobClick={setSelectedJob} />
        {selectedJob && (
          <ResumeUpload selectedJob={selectedJob} />
        )}
      </main>
      <Footer />
    </div>
  );
}

export default App;
