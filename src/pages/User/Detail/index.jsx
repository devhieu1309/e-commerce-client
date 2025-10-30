import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import RelatedProducts from "../../../components/RelatedProducts";
import SamePriceRangeProducts from "../../../components/SamePriceRangeProducts";
import ViewedProducts from "../../../components/ViewedProducts";

function Detail() {
  const [expanded, setExpanded] = useState(false);
  const [activeTab, setActiveTab] = useState("mo-ta");

  const { id } = useParams();

  const [productsitem, setProductsItem] = useState(null);
  const [loading, setLoading] = useState(true);


  useEffect(() => {
    const fetchProductItem = async () => {
      try {
        const res = await fetch(`http://127.0.0.1:8000/api/products/${id}`);
        const data = await res.json();
        console.log("dataDetail", data);
        setProductsItem(data.data);
      } catch (error) {
        console.error("Lỗi khi lấy chi tiết sản phẩm:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchProductItem();
  }, [id]);

  const handleAddToCart = () => {
    try {
      const response = fetch("http://localhost:8000/api/cart", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          user_id: 1,
          product_item_id: productsitem?.product?.items?.[0]?.id,
          quantity: 1,
        }),
      });

      const result = response.json();

      if (response.ok && result.success) {
        alert("Thêm vào giỏ hàng thành công!");
      } else {
        console.error("Lỗi khi thêm vào giỏ hàng:", result.message);
        alert("Thêm vào giỏ hàng thất bại. Vui lòng thử lại.");
      }
    } catch (error) {
      console.error("Lỗi khi thêm vào giỏ hàng:", error);
    }
  };

  return (
    <>
      <div className="container mx-auto px-32 py-4">
        <div className="bg-white p-2 rounded-md">
          <h2 className="text-2xl text-black font-medium border-b pb-5">
            {productsitem?.product_name}
          </h2>
          <div className="flex p-3">
            <div className="h-auto w-1/3">
              <div className="flex flex-col items-center space-y-10">
                <div className="h-[394px] w-[394px] relative">
                  <div className="absolute top-2 flex flex-col space-y-1">
                    <div className="flex space-x-2 py-[2px] bg-[#000F8F] w-[70px] p-1 ">
                      <img
                        className="h-[20px] w-[20px]"
                        src="/title_image_1_tag.webp"
                        alt=""
                      />
                      <span className="text-white text-[13px]">Mới</span>
                    </div>
                    <div className="flex space-x-2 py-[2px] bg-[#f3d054] w-[90px] p-1 ">
                      <img
                        className="h-[20px] w-[20px]"
                        src="/title_image_2_tag.webp"
                        alt=""
                      />
                      <span className="text-white text-[13px]">Nổi bật</span>
                    </div>
                  </div>
                  <img
                    className="object-cover items-center justify-center"
                    src="/230913033139-iphone-15-yellow-fcaa0de0-7a3f-4644-917f-af79b2510437.webp"
                    alt=""
                  />
                </div>

                <div className="flex items-center space-x-2">
                  <div className="w-[87px] h-[87px] border border-gray-300 rounded-md">
                    <img
                      className="object-cover w-full h-full p-1"
                      src="/230913032939-iphone-15-green-8c348a34-ebcd-41c6-8b6d-ef888554c4a2.webp"
                      alt=""
                    />
                  </div>
                  <div className="w-[87px] h-[87px] border border-gray-300 rounded-md">
                    <img
                      className="object-cover w-full h-full p-1"
                      src="/230913033139-iphone-15-yellow-fcaa0de0-7a3f-4644-917f-af79b2510437.webp"
                      alt=""
                    />
                  </div>
                  <div className="w-[87px] h-[87px] border border-gray-300 rounded-md">
                    <img
                      className="object-cover w-full h-full p-1"
                      src="/230913033012-iphone-15-blue-0a8fe4bf-a849-4391-a941-aed061618099.webp"
                      alt=""
                    />
                  </div>
                  <div className="w-[87px] h-[87px] border border-gray-300 rounded-md">
                    <img
                      className="object-cover w-full h-full p-1"
                      src="/230913032939-iphone-15-green-8c348a34-ebcd-41c6-8b6d-ef888554c4a2.webp"
                      alt=""
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="h-auto flex-1 flex">
              <div className="flex-1 p-2">
                <div className="flex items-center justify-between mb-7">
                  <div>
                    <p className="text-gray-800">
                      Loại:{" "}
                      <span className="text-[#3F4AAB] font-medium">
                        Điện thoại
                      </span>
                    </p>
                    <p className="text-gray-800">
                      Tình trạng:{" "}
                      <span className="text-[#3F4AAB] font-medium">
                        Còn hàng
                      </span>
                    </p>
                  </div>
                  <div>
                    <p className="text-gray-800">
                      Thương hiệu:{" "}
                      <span className="text-[#3F4AAB] font-medium">Apple</span>
                    </p>
                    <p className="text-gray-800">
                      Mã sản phẩm:{" "}
                      <span className="text-[#3F4AAB] font-medium">
                        Đang cập nhật
                      </span>
                    </p>
                  </div>
                </div>
                <div className="mb-7">
                  <div>
                    <p className="font-medium">Giá bán:</p>
                    <div className="flex items-end space-x-4">
                      <h2 className="text-red-500 text-3xl font-medium">
                        {productsitem?.items[0]?.price}đ
                      </h2>
                      <del className="text-gray-500 text-[17px]">
                        27.990.000đ
                      </del>
                    </div>
                  </div>
                </div>
                <div className="flex space-x-3 pb-5">
                  <div className="relative w-[150px] flex flex-col items-center border border-[#000f8f] rounded-lg p-2">
                    {/* Góc trên bên trái */}
                    <div className="absolute top-0 left-0 w-[18px] h-[12px] bg-[#000f8f] rounded-t-sm rounded-br-[10px] text-white text-[8px] flex items-center justify-center">
                      ✓
                    </div>

                    <span className="font-medium">512GB</span>
                    <span className="text-red-500 font-medium">
                      29.990.000đ
                    </span>
                  </div>
                  <div className="w-[150px] flex flex-col items-center border border-gray-300 px-3 py-1 rounded-lg">
                    <span className="font-medium">256GB</span>
                    <span className="text-red-500 font-medium">
                      24.290.000đ
                    </span>
                  </div>
                  <div className="w-[150px] flex flex-col items-center border border-gray-300 px-3 py-1 rounded-lg">
                    <span className="font-medium">128GB</span>
                    <span className="text-red-500 font-medium">
                      21.990.000đ
                    </span>
                  </div>
                </div>
                <div className="pb-5">
                  <h3 className="font-medium pb-3">
                    Màu sắc: <span className="text-[#3F4AAB]">Vàng</span>
                  </h3>
                  <div className="grid grid-cols-4 gap-y-3">
                    <div className="relative flex items-center space-x-2 border border-[#000f8f] w-[110px] px-3 py-1 rounded-lg">
                      <div className="absolute top-0 left-0 w-[18px] h-[12px] bg-[#000f8f] rounded-t-sm rounded-br-[10px] text-white text-[8px] flex items-center justify-center">
                        ✓
                      </div>
                      <div>
                        <img
                          className="h-[47px] w-[47px] object-cover"
                          src="/230913033139-iphone-15-yellow.webp"
                          alt=""
                        />
                      </div>
                      <p className="text-gray-700">Vàng</p>
                    </div>
                    <div className="flex items-center space-x-2 border border-gray-300 w-[110px] px-3 py-1 rounded-lg">
                      <div>
                        <img
                          className="h-[47px] w-[47px] object-cover"
                          src="/230913033227-iphone-15-pink-1.webp"
                          alt=""
                        />
                      </div>
                      <p className="text-gray-700">Hồng</p>
                    </div>
                    <div className="flex items-center space-x-2 border border-gray-300 w-[110px] px-3 py-1 rounded-lg">
                      <div>
                        <img
                          className="h-[47px] w-[47px] object-cover"
                          src="/230913033012-iphone-15-blue-0a8fe4bf-a849-4391-a941-aed061618099.webp"
                          alt=""
                        />
                      </div>
                      <p className="text-gray-700">Trắng</p>
                    </div>
                    <div className="flex items-center space-x-2 border border-gray-300 w-[110px] px-3 py-1 rounded-lg">
                      <div>
                        <img
                          className="h-[47px] w-[47px] object-cover"
                          src="/230913032939-iphone-15-green-8c348a34-ebcd-41c6-8b6d-ef888554c4a2.webp"
                          alt=""
                        />
                      </div>
                      <p className="text-gray-700">Xanh</p>
                    </div>
                    <div className="flex items-center space-x-2 border border-gray-300 w-[110px] px-3 py-1 rounded-lg">
                      <div>
                        <img
                          className="h-[47px] w-[47px] object-cover"
                          src="/230913032427-iphone-15-black.webp"
                          alt=""
                        />
                      </div>
                      <p className="text-gray-700">Đen</p>
                    </div>
                  </div>
                </div>
                <div className="pb-5">
                  <h3 className="font-medium pb-2">Số lượng: </h3>
                  <div className="flex p-1 border border-[#0008F8] w-[140px] rounded-sm">
                    <button
                      type="button"
                      aria-label="Giảm số lượng"
                      class="inline-flex items-center justify-center w-9 h-9 text-white text-2xl rounded-md border border-gray-200 bg-[#0008f8]"
                    >
                      -
                    </button>
                    <input
                      type="text"
                      class="block h-[35px] w-[60px] rounded-lg border-0 px-[2px] text-center text-[15px] outline-0"
                    />

                    <button
                      type="button"
                      aria-label="Giảm số lượng"
                      class="inline-flex items-center justify-center w-9 h-9 text-white text-2xl rounded-md border border-gray-200 bg-[#0008f8]"
                    >
                      +
                    </button>
                  </div>
                </div>
                <div className="py-2">
                  <button className="text-white bg-amber-400 w-full rounded-sm py-1">
                    <h3 className="text-[18px] font-medium p-0">Thêm vào giỏ hàng</h3>
                    <p className="font-medium text-[14px]">Giao hàng tận nơi miễn phí</p>
                  </button>
                </div>
                <div className="flex items-center justify-between space-x-2 py-3">
                  <button className="text-white bg-[#000f8f] w-1/2 rounded-sm font-medium py-[13px] uppercase">Mua ngay</button>
                  <button className="text-white bg-[#000f8f] w-1/2 rounded-sm font-medium py-1">
                    <p className="text-[12px]">Liên hệ <span className="text-[17px]">1900 6750</span></p>
                    <p className="text-[12px]">Để được tư vấn và hỗ trợ ngay!!!</p>
                  </button>
                </div>
                <div className="border border-[#0008f8] rounded-sm">
                  <div className="flex items-center bg-[#0008f8] space-x-2 px-3">
                    <svg
                      className="w-5 h-5 fill-current text-white"
                      xmlns="http://www.w3.org/2000/svg"
                      height="1em"
                      viewBox="0 0 512 512"
                    >
                      <path d="M190.5 68.8L225.3 128H224 152c-22.1 0-40-17.9-40-40s17.9-40 40-40h2.2c14.9 0 28.8 7.9 36.3 20.8zM64 88c0 14.4 3.5 28 9.6 40H32c-17.7 0-32 14.3-32 32v64c0 17.7 14.3 32 32 32H480c17.7 0 32-14.3 32-32V160c0-17.7-14.3-32-32-32H438.4c6.1-12 9.6-25.6 9.6-40c0-48.6-39.4-88-88-88h-2.2c-31.9 0-61.5 16.9-77.7 44.4L256 85.5l-24.1-41C215.7 16.9 186.1 0 154.2 0H152C103.4 0 64 39.4 64 88zm336 0c0 22.1-17.9 40-40 40H288h-1.3l34.8-59.2C329.1 55.9 342.9 48 357.8 48H360c22.1 0 40 17.9 40 40zM32 288V464c0 26.5 21.5 48 48 48H224V288H32zM288 512H432c26.5 0 48-21.5 48-48V288H288V512z"></path>
                    </svg>
                    <h3 className="text-white font-medium text-xl">
                      Ưu đãi khi mua hàng
                    </h3>
                  </div>
                  <div className="flex flex-col space-y-2 p-3">
                    <p className="text-[14px]">
                      ✔️ Hỗ trợ trả góp 0% chỉ cần CCCD gắn chip hoặc 0% qua thẻ
                      tín dụng
                    </p>
                    <p className="text-[14px]">
                      ✔️ Nhập mã <span className="font-bold">ZALOPAYMT</span>{" "}
                      giảm ngay 1% tối đa{" "}
                      <span className="font-bold">200.000đ</span> khi thanh toán
                      qua Zalo Pay
                    </p>
                    <p className="text-[14px]">
                      ✔️ Giảm 50% tối đa{" "}
                      <span className="font-bold">100.000đ</span> cho thành viên
                      mới của Kredivo
                    </p>
                    <p className="text-[14px]">
                      ✔️ Giảm 5% tối đa{" "}
                      <span className="font-bold">200.000đ</span>, áp dụng kỳ
                      hạn 6/12 tháng khi thanh toán qua Kredivo
                    </p>
                    <p className="text-[14px]">
                      ✔️ Giảm 50% tối đa 100.000đ, áp dụng cho đơn hàng từ{" "}
                      <span className="font-bold">200.000đ</span> cho người dùng
                      mới của Home Pay Later
                    </p>
                    <p className="text-[14px]">
                      ✔️ Giảm 5% tối đa{" "}
                      <span className="font-bold">200.000đ</span> cho đơn từ{" "}
                      <span className="font-bold">200.000đ</span> khi thanh toán
                      qua Home PayLater
                    </p>
                  </div>
                </div>
              </div>
              <div className="w-2/5 flex flex-col space-y-6">
                <div className="border border-[#0008f8] rounded-sm">
                  <div className="flex items-center bg-[#0008f8] space-x-2 px-3">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="bi bi-bookmarks-fill w-5 h-5 fill-current text-white"
                      height="1em"
                      viewBox="0 0 576 512"
                    >
                      <path d="M408 120c0 54.6-73.1 151.9-105.2 192c-7.7 9.6-22 9.6-29.6 0C241.1 271.9 168 174.6 168 120C168 53.7 221.7 0 288 0s120 53.7 120 120zm8 80.4c3.5-6.9 6.7-13.8 9.6-20.6c.5-1.2 1-2.5 1.5-3.7l116-46.4C558.9 123.4 576 135 576 152V422.8c0 9.8-6 18.6-15.1 22.3L416 503V200.4zM137.6 138.3c2.4 14.1 7.2 28.3 12.8 41.5c2.9 6.8 6.1 13.7 9.6 20.6V451.8L32.9 502.7C17.1 509 0 497.4 0 480.4V209.6c0-9.8 6-18.6 15.1-22.3l122.6-49zM327.8 332c13.9-17.4 35.7-45.7 56.2-77V504.3L192 449.4V255c20.5 31.3 42.3 59.6 56.2 77c20.5 25.6 59.1 25.6 79.6 0zM288 152a40 40 0 1 0 0-80 40 40 0 1 0 0 80z"></path>
                    </svg>
                    <h3 className="text-white font-medium text-xl">
                      Hệ thống cửa hàng
                    </h3>
                  </div>
                  <div className="p-2">
                    <div className="flex items-center justify-between">
                      <div className="bg-[#0008f8] text-[14px] p-1 rounded-md">
                        <select className="outline-none text-white font-medium">
                          <option className="text-gray-700" value="">
                            Chọn tỉnh thành
                          </option>
                          <option className="text-gray-700" value="">
                            Hà Nội
                          </option>
                          <option className="text-gray-700" value="">
                            Hồ Chí Minh
                          </option>
                          <option className="text-gray-700" value="">
                            Đà Nẵng
                          </option>
                          <option className="text-gray-700" value="">
                            Cần Thơ
                          </option>
                          <option className="text-gray-700" value="">
                            Bình Dương
                          </option>
                        </select>
                      </div>
                      <div className="border border-[#0008f8] text-[14px] p-1 rounded-md">
                        <select className="outline-none text-gray-600 font-medium">
                          <option className="text-gray-700" value="">
                            Chọn quận/huyện
                          </option>
                          <option className="text-gray-700" value="">
                            Quận 1
                          </option>
                          <option className="text-gray-700" value="">
                            Thủ Đức
                          </option>
                          <option className="text-gray-700" value="">
                            Bình Thạnh
                          </option>
                        </select>
                      </div>
                    </div>
                    <div className="p-2 flex flex-col space-y-2 h-[220px] overflow-x-auto">
                      <div className="text-[14px]">
                        <p className="text-[#0008f8] font-medium">
                          Dola Hà Nội
                        </p>
                        <p>
                          <span className="font-bold">Địa chỉ: </span>Tầng 6 -
                          266 Đội Cấn, Phường Liễu Giai, Quận Ba Đình, Hà Nội
                        </p>
                      </div>
                      <div className="text-[14px]">
                        <p className="text-[#0008f8] font-medium">
                          Dola Hà Nội
                        </p>
                        <p>
                          <span className="font-bold">Địa chỉ: </span>Tầng 6 -
                          266 Đội Cấn, Phường Liễu Giai, Quận Ba Đình, Hà Nội
                        </p>
                      </div>
                      <div className="text-[14px]">
                        <p className="text-[#0008f8] font-medium">
                          Dola Hà Nội
                        </p>
                        <p>
                          <span className="font-bold">Địa chỉ: </span>Tầng 6 -
                          266 Đội Cấn, Phường Liễu Giai, Quận Ba Đình, Hà Nội
                        </p>
                      </div>
                      <div className="text-[14px]">
                        <p className="text-[#0008f8] font-medium">
                          Dola Hà Nội
                        </p>
                        <p>
                          <span className="font-bold">Địa chỉ: </span>Tầng 6 -
                          266 Đội Cấn, Phường Liễu Giai, Quận Ba Đình, Hà Nội
                        </p>
                      </div>
                      <div className="text-[14px]">
                        <p className="text-[#0008f8] font-medium">
                          Dola Hà Nội
                        </p>
                        <p>
                          <span className="font-bold">Địa chỉ: </span>Tầng 6 -
                          266 Đội Cấn, Phường Liễu Giai, Quận Ba Đình, Hà Nội
                        </p>
                      </div>
                      <div className="text-[14px]">
                        <p className="text-[#0008f8] font-medium">
                          Dola Hà Nội
                        </p>
                        <p>
                          <span className="font-bold">Địa chỉ: </span>Tầng 6 -
                          266 Đội Cấn, Phường Liễu Giai, Quận Ba Đình, Hà Nội
                        </p>
                      </div>
                    </div>
                  </div>
                  {/* <div className="flex flex-col space-y-2 p-1">
                    <div className="flex items-center space-x-2">
                      <img
                        className="h-[20px] w-[20px] object-cover"
                        src="/km_product1.webp"
                        alt=""
                      />
                      <p className="text-[14px] text-gray-800">
                        Áp dụng Phiếu quà tặng/ Mã giảm giá theo sản phẩm.
                      </p>
                    </div>
                    <div className="flex items-center space-x-2">
                      <img
                        className="h-[20px] w-[20px] object-cover"
                        src="/km_product1.webp"
                        alt=""
                      />
                      <p className="text-[14px] text-gray-800">
                        Giảm 10% khi mua từ 5 sản phẩm trở lênn
                      </p>
                    </div>
                    <div className="flex items-center space-x-2">
                      <img
                        className="h-[20px] w-[20px] object-cover"
                        src="/km_product3.webp"
                        alt=""
                      />
                      <p className="text-[14px] text-gray-800">
                        Tặng 100.000đ mua hàng tại website thành viên Dola
                        Phone, áp dụng khi mua Online tại Hồ Chí Minh và 1 số
                        khu vực khác.
                      </p>
                    </div>
                  </div> */}
                </div>
                <div className="border border-[#0008f8] rounded-sm">
                  <div className="flex items-center bg-[#0008f8] space-x-2 px-3">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="bi bi-bookmarks-fill w-5 h-5 fill-current text-white"
                      viewBox="0 0 16 16"
                    >
                      <path d="M2 4a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v11.5a.5.5 0 0 1-.777.416L7 13.101l-4.223 2.815A.5.5 0 0 1 2 15.5V4z"></path>
                      <path d="M4.268 1A2 2 0 0 1 6 0h6a2 2 0 0 1 2 2v11.5a.5.5 0 0 1-.777.416L13 13.768V2a1 1 0 0 0-1-1H4.268z"></path>
                    </svg>
                    <h3 className="text-white font-medium text-xl">
                      Cam kết bán hàng
                    </h3>
                  </div>
                  <div className="flex flex-col space-y-2 p-1">
                    <div className="flex items-center space-x-2">
                      <img
                        className="h-[20px] w-[20px] object-cover"
                        src="/camket_1.webp"
                        alt=""
                      />
                      <p className="text-[14px] text-gray-800">
                        Hàng chính hãng. Nguồn gốc rõ ràng
                      </p>
                    </div>
                    <div className="flex items-center space-x-2">
                      <img
                        className="h-[20px] w-[20px] object-cover"
                        src="/camket_2.webp"
                        alt=""
                      />
                      <p className="text-[14px] text-gray-800">
                        Tặng máy nếu phát hiện máy sữa chửa
                      </p>
                    </div>
                    <div className="flex items-center space-x-2">
                      <img
                        className="h-[20px] w-[20px] object-cover"
                        src="/camket_3.webp"
                        alt=""
                      />
                      <p className="text-[14px] text-gray-800">
                        Giao hàng ngay (nội thành TPHCM)
                      </p>
                    </div>
                    <div className="flex items-center space-x-2 pb-2">
                      <img
                        className="h-[20px] w-[20px] object-cover"
                        src="/camket_4.webp"
                        alt=""
                      />
                      <p className="text-[14px] text-gray-800">
                        Dùng thử 7 ngày miễn phí
                      </p>
                    </div>
                  </div>
                </div>
                <div className="border border-[#0008f8] rounded-sm">
                  <div className="flex items-center bg-[#0008f8] space-x-2 px-3">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="bi bi-bookmarks-fill w-5 h-5 fill-current text-white"
                      viewBox="0 0 16 16"
                    >
                      <path d="M5.52.359A.5.5 0 0 1 6 0h4a.5.5 0 0 1 .474.658L8.694 6H12.5a.5.5 0 0 1 .395.807l-7 9a.5.5 0 0 1-.873-.454L6.823 9.5H3.5a.5.5 0 0 1-.48-.641l2.5-8.5z"></path>
                    </svg>
                    <h3 className="text-white font-medium text-xl">
                      Danh sách khuyến mãi
                    </h3>
                  </div>
                  <div className="flex flex-col space-y-2 p-1">
                    <div className="flex items-center space-x-2">
                      <img
                        className="h-[20px] w-[20px] object-cover"
                        src="/km_product1.webp"
                        alt=""
                      />
                      <p className="text-[14px] text-gray-800">
                        Áp dụng Phiếu quà tặng/ Mã giảm giá theo sản phẩm.
                      </p>
                    </div>
                    <div className="flex items-center space-x-2">
                      <img
                        className="h-[20px] w-[20px] object-cover"
                        src="/km_product1.webp"
                        alt=""
                      />
                      <p className="text-[14px] text-gray-800">
                        Giảm 10% khi mua từ 5 sản phẩm trở lênn
                      </p>
                    </div>
                    <div className="flex items-center space-x-2">
                      <img
                        className="h-[20px] w-[20px] object-cover"
                        src="/km_product3.webp"
                        alt=""
                      />
                      <p className="text-[14px] text-gray-800">
                        Tặng 100.000đ mua hàng tại website thành viên Dola
                        Phone, áp dụng khi mua Online tại Hồ Chí Minh và 1 số
                        khu vực khác.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="py-7">
          <div className="flex space-x-7">
            <div className="h-auto bg-white rounded-sm w-3/5 p-2">
              <div className="flex space-x-3 pb-4">
                <button onClick={() => setActiveTab("mo-ta")} className={`font-medium text-[17px] py-2 px-4 rounded-md cursor-pointer ${activeTab === 'mo-ta' ? 'bg-[#000F8F] text-white' : 'border border-gray-700'}`}>
                  Mô tả sản phẩm
                </button>
                <button onClick={() => setActiveTab("huong-dan")} className={`font-medium text-[17px] py-2 px-4 rounded-md cursor-pointer ${activeTab === 'huong-dan' ? 'bg-[#000F8F] text-white' : 'border border-gray-700'}`}>
                  Hướng dẫn mua hàng
                </button>
                <button onClick={() => setActiveTab("danh-gia")} className={`font-medium text-[17px] py-2 px-4 rounded-md cursor-pointer ${activeTab === 'danh-gia' ? 'bg-[#000F8F] text-white' : 'border border-gray-700'}`}>
                  Đánh giá sản phẩm
                </button>
              </div>
              {activeTab === "mo-ta" && (
                // Mô tả sản phẩm
                <div>
                  <div
                    className={`transition-all duration-300 overflow-hidden ${
                      expanded ? "max-h-full" : "max-h-[1400px]"
                      }`}
                  >
                    <p className="text-[14px] pb-5">
                      Vào ngày 13/09 vừa qua, Apple đã cho ra mắt chiếc iPhone
                      15 với nhiều thay đổi. Thiết kế ấn tượng với 5 màu sắc,
                      hiệu năng mạnh mẽ, cổng sạc USB-C và hệ thống camera sắc
                      nét.
                    </p>
                    <h2 className="text-[32px] text-black font-bold pb-1">
                      1. Đánh giá chi tiết iPhone 15: 8 điểm nâng cấp
                    </h2>
                    <div>
                      <h4 className="text-[28px] text-black font-bold pb-3 pt-2">
                        1.1 Thiết kế sang trọng
                      </h4>
                      <p className="text-[14px] pb-3">
                        iPhone 15 kế thừa ưu điểm phiên bản tiền nhiệm và được
                        bố sung một vài thay đổi gồm: mặt lưng bền bỉ làm bằng
                        kính pha màu và cạnh viền bo góc mới. Hãng trang bị 5
                        màu sắc dành cho iPhone 15 gồm đen, xanh dương, xanh lá
                        cây, vàng và hồng. Từ nhiều nhận định, phiên bản màu năm
                        nay quyến rũ và bắt mắt hơn. Đặc biệt, phiên bản màu
                        hồng hứa hẹn được rất nhiều chị em lựa chọn.{" "}
                      </p>
                      <p className="text-[14px] pb-3">
                        Điểm đáng chú ý nhất là màn hình viên thuốc kết hợp cùng
                        tính năng Dynamic Island vô cùng độc đáo xuất hiện dòng
                        14 Pro và Pro Max. Kích thước máy 147.6 x 71.6 x 7.8 mm
                        và trọng lượng 171 g.
                      </p>
                      <div>
                        <img src="/iphone-15-1.jpg" alt="" />
                      </div>
                    </div>
                    <div>
                      <h4 className="text-[28px] text-black font-bold pb-3 pt-2">
                        1.2 Cổng sạc USB-C
                      </h4>
                      <p className="text-[14px] pb-3">
                        Sau nhiều đồn đoán, Apple đã cho ra mắt chiếc cổng sạc
                        USB-C 2 trên iPhone 15. Chúng hỗ trợ tốc độ truyền tải
                        lên đến 480Mbps. Người dùng có thể dễ dàng để kết nối
                        với các thiết bị khác như Mac, AirPods 2, … để sạc pin,
                        truyền tải dữ liệu, hình ảnh, video.
                      </p>
                      <div>
                        <img src="/iphone-15-3.jpg" alt="" />
                      </div>
                    </div>
                    <div>
                      <h4 className="text-[28px] text-black font-bold pb-3 pt-2">
                        1.3 Màn hình sắc nét
                      </h4>
                      <p className="text-[14px] pb-3">
                        Màn hình 6.1 inch Super Retina XDR trang bị tấm nền hiển
                        thị sống động. Độ sáng màn hình có thể đạt 2000nits giúp
                        người dùng làm việc mọi điều kiện chiếu sáng khác nhau:
                        ngoài trời, trong văn phòng hay ban đêm.
                      </p>
                      <div>
                        <img src="/iphone-15-5.jpg" alt="" />
                      </div>
                    </div>
                    <div>
                      <h4 className="text-[28px] text-black font-bold pb-3 pt-2">
                        1.4 Chip xử lý Apple Bionic A16 mạnh mẽ
                      </h4>
                      <p className="text-[14px] pb-3">
                        Năm nay, máy được tích hợp con chip A16 Bionic gồm 6
                        nhân CPU ( 2 nhân hiệu suất và 4 nhân hiệu quả), 5 nhân
                        GPU và 16 nhân Neutral Engine. iPhone 15 đáp ứng mượt mà
                        với mọi tác vụ từ giải trí, đọc báo, lướt web.
                      </p>
                      <div>
                        <img src="/iphone-15-6.jpg" alt="" />
                      </div>
                    </div>
                    <div>
                      <h4 className="text-[28px] text-black font-bold pb-3 pt-2">
                        1.5 Hệ thống camera
                      </h4>
                      <p className="text-[14px] pb-3">
                        iPhone 15 sở hữu 3 camera bao gồm camera chính 48MP, ống
                        kính tele và ống kính selfie 12MP. Camera luôn là điểm
                        rất nhiều người dùng yêu thích mỗi phiên bản mới. Thực
                        sự năm nay, hãng mang đến bất ngờ với 2 cải tiến đáng
                        tiền: ống kinh chính 48MP sắc nét vượt trội so 12MP của
                        phiên bản tiền nhiệm và khả năng zoom quang học lên đến
                        2x dễ dàng nắm bắt chủ thể ở xa.
                      </p>
                      <p className="text-[14px] pb-3">
                        Không chỉ vậy, cảm biến mới của hãng cho phép thu sáng
                        tốt hơn trong đêm. Người dùng có thể chụp bức hình màu
                        sắc hài hòa, độ cân bằng cao. Khả năng lấy nét của phiên
                        bản mới cũng được Apple nâng cấp mang đến bức hình chụp
                        chuyên nghiệp.
                      </p>
                      <div>
                        <img src="/iphone-15-2.jpg" alt="" />
                      </div>
                    </div>
                    <div>
                      <h4 className="text-[28px] text-black font-bold pb-3 pt-2">
                        1.6 Kết nối mạnh mẽ
                      </h4>
                      <p className="text-[14px] pb-3">
                        iPhone 15 được trang bị chip Ultra Wideband thế hệ thứ
                        hai, cho phép hai thiết bị iPhone cùng sử dụng con chip
                        này có thể kết nối ở phạm vi rộng gấp ba lần so với
                        trước đây. Nhờ đó, người dùng có thể sử dụng tính năng
                        “Tìm chính xác” ngay cả trong đám đông, đồng thời nâng
                        cao sự riêng tư.
                      </p>
                      <div>
                        <img src="/iphone-15-7.jpg" alt="" />
                      </div>
                    </div>
                    <div>
                      <h4 className="text-[28px] text-black font-bold pb-3 pt-2">
                        1.7 Hệ điều hành iOS 17
                      </h4>
                      <p className="text-[14px] pb-3">
                        Chiếc máy sẽ được tích hợp hệ điều hành iOS 17 với rất
                        nhiều tính năng độc đáo bao gồm:
                      </p>
                      <p className="text-[14px] pb-3">
                        Voicemall: Xem tin nhắn theo thời gian thực mỗi khi có
                        người liên hệ
                      </p>
                      <p className="text-[14px] pb-3">
                        Ứng dụng tin nhắn được bổ sung nhãn dán mới độc đáo giúp
                        cuộc trò chuyện trở nên thú vị hơn
                      </p>
                      <p className="text-[14px] pb-3">
                        Namedrop: Tính năng giúp người dùng kết nối giữa 2
                        iPhone khi đặt gần nhau. Một giải pháp bảo mật và an
                        toàn, kết nối nhanh chóng.
                      </p>
                      <p className="text-[14px] pb-3">
                        Ngoài ra, còn rất nhiều tính năng khác được hãng bổ sung
                        cập nhật như Journal, StandBy, FaceTime, … nâng cấp trải
                        nghiệm sử dụng.
                      </p>
                      <div>
                        <img src="/iphone-15-4.jpg" alt="" />
                      </div>
                    </div>
                    <div>
                      <h4 className="text-[28px] text-black font-bold pb-3 pt-2">
                        1.8 Thời lượng pin
                      </h4>
                      <p className="text-[14px] pb-3">
                        iPhone 15 sẽ có thời lượng pin lên đến 20 giờ khi xem
                        video hoặc 80 giờ khi nghe nhạc. Sạc nhanh 20W, máy đạt
                        50% dung lượng pin chỉ sau 30 phút. Ngoài ra, thiết bị
                        còn hỗ trợ sạc không dây MagSafe 15W và sạc Qi 7.5W.
                      </p>
                      <div>
                        <img src="/iphone-15-8.jpg" alt="" />
                      </div>
                    </div>
                    <div className="p-5">
                      <table class="w-full text-[14px] text-gray-700">
                        <tbody>
                          <tr>
                            <td class="w-1/2 px-4 py-1">RAM</td>
                            <td class="w-1/2 px-4 py-1">6GB</td>
                          </tr>
                          <tr>
                            <td class="w-1/2 px-4 py-1">Kích thước màn hình</td>
                            <td class="w-1/2 px-4 py-1">6.1''</td>
                          </tr>
                          <tr>
                            <td class="w-1/2 px-4 py-1">Tần số quét</td>
                            <td class="w-1/2 px-4 py-1">60Hz</td>
                          </tr>
                          <tr>
                            <td class="w-1/2 px-4 py-1">Độ phân giải</td>
                            <td class="w-1/2 px-4 py-1">
                              Super Retina XDR (2556 x 1179 Pixels)
                            </td>
                          </tr>
                          <tr>
                            <td class="w-1/2 px-4 py-1">Bộ nhớ trong</td>
                            <td class="w-1/2 px-4 py-1">128GB</td>
                          </tr>
                          <tr>
                            <td class="w-1/2 px-4 py-1">
                              Độ phân giải camera sau
                            </td>
                            <td class="w-1/2 px-4 py-1">
                              Chính 48 MP & Phụ 12 MP
                            </td>
                          </tr>
                          <tr>
                            <td class="w-1/2 px-4 py-1">
                              Độ phân giải camera trước
                            </td>
                            <td class="w-1/2 px-4 py-1">12 MP</td>
                          </tr>
                          <tr>
                            <td class="w-1/2 px-4 py-1">Hệ điều hành</td>
                            <td class="w-1/2 px-4 py-1">iOS 17</td>
                          </tr>
                          <tr>
                            <td class="w-1/2 px-4 py-1">Chip xử lý</td>
                            <td class="w-1/2 px-4 py-1">
                              Apple A16 Bionic 6 nhân
                            </td>
                          </tr>
                          <tr>
                            <td class="w-1/2 px-4 py-1">Dung lượng pin</td>
                            <td class="w-1/2 px-4 py-1">Li-Ion</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                  <div className="text-center mt-4">
                    <button
                      onClick={() => setExpanded(!expanded)}
                      className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
                    >
                      {expanded ? "Thu gọn" : "Xem thêm"}
                    </button>
                  </div>
                </div>
              )}
              {activeTab === 'huong-dan' && (
                // Hướng dẫn mua hàng
                <div>
                  <p className="text-[15px] py-2">
                    <span className="font-medium">Bước 1: </span>
                    Truy cập website và lựa chọn sản phẩm cần mua
                  </p>
                  <p className="text-[15px] py-2">
                    <span className="font-medium">Bước 2: </span>
                    Click và sản phẩm muốn mua, màn hình hiển thị ra pop up với
                    các lựa chọn sau
                    <br />
                    <p className="py-2">
                      Nếu bạn muốn tiếp tục mua hàng: Bấm vào phần tiếp tục mua
                      hàng để lựa chọn thêm sản phẩm vào giỏ hàng
                    </p>
                    <p className="py-2">
                      Nếu bạn muốn xem giỏ hàng để cập nhật sản phẩm: Bấm vào xem
                      giỏ hàng
                    </p>
                    <p className="py-2">
                      Nếu bạn muốn đặt hàng và thanh toán cho sản phẩm này vui
                      lòng bấm vào: Đặt hàng và thanh toán
                    </p>
                  </p>
                  <p className="text-[15px] py-2">
                    <span className="font-medium">Bước 3: </span>
                    Lựa chọn thông tin tài khoản thanh toán
                    <br />
                    <p className="py-2">
                      Nếu bạn đã có tài khoản vui lòng nhập thông tin tên đăng
                      nhập là email và mật khẩu vào mục đã có tài khoản trên hệ
                      thống
                    </p>
                    <p className="py-2">
                      Nếu bạn chưa có tài khoản và muốn đăng ký tài khoản vui lòng
                      điền các thông tin cá nhân để tiếp tục đăng ký tài khoản.
                      Khi có tài khoản bạn sẽ dễ dàng theo dõi được đơn hàng của
                      mình
                    </p>
                    <p className="py-2">
                      Nếu bạn muốn mua hàng mà không cần tài khoản vui lòng nhấp
                      chuột vào mục đặt hàng không cần tài khoản
                    </p>
                  </p>
                  <p className="text-[15px] py-2">
                    <span className="font-medium">Bước 4: </span>
                    Điền các thông tin của bạn để nhận đơn hàng, lựa chọn hình
                    thức thanh toán và vận chuyển cho đơn hàng của mình
                  </p>
                  <p className="text-[15px] py-2">
                    <span className="font-medium">Bước 5: </span>
                    Xem lại thông tin đặt hàng, điền chú thích và gửi đơn hàng
                  </p>
                  <p className="text-[15px] py-2">
                    Sau khi nhận được đơn hàng bạn gửi chúng tôi sẽ liên hệ bằng
                    cách gọi điện lại để xác nhận lại đơn hàng và địa chỉ của bạn.
                  </p>
                  <p className="text-[15px] py-2">Trân trọng cảm ơn.</p>
                </div>
              )}
              {activeTab === 'danh-gia' && (
                // Đánh giá sản phẩm
                <div>
                  <p className="bg-[#D1ECF1] p-3 text-[15px] rounded-md border border-[#2db8d1]">
                    Bạn tiến hàng mua và cài app{" "}
                    <span className="text-red-500">Đánh giá sản phẩm </span>mới sử
                    dụng được tính năng này!
                  </p>
                </div>
              )}
            </div>
            <div className="h-full p-2 bg-white flex-1 rounded-sm">
              <div className="">
                <div className="flex items-center bg-[#000f8f] space-x-2 px-3 py-1 rounded-sm">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="bi bi-bookmarks-fill w-5 h-5 fill-current text-white"
                    viewBox="0 0 16 16"
                  >
                    <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"></path>
                  </svg>
                  <h3 className="text-white font-medium text-xl">
                    Có thể bạn thích
                  </h3>
                </div>
                <div className="grid grid-cols-2 place-items-center gap-4 pt-5">
                  <div className="w-[226px]">
                    <div className="p-3 rounded-sm ring-1 ring-black/10 shadow-[0_0_18px_0_rgba(0,0,0,0.06)]">
                      <div className="relative">
                        <div className="h-[190px] w-[190px]">
                          <img
                            className="object-contain transition-transform duration-300 ease-out hover:-translate-y-1"
                            src="/230913033139-iphone-15-yellow.webp"
                            alt=""
                          />
                        </div>
                        <div className="absolute top-2">
                          <span className="relative inline-block bg-red-600 text-white text-[10px] font-bold px-2 py-1 rounded-tr-lg rounded-br-lg">
                            Giảm 12%
                            <span className="absolute bottom-0 left-0 w-0 h-0 border-r-[6px] border-b-[6px] border-r-red-800 border-b-transparent"></span>
                          </span>
                        </div>
                        <div className="flex space-x-2 py-[2px] bg-[#000F8F] w-[70px] rounded-2xl absolute bottom-1">
                          <img
                            className="h-[20px] w-[20px]"
                            src="/title_image_1_tag.webp"
                            alt=""
                          />
                          <span className="text-white text-[13px]">Mới</span>
                        </div>
                      </div>
                      <div className="pt-5">
                        <h3 className="text-[#231F20] text-[16px] font-medium hover:text-amber-400">
                          iphone 15 128GB - Chính hãng VN
                        </h3>
                        <p className="text-red-500 font-extrabold py-2">
                          21.990.000đ
                        </p>
                        <del className="text-gray-500 py-2">24.990.000đ</del>
                        <p className="text-[12px] bg-[#F3F4F6] rounded-sm py-3 px-2">
                          Được hỗ trợ 1 đổi 1 trong 30 ngày nếu có lỗi từ nhà
                          sản xuất
                        </p>
                        <div className="flex items-center justify-between py-2">
                          <div className="flex items-center justify-center space-x-1">
                            <img
                              className="h-[15px] w-[15px] object-contain"
                              src="/icons8-heart-50.png"
                              alt="Thích"
                            />
                            <span className="text-[15px] text-[#231F20] font-semibold hover:text-amber-400">
                              Thích
                            </span>
                          </div>
                          <div className="flex items-center justify-center space-x-1">
                            <img
                              className="h-[15px] w-[15px] object-contain"
                              src="/icons8-circle-50.png"
                              alt="Thích"
                            />
                            <span className="text-[15px] text-[#231F20] font-semibold hover:text-amber-400">
                              So Sánh
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="w-[226px]">
                    <div className="p-3 rounded-sm ring-1 ring-black/10 shadow-[0_0_18px_0_rgba(0,0,0,0.06)]">
                      <div className="relative">
                        <div className="h-[190px] w-[190px]">
                          <img
                            className="object-contain transition-transform duration-300 ease-out hover:-translate-y-1"
                            src="/230913033139-iphone-15-yellow.webp"
                            alt=""
                          />
                        </div>
                        <div className="absolute top-2">
                          <span className="relative inline-block bg-red-600 text-white text-[10px] font-bold px-2 py-1 rounded-tr-lg rounded-br-lg">
                            Giảm 12%
                            <span className="absolute bottom-0 left-0 w-0 h-0 border-r-[6px] border-b-[6px] border-r-red-800 border-b-transparent"></span>
                          </span>
                        </div>
                        <div className="flex space-x-2 py-[2px] bg-[#000F8F] w-[70px] rounded-2xl absolute bottom-1">
                          <img
                            className="h-[20px] w-[20px]"
                            src="/title_image_1_tag.webp"
                            alt=""
                          />
                          <span className="text-white text-[13px]">Mới</span>
                        </div>
                      </div>
                      <div className="pt-5">
                        <h3 className="text-[#231F20] text-[16px] font-medium hover:text-amber-400">
                          iphone 15 128GB - Chính hãng VN
                        </h3>
                        <p className="text-red-500 font-extrabold py-2">
                          21.990.000đ
                        </p>
                        <del className="text-gray-500 py-2">24.990.000đ</del>
                        <p className="text-[12px] bg-[#F3F4F6] rounded-sm py-3 px-2">
                          Được hỗ trợ 1 đổi 1 trong 30 ngày nếu có lỗi từ nhà
                          sản xuất
                        </p>
                        <div className="flex items-center justify-between py-2">
                          <div className="flex items-center justify-center space-x-1">
                            <img
                              className="h-[15px] w-[15px] object-contain"
                              src="/icons8-heart-50.png"
                              alt="Thích"
                            />
                            <span className="text-[15px] text-[#231F20] font-semibold hover:text-amber-400">
                              Thích
                            </span>
                          </div>
                          <div className="flex items-center justify-center space-x-1">
                            <img
                              className="h-[15px] w-[15px] object-contain"
                              src="/icons8-circle-50.png"
                              alt="Thích"
                            />
                            <span className="text-[15px] text-[#231F20] font-semibold hover:text-amber-400">
                              So Sánh
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="w-[226px]">
                    <div className="p-3 rounded-sm ring-1 ring-black/10 shadow-[0_0_18px_0_rgba(0,0,0,0.06)]">
                      <div className="relative">
                        <div className="h-[190px] w-[190px]">
                          <img
                            className="object-contain transition-transform duration-300 ease-out hover:-translate-y-1"
                            src="/230913033139-iphone-15-yellow.webp"
                            alt=""
                          />
                        </div>
                        <div className="absolute top-2">
                          <span className="relative inline-block bg-red-600 text-white text-[10px] font-bold px-2 py-1 rounded-tr-lg rounded-br-lg">
                            Giảm 12%
                            <span className="absolute bottom-0 left-0 w-0 h-0 border-r-[6px] border-b-[6px] border-r-red-800 border-b-transparent"></span>
                          </span>
                        </div>
                        <div className="flex space-x-2 py-[2px] bg-[#000F8F] w-[70px] rounded-2xl absolute bottom-1">
                          <img
                            className="h-[20px] w-[20px]"
                            src="/title_image_1_tag.webp"
                            alt=""
                          />
                          <span className="text-white text-[13px]">Mới</span>
                        </div>
                      </div>
                      <div className="pt-5">
                        <h3 className="text-[#231F20] text-[16px] font-medium hover:text-amber-400">
                          iphone 15 128GB - Chính hãng VN
                        </h3>
                        <p className="text-red-500 font-extrabold py-2">
                          21.990.000đ
                        </p>
                        <del className="text-gray-500 py-2">24.990.000đ</del>
                        <p className="text-[12px] bg-[#F3F4F6] rounded-sm py-3 px-2">
                          Được hỗ trợ 1 đổi 1 trong 30 ngày nếu có lỗi từ nhà
                          sản xuất
                        </p>
                        <div className="flex items-center justify-between py-2">
                          <div className="flex items-center justify-center space-x-1">
                            <img
                              className="h-[15px] w-[15px] object-contain"
                              src="/icons8-heart-50.png"
                              alt="Thích"
                            />
                            <span className="text-[15px] text-[#231F20] font-semibold hover:text-amber-400">
                              Thích
                            </span>
                          </div>
                          <div className="flex items-center justify-center space-x-1">
                            <img
                              className="h-[15px] w-[15px] object-contain"
                              src="/icons8-circle-50.png"
                              alt="Thích"
                            />
                            <span className="text-[15px] text-[#231F20] font-semibold hover:text-amber-400">
                              So Sánh
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="w-[226px]">
                    <div className="p-3 rounded-sm ring-1 ring-black/10 shadow-[0_0_18px_0_rgba(0,0,0,0.06)]">
                      <div className="relative">
                        <div className="h-[190px] w-[190px]">
                          <img
                            className="object-contain transition-transform duration-300 ease-out hover:-translate-y-1"
                            src="/230913033139-iphone-15-yellow.webp"
                            alt=""
                          />
                        </div>
                        <div className="absolute top-2">
                          <span className="relative inline-block bg-red-600 text-white text-[10px] font-bold px-2 py-1 rounded-tr-lg rounded-br-lg">
                            Giảm 12%
                            <span className="absolute bottom-0 left-0 w-0 h-0 border-r-[6px] border-b-[6px] border-r-red-800 border-b-transparent"></span>
                          </span>
                        </div>
                        <div className="flex space-x-2 py-[2px] bg-[#000F8F] w-[70px] rounded-2xl absolute bottom-1">
                          <img
                            className="h-[20px] w-[20px]"
                            src="/title_image_1_tag.webp"
                            alt=""
                          />
                          <span className="text-white text-[13px]">Mới</span>
                        </div>
                      </div>
                      <div className="pt-5">
                        <h3 className="text-[#231F20] text-[16px] font-medium hover:text-amber-400">
                          iphone 15 128GB - Chính hãng VN
                        </h3>
                        <p className="text-red-500 font-extrabold py-2">
                          21.990.000đ
                        </p>
                        <del className="text-gray-500 py-2">24.990.000đ</del>
                        <p className="text-[12px] bg-[#F3F4F6] rounded-sm py-3 px-2">
                          Được hỗ trợ 1 đổi 1 trong 30 ngày nếu có lỗi từ nhà
                          sản xuất
                        </p>
                        <div className="flex items-center justify-between py-2">
                          <div className="flex items-center justify-center space-x-1">
                            <img
                              className="h-[15px] w-[15px] object-contain"
                              src="/icons8-heart-50.png"
                              alt="Thích"
                            />
                            <span className="text-[15px] text-[#231F20] font-semibold hover:text-amber-400">
                              Thích
                            </span>
                          </div>
                          <div className="flex items-center justify-center space-x-1">
                            <img
                              className="h-[15px] w-[15px] object-contain"
                              src="/icons8-circle-50.png"
                              alt="Thích"
                            />
                            <span className="text-[15px] text-[#231F20] font-semibold hover:text-amber-400">
                              So Sánh
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex items-center justify-center pt-5 pb-2">
                  <button className="flex items-center justify-center border border-[#000F8F] px-3 py-1 space-x-2 rounded-md">
                    <span className="text-[#000F8F]">Xem toàn bộ sản phẩm</span>
                    <span className="text-[#000F8F] text-[20px] font-bold">
                      {" "}
                      &rarr;{" "}
                    </span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Sản phẩm liên quan */}
        <RelatedProducts/>
        {/* Cùng phân khúc giá */}
        <SamePriceRangeProducts/>
        {/* Sản phẩm đã xem */}
        <ViewedProducts/>
      </div>
    </>
  );
}

export default Detail;
