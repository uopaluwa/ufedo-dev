import React from "react"
import { FiTwitter, FiGithub, FiLinkedin } from "react-icons/fi"
import { FaTwitter, FaGithub, FaLinkedin } from "react-icons/fa"

const SocialIcons = ({ iconType }) => {
  const iconSize = iconType === "solid" ? 'text-2xl' : 'text-3xl';
  return (
    <div className="mt-4 text-purple-700">
      <span className={`inline-block mr-6 ${iconSize}`}> 
        <a href="https://www.linkedin.com/in/ufedojoopaluwa/" target="_blank" rel="noopener noreferrer">
          { iconType === "solid" ? <FaLinkedin/> :<FiLinkedin />}
        </a>
      </span> 
      <span className={`inline-block mr-6 ${iconSize}`}>
        <a href="https://github.com/uopaluwa" target="_blank" rel="noopener noreferrer">
          { iconType === "solid" ? <FaGithub/> :<FiGithub />} 
        </a>
      </span>
      <span className={`inline-block mr-6 ${iconSize}`}>
        <a href="https://twitter.com/Ufedo_opals" target="_blank" rel="noopener noreferrer">
          { iconType === "solid" ? <FaTwitter/> :<FiTwitter />}
        </a>
      </span>
    </div>
  )
};

export default SocialIcons;
