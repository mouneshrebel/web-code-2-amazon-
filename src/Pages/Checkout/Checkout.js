import React from "react";
import { useStateValue } from "../../components/StateProvider/StateProvider";
import "./Checkout.css";
import CheckoutProduct from "../../components/Checkoutproduct/Checkoutproduct";
import Subtotal from "../../components/Subtotal/Subtotal";

const Checkout = () => {
  const [{ basket }] = useStateValue();
  return (
    <div className="checkout">
      <div className="checkout__left">
        <img
          className="checkout__ad"
          src="http://www.jibal.ma/wp-content/uploads/2023/02/jibal.jpg"
          alt=""
        />
        {basket?.length === 0 ? (
          <div>
            <h2>Your Shopping Basket is empty</h2>
            <p>
              You have no items in your basket. To buy or more items, click "Add
              to basket" next to the item.
            </p>
          </div>
        ) : (
          <div>
            <h2 className="checkout__title">Your shopping basket</h2>
            {basket.map((item) => (
              <CheckoutProduct
                id={item.id}
                title={item.title}
                image={item.image}
                price={item.price}
                rating={item.rating}
              />
            ))}
          </div>
        )}
      </div>
      {basket.length > 0 && (
        <div className="checkout__right">
          <Subtotal />
        </div>
      )}
    </div>
  );
};

export default Checkout;
