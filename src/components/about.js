import React from "react"
import Image from "./image"
import SocialIcons from "./social"

const About = () => (
  <div className="">
    <div style={{ maxWidth: `140px` }} className="mb-4">
      <Image />
    </div>
    <p className="text-4xl">
      Hi{" "}
      <span role="img" aria-label="waving hand">
        👋🏼
      </span>      
    </p>
    <p className="text-purple-700 text-4xl -mt-2">I'm Ufedo.</p>
    <p className="mb-2">
      Welcome to my space on the web. I’m a Software developer mostly focused on
      the web. I speak JavaScript, Ruby and some Python but these are just tools. More importantly,
      I'm a problem solver and life long learner able to adapt to the best tool for the job.
    </p>
    <p className="mb-2">
      I enjoy working on products and tools that enable
      people and businesses be more productive and efficient. I’m always
      thinking; how can I automate this, how can I make this process easier, 
      how can I enable people to create, express their creativity and get things done.
    </p>
    <p className="mb-2">
      I’ve worked with companies like HappyMoney, Parkloco building products and
      solutions to delight users.
    </p>
    <p className="mb-2">
      Amongst other things, I’m a pround uncle, Arsenal <span role="img" aria-label="loudly crying face">😭</span> 
      and Warriors fan. When I'm not coding, I enjoy watching movies, reading, occasional gaming,
      a good time out + good food.
    </p>
    <SocialIcons />
  </div> 
);

export default About;
