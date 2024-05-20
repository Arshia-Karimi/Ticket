import "./App.css";
import sun from "./images/IV.png";
import { useState } from "react";

function App() {
  const [active, setActive] = useState(null);
  return (
    <div className="font-dana md:px-[297px] md:mt-28 px-4 mt-10">
      <div className="shadow border rounded-[25px] overflow-hidden">
        <div className="grid grid-cols-12 relative">
          <div className="bg-[#010660] text-white md:hidden flex absolute top-0 left-[85px] w-[122px] p-1 justify-center items-center md:p-[2.4px] text-[11px] rounded-br-2xl rounded-bl-2xl mx-6">
            ارزان ترین بلیط
          </div>
          <div className="absolute md:mt-20 md:w-[70px] py-1 w-20 md:px-1 md:py-0.5 text-[11px] md:rotate-[-90deg] bg-[#f5f5f5] text-center rounded-br-2xl rounded-bl-2xl md:rounded-br-none md:rounded-bl-none md:rounded-tl-2xl md:rounded-tr-2xl md:mr-[-25.5px] md:inset-x-0 left-5 ">
            چارتری
          </div>
          <div className="md:col-span-9 col-span-12 md:py-8">
            <div className="grid grid-cols-12 md:items-center">
              <div className="md:col-span-3 col-span-12">
                <div className="md:flex-col md:mt-0 mt-8 md:border-b-0 border-b-2 mx-2 md:mb-0 mb-4 md:pr-0 pr-4 md:mr-10">
                  <div className="flex items-center mb-3 md:block md:mb-0">
                    <img
                      src={sun}
                      alt="sun"
                      className="md:w-[70px] md:h-[70px] w-[53px] h-[53px] border  md:mr-7 rounded-[50%] p-[7.7px] md:p-3 object-cover md:mb-3"
                    />
                    <div className="md:text-center md:block flex flex-col mr-2 md:mr-0">
                      <div className="flex justify-center md:flex-col items-center">
                        <p className="font-medium text-xs md:ml-0 ml-2">
                          کیش ایر
                        </p>
                        <p className="md:text-[10px] md:mt-2 text-[9px] mt-1 text-color-0">
                          پرواز شماره Y97081
                        </p>
                      </div>
                      <div className="md:hidden flex items-center mt-2 md:mb-1">
                        <div className="md:text-[#010660] md:border md:px-4 md:py-1 font-medium text-[10px] ml-2 md:rounded-[30px] md:border-[#ff5050]">
                          بیزنس
                        </div>
                        <div className="font-medium md:border md:py-1 md:px-4 text-[10px] rounded-[30px] ml-2">
                          M۸۰
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="md:col-span-9 col-span-12 md:mt-0">
                <div className="flex justify-around md:justify-center items-center">
                  <div
                    dir="ltr"
                    className="text-center font-bold text-sm ml-[-25px] md:ml-5"
                  >
                    <p className="mb-2 text-nowrap">۱۹ : ۴۵</p>
                    <p className="mb-2">تهران</p>
                    <p className="text-color-0 font-medium text-xs">THR</p>
                  </div>

                  <div className="flex md:mt-[-33px] items-center ml-1 mr-1 flex-col">
                    <div className="md:flex hidden mb-1">
                      <div className="text-[#010660] border px-4 py-1 text-[10px] ml-2 rounded-[30px] border-[#010660]">
                        بیزنس
                      </div>
                      <div className="border py-1 px-4 text-[10px] rounded-[30px] ml-2">
                        M۸۰
                      </div>
                    </div>

                    <p className="my-2 font-medium text-[9px] md:text-[11px]">
                      جمعه 21 اردیبهشت 1403
                    </p>
                    <div className="hover:bg-[#010660] w-2 h-2 rounded-[50px] mb-[-4.5px] bg-[#e0e0e0] z-[2] text-[30px] ml-[200px] md:ml-[350px]"></div>
                    <div className="hover:bg-[#010660] md:w-[345px] w-[100%] h-0.5 overflow-hidden bg-[#e0e0e0] max-h-0.5"></div>
                    <div className="hover:bg-[#010660] w-2 h-2 rounded-[50px] md:ml-[-140px] mr-[200px] mt-[-5px] bg-[#e0e0e0] z-[2]  text-[30px]"></div>
                    <p className="ml-0.5 text-color-0 flex text-[9px] md:text-[10px] mt-1">
                      1 ساعت و 45 دقیقه پرواز
                    </p>
                  </div>

                  <div
                    dir="ltr"
                    className="text-center font-bold text-sm  mr-[-25px] md:mr-5"
                  >
                    <p className="mb-2 text-nowrap">۲۱ : ۳۵</p>
                    <p className="mb-2">کیش</p>
                    <p className="text-color-0 font-medium text-xs">KIH</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="md:col-span-3 col-span-12 mb-8 md:mb-0">
            <div className="text-center">
              <div className="bg-[#010660] text-white md:flex hidden  justify-center items-center p-[2.4px] text-[11px] rounded-br-2xl rounded-bl-2xl mx-6">
                ارزان ترین بلیط
              </div>
              <div className="flex justify-between items-center md:block border-dashed border-2 border-[#bdbdbd] my-4 mx-3 px-4 py-2 rounded-[30px]">
                <div className="md:flex justify-center flex-col items-center">
                  <p className="text-[10px] md:text-[11px] mb[20px] mb-[-5px] md:mb-1">
                    قیمت هر بلیط
                  </p>
                  <div className="flex items-center">
                    <h5 className="text-[21px] md:text-[23px] font-bold ml-1">
                      ۱,۵۵۹,۰۰۰
                    </h5>
                    <p className="text-[0.75rem]">تومان</p>
                  </div>
                </div>
                <div>
                  <p className="md:hidden text-[#010660] text-[10px]">
                    ۱ بلیط باقی مانده
                  </p>
                  <button className="bg-[#010660] my-2 text-sm font-bold text-white rounded-[30px] md:px-12 md:py-3 py-3 px-6">
                    انتخاب بلیط
                  </button>
                  <p className="md:block hidden text-[#010660] text-[10px]">
                    ۱ بلیط باقی مانده
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="right-0 md:w-[45%] bottom-0 flex overflow-hidden absolute border-t border-l w-full md:rounded-tl-[30px]">
            <p
              onClick={() => (active === 1 ? setActive(null) : setActive(1))}
              className="text-color-0 w-full font-bold  text-xs cursor-pointer bg-[#f5f5f5] items-center justify-center flex py-2 px-1 md:border-l-0 border-l-2"
            >
              اطلاعات پرواز
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-3 h-3 mr-1 mb-[-1px]"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="m19.5 8.25-7.5 7.5-7.5-7.5"
                />
              </svg>
            </p>
            <p
              onClick={() => (active === 2 ? setActive(null) : setActive(2))}
              className="text-color-0 w-full font-bold  text-xs cursor-pointer bg-[#f5f5f5] items-center justify-center flex py-2 px-1 md:border-l-0 border-l"
            >
              قوانین و کنسلی
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-3 h-3 mr-1 mb-[-1px]"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="m19.5 8.25-7.5 7.5-7.5-7.5"
                />
              </svg>
            </p>
            <p
              onClick={() => (active === 3 ? setActive(null) : setActive(3))}
              className="text-color-0 w-full  font-bold text-xs cursor-pointer bg-[#f5f5f5] items-center justify-center flex py-2 px-1"
            >
              پیش فاکتور
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-3 h-3 mr-1 mb-[-1px]"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="m19.5 8.25-7.5 7.5-7.5-7.5"
                />
              </svg>
            </p>
          </div>
        </div>

        {active === 1 ? (
          <div className="border-t p-4">
            <div className="pt-3 md:px-4 pb-4">
              <div className="border overflow-hidden rounded-[30px]">
                <table className="m-[-1px] w-width font-bold">
                  <tbody>
                    <tr>
                      <td className="border border-[#dee2e6]  p-[.75rem] text-center">
                        <p className="text-[12px]">شماره پرواز</p>
                      </td>
                      <td className="border border-[#dee2e6] p-[.75rem] text-center">
                        <p className="text-[12px]">۷۱۲۵</p>
                      </td>
                    </tr>
                    <tr>
                      <td className="border border-[#dee2e6]  p-[.75rem] text-center">
                        <p className="text-[12px]">مقدار بار مجاز</p>
                      </td>

                      <td className="border border-[#dee2e6] p-[.75rem] text-center">
                        <p className="text-[12px]">25 kg</p>
                      </td>
                    </tr>
                    <tr>
                      <td className="border border-[#dee2e6]  p-[.75rem] text-center">
                        <p className="text-[12px]">نام ترمینال رفت</p>
                      </td>

                      <td className="border border-[#dee2e6] p-[.75rem] text-center">
                        <p className="text-[12px]">شماره 1 مهرآباد</p>
                      </td>
                    </tr>
                    <tr>
                      <td className="border border-[#dee2e6]  p-[.75rem] text-center">
                        <p className="text-[12px]">فرودگاه مبدا</p>
                      </td>

                      <td className="border border-[#dee2e6] p-[.75rem] text-center">
                        <p className="text-[12px]">فرودگاه مهرآباد (THR)</p>
                      </td>
                    </tr>
                    <tr>
                      <td className="border border-[#dee2e6]  p-[.75rem] text-center">
                        <p className="text-[12px]">فرودگاه مقصد</p>
                      </td>

                      <td className="border border-[#dee2e6] p-[.75rem] text-center">
                        <p className="text-[12px]">
                          فرودگاه بین المللی کیش (KIH)
                        </p>
                      </td>
                    </tr>
                    <tr>
                      <td className="border border-[#dee2e6]  p-[.75rem] text-center">
                        <p className="text-[12px]">کلاس نرخی</p>
                      </td>
                      <td className="border border-[#dee2e6] p-[.75rem] text-center">
                        <p className="text-[12px]">بیزنس/CP</p>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        ) : null}

        {active === 2 ? (
          <div className="border-t p-4">
            <div className="mb-5">
              <div className="flex mt-2 items-center mb-2 md:mb-8">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6 mb-[-2px] ml-1"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 9v3.75m9-.75a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9 3.75h.008v.008H12v-.008Z"
                  />
                </svg>
                <p className="md:hidden font-medium text-[12px]">
                  جریمه کنسلی براساس زمان باقی مانده تا پروا
                </p>

                <p className="md:block hidden font-medium text-[13px]">
                  درصد جریمه کنسلی بلیط براساس قوانین ایرلاین صادر کننده و زمان
                  باقی‌مانده تا پرواز
                </p>
              </div>

              <div className="grid grid-cols-12">
                <div className="md:col-span-6 col-span-12">
                  <div className="md:border-l md:border-b-0 border-b flex justify-between md:justify-center items-center md:flex-col flex-row-reverse">
                    <div className="w-[50px] h-[50px] text-[#f44336] md:mt-0 mt-[20px] md:w-[60px] md:h-[60px] flex md:text-[16px] bg-[#f5f5f5] items-center font-bold rounded-full mb-4 justify-center">
                      ٪ ۲۰
                    </div>
                    <div className="text-[11px] items-end">
                      از زمان صدور بلیط تا 24 ساعت قبل از پرواز
                    </div>
                  </div>
                </div>
                <div className="md:col-span-6 col-span-12">
                  <div className="flex justify-between md:justify-center items-center md:flex-col flex-row-reverse ">
                    <div className="w-[50px] h-[50px] text-[#f44336] md:mt-0 mt-[20px] md:w-[60px] md:h-[60px] flex md:text-[16px] bg-[#f5f5f5] items-center font-bold rounded-full md:mb-4  justify-center">
                      ٪ ۴۰
                    </div>
                    <div className="text-[11px]">
                      از 24 ساعت قبل از پرواز به بعد
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ) : null}

        {active === 3 ? (
          <div className="border-t p-4">
            <div className="pt-3 md:px-4 pb-4">
              <div className="border overflow-hidden rounded-[30px]">
                <table className="m-[-1px] w-width">
                  <tbody className="font-bold text-center">
                    <tr>
                      <td className="border border-[#dee2e6] p-[.75rem]">
                        <p className="text-color-0 text-[12px]">مسافر</p>
                      </td>
                      <td className="border border-[#dee2e6] p-[.75rem]">
                        <p className="text-color-0 text-[12px]">تعداد</p>
                      </td>
                      <td className="border border-[#dee2e6] p-[.75rem]">
                        <p className="text-color-0 text-[12px]">
                          قیمت پایه بلیط + مالیات و عوارض پرواز
                        </p>
                      </td>
                      <td className="border border-[#dee2e6] p-[.75rem]">
                        <p className="text-color-0 text-[12px]">جمع</p>
                      </td>
                    </tr>
                  </tbody>

                  <tbody>
                    <tr className="text-center">
                      <td className="border border-[#dee2e6] p-[.75rem]">
                        <p className="text-[12px]">بزرگسال</p>
                      </td>

                      <td className="border border-[#dee2e6] p-[.75rem]">
                        <p className="text-[12px]">۱</p>
                      </td>

                      <td className="border border-[#dee2e6] p-[.75rem]">
                        <p className="text-[12px]">۱,۵۵۹,۰۰۰ تومان</p>
                      </td>

                      <td className="border border-[#dee2e6] p-[.75rem]">
                        <p className="text-[12px]">۱,۵۵۹,۰۰۰ تومان</p>
                      </td>
                    </tr>

                    <tr className="font-bold">
                      <td
                        colSpan={3}
                        className="border border-[#dee2e6] p-[.75rem] text-left pl-12"
                      >
                        <p className="text-[12px]">مبلغ قابل پرداخت</p>
                      </td>

                      <td className="border text-center border-[#dee2e6] p-[.75rem]">
                        <p className="text-[12px]">۱,۵۵۹,۰۰۰ تومان</p>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        ) : null}
      </div>
    </div>
  );
}

export default App;
