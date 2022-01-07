import React from "react";
import axios from "axios";
import {
  SocialMedia,
  Social,
  Icon,
  SocialP,
  PaSpan,
  SpanInfo,
} from "./style.js";

class Socialm extends React.Component {
  state = {
    social: [],
  };

  componentDidMount() {
    axios.get("js/data.json").then((res) => {
      this.setState({
        social: res.data.social,
      });
    });
  }

  render() {
    const { social } = this.state;

    const SocialList = social.map((ele) => {
      return (
        <Social item={ele.id} key={ele.id}>
          <Icon className={ele.icon}></Icon>
          <SocialP>
            <PaSpan>{ele.title}</PaSpan>
            <SpanInfo>{ele.body}</SpanInfo>
          </SocialP>
        </Social>
      );
    });

    return <SocialMedia>{SocialList}</SocialMedia>;
  }
}

export default Socialm;
