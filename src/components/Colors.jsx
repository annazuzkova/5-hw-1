export const Colors = ({ colors }) => {
  return (
    <ul className="books__list">
      {colors.map((color) => (
        <li class={color}>{color}</li>
      ))}
    </ul>
  );
};
