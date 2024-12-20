import { useState } from 'react';
import styles from './ProductPageShortDesc.module.scss';
import fav from '../../../public/assets/svg/fav.svg';
import line from '../../../public/assets/svg/line-discount.svg'
const ProductPageShortDesc = () => {
  const [count, setCount] = useState(1);

  const increment = () => {
    setCount(count + 1);
  };

  const decrement = () => {
    if (count > 1) {
      setCount(count - 1);
    }
  };
  return (
    <section className={styles.shortDesc}>

      <button className={styles.shortDesc__shopName}>Albus Anime Shop</button>

      <h3 className={styles.shortDesc__productName}>
        Brand
        <br />
        Crunchyroll x Logic x Cowboy Bebop - See You Space Cowboy T-shirt - Crunchyroll Exclusive
      </h3>

      <p className={styles.shortDesc__code}>Code: 367504902</p>

      <div className={styles.shortDesc__price}>
        <h2 className={styles.shortDesc__price__final}>20$</h2>
        <div className={styles.shortDesc__price__discount}>
          <h3 className={styles.shortDesc__price__discount__price}> 50$</h3>
          <div className={styles.shortDesc__price__discount__line}>
            <img src={line} alt="" />
          </div>
        </div>
      </div>

      <h5 className={styles.shortDesc__subTitle}>Color</h5>
      <div className={styles.shortDesc__color}>
        <button className={styles.shortDesc__color__button}></button>
        <button className={styles.shortDesc__color__button}></button>
        <button className={styles.shortDesc__color__button}></button>
        <button className={styles.shortDesc__color__button}></button>
        <button className={styles.shortDesc__color__button}></button>
        <button className={styles.shortDesc__color__button}></button>
        <button className={styles.shortDesc__color__button}></button>
      </div>

      <h5 className={styles.shortDesc__subTitle}>Size</h5>
      <div className={styles.shortDesc__size}>
        <button className={styles.shortDesc__size__button}>XS</button>
        <button className={styles.shortDesc__size__button}>S</button>
        <button className={styles.shortDesc__size__button}>M</button>
        <button className={styles.shortDesc__size__button}>L</button>
        <button className={styles.shortDesc__size__button}>XL</button>
        <button className={styles.shortDesc__size__button}>2XL</button>
      </div>

      <div className={styles.shortDesc__quantity}>
        <h5 className={styles.shortDesc__subTitle}>Quantity:</h5>
        <div className={styles.shortDesc__quantity__block}>
        <button onClick={increment} className={styles.shortDesc__quantity__block__changing}>
          +
        </button>
        <div className={styles.shortDesc__quantity__block__count}>{count}</div>
        <button onClick={decrement} className={styles.shortDesc__quantity__block__changing}>
          -
        </button>
        </div>
      
      </div>

      <div className={styles.shortDesc__warning}>Select Size, Color and Quantity</div>
      
      <div className={styles.shortDesc__btnGroup}>
        <button className={styles.shortDesc__btnGroup__addToCart}>Add to cart</button>
        <button className={styles.shortDesc__btnGroup__addToFav}>
          <img src={fav} alt="" />
        </button>
      </div>
    </section>
  );
};

export default ProductPageShortDesc;
