function ListProducts() {
  return (
    <>
      <div className="container w-11/12 mx-auto mt-8 mb-8 bg-white rounded-md shadow-md">
        <h1 className="p-5 text-4xl">So sánh sản phẩm</h1>

        <div className="p-5">
          <table className="w-full text-center border border-gray-300">
            <tbody>
              {/* Hình ảnh */}
              <tr>
                <th className="w-1/6 p-3 text-left bg-gray-100 border border-gray-400">
                  Hình ảnh
                </th>
                <td className="p-3 border border-gray-400">
                  <img
                    src="https://bizweb.dktcdn.net/thumb/medium/100/502/883/products/230913032939-iphone-15-green-8c348a34-ebcd-41c6-8b6d-ef888554c4a2.png?v=1700194186787"
                    alt="iPhone 15"
                    className="object-cover w-32 h-32 mx-auto"
                  />
                </td>
                <td className="p-3 border border-gray-400">
                  <img
                    src="https://bizweb.dktcdn.net/thumb/medium/100/502/883/products/230913051329-iphone-15-plus-blac.png?v=1700194480037"
                    alt="iPhone 15 Plus"
                    className="object-cover w-32 h-32 mx-auto"
                  />
                </td>
                <td className="p-3 border border-gray-400">
                  <img
                    src="https://bizweb.dktcdn.net/thumb/medium/100/502/883/products/minhtuanmobile-ipad-pro-11-selec-78be9d03-2d95-4a49-968e-a5332eb20465.png?v=1700213422163"
                    alt="iPad Pro"
                    className="object-cover w-32 h-32 mx-auto"
                  />
                </td>
              </tr>

              {/* Tên sản phẩm */}
              <tr>
                <th className="p-3 text-left bg-gray-100 border border-gray-400">
                  Tên sản phẩm
                </th>
                <td className="p-3 border border-gray-400">
                  iPhone 15 256GB - Chính hãng VN/A
                </td>
                <td className="p-3 border border-gray-400">
                  iPhone 15 Plus 128GB - Chính hãng VN/A
                </td>
                <td className="p-3 border border-gray-400">
                  iPad Pro 11 inch M2 2022 256GB Wifi + 5G - Chính hãng VN
                </td>
              </tr>

              {/* Giá */}
              <tr>
                <th className="p-3 text-left bg-gray-100 border border-gray-400">
                  Giá
                </th>
                <td className="p-3 font-bold text-red-600 border border-gray-400">
                  24.290.000₫
                </td>
                <td className="p-3 font-bold text-red-600 border border-gray-400">
                  25.390.000₫
                </td>
                <td className="p-3 font-bold text-red-600 border border-gray-400">
                  26.890.000₫
                </td>
              </tr>

              {/* Tình trạng */}
              <tr>
                <th className="p-3 text-left bg-gray-100 border border-gray-400">
                  Tình trạng
                </th>
                <td className="p-3 border border-gray-400">Còn hàng</td>
                <td className="p-3 border border-gray-400">Còn hàng</td>
                <td className="p-3 border border-gray-400">Còn hàng</td>
              </tr>

              {/* Loại */}
              <tr>
                <th className="p-3 text-left bg-gray-100 border border-gray-400">
                  Loại
                </th>
                <td className="p-3 border border-gray-400">Điện thoại</td>
                <td className="p-3 border border-gray-400">Điện thoại</td>
                <td className="p-3 border border-gray-400">iPad</td>
              </tr>

              {/* Nhà cung cấp*/}
              <tr>
                <th className="p-3 text-left bg-gray-100 border border-gray-400">
                  Nhà cung cấp
                </th>
                <td className="p-3 border border-gray-400">Apple</td>
                <td className="p-3 border border-gray-400">Apple</td>
                <td className="p-3 border border-gray-400">Apple</td>
              </tr>
              {/* Cấu hình chi tiết*/}
              <tr>
                <th className="p-3 text-left bg-gray-100 border border-gray-400">
                  Cấu hình chi tiết
                </th>
                <td className="p-3 border border-gray-400">
                  <table className="w-full text-center border border-gray-300">
                    <tbody>
                      <tr>
                        <th className="p-3 text-left bg-gray-100 border border-gray-400">
                          RAM
                        </th>
                        <td className="p-3 border border-gray-400">6GB</td>
                      </tr>
                      <tr>
                        <th className="p-3 text-left bg-gray-100 border border-gray-400">
                          Kích thước màn hình
                        </th>
                        <td className="p-3 border border-gray-400">6.7"</td>
                      </tr>
                      <tr>
                        <th className="p-3 text-left bg-gray-100 border border-gray-400">
                          Tần số quét
                        </th>
                        <td className="p-3 border border-gray-400">60Hz</td>
                      </tr>
                      <tr>
                        <th className="p-3 text-left bg-gray-100 border border-gray-400">
                          Độ phân giải
                        </th>
                        <td className="p-3 border border-gray-400">
                          1290 x 2796 Pixels
                        </td>
                      </tr>
                      <tr>
                        <th className="p-3 text-left bg-gray-100 border border-gray-400">
                          Bộ nhớ trong
                        </th>
                        <td className="p-3 border border-gray-400">128GB</td>
                      </tr>
                      <tr>
                        <th className="p-3 text-left bg-gray-100 border border-gray-400">
                          Độ phân giải camera sau
                        </th>
                        <td className="p-3 border border-gray-400">
                          Chính 48 MP & Phụ 12 MP
                        </td>
                      </tr>
                      <tr>
                        <th className="p-3 text-left bg-gray-100 border border-gray-400">
                          Độ phân giải camera trước
                        </th>
                        <td className="p-3 border border-gray-400">12 MP</td>
                      </tr>
                      <tr>
                        <th className="p-3 text-left bg-gray-100 border border-gray-400">
                          Hệ điều hành
                        </th>
                        <td className="p-3 border border-gray-400"> iOS 17</td>
                      </tr>
                      <tr>
                        <th className="p-3 text-left bg-gray-100 border border-gray-400">
                          Chip xử lý
                        </th>
                        <td className="p-3 border border-gray-400">
                          Apple A16 Bionic 6 nhân
                        </td>
                      </tr>
                      <tr>
                        <th className="p-3 text-left bg-gray-100 border border-gray-400">
                          Dung lượng pin
                        </th>
                        <td className="p-3 border border-gray-400">
                          4.352 mAh
                        </td>
                      </tr>
                      <tr>
                        <th className="p-3 text-left bg-gray-100 border border-gray-400">
                          Loại pin
                        </th>
                        <td className="p-3 border border-gray-400 "> Li-Ion</td>
                      </tr>
                      <tr>
                        <td>
                          <button
                            type="submit"
                            className="pt-2 pb-2 pl-10 pr-10 mt-5 mb-5 text-white bg-blue-800 hover:bg-blue-500"
                          >
                            Xóa
                          </button>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </td>
                <td className="p-3 border border-gray-400">
                  <table className="w-full text-center border border-gray-300">
                    <tbody>
                      <tr>
                        <th className="p-3 text-left bg-gray-100 border border-gray-400">
                          RAM
                        </th>
                        <td className="p-3 border border-gray-400">6GB</td>
                      </tr>
                      <tr>
                        <th className="p-3 text-left bg-gray-100 border border-gray-400">
                          Kích thước màn hình
                        </th>
                        <td className="p-3 border border-gray-400">6.7"</td>
                      </tr>
                      <tr>
                        <th className="p-3 text-left bg-gray-100 border border-gray-400">
                          Tần số quét
                        </th>
                        <td className="p-3 border border-gray-400">60Hz</td>
                      </tr>
                      <tr>
                        <th className="p-3 text-left bg-gray-100 border border-gray-400">
                          Độ phân giải
                        </th>
                        <td className="p-3 border border-gray-400">
                          1290 x 2796 Pixels
                        </td>
                      </tr>
                      <tr>
                        <th className="p-3 text-left bg-gray-100 border border-gray-400">
                          Bộ nhớ trong
                        </th>
                        <td className="p-3 border border-gray-400">128GB</td>
                      </tr>
                      <tr>
                        <th className="p-3 text-left bg-gray-100 border border-gray-400">
                          Độ phân giải camera sau
                        </th>
                        <td className="p-3 border border-gray-400">
                          Chính 48 MP & Phụ 12 MP
                        </td>
                      </tr>
                      <tr>
                        <th className="p-3 text-left bg-gray-100 border border-gray-400">
                          Độ phân giải camera trước
                        </th>
                        <td className="p-3 border border-gray-400">12 MP</td>
                      </tr>
                      <tr>
                        <th className="p-3 text-left bg-gray-100 border border-gray-400">
                          Hệ điều hành
                        </th>
                        <td className="p-3 border border-gray-400"> iOS 17</td>
                      </tr>
                      <tr>
                        <th className="p-3 text-left bg-gray-100 border border-gray-400">
                          Chip xử lý
                        </th>
                        <td className="p-3 border border-gray-400">
                          Apple A16 Bionic 6 nhân
                        </td>
                      </tr>
                      <tr>
                        <th className="p-3 text-left bg-gray-100 border border-gray-400">
                          Dung lượng pin
                        </th>
                        <td className="p-3 border border-gray-400">
                          4.352 mAh
                        </td>
                      </tr>
                      <tr>
                        <th className="p-3 text-left bg-gray-100 border border-gray-400">
                          Loại pin
                        </th>
                        <td className="p-3 border border-gray-400"> Li-Ion</td>
                      </tr>
                      <tr>
                        <td>
                          <button
                            type="submit"
                            className="pt-2 pb-2 pl-10 pr-10 mt-5 mb-5 text-white bg-blue-800 hover:bg-blue-500"
                          >
                            Xóa
                          </button>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </td>
                <td className="p-3 border border-gray-400">
                  <table className="w-full text-center border border-gray-300">
                    <tbody>
                      <tr>
                        <th className="p-3 text-left bg-gray-100 border border-gray-400">
                          RAM
                        </th>
                        <td className="p-3 border border-gray-400">6GB</td>
                      </tr>
                      <tr>
                        <th className="p-3 text-left bg-gray-100 border border-gray-400">
                          Kích thước màn hình
                        </th>
                        <td className="p-3 border border-gray-400">6.7"</td>
                      </tr>
                      <tr>
                        <th className="p-3 text-left bg-gray-100 border border-gray-400">
                          Tần số quét
                        </th>
                        <td className="p-3 border border-gray-400">60Hz</td>
                      </tr>
                      <tr>
                        <th className="p-3 text-left bg-gray-100 border border-gray-400">
                          Độ phân giải
                        </th>
                        <td className="p-3 border border-gray-400">
                          1290 x 2796 Pixels
                        </td>
                      </tr>
                      <tr>
                        <th className="p-3 text-left bg-gray-100 border border-gray-400">
                          Bộ nhớ trong
                        </th>
                        <td className="p-3 border border-gray-400">128GB</td>
                      </tr>
                      <tr>
                        <th className="p-3 text-left bg-gray-100 border border-gray-400">
                          Độ phân giải camera sau
                        </th>
                        <td className="p-3 border border-gray-400">
                          Chính 48 MP & Phụ 12 MP
                        </td>
                      </tr>
                      <tr>
                        <th className="p-3 text-left bg-gray-100 border border-gray-400">
                          Độ phân giải camera trước
                        </th>
                        <td className="p-3 border border-gray-400">12 MP</td>
                      </tr>
                      <tr>
                        <th className="p-3 text-left bg-gray-100 border border-gray-400">
                          Hệ điều hành
                        </th>
                        <td className="p-3 border border-gray-400"> iOS 17</td>
                      </tr>
                      <tr>
                        <th className="p-3 text-left bg-gray-100 border border-gray-400">
                          Chip xử lý
                        </th>
                        <td className="p-3 border border-gray-400">
                          Apple A16 Bionic 6 nhân
                        </td>
                      </tr>
                      <tr>
                        <th className="p-3 text-left bg-gray-100 border border-gray-400">
                          Dung lượng pin
                        </th>
                        <td className="p-3 border border-gray-400">
                          4.352 mAh
                        </td>
                      </tr>
                      <tr>
                        <th className="p-3 text-left bg-gray-100 border border-gray-400">
                          Loại pin
                        </th>
                        <td className="p-3 border border-gray-400"> Li-Ion</td>
                      </tr>
                      <tr>
                        <td>
                          <button
                            type="submit"
                            className="pt-2 pb-2 pl-10 pr-10 mt-5 mb-5 text-white bg-blue-800 hover:bg-blue-500"
                          >
                            Xóa
                          </button>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}

export default ListProducts;
