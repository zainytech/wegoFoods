import React from "react";
import styles from "./FoodCard.module.css";
import Image from "next/image";
import starImg from "@/public/star.svg";
import { FoodCardProps } from "./Interfaces";
import giftSvg from "@/public/gift.svg";

const FoodCard: React.FC<FoodCardProps> = ({
  name,
  image,
  stars,
  time,
  isNew,
  promotion,
}) => {
  return (
    <div className={styles.card}>
      <Image
        src={image}
        alt="food image"
        className={styles.image}
        height={0}
        width={0}
        style={{ width: "100%", height: "15rem", objectFit: "cover" }}
        sizes="100vw"
      />
      {promotion !== null ? (
        <>
          <div className={styles.promotion}>
            {promotion === "gift" ? (
              <p
                className={styles.promoP}
                style={{ backgroundColor: "#00B1FF" }}
              >
                <Image src={giftSvg} alt="gift icon" />
              </p>
            ) : null}
            {promotion === "1+1" ? (
              <p
                className={styles.promoP}
                style={{ backgroundColor: "#8F64FF" }}
              >
                {promotion}
              </p>
            ) : null}
            {promotion === "discount" ? (
              <p
                className={styles.promoP}
                style={{ backgroundColor: "#FF696F" }}
              >
                %
              </p>
            ) : null}
          </div>
        </>
      ) : null}
      <div className={styles.cardContent}>
        <h3 className={styles.name}>{name}</h3>
        <div style={{ display: "flex", gap: "0.5rem" }}>
          <p className={styles.stars}>
            <div style={{ display: "flex", gap: "0.5rem" }}>
              <Image src={starImg} alt="star icon" width={20} height={20} />
              {stars}
            </div>
          </p>

          <p className={styles.stars}>{time}</p>
          {isNew ? (
            <p className={`${styles.stars} ${styles.newClr}`}>New</p>
          ) : null}
        </div>
      </div>
    </div>
  );
};

export default FoodCard;
