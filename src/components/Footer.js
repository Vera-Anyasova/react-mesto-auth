import React from "react";

function Footer({ loggedIn }) {
  const year = new Date().getFullYear();

  return loggedIn ? (
    <footer className="footer">
      <p className="footer__copyright">© {year} Mesto Russia</p>
    </footer>
  ) : (
    ""
  );
}

export default Footer;
