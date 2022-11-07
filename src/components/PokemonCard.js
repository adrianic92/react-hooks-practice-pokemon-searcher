import React, {useState} from "react";
import { Card } from "semantic-ui-react";

function PokemonCard( {id, name, hp, front, back } ) {
  const [face, setFace] = useState(true)
  
  function flip() {
    setFace(face => !face)
  }
  
  return (
    <Card>
      <div>
        <div className="image">
          <img alt={name} src={face? front : back} onClick={flip}/>
        </div>
        <div className="content">
          <div className="header">{name}</div>
        </div>
        <div className="extra content">
          <span>
            <i className="icon heartbeat red" />
            {hp}
          </span>
        </div>
      </div>
    </Card>
  );
}

export default PokemonCard;
