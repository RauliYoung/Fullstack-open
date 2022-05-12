import React, { useState, useEffect } from "react";
import axios from "axios";

//filternames ei toimi koska ei muka saa oikeata listaa mapattavaksi.

const FilterNames = (props) => {
  const shown = props.shown;
  const names = props.countries;
  const filtered = props.filtered;
  console.log(filtered);
  if (shown) {
    return (
      <div>
        {names.map((c) => (
          <p key={c.latlng}> {c.name.common}</p>
        ))}
      </div>
    );
  } else {
    if (filtered.length >= 10) {
      return (
        <div>
          <p>Too many matches, give a more specific name!</p>
        </div>
      );
    }
    return (
      <div>
        {filtered.map((c) => (
          <p key={c.latlng}> {c.name.common}</p>
        ))}
      </div>
    );
  }
};

const App = () => {
  const [countries, setCountries] = useState([]);
  const [filter, setFilter] = useState([]);
  const [shown, setShown] = useState(false);

  const onChangeHandler = (event) => {
    nameIsInList(event);
    event.preventDefault();
  };
  const nameIsInList = (event) => {
    setShown(false);
    let name = event.target.value;
    setFilter(countries.filter((p) => p.name.common.includes(name)));
    if (!name) {
      setShown(true);
    }
  };

  useEffect(() => {
    console.log("Fetching info...");
    axios.get("https://restcountries.com/v3.1/all").then((response) => {
      console.log("Loaded countries..");
      setCountries(response.data);
    });
  }, []);

  return (
    <div>
      <form>
        Find Countries: <input onChange={onChangeHandler}></input>
      </form>
      <div>
        <FilterNames countries={countries} filtered={filter} shown={shown} />
      </div>
    </div>
  );
};

export default App;
