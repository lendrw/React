import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { CarDetails } from './components/CarDetails';

function App() {
  const cars = [
    {id: 1, brand: "F", color: "blue", newCar: true, km: 0},
    {id: 2, brand: "F", color: "blue", newCar: false, km: 2340},
    {id: 3, brand: "F", color: "blue", newCar: false, km: 11110}
  ];
  return (
    <>
     <h2>Showroom de carros</h2>
     <div className="car-container">
     {cars.map((car) => (
        <CarDetails 
        key={car.id}
        brand={car.brand} 
        color={car.color} 
        km={car.km} 
        newCar={car.newCar}
        />
      ))}
     </div>
    </>
  )
}

export default App
