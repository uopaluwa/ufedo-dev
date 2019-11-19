import React from "react"
import { FiTwitter, FiGithub, FiLinkedin } from "react-icons/fi"

const SocialIcons = () => (
  <div className="flex mt-4 text-purple-700">
    <span className="pr-6 text-3xl"> 
      <a href="https://www.linkedin.com/in/ufedojoopaluwa/" target="_blank" rel="noopener noreferrer">
        <FiLinkedin />
      </a>
    </span> 
    <span className="pr-6 text-3xl">
      <a href="https://github.com/uopaluwa" target="_blank" rel="noopener noreferrer">
        <FiGithub /> 
      </a>
    </span>
    <span className="pr-6 text-3xl">
      <a href="https://twitter.com/Ufedo_opals" target="_blank" rel="noopener noreferrer">
        <FiTwitter /> 
      </a>
    </span>
  </div>
);

export default SocialIcons;
