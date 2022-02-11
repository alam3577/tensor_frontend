import axios from "axios";
import { useState } from "react";
import { NavLink } from "react-router-dom";
import { downloadCsv } from "../store/actions/actionDispatcher";

function Nav() {
  const [val, setVal] = useState();
  const handleDownload = async (e) => {
    let { data } = await axios.get("http://localhost:8000/api/getCsvFile");
    
  };

  return (
    <>
      <nav className="header__maincontiner">
        <NavLink to="/">
          <img
            src="https://raw.githubusercontent.com/alam3577/resizable-div-crud-frontend/master/src/Assets/Images/logo.png"
            alt="logo_image"
          />
        </NavLink>
        <ul className="nav">
          <button className="bsn btn btn-primary" onClick={handleDownload}>
            Download csv
          </button>
        </ul>
      </nav>
    </>
  );
}

export default Nav;
