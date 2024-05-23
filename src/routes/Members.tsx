import React, { useEffect, useState } from "react";
import axios from "axios";
import { NavLink } from "react-router-dom";
import AddMemberModal from "../components/AddMemberModal";
import testImage1 from "./../images/test/pane1.png";
import testImage2 from "./../images/test/pane2.png";
import testImage3 from "./../images/test/pane3.png";
import testImage4 from "./../images/test/pane4.png";
import testImage5 from "./../images/test/pane5.png";

interface Member {
  mem_id: number;
  mem_name: string;
  mem_phone: string;
  center_id: number;
  image: string;
}

interface Order {
  memo_id: number;
  memo_start_date: string;
  pro_name: string;
}

const Members: React.FC = () => {
  const [modalToggle, setModalToggle] = useState<boolean>(false);
  const [members, setMembers] = useState<Member[]>([]);
  const [orders, setOrders] = useState<Order[]>([]);
  const data: Member[] = [
    {
      mem_id: 1,
      mem_phone: "01012341234",
      mem_name: "홍길동",
      center_id: 1,
      image: testImage1,
    },
    {
      mem_id: 2,
      mem_phone: "01011112222",
      mem_name: "김점핑",
      center_id: 1,
      image: testImage2,
    },
    {
      mem_id: 3,
      mem_phone: "01022221234",
      mem_name: "박하이",
      center_id: 1,
      image: testImage3,
    },
    {
      mem_id: 4,
      mem_phone: "01012341234",
      mem_name: "이예시",
      center_id: 1,
      image: testImage4,
    },
    {
      mem_id: 5,
      mem_phone: "01000000000",
      mem_name: "홍이미",
      center_id: 1,
      image: testImage5,
    },
  ];
  const [selectedMember, setSelectedMember] = useState<Member | null>(
    // members[0]
    data[0]
  );

  useEffect(() => {
    const getMembers = async () => {
      try {
        const res = await axios.get("http://localhost:8000/member");
        setMembers(res.data);
        setSelectedMember(res.data[0]);
      } catch (err) {
        console.log(err);
      }
    };
    getMembers();
  }, []);

  const getMemberInfo = async (member: Member) => {
    try {
      setSelectedMember(member);
      const res = await axios.get("http://localhost:8000/member/order", {
        params: member,
      });
      setOrders(res.data);
    } catch (err) {
      console.log(err);
    }
  };

  if (modalToggle) {
    //모달 오픈시 스크롤 방지
    document.body.style.overflow = "hidden";
  } else {
    document.body.style.overflow = "auto";
  }
  return (
    <div className="p-10">
      <div className="flex flex-col-reverse sm:flex-row">
        <div className="flex flex-col mx-5 min-w-48">
          <div className="flex justify-between items-center">
            <span className="font-bold text-xl">회원 관리</span>
            <button
              type="button"
              className="block rounded-2xl bg-custom-727272 px-4 py-1 text-center text-sm text-white font-extrabold shadow-sm hover:text-white hover:bg-gray-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green-600"
              onClick={() => setModalToggle(true)}
            >
              회원추가
            </button>
          </div>
          <div className="relative overflow-x-auto shadow-md sm:rounded-lg my-4">
            <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
              <thead className="text-xs text-white font-bold uppercase bg-custom-C4C4C4 dark:bg-gray-700 dark:text-gray-400">
                <tr>
                  <th scope="col" className="px-6 py-3 text-center text-base">
                    회원번호
                  </th>
                  <th scope="col" className="px-6 py-3 text-center text-base">
                    이름
                  </th>
                </tr>
              </thead>
              <tbody>
                {/* TODO data => members */}
                {data.map((member) => (
                  <tr
                    key={member.mem_id}
                    className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600"
                    onClick={() => getMemberInfo(member)}
                  >
                    <th
                      scope="row"
                      className="px-6 py-4 text-base font-medium text-center text-black whitespace-nowrap dark:text-white"
                    >
                      {member.mem_id}
                    </th>
                    <td className="px-6 py-4 text-base text-black text-center">
                      {member.mem_name}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
        <div className="flex flex-col mx-5 flex-1 mb-10">
          <div className="flex flex-col items-center p-10">
            <img
              alt="panelImage"
              // src="/img/yebin.png"
              src={selectedMember?.image}
              style={{ width: "6rem", height: "6rem" }}
              className="rounded-full"
            />
            <span className="mt-5 text-black text-3xl font-bold">
              {selectedMember?.mem_name}
            </span>
          </div>
          <div>
            <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
              <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                <tbody>
                  <tr className="border-b border-gray-200 dark:border-gray-700">
                    <th
                      scope="row"
                      className="text-base text-center p-2 font-medium text-white whitespace-nowrap bg-custom-C4C4C4 dark:text-white dark:bg-gray-800"
                    >
                      회원번호
                    </th>
                    <td className="px-6 py-2 bg-white text-black max-w-52">
                      {selectedMember?.mem_id}
                    </td>
                    <td className="text-base text-center bg-custom-C4C4C4 text-white dark:bg-gray-800">
                      성별
                    </td>
                    <td className="px-6 py-2 bg-white text-black">
                      <div className="flex">
                        <div className="flex items-center mr-2">
                          <input
                            id="man"
                            type="radio"
                            value=""
                            name="gender"
                            className="w-4 h-4 text-green-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                          />
                          <label
                            htmlFor="man"
                            className="ms-1 text-sm font-medium text-gray-900 dark:text-gray-300"
                          >
                            남
                          </label>
                        </div>
                        <div className="flex items-center mr-2">
                          <input
                            id="woman"
                            type="radio"
                            value=""
                            name="gender"
                            className="w-4 h-4 text-green-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                          />
                          <label
                            htmlFor="woman"
                            className="ms-1 text-sm font-medium text-gray-900 dark:text-gray-300"
                          >
                            여
                          </label>
                        </div>
                      </div>
                    </td>
                  </tr>
                  <tr className="border-b border-gray-200 dark:border-gray-700">
                    <th
                      scope="row"
                      className="text-base text-center p-2 font-medium text-white whitespace-nowrap bg-custom-C4C4C4 dark:text-white dark:bg-gray-800"
                    >
                      이름
                    </th>
                    <td className="px-6 py-2 bg-white text-black max-w-52">
                      {selectedMember?.mem_name}
                    </td>
                    <td className="text-base text-center bg-custom-C4C4C4 text-white dark:bg-gray-800">
                      사물함
                    </td>
                    <td className="px-6 py-2 bg-white text-black">
                      <div className="flex">
                        <div className="flex items-center mr-2">
                          <input
                            id="locker-true"
                            type="radio"
                            value=""
                            name="locker"
                            className="w-4 h-4 text-green-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                          />
                          <label
                            htmlFor="locker-true"
                            className="ms-1 text-sm font-medium text-gray-900 dark:text-gray-300"
                          >
                            등록
                          </label>
                        </div>
                        <div className="flex items-center mr-2">
                          <input
                            id="locker-false"
                            type="radio"
                            value=""
                            name="locker"
                            className="w-4 h-4 text-green-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                          />
                          <label
                            htmlFor="locker-false"
                            className="ms-1 text-sm font-medium text-gray-900 dark:text-gray-300"
                          >
                            미등록
                          </label>
                        </div>
                      </div>
                    </td>
                  </tr>
                  <tr className="border-b border-gray-200 dark:border-gray-700">
                    <th
                      scope="row"
                      className="text-base text-center p-2 font-medium text-white whitespace-nowrap bg-custom-C4C4C4 dark:text-white dark:bg-gray-800"
                    >
                      생년월일
                    </th>
                    <td className="px-6 py-2 bg-white text-black">
                      1996.06.14
                    </td>
                    <td className="text-base text-center p-2 bg-custom-C4C4C4 text-white dark:bg-gray-800">
                      담당자
                    </td>
                    <td className="px-6 py-2 bg-white text-black">
                      <input
                        type="text"
                        id="manager"
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full px-2.5 py-1.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        placeholder="John"
                        required
                      />
                    </td>
                  </tr>
                  <tr className="border-b border-gray-200 dark:border-gray-700">
                    <th
                      scope="row"
                      className="text-base text-center p-2 font-medium text-white whitespace-nowrap bg-custom-C4C4C4 dark:text-white dark:bg-gray-800"
                    >
                      등록일자
                    </th>
                    <td className="px-6 py-2 bg-white text-black">
                      2024.05.25
                    </td>
                    <td className="text-base text-center p-2 bg-custom-C4C4C4 text-white dark:bg-gray-800">
                      수업시간
                    </td>
                    <td className="px-6 py-2 bg-white text-black">11:00</td>
                  </tr>
                  <tr>
                    <th
                      scope="row"
                      className="text-base text-center p-2 font-medium text-white whitespace-nowrap bg-custom-C4C4C4 dark:text-white dark:bg-gray-800"
                    >
                      전화번호
                    </th>
                    <td className="px-6 py-2 bg-white text-black max-w-52">
                      {selectedMember?.mem_phone.replace(
                        /^(\d{2,3})(\d{3,4})(\d{4})$/,
                        `$1-$2-$3`
                      )}
                    </td>
                    <td className="text-base text-center p-2 bg-custom-C4C4C4 text-white dark:bg-gray-800">
                      메모
                    </td>
                    <td className="px-6 py-2 bg-white text-black">
                      왼쪽 다리 수술 한 적 있음
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div className="my-10">
              <div className="flex justify-end my-4">
                <NavLink to="/join" state={selectedMember}>
                  <span className="block rounded-2xl bg-green-600 px-4 py-1 text-center text-sm text-white font-extrabold shadow-sm hover:text-white hover:bg-green-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green-600">
                    회원권 등록
                  </span>
                </NavLink>
              </div>
              <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                <thead className="text-xs text-white font-bold uppercase bg-custom-C4C4C4 dark:bg-gray-700 dark:text-gray-400">
                  <tr>
                    <th scope="col" className="text-base px-6 py-3 text-center">
                      회원권
                    </th>
                    <th scope="col" className="text-base px-6 py-3 text-center">
                      시작일자
                    </th>
                    <th scope="col" className="text-base px-6 py-3 text-center">
                      만기일자
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {orders.map((order) => (
                    <tr
                      className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600"
                      key={order.memo_id}
                    >
                      <th
                        scope="row"
                        className="px-6 py-4 font-medium text-center text-black whitespace-nowrap dark:text-white"
                      >
                        {order.pro_name}
                      </th>
                      <td className="px-6 py-4 text-black text-center">
                        {order.memo_start_date.slice(0, 10)}
                      </td>
                      <td className="px-6 py-4 text-black text-center">
                        2024-06-14
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
      {modalToggle ? <AddMemberModal setModalToggle={setModalToggle} /> : null}
    </div>
  );
};

export default Members;
