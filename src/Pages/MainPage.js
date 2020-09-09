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
import pdf from "../Documents/RonanAlmeidaAug2020.pdf";

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
      <GooeyReact style={style.h1} />
      <Header
        as="h1"
        content="Ronan Almeida"
        subheader="Welcome to my personal website 👋🏾"
        style={style.h1}
        textAlign="center"
        size="huge"
      />
      <Header textAlign="center" sub>
        Software Engineer
      </Header>
      <Header
        as="h1"
        style={style.h2}
        subheader="Passionate about combing impactful software and algorithmic thinking to deliver effective user solutions"
        textAlign="center"
      />
      <Header textAlign="center">
        <IconOutline
          name="file alternate"
          content="Resume"
          // href=""
          // target=""
          iconClick={onResumeClick}
        />

        <IconOutline
          name="linkedin"
          content="LinkedIn"
          href="https://www.linkedin.com/in/ronanalmeida/"
        />
        <IconOutline
          name="github"
          content="Github"
          href="https://github.com/RonanAlmeida"
        />
        <IconOutline
          name="mail"
          content="Email"
          href="mailto: ronan.almeida@queensu.ca"
        />
      </Header>

      <Divider horizontal>
        <Header as="h1">
          <Icon name="angle down" inverted color="black"></Icon>
        </Header>
      </Divider>
    </div>
  );
}

export default MainPage;
