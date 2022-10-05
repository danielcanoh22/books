import React from "react";
import { CheckoutWrap, CheckoutBtn, CheckoutCoupon } from "./styles/Cart.styled";
import PropTypes from "prop-types";

/**
 * Este componente muestra el precio total y el botón para pagar los productos agregados al carrito.
 * Adicionalmente, muestra un formulario para ingresar un cupón de descuento.
 *
 * @component
 */
export const CartCheckout = ({ total = 0 }) => {
  return (
    <CheckoutWrap>
      <h3>Total:</h3>
      <p className="checkout-total">${total}</p>
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

CartCheckout.propTypes = {
  /**
   * Precio total a pagar.
   */
  total: PropTypes.number.isRequired,
};
