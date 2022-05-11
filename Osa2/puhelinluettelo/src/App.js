import React, { useState } from "react";

import Filter from "./Components/Filter";
import PhoneBook from "./Components/PhoneBook";
import AddPerson from "./Components/AddPerson";

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
    {
      name: "Jooseppi Kekomaa",
      number: "02 4444 2122",
    },
  ]);
  const [newName, setNewName] = useState("");
  const [newNumber, setNewNumber] = useState("");
  const [shown, setShown] = useState(true);
  const [filtered, setFiltered] = useState([]);

  const handleNewName = (event) => {
    console.log(event.target.value);
    setNewName(event.target.value);
  };

  const handleNewNumber = (event) => {
    console.log(event.target.value);
    setNewNumber(event.target.value);
  };

  const handleFilter = (event) => {
    onkoNimi(event);
    event.preventDefault();
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
  };

  const onkoNimi = (event) => {
    setShown(false);
    let nimi = event.target.value;
    setFiltered(
      persons.filter((p) => p.name.toLowerCase().includes(nimi.toLowerCase()))
    );
    if (!nimi) {
      setShown(true);
    }
  };

  return (
    <div>
      <h2>Phonebook</h2>
      <Filter handleFilter={handleFilter} />
      <h2>add a new</h2>
      <AddPerson
        addPerson={addPerson}
        newName={newName}
        handleNewName={handleNewName}
        newNumber={newNumber}
        handleNewNumber={handleNewNumber}
      />
      <h2>Numbers</h2>
      <PhoneBook persons={persons} shown={shown} filter={filtered} />
    </div>
  );
};

export default App;
