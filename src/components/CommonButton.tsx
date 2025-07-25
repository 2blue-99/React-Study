const CommonButton = ({
  count = 0,
  title = "Button",
  onclickButton,
}: {
  count?: number;
  title: string;
  onclickButton: () => void;
}) => (
  <button onClick={onclickButton}>
    {title}
    {count}
  </button>
);

export default CommonButton;
