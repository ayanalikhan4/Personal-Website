// components/AboutMe.tsx

import React from "react";

const AboutMe: React.FC = () => {
  return (
    <div className="bg-[#ffffff] rounded-3xl shadow-xl overflow-hidden text-black p-6 md:p-10">
      <h2 className="text-3xl font-semibold mb-4 animated-gradient-text">
        About Me
      </h2>
      <p className="mb-4">
        Hey! I’m Ayan, a senior majoring in Computer Science and Mathematics. I
        like to build stuff on the internet. My interests span anywhere from web
        development to Artificial Intelligence. I am consistently eager to
        acquire new knowledge.
      </p>

      <h3 className="text-2xl font-semibold mb-4 animated-gradient-text">
        Beyond School
      </h3>
      <p className="mb-4">
        In my free time, I love cooking and have recently taken up sewing.
        Traveling is a passion of mine, as it allows me to explore new cultures
        and places. I also enjoy playing football, which helps me stay active
        and healthy. Engaging in debates is another interest of mine, as it
        sharpens my critical thinking skills. Additionally, photography is one
        of my favorite hobbies, and I occasionally enjoy reading books as well.
      </p>
    </div>
  );
};

export default AboutMe;
