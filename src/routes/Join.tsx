import axios from "axios";
import dayjs from "dayjs";
import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

interface Member {
  mem_id: number;
  mem_name: string;
  mem_phone: string;
  center_id: number;
}

interface Product {
  pro_id: number;
  pro_name: string;
  pro_days: number;
  pro_price: number;
  pro_class: string;
}

const Join = () => {
  const location = useLocation();
  const state = location.state as Member;
  const [products, setProducts] = useState<Product[]>([]);
  const [selectedProduct, setSelectedProduct] = useState<Product>();
  const [currentTime, setCurrentTime] = useState<String>("");
  const [endTime, setEndTime] = useState<String>("");
  const [confirm, setConfirm] = useState<Boolean>(false);

  useEffect(() => {
    const getMembers = async () => {
      try {
        const res = await axios.get("http://localhost:8000/product");
        setProducts(res.data);
      } catch (err) {
        console.log(err);
      }
    };
    getMembers();
  }, []);

  useEffect(() => {
    const getTime = async () => {
      try {
        const res = await axios.get("http://localhost:8000/time");
        setCurrentTime(res.data.result);
      } catch {}
    };
    getTime();
  }, []);

  const data: Product[] = [
    {
      pro_id: 1,
      pro_name: "성인반",
      pro_days: 30,
      pro_price: 170000,
      pro_class: "강사",
    },
    {
      pro_id: 2,
      pro_name: "성인반",
      pro_days: 90,
      pro_price: 450000,
      pro_class: "강사",
    },
    {
      pro_id: 3,
      pro_name: "성인반",
      pro_days: 180,
      pro_price: 720000,
      pro_class: "강사",
    },
    {
      pro_id: 4,
      pro_name: "성인반",
      pro_days: 30,
      pro_price: 140000,
      pro_class: "영상",
    },
  ];

  const joinMembership = () => {};

  return (
    <div className="p-10">
      <div className="flex flex-col">
        <div>
          <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
            <thead className="text-xs text-white font-bold uppercase bg-custom-C4C4C4 dark:bg-gray-700 dark:text-gray-400">
              <tr>
                <th scope="col" className="px-6 py-3 text-center text-base">
                  회원번호
                </th>
                <th scope="col" className="px-6 py-3 text-center text-base">
                  이름
                </th>
                <th scope="col" className="px-6 py-3 text-center text-base">
                  수업시간
                </th>
                <th scope="col" className="px-6 py-3 text-center text-base">
                  담당자
                </th>
                <th scope="col" className="px-6 py-3 text-center text-base">
                  전화번호
                </th>
              </tr>
            </thead>
            <tbody>
              <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                <th
                  scope="row"
                  className="px-6 py-4 font-medium text-base text-center text-black whitespace-nowrap dark:text-white"
                >
                  {state.mem_id}
                </th>
                <td className="px-6 py-4 text-black text-center text-base">
                  {state.mem_name}
                </td>
                <td className="px-6 py-4 text-black text-center text-base">
                  11:00
                </td>
                <td className="px-6 py-4 text-black text-center text-base">
                  홍길동
                </td>
                <td className="px-6 py-4 text-black text-center text-base">
                  {state.mem_phone.replace(
                    /^(\d{2,3})(\d{3,4})(\d{4})$/,
                    `$1-$2-$3`
                  )}
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="mt-10">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-6 mt-3 gap-4">
            {/* TODO data => products */}
            {data.map((product) => (
              <div
                className={`max-w-sm bg-white border-2 ${
                  product.pro_id === selectedProduct?.pro_id
                    ? "border-green-600"
                    : "border-gray-200"
                } rounded-xl shadow
                hover:bg-gray-100
                `}
                key={product.pro_id}
                onClick={() => {
                  setSelectedProduct(product);
                  // 발표용 데이터
                  setEndTime(
                    dayjs("2024-05-25")
                      .add(Number(product?.pro_days), "day")
                      .format("YYYY-MM-DD")
                  );
                  // setEndTime(
                  //   dayjs(currentTime.slice(0, 10))
                  //     .add(Number(product?.pro_days), "day")
                  //     .format("YYYY-MM-DD")
                  // );
                }}
              >
                <div className="bg-custom-C4C4C4 text-center py-2 rounded-t-xl">
                  <h5 className="text-xl font-bold tracking-tight text-black dark:text-white">
                    {product.pro_name}
                  </h5>
                </div>
                <p className="text-2xl pt-6 font-bold text-black dark:text-gray-400 text-center">
                  {product.pro_days / 30}개월
                </p>
                <p className="text-2xl py-6 font-bold text-green-600 dark:text-gray-400 text-center">
                  {product.pro_price
                    .toString()
                    .replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
                </p>
              </div>
            ))}
          </div>
        </div>
        <div className="mt-10 flex justify-between">
          <div className="text-xl">
            <span className="font-bold mr-3">
              {/* 시작일자 : {currentTime.slice(0, 10)} */}
              시작일자 : 2024-05-25
            </span>
            {/* <span className="font-bold">만기일자 : {endTime.slice(0, 10)}</span> */}
            <span className="font-bold">만기일자 : {endTime.slice(0, 10)}</span>
          </div>
          <div className="font-bold text-2xl">
            선택 상품&nbsp;
            <span className="text-green-600">
              {selectedProduct?.pro_price
                .toString()
                .replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
            </span>
            &nbsp;원
          </div>
        </div>
        <div className="mt-10 flex justify-center">
          <button
            type="button"
            className="block rounded-full bg-green-600 px-10 py-3 text-center text-sm text-white font-extrabold shadow-sm hover:text-white hover:bg-green-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green-600"
            onClick={() => {
              if (selectedProduct === undefined) {
                return console.log("불일치");
              }
              setConfirm(true);
            }}
          >
            등록
          </button>
        </div>
      </div>
      {/* 확인 모달 */}
      {confirm ? (
        <div>
          <div className="fixed top-0 right-0 left-0 w-full max-h-full min-h-screen md:inset-0 bg-black opacity-50"></div>
          <div
            tabIndex={-1}
            aria-hidden="true"
            className="overflow-y-auto overflow-x-hidden absolute z-50 w-full md:inset-0 h-modal md:h-full"
          >
            <div className="flex justify-center p-4 h-full md:h-auto">
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
                  className="text-gray-400 dark:text-gray-500 w-11 h-11 mb-3.5 mx-auto"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M14 2a3.963 3.963 0 0 0-1.4.267 6.439 6.439 0 0 1-1.331 6.638A4 4 0 1 0 14 2Zm1 9h-1.264A6.957 6.957 0 0 1 15 15v2a2.97 2.97 0 0 1-.184 1H19a1 1 0 0 0 1-1v-1a5.006 5.006 0 0 0-5-5ZM6.5 9a4.5 4.5 0 1 0 0-9 4.5 4.5 0 0 0 0 9ZM8 10H5a5.006 5.006 0 0 0-5 5v2a1 1 0 0 0 1 1h11a1 1 0 0 0 1-1v-2a5.006 5.006 0 0 0-5-5Z" />
                </svg>
                <p className="mb-4 text-gray-500 dark:text-gray-300">
                  등록 정보가 일치합니까?
                </p>
                <p className="mb-1 text-gray-500 dark:text-gray-300">
                  이름 : {state.mem_name}
                </p>
                <p className="mb-1 text-gray-500 dark:text-gray-300">
                  회원권 : {selectedProduct?.pro_name}
                </p>
                <p className="mb-4 text-gray-500 dark:text-gray-300">
                  상품금액 :{" "}
                  {selectedProduct?.pro_price
                    .toString()
                    .replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
                  원
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
                    onClick={joinMembership}
                  >
                    네. 등록할게요
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : null}
    </div>
  );
};

export default Join;
