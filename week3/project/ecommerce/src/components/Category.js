export default function Category({ title, selectCategory, selectedCategory }) {
  return (
    <span
      className={`${title === selectedCategory ? 'categories--item selected' : 'categories--item' } `}
      onClick={selectCategory}
    >
      {title}
    </span>
  );
}
