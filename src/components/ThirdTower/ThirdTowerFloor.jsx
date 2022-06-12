import React from "react";


const ThirdTowerFloor = () => {
  return (
    <div className={`w-[390px] ml-[180px]`}>
      <div className={`border-2 border-black mt-20 text-center rounded-lg`}>
        <div className={`flex flex-row h-[60px] `}>
          <div className={`w-[105px] border-2 border-black m-0.5 px-2 py-[13px] rounded-lg`}>WC(男)</div>
          <div className={`w-[60px] border-2 border-black m-0.5 px-2 py-[13px] rounded-lg`}>EV</div>
          <div className={`w-[60px] border-2 border-black m-0.5 px-2 py-[13px] rounded-lg`}>EV</div>
          <div className={`w-[105px] border-2 border-black m-0.5 px-2 py-[13px] rounded-lg`}>WC(女)</div>
          <div className={`w-[60px] border-t-2 border-x-2 border-black mx-0.5 mt-0.5 px-2  pt-[30px] rounded-t-lg`}>階段</div>
        </div>
        <div className={`flex flex-row-reverse`}>
          <div className={`w-[56.5px] h-[30px] border-b-2 border-x-2 border-black mx-0.5 mb-0.5 px-2 py-1 rounded-b-lg`}></div>
        </div>
        <div className={`flex flex-row align-middle h-[180px]`}>
          <div className={`w-[130px]  border-2 border-black m-0.5 py-[70px] h-auto rounded-lg`}>3301</div>
          <div className={`w-[130px] border-2 border-black m-0.5 py-[70px] h-auto rounded-lg`}>3301</div>
          <div className={`w-[130px] border-2 border-black m-0.5 py-[70px] h-auto rounded-lg`}>3301</div>
        </div>
      </div>
    </div>
  );
};

export default ThirdTowerFloor;
