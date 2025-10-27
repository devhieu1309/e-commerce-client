import { Link } from "react-router-dom";


function Header({ user, onLogout }) {
  return (
    <>
      <header className="relative group/header">
        <div className="fixed top-0 right-0 left-0 z-50 bg-[#000F8F] py-2 text-white">
          <div>
            <div className="container flex items-center justify-between px-32 mx-auto">
              <div className="w-[219px] h-[45px]">
                <img src="/logo.webp" alt="Ảnh logo" />
              </div>
              <div className="bg-[#2E3AA3] z-10 flex p-2 items-center justify-center space-x-3 rounded-sm group focus-within:bg-amber-500 relative">
                <button className="flex items-center space-x-2 cursor-pointer">
                  <img
                    className="h-[20px] w-[20px]"
                    src="/icons8-navigation-menu-50.png"
                    alt="Danh mục"
                  />
                  <span className="text-[14px]">Danh mục</span>
                </button>
                <div className="bg-white absolute top-[98px] -left-[230px] group-focus-within:flex hidden rounded-md">
                  <ul className="flex p-1 flex-col space-y-1 w-[270px] text-black text-[16px]">
                    <li className="flex items-center justify-between px-3 py-1 space-x-2 group/category hover:bg-gray-200">
                      <div className="relative flex items-center space-x-2">
                        <div>
                          <img
                            className="w-[25px] h-[25px] object-cover"
                            src="/icons8-iphone-50.png"
                            alt="Iphone"
                          />
                        </div>
                        <span>Iphone</span>
                        <div className="bg-white p-2 h-[262px] w-[800px] rounded-md fixed top-[116px] left-[402px] hidden grid-cols-3 group-hover/category:grid">
                          <div className="cursor-pointer group/sub-category">
                            <h3 className="font-medium group-hover/sub-category:text-amber-500">
                              Iphone 15 Series
                            </h3>
                            <ul className="pt-4">
                              <li className="hover:text-amber-400">
                                Iphone 15
                              </li>
                              <li className="hover:text-amber-400">
                                Iphone 15 Plus
                              </li>
                              <li className="hover:text-amber-400">
                                Iphone 15 Pro
                              </li>
                              <li className="hover:text-amber-400">
                                Iphone 15 Pro Max
                              </li>
                            </ul>
                          </div>
                          <div className="cursor-pointer group/sub-category">
                            <h3 className="font-medium group-hover/sub-category:text-amber-500">
                              Iphone 14 Series
                            </h3>
                            <ul className="pt-4">
                              <li className="hover:text-amber-400">
                                Iphone 14 Pro Max
                              </li>
                              <li className="hover:text-amber-400">
                                Iphone 14 Pro
                              </li>
                              <li className="hover:text-amber-400">
                                Iphone 14 Plus
                              </li>
                              <li className="hover:text-amber-400">
                                Iphone 14
                              </li>
                            </ul>
                          </div>
                          <div className="cursor-pointer group/sub-category">
                            <h3 className="font-medium group-hover/sub-category:text-amber-500">
                              Iphone 13
                            </h3>
                            <ul className="pt-4">
                              <li className="hover:text-amber-400">
                                Iphone 13
                              </li>
                              <li className="hover:text-amber-400">
                                Iphone 13 mini
                              </li>
                            </ul>
                          </div>
                          <div className="cursor-pointer group/sub-category">
                            <h3 className="font-medium group-hover/sub-category:text-amber-500">
                              Iphone 12
                            </h3>
                          </div>
                          <div className="cursor-pointer group/sub-category">
                            <h3 className="font-medium group-hover/sub-category:text-amber-500">
                              Iphone 11
                            </h3>
                          </div>
                        </div>
                      </div>
                      <div>
                        <img
                          className="w-[20px] h-[20px] object-cover"
                          src="/icons8-next-30.png"
                          alt=""
                        />
                      </div>
                    </li>
                    <li className="flex items-center justify-between px-3 py-1 space-x-2 group/category hover:bg-gray-200">
                      <div className="flex items-center space-x-2">
                        <div>
                          <img
                            className="w-[25px] h-[25px] object-cover"
                            src="/icons8-ipad-100.png"
                            alt="Iphone"
                          />
                        </div>
                        <span>Ipad</span>
                      </div>
                      <div>
                        {/* <img className="w-[20px] h-[20px] object-cover" src="/icons8-next-30.png" alt="" /> */}
                      </div>
                    </li>
                    <li className="flex items-center justify-between px-3 py-1 space-x-2 hover:bg-gray-200">
                      <div className="flex items-center space-x-2">
                        <div>
                          <img
                            className="w-[25px] h-[25px] object-cover"
                            src="/icons8-watch-50.png"
                            alt="Iphone"
                          />
                        </div>
                        <span>Watch</span>
                      </div>
                      <div>
                        {/* <img className="w-[20px] h-[20px] object-cover" src="/icons8-next-30.png" alt="" /> */}
                      </div>
                    </li>
                    <li className="flex items-center justify-between px-3 py-1 space-x-2 hover:bg-gray-200">
                      <div className="flex items-center space-x-2">
                        <div>
                          <img
                            className="w-[25px] h-[25px] object-cover"
                            src="/icons8-mac-50.png"
                            alt="Iphone"
                          />
                        </div>
                        <span>Mac</span>
                      </div>
                      <div>
                        {/* <img className="w-[20px] h-[20px] object-cover" src="/icons8-next-30.png" alt="" /> */}
                      </div>
                    </li>
                    <li className="flex items-center justify-between px-3 py-1 space-x-2 hover:bg-gray-200">
                      <div className="flex items-center space-x-2">
                        <div>
                          <img
                            className="w-[25px] h-[25px] object-cover"
                            src="/icons8-airpods-50.png"
                            alt="Iphone"
                          />
                        </div>
                        <span>AirPods</span>
                      </div>
                      <div>
                        {/* <img className="w-[20px] h-[20px] object-cover" src="/icons8-next-30.png" alt="" /> */}
                      </div>
                    </li>
                    <li className="flex items-center justify-between px-3 py-1 space-x-2 hover:bg-gray-200">
                      <div className="flex items-center space-x-2">
                        <div>
                          <img
                            className="w-[25px] h-[25px] object-cover"
                            src="/icons8-volume-50.png"
                            alt="Iphone"
                          />
                        </div>
                        <span>Âm thanh</span>
                      </div>
                      <div>
                        {/* <img className="w-[20px] h-[20px] object-cover" src="/icons8-next-30.png" alt="" /> */}
                      </div>
                    </li>
                    <li className="flex items-center justify-between px-3 py-1 space-x-2 hover:bg-gray-200">
                      <div className="flex items-center space-x-2">
                        <div>
                          <img
                            className="w-[25px] h-[25px] object-cover"
                            src="/icons8-phone-case-50.png"
                            alt="Iphone"
                          />
                        </div>
                        <span>Phụ kiện</span>
                      </div>
                      <div>
                        {/* <img className="w-[20px] h-[20px] object-cover" src="/icons8-next-30.png" alt="" /> */}
                      </div>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="bg-white rounded-md w-[25%]">
                <form
                  className="flex items-center justify-between pl-2"
                  action=""
                >
                  <input
                    className="text-[#75759D] outline-0"
                    type="text"
                    placeholder="Bạn cần tìm gì..."
                  />
                  <button className="hover:bg-amber-300 h-[40px] w-[50px] flex items-center justify-center rounded-md">
                    <img
                      className="h-[20px] w-[20px]"
                      src="/icons8-search-50.png"
                      alt="Tìm kiếm"
                    />
                  </button>
                </form>
              </div>
              <ul className="flex">
                <li className="flex space-x-1.5 items-center justify-center w-[120px]">
                  <span className="">
                    <img
                      className="h-[35px] w-[35px] object-contain"
                      src="/icons8-telephone-50.png"
                      alt="Phone"
                    />
                  </span>
                  <span className="hover:text-amber-300 text-[14px]">
                    Hotline
                    <br />
                    19006750
                  </span>
                </li>
                <li className="flex space-x-1.5 items-center justify-center w-[120px]">
                  <span className="">
                    <img
                      className="h-[35px] w-[35px] object-contain"
                      src="/icons8-location-50.png"
                      alt="Address"
                    />
                  </span>
                  <Link to="/he-thong-cua-hang">
                    <span className="hover:text-amber-300 text-[14px]">
                      Hệ thống
                      <br />
                      cửa hàng
                    </span>
                  </Link>
                </li>
                <li className="flex space-x-1.5 items-center justify-center w-[120px]">
                  <span className="">
                    <img
                      className="h-[35px] w-[35px] object-contain"
                      src="/icons8-order-50.png"
                      alt="Order"
                    />
                  </span>

                  <span className="hover:text-amber-300 text-[14px]">
                    Tra cứu
                    <br />
                    đơn hàng
                  </span>
                </li>
                <li className="flex space-x-1.5 items-center justify-center w-[120px] relative">
                  <span className="">
                    <img
                      className="h-[50px] w-[50px] object-contain"
                      src="/icons8-cart-100.png"
                      alt="Cart"
                    />
                  </span>
                  <span className="hover:text-amber-300 group/cart">
                    <span className="text-[14px]">Giỏ hàng Sản phẩm</span>
                    <div className="group-hover/cart:flex hidden absolute top-14 right-3 bg-white w-[400px] py-3 px-3 rounded-md flex-col items-center justify-center space-y-3 ring-1 ring-black/10 shadow-[0_0_18px_0_rgba(0,0,0,0.06)]">
                      <div>
                        <img
                          className="w-[30px] h-[30px] object-cover"
                          src="/icons8-cart-50.png"
                          alt="Cart"
                        />
                      </div>
                      <p className="text-black text-[14px]">
                        Không có sản phẩm nào trong giỏ hàng của bạn
                      </p>
                    </div>
                  </span>
                </li>
              </ul>

              <div className="bg-[#2E3AA3] flex flex-col justify-center items-center p-2 rounded-sm hover:bg-amber-400 group">
                <span className="">
                  <img
                    className="h-[20px] w-[20px] object-contain"
                    src="/icons8-user-50.png"
                    alt="User"
                  />
                </span>
                <div className="relative group">
                  <span className="flex justify-center text-center text-[14px] cursor-pointer">
                    Thông tin
                  </span>

                  <div className="bg-white absolute top-8 right-[-8px] w-[220px] rounded-md hidden md:group-hover:flex flex-col shadow-md border border-gray-200">
                    <ul className="py-1 px-[7px] flex flex-col space-y-2 text-black text-[14px]">

                      {/* Nếu CHƯA đăng nhập */}
                      {!user ? (
                        <>
                          <li className="flex items-center w-full px-4 py-1 space-x-2 hover:bg-gray-200">
                            <img
                              className="w-[20px] h-[20px] object-cover"
                              src="/icons8-login-50.png"
                              alt=""
                            />
                            <Link to="/dang-nhap">
                              <span>Đăng nhập</span>
                            </Link>
                          </li>

                          <li className="flex items-center w-full px-4 py-1 space-x-2 hover:bg-gray-200">
                            <img
                              className="w-[20px] h-[20px] object-cover"
                              src="/icons8-add-24.png"
                              alt=""
                            />
                            <Link to="/dang-ky">
                              <span>Đăng ký</span>
                            </Link>
                          </li>
                        </>
                      ) : (
                        <>
                          {/* Nếu ĐÃ đăng nhập */}
                          <li className="flex items-center w-full px-4 py-1 space-x-2 hover:bg-gray-200">
                            <img
                              className="w-[20px] h-[20px] object-cover filter brightness-0"
                              src="/icons8-user-50.png"
                              alt=""
                            />
                            <span>Tài khoản</span>
                          </li>

                          <li
                            className="flex items-center w-full px-4 py-1 space-x-2 hover:bg-gray-200 cursor-pointer"
                            onClick={onLogout}
                          >
                            <img
                              className="w-[20px] h-[20px] object-cover"
                              src="/icons8-logout-50.png"
                              alt=""
                            />
                            <span>Đăng xuất</span>
                          </li>
                        </>
                      )}

                      {/* Mục chung cho cả 2 trạng thái */}
                      <li className="flex items-center w-full px-4 py-1 space-x-2 hover:bg-gray-200">
                        <img
                          className="w-[20px] h-[20px] object-cover"
                          src="/icons8-heart-50.png"
                          alt=""
                        />
                        <span>Danh sách yêu thích (0)</span>
                      </li>

                      <li className="flex items-center w-full px-4 py-1 space-x-2 hover:bg-gray-200">
                        <img
                          className="w-[20px] h-[20px] object-cover"
                          src="/icons8-compare-50.png"
                          alt=""
                        />
                        <span>So sánh sản phẩm (0)</span>
                      </li>
                    </ul>
                  </div>
                </div>


              </div>

            </div>
          </div>
        </div>
        <ul className="bg-white group-hover/header:absolute group-hover/header:top-[0] group-hover/header:right-0 group-hover/header:left-0 z-20 pt-[75px] flex container mx-auto px-32 text-[17px] font-semibold space-x-8">
          <Link to="">
            <li className="py-2 hover:text-[#000F8F] text-[16px]">Trang chủ</li>
          </Link>

          <li className="py-2 hover:text-[#000F8F] text-[16px]"><Link to="/introduction">Giới thiệu</Link></li>
          <li className="flex items-center justify-center py-2 space-x-1 group/rotate">
            <span className="hover:text-[#000F8F] text-[16px]">Sản phẩm</span>
            <div>
              <img
                className="w-[15px] h-[15px] object-cover transition-transform duration-500 group-hover/rotate:rotate-180"
                src="/icons8-sort-down-30.png"
                alt=""
              />
            </div>
            {/* <div className="h-56 w-full fixed top-[121px] left-0 hidden z-0 container mx-auto px-32 group-hover/rotate:block">  */}
            <div
              className="h-56 w-full fixed top-[115px] left-0 container mx-auto px-32
                                        origin-bottom scale-y-0
                                        transition-transform duration-500 ease-out
                                        group-hover/rotate:scale-y-100"
            >
              <div className="grid grid-cols-5 p-4 bg-white rounded-sm gap-y-4">
                <div className="cursor-pointer">
                  <h3 className="font-medium text-[20px] text-[#000F8F] hover:text-amber-400">
                    Iphone
                  </h3>
                  <ul className="font-normal text-[16px]">
                    <li className="hover:text-[#000F8F]">Iphone 15 Series</li>
                    <li className="hover:text-[#000F8F]">Iphone 14 Series</li>
                    <li className="hover:text-[#000F8F]">Iphone 13</li>
                    <li className="hover:text-[#000F8F]">Iphone 12</li>
                    <li className="hover:text-[#000F8F]">Iphone 11</li>
                  </ul>
                </div>
                <div className="cursor-pointer">
                  <h3 className="font-medium text-[20px] text-[#000F8F] hover:text-amber-400">
                    iPad
                  </h3>
                  <ul className="font-normal text-[16px]">
                    <li className="hover:text-[#000F8F]">ipad Pro</li>
                    <li className="hover:text-[#000F8F]">iPad Air</li>
                    <li className="hover:text-[#000F8F]">iPad Gen 10</li>
                    <li className="hover:text-[#000F8F]">iPad Gen 9</li>
                    <li className="hover:text-[#000F8F]">iPad mini</li>
                  </ul>
                </div>
                <div className="cursor-pointer">
                  <h3 className="font-medium text-[20px] text-[#000F8F] hover:text-amber-400">
                    Watch
                  </h3>
                  <ul className="font-normal text-[16px]">
                    <li className="hover:text-[#000F8F]">Apple Watch Ultra</li>
                    <li className="hover:text-[#000F8F]">Apple Watch S7</li>
                    <li className="hover:text-[#000F8F]">Apple Watch SE</li>
                    <li className="hover:text-[#000F8F]">Apple Watch S8</li>
                    <li className="hover:text-[#000F8F]">Apple Watch S9</li>
                  </ul>
                </div>
                <div className="cursor-pointer">
                  <h3 className="font-medium text-[20px] text-[#000F8F] hover:text-amber-400">
                    Mac
                  </h3>
                  <ul className="font-normal text-[16px]">
                    <li className="hover:text-[#000F8F]">MacBook</li>
                    <li className="hover:text-[#000F8F]">Mac Studio</li>
                    <li className="hover:text-[#000F8F]">iMac</li>
                    <li className="hover:text-[#000F8F]">Mac mini</li>
                    <li className="hover:text-[#000F8F]">Apple TV</li>
                  </ul>
                </div>
                <div className="cursor-pointer">
                  <h3 className="font-medium text-[20px] text-[#000F8F] hover:text-amber-400">
                    Airpods
                  </h3>
                </div>
                <div className="cursor-pointer">
                  <h3 className="font-medium text-[20px] text-[#000F8F] hover:text-amber-400">
                    Âm thanh
                  </h3>
                  <ul className="font-normal text-[16px]">
                    <li className="hover:text-[#000F8F]">Loa</li>
                    <li className="hover:text-[#000F8F]">Tai nghe</li>
                  </ul>
                </div>
                <div className="cursor-pointer">
                  <h3 className="font-medium text-[20px] text-[#000F8F] hover:text-amber-400">
                    Phụ kiện
                  </h3>
                  <ul className="font-normal text-[16px]">
                    <li className="hover:text-[#000F8F]">Phụ kiện Apple</li>
                    <li className="hover:text-[#000F8F]">Cốc - Cáp</li>
                    <li className="hover:text-[#000F8F]">Sạc dự phòng</li>
                    <li className="hover:text-[#000F8F]">Bao da - Ốp lưng</li>
                    <li className="hover:text-[#000F8F]">Dán cường lực</li>
                    <li className="hover:text-[#000F8F]">Phụ kiện MacBook</li>
                    <li className="hover:text-[#000F8F]">Bàn phím - Chuột</li>
                    <li className="hover:text-[#000F8F]">
                      Ba lo - Túi chống shock
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </li>
          <Link to="/news">
            <li className="py-2 hover:text-[#000F8F] text-[16px]">Tin tức</li>
          </Link>

          <li className="py-2 hover:text-[#000F8F] text-[16px]"><Link to="/review">Review</Link></li>
          <li className="py-2 hover:text-[#000F8F] text-[16px]"><Link to="/relatedquestions">Câu hỏi thường gặp</Link></li>
          <Link to="/Tra-cuu-bao-hanh">
            <li className="py-2 hover:text-[#000F8F] text-[16px]">
              Tra cứu bảo hành
            </li>
          </Link>
          <Link to="/dat-truoc-san-pham">
            <li className="py-2 hover:text-[#000F8F] text-[16px]">Đặt trước</li>
          </Link>

          <li className="py-2 hover:text-[#000F8F] text-[16px]"><Link to="/contact">Liên hệ</Link></li>
        </ul>
        <div className="group-hover/header:h-[115px]"></div>
      </header>
    </>
  );
}

export default Header;
