export default function SearchBox({ value, onFilter }) {
  return (
    <div>
      <h2>Find contacts by name</h2>
      <input
        type="text"
        value={value}
        onChange={(e) => onFilter(e.target.value)}
      />
    </div>
  );
}
