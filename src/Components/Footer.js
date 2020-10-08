import React from "react";
import { Container, List, Icon } from "semantic-ui-react";
import pdf from "../Documents/RonanAlmeidaResume.pdf";

function Footer() {
  const Item = {
    // position: "fixed",
    bottom: "0",
    textAlign: "center",
    marginTop: "10em",
    marginBottom: "1em",
  };

  // return <div style={Item}>Designed and Developed by Ronan Almeida ©
  // </div>;
  function onResumeClick() {
    window.open(pdf);
  }
  return (
    <Container style={Item} textAlign="center">
      {/* <Divider inverted section /> */}
      {/* <Image src="/logo.png" centered size="mini" /> */}
      <List horizontal divided link size="small">
        <List.Item as="a">Designed and Developed by Ronan Almeida ©</List.Item>
        <List.Item
          as="a"
          target="_blank"
          onClick={onResumeClick}
        >
          <Icon color="black" size="small" name="file alternate" />
          Resume
        </List.Item>

        <List.Item
          as="a"
          target="_blank"
          href="https://github.com/RonanAlmeida"
        >
          <Icon color="black" size="small" name="github" />
          Github
        </List.Item>

        <List.Item
          as="a"
          target="_blank"
          href="https://www.linkedin.com/in/ronanalmeida/"
        >
          {" "}
          <Icon color="black" size="small" name="linkedin" />
          LinkedIn
        </List.Item>
        <List.Item
          as="a"
          target="_blank"
          href="mailto: ronan.almeida@queensu.ca"
        >
          <Icon color="black" size="small" name="mail" />
          Email
        </List.Item>
      </List>
    </Container>
  );
}
export default Footer;
