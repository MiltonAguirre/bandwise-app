import styles from "./styles.module.css";
const BandCard = ({ name, image, genre, followers }) => {
  return (
    <div className={styles.card}>
      <div className={styles.imageContainer}>
        <img src={image} alt={name} className={styles.image} />
      </div>
      <div className={styles.cardContent}>
        <h2 className={styles.bandName}>{name}</h2>
        <p className={styles.genre}>{genre}</p>
        <p className={styles.followers}>{followers} Followers</p>
      </div>
    </div>
  );
};

export default BandCard;
