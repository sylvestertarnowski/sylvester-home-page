import React from 'react';
import './Contact.css';
import { LinkedIn, Email, GitHub } from '@material-ui/icons';

const Contact: React.FC<any> = () => {
  return (
    <div>
      <h1>Places you can find me:</h1>
      <h2>
        <a
          href="https://www.linkedin.com/in/sylvestertarnowski/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <LinkedIn /> Connect with me on LinkedIn
        </a>
      </h2>
      <h2>
        <a href="mailto:sylwek.tarnowski@gmail.com">
          <Email /> Send me an Email
        </a>
      </h2>
      <h2>
        <a
          href="https://github.com/sylvestertarnowski"
          target="_blank"
          rel="noopener noreferrer"
        >
          <GitHub /> Check out my GitHub profile
        </a>
      </h2>
    </div>
  );
};

export default Contact;
