import React from "react";
import axios from "axios";
import {
  ProfileSkills,
  ProfileSection,
  ProfileTitle,
  ProfileList,
  ProfileItem,
  Span,
  SpanWeb,
  Skills,
  SkillTitle,
  SkillsDesc,
  Bar,
  Title,
  Perc,
  Parent,
  ChildSpan,
} from "./style.js";

class Profile extends React.Component {
  state = {
    skill: [],
  };
  componentDidMount() {
    axios.get("js/data.json").then((res) => {
      this.setState({ skill: res.data.skills });
    });
  }
  render() {
    const { skill } = this.state;

    const SkillsPar = skill.map((ele) => {
      return (
        <Bar key={ele.id}>
          <Title>{ele.title}</Title>
          <Perc>{ele.perc}</Perc>
          <Parent>
            <ChildSpan sp={ele.sp}></ChildSpan>
          </Parent>
        </Bar>
      );
    });

    return (
      <ProfileSkills>
        <div className="container">
          <ProfileSection>
            <ProfileTitle>
              <span>My </span>Profile
            </ProfileTitle>
            <ProfileList>
              <ProfileItem>
                <Span>Name</Span>
                Hamza Nabil
              </ProfileItem>
              <ProfileItem>
                <Span>Birthday</Span>
                21/1/1996
              </ProfileItem>
              <ProfileItem>
                <Span>Address</Span>
                Ain shams
              </ProfileItem>
              <ProfileItem>
                <Span>Phone</Span>
                4444 5555 6666
              </ProfileItem>
              <ProfileItem>
                <Span>Email</Span>
                hamza@hamza.com
              </ProfileItem>
              <ProfileItem>
                <Span>Website</Span>
                <SpanWeb>www.google.com</SpanWeb>
              </ProfileItem>
            </ProfileList>
          </ProfileSection>

          <Skills>
            <SkillTitle>
              Some <span>skills</span>
            </SkillTitle>
            <SkillsDesc>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos
              praesentium blanditiis esse cupiditate, omnis similique.
            </SkillsDesc>
            {SkillsPar}
          </Skills>
        </div>
      </ProfileSkills>
    );
  }
}

export default Profile;
