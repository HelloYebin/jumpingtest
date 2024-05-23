import React from "react";
import { NavLink } from "react-router-dom";

const SalesYear: React.FC = () => {
  return (
    <div className="p-10">
      <div className="flex flex-col mb-20">
        <span className="font-bold text-xl">2024년 매출</span>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-6 mt-3 gap-4">
          <div className="max-w-sm bg-white border border-gray-200 rounded-xl shadow">
            <div className="bg-custom-C4C4C4 text-center py-2 rounded-t-xl">
              <h5 className="text-2xl font-bold tracking-tight text-white dark:text-white">
                1월
              </h5>
            </div>
            <p className="text-2xl py-6 font-bold text-black dark:text-gray-400 text-center">
              300,000원
            </p>
            <div className="text-center">
              <NavLink to="/sales_month">
                <span className="mb-5 inline-flex items-center px-5 py-1 text-sm font-medium text-center text-white bg-green-600 rounded-2xl hover:bg-green-700 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                  자세히
                </span>
              </NavLink>
            </div>
          </div>
          <div className="max-w-sm bg-white border border-gray-200 rounded-xl shadow">
            <div className="bg-custom-C4C4C4 text-center py-2 rounded-t-xl">
              <h5 className="text-2xl font-bold tracking-tight text-white dark:text-white">
                2월
              </h5>
            </div>
            <p className="text-2xl py-6 font-bold text-black dark:text-gray-400 text-center">
              300,000원
            </p>
            <div className="text-center">
              <span className="mb-5 inline-flex items-center px-5 py-1 text-sm font-medium text-center text-white bg-green-600 rounded-2xl hover:bg-green-700 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                자세히
              </span>
            </div>
          </div>
          <div className="max-w-sm bg-white border border-gray-200 rounded-xl shadow">
            <div className="bg-custom-C4C4C4 text-center py-2 rounded-t-xl">
              <h5 className="text-2xl font-bold tracking-tight text-white dark:text-white">
                3월
              </h5>
            </div>
            <p className="text-2xl py-6 font-bold text-black dark:text-gray-400 text-center">
              300,000원
            </p>
            <div className="text-center">
              <span className="mb-5 inline-flex items-center px-5 py-1 text-sm font-medium text-center text-white bg-green-600 rounded-2xl hover:bg-green-700 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                자세히
              </span>
            </div>
          </div>
          <div className="max-w-sm bg-white border border-gray-200 rounded-xl shadow">
            <div className="bg-custom-C4C4C4 text-center py-2 rounded-t-xl">
              <h5 className="text-2xl font-bold tracking-tight text-white dark:text-white">
                4월
              </h5>
            </div>
            <p className="text-2xl py-6 font-bold text-black dark:text-gray-400 text-center">
              300,000원
            </p>
            <div className="text-center">
              <span className="mb-5 inline-flex items-center px-5 py-1 text-sm font-medium text-center text-white bg-green-600 rounded-2xl hover:bg-green-700 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                자세히
              </span>
            </div>
          </div>
          <div className="max-w-sm bg-white border border-gray-200 rounded-xl shadow">
            <div className="bg-custom-C4C4C4 text-center py-2 rounded-t-xl">
              <h5 className="text-2xl font-bold tracking-tight text-white dark:text-white">
                5월
              </h5>
            </div>
            <p className="text-2xl py-6 font-bold text-black dark:text-gray-400 text-center">
              300,000원
            </p>
            <div className="text-center">
              <span className="mb-5 inline-flex items-center px-5 py-1 text-sm font-medium text-center text-white bg-green-600 rounded-2xl hover:bg-green-700 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                자세히
              </span>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col mb-20">
        <span className="font-bold text-xl">2023년 매출</span>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-6 mt-3 gap-4">
          <div className="max-w-sm bg-white border border-gray-200 rounded-xl shadow">
            <div className="bg-custom-C4C4C4 text-center py-2 rounded-t-xl">
              <h5 className="text-2xl font-bold tracking-tight text-white dark:text-white">
                1월
              </h5>
            </div>
            <p className="text-2xl py-6 font-bold text-black dark:text-gray-400 text-center">
              300,000원
            </p>
            <div className="text-center">
              <span className="mb-5 inline-flex items-center px-5 py-1 text-sm font-medium text-center text-white bg-green-600 rounded-2xl hover:bg-green-700 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                자세히
              </span>
            </div>
          </div>
          <div className="max-w-sm bg-white border border-gray-200 rounded-xl shadow">
            <div className="bg-custom-C4C4C4 text-center py-2 rounded-t-xl">
              <h5 className="text-2xl font-bold tracking-tight text-white dark:text-white">
                2월
              </h5>
            </div>
            <p className="text-2xl py-6 font-bold text-black dark:text-gray-400 text-center">
              300,000원
            </p>
            <div className="text-center">
              <span className="mb-5 inline-flex items-center px-5 py-1 text-sm font-medium text-center text-white bg-green-600 rounded-2xl hover:bg-green-700 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                자세히
              </span>
            </div>
          </div>
          <div className="max-w-sm bg-white border border-gray-200 rounded-xl shadow">
            <div className="bg-custom-C4C4C4 text-center py-2 rounded-t-xl">
              <h5 className="text-2xl font-bold tracking-tight text-white dark:text-white">
                3월
              </h5>
            </div>
            <p className="text-2xl py-6 font-bold text-black dark:text-gray-400 text-center">
              300,000원
            </p>
            <div className="text-center">
              <span className="mb-5 inline-flex items-center px-5 py-1 text-sm font-medium text-center text-white bg-green-600 rounded-2xl hover:bg-green-700 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                자세히
              </span>
            </div>
          </div>
          <div className="max-w-sm bg-white border border-gray-200 rounded-xl shadow">
            <div className="bg-custom-C4C4C4 text-center py-2 rounded-t-xl">
              <h5 className="text-2xl font-bold tracking-tight text-white dark:text-white">
                4월
              </h5>
            </div>
            <p className="text-2xl py-6 font-bold text-black dark:text-gray-400 text-center">
              300,000원
            </p>
            <div className="text-center">
              <span className="mb-5 inline-flex items-center px-5 py-1 text-sm font-medium text-center text-white bg-green-600 rounded-2xl hover:bg-green-700 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                자세히
              </span>
            </div>
          </div>
          <div className="max-w-sm bg-white border border-gray-200 rounded-xl shadow">
            <div className="bg-custom-C4C4C4 text-center py-2 rounded-t-xl">
              <h5 className="text-2xl font-bold tracking-tight text-white dark:text-white">
                5월
              </h5>
            </div>
            <p className="text-2xl py-6 font-bold text-black dark:text-gray-400 text-center">
              300,000원
            </p>
            <div className="text-center">
              <span className="mb-5 inline-flex items-center px-5 py-1 text-sm font-medium text-center text-white bg-green-600 rounded-2xl hover:bg-green-700 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                자세히
              </span>
            </div>
          </div>
          <div className="max-w-sm bg-white border border-gray-200 rounded-xl shadow">
            <div className="bg-custom-C4C4C4 text-center py-2 rounded-t-xl">
              <h5 className="text-2xl font-bold tracking-tight text-white dark:text-white">
                6월
              </h5>
            </div>
            <p className="text-2xl py-6 font-bold text-black dark:text-gray-400 text-center">
              300,000원
            </p>
            <div className="text-center">
              <span className="mb-5 inline-flex items-center px-5 py-1 text-sm font-medium text-center text-white bg-green-600 rounded-2xl hover:bg-green-700 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                자세히
              </span>
            </div>
          </div>
          <div className="max-w-sm bg-white border border-gray-200 rounded-xl shadow">
            <div className="bg-custom-C4C4C4 text-center py-2 rounded-t-xl">
              <h5 className="text-2xl font-bold tracking-tight text-white dark:text-white">
                7월
              </h5>
            </div>
            <p className="text-2xl py-6 font-bold text-black dark:text-gray-400 text-center">
              300,000원
            </p>
            <div className="text-center">
              <span className="mb-5 inline-flex items-center px-5 py-1 text-sm font-medium text-center text-white bg-green-600 rounded-2xl hover:bg-green-700 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                자세히
              </span>
            </div>
          </div>
          <div className="max-w-sm bg-white border border-gray-200 rounded-xl shadow">
            <div className="bg-custom-C4C4C4 text-center py-2 rounded-t-xl">
              <h5 className="text-2xl font-bold tracking-tight text-white dark:text-white">
                8월
              </h5>
            </div>
            <p className="text-2xl py-6 font-bold text-black dark:text-gray-400 text-center">
              300,000원
            </p>
            <div className="text-center">
              <span className="mb-5 inline-flex items-center px-5 py-1 text-sm font-medium text-center text-white bg-green-600 rounded-2xl hover:bg-green-700 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                자세히
              </span>
            </div>
          </div>
          <div className="max-w-sm bg-white border border-gray-200 rounded-xl shadow">
            <div className="bg-custom-C4C4C4 text-center py-2 rounded-t-xl">
              <h5 className="text-2xl font-bold tracking-tight text-white dark:text-white">
                9월
              </h5>
            </div>
            <p className="text-2xl py-6 font-bold text-black dark:text-gray-400 text-center">
              300,000원
            </p>
            <div className="text-center">
              <span className="mb-5 inline-flex items-center px-5 py-1 text-sm font-medium text-center text-white bg-green-600 rounded-2xl hover:bg-green-700 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                자세히
              </span>
            </div>
          </div>
          <div className="max-w-sm bg-white border border-gray-200 rounded-xl shadow">
            <div className="bg-custom-C4C4C4 text-center py-2 rounded-t-xl">
              <h5 className="text-2xl font-bold tracking-tight text-white dark:text-white">
                10월
              </h5>
            </div>
            <p className="text-2xl py-6 font-bold text-black dark:text-gray-400 text-center">
              300,000원
            </p>
            <div className="text-center">
              <span className="mb-5 inline-flex items-center px-5 py-1 text-sm font-medium text-center text-white bg-green-600 rounded-2xl hover:bg-green-700 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                자세히
              </span>
            </div>
          </div>
          <div className="max-w-sm bg-white border border-gray-200 rounded-xl shadow">
            <div className="bg-custom-C4C4C4 text-center py-2 rounded-t-xl">
              <h5 className="text-2xl font-bold tracking-tight text-white dark:text-white">
                11월
              </h5>
            </div>
            <p className="text-2xl py-6 font-bold text-black dark:text-gray-400 text-center">
              300,000원
            </p>
            <div className="text-center">
              <span className="mb-5 inline-flex items-center px-5 py-1 text-sm font-medium text-center text-white bg-green-600 rounded-2xl hover:bg-green-700 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                자세히
              </span>
            </div>
          </div>
          <div className="max-w-sm bg-white border border-gray-200 rounded-xl shadow">
            <div className="bg-custom-C4C4C4 text-center py-2 rounded-t-xl">
              <h5 className="text-2xl font-bold tracking-tight text-white dark:text-white">
                12월
              </h5>
            </div>
            <p className="text-2xl py-6 font-bold text-black dark:text-gray-400 text-center">
              300,000원
            </p>
            <div className="text-center">
              <span className="mb-5 inline-flex items-center px-5 py-1 text-sm font-medium text-center text-white bg-green-600 rounded-2xl hover:bg-green-700 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                자세히
              </span>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col mb-20">
        <span className="font-bold text-xl">2022년 매출</span>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-6 mt-3 gap-4">
          <div className="max-w-sm bg-white border border-gray-200 rounded-xl shadow">
            <div className="bg-custom-C4C4C4 text-center py-2 rounded-t-xl">
              <h5 className="text-2xl font-bold tracking-tight text-white dark:text-white">
                1월
              </h5>
            </div>
            <p className="text-2xl py-6 font-bold text-black dark:text-gray-400 text-center">
              300,000원
            </p>
            <div className="text-center">
              <span className="mb-5 inline-flex items-center px-5 py-1 text-sm font-medium text-center text-white bg-green-600 rounded-2xl hover:bg-green-700 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                자세히
              </span>
            </div>
          </div>
          <div className="max-w-sm bg-white border border-gray-200 rounded-xl shadow">
            <div className="bg-custom-C4C4C4 text-center py-2 rounded-t-xl">
              <h5 className="text-2xl font-bold tracking-tight text-white dark:text-white">
                2월
              </h5>
            </div>
            <p className="text-2xl py-6 font-bold text-black dark:text-gray-400 text-center">
              300,000원
            </p>
            <div className="text-center">
              <span className="mb-5 inline-flex items-center px-5 py-1 text-sm font-medium text-center text-white bg-green-600 rounded-2xl hover:bg-green-700 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                자세히
              </span>
            </div>
          </div>
          <div className="max-w-sm bg-white border border-gray-200 rounded-xl shadow">
            <div className="bg-custom-C4C4C4 text-center py-2 rounded-t-xl">
              <h5 className="text-2xl font-bold tracking-tight text-white dark:text-white">
                3월
              </h5>
            </div>
            <p className="text-2xl py-6 font-bold text-black dark:text-gray-400 text-center">
              300,000원
            </p>
            <div className="text-center">
              <span className="mb-5 inline-flex items-center px-5 py-1 text-sm font-medium text-center text-white bg-green-600 rounded-2xl hover:bg-green-700 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                자세히
              </span>
            </div>
          </div>
          <div className="max-w-sm bg-white border border-gray-200 rounded-xl shadow">
            <div className="bg-custom-C4C4C4 text-center py-2 rounded-t-xl">
              <h5 className="text-2xl font-bold tracking-tight text-white dark:text-white">
                4월
              </h5>
            </div>
            <p className="text-2xl py-6 font-bold text-black dark:text-gray-400 text-center">
              300,000원
            </p>
            <div className="text-center">
              <span className="mb-5 inline-flex items-center px-5 py-1 text-sm font-medium text-center text-white bg-green-600 rounded-2xl hover:bg-green-700 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                자세히
              </span>
            </div>
          </div>
          <div className="max-w-sm bg-white border border-gray-200 rounded-xl shadow">
            <div className="bg-custom-C4C4C4 text-center py-2 rounded-t-xl">
              <h5 className="text-2xl font-bold tracking-tight text-white dark:text-white">
                5월
              </h5>
            </div>
            <p className="text-2xl py-6 font-bold text-black dark:text-gray-400 text-center">
              300,000원
            </p>
            <div className="text-center">
              <span className="mb-5 inline-flex items-center px-5 py-1 text-sm font-medium text-center text-white bg-green-600 rounded-2xl hover:bg-green-700 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                자세히
              </span>
            </div>
          </div>
          <div className="max-w-sm bg-white border border-gray-200 rounded-xl shadow">
            <div className="bg-custom-C4C4C4 text-center py-2 rounded-t-xl">
              <h5 className="text-2xl font-bold tracking-tight text-white dark:text-white">
                6월
              </h5>
            </div>
            <p className="text-2xl py-6 font-bold text-black dark:text-gray-400 text-center">
              300,000원
            </p>
            <div className="text-center">
              <span className="mb-5 inline-flex items-center px-5 py-1 text-sm font-medium text-center text-white bg-green-600 rounded-2xl hover:bg-green-700 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                자세히
              </span>
            </div>
          </div>
          <div className="max-w-sm bg-white border border-gray-200 rounded-xl shadow">
            <div className="bg-custom-C4C4C4 text-center py-2 rounded-t-xl">
              <h5 className="text-2xl font-bold tracking-tight text-white dark:text-white">
                7월
              </h5>
            </div>
            <p className="text-2xl py-6 font-bold text-black dark:text-gray-400 text-center">
              300,000원
            </p>
            <div className="text-center">
              <span className="mb-5 inline-flex items-center px-5 py-1 text-sm font-medium text-center text-white bg-green-600 rounded-2xl hover:bg-green-700 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                자세히
              </span>
            </div>
          </div>
          <div className="max-w-sm bg-white border border-gray-200 rounded-xl shadow">
            <div className="bg-custom-C4C4C4 text-center py-2 rounded-t-xl">
              <h5 className="text-2xl font-bold tracking-tight text-white dark:text-white">
                8월
              </h5>
            </div>
            <p className="text-2xl py-6 font-bold text-black dark:text-gray-400 text-center">
              300,000원
            </p>
            <div className="text-center">
              <span className="mb-5 inline-flex items-center px-5 py-1 text-sm font-medium text-center text-white bg-green-600 rounded-2xl hover:bg-green-700 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                자세히
              </span>
            </div>
          </div>
          <div className="max-w-sm bg-white border border-gray-200 rounded-xl shadow">
            <div className="bg-custom-C4C4C4 text-center py-2 rounded-t-xl">
              <h5 className="text-2xl font-bold tracking-tight text-white dark:text-white">
                9월
              </h5>
            </div>
            <p className="text-2xl py-6 font-bold text-black dark:text-gray-400 text-center">
              300,000원
            </p>
            <div className="text-center">
              <span className="mb-5 inline-flex items-center px-5 py-1 text-sm font-medium text-center text-white bg-green-600 rounded-2xl hover:bg-green-700 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                자세히
              </span>
            </div>
          </div>
          <div className="max-w-sm bg-white border border-gray-200 rounded-xl shadow">
            <div className="bg-custom-C4C4C4 text-center py-2 rounded-t-xl">
              <h5 className="text-2xl font-bold tracking-tight text-white dark:text-white">
                10월
              </h5>
            </div>
            <p className="text-2xl py-6 font-bold text-black dark:text-gray-400 text-center">
              300,000원
            </p>
            <div className="text-center">
              <span className="mb-5 inline-flex items-center px-5 py-1 text-sm font-medium text-center text-white bg-green-600 rounded-2xl hover:bg-green-700 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                자세히
              </span>
            </div>
          </div>
          <div className="max-w-sm bg-white border border-gray-200 rounded-xl shadow">
            <div className="bg-custom-C4C4C4 text-center py-2 rounded-t-xl">
              <h5 className="text-2xl font-bold tracking-tight text-white dark:text-white">
                11월
              </h5>
            </div>
            <p className="text-2xl py-6 font-bold text-black dark:text-gray-400 text-center">
              300,000원
            </p>
            <div className="text-center">
              <span className="mb-5 inline-flex items-center px-5 py-1 text-sm font-medium text-center text-white bg-green-600 rounded-2xl hover:bg-green-700 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                자세히
              </span>
            </div>
          </div>
          <div className="max-w-sm bg-white border border-gray-200 rounded-xl shadow">
            <div className="bg-custom-C4C4C4 text-center py-2 rounded-t-xl">
              <h5 className="text-2xl font-bold tracking-tight text-white dark:text-white">
                12월
              </h5>
            </div>
            <p className="text-2xl py-6 font-bold text-black dark:text-gray-400 text-center">
              300,000원
            </p>
            <div className="text-center">
              <span className="mb-5 inline-flex items-center px-5 py-1 text-sm font-medium text-center text-white bg-green-600 rounded-2xl hover:bg-green-700 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                자세히
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SalesYear;
