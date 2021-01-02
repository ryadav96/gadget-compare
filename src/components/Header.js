import React from "react";
import Link from "./Link";
import "./../style.css";

const Header = () => {
  return (
    <div className="ui label icon menu">
      <Link href="/" className="item">
        <i className="home icon margin-right-5"></i>
        Home
      </Link>
      <Link href="/mobile" className="item">
        <i className="mobile icon margin-right-5"></i>
        Mobile
      </Link>
      <Link href="/tablet" className="item">
        <i className="tablet icon margin-right-5"></i>
        Tablet
      </Link>
      <Link href="/others" className="item">
        <i className="ellipsis horizontal icon margin-right-5"></i>
        Others
      </Link>
    </div>
  );
};

export default Header;
