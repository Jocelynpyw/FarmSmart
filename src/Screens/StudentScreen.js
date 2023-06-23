import React, { useEffect } from "react";
import Topbar from "./topbar";
import Sidebarr from "./sidebar";
import "../index.css";
import { Box } from "@mui/material";
import { ToastContainer, toast } from "react-toastify";
import data from "../assets/data";
import "react-toastify/dist/ReactToastify.css";

const StudentScreen = (props) => {
  console.log("Les datas des courses sont : ");
  const autheInfos = localStorage.getItem("AuthInfo");

  const autheInfosFormated = JSON.parse(autheInfos);
  useEffect(() => {
    if (autheInfos === null) {
      setTimeout(() => {
        toast.info("You are not connected, try to connect");
      }, 1000);
      props.history.push("/login");
    } else {
      console.log(
        "voici ce que autheInfosFormated contient ",
        autheInfosFormated.user.first_name
      );
      toast.success(`Connected : ${autheInfosFormated?.user?.email}`);
      // setTimeout(() => {
      //   toast.success(`voici les infos : ${autheInfosFormated?.user?.email}`);
      // }, 1000);
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
          <p>Nous allons faire la presentation de napla course </p>
        </main>
      </Box>
    </div>
  );
};

export default StudentScreen;
