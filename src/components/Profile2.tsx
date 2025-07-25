const person = {
  name: "가양역 1번출구 이푸름",
  theme: {
    backgroundColor: "black",
    color: "pink",
  },
};

const Profile2 = () => (
  <Card>
    <Avatar
      size={150}
      person={{
        name: "kaka",
        imageId: "aa",
      }}
    />
  </Card>
);

export default Profile2;

function Avatar({
  person,
  size,
}: {
  person: { name: string; imageId: string };
  size: number;
}) {
  return (
    <img
      className="avatar"
      src="https://i.imgur.com/MK3eW3As.jpg"
      alt={person.name}
      width={size}
      height={size}
    />
  );
}

function Card({ children }: { children: React.ReactNode }) {
  return <div className="card">{children}</div>;
}
