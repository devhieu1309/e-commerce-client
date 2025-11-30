import {
  getAllCompare,
  deleteCompare,
} from "../../../../services/compareProductServices";
import { useState, useEffect } from "react";
import { notification } from "antd";

function ListProducts() {
  const [compare, setCompare] = useState([]);
  const [apiNoti, contextHolder] = notification.useNotification();

  const fetchApi = async () => {
    try {
      const result = await getAllCompare();
      setCompare(result.data);
    } catch (error) {
      console.log("Lỗi khi fetch api: ", error);
    }
  };

  const handleDelete = async (id) => {
    try {
      const response = await deleteCompare(id);
      if (
        response?.success ||
        response?.message === "Xóa sản phẩm so sánh thành công"
      ) {
        apiNoti.success({
          message: "Thành công",
          description: "Xóa sản phẩm so sánh thành công",
        });
      } else {
        apiNoti.error({
          message: "Thất bại",
          description: "Xóa sản phẩm so sánh thất bại",
        });
      }

      setTimeout(() => {
        fetchApi();
      }, 1200);

      // load lại danh sách
    } catch (error) {
      console.log("Lỗi khi fetch api xóa: ", error);
    }
  };

  useEffect(() => {
    fetchApi();
  }, []);

  return (
    <>
      {contextHolder}

      <div className="container w-11/12 mx-auto mt-8 mb-8 bg-white rounded-md shadow-md">
        <h1 className="p-5 text-4xl">So sánh sản phẩm</h1>
        {compare.length === 0 && (
          <div className="container mb-8 bg-white pl-[20px] mrt-8 pmx-auto ">
            Bạn chưa có sản phẩm nào để so sánh hãy thêm vào nhé
          </div>
        )}

        <div className="p-5">
          {compare.map((com, index) => {
            const item = com.product_item;
            const product = item?.product;

            return (
              <table
                key={index}
                className="w-full mb-10 text-center border border-gray-300"
              >
                <tbody>
                  {/* Hình ảnh */}
                  <tr>
                    <th className="w-1/6 p-3 text-left bg-gray-100 border border-gray-400">
                      Hình ảnh
                    </th>
                    <td className="p-3 border border-gray-400">
                      <img
                        src={item?.image}
                        alt={product?.product_name}
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
                      {product?.product_name}
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
                  </tr>

                  {/* Tình trạng */}
                  <tr>
                    <th className="p-3 text-left bg-gray-100 border border-gray-400">
                      Tình trạng
                    </th>
                    <td className="p-3 border border-gray-400">Còn hàng</td>
                  </tr>

                  {/* Loại */}
                  <tr>
                    <th className="p-3 text-left bg-gray-100 border border-gray-400">
                      Loại
                    </th>
                    <td className="p-3 border border-gray-400">Điện thoại</td>
                  </tr>

                  {/* Nhà cung cấp */}
                  <tr>
                    <th className="p-3 text-left bg-gray-100 border border-gray-400">
                      Nhà cung cấp
                    </th>
                    <td className="p-3 border border-gray-400">Apple</td>
                  </tr>

                  {/* Cấu hình chi tiết */}
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
                            <td className="p-3 border border-gray-400">
                              128GB
                            </td>
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
                            <td className="p-3 border border-gray-400">
                              12 MP
                            </td>
                          </tr>
                          <tr>
                            <th className="p-3 text-left bg-gray-100 border border-gray-400">
                              Hệ điều hành
                            </th>
                            <td className="p-3 border border-gray-400">
                              iOS 17
                            </td>
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
                            <td className="p-3 border border-gray-400">
                              Li-Ion
                            </td>
                          </tr>

                          {/* Nút xóa */}
                          <tr>
                            <td colSpan={2} className="p-3">
                              <button
                                onClick={() =>
                                  handleDelete(com.compare_product_id)
                                }
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
            );
          })}
        </div>
      </div>
    </>
  );
}

export default ListProducts;
