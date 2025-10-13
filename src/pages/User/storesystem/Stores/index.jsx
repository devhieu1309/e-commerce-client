function Stores() {
  return (
    <>
      <div className="container m-auto mt-8 mb-8 pl-30 pr-30">
        <div className="flex space-x-2">
          <div className="bg-blue-900 rounded-md w-[325px] h-[120px] text-white flex">
            <div className="">
              <img
                src="https://bizweb.dktcdn.net/100/502/883/themes/934584/assets/icon_hethong1.png?1758009699055"
                alt=""
                className="mt-2 ml-5"
              />
            </div>
            <div className="ml-auto mr-5">
              <h3 className="text-xl">Cửa hàng</h3>
              <h1 className="text-6xl font-bold mt-7">50+</h1>
            </div>
          </div>
          <div className="bg-blue-900 rounded-md w-[325px] h-[120px] text-white flex">
            <div className="">
              <img
                src="https://bizweb.dktcdn.net/100/502/883/themes/934584/assets/icon_hethong2.png?1758009699055"
                alt=""
                className="mt-2 ml-5"
              />
            </div>
            <div className="ml-auto mr-5">
              <h3 className="text-xl">Tỉnh thành</h3>
              <h1 className="text-6xl font-bold mt-7">30+</h1>
            </div>
          </div>
          <div className="bg-blue-900 rounded-md w-[325px] h-[120px] text-white flex">
            <div className="">
              <img
                src="https://bizweb.dktcdn.net/100/502/883/themes/934584/assets/icon_hethong3.png?1758009699055"
                alt=""
                className="mt-2 ml-5"
              />
            </div>
            <div className="ml-auto ">
              <h3 className="text-xl">Văn phòng đại diện</h3>
              <h1 className="text-6xl font-bold mt-7">3</h1>
            </div>
          </div>
          <div className="bg-blue-900 rounded-md w-[325px] h-[120px] text-white flex">
            <div className="">
              <img
                src="https://bizweb.dktcdn.net/100/502/883/themes/934584/assets/icon_hethong4.png?1758009699055"
                alt=""
                className="mt-2 ml-5"
              />
            </div>
            <div className="ml-auto mr-5">
              <h3 className="text-xl">Nhân sự</h3>
              <h1 className="text-6xl font-bold mt-7">500+</h1>
            </div>
          </div>
        </div>
      </div>

      <div className="flex w-10/12 h-screen mt-10 mb-10 mr-[120px] ml-[120px] bg-gray-100 p-8 rounded-md shadow-md">
        {/* Cột trái */}
        <div className="w-4/12 p-4 overflow-y-auto bg-white rounded-md shadow-md">
          {/* Bộ lọc */}
          <div className="p-4 mb-5 bg-gray-100 rounded-lg ">
            <h4 className="mb-2 text-gray-600">Tỉnh / Thành</h4>
            <select className="w-full p-2 mb-3 text-base text-white bg-blue-800 rounded-md">
              <option className="text-black bg-white" value="">
                Chọn tỉnh thành
              </option>
              <option className="text-black bg-white" value="1">
                TP HCM
              </option>
              <option className="text-black bg-white" value="2">
                Hà Nội
              </option>
              <option className="text-black bg-white" value="3">
                Đồng Nai
              </option>
            </select>

            <h4 className="text-gray-600">Nhập tên cửa hàng</h4>
            <input
              type="text"
              className="w-full p-2 mt-2 text-gray-600 border border-blue-300 rounded-md"
              placeholder="Nhập tên cửa hàng"
            />
          </div>

          {/* Danh sách cửa hàng */}
          {[1, 2, 3, 4].map((i) => (
            <div
              key={i}
              className="w-full p-4 mb-4 transition border border-gray-300 rounded-lg hover:border-blue-600"
            >
              <p className="text-base font-semibold text-blue-500">
                Dola Sài Gòn
              </p>
              <p className="flex mt-2 text-gray-700">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="22"
                  height="22"
                  viewBox="0 0 22 22"
                  fill="none"
                  className="mr-2"
                >
                  <path
                    d="M11.0008 0C6.60743 0 3.0332 3.57423 3.0332 7.96752C3.0332 13.4197 10.1634 21.4239 10.467 21.762C10.7521 22.0796 11.2499 22.079 11.5346 21.762C11.8381 21.4239 18.9683 13.4197 18.9683 7.96752C18.9683 3.57423 15.3941 0 11.0008 0ZM11.0008 11.9762C8.79037 11.9762 6.99213 10.1779 6.99213 7.96752C6.99213 5.75712 8.79041 3.95888 11.0008 3.95888C13.2111 3.95888 15.0094 5.75717 15.0094 7.96757C15.0094 10.178 13.2111 11.9762 11.0008 11.9762Z"
                    fill="#949494"
                  />
                </svg>
                Tầng 3, 70 Lữ Gia, Q.11, TP. HCM
              </p>
              <p className="flex mt-2 text-blue-800">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="21"
                  height="21"
                  viewBox="0 0 21 21"
                  fill="none"
                  className="mr-2"
                >
                  <path
                    d="M18.0945 14.616C16.8259 13.531 15.5385 12.8737 14.2854 13.9571L13.5372 14.6119C12.9898 15.0872 11.972 17.3081 8.03667 12.7811C4.10219 8.25986 6.44354 7.5559 6.99179 7.08468L7.7441 6.42907C8.99058 5.34322 8.52018 3.97627 7.62117 2.56917L7.07866 1.71688C6.17556 0.313051 5.19214 -0.6089 3.94238 0.475314L3.26711 1.06536C2.71475 1.46774 1.17079 2.77569 0.796277 5.26045C0.345545 8.24183 1.7674 11.6559 5.02496 15.4019C8.27842 19.1495 11.4639 21.032 14.4813 20.9992C16.989 20.9721 18.5035 19.6265 18.9772 19.1372L19.6549 18.5464C20.9014 17.463 20.1269 16.3599 18.8575 15.2724L18.0945 14.616Z"
                    fill="#949494"
                  />
                </svg>
                1900 6750
              </p>
              <button className="px-4 py-2 mt-3 transition bg-blue-100 rounded-full hover:bg-yellow-400 hover:text-white">
                Chỉ đường
              </button>
            </div>
          ))}
        </div>

        {/* Cột phải */}
        <div className="w-8/12">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d3919.5692504136196!2d106.696811!3d10.767643!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31752f1573f5d56f%3A0x300ecbf0d5ab5050!2zMTAgVHLhu4tuaCBWxINuIEPhuqVuLCBQaMaw4budbmcgQ-G6p3Ugw5RuZyBMw6NuaCwgUXXhuq1uIDEsIFRow6BuaCBwaOG7kSBI4buTIENow60gTWluaCwgVmnhu4d0IE5hbQ!5e0!3m2!1svi!2sus!4v1647421770627!5m2!1svi!2sus"
            style={{ border: 0 }}
            className="w-full h-full"
            allowFullScreen
            loading="lazy"
          ></iframe>
        </div>
      </div>
    </>
  );
}
export default Stores;
