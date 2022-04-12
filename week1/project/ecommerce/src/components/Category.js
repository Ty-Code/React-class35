export default function Category({ title, filterProducts }) {
  return (
    <span className="categories--item" onClick={filterProducts}>
      {title}
    </span>
  );
}
