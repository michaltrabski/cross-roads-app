import * as React from "react";
import Moveable from "react-moveable";
import { Car } from "../App";

type CarProps = Car;

export default function CarComponent(props: CarProps) {
  const { color } = props;

  const UNIQ_ID = "car-white_" + Math.random().toString(36).substr(2, 9);
  return (
    <>
      <div
        id={UNIQ_ID}
        style={{
          position: "absolute",
          width: "50px",
          height: "100px",

          // backgroundColor: "red",
          // opacity: 0.5,
          // zIndex: 99,
        }}
      >
        <div
          style={{
            width: "100%",
            height: "100%",
            backgroundImage: `url(./car-${color}.png)`,
            backgroundPosition: "center center",
            backgroundSize: "cover",

            position: "relative",
            // zIndex: 100,
            // left: "40%",
            // transform: "translate(27px, -177.5px) scale(3.39066, 4.70874)",
          }}
        >
          sssss
        </div>
      </div>
      <Moveable
        persistData
        target={`#${UNIQ_ID}`}
        draggable={true}
        scalable={true}
        rotatable={true}
        pinchable={true}
        pinchOutside={true}
        // warpable={true}
        onRender={(e) => {
          e.target.style.cssText += e.cssText;
        }}
        onDragStart={({ target, clientX, clientY }) => {
          // console.log("onDragStart", target, clientX, clientY);
        }}
        onRotate={(x) => {
          console.log("onRotate", x);
        }}
      />
    </>
  );
}
