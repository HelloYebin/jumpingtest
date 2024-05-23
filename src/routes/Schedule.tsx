import React, { useState } from "react";
import AddScheduleModal from "../components/AddScheduleModal";

const Schedule: React.FC = () => {
  const [modalToggle, setModalToggle] = useState<boolean>(false);
  return (
    <div className="p-10">
      <div className="flex justify-between">
        <span className="font-bold text-xl">시간표 관리</span>
        <button
          type="submit"
          className="block rounded-2xl bg-green-600 px-4 py-1 text-center text-sm  text-white font-extrabold shadow-sm hover:text-white hover:bg-green-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green-600"
          onClick={() => setModalToggle(true)}
        >
          등록
        </button>
      </div>
      <div className="relative overflow-x-auto shadow-md sm:rounded-lg my-4">
        <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
          <thead className="text-xs text-white font-bold uppercase bg-custom-C4C4C4 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" className="px-6 py-3 text-center"></th>
              <th scope="col" className="px-6 py-3 text-center text-base">
                수업시간
              </th>
              <th scope="col" className="px-6 py-3 text-center text-base">
                현재인원수
              </th>
              <th scope="col" className="px-6 py-3 text-center text-base">
                최대 인원
              </th>
              <th scope="col" className="px-6 py-3 text-center text-base">
                정보
              </th>
            </tr>
          </thead>
          <tbody>
            <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
              <td className="px-6 py-4 text-black text-center text-base">1</td>
              <td className="px-6 py-4 text-black text-center text-base">
                AM 10:00
              </td>
              <td className="px-6 py-4 text-black text-center text-base">12</td>
              <td className="px-6 py-4 text-black text-center text-base">12</td>
              <td className="px-6 py-4 text-black text-center text-base">
                영상수업
              </td>
            </tr>
            <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
              <td className="px-6 py-4 text-black text-center text-base">2</td>
              <td className="px-6 py-4 text-black text-center text-base">
                AM 11:00
              </td>
              <td className="px-6 py-4 text-black text-center text-base">12</td>
              <td className="px-6 py-4 text-black text-center text-base">12</td>
              <td className="px-6 py-4 text-black text-center text-base">
                강사수업
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      {modalToggle ? (
        <AddScheduleModal setModalToggle={setModalToggle} />
      ) : null}
    </div>
  );
};

export default Schedule;
