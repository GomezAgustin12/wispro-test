import React, { useEffect, useState } from "react";
import socketIOClient from "socket.io-client";
import { Chart, Loader, Table } from "components";
import { useDispatch, useSelector } from "react-redux";
import { fetchUsersRedux } from "redux/user/userActions";

const ENDPOINT = "https://wispro-socket.herokuapp.com";

const Home = () => {
  const [response, setResponse] = useState([]);
  const [users, setUsers] = useState([]);
  const dispatch = useDispatch();
  const [tableChange, settableChange] = useState(false);
  const handleTable = () => settableChange(!tableChange);

  const { loading } = useSelector((state) => state.user);

  useEffect(() => {
    const socket = socketIOClient(ENDPOINT);
    socket.on("FromAPI", (data) => {
      setResponse(data);
      return socket.disconnect();
    });
  }, []);

  useEffect(() => {
    dispatch(fetchUsersRedux()).then((users) => setUsers(users));
  }, [tableChange]);

  return (
    <>
      {loading && <Loader />}
      <Table users={users} handleTable={handleTable} />
      {response !== [] && <Chart d={response} />}
    </>
  );
};

export default Home;
