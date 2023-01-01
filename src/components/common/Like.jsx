import React from 'react';
import 'font-awesome/css/font-awesome.css';

// When converting class-based to sfc
// Get rid of 'this' references and instead pass in props
const Like = (props) => {
  if(props.like) {
    return <i style={{cursor: 'pointer'}} onClick={props.onClick} className="fa fa-heart" aria-hidden="true"></i>;
  }

  return <i style={{cursor: 'pointer'}} onClick={props.onClick} className="fa fa-heart-o" aria-hidden="true"></i>;
}

export default Like;