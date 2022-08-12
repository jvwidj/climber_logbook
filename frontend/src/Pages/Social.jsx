import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addFriend, getUserList } from "../Redux/SocialSlice";
import axios from "axios";

const Social = () => {
  const dispatch = useDispatch();
  const { userList } = useSelector((store) => store.social);
  //console.log(userList);

  useEffect(() => {
    dispatch(getUserList());
  }, [dispatch]);

  return (
    <div>
      {userList.map((person) => {
        return (
          <div key={person.id} id={person.id}>
            <h1>{person.username}</h1>
            <button
              onClick={() => {
                dispatch(addFriend(person.id)).then(() => {
                  dispatch(getUserList());
                });
              }}
            >
              follow
            </button>
          </div>
        );
      })}
    </div>
  );
};

export default Social;

/* const token = localStorage.getItem("TOKEN");
axios.post(
  `${process.env.REACT_APP_BACKEND}/social`,
  {
    person_id: person.id,
  },
  { headers: { Authorization: `Bearer ${token}` } }
); */
