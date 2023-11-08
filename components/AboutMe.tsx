// components/AboutMe.tsx

import React from 'react';

const AboutMe: React.FC = () => {
  return (
    <div className="bg-[#1E1E1E] rounded-3xl shadow-xl overflow-hidden text-white p-6 md:p-10">
      <h2 className="text-3xl font-semibold mb-4 animated-gradient-text">About Me</h2>
      <p className="mb-4">
        I'm a dedicated Computer Science student at Wilfrid Laurier University, with an expected graduation in April 2026. 
        My academic journey is marked by a Laurier Entrance Scholarship, a testament to my commitment to excellence. 
        My academic interests are deeply rooted in the realms of Artificial Intelligence and Machine Learning, 
        which align with my passion for technology and innovation.
      </p>
      
      <h3 className="text-2xl font-semibold mb-4 animated-gradient-text">My Passion</h3>
      <p className="mb-4">
        From a young age, technology has been at the core of my world. I remember the 
        thrill of programming my first line of code and the satisfaction of solving 
        complex problems. This passion has evolved into a career path where I blend 
        technical expertise with strategic thinking. My experience as a Software 
        Engineer Intern and a Marketing & Strategy Collaborator has equipped 
        me with a unique perspective on how technology can be leveraged to drive 
        business success. I believe that my quick learning curve and inquisitive nature 
        are my greatest assets, enabling me to thrive in any role I take on.
      </p>
      
      <h3 className="text-2xl font-semibold mb-4 animated-gradient-text">In my free time</h3>
      <p className="mb-4">
        Beyond the screen, I immerse myself in the world of aviation, recreationaly flying 
        RC planes that soar the skies. My interest in fitness takes me on adventures from 
        weightlifting to hiking, embracing the strength and resilience of the body and mind. 
        I'm also an avid cook, exploring flavors and cuisines that tantalize the palate. 
        My commitment to community shines through my involvement with Engage & Change, where I
        raise money to build survival kits for the homeless to use during the winter.
      </p>
      
      <p>
        My journey so far has been a blend of academic rigor, professional growth, and personal 
        hobbies that reflect my multifaceted personality. Whether it's contributing to hackathons, 
        developing innovative projects, or engaging in extracurricular activities, I am always 
        on the lookout for new challenges and opportunities to make a positive impact through technology.
      </p>
    </div>
  );
};

export default AboutMe;
