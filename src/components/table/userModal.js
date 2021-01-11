import React from "react";
import { Input, Modal, Form } from "antd";

const UserModal = ({ handleVisible, visible, values, onUpdate, form }) => {
  const layout = {
    labelCol: { span: 8 },
    wrapperCol: { span: 16 },
  };

  return (
    <>
      <Modal
        title="Title"
        visible={visible}
        okText="Guardar"
        onOk={() => onUpdate(values.key)}
        onCancel={handleVisible}
      >
        <Form
          {...layout}
          name="basic"
          initialValues={{ remember: true }}
          form={form}
        >
          <Form.Item label="Nombre" name="name" initialValue={values?.name}>
            <Input />
          </Form.Item>

          <Form.Item
            label="Apellido"
            name="lastname"
            initialValue={values?.lastname}
          >
            <Input />
          </Form.Item>
          <Form.Item label="Correo" name="email" initialValue={values?.email}>
            <Input />
          </Form.Item>
        </Form>
      </Modal>
    </>
  );
};

export default UserModal;
