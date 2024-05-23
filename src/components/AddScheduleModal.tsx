import React, { useState } from "react";

interface ModalProps {
  setModalToggle: React.Dispatch<React.SetStateAction<boolean>>;
}

const AddScheduleModal: React.FC<ModalProps> = ({ setModalToggle }) => {
  const [confirm, setConfirm] = useState<Boolean>(false);
  return (
    <div
      id="add-schedule-modal"
      className="overflow-y-auto
  overflow-x-hidden
  fixed top-0 right-0 left-0 z-50 justify-center items-center w-full md:inset-0 max-h-full"
    >
      <div className="fixed top-0 right-0 left-0 w-full max-h-full min-h-screen md:inset-0 bg-black opacity-50"></div>
      <div className="absolute w-full bg-white animate-openModal min-h-screen max-w-screen-md h-full top-0 right-0 z-80">
        {/* Modal content */}
        <div className="relative dark:bg-gray-700">
          {/* Modal header */}
          <div className="flex items-center justify-between p-4 md:p-5 border-b rounded-t dark:border-gray-600">
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
              시간표 등록
            </h3>
            <button
              type="button"
              className="end-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white"
              data-modal-hide="authentication-modal"
              onClick={() => setModalToggle(false)}
            >
              <svg
                className="w-3 h-3"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 14 14"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
                />
              </svg>
              <span className="sr-only">Close modal</span>
            </button>
          </div>
          {/* Modal body  */}
          <div className="p-4 md:p-5 flex flex-col items-center">
            <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
              <tbody>
                <tr className="border-b border-gray-200 dark:border-gray-700">
                  <th
                    scope="row"
                    className="text-center p-2 font-medium text-white whitespace-nowrap bg-custom-C4C4C4 dark:text-white dark:bg-gray-800"
                  >
                    수업시간
                  </th>
                  <td className="px-6 py-2 bg-white text-black max-w-52">
                    <input
                      type="text"
                      id="product"
                      className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full px-2.5 py-1.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      placeholder="-없이 입력"
                      required
                      //   onChange={(e) =>
                      //     setProduct({ ...product, name: e.target.value })
                      //   }
                    />
                  </td>
                </tr>
                <tr className="border-b border-gray-200 dark:border-gray-700">
                  <th
                    scope="row"
                    className="text-center p-2 font-medium text-white whitespace-nowrap bg-custom-C4C4C4 dark:text-white dark:bg-gray-800"
                  >
                    최대 인원
                  </th>
                  <td className="px-6 py-2 bg-white text-black flex items-center">
                    <input
                      type="text"
                      id="price"
                      className="bg-gray-50 border border-gray-300 max-w-52 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full px-2.5 py-1.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      placeholder="숫자만 입력하세요"
                      //   value={product.price}
                      //   onChange={(e) =>
                      //     setProduct({
                      //       ...product,
                      //       price: Number(e.target.value.replace(/[^0-9]/g, "")),
                      //     })
                      //   }
                    />
                    명
                  </td>
                </tr>
                <tr>
                  <th
                    scope="row"
                    className="text-center p-2 font-medium text-white whitespace-nowrap bg-custom-C4C4C4 dark:text-white dark:bg-gray-800"
                  >
                    정보
                  </th>
                  <td className="px-6 py-2 bg-white text-black max-w-52">
                    <input
                      type="text"
                      id="product"
                      className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full px-2.5 py-1.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      placeholder="-없이 입력"
                      required
                      //   onChange={(e) =>
                      //     setProduct({ ...product, name: e.target.value })
                      //   }
                    />
                  </td>
                </tr>
              </tbody>
            </table>
            <div className="p-5">
              <button
                type="button"
                className="block rounded-full bg-green-600 px-10 py-3 text-center text-sm text-white font-extrabold shadow-sm hover:text-white hover:bg-green-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green-600"
                onClick={() => setConfirm(true)}
              >
                등록
              </button>
            </div>
          </div>
        </div>
      </div>
      {/* 확인 모달 */}
      <div
        tabIndex={-1}
        aria-hidden="true"
        className={`${
          confirm ? "block" : "hidden"
        } overflow-y-auto overflow-x-hidden flex justify-center z-50 w-full md:inset-0 h-modal md:h-full`}
      >
        <div className="relative p-4 w-full max-w-md h-full md:h-auto">
          <div className="relative p-4 text-center bg-white rounded-lg shadow dark:bg-gray-800 sm:p-5">
            <button
              type="button"
              className="text-gray-400 absolute top-2.5 right-2.5 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-600 dark:hover:text-white"
              onClick={() => setConfirm(false)}
            >
              <svg
                aria-hidden="true"
                className="w-5 h-5"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"></path>
              </svg>
              <span className="sr-only">Close modal</span>
            </button>
            <svg
              className="w-11 h-11 mb-3.5 mx-auto text-gray-400 dark:text-white"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path d="M0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm14-7.5a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-1Zm0 4a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-1Zm-5-4a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-1Zm0 4a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-1Zm-5-4a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-1Zm0 4a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-1ZM20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4Z" />
            </svg>
            <p className="mb-4 text-gray-500 dark:text-gray-300">
              시간표 정보가 일치합니까?
            </p>
            <p className="mb-1 text-gray-500 dark:text-gray-300">
              {/* 상품명 : {product.name} */}
            </p>
            <p className="mb-1 text-gray-500 dark:text-gray-300">
              {/* 판매가 : {product.price}원 */}
            </p>
            <p className="mb-1 text-gray-500 dark:text-gray-300">
              {/* 기간 : {product.month}개월 */}
            </p>
            <p className="mb-4 text-gray-500 dark:text-gray-300">
              {/* 수업형태 : {product.classType} */}
            </p>
            <div className="flex justify-center items-center space-x-4">
              <button
                data-modal-toggle="deleteModal"
                type="button"
                className="py-2 px-3 text-sm font-medium text-gray-500 bg-white rounded-lg border border-gray-200 hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-primary-300 hover:text-gray-900 focus:z-10 dark:bg-gray-700 dark:text-gray-300 dark:border-gray-500 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-600"
                onClick={() => setConfirm(false)}
              >
                아니요. 취소할래요
              </button>
              <button
                type="submit"
                className="py-2 px-3 text-sm font-medium text-center text-white bg-green-600 rounded-lg hover:bg-green-700 focus:ring-4 focus:outline-none focus:ring-red-300 dark:bg-red-500 dark:hover:bg-red-600 dark:focus:ring-red-900"
                // onClick={addProduct}
              >
                네. 등록할게요
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddScheduleModal;
