import React from "react";


const ThirdTowerFloor = () => {
  return (
    <div className={`mx-auto`}>
      <div className={`border-2 mt-20 text-center`}>
        <div className={`flex flex-row`}>
          <div className={`basis-2/7 border m-0.5 px-2 py-1`}>WC(男)</div>
          <div className={`basis-1/7 border m-0.5 px-2 py-1`}>EV</div>
          <div className={`basis-1/7 border m-0.5 px-2 py-1`}>EV</div>
          <div className={`basis-2/7 border m-0.5 px-2 py-1`}>WC(女)</div>
          <div className={`basis-1/7 border m-0.5 px-2 py-1`}>階段</div>
        </div>
        <div className={`flex flex-row-reverse`}>
          <div className={`w-1/7 border m-0.5 px-2 py-1`}>階段</div>
        </div>
        <div className={`flex flex-row align-middle`}>
          <div className={`basis-1/3 border m-0.5 py-9 h-auto`}>3301</div>
          <div className={`basis-1/3 border m-0.5 py-9 h-auto`}>3301</div>
          <div className={`basis-1/3 border m-0.5 py-9 h-auto`}>3301</div>
        </div>
      </div>
    </div>
  );
};

export default ThirdTowerFloor;
