import React from 'react';
import './JobList.css';
const jobs = [
  { 
    id: 1, 
    title: 'Frontend Developer',
    image: '/images/front-end.png',
    description: 'Create beautiful user interfaces with modern technologies'
  },
  { 
    id: 2, 
    title: 'Backend Developer',
    image: '/images/back-end.png',
    description: 'Build robust server-side applications and APIs'
  },
  { 
    id: 3, 
    title: 'Full Stack Developer',
    image: '/images/full-stack.png',
    description: 'Develop end-to-end solutions across the technology stack'
  },
  // { 
  //   id: 4, 
  //   title: 'AI Engineer',
  //   image: '/images/full-stack.png',
  //   description: 'AI engineer with AI skills'
  // },
];

//TODO: Uncomment if necessary
// async function callCandidate() {
//    try {
//       const res = await fetch('http://localhost:3001/api/amazon/call', {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify({
//           phoneNumber: '+12162205269',
//           attributes: {
//             CandidateName: 'Swetha',
//           },
//         }),
//       });

//       if (!res.ok) {
//         throw new Error(`HTTP error! status: ${res.status}`);
//       }

//       const data = await res.json();
//       console.log('Call initiated:', data);
//     } catch (err) {
//       console.error('Call failed:', err);
//     } 

// }

function JobList({ onJobClick }) {
  return (
    <div className="job-list">
      <h2 className="section-title">Available Career Opportunities at CDW</h2>
      <div className="job-cards">
        {jobs.map((job) => (
          <div 
            key={job.id} 
            className="job-card"
            onClick={() => onJobClick(job)}
          >
            <div className="card-image">
              <img src={job.image} alt={job.title} />
            </div>
            <div className="card-content">
              <h3>{job.title}</h3>
              <p>{job.description}</p>
            </div>
          </div>
        ))}
      </div>
      {/* <button className='button' onClick={() => callCandidate()}>Call Candidate</button> */}
    </div>
  );
}

export default JobList;
