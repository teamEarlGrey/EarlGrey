import React from "react";
import SecondTowerTwoFloor from "../components/SecondTowerTwoFloor";

const SecondTower = () => {
  return (
    <div className={`flex flex-row`}>
      <div className={`w-1/2`}>
        <SecondTowerTwoFloor />
      </div>
      <div className={`w-1/2`}>
        <div className={`w-[600px] relative `}>
          <img
            src="./images/SecondTower/SecondTower_bg.png"
            alt="2号館"
            className={`absolute`}
          />
          <div className={`absolute w-[400px] mx-[110px] my-[118px]`}>
            <img
              src="./images/SecondTower/SecondTower_six.png"
              alt="2号館"
              className={`mt-1`}
            />
            <img
              src="./images/SecondTower/SecondTower_five.png"
              alt="2号館"
              className={`mt-1`}
            />
            <img
              src="./images/SecondTower/SecondTower_four.png"
              alt="2号館"
              className={`mt-1`}
            />
            <img
              src="./images/SecondTower/SecondTower_three.png"
              alt="2号館"
              className={`mt-1`}
            />
            <img
              src="./images/SecondTower/SecondTower_two.png"
              alt="2号館"
              className={`mt-1`}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SecondTower;
