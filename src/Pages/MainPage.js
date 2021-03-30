import React from "react";
import {
  Popup,
  Rating,
  Card,
  Header,
  Icon,
  Image,
  Divider,
  Container,
  Segment,
  Grid,
  Button,
} from "semantic-ui-react";
import IconOutline from "../Components/IconOutline";
import GooeyReact from "../OuterComponents/GooeyReact";
import pdf from "../Documents/RonanAlmeidaResume.pdf";
import top from "../project_images/bettertop1.svg"
function MainPage() {
  const style = {
    h1: {
      fontSize: "3em",
    },
    background: {
      backgroundColor: "#FFF2",
    },
    icon: {
      margin: "1rem",
    },
    h2: {
      fontSize: "1.5rem",
      marginLeft: "1rem",
      marginRight: "1rem",
    },
    h2Custom: {
      fontSize: "1.5rem",
      marginLeft: "1rem",
      marginRight: "1rem",
      marginTop: "5.3em",
    },
  };
  function onResumeClick() {
    window.open(pdf);
  }
  return (
    <div>

      <Image width="100%" height="100%"centered src={top}></Image>
      <GooeyReact style={style.h1} />
      <Header
        as="h1"
        content="Ronan Almeida"
        // subheader="Welcome to my personal website 👋🏾"
        style={style.h1}
        textAlign="center"
        size="huge"
      />
      <Header textAlign="center" sub>
      {/* Aspiring Software Engineer */}
      Computer Science @ Queen's University
      {/* Computer Science at Queen's University */}
      </Header>
      <Header
        as="h1"
        style={style.h2}
        // subheader="Passionate about combining impactful software and algorithmic thinking to deliver effective user solutions  "
        subheader="Passionate about product development and creating well rounded modern applications"
        textAlign="center"
      />
      <Header textAlign="center"              >
        <IconOutline
          name="file alternate"
          content="Resume"
          // href=""
          // target=""
          popupContent="RonanAlmeidaResume.pdf"
          iconClick={onResumeClick}
        />

        <IconOutline
          name="linkedin"
          content="LinkedIn"
          popupContent="/in/RonanAlmeida"
          href="https://www.linkedin.com/in/ronanalmeida/"
        />
        <IconOutline
          name="github"
          content="Github"
          popupContent="/RonanAlmeida"
          href="https://github.com/RonanAlmeida"
        />
        <IconOutline
          name="mail"
          content="Email"
          popupContent="ronan.almeida@queensu.ca"
          href="mailto: ronan.almeida@queensu.ca"
        />
      </Header>

      <Divider horizontal>
      <Header style={{margin:"0em",padding:"0em"}}textAlign="center" sub>VIEW Projects</Header>
        <Header as="h1">
          <Icon style={{
          animation: "MoveUpDown 2.7s linear infinite",
          marginTop: "0em",
          margin:"0em",
          textAlign: "center",
          padding:"0em"
          // position: "absolute",
          // left: "0",
          // bottom: "0"
        }} name="angle down" inverted color="black"></Icon>
        </Header>
        
      </Divider>
    </div>
  );
}

export default MainPage;
