import React, { useEffect, useState } from "react";
import AddressCustomer from "../../../../components/FieldCustom/AddressCustomer";
import { Link } from "react-router-dom";
import { notification, Modal } from "antd";
import {
    getAddressesByUser,
    addAddress,
    updateAddress,
    deleteAddress,
} from "../../../../services/addressCustomerServices";

function FromAddress() {
    const [apiNoti, contextHolder] = notification.useNotification();

    const [user, setUser] = useState(null);
    const [addresses, setAddresses] = useState([]);
    const [showModal, setShowModal] = useState(false);
    const [editMode, setEditMode] = useState(false);
    const [editingId, setEditingId] = useState(null);
    const [errors, setErrors] = useState({});
    const [confirmVisible, setConfirmVisible] = useState(false);
    const [deleteId, setDeleteId] = useState(null);

    const [formData, setFormData] = useState({
        user_id: "",
        name: "",
        phone: "",
        company: "",
        detailed_address: "",
        provinces_id: "",
        wards_id: "",
        isDefault: false,
    });

    // ================= Load user + addresses =================
    useEffect(() => {
        const storedUser = localStorage.getItem("user");
        if (storedUser) {
            const parsedUser = JSON.parse(storedUser);
            setUser(parsedUser);
            setFormData((prev) => ({ ...prev, user_id: parsedUser.user_id }));
            fetchAddresses(parsedUser.user_id);
        }
    }, []);

    const fetchAddresses = async (userId) => {
        try {
            const result = await getAddressesByUser(userId);

            // Ép dữ liệu về đúng định dạng FE
            const normalized = result.map((item) => ({
                ...item,
                id: item.address_id ?? item.customer_address_id,
                isDefault: Boolean(Number(item.isDefault)),
            }));

            // Sắp xếp: mặc định lên đầu
            const sorted = normalized.sort((a, b) =>
                a.isDefault === b.isDefault ? 0 : a.isDefault ? -1 : 1
            );

            setAddresses(sorted);
        } catch (error) {
            console.error("Lỗi khi tải địa chỉ:", error);
        }
    };

    // ================= Open Add =================
    const handleOpenAdd = () => {
        setEditMode(false);
        setEditingId(null);
        setErrors({});
        setFormData({
            user_id: user?.user_id || "",
            name: "",
            phone: "",
            company: "",
            detailed_address: "",
            provinces_id: "",
            wards_id: "",
            isDefault: false,
        });
        setShowModal(true);
    };

    // ================= Open Edit =================
    const handleEdit = (item) => {
        setEditMode(true);
        setEditingId(item.address_id ?? item.customer_address_id);
        setErrors({});
        setFormData({
            user_id: user.user_id,
            name: item.name ?? "",
            phone: item.phone ?? "",
            company: item.company ?? "",
            detailed_address: item.detailed_address ?? "",
            provinces_id: item.provinces_id ?? "",
            wards_id: item.wards_id ?? "",
            isDefault: Boolean(Number(item.isDefault)),
        });
        setShowModal(true);
    };

    // ================= Delete =================
    const handleDelete = (id) => {
        setDeleteId(id);
        setConfirmVisible(true);
    };

    const confirmDelete = async () => {
        try {
            await deleteAddress(deleteId);
            await fetchAddresses(user.user_id);
            apiNoti.success({ message: "Thông báo", description: "Xóa địa chỉ thành công!" });
        } catch (error) {
            apiNoti.error({
                message: "Lỗi",
                description: error?.response?.data?.message || "Không thể xóa địa chỉ!",
            });
        } finally {
            setConfirmVisible(false);
        }
    };

    // ================= Handle Inputs =================
    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        setFormData({
            ...formData,
            [name]: type === "checkbox" ? checked : value,
        });
    };

    // ================= Submit =================
    const handleSubmit = async (e) => {
        e.preventDefault();
        setErrors({});

        try {
            const payload = {
                ...formData,
                isDefault: formData.isDefault ? 1 : 0,
            };

            if (editMode) {
                await updateAddress(editingId, payload);
                apiNoti.success({ message: "Thành công", description: "Cập nhật địa chỉ thành công!" });
            } else {
                await addAddress(payload);
                apiNoti.success({ message: "Thành công", description: "Thêm địa chỉ mới thành công!" });
            }

            await fetchAddresses(user.user_id);
            setTimeout(() => setShowModal(false), 200);
        } catch (error) {
            const data = error?.response?.data;
            const fieldErrors = {};

            if (data?.errors) {
                Object.entries(data.errors).forEach(([key, value]) => {
                    fieldErrors[key] = value[0];
                });
            }

            setErrors(fieldErrors);

            apiNoti.error({
                message: "Lỗi",
                description: data?.message || "Không thể lưu địa chỉ!",
            });
        }
    };

    // ======================================================
    return (
        <>
            {contextHolder}
            <div className="flex justify-center items-start mt-10 mb-10">
                <div className="bg-white shadow-md rounded-lg w-full max-w-[1300px] flex flex-col md:flex-row p-6 md:p-8">

                    {/* LEFT MENU */}
                    <div className="md:w-1/3 w-full mb-8 md:mb-0 md:pr-8">
                        <h5 className="font-semibold uppercase mb-5 text-lg">TRANG TÀI KHOẢN</h5>
                        {user ? (
                            <p className="mb-2">
                                <strong>Xin chào, </strong>
                                <span className="text-red-600 font-semibold">{user.name}</span> !
                            </p>
                        ) : (
                            <p className="text-gray-500 italic">Đang tải thông tin...</p>
                        )}

                        <div className="mt-5 space-y-2">
                            <Link to="/thong-tin-khach-hang" className="block hover:text-yellow-600">Thông tin tài khoản</Link>
                            <Link to="/don-hang-khach-hang" className="block hover:text-yellow-600">Đơn hàng của bạn</Link>
                            <Link to="/thay-doi-mat-khau" className="block hover:text-yellow-600">Đổi mật khẩu</Link>
                            <p className="text-yellow-500 font-medium">Sổ địa chỉ</p>
                        </div>
                    </div>

                    {/* RIGHT CONTENT */}
                    <div className="md:w-2/3 w-full md:pl-8">
                        <h5 className="font-semibold uppercase mb-5 text-lg">ĐỊA CHỈ CỦA BẠN</h5>

                        <button
                            onClick={handleOpenAdd}
                            className="bg-[#FDC300] hover:bg-[#E0A800] text-white font-medium px-5 py-2 rounded transition"
                        >
                            Thêm địa chỉ
                        </button>

                        {addresses.length > 0 && (
                            <>
                                <hr className="my-4 border-gray-300" />

                                {addresses.map((item) => (
                                    <div key={item.id} className="mb-6 border-b pb-3 border-gray-300">
                                        <p className="font-semibold">
                                            <strong>Họ tên:</strong> {item.name}
                                            {item.isDefault && (
                                                <span className="text-green-600 text-sm ml-2">• Địa chỉ mặc định</span>
                                            )}
                                        </p>

                                        <div className="flex justify-between items-start flex-wrap">
                                            <div className="text-[15px] leading-relaxed">
                                                <p>
                                                    <strong>Địa chỉ:</strong>{" "}
                                                    {[item.detailed_address, item.ward_name, item.province_name]
                                                        .filter(Boolean)
                                                        .join(", ")}
                                                </p>
                                                <p><strong>Số điện thoại:</strong> {item.phone}</p>
                                            </div>

                                            <div className="flex items-center space-x-3 mt-1 md:mt-0">
                                                <button
                                                    onClick={() => handleEdit(item)}
                                                    className="text-blue-500 hover:underline"
                                                >
                                                    Chỉnh sửa
                                                </button>

                                                {!item.isDefault && (
                                                    <button
                                                        onClick={() => handleDelete(item.id)}
                                                        className="text-red-500 hover:underline"
                                                    >
                                                        Xóa
                                                    </button>
                                                )}
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </>
                        )}
                    </div>
                </div>

                {/* MODAL DELETE CONFIRM */}
                <Modal
                    title="Xác nhận xóa"
                    open={confirmVisible}
                    okText="Xóa"
                    cancelText="Hủy"
                    okButtonProps={{ danger: true }}
                    onOk={confirmDelete}
                    onCancel={() => setConfirmVisible(false)}
                >
                    <p>Bạn có chắc muốn xóa địa chỉ này không?</p>
                </Modal>

                {/* MODAL ADD / EDIT FORM */}
                {showModal && (
                    <div className="fixed inset-0 bg-black/10 backdrop-blur-sm flex justify-center items-center z-50">
                        <div className="bg-white rounded-lg shadow-lg w-full max-w-2xl p-6 relative">

                            <button
                                onClick={() => setShowModal(false)}
                                className="absolute top-2 right-3 text-gray-600 text-xl hover:text-black"
                            >
                                ×
                            </button>

                            <h3 className="text-lg font-semibold mb-4 uppercase">
                                {editMode ? "CẬP NHẬT ĐỊA CHỈ" : "THÊM ĐỊA CHỈ MỚI"}
                            </h3>

                            <form onSubmit={handleSubmit}>
                                <div className="space-y-5">

                                    {/* Họ tên */}
                                    <div className="relative">
                                        <label className="absolute left-3 top-0 -translate-y-1/2 bg-white px-1 text-gray-500 text-sm">Họ tên</label>
                                        <input
                                            type="text"
                                            name="name"
                                            value={formData.name}
                                            onChange={handleChange}
                                            className="w-full border rounded px-3 pt-4 pb-2"
                                        />
                                        {errors.name && <p className="text-red-500 text-sm">{errors.name}</p>}
                                    </div>

                                    {/* Số điện thoại */}
                                    <div className="relative">
                                        <label className="absolute left-3 top-0 -translate-y-1/2 bg-white px-1 text-gray-500 text-sm">Số điện thoại</label>
                                        <input
                                            type="text"
                                            name="phone"
                                            value={formData.phone}
                                            onChange={handleChange}
                                            className="w-full border rounded px-3 pt-4 pb-2"
                                        />
                                        {errors.phone && <p className="text-red-500 text-sm">{errors.phone}</p>}
                                    </div>

                                    {/* Công ty */}
                                    <div className="relative">
                                        <label className="absolute left-3 top-0 -translate-y-1/2 bg-white px-1 text-gray-500 text-sm">Công ty</label>
                                        <input
                                            type="text"
                                            name="company"
                                            value={formData.company}
                                            onChange={handleChange}
                                            className="w-full border rounded px-3 pt-4 pb-2"
                                        />
                                    </div>

                                    {/* Địa chỉ chi tiết */}
                                    <div className="relative">
                                        <label className="absolute left-3 top-0 -translate-y-1/2 bg-white px-1 text-gray-500 text-sm">Địa chỉ chi tiết</label>
                                        <input
                                            type="text"
                                            name="detailed_address"
                                            value={formData.detailed_address}
                                            onChange={handleChange}
                                            className="w-full border rounded px-3 pt-4 pb-2"
                                        />
                                        {errors.detailed_address && <p className="text-red-500 text-sm">{errors.detailed_address}</p>}
                                    </div>

                                    {/* SELECT TỈNH / PHƯỜNG */}
                                    <AddressCustomer
                                        value={{
                                            provinces_id: formData.provinces_id,
                                            wards_id: formData.wards_id,
                                        }}
                                        onChange={(data) =>
                                            setFormData((prev) => ({
                                                ...prev,
                                                provinces_id: data.provinces_id,
                                                wards_id: data.wards_id,
                                            }))
                                        }
                                    />

                                    {/* Checkbox mặc định */}
                                    <label className="flex items-center space-x-2">
                                        <input
                                            type="checkbox"
                                            name="isDefault"
                                            checked={formData.isDefault}
                                            onChange={handleChange}
                                        />
                                        <span>Đặt làm địa chỉ mặc định</span>
                                    </label>

                                    {/* Buttons */}
                                    <div className="flex justify-end space-x-3 pt-4">
                                        <button
                                            type="button"
                                            onClick={() => setShowModal(false)}
                                            className="px-4 py-2 border rounded hover:bg-gray-100"
                                        >
                                            Hủy
                                        </button>

                                        <button
                                            type="submit"
                                            className="bg-[#FDC300] hover:bg-[#E0A800] text-white px-4 py-2 rounded"
                                        >
                                            {editMode ? "Cập nhật" : "Thêm mới"}
                                        </button>
                                    </div>
                                </div>
                            </form>

                        </div>
                    </div>
                )}

            </div>
        </>
    );
}

export default FromAddress;
