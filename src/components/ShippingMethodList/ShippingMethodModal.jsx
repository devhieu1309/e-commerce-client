// import { useState } from "react";
// import {
//   Button,
//   Form,
//   Input,
//   InputNumber,
//   Modal,
//   notification,
//   Select,
//   Spin,
//   Switch,
//   Tooltip,
// } from "antd";
// import { EditOutlined, LoadingOutlined, PlusOutlined } from "@ant-design/icons";
// import { editShippingMethod, storeShippingMethod } from "../../services/shippingMethodServices";
// function ShippingMethodModal(props) {

//   const { record, onReload, mode } = props;
//   const [showModal, setShowModal] = useState(false);
//   const [form] = Form.useForm();
//   const [apiNoti, contextHolder] = notification.useNotification();
//   const [spinning, setSpinning] = useState(false);

//   const onChange = value => { console.log('changed', value); };
//   const formatter = value => {
//     const [start, end] = `${value}`.split('.') || [];
//     const v = `${start}`.replace(/\B(?=(\d{3})+(?!\d))/g, '.');
//     return `${end ? `${v}.${end}` : `${v}`} ₫`;
//   };
//   // const formatter = value => {
//   //   const [start, end] = `${value}`.split('.') || [];
//   //   const v = `${start}`.replace(/\B(?=(\d{3})+(?!\d))/g, ',');
//   //   return `$ ${end ? `${v}.${end}` : `${v}`}`;
//   // };
//   // const rules = [
//   //   {
//   //     required: true,
//   //     message: "Bắt buộc",
//   //   },
//   // ];

//   const handleShowModal = () => {
//     setShowModal(true);
//   };

//   const handleCancel = () => {
//     setShowModal(false);
//     form.resetFields();
//   };

//   const handleSubmit = async (values) => {

//     setSpinning(true);
//     try {
//       const response = mode === "edit" ? await editShippingMethod(record.shipping_method_id, values) : await storeShippingMethod(values);
//       if (response) {
//         apiNoti.success({
//           message: `Thông báo`,
//           description: response.message,
//         });
//         setShowModal(false);
//         form.resetFields();
//         onReload();
//       }
//     } catch (error) {
//       if (error.response && error.response.status === 422) {
//         const serverErrors = error.response.data.errors;
//         Object.keys(serverErrors).forEach((field) => {
//           form.setFields([
//             {
//               name: field,
//               errors: serverErrors[field],
//             },
//           ]);
//         });
//       }
//     } finally {
//       setSpinning(false);
//     }
//   };
//   return (
//     <>

//       {contextHolder}
//       {mode === "edit" ? (
//         <Tooltip title="Chỉnh sửa phương thức">
//           <Button
//             size="small"
//             type="primary"
//             icon={<EditOutlined />}
//             onClick={handleShowModal}
//           />
//         </Tooltip>
//       ) : (
//         <Button
//           type="primary"
//           icon={<PlusOutlined />}
//           onClick={handleShowModal}
//         >
//           Thêm phương thức
//         </Button>
//       )}

//       <Modal
//         open={showModal}
//         onCancel={handleCancel}
//         title={mode === "edit" ? "Cập nhật phương thức" : "Thêm phương thức"}
//         footer={null}
//       >
//         <Spin spinning={spinning} tip={mode === "edit" ? "Đang cập nhật..." : "Đang tạo mới..."}>
//           <Form
//             layout="vertical"
//             name="create-room"
//             onFinish={handleSubmit}
//             form={form}
//             initialValues={record}
//           >
//             <Form.Item label="Tên phương thức" name="shipping_method_name" rules={[]}>
//               <Input />
//             </Form.Item>

//             <Form.Item label="Giá phương thức" name="shipping_method_price" rules={[
//               {
//                 required: false,
//                 message: "Vui lòng nhập giá phương thức vận chuyển",
//               },
//             ]}>

//               <InputNumber style={{ width: "100%" }} formatter={formatter} parser={value => value?.replace(/[₫\s.]*/g, '')} onChange={onChange} />
//             </Form.Item>

//             <Form.Item label={null}>
//               <Button type="primary" htmlType="submit">
//                 {mode === "edit" ? "Cập nhật" : "Thêm mới"}
//               </Button>
//             </Form.Item>
//           </Form>
//         </Spin>
//       </Modal>
//     </>
//   );
// }
// export default ShippingMethodModal;


import { useState } from "react";
import {
  Button,
  Tooltip,
  Form,
  Input,
  InputNumber,
  Modal,
  notification,
  Spin,
  DatePicker,
} from "antd";
import { EditOutlined, PlusOutlined } from "@ant-design/icons";
import TextArea from "antd/es/input/TextArea";
import dayjs from "dayjs";
import customParseFormat from "dayjs/plugin/customParseFormat";
import { storePromotion, editPromotion } from "../../services/promotionServices";

