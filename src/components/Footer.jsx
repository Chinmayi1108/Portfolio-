import React from 'react';

export default function Footer() {
  return (
    <footer className="container">
      <p>&copy; {new Date().getFullYear()} — Built with structural precision in React.</p>
    </footer>
  );
}