import React from "react";
import { Popup, Card, Image, Icon,Button, Rating } from "semantic-ui-react";

const style = {
  card: { margin: "2em" },
};
const ProjectCard = () => (
  <Popup trigger={<Button>jo</Button>} position="right center">
    <Popup.Header>User Rating</Popup.Header>
    <Popup.Content>
      <Rating icon="star" defaultRating={3} maxRating={4} />
    </Popup.Content>
  </Popup>
);

export default ProjectCard;
