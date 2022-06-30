import React from "react";

const SecondTowerSixFloor = () => {
  return (
    <div className={`ml-[150px] w-[360px] h-[400px]`}>
      <div className={`flex-row mt-20 text-center relative`}>
        {/*  */}
        <div
          className={`flex w-[280px] border-y-2 border-l-2 border-black absolute`}
        >
          <div className={`flex-col`}>
            <div className={`flex h-[200px]`}>
              <div
                className={`w-[118px] h-[220px] border-2 border-black m-0.5 px-2 py-[70px] flex-col`}
              >
                <div>2601</div>
                <div>開放実習室</div>
              </div>
              <div className={`w-[30px] h-[200px] m-0.5 px-2 py-1`}></div>
              <div className={`flex-col mr-0.5`}>
                <div
                  className={`w-[120px] h-[110px] border-2 border-black mt-0.5 px-1 py-[25px] flex-col`}
                  >
                    <div>2602</div>
                    <div>実習室</div>
                  </div>
                <div
                  className={`w-[120px] h-[110px] border-x-2 border-b-2 border-black mb-0.5 px-1 py-[25px] flex-col`}
                  >
                    <div>2603</div>
                    <div>実習室</div>
                  </div>
              </div>
            </div>
            <div className={`w-[280] h-[164px] px-auto pt-[90px]`}>休憩室</div>
          </div>
        </div>
        <div className={`flex-col absolute right-0`}>
          <div
            className={`w-[80px] h-[120px] border-l-2 border-b-2 border-black px-2`}
          ></div>
          <div
            className={`w-[80px] h-[248px] border-r-2 border-b-2 border-black flex justify-between`}
          >
            <div className={`w-[40px] h-[252px]`}>
              <img
                className={`h-[103px] mt-0.5`}
                src="./images/SecondTower_stairs.png"
                alt="階段"
              />
            </div>
            <div className={`w-[33px] flex-col mr-0.5`}>
              <div
                className={`w-[33px] h-[51px] border-2 border-black mt-0.5 mr-0.5`}
              >
                WC (女)
              </div>
              <div
                className={`w-[33px] h-[47px] border-x-2 border-black mr-0.5`}
              >
                WC (男)
              </div>
              <div
                className={`w-[33px] h-[29.5px] border-2 border-black mr-0.5`}
              >
                EV
              </div>
              <div
                className={`w-[33px] h-[115px] border-x-2 border-b-2 border-black mr-0.5 mb-0.5`}
              ></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SecondTowerSixFloor;
