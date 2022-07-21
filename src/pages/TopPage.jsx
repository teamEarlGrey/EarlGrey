import React from "react";
import useMedia from "use-media";
import { Link } from "react-router-dom";

const TopPage = () => {
  const max1300 = useMedia({ maxWidth: "1300px" });
  const max750 = useMedia({ maxWidth: "750px" });
  // ハンバーガーメニュー表示するかしないかの変数
  const [openMenu, setOpenMenu] = React.useState(false);

  const menuFunction = () => {
    setOpenMenu(!openMenu);
  };

  // ハンバーガーメニューのプラス押したか押してないか判定
  const [openTower, setOpenTower] = React.useState(false);

  return (
    <>
      <header className={`sticky z-50 top-0`}>
        <div
          className={`p-2 border-b-2 text-xl font-medium flex bg-white ${
            max750 && `justify-between`
          } `}
        >
          <a
            href="http://localhost:3000/"
            className={`${max750 ? `w-1/5` : `w-[150px]`}`}
          >
            <img src="./images/logo.png" alt="KitAru" className={`px-3`} />
          </a>
          {max750 ? (
            <div className="">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className={`h-6 w-6 text-[#7FD4FF] flex justify-end`}
                viewBox="0 0 20 20"
                fill="currentColor"
                onClick={menuFunction}
              >
                <path
                  fillRule="evenodd"
                  d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
          ) : (
            <>
              <a href="#aki" className="px-4 py-2">
                空き教室
              </a>
              <a href="#setubi" className="px-4 py-2">
                設備
              </a>
            </>
          )}
        </div>
        {/* ハンバーガーメニュー */}
        {openMenu && (
          <div
            className={`flex flex-row absolute w-full bg-[#C6ECFF] text-white py-3`}
          >
            <ul className={`w-full`}>
              <li>
                <div
                  className={`px-5 flex justify-between border-b-2 border-[#80D4FF] text-shadow`}
                >
                  <a
                    href="#aki"
                    onClick={() => {
                      menuFunction();
                      setOpenTower(false);
                    }}
                  >
                    空き教室
                  </a>
                  {/*
                      plusボタンが押された時(openmenuがtrue)minus.pngに変更
                      逆も同じ動作
                  */}
                  {openTower ? (
                    <img
                      src="../images/minus.png"
                      alt="minus"
                      className={`object-contain w-4`}
                      onClick={() => setOpenTower(!openTower)}
                    />
                  ) : (
                    <img
                      src="../images/plus.png"
                      alt="plus"
                      className={`object-contain w-4`}
                      onClick={() => setOpenTower(!openTower)}
                    />
                  )}
                </div>
                {/* plusボタンが押された時、号館を表示、
                    minusボタンが押された時は非表示
                */}
                {openTower && (
                  <>
                    <ul>
                      <li className={`mx-10 border-b-2 border-[#80D4FF]`}>
                        <a
                          href="/first"
                          className="text-shadow"
                          onClick={menuFunction}
                        >
                          １号館
                        </a>
                      </li>
                      <li className={`mx-10 border-b-2 border-[#80D4FF]`}>
                        <a
                          href="/second"
                          className="text-shadow"
                          onClick={menuFunction}
                        >
                          ２号館
                        </a>
                      </li>
                      <li className={`mx-10 border-b-2 border-[#80D4FF]`}>
                        <a
                          href="/third"
                          className="text-shadow"
                          onClick={menuFunction}
                        >
                          ３号館
                        </a>
                      </li>
                    </ul>
                  </>
                )}
              </li>
              <li>
                <a
                  href="#setubi"
                  className="px-5 block text-shadow border-b-2 border-[#80D4FF]"
                  onClick={() => {
                    menuFunction();
                    setOpenTower(false);
                  }}
                >
                  設備
                </a>
              </li>
            </ul>
          </div>
        )}
      </header>

      <div
        id="top"
        className={`${
          max750 ? `pt-[60px]` : `pt-[150px]`
        } bg-gradient-to-b from-[#7FD4FF] to-[#fff]`}
      >
        <img
          src="./images/logo.png"
          alt="KitAru"
          className={`w-2/5 mx-auto drop-shadow-xl`}
        />
      </div>
      <div className={`p-5`}>
        <div
          id="aki"
          className={`${
            max750 ? `pt-[20px]` : `pt-20`
          } text-2xl px-2 font-bold mt-4`}
        >
          空き教室を探す
        </div>
        {/* 号館 */}
        <div className={`flex-col ${max750 ? `mt-5 mb-10` : `mt-10 mb-20`}`}>
          <div
            className={`h-[10px] rounded-t bg-gradient-to-b from-[#e9ebeb] to-[#F4F5F5]`}
          ></div>
          <div className={`relative`}>
            <div
              className={`absolute w-[10px] h-full bg-gradient-to-r from-[#e9ebeb] to-[#F4F5F5]`}
            ></div>
            <div
              className={`right-0 absolute w-[10px] h-full bg-gradient-to-l from-[#e9ebeb] to-[#F4F5F5]`}
            ></div>
            <div
              className={`${
                max1300 ? `p-2` : `p-10`
              } bg-[#F4F5F5] text-xl font-medium flex`}
            >
              <Link to="first" className={`h-30% w-33% mx-5`}>
                <div className={`flex-col`}>
                  <img src="./images/FirstTower.png" alt="1号館" />
                  <div className={`text-center ${max1300 ? `my-2` : `mt-10`}`}>
                    1号館
                  </div>
                </div>
              </Link>
              <Link to="second" className={`h-30% mx-5`}>
                <div className={`flex-col`}>
                  <img src="./images/SecondTower.png" alt="2号館" />
                  <div className={`text-center ${max1300 ? `my-2` : `mt-10`}`}>
                    2号館
                  </div>
                </div>
              </Link>
              <Link to="third" className={`h-30% mx-5`}>
                <div className={`flex-col`}>
                  <img src="./images/ThirdTower.png" alt="3号館" className="" />
                  <div className={`text-center ${max1300 ? `my-2` : `mt-10`}`}>
                    3号館
                  </div>
                </div>
              </Link>
            </div>
          </div>
          <div
            className={`h-[10px] rounded-b bg-gradient-to-t from-[#e9ebeb] to-[#F4F5F5]`}
          ></div>
        </div>

        <div id="setubi" className={`text-2xl px-2 font-bold`}>
          設備
        </div>
        <div className={`flex-col ${max750 ? `mt-5 mb-10` : `mt-10 mb-20`} `}>
          <div
            className={`h-[10px] rounded-t bg-gradient-to-b from-[#e9ebeb] to-[#F4F5F5]`}
          ></div>
          <div className={`relative`}>
            <div
              className={`absolute w-[10px] h-full bg-gradient-to-r from-[#e9ebeb] to-[#F4F5F5]`}
            ></div>
            <div
              className={`right-0 absolute w-[10px] h-full bg-gradient-to-l from-[#e9ebeb] to-[#F4F5F5]`}
            ></div>
            <div
              className={`${
                max750 ? `px-1` : `p-5`
              } bg-[#F4F5F5] text-xl font-medium flex justify-between flex-wrap`}
            >
              {/* ブラウザサイズが750pxより小さい時 */}
              {max750 ? <div></div> : <></>}
              {/* ブラウザサイズが750pxより大きい時 */}
              <img
                src="./images/setubi.png"
                alt="1号館"
                className={`${max750 ? `w-1/2 p-2` : `w-[300px] p-4`}`}
              />
              <img
                src="./images/setubi.png"
                alt="2号館"
                className={`${max750 ? `w-1/2 p-2` : `w-[300px] p-4`}`}
              />
              <img
                src="./images/setubi.png"
                alt="3号館"
                className={`${max750 ? `w-1/2 p-2` : `w-[300px] p-4`}`}
              />
              <img
                src="./images/setubi.png"
                alt="3号館"
                className={`${max750 ? `w-1/2 p-2` : `w-[300px] p-4`}`}
              />
            </div>
          </div>
          <div
            className={`h-[10px] rounded-b bg-gradient-to-t from-[#e9ebeb] to-[#F4F5F5]`}
          ></div>
        </div>
      </div>
    </>
  );
};

export default TopPage;
