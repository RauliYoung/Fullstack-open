import React from "react";

const PhoneBook = ({ persons, filter, shown }) => {
  console.log("rendered", shown);
  if (shown) {
    return (
      <div>
        {persons.map((a) => (
          <p key={a.name}>
            {a.name} {a.number}
          </p>
        ))}
      </div>
    );
  } else {
    return (
      <div>
        {filter.map((a) => (
          <p key={a.name}>
            {a.name} {a.number}
          </p>
        ))}
      </div>
    );
  }
};

export default PhoneBook;
