import { Children } from 'react';

export default function BasicButton({ onClick, children }) {
  return (
    <button className="button is-success is-small" onClick={onClick}>
      {children}
    </button>
  );
}
