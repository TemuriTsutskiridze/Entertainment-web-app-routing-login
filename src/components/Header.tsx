import React from "react";
import { Link } from "react-router-dom";

const navArr = ["home", "movies", "tv-series", "bookmarks"];

export default function Header() {
  return (
    <div>
      <nav>
        <ul>
          {navArr.map((page, index) => {
            return (
              <Link to={`/${page}`} key={index}>
                <li>{page}</li>
              </Link>
            );
          })}
        </ul>
      </nav>
    </div>
  );
}
