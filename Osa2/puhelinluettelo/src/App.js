import React, { useState } from "react";
import Filter from "./Components/Filter";

const App = () => {
  const [persons, setPersons] = useState([
    {
      name: "Janne Ahonen",
      number: "0400 12341234",
    },
    {
      name: "Kalle Kiviaho",
      number: "050 12340988",
    },
    {
      name: "Mari Kiviniemi",
      number: "02 3233 2320",
    },
  ]);
  const [newName, setNewName] = useState("");
  const [newNumber, setNewNumber] = useState("");
  const [newFilter, setNewFilter] = useState("");

  const handleNewName = (event) => {
    console.log(event.target.value);
    setNewName(event.target.value);
  };

  const handleNewNumber = (event) => {
    console.log(event.target.value);
    setNewNumber(event.target.value);
  };

  const handleFilter = (event) => {
    console.log(event.target.value);
    event.preventDefault();
    setNewFilter(event.target.value);
    return (
      <div>
        <Filter persons={handleFilter} />
      </div>
    );
    persons.filter((p) => p.name);
  };

  const addPerson = (event) => {
    event.preventDefault();
    const person = {
      name: newName,
      number: newNumber,
    };
    !persons.find((p) => p.name === newName)
      ? setPersons(persons.concat(person))
      : alert(`${newName} is already added in the phonebook`);
    setNewName("");
    setNewNumber("");
    console.log(person);
  };

  return (
    <div>
      <h2>Phonebook</h2>
      <div>
        filter shown with <input value={newFilter} onChange={handleFilter} />
      </div>
      <h2>add a new</h2>
      <form onSubmit={addPerson}>
        <div>
          name: <input value={newName} onChange={handleNewName} />
          <div>
            number: <input value={newNumber} onChange={handleNewNumber} />
          </div>
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      <Filter persons={persons} />
    </div>
  );
};

export default App;
