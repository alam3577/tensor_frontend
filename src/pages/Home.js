import React from "react";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import User from "../components/User";
import { loadUsers } from "../store/actions/actionDispatcher";

function Home() {
  const dispatch = useDispatch();
  const { users } = useSelector((elem) => elem)?.users;

  useEffect(() => {
    dispatch(loadUsers());
  }, []);

  return (
    <div className="main__container container">
      <table className="table table-striped">
        <thead>
          <tr className="">
            <th scope="col">Id</th>
            <th scope="col">Name</th>
            <th scope="col">Email</th>
            <th scope="col">Gender</th>
            <th scope="col">Status</th>
            <th scope="col">Actions</th>
          </tr>
        </thead>
        <tbody>
          {users?.map((elem) => (
            <User key={elem._id} data={elem} />
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Home;
