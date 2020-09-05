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
import ProjectCard from "../Components/ProjectCard";

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
      textAlign: "center",
    },
  };
  return (
    <div>
      <Header
        as="h1"
        style={style.h2Custom}
        content="Projects"
        textAlign="center"
      />

      <Grid container columns={2} stackable>
        <Grid.Column>
          <ProjectCard
            color="red"
            img="https://via.placeholder.com/1920x800.png"
            subheader="React SQL Javascript"
            desc=" desc of item  haha  ls- sojfsojf osjfosjefojso"
            footer="django php databases"
            name="Movie Reccomender"
          ></ProjectCard>
        </Grid.Column>
        <Grid.Column>
          <ProjectCard
            color="blue"
            img="https://via.placeholder.com/1920x800.png"
            subheader="Web App"
            desc=" desc of item  haha  ls- sojfsojf osjfosjefojso"
            footer=""
            name="TRM Dashboard"
          ></ProjectCard>
        </Grid.Column>
        <Grid.Column>
          <ProjectCard
            color="yellow"
            img="https://via.placeholder.com/1920x800.png"
            subheader="React SQL Javascript"
            desc=" desc of item  haha  ls- sojfsojf osjfosjefojso"
            footer="django php databases"
            name="React Apps"
          ></ProjectCard>
        </Grid.Column>
        <Grid.Column>
          <ProjectCard
            color="green"
            img="https://via.placeholder.com/1920x800.png"
            subheader="React SQL Javascript"
            desc=" desc of item  haha  ls- sojfsojf osjfosjefojso"
            footer="django php databases"
            name="Image Processing"
          ></ProjectCard>
        </Grid.Column>
        <Grid.Column>
          <ProjectCard
            color="purple"
            img="https://via.placeholder.com/1920x800.png"
            subheader="React SQL Javascript"
            desc=" desc of item  haha  ls- sojfsojf osjfosjefojso"
            footer="django php databases"
            name="JavaFX Pizza System"
          ></ProjectCard>
        </Grid.Column>
        <Grid.Column>
          <ProjectCard
            color="black"
            img="https://via.placeholder.com/1920x800.png"
            subheader="React SQL Javascript"
            desc=" desc of item  haha  ls- sojfsojf osjfosjefojso"
            footer="django php databases"
            name="Console Chess"
          ></ProjectCard>
        </Grid.Column>
      </Grid>
    </div>
  );
}

export default MainPage;
