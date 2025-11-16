function Footer() {
  return (
    <>
      <div className="bg-white">
        <div className="bg-[#000F8F]">
          <div className="container mx-auto px-3 sm:px-4 md:px-6 lg:px-8 xl:px-16 2xl:px-32 py-3 sm:py-4 md:py-5">
            <div className="flex flex-col lg:flex-row items-center justify-between gap-4 sm:gap-5 lg:gap-6">
              {/* Email Subscription Form */}
              <div className="w-full lg:w-auto lg:flex-1 max-w-full lg:max-w-[400px]">
                <form className="flex w-full">
                  <input
                    className="bg-white pl-2 sm:pl-3 flex-1 sm:flex-none sm:w-[200px] md:w-[250px] lg:w-[300px] xl:w-[350px] h-[36px] sm:h-[40px] md:h-[42px] rounded-tl-md rounded-bl-md outline-none text-xs sm:text-sm md:text-base placeholder:text-xs sm:placeholder:text-sm md:placeholder:text-base"
                    type="text"
                    placeholder="Nhập email nhận khuyến mãi"
                  />
                  <input
                    className="bg-[#F5CA34] w-[70px] sm:w-[80px] md:w-[90px] lg:w-[99px] h-[36px] sm:h-[40px] md:h-[42px] rounded-tr-md rounded-br-md uppercase text-white hover:bg-amber-300 text-[10px] sm:text-xs md:text-sm lg:text-base font-medium transition-colors cursor-pointer"
                    type="submit"
                    value={"Đăng ký"}
                  />
                </form>
              </div>
              
              {/* Social Media Connection */}
              <div className="flex flex-col sm:flex-row items-center gap-2 sm:gap-3 md:gap-4 w-full lg:w-auto justify-center lg:justify-start">
                <p className="text-white text-xs sm:text-sm md:text-[15px] lg:text-base xl:text-[17px] font-medium whitespace-nowrap">
                  Kết nối với chúng tôi:
                </p>
                <div className="flex items-center gap-2 sm:gap-2.5 md:gap-3">
                  <div className="cursor-pointer hover:opacity-80 transition-opacity">
                    <img
                      className="w-[24px] h-[24px] sm:w-[28px] sm:h-[28px] md:w-[30px] md:h-[30px] lg:w-[32px] lg:h-[32px] object-cover"
                      src="/zalo.webp"
                      alt="Zalo"
                    />
                  </div>
                  <div className="cursor-pointer hover:opacity-80 transition-opacity">
                    <img
                      className="w-[24px] h-[24px] sm:w-[28px] sm:h-[28px] md:w-[30px] md:h-[30px] lg:w-[32px] lg:h-[32px] object-cover"
                      src="/facebook.webp"
                      alt="Facebook"
                    />
                  </div>
                  <div className="cursor-pointer hover:opacity-80 transition-opacity">
                    <img
                      className="w-[24px] h-[24px] sm:w-[28px] sm:h-[28px] md:w-[30px] md:h-[30px] lg:w-[32px] lg:h-[32px] object-cover"
                      src="/youtube.webp"
                      alt="Youtube"
                    />
                  </div>
                  <div className="cursor-pointer hover:opacity-80 transition-opacity">
                    <img
                      className="w-[24px] h-[24px] sm:w-[28px] sm:h-[28px] md:w-[30px] md:h-[30px] lg:w-[32px] lg:h-[32px] object-cover"
                      src="/google.webp"
                      alt="Google"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="pb-3">
          <div className="container mx-auto px-4 sm:px-6 md:px-8 lg:px-16 xl:px-32 pt-7 space-x-3">
            <div className="flex flex-col lg:flex-row bg-gray-300 p-4 sm:p-5 rounded-md gap-4 lg:gap-0">
              <div className="w-full lg:w-1/2 grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-x-6">
                <div className="flex flex-col items-center justify-center">
                  <div>
                    <img
                      className="w-[50px] h-[50px] object-cover"
                      src="/chinhsach_footer_1.webp"
                      alt=""
                    />
                  </div>
                  <h4 className="text-center pt-3 text-[12px] sm:text-[14px] md:text-[16px] font-medium text-[#000F8F]">
                    Than toán khi nhận hàng
                  </h4>
                </div>
                <div className="flex flex-col items-center justify-center">
                  <div>
                    <img
                      className="w-[40px] sm:w-[50px] h-[40px] sm:h-[50px] object-cover"
                      src="/chinhsach_footer_2.webp"
                      alt=""
                    />
                  </div>
                  <h4 className="text-center pt-3 text-[12px] sm:text-[14px] md:text-[16px] font-medium text-[#000F8F]">
                    Cam kết uy tính hàng chính hãng
                  </h4>
                </div>
                <div className="flex flex-col items-center justify-center">
                  <div>
                    <img
                      className="w-[60px] sm:w-[70px] h-[40px] sm:h-[50px] object-cover"
                      src="/chinhsach_footer_3.webp"
                      alt=""
                    />
                  </div>
                  <h4 className="text-center pt-3 text-[12px] sm:text-[14px] md:text-[16px] font-medium text-[#000F8F]">
                    Giao hàng miễn phí 2h
                  </h4>
                </div>
                <div className="flex flex-col items-center justify-center">
                  <div>
                    <img
                      className="w-[40px] sm:w-[50px] h-[40px] sm:h-[50px] object-cover"
                      src="/chinhsach_footer_4.webp"
                      alt=""
                    />
                  </div>
                  <h4 className="text-center pt-3 text-[12px] sm:text-[14px] md:text-[16px] font-medium text-[#000F8F]">
                    14 ngày đổi trả miễn phí
                  </h4>
                </div>
              </div>
              <div className="flex-1 flex flex-col sm:flex-row justify-between items-center gap-4 sm:gap-0 sm:space-x-3 sm:pl-10">
                <div className="w-full sm:w-1/3">
                  <div className="flex items-center justify-center space-x-2 sm:space-x-3 text-[16px] sm:text-[17px] md:text-[18px] font-medium text-[#000F8F]">
                    <div className="bg-[#000F8F] h-[28px] w-[28px] sm:h-[30px] sm:w-[30px] flex items-center justify-center rounded-full">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="14"
                        height="14"
                        fill="currentColor"
                        className="bi bi-question-lg text-white"
                        viewBox="0 0 16 16"
                      >
                        <path
                          fillRule="evenodd"
                          d="M4.475 5.458c-.284 0-.514-.237-.47-.517C4.28 3.24 5.576 2 7.825 2c2.25 0 3.767 1.36 3.767 3.215 0 1.344-.665 2.288-1.79 2.973-1.1.659-1.414 1.118-1.414 2.01v.03a.5.5 0 0 1-.5.5h-.77a.5.5 0 0 1-.5-.495l-.003-.2c-.043-1.221.477-2.001 1.645-2.712 1.03-.632 1.397-1.135 1.397-2.028 0-.979-.758-1.698-1.926-1.698-1.009 0-1.71.529-1.938 1.402-.066.254-.278.461-.54.461h-.777ZM7.496 14c.622 0 1.095-.474 1.095-1.09 0-.618-.473-1.092-1.095-1.092-.606 0-1.087.474-1.087 1.091S6.89 14 7.496 14"
                        ></path>
                      </svg>
                    </div>
                    <h4 className="text-sm sm:text-base">Khiếu nại, góp ý</h4>
                  </div>
                  <div className="pt-3">
                    <button className="w-full h-[40px] bg-[#000F8F] text-white font-medium text-[14px] sm:text-[15px] md:text-[16px] rounded-md cursor-pointer hover:bg-amber-400">
                      19006750
                    </button>
                  </div>
                </div>
                <div className="w-full sm:w-1/3">
                  <div className="flex items-center justify-center space-x-2 sm:space-x-3 text-[16px] sm:text-[17px] md:text-[18px] font-medium text-[#000F8F]">
                    <div className="bg-[#000F8F] h-[28px] w-[28px] sm:h-[30px] sm:w-[30px] flex items-center justify-center rounded-full">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="14"
                        height="14"
                        fill="currentColor"
                        className="bi bi-telephone-fill text-white"
                        viewBox="0 0 16 16"
                      >
                        <path
                          fillRule="evenodd"
                          d="M1.885.511a1.745 1.745 0 0 1 2.61.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.678.678 0 0 0 .178.643l2.457 2.457a.678.678 0 0 0 .644.178l2.189-.547a1.745 1.745 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.634 18.634 0 0 1-7.01-4.42 18.634 18.634 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877L1.885.511z"
                        ></path>
                      </svg>
                    </div>
                    <h4 className="text-sm sm:text-base">Tư vấn</h4>
                  </div>
                  <div className="pt-3">
                    <button className="w-full h-[40px] bg-[#000F8F] text-white font-medium text-[14px] sm:text-[15px] md:text-[16px] rounded-md cursor-pointer hover:bg-amber-400">
                      19006750
                    </button>
                  </div>
                </div>
                <div className="w-full sm:flex-1">
                  <div className="flex items-center justify-center space-x-2 sm:space-x-3 text-[16px] sm:text-[17px] md:text-[18px] font-medium text-[#000F8F]">
                    <div className="bg-[#000F8F] h-[28px] w-[28px] sm:h-[30px] sm:w-[30px] flex items-center justify-center rounded-full">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="14"
                        height="14"
                        fill="currentColor"
                        className="bi bi-geo-alt-fill text-white"
                        viewBox="0 0 16 16"
                      >
                        <path d="M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10m0-7a3 3 0 1 1 0-6 3 3 0 0 1 0 6"></path>
                      </svg>
                    </div>
                    <h4 className="text-sm sm:text-base">Tìm chi nhánh</h4>
                  </div>
                  <div className="pt-3">
                    <button className="w-full h-[40px] bg-[#000F8F] text-white font-medium text-[14px] sm:text-[15px] md:text-[16px] rounded-md cursor-pointer hover:bg-amber-400">
                      Hệ thống Dola
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className="pt-8 flex flex-col sm:flex-row justify-between gap-6 sm:gap-4">
              <div>
                <h3 className="text-[#000F8F] text-[20px] sm:text-[22px] md:text-[25px] font-bold pb-3 sm:pb-5">
                  Chính sách
                </h3>
                <ul className="text-[14px] sm:text-[15px] md:text-[17px] flex flex-col space-y-1">
                  <li className="cursor-pointer hover:text-amber-400">Chính sách thành viên</li>
                  <li className="cursor-pointer hover:text-amber-400">Chính sách thanh toán</li>
                  <li className="cursor-pointer hover:text-amber-400">Chính sách bảo hành và bảo trì</li>
                  <li className="cursor-pointer hover:text-amber-400">Chính sách vận chuyển vào giao nhận</li>
                  <li className="cursor-pointer hover:text-amber-400">Bảo mật thông tin</li>
                </ul>
              </div>
              <div>
                <h3 className="text-[#000F8F] text-[20px] sm:text-[22px] md:text-[25px] font-bold pb-3 sm:pb-5">
                  Hỗ trợ
                </h3>
                <ul className="text-[14px] sm:text-[15px] md:text-[17px] flex flex-col space-y-1">
                  <li className="cursor-pointer hover:text-amber-400">Hướng dẫn mua hàng</li>
                  <li className="cursor-pointer hover:text-amber-400">Hướng dẫn thanh toán</li>
                  <li className="cursor-pointer hover:text-amber-400">Hướng dẫn giao nhận</li>
                  <li className="cursor-pointer hover:text-amber-400">Điều khoản dịch vụ</li>
                  <li className="cursor-pointer hover:text-amber-400">Câu hỏi thường gặp</li>
                </ul>
              </div>
              <div>
                <h3 className="text-[#000F8F] text-[20px] sm:text-[22px] md:text-[25px] font-bold pb-3 sm:pb-5">
                  Hỗ trợ
                </h3>
                <ul className="text-[14px] sm:text-[15px] md:text-[17px] flex flex-col space-y-1">
                  <li className="cursor-pointer hover:text-amber-400">Sản phẩm yêu thích</li>
                  <li className="cursor-pointer hover:text-amber-400">So sánh sản phẩm</li>
                  <li className="cursor-pointer hover:text-amber-400">Hệ thống cửa hàng</li>
                  <li className="cursor-pointer hover:text-amber-400">Tra cứu bảo hành</li>
                  <li className="cursor-pointer hover:text-amber-400">Đăng nhập tài khoản</li>
                  <li className="cursor-pointer hover:text-amber-400">Liên hệ</li>
                </ul>
              </div>
              <div>
                <h3 className="text-[#000F8F] text-[20px] sm:text-[22px] md:text-[25px] font-bold pb-3 sm:pb-5">
                  Danh mục nổi bật
                </h3>
                <ul className="text-[14px] sm:text-[15px] md:text-[17px] flex flex-col space-y-1">
                  <li className="cursor-pointer hover:text-amber-400">iPhone</li>
                  <li className="cursor-pointer hover:text-amber-400">iPad</li>
                  <li className="cursor-pointer hover:text-amber-400">Watch</li>
                  <li className="cursor-pointer hover:text-amber-400">Mac</li>
                  <li className="cursor-pointer hover:text-amber-400">AirPods</li>
                  <li className="cursor-pointer hover:text-amber-400">Âm thanh</li>
                  <li className="cursor-pointer hover:text-amber-400">Phụ kiện</li>
                </ul>
              </div>
            </div>
            <div className="pt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-x-12">
              <div className="cursor-pointer">
                <div>
                  <img
                    className="w-[180px] sm:w-[220px] md:w-[244px] h-[40px] sm:h-[45px] md:h-[50px]"
                    src="/logo-ft.webp"
                    alt="Logo"
                  />
                </div>
                <div className="py-2 text-[12px] sm:text-[13px] md:text-[14px]">
                  <p>
                    Hệ thống bán lẻ smartphone, máy tính bảng, MacBook, thiết bị
                    công nghệ chính hãng với giá tốt, có trả góp 0%, giao hàng
                    nhanh miễn phí.
                  </p>
                </div>
                <p>
                  <span className="text-[16px] sm:text-[17px] md:text-[18px] text-[#000F8F] font-bold">
                    Địa chỉ:{" "}
                  </span>
                  <span className="text-[12px] sm:text-[13px] md:text-[14px]">70 Lữ Gia, Phường 15, Quận 11, TP.HCM</span>
                </p>
                <p>
                  <span className="text-[16px] sm:text-[17px] md:text-[18px] text-[#000F8F] font-bold">
                    Điện thoại:{" "}
                  </span>
                  <span className="hover:text-amber-400 text-[12px] sm:text-[13px] md:text-[14px]">
                    1900 6750
                  </span>
                </p>
                <p>
                  <span className="text-[16px] sm:text-[17px] md:text-[18px] text-[#000F8F] font-bold">
                    Email:{" "}
                  </span>
                  <span className="hover:text-amber-400 text-[12px] sm:text-[13px] md:text-[14px]">
                    contact@ecommerce.com
                  </span>
                </p>
              </div>
              <div className="flex flex-col space-y-1">
                <h3 className="text-[20px] sm:text-[22px] md:text-[25px] text-[#000F8F] font-bold uppercase">
                  Mạng xã hội
                </h3>
                <h4 className="font-bold text-[14px] sm:text-[15px] md:text-[16px]">
                  MUA ONLINE (08:00 - 21:00 mỗi ngày)
                </h4>
                <p className="text-[15px] sm:text-[16px] md:text-[17px] font-bold text-[#000F8F] hover:text-amber-400">19006750</p>
                <p className="text-[12px] sm:text-[13px] md:text-[14px]">
                  Tất cả các ngày trong tuần (Trừ tết Âm Lịch)
                </p>
                <h4 className="font-bold text-[14px] sm:text-[15px] md:text-[16px]">
                  GÓP Ý & KHIẾU NẠI (08:30 - 20:30)
                </h4>
                <p className="text-[15px] sm:text-[16px] md:text-[17px] font-bold text-[#000F8F] hover:text-amber-400">19006750</p>
                <p className="text-[12px] sm:text-[13px] md:text-[14px]">
                  Tất cả các ngày trong tuần (Trừ tết Âm Lịch)
                </p>
              </div>
              <div className="">
                <h3 className="text-[20px] sm:text-[22px] md:text-[25px] text-[#000F8F] font-bold uppercase">
                  Liên kết sàn
                </h3>
                <div className="flex space-x-4 py-2">
                  <img
                    className="w-[28px] sm:w-[32px] h-[28px] sm:h-[32px] object-cover"
                    src="/shopee.webp"
                    alt=""
                  />
                  <img
                    className="w-[28px] sm:w-[32px] h-[28px] sm:h-[32px] object-cover"
                    src="/lazada.webp"
                    alt=""
                  />
                  <img
                    className="w-[28px] sm:w-[32px] h-[28px] sm:h-[32px] object-cover"
                    src="/tiki.webp"
                    alt=""
                  />
                  <img
                    className="w-[28px] sm:w-[32px] h-[28px] sm:h-[32px] object-cover"
                    src="/sendo.webp"
                    alt=""
                  />
                </div>
                <h3 className="text-[20px] sm:text-[22px] md:text-[25px] text-[#000F8F] font-bold uppercase">
                  Hình thức thanh toán
                </h3>
                <div className="flex space-x-3 py-2">
                  <img
                    className="w-[40px] sm:w-[49px] h-[25px] sm:h-[30px] object-cover"
                    src="/payment_1.webp"
                    alt=""
                  />
                  <img
                    className="w-[40px] sm:w-[49px] h-[25px] sm:h-[30px] object-cover"
                    src="/payment_2.webp"
                    alt=""
                  />
                  <img
                    className="w-[40px] sm:w-[49px] h-[25px] sm:h-[30px] object-cover"
                    src="/payment_3.webp"
                    alt=""
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-[#000F8F]">
          <div className="container mx-auto px-4 sm:px-6 md:px-8 lg:px-16 xl:px-32 py-4 space-x-3">
            <p className="text-white text-[14px] sm:text-[15px] md:text-[17px] font-medium text-center">
              © 2025 E-Commerce. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Footer;
