// Cards.js
import styles from './css/Cards.module.css';

const RotatingCarousel = () => {
  return (
    <div style={{ display: 'flex', justifyContent: 'space-between' }}>
      <a href="#" style={{ textDecoration: 'none' }}>
        <article className={styles.card}>
          <img
            className={styles.card__background}
            src="5.png"
            style={{ objectFit: 'contain' }}
            alt="Photo of Cartagena's cathedral at the background and some colonial style houses"
            width="1920"
            height="2193"
          />
          <div className={`${styles.card__content} flow`}>
            <div className={`${styles.card__content}--container flow`}>
              <h2 className={styles.card__title}>Baal-Kaand</h2>
              <p className={styles.card__description}>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rerum in labore laudantium deserunt fugiat numquam.
              </p>
            </div>
          </div>
        </article>
      </a>
      <a href="#" style={{ textDecoration: 'none' }}>
        <article className={styles.card}>
          <img
            className={styles.card__background}
            src="37.png"
            style={{ objectFit: 'contain' }}
            alt="Photo of Cartagena's cathedral at the background and some colonial style houses"
            width="1920"
            height="2193"
          />
          <div className={`${styles.card__content} flow`}>
            <div className={`${styles.card__content}--container flow`}>
              <h2 className={styles.card__title}>Aranya-Kaand</h2>
              <p className={styles.card__description}>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rerum in labore laudantium deserunt fugiat numquam.
              </p>
            </div>
          </div>
        </article>
      </a>
    </div>
  );
};

export default RotatingCarousel;