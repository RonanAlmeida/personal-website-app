import React from "react";
import { Card, Icon, Label, Image, Popup, Button } from "semantic-ui-react";

function ProjectCard(props) {
  // const contextRef = React.useRef();
  const skills = [];

  for (var i = 0; i < props.footer.length; i++) {
    console.log(props.footer[i]);
    skills.push(<Label  style={{marginTop:'3px'}}color={props.footer[i][1]}>{props.footer[i][0]}</Label>);
  }
  return (
    <div>
      {/* <Popup
        trigger={ */}
      <Card fluid color="blue">
        <Image src={props.img} wrapped ui={false} />
        <Card.Content>
          <Card.Header>{props.name}</Card.Header>
          <Card.Meta>{props.subheader}</Card.Meta>
          <Card.Description>{props.desc}</Card.Description>
        </Card.Content>

        <Card.Content extra>{skills}</Card.Content>
        {/* <strong ref={contextRef}></strong> */}
        <Button.Group>
          <Button color="blue">
            <Icon name="linkify" /> View
          </Button>

          <Button color="black">
            <Icon name="github" /> Github
          </Button>
        </Button.Group>
      </Card>
      {/* }
        offset="0, 0px"
        position="right center"
        // context={contextRef}
      >
        <Popup.Header>Github Link</Popup.Header>
        <Popup.Content>View</Popup.Content>
      </Popup> */}
    </div>
  );
}

export default ProjectCard;
