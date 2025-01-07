import React from "react";
import "./Card.css";

// children props

// if you have same styling for something then you can wrap them in a div to do that you need to use props.children if you not use that the style not apply

// and if you want to add classed to that wrapper component then you need to explicitly add the classes by using props.className

function Card(props) {
  const classes = "card " + props.className;
  return <div className={classes}>{props.children}</div>;
}

export default Card;
