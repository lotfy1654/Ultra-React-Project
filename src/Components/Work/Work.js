import React from "react";
import axios from "axios";
import {
  WorkSection,
  WorkTitle,
  Span,
  Part,
  Icon,
  PartTitle,
  Line,
  PartDesc,
} from "./style.js";

class Work extends React.Component {
  state = {
    works: [],
  };

  componentDidMount() {
    axios.get("js/data.json").then((res) => {
      this.setState({ works: res.data.works });
    });
  }
  render() {
    const { works } = this.state;

    const WorksList = works.map((ele) => {
      return (
        <Part frist={ele.id} key={ele.id}>
          <Icon className={ele.icon_name}></Icon>
          <PartTitle>{ele.title}</PartTitle>
          <Line />
          <PartDesc>{ele.body}</PartDesc>
        </Part>
      );
    });

    return (
      <WorkSection className="work">
        <div className="container">
          <WorkTitle className="work-title">
            <Span>My</Span> Work
          </WorkTitle>
          {WorksList}
        </div>
      </WorkSection>
    );
  }
}

export default Work;
