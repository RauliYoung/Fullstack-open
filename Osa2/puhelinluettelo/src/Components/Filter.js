const Filter = ({ persons }) => (
  <div>
    {persons.map((a) => (
      <p key={a.name}>
        {a.name} {a.number}
      </p>
    ))}
  </div>
);

export default Filter;
