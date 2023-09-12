import { useAuthContext } from "@/context/auth.context";
import React from "react";
import Toast from "react-bootstrap/Toast";
import ToastContainer from "react-bootstrap/ToastContainer";
// import "bootstrap/dist/css/bootstrap.min.css";

function Noti() {
  const auth = useAuthContext();
  let bg = auth.notification.head === "Success" ? "bg-green-500" : "bg-red-500";
  return (
    <div
      className={`${
        auth.showNotification ? "fixed" : "hidden"
      }  ${bg} rounded-md top-[10vh] right-10 z-50`}
    >
      <ToastContainer
        className="p-3 bg-opacity-25"
        position="top-start"
        style={{ zIndex: 1 }}
      >
        <Toast className="">
          <Toast.Header closeButton={false}>
            <strong className="me-auto">{auth.notification.head}</strong>
            {/* <small>11 mins ago</small> */}
          </Toast.Header>
          <Toast.Body>{auth.notification.message}</Toast.Body>
        </Toast>
      </ToastContainer>
    </div>
  );
}

export default Noti;
