import styles from './CarDetails.module.css'

export const CarDetails = ({ brand, km, color, newCar }) => {
    return (
      <div className={styles.card}>
          <h2 >Detalhes do carro</h2>
              <h1>Marca: {brand}</h1>
              <p>KM: {km}</p>
              <p>Cor: {color}</p>
          {newCar && <p>Este carro é novo</p>}
      </div>
    )
  }
  
