// Cart.js
import React from "react";
import DeleteIcon from "@material-ui/icons/Delete";
import { useCart, useDispatchCart } from "../components/ContextReducer";

export default function Cart() {
  const data = useCart();
  const dispatch = useDispatchCart();

  const handleCheckOut = async () => {
    let userEmail = localStorage.getItem("userEmail");
    let response = await fetch("https://project-mern-backend-8xj6.onrender.com/api/orderData", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        order_data: data,
        email: userEmail,
      }),
    });
    if (response.status === 200) {
      dispatch({ type: "CLEAR_CART" }); // Clear the cart after successful checkout
    }
  };

  const totalPrice = data.reduce((total, food) => total + food.price, 0);

  return (
    <div>
      <div className="container m-auto mt-5 table-responsive table-responsive-sm table-responsive-md">
        {data.length === 0 ? (
          <div className="text-center fs-3">Cart is empty</div>
        ) : (
          <div>
            <table className="table table-hover">
              <thead className="text-success fs-4">
                <tr>
                  <th scope="col">#</th>
                  <th scope="col">Name</th>
                  <th scope="col">Amount</th>
                  <th scope="col"></th>
                </tr>
              </thead>
              <tbody>
                {data.map((food, index) => (
                  <tr key={index}>
                    <th scope="row">{index + 1}</th>
                    <td>{food.name}</td>
                    <td>{food.price}</td>
                    <td>
                      <button
                        type="button"
                        className="btn p-0"
                        onClick={() => dispatch({ type: "REMOVE", index })}
                      >
                        <DeleteIcon />
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
            <div>
              <h1 className="fs-2">Total Price: {totalPrice || 0}/-</h1>
            </div>
            <div>
              <button className="btn bg-success mt-5" onClick={handleCheckOut}>
                Check Out
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
