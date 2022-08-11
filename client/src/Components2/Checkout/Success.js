import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { saveOrder } from "../../lib/state/actions";
import useAuthentication from "../../lib/hooks/useAuthentication";

const styles = {
  height: "100vh",
  fontSize: 20,
};
function Success({ history }) {
  const { items } = useSelector((state) => state.cart);
  const dispatch = useDispatch();
  const { handleAuthentication } = useAuthentication(dispatch);

  const dispatchAndSaveOrder = (user) => {
    return new Promise((resolve) => {
      const total = localStorage.getItem('total')
      const order = { user, items, total : Number(total) };
      dispatch(saveOrder(order));
      resolve();
    });
  };
  const clearStorage = () => {
    return new Promise((resolve) => {
      localStorage.setItem("items", []);
      resolve();
    });
  };
  const redirectHome = () => {
    return new Promise((resolve) => {
      setTimeout(() => history.push("/"), 4000);
      resolve();
    });
  };

  useEffect(() => {
    (async () => {
      const userProfile = await handleAuthentication();
      await dispatchAndSaveOrder(userProfile);
      await clearStorage();
      await redirectHome();
    })(); // IIFE
  }, []);

  return (
    <>
      <div
        style={styles}
        className="d-flex justify-content-center align-items-center">
        <div className="alert alert-success mt-3 mb-3">
          <p className="icontext">
            <i className="icon text-success fa fa-thumbs-up"></i>Thank you for
            your order &amp; your payment
          </p>
        </div>
      </div>
    </>
  );
}
export default Success;
