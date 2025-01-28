import React, { useEffect, useState } from 'react';
import phoneIcon from '../assets/telephone-removebg-preview.PNG';
import gmailIcon from '../assets/gmail-removebg-preview.png';
import githubIcon from '../assets/github-removebg-preview.png';
import linkedinIcon from '../assets/linkedin-removebg-preview.png';

export default function Resume() {
  // -- THEME TOGGLING LOGIC --

  // State to store the current theme: 'dark' or 'light'
  const [theme, setTheme] = useState('dark');

  // On component mount, check localStorage for previously saved theme
  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
      setTheme(savedTheme);
      document.body.classList.add(savedTheme === 'dark' ? 'dark-theme' : 'light-theme');
    } else {
      // Default to dark
      document.body.classList.add('dark-theme');
    }
  }, []);

  // Function to handle toggling
  const handleThemeToggle = () => {
    // Remove the old theme class from body
    document.body.classList.remove(theme === 'dark' ? 'dark-theme' : 'light-theme');

    // Compute new theme
    const newTheme = theme === 'dark' ? 'light' : 'dark';
    setTheme(newTheme);

    // Add the new theme class to body
    document.body.classList.add(newTheme === 'dark' ? 'dark-theme' : 'light-theme');

    // Store in localStorage
    localStorage.setItem('theme', newTheme);
  };

  return (
    <div className="container">
      <div className="header">
        <h1>Rudrax Sharad</h1>
        <div className="header-icons">
          <a href="tel:+61424552808" aria-label="Call Rudrax">
            <img src={phoneIcon} alt="Phone Icon" />
          </a>

          {/* Gmail */}
          <a
            href="https://mail.google.com/mail/u/0/?view=cm&fs=1&to=rudraxrishu@gmail.com"
            target="_blank"
            rel="noreferrer"
            aria-label="Send Email via Gmail"
          >
            <img src={gmailIcon} alt="Gmail Icon" />
          </a>

          {/* GitHub */}
          <a
            href="https://github.com/rudrax2506"
            target="_blank"
            rel="noreferrer"
            aria-label="GitHub Profile"
          >
            <img src={githubIcon} alt="GitHub Icon" />
          </a>

          {/* LinkedIn */}
          <a
            href="https://www.linkedin.com/in/rudrax-sharad/"
            target="_blank"
            rel="noreferrer"
            aria-label="LinkedIn Profile"
          >
            <img src={linkedinIcon} alt="LinkedIn Icon" />
          </a>
        </div>

        {/* Theme Toggle Button */}
        <button className="theme-toggle" onClick={handleThemeToggle}>
          {theme === 'dark' ? 'Switch to Light Theme' : 'Switch to Dark Theme'}
        </button>
      </div>

      <div className="section">
        <h2>Professional Summary</h2>
        <p>
          Enthusiastic and adaptable professional seeking work experience in the field of IT.
          I thrive in both team and independent work environments, aiming to contribute effectively
          to the workplace. Flexible and committed to adhering to the requirements and regulations
          of any given work setting. Being an army brat, I am always punctual and organized in all
          that I do. Overall, I assure you that I will be an asset to your organization.
        </p>
      </div>

      <div className="section">
        <h2>Technical Skills</h2>
        <ul>
          <li><strong>Programming Languages:</strong> Java, Python, C#, C++</li>
          <li><strong>Web Development:</strong> MERN Stack, HTML, CSS, JavaScript, RESTful APIs</li>
          <li><strong>Database Management:</strong> SQL, MongoDB, Neo4J, MySQL, XAMPP</li>
          <li>
            <strong>Data Science & Analysis:</strong> Data Visualization (Matplotlib),
            Machine Learning, Data Cleaning
          </li>
          <li><strong>Data Analysis & Tools:</strong> Big Data, Data Analytics, Power BI, Excel</li>
          <li>
            <strong>Development Practices:</strong> Agile Methodology, Documentation, Collaboration & Communication
          </li>
        </ul>
      </div>

      <div className="section">
        <h2>Education & Certifications</h2>
        <ul>
          <li>
            <div className="edu-item-header">
              <strong>Bachelor of Information Technology</strong>
              <span className="edu-dates">Feb 2023 – June 2025</span>
            </div>
            <div>Federation University Australia</div>
          </li>
          <li>
            <div className="edu-item-header">
              <strong>The Web Developer Bootcamp 2024</strong>
            </div>
            <div>Udemy</div>
          </li>
        </ul>
      </div>

      <div className="section">
        <h2>Core Competencies</h2>
        <ul>
          <li>Team Collaboration</li>
          <li>Problem-Solving</li>
          <li>Communication Skills</li>
          <li>Multitasking</li>
          <li>Time Management</li>
          <li>Attention to Detail</li>
          <li>Customer Service Excellence</li>
          <li>Data Entry</li>
          <li>Phone Etiquette</li>
        </ul>
      </div>

      <div className="section work-experience">
        <h2>Work Experience</h2>
        <ul>
          <li>
            <div className="job-header">
              <strong>Retail Sales Assistant (Supercheap Auto)</strong>
              <span className="job-dates">July 2024 – Present</span>
            </div>
            <ul>
              <li>Provide exceptional customer service.</li>
              <li>Assist customers with vehicle-related queries.</li>
              <li>Answer customer calls, resolve inquiries promptly, and ensure high satisfaction.</li>
            </ul>
          </li>

          <li>
            <div className="job-header">
              <strong>Retail Team Member (Coles Group)</strong>
              <span className="job-dates">June 2022 – Present</span>
            </div>
            <ul>
              <li>Assist customers with product-related queries and manage checkouts.</li>
              <li>Stock shelves and maintain organized aisles.</li>
              <li>Sort products in a logical sequence for their respective aisles.</li>
            </ul>
          </li>

          <li>
            <div className="job-header">
              <strong>Console Operator/Storeperson (On The Run Pty. Ltd.)</strong>
              <span className="job-dates">May 2024 – Aug 2024</span>
            </div>
            <ul>
              <li>Provided exceptional customer service.</li>
              <li>Operated the POS system.</li>
              <li>Maintained high store standards through effective merchandising.</li>
            </ul>
          </li>

          <li>
            <div className="job-header">
              <strong>Admin/Customer Service Assistant (Dumra Consulting Adelaide)</strong>
              <span className="job-dates">Nov 2022 – Mar 2024</span>
            </div>
            <ul>
              <li>Maintained client records and performed follow-ups.</li>
              <li>Scheduled appointments and responded to customer queries.</li>
              <li>Drafted letters and reports.</li>
              <li>Performed data entry with speed and accuracy.</li>
            </ul>
          </li>
        </ul>
      </div>

      <div className="section">
        <h2>References</h2>
        <ul>
          <li>
            Pankaj Dumra | Managing Director | Dumra Consulting |
            Phone:{' '}
            <a href="tel:+61415932170">0415932170</a>
          </li>
          <li>
            Varun Bhardwaj | Lead Quality Engineer | Commonwealth Bank |
            Phone:{' '}
            <a href="tel:+61481846220">0481846220</a>
          </li>
        </ul>
      </div>
    </div>
  );
}
