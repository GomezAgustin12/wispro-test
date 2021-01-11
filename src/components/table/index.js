import { Button, Form, Space, Table } from "antd";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { deleteUserRedux, updateUserRedux } from "redux/user/userActions";
import UserModal from "./userModal";

const MyTable = ({ users = [], handleTable }) => {
  const [updateModal, setUpdateModal] = useState(false);
  const onUpdateModal = () => setUpdateModal(!updateModal);
  const [record, setRecord] = useState({});
  const dispatch = useDispatch();

  const [form] = Form.useForm();

  const onUpdate = async (id) => {
    const data = await form.validateFields();
    dispatch(updateUserRedux(data, id)).then(() => handleTable());
    onUpdateModal();
  };
  const onDelete = async (id) =>
    dispatch(deleteUserRedux(id)).then(() => handleTable());

  const data = users.map((user, i) => ({
    key: user.id,
    name: user.name,
    lastname: user.lastname,
    email: user.email,
  }));

  const columns = [
    {
      title: "Nombre",
      dataIndex: "name",
      key: "name",
    },
    {
      title: "Apellido",
      dataIndex: "lastname",
      key: "lastname",
    },
    {
      title: "Correo",
      dataIndex: "email",
      key: "email",
    },

    {
      title: "Action",
      key: "action",
      render: (record) => (
        <Space size="middle">
          <Button
            type="link"
            onClick={() => {
              setRecord(record);
              onUpdateModal();
            }}
          >
            Modificar
          </Button>
          <Button type="link" onClick={() => onDelete(record.key)}>
            Delete
          </Button>
        </Space>
      ),
    },
  ];

  return (
    <>
      <Table columns={columns} dataSource={data} />

      {updateModal && (
        <UserModal
          handleVisible={onUpdateModal}
          visible={updateModal}
          values={record}
          form={form}
          onUpdate={onUpdate}
        />
      )}
    </>
  );
};

export default MyTable;
