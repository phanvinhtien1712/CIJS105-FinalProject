// CheckOut.jsx
import React, { useContext } from "react";
import { CartContext } from "../context/CartContext";
import "../styles/checkout.css";

const CheckOut = () => {
  const { cart, setCart } = useContext(CartContext);

  const handleDelete = (index) => {
    const newCart = [...cart];
    newCart.splice(index, 1);
    setCart(newCart);
  };

  const handleQuantityChange = (index, newQuantity) => {
    const newCart = [...cart];
    newCart[index] = { ...newCart[index], quantity: newQuantity };
    setCart(newCart);
  };

  return (
    <div className="checkout-container">
      <h2>Giỏ hàng của bạn</h2>
      {cart.length === 0 ? (
        <p>Giỏ hàng trống</p>
      ) : (
        <table className="checkout-table">
          <thead>
            <tr>
              <th>Sản phẩm</th>
              <th>Số lượng</th>
              <th>Giá</th>
              <th>Hành động</th>
            </tr>
          </thead>
          <tbody>
            {cart.map((item, index) => (
              <tr key={index}>
                <td>{item.name}</td>
                <td>
                  <input
                    type="number"
                    value={item.quantity || 1}
                    min="1"
                    onChange={(e) =>
                      handleQuantityChange(index, Number(e.target.value))
                    }
                  />
                </td>
                <td>{item.price}</td>
                <td>
                  <button onClick={() => handleDelete(index)}>Xóa</button>
                  {/* Có thể thêm nút cập nhật riêng nếu muốn */}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
    
  );
};

export default CheckOut;
