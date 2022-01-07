import React from "react";
import {
  Creative,
  CreativeInfo,
  InfoTitle,
  Span,
  InfoDir,
  InfoDesc,
  A,
} from "./style.js";

function About() {
  return (
    <Creative>
      <div class="container">
        <CreativeInfo>
          <InfoTitle>
            <Span>This is</Span> Me
          </InfoTitle>
          <InfoDir>Creative Director</InfoDir>
          <InfoDesc>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Enim est{" "}
            <A href="#">explicabo</A> maxime quibusdam quaerat nihil aliquid
            aperiam deleniti, repellendus dolorum. Possimus nisi cupiditate ad
            veritatis?
          </InfoDesc>
          <InfoDesc>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Enim est
            explicabo maxime quibusdam quaerat nihil aliquid aperiam deleniti,
            repellendus dolorum. Possimus nisi cupiditate ad veritatis?
          </InfoDesc>
        </CreativeInfo>
      </div>
    </Creative>
  );
}

export default About;
