import React from "react";
import { Link } from "react-router-dom";
import ThirdTowerTwoFloor from "../components/ThirdTower/ThirdTowerTwoFloor";
import ThirdTowerThreeFloor from "../components/ThirdTower/ThirdTowerThreeFloor";
import ThirdTowerFourFloor from "../components/ThirdTower/ThirdTowerFourFloor";
import ThirdTowerFiveFloor from "../components/ThirdTower/ThirdTowerFiveFloor";
import ThirdTowerSixFloor from "../components/ThirdTower/ThirdTowerSixFloor";
import ThirdTowerSevenFloor from "../components/ThirdTower/ThirdTowerSevenFloor";

const ThirdTower = () => {
  const [floor, setFloor] = React.useState(2);
  return (
    <>
      <header>
        <div className="p-5 border-b-2 text-xl font-medium sticky top-0 flex bg-white">
          <Link to="/" className="px-4">
            <img src="./images/logo.png" alt="KitAru" className={`h-8 px-3`} />
          </Link>
          <a href="/first" className="mx-3 px-4 pt-0.5  rounded-lg hover:translate-y-0.5 hover:bg-gray-200 hover:border-b-2 hover:border-gray-300 transform transition">
            1号館
          </a>
          <a href="/second" className="mx-3 px-4 pt-0.5  rounded-lg hover:translate-y-0.5 hover:bg-gray-200 hover:border-b-2 hover:border-gray-300 transform transition">
            2号館
          </a>
          <a href="/third" className="mx-3 px-4 pt-0.5 rounded-lg bg-gray-300 border-b-2 border-gray-400">
            3号館
          </a>
        </div>
      </header>
      <div className={`flex flex-row`}>
        <div className={`w-1/2`}>
          {floor === 2 && <ThirdTowerTwoFloor />}
          {floor === 3 && <ThirdTowerThreeFloor />}
          {floor === 4 && <ThirdTowerFourFloor />}
          {floor === 5 && <ThirdTowerFiveFloor />}
          {floor === 6 && <ThirdTowerSixFloor />}
          {floor === 7 && <ThirdTowerSevenFloor />}
          <div className={`flex`}>
              <div
                className={`h-[28px] w-[28px] bg-[#ff7f7f] ml-[190px]`}
              ></div>
              <div className={`text-lg`}>・・・予約・授業</div>
              <div
                className={`h-[28px] w-[28px] bg-[#ffea7f] ml-[20px]`}
              ></div>
              <div className={`text-lg`}>・・・利用中</div>
            </div>
        </div>
        <div className={`w-1/2`}>
          <div className={`w-[400px] relative`}>
            <img
              src="./images/ThirdTower_bg.png"
              alt="3号館"
              className={`absolute pt-[20px] ml-[40px]`}
            />
            <div className={`absolute w-[400px] mx-[55px] my-[30px]`}>
              {/* 7階 */}
              <div
                className={`w-[370px] my-[6px] z-10 text-5xl bg-[#ffffff] font-bold text-[#38D1F0] rounded-xl border-2 text-center border-black ${
                  floor === 7 ? `bg-[#38D1F0] text-[#fff]` : `hover:bg-gray-300`
                }`}
                onClick={() => setFloor((floor) => 7)}
              >
                7F
              </div>

              {/* 6階 */}
              <div
                className={`w-[370px] my-[6px] z-10 text-5xl bg-[#ffffff] font-bold text-[#38D1F0] rounded-xl border-2 text-center border-black ${
                  floor === 6 ? `bg-[#38D1F0] text-[#fff]` : `hover:bg-gray-300`
                }`}
                onClick={() => setFloor((floor) => 6)}
              >
                6F
              </div>

              {/* 5階 */}
              <div
                className={`w-[370px] my-[6px] z-10 text-5xl bg-[#ffffff] font-bold text-[#38D1F0] rounded-xl border-2 text-center border-black ${
                  floor === 5 ? `bg-[#38D1F0] text-[#fff]` : `hover:bg-gray-300`
                }`}
                onClick={() => setFloor((floor) => 5)}
              >
                5F
              </div>

              {/* 4階 */}
              <div
                className={`w-[370px] my-[6px] z-10 text-5xl bg-[#ffffff] font-bold text-[#38D1F0] rounded-xl border-2 text-center border-black ${
                  floor === 4 ? `bg-[#38D1F0] text-[#fff]` : `hover:bg-gray-300`
                }`}
                onClick={() => setFloor((floor) => 4)}
              >
                4F
              </div>

              {/* ３階 */}
              <div
                className={`w-[370px] my-[6px] z-10 text-5xl bg-[#ffffff] font-bold text-[#38D1F0] rounded-xl border-2 text-center border-black ${
                  floor === 3 ? `bg-[#38D1F0] text-[#fff]` : `hover:bg-gray-300`
                }`}
                onClick={() => setFloor((floor) => 3)}
              >
                3F
              </div>

              {/* 2階 */}
              <div
                className={`w-[370px] my-[6px] z-10 text-5xl bg-[#ffffff] font-bold text-[#38D1F0] rounded-xl border-2 text-center border-black ${
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

export default ThirdTower;
