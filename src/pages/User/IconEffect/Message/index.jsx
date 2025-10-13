import {
  ChatBubbleLeftRightIcon,
  PhoneIcon,
  MapPinIcon,
} from "@heroicons/react/24/outline";

function Message() {
  return (
    <>
      <div className="fixed bottom-32 right-6">
        {/* Checkbox toggle */}
        <input type="checkbox" id="hientinnhan" className="hidden peer" />

        {/* Icon tin nhan */}
        <label
          htmlFor="hientinnhan"
          className="flex items-center justify-center w-12 h-12 bg-blue-800 border-white rounded-full shadow-lg cursor-pointer"
        >
          <ChatBubbleLeftRightIcon className="w-6 h-6 text-white" />
        </label>

        {/* Form tin nhan */}
        <div className="absolute right-0 p-4 text-black transition-all duration-300 ease-out scale-95 translate-y-3 bg-white shadow-lg opacity-0 pointer-events-none bottom-16 w-80 rounded-xl peer-checked:opacity-100 peer-checked:translate-y-0 peer-checked:scale-100 peer-checked:pointer-events-auto">
          <label
            htmlFor="hientinnhan"
            className="cursor-pointer pl-65 hover:text-yellow-500"
          >
            ✕
          </label>
          {/* Nút gọi */}
          <div className="flex gap-3 py-2 border-b border-gray-300">
            <PhoneIcon className="w-5 h-5 text-green-400"></PhoneIcon>
            <p className="text-base">Gọi ngay cho chúng tôi</p>
          </div>

          {/* Zalo */}
          <div className="flex items-center gap-3 py-2 border-b border-gray-300">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/9/91/Icon_of_Zalo.svg"
              className="w-5 h-5 text-blue-300"
            />

            <p className="text-base ">Chat với chúng tôi qua Zalo</p>
          </div>

          {/* Thông tin cửa hàng */}
          <div className="flex items-center gap-3 py-2">
            <MapPinIcon className="w-5 h-5 text-orange-400"></MapPinIcon>
            <p className="text-base">Thông tin cửa hàng</p>
          </div>
        </div>
      </div>

      <div className="fixed right-2 bottom-15 ">
        <img
          src="https://1000logos.net/wp-content/uploads/2021/11/Messenger-Logo.png"
          className="w-20 h-12 text-blue-400"
        />
      </div>
    </>
  );
}

export default Message;
