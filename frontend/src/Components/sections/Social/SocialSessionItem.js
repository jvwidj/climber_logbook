import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getFriendList } from "../../../Redux/FriendSlice";
import { getSessionByUserList } from "../../../Redux/SessionSlice";

//TODO
//Get friend list from friend slice DONE
//extract their ID. use map DONE
//get session by id from session slice
//map all the userSessionList from session slice
//display the list

const SocialSessionItem = () => {
  const dispatch = useDispatch();
  const { userData } = useSelector((store) => store.auth);

  //get friend list
  /* const { friendList } = useSelector((store) => store.friend);
  const { userSessionList } = useSelector((store) => store.session); */
  //console.log(friendList);

  //console.log("userSessionList", userSessionList);

  useEffect(() => {
    dispatch(getFriendList(userData.id)).then(() => {
      dispatch(getSessionByUserList(userData.id));
      //dispatch(getSessionByUserList(friend.user_b));
    });
  }, []);

  return (
    <div>
      {/* <h1>Social Activity </h1>

      {userSessionList.map((session) => {
        return (
          <h3 key={session.id}>
            {session.user_id} {session.location_name} {session.id}
          </h3>
        );
      })} */}
    </div>
  );
};

export default SocialSessionItem;
