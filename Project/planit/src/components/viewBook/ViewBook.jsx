import React from "react";
import { useEffect, useState } from "react";
import axios from "axios";
import "../viewUsers/viewUsers.css";

function ViewBook() {
  const [book, setBooks] = useState([]);
  //  const location = useLocation();
  //  const path = location.pathname.split("/")[2];

  useEffect(() => {
    const getBooks = async () => {
      const res = await axios.get("/book/");
      setBooks(res.data);
    };
    getBooks();
  }, []);

  return (
    <>
      {book.map((person) => {
        const { name, to, from, book, amount } = person;
        // if (
        //   path ==
        //   window.location.href.split("/")[
        //     window.location.href.split("/").length - 1
        //   ]
        // ) {
        return (
          <article key={name} className="singlePostWrapper">
            <div>
              <div className="name">
                <span>name : </span>
                <h4 className="author">{name}</h4>
              </div>
              <span>From : </span>
              <h4 className="author">{from}</h4>
              <span>To : </span>
              <h4 className="author">{to}</h4>
              <span>Booked for : </span>
              <h4 className="author">{book}</h4>
              <span>Total Amount : </span>
              <h4 className="author">{amount}</h4>
              {/* <p className="info">{password}</p> */}
            </div>
          </article>
        );
        // } else {
        //   return null;
        // }
      })}
    </>
  );
}

export default ViewBook;
