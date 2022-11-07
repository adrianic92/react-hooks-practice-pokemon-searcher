import React, {useState} from "react";
import { Form } from "semantic-ui-react";

function PokemonForm( { addNewPokemon }) {
  const [newName, setNewName] = useState("")
  const [newHp, setNewHp] = useState("")
  const [newFrontUrl, setNewFrontUrl] = useState("")
  const [newBackUrl, setNewBackUrl] = useState("")
  
  function handleSubmit() {
    const newPokemon = {
      name: newName,
      hp: newHp,
      sprites: {
        front: newFrontUrl,
        back: newBackUrl
      }
    }
    fetch("http://localhost:3001/pokemon", {
      method: "POST",
      headers: {
        "Content-Type" : "application/json"
      },
      body: JSON.stringify(newPokemon)
    })
    .then(resp => resp.json())
    .then( data => addNewPokemon(data) )
  }



  return (
    <div>
      <h3>Add a Pokemon!</h3>
      <Form onSubmit={handleSubmit}>
        <Form.Group widths="equal">
          <Form.Input fluid label="Name" placeholder="Name" name="name" value={newName} onChange={ e => setNewName(e.target.value) } />
          <Form.Input fluid label="hp" placeholder="hp" name="hp" value={newHp} onChange={ e => setNewHp(e.target.value) } />
          <Form.Input
            fluid
            label="Front Image URL"
            placeholder="url"
            name="frontUrl"
            value={newFrontUrl}
            onChange={ e => setNewFrontUrl(e.target.value) }
          />
          <Form.Input
            fluid
            label="Back Image URL"
            placeholder="url"
            name="backUrl"
            value={newBackUrl}
            onChange={ e => setNewBackUrl(e.target.value) }
          />
        </Form.Group>
        <Form.Button>Submit</Form.Button>
      </Form>
    </div>
  );
}

export default PokemonForm;
