import React, { useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import { getShoppingCartByUserId, removeFromCart, updateCartItemQuantity } from '../../../services/shoppingCartServices';

function Cart() {
    const [cartItems, setCartItems] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    const dispatchCartUpdateEvent = (items) => {
        const totalQuantity = items.reduce((sum, item) => sum + item.quantity, 0);
        // Gửi đi cả tổng số lượng và danh sách sản phẩm đã cập nhật
        const event = new CustomEvent('cartUpdated', { detail: { totalQuantity, items } });
        window.dispatchEvent(event);
    };

    const loadCart = async () => {
        const user = JSON.parse(localStorage.getItem("user"));
        if (!user) {
            setIsLoading(false);
            return;
        };
        try {
            const result = await getShoppingCartByUserId(user.user_id);
            if (result.success) {
                const items = result.data || [];
                setCartItems(items);
                dispatchCartUpdateEvent(items); 
            }
        } catch (error) {
            console.error("Lỗi khi tải giỏ hàng:", error);
        } finally {
            setIsLoading(false);
        }
    };

    useEffect(() => {
        loadCart();
    }, []);

    const handleRemoveFromCart = async (cartItemId) => {
        try {
            const result = await removeFromCart(cartItemId);
            if (result.success) {
                setCartItems((prev) => {
                    const newItems = prev.filter((item) => item.cart_item_id !== cartItemId);
                    dispatchCartUpdateEvent(newItems); // Gửi sự kiện khi xóa
                    return newItems;
                });
            }
        } catch (error) {
            console.error("Lỗi khi xóa sản phẩm khỏi giỏ hàng:", error);
        }
    };

    const handleUpdateQuantity = async (cartItemId, currentQuantity, newQuantity) => {
        if (newQuantity < 1) return;

        // Cập nhật giao diện ngay 
        const optimisticItems = cartItems.map(item =>
            item.cart_item_id === cartItemId ? { ...item, quantity: newQuantity } : item
        );
        setCartItems(optimisticItems);
        dispatchCartUpdateEvent(optimisticItems); // Gửi sự kiện khi cập nhật 

        try {
            const result = await updateCartItemQuantity(cartItemId, newQuantity);
            if (!result?.success) {
                // Nếu API thất bại, khôi phục lại số lượng cũ
                const restoredItems = cartItems.map(item =>
                    item.cart_item_id === cartItemId ? { ...item, quantity: currentQuantity } : item
                );
                setCartItems(restoredItems);
                dispatchCartUpdateEvent(restoredItems);
            }
        } catch (error) {
            console.error("Lỗi khi cập nhật số lượng:", error);
            const restoredItems = cartItems.map(item =>
                item.cart_item_id === cartItemId ? { ...item, quantity: newQuantity } : item
            );
            setCartItems(restoredItems);
            dispatchCartUpdateEvent(restoredItems);
        }
    };

    const totalPrice = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);

    if (isLoading) {
        return <div className="text-center my-10">Đang tải giỏ hàng...</div>;
    }

    return (
        <>
            <div className="flex justify-center items-center w-[100%] gap-5 my-10">
                <div className="bg-white p-3 w-[60%] h-auto ring-1 ring-black/10 shadow-[0_0_18px_0_rgba(0,0,0,0.06)] rounded-sm">
                    {cartItems.length === 0 ? (
                        <div className="text-center py-10">
                            <p className="text-gray-500 text-lg">Giỏ hàng của bạn đang trống.</p>
                            <Link to="/" className="text-blue-600 hover:underline mt-2 inline-block">Tiếp tục mua sắm</Link>
                        </div>
                    ) : (
                        <>
                            <div className='w-full'>
                                <table className="w-full text-left border border-gray-300">
                                    <thead>
                                        <tr className='border-b border-gray-300 bg-gray-50'>
                                            <th className="px-4 py-2">Thông tin sản phẩm</th>
                                            <th className="px-4 py-2">Đơn giá</th>
                                            <th className="px-4 py-2">Số lượng</th>
                                            <th className="px-4 py-2">Thành tiền</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {cartItems.map(item => (
                                            <tr key={item.cart_item_id} className='border-b border-gray-300'>
                                                <td className="px-4 py-2 flex space-x-5 items-center">
                                                    <div className='w-[110px] h-[110px] flex-shrink-0'>
                                                        <img className="w-full h-full object-cover rounded" src={item.image} alt={item.product_name} />
                                                    </div>
                                                    <div className='flex-grow'>
                                                        <p className='font-bold hover:text-amber-300'>{item.product_name}</p>
                                                        <p className='text-sm text-gray-600'>{item.variation_options.map(v => v.variation_option_name).join(' - ')}</p>
                                                        <button onClick={() => handleRemoveFromCart(item.cart_item_id)} className='font-bold text-[#000f8f] hover:text-amber-400 cursor-pointer text-sm mt-1'>Xóa</button>
                                                    </div>
                                                </td>
                                                <td className="px-4 py-2 text-[#000f8f] font-bold">{Number(item.price).toLocaleString()}đ</td>
                                                <td className="px-4 py-2">
                                                    <div className='flex space-x-2 justify-between items-center text-center border border-gray-300 w-auto h-auto rounded-md max-w-[100px]'>
                                                        <button onClick={() => handleUpdateQuantity(item.cart_item_id, item.quantity, item.quantity - 1)} className='bg-[#000f8f] h-[25px] px-2 text-white m-1 rounded-md'>-</button>
                                                        <p className='m-0'>{item.quantity}</p>
                                                        <button onClick={() => handleUpdateQuantity(item.cart_item_id, item.quantity, item.quantity + 1)} className='bg-[#000f8f] h-[25px] px-2 text-white m-1 rounded-md'>+</button>
                                                    </div>
                                                </td>
                                                <td className="px-4 py-2 text-[#000f8f] font-bold">{(item.price * item.quantity).toLocaleString()}đ</td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>

                            <div className='w-full md:w-1/3 float-right mt-5 space-y-3'>
                                <div className='flex justify-between'>
                                    <p className='font-semibold'>Tổng tiền:</p>
                                    <p className='text-[#000f8f] font-bold text-lg'>{totalPrice.toLocaleString()}đ</p>
                                </div>
                                <div className="">
                                    <Link to="/payment" className="block text-center rounded-md bg-[#000f8f] w-full px-5 py-2 text-sm font-semibold text-white shadow-xs hover:bg-amber-300 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Thanh toán</Link>
                                </div>
                            </div>
                        </>
                    )}
                </div>

                <div className="bg-white px-5 w-[30%] h-auto ring-1 ring-black/10 shadow-[0_0_18px_0_rgba(0,0,0,0.06)] rounded-sm self-start">
                    <p className='font-semibold text-2xl py-4'>Thời gian giao hàng</p>
                    <div className='w-full'>
                        <form action="" >
                            <div className='flex space-x-3'>
                                <div className='w-1/2'>
                                    <input type="date" className='p-2 border border-[#aca6a6] w-full' />
                                </div>
                                <div className='w-1/2'>
                                    <select name="time" className="timeer timedeli-cta p-2 border border-[#aca6a6] w-full" id="time">
                                        <option selected="">Chọn thời gian</option>
                                        <option value="08h00 - 12h00">08h00 - 12h00</option>
                                        <option value=" 14h00 - 18h00"> 14h00 - 18h00</option>
                                        <option value=" 19h00 - 21h00"> 19h00 - 21h00</option>
                                    </select>
                                </div>
                            </div>
                            <div className='mt-2 mb-4'>
                                <input type="checkbox" name="" id="" className='w-5 h-5'/>
                                <span className='ml-3'>Xuất hóa đơn công ty</span>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Cart;
