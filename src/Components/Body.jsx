import styles from "./Body.module.css";

const Body = () => {
  return (
    <>
      <main className={styles.hero}>
        <div className={styles.leftSection}>
          <div className={styles.heroContent}>
            <h1>YOUR FEET DESERVE THE BEST</h1>
            <p>YOUR FEET DESERVE THE BEST. WE'RE HERE TO HELP YOU WITH OUR SHOES.</p>
          </div>
          <div className={styles.heroButton}>
            <button>Shop Now</button>
            <button>Category</button>
          </div>
          <div className={styles.shopping}>
            <p>Available on</p>
          </div>
          <div className={styles.brandIcons}>
            <img src="src\Components\images\flipkart_image.png" alt="Flipkart" />
            <img src="src\Components\images\amazon.png" alt="Amazon" />
          </div>
        </div>
        <div className={styles.rightSection}>
          <div className={styles.heroImage}>
            <img src="src\Components\images\shoes.png" alt="Shoes" />
          </div>
        </div>
      </main>
    </>
  );
};

export default Body;
