import React from "react";
import { NavLink } from "react-router-dom";

function User({ data }) {
  return (
    <tr>
      <td>{data?.id || "Id Not Found"}</td>
      <td>{data?.name || "Name Not Found"}</td>
      <td>{data?.email || "Email Not Found"}</td>
      <td>{data?.gender || "Gender Not Found"}</td>
      <td>{data?.status || "Status Not Found"}</td>
      <td>
        <NavLink to={`/detail/${data._id}`}>
          <button type="button" className="btn btn-outline-info">
            Detail
          </button>
        </NavLink>
        <NavLink to={`/update/${data._id}`}>
          <button type="button" className="btn btn-outline-warning">
            Update
          </button>
        </NavLink>
      </td>
    </tr>
  );
}

export default User;
