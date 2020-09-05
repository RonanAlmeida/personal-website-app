import React from "react";
import { Card, Icon, Label, Image, Popup, Button } from "semantic-ui-react";

function ProjectCard(props) {
  // const contextRef = React.useRef();

  return (
    <div>
      <Popup
        trigger={
          <Card fluid color={props.color}>
            <Image src={props.img} wrapped ui={false} />
            <Card.Content>
              <Card.Header>{props.name}</Card.Header>
              <Card.Meta>{props.subheader}</Card.Meta>
              <Card.Description>{props.desc}</Card.Description>
            </Card.Content>

            <Card.Content extra>
              {" "}
              <Label color="green">Python </Label>{" "}
              <Label color="yellow">Javascript </Label>{" "}
              <Label color="blue">Django </Label>{" "}
              <Label color="red">SQL </Label>
              <Label color="orange">JQuery </Label>    <Label color="purple">Bootstrap</Label>  {props.footer}
            </Card.Content>
            {/* <strong ref={contextRef}></strong> */}
            <Button color='blue'> View </Button>
          </Card>
        }
        offset="0, 0px"
        position="right center"
        // context={contextRef}
      >
        <Popup.Header>Github Link</Popup.Header>
        <Popup.Content>View</Popup.Content>
      </Popup>
    </div>
  );
}

export default ProjectCard;
