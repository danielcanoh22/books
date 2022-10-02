import React from "react";
import { CheckoutWrap, CheckoutBtn, CheckoutCoupon } from "./styles/Cart.styled";

export const CartCheckout = ({ total }) => {
  return (
    <CheckoutWrap>
      <h3>Total:</h3>
      <p>${total}</p>
      <CheckoutBtn>Pagar</CheckoutBtn>
      <CheckoutCoupon>
        <h4>Promociones</h4>
        <div>
        <input type="text" placeholder="Ingresar cupón" />
        <button>Aplicar</button>
        </div>
      </CheckoutCoupon>
    </CheckoutWrap>
  );
};
