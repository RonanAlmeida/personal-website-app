import React from "react";
import { Button, Header, Icon, Modal } from "semantic-ui-react";
import IconOutline from "./IconOutline";

function ModalPopup() {
  const [open, setOpen] = React.useState(false);

  return (
      
    <Modal
      size="mini"
      onClose={() => setOpen(false)}
      onOpen={() => setOpen(true)}
      open={open}
      trigger={
        
        <Header as="h5" icon>
          <Icon inverted color="black" name="file alternate" size="huge" />
        </Header>
        // <IconOutline  name="file alternate"
        // content="Resume" ></IconOutline>
      }
    >
      <Modal.Header>Email</Modal.Header>
      <Modal.Content>
        <p>ronanalmeida@queensu.ca</p>
      </Modal.Content>
      <Modal.Actions>
        <Button color="blue" onClick={() => setOpen(false)}>
          Copy
        </Button>
        <Button color='black' positiveonClick={() => setOpen(false)}>Mail To</Button>
      </Modal.Actions>
    </Modal>
  
  );
}

export default ModalPopup;
