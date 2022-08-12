import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { getFriendList, removeFriend } from "../Redux/FriendSlice";
import { addFriend, getUserList } from "../Redux/SocialSlice";

const Friend = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { friendList } = useSelector((store) => store.friend);
  const { userData } = useSelector((store) => store.auth);
  //console.log(userData[0].id);

  useEffect(() => {
    dispatch(getFriendList(userData.id));
  }, [dispatch]);

  console.log(friendList);

  const findUser = async (event) => {
    event.preventDefault();
    try {
      navigate("/social");
    } catch (error) {}
  };

  const remove = async (id) => {
    //event.preventDefault();
    try {
      //const user_a = userData[0].id;
      //console.log(id);
      dispatch(removeFriend(id));
    } catch (error) {}
  };

  return (
    <div>
      <h1>Friend List</h1>
      <button onClick={findUser}>add friend</button>
      {friendList.map((person) => {
        return (
          <div key={person.id} id={person.id}>
            <h1>
              {person.username}{" "}
              <button onClick={() => remove(person.id)}>following</button>
            </h1>
          </div>
        );
      })}
    </div>
  );
};

export default Friend;
