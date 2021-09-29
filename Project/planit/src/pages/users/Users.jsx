import React from "react";
import ViewUsers from "../../components/viewUsers/ViewUsers";

function Users() {
  return (
    <section className="wrapper">
      <div className="head">
        <h2>Users</h2>
        <div className="underline"></div>
      </div>
      <ViewUsers />
    </section>
  );
}

export default Users;
