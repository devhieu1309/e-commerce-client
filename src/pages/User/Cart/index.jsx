import React from 'react'

function cart() {
    return (
        <>
            <div className="flex justify-center items-center w-[100%] gap-5 my-10">
                <div className="bg-white p-3 w-[60%] h-auto ring-1 ring-black/10 shadow-[0_0_18px_0_rgba(0,0,0,0.06)] rounded-sm">
                    <div className='w-full'>
                        <table class="w-full text-left border border-gray-300">
                            <thead>
                                <tr className='border-b border-gray-300'>
                                    <th class="px-4 py-2">Thông tin sản phẩm</th>
                                    <th class="px-4 py-2">Đơn giá</th>
                                    <th class="px-4 py-2">Số lượng</th>
                                    <th class="px-4 py-2">Thành tiền</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr className='border-b border-gray-300'>
                                    <td class=" px-4 py-2 flex space-x-5">
                                        <div className='w-[20%]'>
                                            <img className="w-[110px] h-[110px] object-cover" src="../../../../public/minhtuanmobile-ipad-pro-11-selec-78be9d03-2d95-4a49-968e-a5332eb20465-25342150-a1b4-4244-a941-9089187a0048-44aae303-9599-4883-87ec-8b4256b6f45a.webp" alt="" />
                                        </div>
                                        <div className='w-[70%]'>
                                            <p className='font-bold hover:text-amber-300'>iPad Pro 11 inch M2 2022 Wifi + 5G - Chính hãng VN</p>
                                            <p>Xám</p>
                                            <p className='font-bold text-[#000f8f]  hover:text-amber-300'>Xóa</p>
                                        </div>
                                    </td>
                                    <td class=" px-4 py-2 text-[#000f8f] font-bold">23.190.000đ</td>
                                    <td class=" px-4 py-2">
                                        <div className='flex space-x-2 justify-between items-center text-center border border-gray-300 w-auto h-auto rounded-md'>
                                            <button className='bg-[#000f8f] h-[25px] px-2 text-white m-1 rounded-md'>-</button>
                                            <p className='m-0'>1</p>
                                            <button className='bg-[#000f8f] h-[25px] px-2 text-white m-1 rounded-md'>+</button>
                                        </div>
                                    </td>
                                    <td class=" px-4 py-2 text-[#000f8f] font-bold">23.190.000đ</td>
                                </tr>
                                <tr>
                                    <td class=" px-4 py-2 flex space-x-5">
                                        <div className='w-[20%]'>
                                            <img className="w-[110px] h-[110px] object-cover" src="../../../../public/minhtuanmobile-ipad-pro-11-selec-78be9d03-2d95-4a49-968e-a5332eb20465-25342150-a1b4-4244-a941-9089187a0048-44aae303-9599-4883-87ec-8b4256b6f45a.webp" alt="" />
                                        </div>
                                        <div className='w-[70%]'>
                                            <p className='font-bold hover:text-amber-300'>iPad Pro 11 inch M2 2022 Wifi + 5G - Chính hãng VN</p>
                                            <p>Xám</p>
                                            <p className='font-bold text-[#000f8f]  hover:text-amber-300'>Xóa</p>
                                        </div>
                                    </td>
                                    <td class=" px-4 py-2 text-[#000f8f] font-bold">23.190.000đ</td>
                                    <td class=" px-4 py-2">
                                        <div className='flex space-x-2 justify-between items-center text-center border border-gray-300 w-auto h-auto rounded-md'>
                                            <button className='bg-[#000f8f] h-[25px] px-2 text-white m-1 rounded-md'>-</button>
                                            <p className='m-0'>1</p>
                                            <button className='bg-[#000f8f] h-[25px] px-2 text-white m-1 rounded-md'>+</button>
                                        </div>
                                    </td>
                                    <td class=" px-4 py-2 text-[#000f8f] font-bold">23.190.000đ</td>
                                </tr>

                            </tbody>
                        </table>
                    </div>

                    <div className='w-[25%] float-right mt-5 space-y-3'>
                        <div className='flex justify-between'>
                            <p className='font-semibold'>Tổng tiền:</p>
                            <p className='text-[#000f8f] font-bold'>35.970.000đ</p>
                        </div>
                        <div class="">
                            <button type="submit" class="rounded-md bg-[#000f8f] w-full px-5 py-2 text-sm font-semibold text-white shadow-xs hover:bg-amber-300 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Thanh toán</button>
                        </div>
                    </div>


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
                                    <select name="time" class="timeer timedeli-cta p-2 border border-[#aca6a6] w-full" id="time">
                                        <option selected="">Chọn thời gian</option>
                                        <option value="08h00 - 12h00">08h00 - 12h00</option>
                                        <option value=" 14h00 - 18h00"> 14h00 - 18h00</option>
                                        <option value=" 19h00 - 21h00"> 19h00 - 21h00</option>
                                    </select>
                                </div>
                            </div>
                            <div className='mt-2'>
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

export default cart
