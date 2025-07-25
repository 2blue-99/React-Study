function Item({ name, isPacked }: { name: string; isPacked: boolean }) {
  return (
    <li className="item">
      {name} {isPacked && "gimotti"}
    </li>
  );
}

const PackingList = () => (
  <section>
    <h1>Sally Ride's Packing List</h1>
    <ul>
      <Item name="ㅇㅇ" isPacked={true}></Item>
      <Item name="ㅇㅇ" isPacked={false}></Item>
      <Item name="ㅇㅇ" isPacked={true}></Item>
    </ul>
  </section>
);

export default PackingList;
