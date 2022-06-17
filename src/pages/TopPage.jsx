import React from "react";
import { Link } from "react-router-dom";

const TopPage = () => {
  return (
    <>
      <header className={`sticky z-50 top-0`}>
        <div className="p-5 border-b-2 text-xl font-medium flex bg-white ">
          <a href="http://localhost:3000/">
            <img src="./images/logo.png" alt="KitAru" className={`h-8 px-3`} />
          </a>
          <a href="#aki" className="px-4">
            空き教室
          </a>
          <a href="#setubi" className="px-4">
            設備
          </a>
        </div>
      </header>
      <div
        id="top"
        className={`pt-[150px] bg-gradient-to-b from-[#7FD4FF] to-[#fff] h-[240px]`}
      >
        <img
          src="./images/logo.png"
          alt="KitAru"
          className={`h-[120px] mx-auto drop-shadow-xl`}
        />
      </div>
      <div className={`p-5`}>
        <div id="aki" className={`text-2xl px-2 font-bold mt-4 pt-20`}>
          空き教室を探す
        </div>
        {/* 号館 */}
        <div className={`flex-col mt-10 mb-20`}>
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
            <div className="p-10 bg-[#F4F5F5] text-xl font-medium flex">
              <Link to="first" className={`w-1/4`}>
                <div className={`flex-col`}>
                  <img src="./images/FirstTower.png" alt="1号館" />
                  <div className={`text-center mt-10`}>1号館</div>
                </div>
              </Link>
              <Link to="second" className={`w-1/4`}>
                <div className={`flex-col`}>
                  <img src="./images/SecondTower.png" alt="2号館" />
                  <div className={`text-center mt-10`}>2号館</div>
                </div>
              </Link>
              <Link to="third" className={`w-1/4`}>
                <div className={`flex-col`}>
                  <img src="./images/SecondTower.png" alt="3号館" />
                  <div className={`text-center mt-10`}>3号館</div>
                </div>
              </Link>
              <Link to="fourth" className={`w-1/4`}>
                <div className={`flex-col`}>
                  <img src="./images/room4.png" alt="4号館" />
                  <div className={`text-center mt-10`}>4号館</div>
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
        <div className={`flex-col mt-10 mb-20`}>
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
            <div className="p-10 bg-[#F4F5F5] text-xl font-medium flex">
              <Link to="first" className={`w-1/4`}>
                <img src="./images/setubi.png" alt="1号館" />
              </Link>
              <Link to="second" className={`w-1/4`}>
                <img src="./images/setubi.png" alt="2号館" />
              </Link>
              <Link to="third" className={`w-1/4`}>
                <img src="./images/setubi.png" alt="3号館" />
              </Link>
              <Link to="fourth" className={`w-1/4`}>
                <img src="./images/setubi.png" alt="4号館" />
              </Link>
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
