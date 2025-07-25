export default function List() {
  const people = ["a", "b", "c"];
  const listItems = people.map((name) => (
    <li key={name}>
      <img src="https://i.imgur.com/MK3eW3As.jpg" alt={name} />
      <p>
        <b>{name}:</b>
        {" " + name + " "}
        known for {name}
      </p>
    </li>
  ));

  return (
    <article>
      <h1>Scientists</h1>
      <h1>{listItems}</h1>
    </article>
  );
}
