import React from "react";
import styles from "./FoodCard.module.css";
import Image from "next/image";
import starImg from "@/public/star.svg";
interface FoodCardProps {
  hotelName: string;
  image: string;
  stars: string;
  time: string;
}

const FoodCard: React.FC<FoodCardProps> = ({ hotelName, image, stars, time }) => {
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
      <div className={styles.cardContent}>
        <h3 className={styles.hotelName}>{hotelName}</h3>
        <div style={{display:"flex", gap:"1rem"}}>
        <p className={styles.stars}>
          <div style={{display:"flex", gap:"0.5rem"}}>
          <Image src={starImg} alt="star icon" width={20} height={20} />
          {stars}
          </div>
        </p>
        <p className={styles.stars}>
          {time}
        </p>
        </div>
      </div>
    </div>
  );
};

export default FoodCard;
