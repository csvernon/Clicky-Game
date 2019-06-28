import React from "react";

//this component is only rendering the images to the screen and can be a simple render function it is a
//stateless component
const Character = props => (
  <div className="card img-container hover">
      <img alt={props.name} src={props.image} id={props.id}
        onClick={() => props.shuffleScoreCharacter(props.id)} className='shuffleScore'/>
  </div>
);

export default Character;