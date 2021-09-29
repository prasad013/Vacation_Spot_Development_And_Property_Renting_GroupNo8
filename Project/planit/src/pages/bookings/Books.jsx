import React from "react";
import ViewBook from "../../components/viewBook/ViewBook";

function Books() {
  return (
    <section className="wrapper">
      <div className="head">
        <h2>Bookings</h2>
        <div className="underline"></div>
      </div>
      <ViewBook />
    </section>
  );
}

export default Books;
