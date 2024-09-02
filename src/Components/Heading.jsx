import styles from "./Heading.module.css";

const Heading = () => {
  return (
    <div>
      <nav className={styles.nav}>
        <div className={styles.logo}>
          <img className="img" src="src\Components\images\nike logo.png" alt="Nike Logo" />
        </div>
        <ul className={styles.navList}>
          <li><a href="#">Home</a></li>
          <li><a href="#">Location</a></li>
          <li><a href="#">About</a></li>
          <li><a href="#">Contact</a></li>
        </ul>
        <button className={styles.btn}>Login</button>
      </nav>
    </div>
  );
};

export default Heading;
