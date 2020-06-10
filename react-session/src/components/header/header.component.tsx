import React from "react";

const Header = ({ subtitle }) => {
  return (
    <header className="header header--main">
      <div className="container">
        <section className="logo">
          <h1 className="logo__image">œ</h1>
          <h2 className="logo__subtitle">{subtitle}</h2>
        </section>
      </div>
    </header>
  );
};

export default Header;
