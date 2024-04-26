import React from "react";

export default function Form({ GetInput }) {
  return (
    <form onSubmit={GetInput}>
      <div>
        <label>Email</label>
        <input type="text" id="email" />
      </div>
      <div>
        <label>Password</label>
        <input type="password" id="password" />
      </div>

      <button type="submit">Login</button>
    </form>
  );
}
