import { useState } from "react";
import Link from "next/link";
import { Nav } from "react-bootstrap";
import { GiHamburgerMenu } from "react-icons/gi";
import { AiOutlineClose } from "react-icons/ai";
import styles from "../styles/Navbar.module.scss";

const Navbar: React.FunctionComponent = () => {
  const [state, setState] = useState<string>("collapse");

  const handleState = (e: React.MouseEvent) => {
    e.preventDefault();
    setState(state === "open" ? "collapse" : "open");
  };

  return (
    <div
      className={
        state === "open"
          ? styles.navbarContainer_opened
          : styles.navbarContainer_collapsed
      }
    >
      {state === "collapse" ? (
        <GiHamburgerMenu className={styles.burgerbtn} onClick={handleState} />
      ) : (
        <AiOutlineClose className={styles.burgerbtn} onClick={handleState} />
      )}
      <Nav defaultActiveKey="/home" className={`flex-column ${styles.nav}`}>
        <Link href="/">
          <Nav.Link className={styles.navLink} href="/">
            Lobby
          </Nav.Link>
        </Link>
        <Link href="/">
          <Nav.Link className={styles.navLink} href="/">
            Games
          </Nav.Link>
        </Link>
        <Link href="/">
          <Nav.Link className={styles.navLink} href="/">
            Friendship
          </Nav.Link>
        </Link>
      </Nav>
    </div>
  );
};

export default Navbar;
