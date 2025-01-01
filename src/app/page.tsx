"use client";
import "./page.module.scss";
import CarsCards from "./components/display_cars/displayCarsCards";
import Header from "./components/Header";
export default function Home() {
  return (
    <>
      <Header />
      <CarsCards />
    </>
  );
}
