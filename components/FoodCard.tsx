import React from 'react';
import styles from './FoodCard.module.css';
import Image from 'next/image';

interface FoodCardProps {
  hotelName: string;
  image: string;
}

const FoodCard: React.FC<FoodCardProps> = ({ hotelName, image }) => {
  return (
    <div className={styles.card}>
      <Image src={image} alt="food image" height={0} width={0} style={{width:"100%", height:"15rem",objectFit:"cover"}} sizes="100vw"/>
      <h3 className={styles.hotelName}>{hotelName}</h3>
    </div>
  );
};

export default FoodCard;
