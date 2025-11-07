import { del, edit, get, post } from "../utils/request";

// lấy danh sách giỏ hàng theo userId
export const getShoppingCartByUserId = async (userId) => {
  const result = await get(`cart/${userId}`);
  return result;
};

// Xóa sản phẩm khỏi giỏ hàng
export const removeFromCart = async (cartItemId) => {
  const result = await del(`cart/${cartItemId}`);
  return result;
};

// Cập nhật số lượng sản phẩm trong giỏ hàng
export const updateCartItemQuantity = async (cartItemId, quantity) => {
  const formData = new FormData();
  formData.append("quantity", quantity);

  const result = await edit(`cart/${cartItemId}`, { quantity, _method: 'PUT' });
  return result;
}