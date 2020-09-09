import React, { useState } from "react";
import { Header, Icon, Popup } from "semantic-ui-react";

function IconOutline(props) {
  //React hooks for hover css options
  const [inHover, setHover] = useState(false);

  const style = {
    icon: {
      margin: "3rem",
      backgroundColor: "#fff",
      textAlign: "center",
    },
    iconHover: {
      margin: "3rem",
      backgroundColor: "#fff",
    },
  };

  return (
    <Popup
     
      trigger={
        <a target="_blank" href={props.href} onClick={props.iconClick}>
          <Header as="h5" style={style.icon} icon>
            <Icon
            
              inverted
              color="black"
              name={props.name}
              size="huge"
              onMouseEnter={() => setHover(true)}
              onMouseLeave={() => setHover(false)}
            />
          </Header>
        </a>
      }
      content={props.content}
      position="bottom center"
      inverted
    />
  );
}
export default IconOutline;
