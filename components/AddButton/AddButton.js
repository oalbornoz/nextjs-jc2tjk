export default function AddButton({ onAdd }) {
  return (
    <button className="button is-success is-small" onClick={onAdd}>
      Add
    </button>
  );
}
