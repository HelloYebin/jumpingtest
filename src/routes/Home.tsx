import React from "react";
import { NavLink } from "react-router-dom";

const Home: React.FC = () => {
  return (
    <div className="p-10">
      <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-4">
        <NavLink to="/sales_month">
          <div className="h-auto p-6 flex flex-col bg-white border max-w-full border-gray-200 rounded-sm shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
            <span className="m-0 font-bold">5월 매출</span>
            <span className="my-5 font-bold text-3xl">3,000,000원</span>
            <div className="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
              <div
                className="bg-green-600 h-2.5 rounded-full"
                style={{ width: "70%" }}
              ></div>
            </div>
            <span className="mt-24 flex justify-end items-center">
              <span className="text-gray-400">자세히보기&nbsp;</span>
              <svg
                className="w-4 h-4 text-gray-400 dark:text-white"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 14 10"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M1 5h12m0 0L9 1m4 4L9 9"
                />
              </svg>
            </span>
          </div>
        </NavLink>
        <NavLink to="/sales_year">
          <div className="h-auto p-6 flex flex-col bg-white border max-w-full border-gray-200 rounded-sm shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
            <span className="m-0 font-bold">2024년 연매출</span>
            <span className="my-5 font-bold text-3xl">10,000,000원</span>
            <div className="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
              <div
                className="bg-green-600 h-2.5 rounded-full"
                style={{ width: "30%" }}
              ></div>
            </div>
            <span className="mt-24 flex justify-end items-center">
              <span className="text-gray-400">자세히보기&nbsp;</span>
              <svg
                className="w-4 h-4 text-gray-400 dark:text-white"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 14 10"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M1 5h12m0 0L9 1m4 4L9 9"
                />
              </svg>
            </span>
          </div>
        </NavLink>
        <NavLink to="/members">
          <div className="h-auto p-6 flex flex-col bg-white border max-w-full border-gray-200 rounded-sm shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
            <span className="m-0 font-bold">회원수</span>
            <span className="my-5 font-bold text-3xl">60명</span>
            <div className="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
              <div
                className="bg-green-600 h-2.5 rounded-full"
                style={{ width: "90%" }}
              ></div>
            </div>
            <span className="mt-24 flex justify-end items-center">
              <span className="text-gray-400">자세히보기&nbsp;</span>
              <svg
                className="w-4 h-4 text-gray-400 dark:text-white"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 14 10"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M1 5h12m0 0L9 1m4 4L9 9"
                />
              </svg>
            </span>
          </div>
        </NavLink>
        <div
          className="h-auto p-6 bg-white border max-w-full border-gray-200 rounded-sm shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700 
      xl:col-span-2"
        >
          <h4 className="m-0 font-bold mb-2">공지사항</h4>
          <div className="flex flex-col">
            <span className="bg-green-100 text-green-800 text-sm font-medium me-2 px-2.5 py-3 mt-2 rounded dark:bg-green-900 dark:text-green-300">
              이 사이트는 점핑하이 가맹점에서만 사용이 가능합니다.
            </span>
            <span className="bg-yellow-100 text-yellow-800 text-sm font-medium me-2 px-2.5 py-3 mt-2 rounded dark:bg-yellow-900 dark:text-yellow-300">
              점핑하이의 새로운 회원 관리 페이지를 첫 공개합니다.
            </span>
          </div>
        </div>
        <div className="h-auto p-6 bg-white border max-w-full border-gray-200 rounded-sm shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
          <h4 className="m-0 font-bold mb-2">업데이트</h4>
          <div className="flex flex-col">
            <div className="flex">
              <span className="bg-gray-100 text-gray-800 text-sm font-medium me-2 px-2.5 py-2 mt-2 rounded dark:bg-gray-700 dark:text-gray-300">
                0.0.1 Beta
              </span>
              <span className="bg-pink-100 text-pink-800 text-sm font-medium me-2 px-2.5 py-2 mt-2 rounded dark:bg-pink-900 dark:text-pink-300">
                매출, 회원 관리, 회원권 관리, 시간표 관리 기능 추가
              </span>
            </div>
          </div>
        </div>
        <div className="h-auto p-6 bg-white border max-w-full border-gray-200 rounded-sm shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
          <span className="m-0 font-bold">COMMING SOON</span>
        </div>
      </div>
    </div>
  );
};

export default Home;