dayjs.extend(customParseFormat);

const dateFormatList = ["DD/MM/YYYY"];

function PromotionModal(props) {
  const { record, onReload, mode } = props;
  const [showModal, setShowModal] = useState(false);
  const [form] = Form.useForm();
  const [apiNoti, contextHolder] = notification.useNotification();
  const [spinning, setSpinning] = useState(false);

  const handleShowModal = () => {
    if (mode === "edit" && record) {
      form.setFieldsValue({
        ...record,
        start_date: record.start_date ? dayjs(record.start_date) : null,
        end_date: record.end_date ? dayjs(record.end_date) : null,
      });
    }
    setShowModal(true);
  };

  const handleCancel = () => {
    setShowModal(false);
    form.resetFields();
  };

  const handleSubmit = async (values) => {
    setSpinning(true);
    try {
      const payload = {
        ...values,
        start_date: values.start_date?.format("YYYY-MM-DD"),
        end_date: values.end_date?.format("YYYY-MM-DD"),
      };

      const response =
        mode === "edit"
          ? await editPromotion(record.promotion_id, payload)
          : await storePromotion(payload);

      if (response) {
        apiNoti.success({
          message: "Thông báo",
          description: response.message,
        });
        setShowModal(false);
        form.resetFields();
        onReload();
      }
    } catch (error) {
      if (error.response && error.response.status === 422) {
        const serverErrors = error.response.data.errors;
        Object.keys(serverErrors).forEach((field) => {
          form.setFields([
            {
              name: field,
              errors: serverErrors[field],
            },
          ]);
        });
      }
    } finally {
      setSpinning(false);
    }
  };

  const formatter = (value) => {
    const [start, end] = `${value}`.split(".") || [];
    const v = `${start}`.replace(/\B(?=(\d{3})+(?!\d))/g, ".");
    return `${end ? `${v}.${end}` : `${v}`} %`;
  };

  const parser = (value) => value?.replace(/[%\s.]*/g, "");

  return (
    <>
      {contextHolder}
      {mode === "edit" ? (
        <Tooltip title="Chỉnh sửa chương trình khuyến mãi">
          <Button
            size="small"
            type="primary"
            icon={<EditOutlined />}
            onClick={handleShowModal}
          />
        </Tooltip>
      ) : (
        <Button
          type="primary"
          icon={<PlusOutlined />}
          onClick={handleShowModal}
        >
          Thêm chương trình khuyến mãi
        </Button>
      )}

      <Modal
        open={showModal}
        onCancel={handleCancel}
        title={
          mode === "edit"
            ? "Cập nhật chương trình khuyến mãi"
            : "Thêm chương trình khuyến mãi"
        }
        footer={null}
      >
        <Spin
          spinning={spinning}
          tip={mode === "edit" ? "Đang cập nhật..." : "Đang tạo mới..."}
        >
          <Form
            layout="vertical"
            name="promotion-form"
            onFinish={handleSubmit}
            form={form}
            initialValues={record}
          >
            <Form.Item
              label="Tên chương trình khuyến mãi"
              name="promotion_name"
              rules={[
                { required: true, message: "Vui lòng nhập tên chương trình" },
              ]}
            >
              <Input />
            </Form.Item>

            <Form.Item
              label="Mô tả"
              name="description"
              rules={[
                {
                  required: false,
                  message: "Vui lòng nhập mô tả chương trình khuyến mãi",
                },
              ]}
            >
              <TextArea
                placeholder="Nhập mô tả chi tiết"
                autoSize={{ minRows: 3, maxRows: 6 }}
              />
            </Form.Item>

            <Form.Item
              label="Tỷ lệ giảm giá"
              name="discount_rate"
              rules={[
                { required: true, message: "Vui lòng nhập tỷ lệ giảm giá" },
              ]}
            >
              <InputNumber
                style={{ width: "100%" }}
                formatter={formatter}
                parser={parser}
              />
            </Form.Item>

            <Form.Item
              label="Ngày bắt đầu"
              name="start_date"
              rules={[
                { required: true, message: "Vui lòng chọn ngày bắt đầu" },
              ]}
            >
              <DatePicker format={dateFormatList} style={{ width: "100%" }} />
            </Form.Item>

            <Form.Item
              label="Ngày kết thúc"
              name="end_date"
              rules={[
                { required: false, message: "Vui lòng chọn ngày kết thúc" },
              ]}
            >
              <DatePicker format={dateFormatList} style={{ width: "100%" }} />
            </Form.Item>

            <Form.Item>
              <Button type="primary" htmlType="submit">
                {mode === "edit" ? "Cập nhật" : "Thêm mới"}
              </Button>
            </Form.Item>
          </Form>
        </Spin>
      </Modal>
    </>
  );
}

export default PromotionModal;
