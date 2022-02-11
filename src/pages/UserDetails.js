import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { loadUser } from "../store/actions/actionDispatcher";
import { NavLink, useParams } from "react-router-dom";

function UserDetails() {
  const { id } = useParams();
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state?.users);

  useEffect(() => {
    dispatch(loadUser(id));
  }, []);

  return (
    <div className="card w-60 container main__container">
      <div className="card-body">
      <h3 className="text-primary">Welcome To the Detail Section Of User</h3><hr/>
        <p className="card-text">Name :- {user?.name}</p>
        <p className="card-text">Id :- {user?.id}</p>
        <p className="card-text">E-Mail :- {user?.email}</p>
        <p className="card-text">Gender :- {user?.gender}</p>
        <p className="card-text">Status :- {user?.status}</p>
        <NavLink to="/">
          <button className="btn btn-primary">Home</button>
        </NavLink>
      </div>
    </div>
  );
}

export default UserDetails;
