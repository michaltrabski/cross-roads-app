import { useState } from "react";
// import Moveable from "react-moveable";
import CarComponent from "./components/CarComponent";

export interface Car {
  color: "blue";
}

const initialCar: Car = {
  color: "blue",
};

const initialCrossRoad = {
  backgroundImage: "./cross-road-1.png",
  width: "700px",
  height: "450px",
  cars: [initialCar],
};

export default function App() {
  const [crossRoads] = useState([initialCrossRoad]);
  const [index] = useState(0);

  const crossRoad = crossRoads[index];

  return (
    <div>
      <div>
        {/* https://www.npmjs.com/package/react-canvas-draw */}
        <div
          id="crossroad"
          style={{
            width: `${crossRoad.width}`,
            height: `${crossRoad.height}`,
            backgroundImage: `url(${crossRoad.backgroundImage})`,
            backgroundPosition: "center center",
            backgroundSize: "cover",
          }}
        >
          {crossRoad.cars.map((car) => (
            <CarComponent color={car.color} />
          ))}

          {/* <CarWhite />
          <CarWhite /> */}
        </div>
        {/* <Moveable
          persistData
          target="#crossroad"
          // draggable={true}
          // scalable={true}
          // rotatable={true}
          // pinchable={true}
          // pinchOutside={true}
          // warpable={true}
          onRender={(e) => {
            e.target.style.cssText += e.cssText;
          }}
          onDragStart={({ target, clientX, clientY }) => {
            console.log("onDragStart", target, clientX, clientY);
          }}
        /> */}
      </div>
    </div>
  );
}
