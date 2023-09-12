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
      }  ${bg} rounded-md top-[10vh] md:left-[25vw] left-5 z-50`}
    >
      <ToastContainer
        className="p-3 bg-opacity-25"
        position="top-start"
        style={{ zIndex: 1 }}
      >
        <Toast className="">
          <Toast.Header closeButton={false}>
            <img
              src="holder.js/20x20?text=%20"
              className="rounded me-2"
              alt=""
            />
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
