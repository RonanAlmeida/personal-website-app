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

import s from "../project_images/shopapp1.png";
import s2 from "../project_images/shopapp2.png";
import s3 from "../project_images/shopapp3.png";
import c1 from "../project_images/chess1.png";
import c2 from "../project_images/chess2.png";
import c3 from "../project_images/chess3.png";
import i1 from "../project_images/IMGP1.png";
import i2 from "../project_images/IMGP2.png";
import i3 from "../project_images/IMGP3.png";
import i4 from "../project_images/IMGP4.png";
import i5 from "../project_images/IMGP5.png";
import a1 from "../project_images/admin1.png";
import a2 from "../project_images/admin2.png";
import a3 from "../project_images/admin3.png";
import a4 from "../project_images/admin4.png";
import p1 from "../project_images/piz1.png";
import p2 from "../project_images/piz2.png";
import p3 from "../project_images/piz3.png";
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
        {/* <Grid.Column>
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
        </Grid.Column> */}
        {/* trm app */}
        {/* <Grid.Column>
          <ProjectCard
            key="2"
            color="blue"
            img={[c1,c2,c3]}
            subheader="Private Web App"
            desc="  description"
            footer={[
              ["Python", "blue"],
              ["Django", "green"],
              ["Javascript", "yellow"],
              ["SQL", "red"],
              ["Azure", "blue"],
              ["JQuery", "orange"],
              // ["Bootstrap", "purple"],
            ]}
            name="TRM Dashboard"
          ></ProjectCard>
        </Grid.Column> */}
        <Grid.Column>
          <ProjectCard
            key="3"
            color="yellow"
            img={[s,s2,s3]}
            subheader="Mini Web Apps"
            desc="A collection of my  small react projects. Includes ReactShop, Blog and more to come!"
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
            img={[a3,a1,a2,a4]}
            subheader="Windows Application"
            desc="  description"
            footer={[
              ["C#", "blue"],
              [".NET Framework", "orange"],
              ["Windows App", "green"],
            ]}
            name="Student Administrative System"
          ></ProjectCard>
        </Grid.Column>
        <Grid.Column>
          <ProjectCard
            key="4"
            color="green"
            img={[i2,i1,i3,i4,i5]}
            subheader="Windows Application"
            desc="  description"
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
            key="6"
            color="black"
            img={[c1,c2,c3]}
            subheader="Terminal App"
            desc="  description"
            footer={[
              ["C#", "blue"],
              ["Terminal", "red"],
              [".NET Core", "orange"],
            ]}
            name="Console Chess"
          ></ProjectCard>
        </Grid.Column>
        <Grid.Column>
          <ProjectCard
            key="5"
            color="purple"
            img={[p1,p2,p3]}
            subheader="Java GUI"
            desc="  description"
            footer={[
              ["Java", "yellow"],
              ["JUnit Testing", "blue"],
              ["JavaFX", "green"],["Object Oriented Design", "red"]
            ]}
            name="Pizza Ordering System"
          ></ProjectCard>
        </Grid.Column>
      </Grid>
    </div>
  );
}

export default MainPage;
