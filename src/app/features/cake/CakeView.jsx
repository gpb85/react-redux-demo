import { cakeActions } from "./cakeSlice.js";
import { useValidatedNumber } from "../../../hooks/useValidateNumber";
import { useDispatch, useSelector } from "react-redux";

const { smallOrder, bigOrder, restocked } = cakeActions;

export const CakeView = () => {
  //order

  const {
    value: bigOrderValue,
    error: errorBig,
    onChange: bigChange,
    isValid: validBig,
  } = useValidatedNumber();

  //restock

  const {
    value: restockValue,
    error: errorRestock,
    onChange: restockChange,
    isValid: validRestock,
  } = useValidatedNumber();

  const numOfCakes = useSelector((state) => state.cake.numOfCakes);
  const dispatch = useDispatch();

  return (
    <div className="cake-container">
      <h1 className="cake-state">Cakes: {numOfCakes}</h1>

      {/**-------------order--------------- */}

      <button className="cake-sm-order" onClick={() => dispatch(smallOrder())}>
        Order 1 Cake
      </button>
      <div className="cake cake-big-order">
        <input
          type="text"
          value={bigOrderValue}
          onChange={(e) => bigChange(e.target.value)}
          placeholder="write the number"
          className="cake cake-big-order-input"
        />
        <button
          disabled={!validBig}
          className="cake big-order-button"
          onClick={() => {
            dispatch(bigOrder(bigOrderValue));
          }}
        >
          Order
        </button>
      </div>
      {/**------------------- restock --------------- */}

      <div className="cake cake-restock">
        <input
          type="text"
          value={restockValue}
          onChange={(e) => restockChange(e.target.value)}
          placeholder="write the number"
          className="cake cake-big-restock-input"
        />
        <button
          disabled={!validRestock}
          onClick={() => dispatch(restocked(restockValue))}
        >
          Done
        </button>
        <div
          style={{ color: "red", fontSize: 30 }}
          className="cake-message-box"
        >
          {errorBig && <p>{errorBig}</p>}
          {errorRestock && <p>{errorRestock}</p>}
          {bigOrderValue >= 4 ? (
            bigOrderValue < 6 ? (
              <p>offer 2 icecreams</p>
            ) : bigOrderValue < 8 ? (
              <p>offer 3 icecreams</p>
            ) : (
              <p>offer 4 icecreams</p>
            )
          ) : null}
        </div>
      </div>
    </div>
  );
};
