import React from "react";
import { images } from "../../constants";
import { AppWrap, MotionWrap } from "../../wrapper";
import "./About.scss";

const About = () => {
  return (
    <div>
      <div className="container ">
        <div className="info__container ">
          <h1 className="head-text ">About</h1>
          <h2>Who I Am</h2>
          <p>
            My name is Yash. I am a Front-End Developer with experience
            specializing in web development, user interface design, cross
            browser development, app maintenance and data migration. Adept at
            identifying opportunities to enhance front-end design and improve
            the user experience.
          </p>
          <p>
            I specialize in building mobile responsive front-end UI applications
            that connect with API’s and other backend technologies. I’m
            passionate about learning new technologies and understand there is
            more than one way to accomplish a task. Though I am most proficient
            in building front-end applications using HTML, CSS, Javascript, and
            React, I am a quick learner and can pick up new tech stacks as
            needed. I believe that being a great developer is not using one
            specific language, but choosing the best tool for the job.
          </p>
          <div>
            <a className="btn__link" href="#contact">
              Lets Talk
            </a>
          </div>
        </div>
        <div className="image__container ">
          <img src={images.yash} alt="/" />
        </div>
      </div>
    </div>
  );
};

export default AppWrap(MotionWrap(About, ""), "about", "app__primarybg");
