import React, { Component } from "react";
import Slide from "react-reveal";

class Resume extends Component {
  getRandomColor() {
    let letters = "0123456789ABCDEF";
    let color = "#";
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }

  render() {
    if (!this.props.data) return null;

    const skillmessage = this.props.data.skillmessage;
    const education = this.props.data.education.map(function (single_education) {
      var mark = "";
      if (single_education.grade) {
            mark = <><span>&bull;</span> <em className="date">{single_education.grade}</em></>;
        } 
      return (
        <div key={single_education.school}>
          <h3>{single_education.degree}</h3>
          <p className="info">
            {single_education.school} 
            <span>&bull;</span> <em className="date">{single_education.graduated}</em>
            {mark}
          </p>
        </div>
      );
    });

    const publications = this.props.data.publications.map(function (publications) {
      return (
        <div key={publications.title}>
          <a href={publications.link}><h3>{publications.title}</h3></a>
          <p className="info info-regular">
            {publications.authors} 
            <span>&bull;</span> <em className="date">{publications.conference}</em>
          </p>
        </div>
      );
    });

    const work = this.props.data.work.map(function (work) {
      return (
        <div key={work.company}>
          <h3>{work.title}</h3>
          <p className="info">
            {work.company}
            <span>&bull;</span> <em className="date">{work.years}</em>
          </p>
          <p className="justify">{work.description}</p>
        </div>
      );
    });
    

    const experience = this.props.data.experience.map(function (experience) {
      return (
        <div key={experience.name}>
          <h3>{experience.name}</h3>
          <p className="info">
          <em className="date">{experience.years}</em>
          </p>
          <p className="justify">{experience.description}</p>
        </div>
      );
    });


    const skills = this.props.data.skills.map(function (skill_set) {

      return (
        <div key={skill_set.title}>
          <h3>{skill_set.title}</h3>
          <p className="info info-regular ">
          {skill_set.specific_skill
              .map(t => t.name)
              .reduce((prev, curr)  => [prev, (<span>&bull;</span>), curr])}
          </p>
        </div>
      );
    });

    return (
      <section id="resume">
        
        <Slide left duration={1300}>
          <div className="row work">
            <div className="three columns header-col">
              <h1>
                <span>Work</span>
              </h1>
            </div>

            <div className="nine columns main-col">{work}</div>
          </div>
        </Slide>

        <Slide left duration={1300}>
          <div className="row education">
            <div className="three columns header-col">
              <h1>
                <span>Education</span>
              </h1>
            </div>

            <div className="nine columns main-col">
              <div className="row item">
                <div className="twelve columns">{education}</div>
              </div>
            </div>
          </div>
        </Slide>

        <Slide left duration={1300}>
          <div className="row publications">
            <div className="three columns header-col">
              <h1>
                <span>Publications</span>
              </h1>
            </div>

            <div className="nine columns main-col">
              <div className="row item">
                <div className="twelve columns">{publications}</div>
              </div>
            </div>
          </div>
        </Slide>

        
        <Slide left duration={1300}>
          <div className="row experience">
            <div className="three columns header-col">
              <h1>
                <span>Experience</span>
              </h1>
            </div>

            <div className="nine columns main-col">{experience}</div>
          </div>
        </Slide>

        <Slide left duration={1300}>
          <div className="row skill">
            <div className="three columns header-col">
              <h1>
                <span>Skills</span>
              </h1>
            </div>

            <div className="nine columns main-col">
              <div>
                <ul className="skills">{skills}</ul>
              </div>
            </div>
          </div>
        </Slide>
      </section>
    );
  }
}


export default Resume;
