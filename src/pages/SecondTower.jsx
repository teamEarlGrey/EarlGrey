import React from "react";
import { Link } from "react-router-dom";
import SecondTowerTwoFloor from "../components/SecondTower/SecondTowerTwoFloor";
import SecondTowerThreeFloor from "../components/SecondTower/SecondTowerThreeFloor";
import SecondTowerFourFloor from "../components/SecondTower/SecondTowerFourFloor";
import ThirdTowerFloor from "../components/ThirdTower/ThirdTowerFloor";
import SecondTowerFiveFloor from "../components/SecondTower/SecondTowerFiveFloor";
import SecondTowerSixFloor from "../components/SecondTower/SecondTowerSixFloor";

const SecondTower = () => {
  const [floor, setFloor] = React.useState(2);
  return (
    <>
      <header>
        <div className="p-5 border-b-2 text-xl font-medium sticky top-0 flex bg-white">
          <Link to="/" className="px-4">
            <img src="./images/logo.png" alt="KitAru" className={`h-8 px-3`} />
          </Link>
          <a href="/#aki" className="px-4">
            空き教室
          </a>
          <a href="/#setubi" className="px-4">
            設備
          </a>
        </div>
      </header>
      <div className={`flex flex-row`}>
        <div className={`w-1/2`}>
          {floor === 2 && <SecondTowerTwoFloor />}
          {floor === 3 && <SecondTowerThreeFloor />}
          {floor === 4 && <SecondTowerFourFloor />}
          {floor === 5 && <SecondTowerFiveFloor />}
          {floor === 6 && <SecondTowerSixFloor />}
        </div>
        <div className={`w-1/2`}>
          <div className={`w-[600px] relative `}>
            <img
              src="./images/SecondTower_bg.png"
              alt="2号館"
              className={`absolute`}
            />
            <div className={`absolute w-[400px] mx-[105px] my-[118px]`}>
              {/* 6階 */}
              <div
                className={`w-[400px] my-[8px] text-5xl font-bold text-[#38D1F0] rounded-xl border-2 text-center border-black ${
                  floor === 6 ? `bg-[#38D1F0] text-[#fff]` : `hover:bg-gray-300`
                }`}
                onClick={() => setFloor((floor) => 6)}
              >
                6F
              </div>

              {/* 5階 */}
              <div
                className={`w-[400px] my-[8px] z-10 text-5xl font-bold text-[#38D1F0] rounded-xl border-2 text-center border-black ${
                  floor === 5 ? `bg-[#38D1F0] text-[#fff]` : `hover:bg-gray-300`
                }`}
                onClick={() => setFloor((floor) => 5)}
              >
                5F
              </div>

              {/* 4階 */}
              <div
                className={`w-[400px] my-[8px] z-10 text-5xl font-bold text-[#38D1F0] rounded-xl border-2 text-center border-black ${
                  floor === 4 ? `bg-[#38D1F0] text-[#fff]` : `hover:bg-gray-300`
                }`}
                onClick={() => setFloor((floor) => 4)}
              >
                4F
              </div>

              {/* ３階 */}
              <div
                className={`w-[400px] my-[8px] z-10 text-5xl font-bold text-[#38D1F0] rounded-xl border-2 text-center border-black ${
                  floor === 3 ? `bg-[#38D1F0] text-[#fff]` : `hover:bg-gray-300`
                }`}
                onClick={() => setFloor((floor) => 3)}
              >
                3F
              </div>

              {/* 2階 */}
              <div
                className={`w-[400px] my-[8px] z-10 text-5xl font-bold text-[#38D1F0] rounded-xl border-2 text-center border-black ${
                  floor === 2 ? `bg-[#38D1F0] text-[#fff]` : `hover:bg-gray-300`
                }`}
                onClick={() => setFloor((floor) => 2)}
              >
                2F
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SecondTower;
