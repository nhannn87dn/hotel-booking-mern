import React from "react";
import styles from "./PriceBlock.module.css";

const PriceBlock = ({ price = 0, promoPrice = 0 }) => {
  const finalPrice = promoPrice > 0 ? promoPrice : price;
  return (
    <div className={styles.price}>
      <div className="curren_price">
        <strong>
          <span className={styles.price_currency}>$</span>
          {finalPrice}
        </strong>
        <span className={styles.price_period}>per night</span>
        {promoPrice > 0 && <span className={styles.price_discount}>SALE 10%</span>}
      </div>
      {promoPrice > 0 &&
          <div className={styles.regular_price}>
            Regular Price: <del>${price}</del>
          </div>
    }
    </div>
  );
};

export default PriceBlock;
