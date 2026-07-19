export default function SearchBar({ value, onChange }) {
  return (
    <label className="search-field">
      <span>Search inventory</span>
      <input
        type="search"
        value={value}
        onChange={(event) => onChange(event.target.value)}
        placeholder="Name or category"
      />
    </label>
  );
}
