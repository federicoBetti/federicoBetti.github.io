import React, { Component } from "react";
import Zmage from "react-zmage";
import Fade from "react-reveal";

let id = 0;
class Portfolio extends Component {
  render() {
    if (!this.props.data) return null;

    const projects = this.props.data.projects.map(function (projects) {
      let projectImage = "images/portfolio/" + projects.image;

      return (
        <div key={id++} className="item row portfolio-elements">
            <a class="five columns" href="https://doi.org/10.1016/j.future.2021.10.007">
            <img class="img-responsive project-image rounded shadow-sm" src={projectImage} alt="Distributed workflows with Jupyter" />
            </a>
        <div class="seven columns">
            <a href="https://doi.org/10.1016/j.future.2021.10.007"><h3 class="title">{projects.title}</h3></a>
            <p class="justify">{projects.category}</p>
            <p class="no-margin"><a class="more-link" href={projects.url} target="_blank"><i class="fa fa-external-link"></i> Find out more</a></p>
        </div>
        </div>
      );

    });

    return (
      <section id="portfolio">
        <Fade left duration={1000} distance="40px">
          <div className="content">
          <div className="item row portfolio-elements">
            <div className="twelve columns">
                <h2>Latest Public Projects</h2>
            </div>
          </div>
            {projects}
          </div>
        </Fade>
      </section>
    );
  }
}

export default Portfolio;

/*


      return (
        <div key={id++} className="columns portfolio-item">
          <div className="item-wrap">
            <Zmage alt={projects.title} src={projectImage} />
            <div style={{ textAlign: "center" }}>{projects.title}</div>
          </div>
        </div>
      );


 <section id="portfolio">
        <Fade left duration={1000} distance="40px">
          <div className="row">
            <div className="twelve columns collapsed">
              <h1>Check Out Some of My Works.</h1>

              <div
                id="portfolio-wrapper"
                className="bgrid-quarters s-bgrid-thirds cf"
              >
                {projects}
              </div>
            </div>
          </div>
        </Fade>
      </section>
      */