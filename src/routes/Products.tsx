import React, { useEffect, useState } from "react";
import AddProductModal from "../components/AddProductModal";
import axios from "axios";

interface Product {
  pro_id: number;
  pro_name: string;
  pro_days: number;
  pro_price: number;
  pro_class: string;
}

const Products: React.FC = () => {
  const [modalToggle, setModalToggle] = useState<boolean>(false);
  const [products, setProducts] = useState<Product[]>([]);

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

  return (
    <div className="p-10">
      <div className="flex justify-between">
        <span className="font-bold text-xl">회원권 관리</span>
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
              <th scope="col" className="px-6 py-3 text-center text-base">
                상품명
              </th>
              <th scope="col" className="px-6 py-3 text-center text-base">
                수업형태
              </th>
              <th scope="col" className="px-6 py-3 text-center text-base">
                이용기간
              </th>
              <th scope="col" className="px-6 py-3 text-center text-base">
                금액
              </th>
            </tr>
          </thead>
          <tbody>
            {/* TODO data => products */}
            {data.map((product) => (
              <tr
                className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600"
                key={product.pro_id}
              >
                <td className="px-6 py-4 text-black text-center text-base">
                  {product.pro_name}
                </td>
                <td className="px-6 py-4 text-black text-center text-base">
                  {product.pro_class}
                </td>
                <td className="px-6 py-4 text-black text-center text-base">
                  {product.pro_days}일
                </td>
                <td className="px-6 py-4 text-black text-center text-base">
                  {product.pro_price
                    .toString()
                    .replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
                  원
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      {modalToggle ? <AddProductModal setModalToggle={setModalToggle} /> : null}
    </div>
  );
};

export default Products;
