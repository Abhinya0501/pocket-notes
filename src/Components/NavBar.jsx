import React from "react";
import { useState, useEffect } from "react";
import "../Components/NavBar.css";
import smallArrow from "../assets/smallArrow.png";
import { useNavigate } from "react-router-dom";

const NavBar = (props) => {
  const { selectedGroup } = props;
  const [isMobile, setIsMobile] = useState(false);
  const navigate = useNavigate();
  useEffect(() => {
    function handleWindowSizeChange() {
      if (window.innerWidth <= 768) {
        setIsMobile(true);
      } else {
        setIsMobile(false);
      }
    }

    window.addEventListener("resize", handleWindowSizeChange);

    handleWindowSizeChange();

    return () => {
      window.removeEventListener("resize", handleWindowSizeChange);
    };
  }, []);

  return (
    <div>
      {selectedGroup ? (
        <div className="nMainDiv">
          <div>
            {isMobile ? (
              <img
                src={smallArrow}
                alt="Arrow"
                className="smallArrow"
                onClick={() => navigate("/")}
              />
            ) : (
              <></>
            )}
          </div>
          <div
            className="pDivCircle1"
            style={{
              backgroundColor: props.color,
            }}
          >
            {`${selectedGroup[0]}${selectedGroup[1]}`}
          </div>
          <div className="pDivH1">
            <h1>{selectedGroup}</h1>
          </div>
        </div>
      ) : (
        ""
      )}
    </div>
  );
};

export default NavBar;
