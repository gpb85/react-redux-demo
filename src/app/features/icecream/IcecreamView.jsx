import { icecreamActions } from "./icecreamSlice.js";
import { useValidatedNumber } from "../../../hooks/useValidateNumber";
import { useDispatch, useSelector } from "react-redux";

const { smallOrder, bigOrder, restocked } = icecreamActions;

export const IcecreamView = () => {
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

  const numOfIcecreams = useSelector((state) => state.ice.numOfIcecreams);
  const dispatch = useDispatch();

  return (
    <div className="ice-container">
      <h1 className="ice-state">Icecreams: {numOfIcecreams}</h1>

      {/**-------------order--------------- */}

      <button className="ice-sm-order" onClick={() => dispatch(smallOrder())}>
        Order 1 icecream
      </button>
      <div className="ice ice-big-order">
        <input
          type="text"
          value={bigOrderValue}
          onChange={(e) => bigChange(e.target.value)}
          placeholder="write the number"
          className="ice ice-big-order-input"
        />
        <button
          disabled={!validBig}
          className="ice big-order-button"
          onClick={() => {
            dispatch(bigOrder(bigOrderValue));
          }}
        >
          Order
        </button>
      </div>
      {/**------------------- restock --------------- */}

      <div className="ice ice-restock">
        <input
          type="text"
          value={restockValue}
          onChange={(e) => restockChange(e.target.value)}
          placeholder="write the number"
          className="ice ice-big-restock-input"
        />
        <button
          disabled={!validRestock}
          onClick={() => dispatch(restocked(restockValue))}
        >
          Done
        </button>
        <div style={{ color: "red", fontSize: 30 }} className="ice-message-box">
          {errorBig && <p>{errorBig}</p>}
          {errorRestock && <p>{errorRestock}</p>}
        </div>
      </div>
    </div>
  );
};
