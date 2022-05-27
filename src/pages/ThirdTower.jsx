import React from "react";
import ThirdTowerFloor from "../components/ThirdTowerFloor";

const ThirdTower = () => {
  return (
    <div className={`flex w-full`}>
      <ThirdTowerFloor />
      <img src="./images/room3.png" alt="3号館" className={`w-1/4 pt-5 pr-10`} />
    </div>
  );
};

export default ThirdTower;
