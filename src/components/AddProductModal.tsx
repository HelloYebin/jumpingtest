import React, { useState } from "react";
import axios from "axios";

interface ModalProps {
  setModalToggle: React.Dispatch<React.SetStateAction<boolean>>;
}

interface Product {
  name: string;
  month: number;
  price: number;
  classType: string;
  center_id: number;
}

const AddProductModal: React.FC<ModalProps> = ({ setModalToggle }) => {
  const [product, setProduct] = useState<Product>({
    name: "",
    month: 0,
    price: 0,
    classType: "",
    center_id: 1,
  });
  const [confirm, setConfirm] = useState<Boolean>(false);

  const addProduct = async () => {
    if (
      !Object.values(product).every((x) => x !== 0 && x !== "") ||
      product.month < 0 ||
      product.month > 12
    ) {
      setConfirm(false);
      return console.log("불일치");
    }
    try {
      await axios.post(`http://localhost:8000/product`, product);
      window.location.reload();
    } catch (e) {
      console.log(e);
    } finally {
    }
  };

  return (
    <div
      id="add-product-modal"
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
              회원권 등록
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
                <tr className="border-b border-gray-200 dark:border-gray-700 h-12">
                  <th
                    scope="row"
                    className="text-center p-2 font-medium text-white whitespace-nowrap bg-custom-C4C4C4 dark:text-white dark:bg-gray-800"
                  >
                    상품명
                  </th>
                  <td className="px-6 py-2 bg-white text-black max-w-52">
                    <input
                      type="text"
                      id="product"
                      className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full px-2.5 py-1.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      placeholder="-없이 입력"
                      required
                      onChange={(e) =>
                        setProduct({ ...product, name: e.target.value })
                      }
                    />
                  </td>
                </tr>
                <tr className="border-b border-gray-200 dark:border-gray-700 h-12">
                  <th
                    scope="row"
                    className="text-center p-2 font-medium text-white whitespace-nowrap bg-custom-C4C4C4 dark:text-white dark:bg-gray-800"
                  >
                    판매가
                  </th>
                  <td className="px-6 py-2 bg-white text-black flex items-center">
                    <input
                      type="text"
                      id="price"
                      className="bg-gray-50 border border-gray-300 max-w-52 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full px-2.5 py-1.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      placeholder="숫자만 입력하세요"
                      value={product.price}
                      onChange={(e) =>
                        setProduct({
                          ...product,
                          price: Number(e.target.value.replace(/[^0-9]/g, "")),
                        })
                      }
                    />
                    원
                  </td>
                </tr>
                <tr className="border-b border-gray-200 dark:border-gray-700 h-12">
                  <th
                    scope="row"
                    className="text-center p-2 font-medium text-white whitespace-nowrap bg-custom-C4C4C4 dark:text-white dark:bg-gray-800"
                  >
                    기간
                  </th>
                  <td className="px-6 py-2 bg-white text-black flex items-center">
                    <input
                      type="number"
                      id="month"
                      className="bg-gray-50 border border-gray-300 max-w-52 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full px-2.5 py-1.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      min={1}
                      max={12}
                      onChange={(e) =>
                        setProduct({
                          ...product,
                          month: Number(e.target.value),
                        })
                      }
                    />
                    개월
                  </td>
                </tr>
                <tr className="h-12">
                  <th
                    scope="row"
                    className="text-center p-2 font-medium text-white whitespace-nowrap bg-custom-C4C4C4 dark:text-white dark:bg-gray-800"
                  >
                    수업형태
                  </th>
                  <td className="px-6 py-2 text-black">
                    <div className="flex">
                      <div className="flex items-center mr-6">
                        <input
                          id="instructor"
                          type="radio"
                          value="강사"
                          name="class"
                          className="w-4 h-4 text-green-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                          onClick={(e: React.MouseEvent<HTMLElement>) =>
                            setProduct({
                              ...product,
                              classType: (e.target as HTMLButtonElement).value,
                            })
                          }
                        />
                        <label
                          htmlFor="instructor"
                          className="ms-1 text-sm font-medium text-gray-900 dark:text-gray-300"
                        >
                          강사
                        </label>
                      </div>
                      <div className="flex items-center mr-2">
                        <input
                          id="video"
                          type="radio"
                          value="영상"
                          name="class"
                          onClick={(e: React.MouseEvent<HTMLElement>) =>
                            setProduct({
                              ...product,
                              classType: (e.target as HTMLButtonElement).value,
                            })
                          }
                          className="w-4 h-4 text-green-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                        />
                        <label
                          htmlFor="video"
                          className="ms-1 text-sm font-medium text-gray-900 dark:text-gray-300"
                        >
                          영상
                        </label>
                      </div>
                    </div>
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
              className="w-11 h-11 mb-3.5 mx-auto text-gray-400 dark:text-gray-500"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 20 18"
            >
              <path d="M18 0H6a2 2 0 0 0-2 2h14v12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2Z" />
              <path d="M14 4H2a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2ZM2 16v-6h12v6H2Z" />
            </svg>
            <p className="mb-4 text-gray-500 dark:text-gray-300">
              회원권 정보가 일치합니까?
            </p>
            <p className="mb-1 text-gray-500 dark:text-gray-300">
              상품명 : {product.name}
            </p>
            <p className="mb-1 text-gray-500 dark:text-gray-300">
              판매가 : {product.price}원
            </p>
            <p className="mb-1 text-gray-500 dark:text-gray-300">
              기간 : {product.month}개월
            </p>
            <p className="mb-4 text-gray-500 dark:text-gray-300">
              수업형태 : {product.classType}
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
                onClick={addProduct}
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

export default AddProductModal;
