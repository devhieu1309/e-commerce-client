import Header from "../../components/Header";
import Footer from "../../components/Footer";
import { Outlet } from "react-router-dom";
import Message from "../../pages/User/IconEffect/Message";
import NotificationWidget from "../../pages/User/IconEffect/NotificationWidget";
import { useEffect, useState } from "react";
import ChatBox from "../../pages/User/IconEffect/ChatBox";

function LayoutUser() {
  const [user, setUser] = useState(() => {
    const savedUser = localStorage.getItem("user");
    return savedUser ? JSON.parse(savedUser) : null;
  });

  useEffect(() => {
    // Lắng nghe sự kiện thay đổi user trong localStorage
    const handleStorageChange = () => {
      const savedUser = localStorage.getItem("user");
      setUser(savedUser ? JSON.parse(savedUser) : null);
    };

    window.addEventListener("storage", handleStorageChange);
    return () => {
      window.removeEventListener("storage", handleStorageChange);
    };
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("user");
    localStorage.removeItem("token");
    setUser(null);
    window.location.href = "/";
  };
  return (
    <>
      <Header user={user} onLogout={handleLogout} />
      <main>
        <Outlet context={{ setUser }} />
      </main>
      <Footer />
      <Message />
      <NotificationWidget />
      <ChatBox />
    </>
  );
}

export default LayoutUser;
