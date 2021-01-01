import React from "react";
import Link from "./Link";

const Header = () => {
  return (
    <div className="ui secondary positioning menu">
      <Link href="/" className="item">
        Home
      </Link>
      <Link href="/mobile" className="item">
        Mobile
      </Link>
      <Link href="/tablet" className="item">
        Tablet
      </Link>
      <Link href="/others" className="item">
        Others
      </Link>
    </div>
  );
};

export default Header;
