const person = {
  name: "가양역 1번출구 이푸름",
  theme: {
    backgroundColor: "black",
    color: "pink",
  },
};

const TodoList = ({}) => (
  <div style={person.theme}>
    <h1 style={{ fontSize: "32px" }}>{person.name}'s Today</h1>
    <img
      className="avatar"
      src="https://i.imgur.com/MK3eW3As.jpg"
      alt={person.name}
    ></img>
  </div>
);

export default TodoList;
