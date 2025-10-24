import React from "react";
import BoxTitle from "../../../components/BoxTitle";
// import { FaMapMarkerAlt, FaClock, FaPhoneAlt, FaEnvelope } from 'react-icons/fa';

function contact() {
  return (
    <div>
      <div className=" container mx-auto flex justify-center items-center w-[80%] gap-5 my-10 h-[700px]">
        <div className="bg-white px-5 w-1/2 h-full ring-1 ring-black/10 shadow-[0_0_18px_0_rgba(0,0,0,0.06)] rounded-sm self-start">
          <div>
            <p className="font-bold text-[#000f8f] text-[25px] mt-3">
              Cửa hàng Dola Phone
            </p>
            <div className="grid grid-cols-2 mt-2 space-y-3 text-gray-700 ">
              <p className="flex items-center gap-2 ">
                <div className="border border-[000f8f] rounded-3xl p-2">
                  <FaMapMarkerAlt className="text-[#000f8f] " />
                </div>
                <div>
                  <span className="font-semibold">Địa chỉ</span>
                  <br />
                  70 Lữ Gia, Phường 15, Quận 11, TP.HCM
                </div>
              </p>
              <p className="flex items-center gap-2">
                <div className="border border-[000f8f] rounded-3xl p-2">
                  <FaClock className="text-[#000f8f]" />
                </div>
                <div>
                  <span className="font-semibold">Thời gian làm việc</span>
                  <br />
                  <span className="">8h - 22h</span>
                  <br />
                  Từ thứ 2 đến chủ nhật
                </div>
              </p>
              <p className="flex items-center gap-2">
                <div className="border border-[000f8f] rounded-3xl p-2">
                  <FaPhoneAlt className="text-[#000f8f]" />
                </div>
                <div>
                  <span className="font-semibold">Hotline</span>
                  <br />
                  1900 6750
                </div>
              </p>
              <p className="flex items-center gap-2">
                <div className="border border-[000f8f] rounded-3xl p-2">
                  <FaEnvelope className="text-[#000f8f]" />
                </div>
                <div>
                  <span className="font-semibold">Email</span>
                  <br />
                  support@sapo.vn
                </div>
              </p>
            </div>
          </div>
          <div className="mt-5">
            <p className="font-bold text-[#000f8f] text-[25px]">
              Liên hệ với chúng tôi
            </p>
            <p className="">
              Nếu bạn có thắc mắc gì, có thể gửi yêu cầu cho chúng tôi, và chúng
              tôi sẽ liên lạc lại với bạn sớm nhất có thể.{" "}
            </p>
            <div className="my-5">
              <form>
                <div class="space-y-12">
                  <div class="">
                    <div class="mt-5 space-y-4">
                      <div class="sm:col-span-4">
                        <div class="mt-2">
                          <div class="flex items-center rounded-md bg-white pl-3 outline-1 -outline-offset-1 outline-gray-300 focus-within:outline-2 focus-within:-outline-offset-2 focus-within:outline-indigo-600">
                            <input
                              id="name"
                              type="text"
                              name="name"
                              placeholder="Họ và tên"
                              class="block min-w-0 grow bg-white py-1.5 pr-3 pl-1 text-base text-gray-900 placeholder:text-gray-400 focus:outline-none sm:text-sm/6"
                            />
                          </div>
                        </div>
                      </div>

                      <div class="sm:col-span-4">
                        <div class="mt-2">
                          <div class="flex items-center rounded-md bg-white pl-3 outline-1 -outline-offset-1 outline-gray-300 focus-within:outline-2 focus-within:-outline-offset-2 focus-within:outline-indigo-600">
                            <input
                              id="email"
                              type="email"
                              name="email"
                              placeholder="Email"
                              class="block min-w-0 grow bg-white py-1.5 pr-3 pl-1 text-base text-gray-900 placeholder:text-gray-400 focus:outline-none sm:text-sm/6"
                            />
                          </div>
                        </div>
                      </div>

                      <div class="sm:col-span-4">
                        <div class="mt-2">
                          <div class="flex items-center rounded-md bg-white pl-3 outline-1 -outline-offset-1 outline-gray-300 focus-within:outline-2 focus-within:-outline-offset-2 focus-within:outline-indigo-600">
                            <input
                              id="phone"
                              type="number"
                              name="phone"
                              placeholder="Điện thoại*"
                              class="block min-w-0 grow bg-white py-1.5 pr-3 pl-1 text-base text-gray-900 placeholder:text-gray-400 focus:outline-none sm:text-sm/6"
                            />
                          </div>
                        </div>
                      </div>

                      <div class="col-span-full">
                        <div class="mt-2">
                          <textarea
                            id="content"
                            name="content"
                            placeholder="Nội dung"
                            rows="3"
                            class="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                          ></textarea>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div class="mt-6 flex items-center justify-start gap-x-6">
                  <button
                    type="submit"
                    class="rounded-md bg-[#000f8f] px-3 font-nomal text-white shadow-xs hover:bg-amber-300 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 w-full py-3"
                  >
                    Gửi thông tin
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>

        <div className="self-start w-1/2 h-full">
          <iframe
            title="Dola Phone Map"
            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d3919.5692504136196!2d106.696811!3d10.767643!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31752f1573f5d56f%3A0x300ecbf0d5ab5050!2zMTAgVHLhu4tuaCBWxINuIEPhuqVuLCBQaMaw4budbmcgQ-G6p3Ugw5RuZyBMw6NuaCwgUXXhuq1uIDEsIFRow6BuaCBwaOG7kSBI4buTIENow60gTWluaCwgVmnhu4d0IE5hbQ!5e0!3m2!1svi!2sus!4v1647421770627!5m2!1svi!2sus"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            loading="lazy"
          />
        </div>
      </div>
    </div>
  );
}

export default contact;
