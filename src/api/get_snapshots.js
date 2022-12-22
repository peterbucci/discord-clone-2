import { collection, query, where, onSnapshot, doc } from "firebase/firestore";
import { actionTypes } from "../reducers/state_reducer";
import { db } from "../firebase";

export function getUserSnapshot(dispatch) {
  const q = query(
    collection(db, "users"),
    where("email", "==", "sb1285n@gmail.com")
  );
  return onSnapshot(q, (querySnapshot) => {
    querySnapshot.forEach((doc) => {
      dispatch({
        type: actionTypes.SET_USER,
        user: doc.id,
      });
      dispatch({
        type: actionTypes.SET_USERS,
        users: [doc.data()],
      });
    });
  });
}

export function getFriendsSnapshot(
  userId,
  unsubscribers,
  dispatch,
  setFriendCount
) {
  const q = query(collection(db, "users", userId, "friends"));
  return onSnapshot(q, (querySnapshot) => {
    setFriendCount(querySnapshot.size);
    querySnapshot.forEach((docX) => {
      const id = docX.id;
      if (!unsubscribers[id]) {
        const unsubscribe = onSnapshot(doc(db, "users", id), (docY) => {
          dispatch({
            type: actionTypes.SET_USERS,
            users: [docY.data()],
          });
          dispatch({
            type: actionTypes.SET_FRIENDS,
            friends: [docY.id],
          });
        });
        unsubscribers[id] = unsubscribe;
      }
    });
  });
}

export function getConversationsSnapshot(
  userId,
  unsubscribers,
  dispatch,
  setConversationCount
) {
  const q = query(collection(db, "users", userId, "conversations"));
  return onSnapshot(q, (querySnapshot) => {
    setConversationCount(querySnapshot.size);
    querySnapshot.forEach((docX) => {
      const dataX = docX.data();
      const id = docX.id;
      if (!unsubscribers[id]) {
        const unsubscribe = onSnapshot(doc(db, "conversations", id), (docY) => {
          const dataY = docY.data();
          dispatch({
            type: actionTypes.SET_CONVERSATIONS,
            conversations: [dataY],
          });
          if (dataX.active) {
            dispatch({
              type: actionTypes.SET_ACTIVE_CONVERSATIONS,
              activeConversations: [docY.id],
            });
          }
        });
        unsubscribers[id] = unsubscribe;
      }
    });
  });
}

export function getChannelsSnapshot(
  userId,
  unsubscribers,
  dispatch,
  setChannelCount
) {
  const q = query(collection(db, "users", userId, "channels"));
  return onSnapshot(q, (querySnapshot) => {
    setChannelCount(querySnapshot.size);
    querySnapshot.forEach((docX) => {
      const id = docX.id;
      if (!unsubscribers[id]) {
        const unsubscribe = onSnapshot(doc(db, "channels", id), (docY) => {
          dispatch({
            type: actionTypes.SET_CHANNELS,
            channels: [docY.data()],
          });
        });
        unsubscribers[id] = unsubscribe;
      }
    });
  });
}
