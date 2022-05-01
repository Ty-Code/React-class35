export default function Category({ title, selectCategory }) {
  return (
    <span className="categories--item" onClick={selectCategory}>
      {title}
    </span>
  );
}
