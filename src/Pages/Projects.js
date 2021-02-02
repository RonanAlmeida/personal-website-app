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
import CustomCard from "../Components/CustomCard";

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
import sp1 from "../project_images/sp1.png";
import sp2 from "../project_images/sp2.png";
import sp3 from "../project_images/sp3.png";
import sp4 from "../project_images/sp4.png";

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
          <CustomCard
            key="3"
            color="yellow"
            img={[sp1, sp3, sp2,sp4]}
            subheader="Web Application"
            desc="Developing a full-stack web app that uses the Spotify Web API to compare two different artists, albums, or songs. The app makes a backend API request to the Spotify server which retrieves  profile information, images, and statistics."

            weblink="https://ronanalmeida.github.io/higher-lower-stats/"
            footer={[
              
              ["React.js", "red"],
              ["Spotify Web API", "green"],
              ["Javascript", "yellow"],
              ["Node.js", "orange"],
              ["Axios", "purple"],
              ["Semantic UI", "blue"],
             
            ]}
            name="
💽 Spotify Higher or Lower"
          ></CustomCard>
        </Grid.Column>
        <Grid.Column>
          <ProjectCard
            key="3"
            color="yellow"
            img={[s, s2, s3]}
            subheader="Web Application"
            desc="Moblie React shopping site that uses the core react components and designed with Tailwind CSS. The app makes an API request to a server that retrieves product listings to be displayed within the app.
"
            gitlink="https://github.com/RonanAlmeida/ReactProjects"
            footer={[
              ["Javascript", "yellow"],
              ["React.js", "red"],
              ["Node.js", "green"],
              ["Router", "blue"],
              ["Axios", "purple"],
              ["Hooks", "olive"],
              ["Tailwind CSS", "green"],
            ]}
            name="
            🛒 Shop App"
          ></ProjectCard>
        </Grid.Column>
        <Grid.Column>
          <ProjectCard
            key="4"
            color="green"
            img={[a3, a1, a2, a4]}
            subheader="Windows Application"
            desc="Built a student manager that allows teachers to edit, add & delete student information. Connected through 
            an Access Database which utilizes varying SQL queries to alter student data. "
            footer={[
              ["C#", "blue"],
              ["SQL", "red"],
              ["Access Database", "yellow"],
              [".NET Framework", "orange"],
              ["Windows Forms", "green"],
            ]}
            name="📚 Administrative System"
            gitlink="https://github.com/RonanAlmeida/StudentAdminSystem"
          ></ProjectCard>
        </Grid.Column>
        <Grid.Column>
          <ProjectCard
            key="4"
            color="green"
            img={[i2, i1, i3, i4, i5]}
            subheader="Windows Application"
            desc="Windows Application that modifies user uploaded images based on varying selections. The image modifications can be stacked on top of one another and can saved in differing resolutions.
            "
            footer={[
              ["C#", "blue"],
              [".NET Framework", "orange"],
              ["Windows Forms", "green"],
            ]}
            gitlink="https://github.com/RonanAlmeida/ImageProcessing"
            name="
            🖼️ Image Processing"
          ></ProjectCard>
        </Grid.Column>

        <Grid.Column>
          <ProjectCard
            key="6"
            color="black"
            img={[c1, c2, c3]}
            subheader="Terminal App"
            desc="Created a local multiplayer chess game in a console form factor. Programmed entirely on pure C#.
            "
            footer={[
              ["C#", "blue"],
              ["Terminal", "red"],
              [".NET Core", "orange"],
            ]}
            gitlink="https://github.com/RonanAlmeida/ConsoleChess"
            name="♟️ Console Chess"
          ></ProjectCard>
        </Grid.Column>
        {/* <Grid.Column>
          <ProjectCard
            key="5"
            color="purple"
            img={[p1, p2, p3]}
            subheader="JavaFX GUI"
            desc="Built a JavaFX GUI that allows users to order a customizable pizza. The Application follows object-oriented design principles along with strict JUnit testing.
            "
            footer={[
              ["Java", "yellow"],
              ["JUnit Testing", "blue"],
              ["JavaFX", "green"],
              ["Object Oriented Design", "red"],
            ]}
            gitlink="https://github.com/RonanAlmeida/PizzaOrderingSystem"
            name="Pizza Ordering System"
          ></ProjectCard>
        </Grid.Column> */}
      </Grid>
    </div>
  );
}

export default MainPage;
