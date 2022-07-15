import React from "react";
import { Link } from "react-router-dom";
import FirstTowerFourFloor from "../components/FirstTower/FirstTowerFourFloor";
import FirstTowerThreeFloor from "../components/FirstTower/FirstTowerThreeFloor";
import FirstTowerTwoFloor from "../components/FirstTower/FirstTowerTwoFloor";

const FirstTower = () => {
  // floor：選択している階数を保持する変数（初期値：２）
  const [floor, setFloor] = React.useState(2);
  return (
    <>
      <header>
        <div className="p-5 border-b-2 text-xl font-medium sticky top-0 flex bg-white">
          <Link to="/" className="px-4">
            <img src="./images/logo.png" alt="KitAru" className={`h-8 px-3`} />
          </Link>
          <a
            href="/first"
            className="mx-3 px-4 pt-0.5  rounded-lg bg-gray-300 border-b-2 border-gray-400"
          >
            1号館
          </a>
          <a
            href="/second"
            className="mx-3 px-4 pt-0.5  rounded-lg hover:translate-y-0.5 hover:bg-gray-200 hover:border-b-2 hover:border-gray-300 transform transition"
          >
            2号館
          </a>
          <a
            href="/third"
            className="mx-3 px-4 pt-0.5 rounded-lg hover:translate-y-0.5 hover:bg-gray-200 hover:border-b-2 hover:border-gray-300 transform transition"
          >
            3号館
          </a>
        </div>
      </header>
      <div className={`flex flex-row justify-around`}>
        <div className={``}>
          <div className={`flex-col`}>
            {floor === 2 && <FirstTowerTwoFloor />}
            {floor === 3 && <FirstTowerThreeFloor />}
            {floor === 4 && <FirstTowerFourFloor />}
            <div className={`pb-7`}>
              <img
                className={`w-[90px] ml-[90px]`}
                src="./images/FirstTower_stairs.png"
                alt="階段"
              />
            </div>
            <div className={`flex`}>
              <div className={`h-[28px] w-[28px] bg-[#ff7f7f] ml-[60px]`}></div>
              <div className={`text-lg`}>・・・予約・授業</div>
              <div className={`h-[28px] w-[28px] bg-[#ffea7f] ml-[20px]`}></div>
              <div className={`text-lg`}>・・・利用中</div>
            </div>
          </div>
        </div>
        <div
          className={`w-[510px] h-auto mt-[20px] relative flex place-items-end justify-center`}
        >
          <img src="./images/FirstTower_bg.png" alt="1号館" className={``} />
          <div className={`absolute w-4/5`}>
            {/* 4階 */}
            <div
              className={`my-[30px] text-5xl font-bold rounded-xl border-2 text-center ${
                floor === 4
                  ? `bg-[#ffffff] text-[#f4896e] border-white`
                  : `bg-[#f4896e] text-[#ffffff] hover:bg-[#f7a79b]`
              }`}
              onClick={() => setFloor((floor) => 4)}
            >
              4F
            </div>

            {/* ３階 */}
            <div
              className={`my-[30px] z-10 text-5xl font-bold rounded-xl border-2 text-center ${
                floor === 3
                  ? `bg-[#ffffff] text-[#f4896e] border-white`
                  : `bg-[#f4896e] text-[#ffffff] hover:bg-[#f7a79b]`
              }`}
              onClick={() => setFloor((floor) => 3)}
            >
              3F
            </div>

            {/* 2階 */}
            <div
              className={`my-[30px] z-10 text-5xl font-bold rounded-xl  text-center border-2 border-white ${
                floor === 2
                  ? `bg-[#ffffff] text-[#f4896e] border-white`
                  : `bg-[#f4896e] text-[#ffffff] hover:bg-[#f7a79b]`
              }`}
              onClick={() => setFloor((floor) => 2)}
            >
              2F
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default FirstTower;
