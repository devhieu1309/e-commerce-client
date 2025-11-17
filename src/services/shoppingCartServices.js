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

// Thêm sản phảm vào giỏ hàng
export const addToCart = async (userId, productId, quantity) => {
  const data = {
    user_id: userId,
    product_item_id: productId, 
    quantity: quantity,
  };
  const result = await post(`cart`, data);
  return result;
}