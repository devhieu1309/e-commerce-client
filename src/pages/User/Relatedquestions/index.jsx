import BoxTitle from "../../../components/BoxTitle";
import Accordion from "../../../components/Accordion/accordion";
import FAQ from "../../../components/Accordion/FAQ";
import { vetaikhoan, vedathang, vethanhtoan, vegiaohang } from "../../../components/Accordion/faqData";

function Relatedquestions() {
    return (
        <>
            <div className="flex justify-center items-center w-[100%] gap-5 my-10">
                <div className="bg-white px-5 w-[70%] h-auto ring-1 ring-black/10 shadow-[0_0_18px_0_rgba(0,0,0,0.06)] rounded-sm">
                    <BoxTitle title="Hỏi đáp về tài khoản">
                        <div>
                            <FAQ data={vetaikhoan}/>
                        </div>
                    </BoxTitle>
                    <BoxTitle title="Hỏi đáp về đặt hàng">
                        <div>
                            <FAQ data={vedathang}/>
                        </div>
                    </BoxTitle>
                    <BoxTitle title="Hỏi đáp về thanh toán">
                        <div>
                            <FAQ data={vethanhtoan}/>
                        </div>
                    </BoxTitle>
                    <BoxTitle title="Hỏi đáp về giao hàng">
                        <div>
                            <FAQ data={vegiaohang}/>
                        </div>
                    </BoxTitle>
                </div>
                <div className="bg-white px-5 w-[20%] h-auto ring-1 ring-black/10 shadow-[0_0_18px_0_rgba(0,0,0,0.06)] rounded-sm self-start">
                    <BoxTitle title="Giải đáp thắc mắc">
                        <p className="my-4">Nếu bạn có thắc mắc gì, có thể gửi yêu cầu cho chúng tôi, và chúng tôi sẽ liên lạc lại với bạn sớm nhất có thể </p>
                        <div className="my-5">
                            <form>
                                <div class="space-y-12">
                                    <div class="">
                                        <div class="mt-5 space-y-4">
                                            <div class="sm:col-span-4">
                                                <div class="mt-2">
                                                    <div class="flex items-center rounded-md bg-white pl-3 outline-1 -outline-offset-1 outline-gray-300 focus-within:outline-2 focus-within:-outline-offset-2 focus-within:outline-indigo-600">
                                                        <input id="name" type="text" name="name" placeholder="Họ và tên" class="block min-w-0 grow bg-white py-1.5 pr-3 pl-1 text-base text-gray-900 placeholder:text-gray-400 focus:outline-none sm:text-sm/6" />
                                                    </div>
                                                </div>
                                            </div>

                                            <div class="sm:col-span-4">
                                                <div class="mt-2">
                                                    <div class="flex items-center rounded-md bg-white pl-3 outline-1 -outline-offset-1 outline-gray-300 focus-within:outline-2 focus-within:-outline-offset-2 focus-within:outline-indigo-600">
                                                        <input id="email" type="email" name="email" placeholder="Email" class="block min-w-0 grow bg-white py-1.5 pr-3 pl-1 text-base text-gray-900 placeholder:text-gray-400 focus:outline-none sm:text-sm/6" />
                                                    </div>
                                                </div>
                                            </div>

                                            <div class="sm:col-span-4">
                                                <div class="mt-2">
                                                    <div class="flex items-center rounded-md bg-white pl-3 outline-1 -outline-offset-1 outline-gray-300 focus-within:outline-2 focus-within:-outline-offset-2 focus-within:outline-indigo-600">
                                                        <input id="phone" type="number" name="phone" placeholder="Điện thoại*" class="block min-w-0 grow bg-white py-1.5 pr-3 pl-1 text-base text-gray-900 placeholder:text-gray-400 focus:outline-none sm:text-sm/6" />
                                                    </div>
                                                </div>
                                            </div>

                                            <div class="col-span-full">
                                                <div class="mt-2">
                                                    <textarea id="content" name="content" placeholder="Nội dung" rows="3" class="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"></textarea>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div class="mt-6 flex items-center justify-start gap-x-6">
                                    <button type="submit" class="rounded-md bg-[#000f8f] px-3 py-2 text-sm font-semibold text-white shadow-xs hover:bg-amber-300 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Gửi thông tin</button>
                                </div>
                            </form>
                        </div>
                    </BoxTitle>
                </div>
            </div>
        </>
    );
}
export default Relatedquestions;