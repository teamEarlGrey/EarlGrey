import React from "react";
import useMedia from "use-media";
import SecondTowerTwoFloor from "../components/SecondTower/SecondTowerTwoFloor";
import SecondTowerThreeFloor from "../components/SecondTower/SecondTowerThreeFloor";
import SecondTowerFourFloor from "../components/SecondTower/SecondTowerFourFloor";
import SecondTowerFiveFloor from "../components/SecondTower/SecondTowerFiveFloor";
import SecondTowerSixFloor from "../components/SecondTower/SecondTowerSixFloor";
import FloorMapMobile from "../components/FloorMapMobile";

const SecondTower = () => {
  const [floor, setFloor] = React.useState(2);
  const max750 = useMedia({ maxWidth: "750px" });
  return (
    <>
      <header className={`sticky z-50 top-0`}>
        <div
          className={`${
            max750 ? `p-3` : `p-3`
          } border-b-2 text-xl font-medium flex bg-white `}
        >
          <a href="/" className={`${max750 ? `w-1/5` : `w-[150px]`}`}>
            <img src="./images/logo.png" alt="KitAru" className={`px-3`} />
          </a>
          {max750 ? (
            ``
          ) : (
            <>
              <a
                href="/first"
                className="mx-3 px-4 pt-0.5  rounded-lg hover:translate-y-0.5 hover:bg-gray-200 hover:border-b-2 hover:border-gray-300 transform transition"
              >
                1号館
              </a>
              <a
                href="/second"
                className="mx-3 px-4 pt-0.5  rounded-lg bg-gray-300 border-b-2 border-gray-400"
              >
                2号館
              </a>
              <a
                href="/third"
                className="mx-3 px-4 pt-0.5 rounded-lg hover:translate-y-0.5 hover:bg-gray-200 hover:border-b-2 hover:border-gray-300 transform transition"
              >
                3号館
              </a>
            </>
          )}
        </div>
      </header>
      {max750 ? (
        <FloorMapMobile tower="2" />
      ) : (
        // mobileの時
        <>
          <div className={`flex flex-row justify-around`}>
            <div className={`flex-col mt-20`}>
              {floor === 2 && <SecondTowerTwoFloor />}
              {floor === 3 && <SecondTowerThreeFloor />}
              {floor === 4 && <SecondTowerFourFloor />}
              {floor === 5 && <SecondTowerFiveFloor />}
              {floor === 6 && <SecondTowerSixFloor />}
              <div className={`flex`}>
                <div
                  className={`h-[28px] w-[28px] bg-[#ff7f7f] ml-[60px]`}
                ></div>
                <div className={`text-lg`}>・・・予約・授業</div>
                <div
                  className={`h-[28px] w-[28px] bg-[#ffea7f] ml-[20px]`}
                ></div>
                <div className={`text-lg`}>・・・利用中</div>
              </div>
              <div className={` mt-8 flex place-content-center`}>
                <div
                  className={`text-[#FF8093] text-2xl font-bold border-b-2 border-[#FF8093]`}
                >
                  ２号館の予約一覧
                </div>
              </div>
            </div>
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
                    floor === 6
                      ? `bg-[#38D1F0] text-[#fff]`
                      : `hover:bg-gray-300`
                  }`}
                  onClick={() => setFloor((floor) => 6)}
                >
                  6F
                </div>

                {/* 5階 */}
                <div
                  className={`w-[400px] my-[8px] z-10 text-5xl font-bold text-[#38D1F0] rounded-xl border-2 text-center border-black ${
                    floor === 5
                      ? `bg-[#38D1F0] text-[#fff]`
                      : `hover:bg-gray-300`
                  }`}
                  onClick={() => setFloor((floor) => 5)}
                >
                  5F
                </div>

                {/* 4階 */}
                <div
                  className={`w-[400px] my-[8px] z-10 text-5xl font-bold text-[#38D1F0] rounded-xl border-2 text-center border-black ${
                    floor === 4
                      ? `bg-[#38D1F0] text-[#fff]`
                      : `hover:bg-gray-300`
                  }`}
                  onClick={() => setFloor((floor) => 4)}
                >
                  4F
                </div>

                {/* ３階 */}
                <div
                  className={`w-[400px] my-[8px] z-10 text-5xl font-bold text-[#38D1F0] rounded-xl border-2 text-center border-black ${
                    floor === 3
                      ? `bg-[#38D1F0] text-[#fff]`
                      : `hover:bg-gray-300`
                  }`}
                  onClick={() => setFloor((floor) => 3)}
                >
                  3F
                </div>

                {/* 2階 */}
                <div
                  className={`w-[400px] my-[8px] z-10 text-5xl font-bold text-[#38D1F0] rounded-xl border-2 text-center border-black ${
                    floor === 2
                      ? `bg-[#38D1F0] text-[#fff]`
                      : `hover:bg-gray-300`
                  }`}
                  onClick={() => setFloor((floor) => 2)}
                >
                  2F
                </div>
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default SecondTower;
