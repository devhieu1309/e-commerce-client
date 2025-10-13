import Header from "../../components/Header";
import Footer from "../../components/Footer";
import { Outlet } from "react-router-dom";
import Message from "../../pages/User/IconEffect/Message";
import NotificationWidget from "../../pages/User/IconEffect/NotificationWidget";

function LayoutUser() {
  return (
    <>
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
      <Message />
      <NotificationWidget />
    </>
  );
}

export default LayoutUser;
