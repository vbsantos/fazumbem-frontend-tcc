import React from "react";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <ul>
      <li>
        <Link to="/login">Login</Link>
      </li>
      <li>
        <Link to="/register">Cadastro</Link>
      </li>
    </ul>
  );
}
