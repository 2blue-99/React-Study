export default function Toolbar({
  onPlayMovie,
  onUploadImage,
}: {
  onPlayMovie: () => void;
  onUploadImage: () => void;
}) {
  return (
    <div onClick={() => alert("부모")}>
      <Button title="안녕" onClick={onPlayMovie}>
        play movie
      </Button>
      <Button title="안녀어어엉" onClick={onUploadImage}>
        play movie
      </Button>
    </div>
  );
}

function Button({
  title,
  onClick,
  children,
}: {
  title: string;
  onClick: () => void;
  children: React.ReactNode;
}) {
  return (
    <button
      onClick={(e) => {
        e.stopPropagation(); // 부모쪽으로 이벤트 전파 방지
        e.preventDefault(); // 기본 동작 막기. 예시로 인풋창에 엔터누르면 리로드되는거
        alert(title);
      }}
    >
      {children}
    </button>
  );
  //   return <button onClick={onClick}>{children}</button>;
}
