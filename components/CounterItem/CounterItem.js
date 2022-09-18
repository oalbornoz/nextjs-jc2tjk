export default function CounterItem({ value, id, onIncrement, onDecrement }) {
  return (
    <div className="counter">
      <b>{value}</b>
      <div className="counter-controls">
        <button
          className="button is-danger is-small"
          onClick={() => onDecrement(id)}
        >
          -
        </button>
        <button
          className="button is-success is-small"
          onClick={() => onIncrement(id)}
        >
          +
        </button>
      </div>
    </div>
  );
}
