import React from "react";
import SecondTowerTwoFloor from "../components/SecondTower/SecondTowerTwoFloor";
import SecondTowerThreeFloor from "../components/SecondTower/SecondTowerThreeFloor";
import SecondTowerFourFloor from "../components/SecondTower/SecondTowerFourFloor";

const SecondTower = () => {
  const [floor, setFloor] = React.useState(2);
  return (
    <div className={`flex flex-row`}>
      <div className={`w-1/2`}>
        {floor === 2 && <SecondTowerTwoFloor />}
        {floor === 3 && <SecondTowerThreeFloor />}
        {floor === 4 && <SecondTowerFourFloor />}
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
              alt="6階"
              className={`mt-1 hover:brightness-75 rounded-2xl ${floor === 6 && `contrast-75`}`}
              onClick={() => setFloor((floor) => 6)}
            />
            <img
              src="./images/SecondTower/SecondTower_five.png"
              alt="5階"
              className={`mt-1 hover:brightness-75 rounded-2xl ${floor === 5 && `contrast-75`}`}
              onClick={() => setFloor((floor) => 5)}
            />
            <img
              src="./images/SecondTower/SecondTower_four.png"
              alt="4階"
              className={`mt-1 hover:brightness-75 rounded-2xl ${floor === 4 && `contrast-75`}`}
              onClick={() => setFloor((floor) => 4)}
            />
            <img
              src="./images/SecondTower/SecondTower_three.png"
              alt="3階"
              className={`mt-1 hover:brightness-75 rounded-2xl ${floor === 3 && `contrast-75`}`}
              onClick={() => setFloor((floor) => 3)}
            />
            <img
              src="./images/SecondTower/SecondTower_two.png"
              alt="2階"
              className={`mt-1 hover:brightness-75 rounded-2xl ${floor === 2 && `contrast-75`}`}
              onClick={() => setFloor((floor) => 2)}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SecondTower;
