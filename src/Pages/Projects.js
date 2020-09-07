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
      // fontSize: "1.5rem",
      // marginLeft: "1rem",
      // marginRight: "1rem",
      marginTop: "5.3em",
      marginBottom: "1em",
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
            key="1"
            color="red"
            img="https://via.placeholder.com/1920x800.png"
            subheader="React SQL Javascript"
            desc=" A repository dedicated to continually solving"
            footer={[
              ["Javascript", "yellow"],
              ["React.js", "red"],
              ["Node.js", "green"],
              ["Router", "blue"],
              ["Springs", "purple"],
              ["Hooks", "olive"],
            ]}
            name="Movie Reccomender"
          ></ProjectCard>
        </Grid.Column>
        <Grid.Column>
          <ProjectCard
            key="2"
            color="blue"
            img="https://via.placeholder.com/1920x800.png"
            subheader="Private Web App"
            desc=" desc of item  haha  ls- sojfsojf osjfosjefojso"
            footer={[
              ["Python", "blue"],
              ["Django", "green"],
              ["Javascript", "yellow"],
              ["SQL", "red"],
              ["Azure", "blue"],
              ["JQuery", "orange"],
              ["Bootstrap", "purple"],
            ]}
            name="TRM Dashboard"
          ></ProjectCard>
        </Grid.Column>
        <Grid.Column>
          <ProjectCard
            key="3"
            color="yellow"
            img="https://via.placeholder.com/1920x800.png"
            subheader="React SQL Javascript"
            desc=" desc of item  haha  ls- sojfsojf osjfosjefojso"
            footer={[
              ["Javascript", "yellow"],
              ["React.js", "red"],
              ["Node.js", "green"],
              ["Router", "blue"],
              ["Springs", "purple"],
              ["Hooks", "olive"],
              ["Tailwind CSS", "green"],
            ]}
            name="React Apps"
          ></ProjectCard>
        </Grid.Column>
        <Grid.Column>
          <ProjectCard
            key="4"
            color="green"
            img="https://via.placeholder.com/1920x800.png"
            subheader="React SQL Javascript"
            desc=" desc of item  haha  ls- sojfsojf osjfosjefojso"
            footer={[
              ["C#", "blue"],
              [".NET Framework", "orange"],
              ["Windows App", "green"],
            ]}
            name="Image Processing"
          ></ProjectCard>
        </Grid.Column>
        <Grid.Column>
          <ProjectCard
            key="5"
            color="purple"
            img="https://via.placeholder.com/1920x800.png"
            subheader="React SQL Javascript"
            desc=" desc of item  haha  ls- sojfsojf osjfosjefojso"
            footer={[
              ["Java", "yellow"],
              ["JUnit Testing", "blue"],
              ["JavaFX", "green"],
            ]}
            name="Pizza Ordering System"
          ></ProjectCard>
        </Grid.Column>
        <Grid.Column>
          <ProjectCard
            key="6"
            color="black"
            img="https://via.placeholder.com/1920x800.png"
            subheader="React SQL Javascript"
            desc=" desc of item  haha  ls- sojfsojf osjfosjefojso"
            footer={[
              ["C#", "blue"],
              ["Terminal", "red"],
              [".NET Core", "orange"],
            ]}
            name="Console Chess"
          ></ProjectCard>
        </Grid.Column>
      </Grid>
     
  
    </div>
  );
}

export default MainPage;
