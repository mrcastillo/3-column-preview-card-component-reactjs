import sedans from "./images/icon-sedans.svg";
import suvs from "./images/icon-suvs.svg";
import luxury from "./images/icon-luxury.svg";

function App() {
  return (
    <div className="app-container">

      <div className={"column-card-container"}>

        <div className={"column-card-item"} id={"sedans"}>
          <div className={"column-card-item-car-pic"}>
            <img src={sedans} />
          </div>

          <div className={"column-card-item-text"} >
            <div className={"column-card-item-h1"} >
              <h1>SEDANS</h1>
            </div>

            <div className={"column-card-item-p"}>
              <p>Choose a sedan for its affordability and excellent fuel economy. Ideal for cruising in the city or on your next road trip.</p>
            </div>
          </div>
          
          <div className={"column-card-item-button"}>
            <button>Learn More</button>
          </div>
        </div>

        <div className={"column-card-item"} id={"suvs"}>
          <div className={"column-card-item-car-pic"}>
            <img src={suvs} />
          </div>

          <div className={"column-card-item-text"}>
            <div className={"column-card-item-h1"}>
            <h1>SUVS</h1>
            </div>

            <div className={"column-card-item-p"}>
              <p>Take an SUV for its spacious interior, power, and versatility. Perfect for your next family vacation and off-road adventures.</p>
            </div>
          </div>
          

          <div className={"column-card-item-button"}>
            <button>Learn More</button>
          </div>
        </div>

        <div className={"column-card-item"} id={"luxury"}>
          <div className={"column-card-item-car-pic"}>
            <img src={luxury} />
          </div>

          <div className={"column-card-item-text"}>
            <div className={"column-card-item-h1"}>
              <h1>LUXURY</h1>
            </div>

            <div className={"column-card-item-p"}>
              <p>Cruise in the best car brands without the bloated prices. Enjoy the enchanced comfort of a luxury rental and arrive in style.</p>
            </div>
          </div>
          

          <div className={"column-card-item-button"}>
            <button>Learn More</button>
          </div>
        </div>

      </div>
    </div>
  );
}

export default App;
