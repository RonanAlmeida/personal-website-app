import React from "react";
import {
  Card,
  Icon,
  Header,
  Label,
  Image,
  Popup,
  Button,
} from "semantic-ui-react";
import SlideImages from "./SlideImages";

import { Modal } from "react-bootstrap";

function MyVerticallyCenteredModal(props) {
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header  closeButton>
        <Modal.Title  id="contained-modal-title-vcenter">
          <Header
            as="h4"
            content={props.header}    
            textAlign="center"
            size="medium"
            style={{}}
          />
          {/* <Card.Header textAlign="center">{props.header}</Card.Header> */}
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>{props.carimg}</Modal.Body>
      <Modal.Footer>
        <Button color="black" onClick={props.onHide}>
          Close
        </Button>
      </Modal.Footer>
    </Modal>
  );
}

function ProjectCard(props) {
  // const contextRef = React.useRef();
  const skills = [];
  const [modalShow, setModalShow] = React.useState(false);

  for (var i = 0; i < props.footer.length; i++) {
    skills.push(
      <Label
        key={skills.toString()}
        style={{ marginTop: "3px", textAlign: "center" }}
        color={props.footer[i][1]}
      >
        {props.footer[i][0]}
      </Label>
    );
  }
  return (
    <div>
      {/* <Popup
        trigger={ */}
      <Card fluid color="blue">
        {/* <Image src={props.img} wrapped ui={false} /> */}
        <SlideImages img={props.img} />
        <Card.Content>
          <Card.Header textAlign="center">{props.name}</Card.Header>
          <Card.Meta textAlign="center">{props.subheader}</Card.Meta>
          <Card.Description textAlign="center">{props.desc}</Card.Description>
        </Card.Content>

        <Card.Content textAlign="center" extra>
          {skills}
        </Card.Content>
        {/* <strong ref={contextRef}></strong> */}

        <Button.Group>
          <Button onClick={() => setModalShow(true)} color="blue">
            <Icon name="images" /> View
          </Button>

          <Button target="_blank" href={props.gitlink} color="black">
            <Icon name="github" /> Github
          </Button>
        </Button.Group>
      </Card>

      <MyVerticallyCenteredModal
        show={modalShow}
        onHide={() => setModalShow(false)}
        header={props.name}
        carimg={<SlideImages img={props.img} />}
      />
    </div>
  );
}

export default ProjectCard;
