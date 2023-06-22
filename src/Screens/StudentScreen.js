import React, { useEffect } from "react";
import Topbar from "./topbar";
import Sidebarr from "./sidebar";
import "../index.css";
import { Box } from "@mui/material";
import { ToastContainer, toast } from "react-toastify";

import "react-toastify/dist/ReactToastify.css";

const StudentScreen = (props) => {
  const autheInfos = localStorage.getItem("AuthInfo");

  const autheInfosFormated = JSON.parse(autheInfos);
  useEffect(() => {
    if (autheInfos === null) {
      setTimeout(() => {
        toast.info("You are not connected, try to connect");
      }, 1000);
      props.history.push("/login");
    } else {
      //   console.log(" je suis deja la ehhh");
      console.log(
        "Les information de connextion du donman ci sont : ",
        autheInfos
      );
    }
  }, []);
  return (
    <div className="content">
      <Sidebarr user={autheInfosFormated?.user} />
      <ToastContainer
        position="top-center"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
      <Box width="100%" justifyContent="space-between">
        <Topbar />
        <main className="mainSection">
          {/* Here we will write this section's code */}
          <p>Je suis dans la section Etudiant</p>
        </main>
      </Box>
    </div>
  );
};

export default StudentScreen;
