import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import {
  loadUser,
  updateUserdispatch,
} from "../store/actions/actionDispatcher";

function UpdateUser() {
  const { id } = useParams();
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state?.users);
  const navigate = useNavigate()
  console.log({ user });

  const [detail, setDetail] = useState({
    id: user?.id,
    name: user?.name,
    email: user?.email,
    gender: user?.gender,
    status: user?.status,
  });
  const { name, email, gender, status } = detail;

  useEffect(() => {
    dispatch(loadUser(id));
  }, []);

  const handleChange = (event) => {
    setDetail({
      ...detail,
      [event.target.name]: event.target.value,
    });
  };

  const handleCilck = async (e) => {
    e.preventDefault();
    if (!name || !detail.id || !email || !gender || !status) {
      alert("Update details carefully");
    } else {
      dispatch(updateUserdispatch(id, detail));
      setDetail({
        name: "",
        email: "",
        id: "",
        gender: "",
        status: "",
      });
      navigate("/");
    }
  };

  const handleCilckOne = () => {
      navigate('/')
  }

  return (
    <>
      <form className="container main__container">
        <div className="row mb-3">
          <label className="col-sm-2 col-form-label">Id</label>
          <div className="col-sm-10">
            <input
              type="id"
              className="form-control"
              name="id"
              onChange={(e) => handleChange(e)}
              value={id}
            />
          </div>
        </div>
        <div className="row mb-3">
          <label className="col-sm-2 col-form-label">Name</label>
          <div className="col-sm-10">
            <input
              type="name"
              className="form-control"
              name="name"
              onChange={(e) => handleChange(e)}
              value={name}
            />
          </div>
        </div>
        <div className="row mb-3">
          <label className="col-sm-2 col-form-label">Email</label>
          <div className="col-sm-10">
            <input
              type="email"
              className="form-control"
              name="email"
              onChange={(e) => handleChange(e)}
              value={email}
            />
          </div>
        </div>
        <div className="row mb-3">
          <label className="col-sm-2 col-form-label">Gender</label>
          <div className="col-sm-10">
            <input
              type="gender"
              className="form-control"
              name="gender"
              onChange={(e) => handleChange(e)}
              value={gender}
            />
          </div>
        </div>
        <div className="row mb-3">
          <label className="col-sm-2 col-form-label">Status</label>
          <div className="col-sm-10">
            <input
              type="status"
              className="form-control"
              name="status"
              onChange={(e) => handleChange(e)}
              value={status}
            />
          </div>
        </div>
        <button className="btn btn-primary" onClick={handleCilck}>
          Update User
        </button><button className="btn btn-success" onClick={handleCilckOne}>
        Home
      </button>
      </form>
    </>
  );
}

export default UpdateUser;
