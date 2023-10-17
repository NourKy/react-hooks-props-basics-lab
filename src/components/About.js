import React from "react";
import Links  from "./Links";
function About(props) {
  const bio=props.bio;

  return (
    
    <div id="about">
      <h2>About Me</h2>
      {bio && bio!=""&&<p>{bio}</p>}
     
      <img src="https://i.imgur.com/mV8PQxj.gif" alt="I made this" />
      <Links linkedin={props.linkedin} github={props.github}></Links>
      {/* add your <Links /> component here */}
    </div>
  );
}

export default About;
