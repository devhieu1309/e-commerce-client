import { useState } from "react";
import { chatBox } from "../../../../services/chatBoxAIServices";

function ChatBox() {
  const [isOpen, setIsOpen] = useState(false);
  const [message, setMessage] = useState("");
  const [chatHistory, setChatHistory] = useState([]);

  const sendMessage = async () => {
    if (!message.trim()) return;

    const newChat = [...chatHistory, { sender: "user", text: message }];
    setChatHistory(newChat);
    setMessage("");

    try {
      const data = await chatBox(message);
      setChatHistory([...newChat, { sender: "ai", text: data.reply }]);
    } catch (error) {
      setChatHistory([
        ...newChat,
        { sender: "ai", text: "Không thể kết nối với máy chủ." },
      ]);
      console.log("Lỗi khi fetch: ", error);
    }
  };

  return (
    <div>
      {/* Nút mở/đóng chat */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed flex items-center justify-center w-12 h-12 text-3xl text-white transition bg-blue-600 rounded-full shadow-lg bottom-48 right-6 hover:bg-blue-700"
      >
        💬
      </button>

      {/* Form chat */}
      {isOpen && (
        <div className="fixed bottom-25 z-10 right-6 w-[420px] h-[520px] bg-white rounded-2xl shadow-2xl flex flex-col overflow-hidden animate-fadeIn">
          {/* Header */}
          <div className="flex items-center justify-between px-4 py-3 text-white bg-blue-600">
            <h2 className="text-lg font-semibold">Chat cùng AI 🤖</h2>
            <button
              onClick={() => setIsOpen(false)}
              className="text-2xl hover:text-gray-200"
            >
              ✕
            </button>
          </div>

          {/* Nội dung chat */}
          <div className="flex-1 p-3 space-y-3 overflow-y-auto bg-gray-50">
            {chatHistory.map((chat, i) => (
              <div
                key={i}
                className={`flex ${
                  chat.sender === "user" ? "justify-end" : "justify-start"
                }`}
              >
                <span
                  className={`px-4 py-2 rounded-2xl text-[15px] max-w-[75%] leading-snug break-words ${
                    chat.sender === "user"
                      ? "bg-blue-600 text-white"
                      : "bg-gray-200 text-gray-800"
                  }`}
                >
                  {chat.text}
                </span>
              </div>
            ))}
          </div>

          {/* Input + nút gửi */}
          <div className="flex items-center p-3 bg-gray-100 border-t border-gray-300">
            <input
              type="text"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="Nhập tin nhắn..."
              onKeyDown={(e) => e.key === "Enter" && sendMessage()}
              className="flex-1 px-4 py-2 text-sm border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <button
              onClick={sendMessage}
              className="flex items-center justify-center w-10 h-10 ml-2 text-white transition bg-blue-600 rounded-full hover:bg-blue-700"
            >
              ➤
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default ChatBox;
