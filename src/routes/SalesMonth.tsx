import React from "react";

const SalesMonth: React.FC = () => {
  return (
    <div className="p-10">
      <div className="flex flex-col">
        <span className="font-bold text-xl">2024년 1월 매출</span>
        <div className="relative overflow-x-auto shadow-md sm:rounded-lg my-4">
          <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
            <thead className="text-xs text-white font-bold uppercase bg-custom-C4C4C4 dark:bg-gray-700 dark:text-gray-400">
              <tr>
                <th scope="col" className="px-6 py-3 text-center text-base">
                  날짜
                </th>
                <th scope="col" className="px-6 py-3 text-center text-base">
                  상품
                </th>
                <th scope="col" className="px-6 py-3 text-center text-base">
                  구매자
                </th>
                <th scope="col" className="px-6 py-3 text-center text-base">
                  금액
                </th>
                <th scope="col" className="px-6 py-3 text-center text-base">
                  상태
                </th>
                <th scope="col" className="px-6 py-3 text-right text-base">
                  <span>Edit</span>
                </th>
              </tr>
            </thead>
            <tbody>
              <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                <th
                  scope="row"
                  className="px-6 py-4 text-center  text-base font-medium text-gray-900 whitespace-nowrap dark:text-white"
                >
                  2024-05-25
                </th>
                <td className="px-6 py-4 text-center  text-base">오전반</td>
                <td className="px-6 py-4 text-center  text-base">오예빈</td>
                <td className="px-6 py-4 text-center  text-base">100,000</td>
                <td className="px-6 py-4 text-center  text-base text-green-600 font-bold">
                  결제완료
                </td>
                <td className="px-6 py-4 text-right">
                  <div className="font-medium text-blue-600 dark:text-blue-500 hover:underline">
                    수정
                  </div>
                </td>
              </tr>
              <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                <th
                  scope="row"
                  className="px-6 py-4 text-center  text-base font-medium text-gray-900 whitespace-nowrap dark:text-white"
                >
                  2024-05-25
                </th>
                <td className="px-6 py-4 text-center  text-base">오전반</td>
                <td className="px-6 py-4 text-center  text-base">오예빈</td>
                <td className="px-6 py-4 text-center  text-base">100,000</td>
                <td className="px-6 py-4 text-center  text-base text-green-600 font-bold">
                  결제완료
                </td>
                <td className="px-6 py-4 text-right">
                  <div className="font-medium text-blue-600 dark:text-blue-500 hover:underline">
                    수정
                  </div>
                </td>
              </tr>
              <tr className="bg-white dark:bg-gray-800 hover:bg-gray-50 dark:hover:bg-gray-600">
                <th
                  scope="row"
                  className="px-6 py-4 text-center  text-base font-medium text-gray-900 whitespace-nowrap dark:text-white"
                >
                  2024-05-25
                </th>
                <td className="px-6 py-4 text-center  text-base">오전반</td>
                <td className="px-6 py-4 text-center  text-base">오예빈</td>
                <td className="px-6 py-4 text-center  text-base">100,000</td>
                <td className="px-6 py-4 text-center  text-base text-green-600 font-bold">
                  결제완료
                </td>
                <td className="px-6 py-4 text-right">
                  <div className="font-medium text-blue-600 dark:text-blue-500 hover:underline">
                    수정
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default SalesMonth;
