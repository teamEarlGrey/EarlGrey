import React from "react";
import { Link } from "react-router-dom";

const TopPage = () => {
  return (
    <>
      {/* 号館 */}
      <div>
        {/* ヘッダー */}
        <div className="p-5 border-b-2 text-xl font-medium flex">
          <Link to="first" className={`w-1/4`} >
            <img src="./images/room1.png" alt="1号館" />
          </Link>
          <Link to="second" className={`w-1/4`} >
            <img src="./images/room2.png" alt="2号館" />
          </Link>
          <Link to="third" className={`w-1/4`} >
            <img src="./images/room3.png" alt="3号館" />
          </Link>
          <Link to="fourth" className={`w-1/4`} >
            <img src="./images/room4.png" alt="4号館" />
          </Link>
        </div>
      </div>
    </>
  );
};

export default TopPage;
