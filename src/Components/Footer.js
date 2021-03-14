import React from "react";
import { Container, List, Icon, Segment } from "semantic-ui-react";
import pdf from "../Documents/RonanAlmeidaResume.pdf";

function Footer() {
  const Item = {
    // position: "fixed",
    bottom: "0",
    textAlign: "center",
    marginTop: "10em",
    marginBottom: "3em",
  };

  // return <div style={Item}>Designed and Developed by Ronan Almeida ©
  // </div>;
  function onResumeClick() {
    window.open(pdf);
  }
  return (
    // <List.Item as="a">Designed and Developed by Ronan Almeida ©</List.Item>

    <Segment
      inverted
      style={{ margin: "5em 0em 0em", padding: "0.5em 0em" }}
      vertical
    >
      <Container textAlign="center">
        {/* <Divider inverted section /> */}
        {/* <Image src="/logo.png" centered size="mini" /> */}
        <List horizontal inverted divided link size="small">
          <List.Item as="a" target="_blank" href="https://ronan.tech/">
            Designed and Developed by Ronan Almeida ©
          </List.Item>

          <List.Item as="a" target="_blank" onClick={onResumeClick}>
            <Icon  size="small" name="file alternate" />
            Resume
          </List.Item>
          <List.Item
            as="a"
            target="_blank"
            href="https://www.linkedin.com/in/ronanalmeida/"
          >
            {" "}
            <Icon size="small" name="linkedin" />
            LinkedIn
          </List.Item>
          <List.Item
            as="a"
            target="_blank"
            href="mailto: ronan.almeida@queensu.ca"
          >
            <Icon size="small" name="mail" />
            Email
          </List.Item>

          <List.Item
            as="a"
            target="_blank"
            href="https://github.com/RonanAlmeida"
          >
            <Icon  size="small" name="github" />
            Github
          </List.Item>
        </List>
      </Container>
    </Segment>
  );
}
export default Footer;
