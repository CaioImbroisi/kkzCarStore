"use client";
import "./_displayCarsCards.scss";
import { getCars } from "../../API/getAllCars";
import { useEffect, useState } from "react";
import type { CarsType } from "../../../../public/mock/electric_cars";
import Image from "next/image";
import "swiper/swiper-bundle.css";

export default function CarsCards() {
  const [cars, setCars] = useState<CarsType[]>([]);

  useEffect(() => {
    const getAllCars = async () => {
      const data = await getCars();
      setCars(data);
    };
    getAllCars();
  }, []);

  return (
    <section className="display-cars-cards">
      {cars.map((car) => (
        <div key={car.id}>
          <h2>{car.model}</h2>
          <span>{car.price}</span>
          <p>{car.description}</p>
          <Image src={car.images[0]} alt={car.model} width={600} height={380} />
          <span>{car.year}</span>
        </div>
      ))}
    </section>
  );
}
