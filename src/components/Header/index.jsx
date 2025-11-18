import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { getShoppingCartByUserId, removeFromCart, updateCartItemQuantity } from "../../services/shoppingCartServices";


function Header({ user, onLogout }) {
  const [cartItems, setCartItems] = useState([]);

  const loadCart = async () => {
    const user = JSON.parse(localStorage.getItem("user"));
    if (!user) return;
    try {
      const result = await getShoppingCartByUserId(user.user_id);
      if (result.success) {
        setCartItems(result.data || []);
      }
    } catch (error) {
      console.error("Lỗi khi tải giỏ hàng:", error);
    }
  };

  useEffect(() => {
    loadCart();
  }, []);

  const handleRemoveFromCart = async (cartItemId) => {
    // const user = JSON.parse(localStorage.getItem("user"));
    // if (!user) return;
    try {
      const result = await removeFromCart(cartItemId);
      if (result.success) {
        setCartItems((prev) => prev.filter((item) => item.cart_item_id !== cartItemId));
      }


    } catch (error) {
      console.error("Lỗi khi xóa sản phẩm khỏi giỏ hàng:", error);
    }
  };

  const handleupdateQuantity = async (cartItemId, currentQuantity, newQuantity) => {
    if (newQuantity < 1) return;

    try {
      setCartItems(prevItems =>
        prevItems.map(item =>
          item.cart_item_id === cartItemId
            ? { ...item, quantity: newQuantity }
            : item
        )
      );

      const result = await updateCartItemQuantity(cartItemId, newQuantity);
      
      // Nếu API thất bại, khôi phục lại giá trị cũ
      if (!result?.success) {
        setCartItems(prevItems =>
          prevItems.map(item =>
            item.cart_item_id === cartItemId
              ? { ...item, quantity: currentQuantity }
              : item
          )
        );
      }
    } catch (error) {
      console.error("Lỗi khi cập nhật số lượng:", error);
      // Khôi phục lại giá trị cũ nếu có lỗi
      setCartItems(prevItems =>
        prevItems.map(item =>
          item.cart_item_id === cartItemId
            ? { ...item, quantity: currentQuantity }
            : item
        )
      );
    }
};
  return (
    <>
      <header className="relative group/header">
        <div className="fixed top-0 right-0 left-0 z-50 bg-[#000F8F] py-2 text-white">
          <div>
            <div className="container flex flex-col lg:flex-row items-center justify-between px-3 sm:px-4 md:px-6 lg:px-8 xl:px-16 2xl:px-32 mx-auto gap-2 sm:gap-3 lg:gap-0">
              <div className="w-[120px] sm:w-[150px] md:w-[180px] lg:w-[219px] h-[28px] sm:h-[35px] md:h-[40px] lg:h-[45px] order-1 lg:order-none">
                <img src="/logo.webp" alt="Ảnh logo" className="w-full h-full object-contain" />
              </div>
              <div className="w-full lg:w-auto flex flex-col sm:flex-row gap-2 lg:gap-0 order-2 lg:order-none">
              <div className="bg-[#2E3AA3] z-10 flex p-2 items-center justify-center space-x-2 sm:space-x-3 rounded-sm group focus-within:bg-amber-500 relative w-full sm:w-auto">
                <button className="flex items-center space-x-2 cursor-pointer">
                  <img
                    className="h-[18px] w-[18px] sm:h-[20px] sm:w-[20px]"
                    src="/icons8-navigation-menu-50.png"
                    alt="Danh mục"
                  />
                  <span className="text-[12px] sm:text-[14px]">Danh mục</span>
                </button>
                <div className="bg-white absolute top-full left-0 sm:top-[98px] sm:-left-[230px] mt-2 sm:mt-0 group-focus-within:flex hidden rounded-md z-50 shadow-lg border border-gray-200 max-h-[80vh] overflow-y-auto">
                  <ul className="flex p-1 sm:p-2 flex-col space-y-1 w-full sm:w-[270px] text-black text-[12px] sm:text-[13px] md:text-[14px] lg:text-[16px]">
                    <li className="flex items-center justify-between px-2 sm:px-3 py-1.5 sm:py-2 space-x-2 group/category hover:bg-gray-200">
                      <div className="relative flex items-center space-x-2 flex-1">
                        <div>
                          <img
                            className="w-[20px] h-[20px] sm:w-[25px] sm:h-[25px] object-cover"
                            src="/icons8-iphone-50.png"
                            alt="Iphone"
                          />
                        </div>
                        <span className="flex-1">Iphone</span>
                        <div className="bg-white p-2 sm:p-3 h-auto sm:h-[262px] w-[90vw] sm:w-[600px] md:w-[700px] lg:w-[800px] rounded-md absolute sm:fixed top-0 left-full sm:top-[116px] sm:left-[402px] ml-2 sm:ml-0 hidden lg:grid lg:grid-cols-3 group-hover/category:grid shadow-lg border border-gray-200 max-h-[80vh] sm:max-h-none overflow-y-auto">
                          <div className="cursor-pointer group/sub-category">
                            <h3 className="font-medium text-[14px] sm:text-[15px] md:text-[16px] group-hover/sub-category:text-amber-500">
                              Iphone 15 Series
                            </h3>
                            <ul className="pt-2 sm:pt-4 space-y-1 sm:space-y-2">
                              <li className="hover:text-amber-400 text-[12px] sm:text-[13px] md:text-[14px]">
                                Iphone 15
                              </li>
                              <li className="hover:text-amber-400 text-[12px] sm:text-[13px] md:text-[14px]">
                                Iphone 15 Plus
                              </li>
                              <li className="hover:text-amber-400 text-[12px] sm:text-[13px] md:text-[14px]">
                                Iphone 15 Pro
                              </li>
                              <li className="hover:text-amber-400 text-[12px] sm:text-[13px] md:text-[14px]">
                                Iphone 15 Pro Max
                              </li>
                            </ul>
                          </div>
                          <div className="cursor-pointer group/sub-category">
                            <h3 className="font-medium text-[14px] sm:text-[15px] md:text-[16px] group-hover/sub-category:text-amber-500">
                              Iphone 14 Series
                            </h3>
                            <ul className="pt-2 sm:pt-4 space-y-1 sm:space-y-2">
                              <li className="hover:text-amber-400 text-[12px] sm:text-[13px] md:text-[14px]">
                                Iphone 14 Pro Max
                              </li>
                              <li className="hover:text-amber-400 text-[12px] sm:text-[13px] md:text-[14px]">
                                Iphone 14 Pro
                              </li>
                              <li className="hover:text-amber-400 text-[12px] sm:text-[13px] md:text-[14px]">
                                Iphone 14 Plus
                              </li>
                              <li className="hover:text-amber-400 text-[12px] sm:text-[13px] md:text-[14px]">
                                Iphone 14
                              </li>
                            </ul>
                          </div>
                          <div className="cursor-pointer group/sub-category">
                            <h3 className="font-medium text-[14px] sm:text-[15px] md:text-[16px] group-hover/sub-category:text-amber-500">
                              Iphone 13
                            </h3>
                            <ul className="pt-2 sm:pt-4 space-y-1 sm:space-y-2">
                              <li className="hover:text-amber-400 text-[12px] sm:text-[13px] md:text-[14px]">
                                Iphone 13
                              </li>
                              <li className="hover:text-amber-400 text-[12px] sm:text-[13px] md:text-[14px]">
                                Iphone 13 mini
                              </li>
                            </ul>
                          </div>
                          <div className="cursor-pointer group/sub-category">
                            <h3 className="font-medium text-[14px] sm:text-[15px] md:text-[16px] group-hover/sub-category:text-amber-500">
                              Iphone 12
                            </h3>
                          </div>
                          <div className="cursor-pointer group/sub-category">
                            <h3 className="font-medium text-[14px] sm:text-[15px] md:text-[16px] group-hover/sub-category:text-amber-500">
                              Iphone 11
                            </h3>
                          </div>
                        </div>
                      </div>
                      <div className="hidden lg:block">
                        <img
                          className="w-[18px] h-[18px] sm:w-[20px] sm:h-[20px] object-cover"
                          src="/icons8-next-30.png"
                          alt=""
                        />
                      </div>
                    </li>
                    <li className="flex items-center justify-between px-2 sm:px-3 py-1.5 sm:py-2 space-x-2 group/category hover:bg-gray-200">
                      <div className="flex items-center space-x-2 flex-1">
                        <div>
                          <img
                            className="w-[20px] h-[20px] sm:w-[25px] sm:h-[25px] object-cover"
                            src="/icons8-ipad-100.png"
                            alt="Iphone"
                          />
                        </div>
                        <span className="flex-1">Ipad</span>
                      </div>
                      <div>
                        {/* <img className="w-[20px] h-[20px] object-cover" src="/icons8-next-30.png" alt="" /> */}
                      </div>
                    </li>
                    <li className="flex items-center justify-between px-2 sm:px-3 py-1.5 sm:py-2 space-x-2 hover:bg-gray-200">
                      <div className="flex items-center space-x-2 flex-1">
                        <div>
                          <img
                            className="w-[20px] h-[20px] sm:w-[25px] sm:h-[25px] object-cover"
                            src="/icons8-watch-50.png"
                            alt="Iphone"
                          />
                        </div>
                        <span className="flex-1">Watch</span>
                      </div>
                      <div>
                        {/* <img className="w-[20px] h-[20px] object-cover" src="/icons8-next-30.png" alt="" /> */}
                      </div>
                    </li>
                    <li className="flex items-center justify-between px-2 sm:px-3 py-1.5 sm:py-2 space-x-2 hover:bg-gray-200">
                      <div className="flex items-center space-x-2 flex-1">
                        <div>
                          <img
                            className="w-[20px] h-[20px] sm:w-[25px] sm:h-[25px] object-cover"
                            src="/icons8-mac-50.png"
                            alt="Iphone"
                          />
                        </div>
                        <span className="flex-1">Mac</span>
                      </div>
                      <div>
                        {/* <img className="w-[20px] h-[20px] object-cover" src="/icons8-next-30.png" alt="" /> */}
                      </div>
                    </li>
                    <li className="flex items-center justify-between px-2 sm:px-3 py-1.5 sm:py-2 space-x-2 hover:bg-gray-200">
                      <div className="flex items-center space-x-2 flex-1">
                        <div>
                          <img
                            className="w-[20px] h-[20px] sm:w-[25px] sm:h-[25px] object-cover"
                            src="/icons8-airpods-50.png"
                            alt="Iphone"
                          />
                        </div>
                        <span className="flex-1">AirPods</span>
                      </div>
                      <div>
                        {/* <img className="w-[20px] h-[20px] object-cover" src="/icons8-next-30.png" alt="" /> */}
                      </div>
                    </li>
                    <li className="flex items-center justify-between px-2 sm:px-3 py-1.5 sm:py-2 space-x-2 hover:bg-gray-200">
                      <div className="flex items-center space-x-2 flex-1">
                        <div>
                          <img
                            className="w-[20px] h-[20px] sm:w-[25px] sm:h-[25px] object-cover"
                            src="/icons8-volume-50.png"
                            alt="Iphone"
                          />
                        </div>
                        <span className="flex-1">Âm thanh</span>
                      </div>
                      <div>
                        {/* <img className="w-[20px] h-[20px] object-cover" src="/icons8-next-30.png" alt="" /> */}
                      </div>
                    </li>
                    <li className="flex items-center justify-between px-2 sm:px-3 py-1.5 sm:py-2 space-x-2 hover:bg-gray-200">
                      <div className="flex items-center space-x-2 flex-1">
                        <div>
                          <img
                            className="w-[20px] h-[20px] sm:w-[25px] sm:h-[25px] object-cover"
                            src="/icons8-phone-case-50.png"
                            alt="Iphone"
                          />
                        </div>
                        <span className="flex-1">Phụ kiện</span>
                      </div>
                      <div>
                        {/* <img className="w-[20px] h-[20px] object-cover" src="/icons8-next-30.png" alt="" /> */}
                      </div>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="bg-white rounded-md w-full sm:w-[60%] lg:w-[25%] order-3 lg:order-none">
                <form
                  className="flex items-center justify-between pl-2"
                  action=""
                >
                  <input
                    className="text-[#75759D] outline-0 text-xs sm:text-sm md:text-base w-full py-1.5 sm:py-2"
                    type="text"
                    placeholder="Bạn cần tìm gì..."
                  />
                  <button className="hover:bg-amber-300 h-[32px] sm:h-[36px] md:h-[40px] w-[40px] sm:w-[45px] md:w-[50px] flex items-center justify-center rounded-md flex-shrink-0">
                    <img
                      className="h-[16px] w-[16px] sm:h-[18px] sm:w-[18px] md:h-[20px] md:w-[20px]"
                      src="/icons8-search-50.png"
                      alt="Tìm kiếm"
                    />
                  </button>
                </form>
              </div>
              <ul className="flex flex-wrap justify-center lg:justify-start gap-2 sm:gap-3 md:gap-4 lg:gap-0 w-full sm:w-auto order-4 lg:order-none">
                <li className="flex space-x-1 sm:space-x-1.5 items-center justify-center w-auto sm:w-[90px] md:w-[100px] lg:w-[120px]">
                  <span className="">
                    <img
                      className="h-[28px] w-[28px] sm:h-[32px] sm:w-[32px] md:h-[35px] md:w-[35px] object-contain"
                      src="/icons8-telephone-50.png"
                      alt="Phone"
                    />
                  </span>
                  <span className="hover:text-amber-300 text-[10px] sm:text-[11px] md:text-[12px] lg:text-[14px] leading-tight">
                    Hotline
                    <br />
                    <span className="hidden sm:inline">19006750</span>
                    <span className="sm:hidden">1900</span>
                  </span>
                </li>
                <li className="flex space-x-1 sm:space-x-1.5 items-center justify-center w-auto sm:w-[90px] md:w-[100px] lg:w-[120px]">
                  <span className="">
                    <img
                      className="h-[24px] w-[24px] sm:h-[28px] sm:w-[28px] md:h-[32px] md:w-[32px] lg:h-[35px] lg:w-[35px] object-contain"
                      src="/icons8-location-50.png"
                      alt="Address"
                    />
                  </span>
                  <Link to="/he-thong-cua-hang">
                    <span className="hover:text-amber-300 text-[10px] sm:text-[11px] md:text-[12px] lg:text-[14px] leading-tight">
                      Hệ thống
                      <br />
                      cửa hàng
                    </span>
                  </Link>
                </li>
                <li className="flex space-x-1 sm:space-x-1.5 items-center justify-center w-auto sm:w-[90px] md:w-[100px] lg:w-[120px]">
                  <span className="">
                    <img
                      className="h-[24px] w-[24px] sm:h-[28px] sm:w-[28px] md:h-[32px] md:w-[32px] lg:h-[35px] lg:w-[35px] object-contain"
                      src="/icons8-order-50.png"
                      alt="Order"
                    />
                  </span>

                  <span className="hover:text-amber-300 text-[10px] sm:text-[11px] md:text-[12px] lg:text-[14px] leading-tight">
                    Tra cứu
                    <br />
                    đơn hàng
                  </span>
                </li>

                <li className="flex space-x-1 sm:space-x-1.5 items-center justify-center w-auto sm:w-[90px] md:w-[100px] lg:w-[120px] group">
                  <span className="">
                    <img
                      className="h-[28px] w-[28px] sm:h-[32px] sm:w-[32px] md:h-[40px] md:w-[40px] lg:h-[45px] lg:w-[45px] xl:h-[50px] xl:w-[50px] object-contain"
                      src="/icons8-cart-100.png"
                      alt="Cart"
                    />
                  </span>

                  <span className="relative group/cart">
                    <span className="flex justify-center text-center text-[10px] sm:text-[11px] md:text-[12px] lg:text-[14px] cursor-pointer">
                      <Link to="/cart" className="hidden md:inline">Giỏ hàng Sản phẩm</Link>
                      <Link to="/cart" className="md:hidden">Giỏ hàng</Link>
                    </span>

                    <div className="group-hover/cart:flex hidden absolute top-full right-0 sm:top-12 sm:right-2 mt-2 sm:mt-0 bg-white w-[90vw] sm:w-[350px] md:w-[400px] max-w-[400px] py-2 sm:py-3 px-3 sm:px-4 rounded-md flex-col space-y-3 sm:space-y-4 ring-1 ring-black/10 shadow-[0_0_18px_0_rgba(0,0,0,0.06)] text-xs sm:text-sm z-50 max-h-[80vh] overflow-y-auto">

                      {cartItems.length === 0 ? (
                        <span className="text-center text-gray-500">
                          Giỏ hàng của bạn đang trống
                        </span>
                      ) : (
                        <>
                          {cartItems.map((item) => (
                            <div key={item.cart_item_id} className="flex items-start space-x-2 sm:space-x-3">
                              {/* Ảnh sản phẩm */}
                              <div className="w-[25%] sm:w-[30%] flex-shrink-0">
                                <img
                                  src={item.image}
                                  alt={item.product_name}
                                  className="w-full h-auto object-cover rounded-md"
                                />
                              </div>

                              {/* Thông tin sản phẩm */}
                              <div className="flex-1 space-y-1 min-w-0">
                                <p className="font-semibold text-gray-900 text-xs sm:text-sm line-clamp-2">
                                  {item.product_name} - {item.variation_options[1]?.variation_option_name || ''}
                                </p>
                                <p className="text-gray-600 text-xs sm:text-sm line-clamp-1">{item.variation_options[0]?.variation_option_name || ''}</p>
                                <button className="text-red-500 text-xs sm:text-sm hover:underline"
                                  //truyền cart_item_id để xóa
                                  onClick={() => handleRemoveFromCart(item.cart_item_id)}>
                                  Xóa
                                </button>

                                {/* Số lượng và giá */}
                                <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mt-2 gap-2 sm:gap-0">
                                  <div className="flex items-center space-x-2">
                                    <span className="text-gray-700 text-xs sm:text-sm">Số lượng:</span>
                                    <div className='flex space-x-2 sm:space-x-3 justify-between items-center text-center border border-black w-auto h-auto rounded-md'>
                                      <button className='bg-[#000f8f] h-[20px] sm:h-[25px] px-1.5 sm:px-2 text-white text-xs sm:text-sm m-0.5 sm:m-1 rounded-md'
                                        onClick={() =>
                                          handleupdateQuantity(item.cart_item_id, item.quantity, item.quantity - 1)
                                        }>
                                        -
                                      </button>
                                      <p className='m-0 text-gray-900 px-1 sm:px-2 text-xs sm:text-sm'>{item.quantity}</p>
                                      <button className='bg-[#000f8f] h-[20px] sm:h-[25px] px-1.5 sm:px-2 text-white text-xs sm:text-sm m-0.5 sm:m-1 rounded-md'
                                        onClick={() =>
                                          handleupdateQuantity(item.cart_item_id, item.quantity, item.quantity + 1)
                                        }>
                                        +
                                      </button>
                                    </div>
                                  </div>
                                  <p className="font-bold text-red-500 text-xs sm:text-sm md:text-base">
                                    {Number(item.price).toLocaleString()}đ
                                  </p>
                                </div>
                              </div>
                            </div>
                          ))}

                          {/* Tổng tiền & nút thanh toán */}
                          <div className="border-t border-gray-200 pt-2 sm:pt-3 space-y-2 sm:space-y-3">
                            <div className="flex justify-between items-center">
                              <p className="font-semibold text-gray-900 text-xs sm:text-sm">Tổng tiền:</p>
                              <p className="font-bold text-red-500 text-sm sm:text-base md:text-lg">
                                {cartItems.reduce((sum, i) => sum + i.quantity * i.price, 0).toLocaleString()}đ
                              </p>
                            </div>
                            <button
                              type="submit"
                              className="w-full rounded-md bg-[#000f8f] px-4 sm:px-5 py-1.5 sm:py-2 text-xs sm:text-sm font-semibold text-white shadow-sm hover:bg-amber-300 hover:text-[#000f8f] transition-all"
                            >
                              Thanh toán
                            </button>
                          </div>
                        </>
                      )}
                    </div>

                  </span>
                </li>
              </ul>

              </div>
              <div className="bg-[#2E3AA3] flex flex-col justify-center items-center p-1.5 sm:p-2 rounded-sm hover:bg-amber-400 group order-5 lg:order-none">
                <span className="">
                  <img
                    className="h-[16px] w-[16px] sm:h-[18px] sm:w-[18px] md:h-[20px] md:w-[20px] object-contain"
                    src="/icons8-user-50.png"
                    alt="User"
                  />
                </span>
                <div className="relative group/user">
                  <span className="flex justify-center text-center text-[10px] sm:text-[11px] md:text-[12px] lg:text-[14px] cursor-pointer">
                    Thông tin
                  </span>

                  <div className="bg-white absolute top-full right-0 sm:top-8 sm:right-[-8px] mt-2 sm:mt-0 w-[180px] sm:w-[200px] md:w-[220px] rounded-md hidden md:group-hover/user:flex flex-col shadow-md border border-gray-200 z-50">
                    <ul className="py-1 sm:py-2 px-[7px] flex flex-col space-y-1 sm:space-y-2 text-black text-[12px] sm:text-[13px] md:text-[14px]">

                      {/* Nếu CHƯA đăng nhập */}
                      {!user ? (
                        <>
                          <li className="flex items-center w-full px-3 sm:px-4 py-1.5 sm:py-2 space-x-2 hover:bg-gray-200">
                            <img
                              className="w-[18px] h-[18px] sm:w-[20px] sm:h-[20px] object-cover"
                              src="/icons8-login-50.png"
                              alt=""
                            />
                            <Link to="/dang-nhap">
                              <span>Đăng nhập</span>
                            </Link>
                          </li>

                          <li className="flex items-center w-full px-3 sm:px-4 py-1.5 sm:py-2 space-x-2 hover:bg-gray-200">
                            <img
                              className="w-[18px] h-[18px] sm:w-[20px] sm:h-[20px] object-cover"
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
                          <li className="flex items-center w-full px-3 sm:px-4 py-1.5 sm:py-2 space-x-2 hover:bg-gray-200">
                            <img
                              className="w-[18px] h-[18px] sm:w-[20px] sm:h-[20px] object-cover filter brightness-0"
                              src="/icons8-user-50.png"
                              alt=""
                            />
                            <Link to="/thong-tin-khach-hang">
                              <span>Tài Khoản</span>
                            </Link>
                          </li>

                          <li
                            className="flex items-center w-full px-3 sm:px-4 py-1.5 sm:py-2 space-x-2 hover:bg-gray-200 cursor-pointer"
                            onClick={onLogout}
                          >
                            <img
                              className="w-[18px] h-[18px] sm:w-[20px] sm:h-[20px] object-cover"
                              src="/icons8-logout-50.png"
                              alt=""
                            />
                            <span>Đăng xuất</span>
                          </li>
                        </>
                      )}

                      {/* Mục chung cho cả 2 trạng thái */}
                      <li className="flex items-center w-full px-3 sm:px-4 py-1.5 sm:py-2 space-x-2 hover:bg-gray-200">
                        <img
                          className="w-[18px] h-[18px] sm:w-[20px] sm:h-[20px] object-cover"
                          src="/icons8-heart-50.png"
                          alt=""
                        />
                        <span className="line-clamp-1">Danh sách yêu thích (0)</span>
                      </li>

                      <li className="flex items-center w-full px-3 sm:px-4 py-1.5 sm:py-2 space-x-2 hover:bg-gray-200">
                        <img
                          className="w-[18px] h-[18px] sm:w-[20px] sm:h-[20px] object-cover"
                          src="/icons8-compare-50.png"
                          alt=""
                        />
                        <span className="line-clamp-1">So sánh sản phẩm (0)</span>
                      </li>
                    </ul>
                  </div>
                </div>


              </div>

            </div>
          </div>
        </div>
        <ul className="bg-white group-hover/header:absolute group-hover/header:top-[0] group-hover/header:right-0 group-hover/header:left-0 z-20 pt-[75px] flex flex-wrap container mx-auto px-4 sm:px-6 md:px-8 lg:px-16 xl:px-32 text-[12px] sm:text-[13px] md:text-[14px] lg:text-[15px] md:text-[17px] font-semibold gap-2 sm:gap-3 md:gap-4 lg:space-x-8">
          <Link to="">
            <li className="py-2 hover:text-[#000F8F] text-[12px] sm:text-[13px] md:text-[14px] lg:text-[15px] md:text-[16px]">Trang chủ</li>
          </Link>

          <li className="py-2 hover:text-[#000F8F] text-[12px] sm:text-[13px] md:text-[14px] lg:text-[15px] md:text-[16px]"><Link to="/introduction">Giới thiệu</Link></li>
          <li className="flex items-center justify-center py-2 space-x-1 group/rotate relative">
            <span className="hover:text-[#000F8F] text-[12px] sm:text-[13px] md:text-[14px] lg:text-[15px] md:text-[16px]">Sản phẩm</span>
            <div>
              <img
                className="w-[12px] h-[12px] sm:w-[14px] sm:h-[14px] md:w-[15px] md:h-[15px] object-cover transition-transform duration-500 group-hover/rotate:rotate-180"
                src="/icons8-sort-down-30.png"
                alt=""
              />
            </div>
            <div
              className="h-auto w-full fixed top-[115px] left-0 container mx-auto px-4 sm:px-6 md:px-8 lg:px-16 xl:px-32
                                        origin-bottom scale-y-0
                                        transition-transform duration-500 ease-out
                                        group-hover/rotate:scale-y-100 z-50 overflow-hidden"
            >
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 p-3 sm:p-4 bg-white rounded-sm gap-y-3 sm:gap-y-4 shadow-lg border border-gray-100">
                <div className="cursor-pointer">
                  <h3 className="font-medium text-[16px] sm:text-[18px] md:text-[20px] text-[#000F8F] hover:text-amber-400">
                    Iphone
                  </h3>
                  <ul className="font-normal text-[12px] sm:text-[13px] md:text-[14px] lg:text-[16px] space-y-1 sm:space-y-2 mt-1 sm:mt-2">
                    <li className="hover:text-[#000F8F]">Iphone 15 Series</li>
                    <li className="hover:text-[#000F8F]">Iphone 14 Series</li>
                    <li className="hover:text-[#000F8F]">Iphone 13</li>
                    <li className="hover:text-[#000F8F]">Iphone 12</li>
                    <li className="hover:text-[#000F8F]">Iphone 11</li>
                  </ul>
                </div>
                <div className="cursor-pointer">
                  <h3 className="font-medium text-[16px] sm:text-[18px] md:text-[20px] text-[#000F8F] hover:text-amber-400">
                    iPad
                  </h3>
                  <ul className="font-normal text-[12px] sm:text-[13px] md:text-[14px] lg:text-[16px] space-y-1 sm:space-y-2 mt-1 sm:mt-2">
                    <li className="hover:text-[#000F8F]">ipad Pro</li>
                    <li className="hover:text-[#000F8F]">iPad Air</li>
                    <li className="hover:text-[#000F8F]">iPad Gen 10</li>
                    <li className="hover:text-[#000F8F]">iPad Gen 9</li>
                    <li className="hover:text-[#000F8F]">iPad mini</li>
                  </ul>
                </div>
                <div className="cursor-pointer">
                  <h3 className="font-medium text-[16px] sm:text-[18px] md:text-[20px] text-[#000F8F] hover:text-amber-400">
                    Watch
                  </h3>
                  <ul className="font-normal text-[12px] sm:text-[13px] md:text-[14px] lg:text-[16px] space-y-1 sm:space-y-2 mt-1 sm:mt-2">
                    <li className="hover:text-[#000F8F]">Apple Watch Ultra</li>
                    <li className="hover:text-[#000F8F]">Apple Watch S7</li>
                    <li className="hover:text-[#000F8F]">Apple Watch SE</li>
                    <li className="hover:text-[#000F8F]">Apple Watch S8</li>
                    <li className="hover:text-[#000F8F]">Apple Watch S9</li>
                  </ul>
                </div>
                <div className="cursor-pointer">
                  <h3 className="font-medium text-[16px] sm:text-[18px] md:text-[20px] text-[#000F8F] hover:text-amber-400">
                    Mac
                  </h3>
                  <ul className="font-normal text-[12px] sm:text-[13px] md:text-[14px] lg:text-[16px] space-y-1 sm:space-y-2 mt-1 sm:mt-2">
                    <li className="hover:text-[#000F8F]">MacBook</li>
                    <li className="hover:text-[#000F8F]">Mac Studio</li>
                    <li className="hover:text-[#000F8F]">iMac</li>
                    <li className="hover:text-[#000F8F]">Mac mini</li>
                    <li className="hover:text-[#000F8F]">Apple TV</li>
                  </ul>
                </div>
                <div className="cursor-pointer">
                  <h3 className="font-medium text-[16px] sm:text-[18px] md:text-[20px] text-[#000F8F] hover:text-amber-400">
                    Airpods
                  </h3>
                </div>
                <div className="cursor-pointer">
                  <h3 className="font-medium text-[16px] sm:text-[18px] md:text-[20px] text-[#000F8F] hover:text-amber-400">
                    Âm thanh
                  </h3>
                  <ul className="font-normal text-[12px] sm:text-[13px] md:text-[14px] lg:text-[16px] space-y-1 sm:space-y-2 mt-1 sm:mt-2">
                    <li className="hover:text-[#000F8F]">Loa</li>
                    <li className="hover:text-[#000F8F]">Tai nghe</li>
                  </ul>
                </div>
                <div className="cursor-pointer">
                  <h3 className="font-medium text-[16px] sm:text-[18px] md:text-[20px] text-[#000F8F] hover:text-amber-400">
                    Phụ kiện
                  </h3>
                  <ul className="font-normal text-[12px] sm:text-[13px] md:text-[14px] lg:text-[16px] space-y-1 sm:space-y-2 mt-1 sm:mt-2">
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
            <li className="py-2 hover:text-[#000F8F] text-[12px] sm:text-[13px] md:text-[14px] lg:text-[15px] md:text-[16px]">Tin tức</li>
          </Link>

          <li className="py-2 hover:text-[#000F8F] text-[12px] sm:text-[13px] md:text-[14px] lg:text-[15px] md:text-[16px]"><Link to="/review">Review</Link></li>
          <li className="py-2 hover:text-[#000F8F] text-[12px] sm:text-[13px] md:text-[14px] lg:text-[15px] md:text-[16px]"><Link to="/relatedquestions">Câu hỏi thường gặp</Link></li>
          <Link to="/Tra-cuu-bao-hanh">
            <li className="py-2 hover:text-[#000F8F] text-[12px] sm:text-[13px] md:text-[14px] lg:text-[15px] md:text-[16px]">
              Tra cứu bảo hành
            </li>
          </Link>
          <Link to="/dat-truoc-san-pham">
            <li className="py-2 hover:text-[#000F8F] text-[12px] sm:text-[13px] md:text-[14px] lg:text-[15px] md:text-[16px]">Đặt trước</li>
          </Link>

          <li className="py-2 hover:text-[#000F8F] text-[12px] sm:text-[13px] md:text-[14px] lg:text-[15px] md:text-[16px]"><Link to="/contact">Liên hệ</Link></li>
        </ul>
        <div className="group-hover/header:h-[115px]"></div>
      </header>
    </>
  );
}

export default Header;