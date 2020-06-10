import React from "react";

interface FooterProps {
  copyright: string;
}

const Footer: React.FC<FooterProps> = ({ copyright }) => {
  return (
    <footer className="footer footer--main">
      <small>{copyright}</small>
    </footer>
  );
};

export default Footer;
