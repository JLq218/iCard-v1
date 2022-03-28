import React from "react";
import { Flip, ToastContainer, Zoom } from "react-toastify";
import { Navigation } from "./routes";
import { AuthProvider } from "./context";
// import {} from "./"

export default function App() {
  return (
    <AuthProvider>
      <Navigation />
      <ToastContainer
        position="bottom-center"
        transition={Zoom}
        autoClose={5000}
        hideProgressBar
        newestOnTop
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover={false}
        theme="colored"
      />
    </AuthProvider>
  );
}
