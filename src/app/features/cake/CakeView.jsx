import { useSelector, useDispatch } from "react-redux";
import { cakeActions } from "./cakeSlice";
import { useState } from "react";

const { smallOrder, bigOrder, restocked } = cakeActions;

export const Cakeview = () => {
  const [bigOrderValue, setBigOrderValue] = useState(0);
  const [restockedValue, setRestockedValue] = useState(0);

  const numOfCakes = useSelector((state) => state.cake.numOfCakes);
  const dispatch = useDispatch();
  return (
    <div>
      <h2>Number of cakes {numOfCakes}</h2>

      <button onClick={() => dispatch(smallOrder())}>Order Cake</button>

      <input
        type="text"
        value={bigOrderValue}
        onChange={(e) => setBigOrderValue(parseInt(e.target.value))}
      />
      <button onClick={() => dispatch(bigOrder(bigOrderValue))}>
        Order cakeS
      </button>

      <input
        type="text"
        value={restockedValue}
        onChange={(e) => setRestockedValue(parseInt(e.target.value))}
      />
      <button onClick={() => dispatch(restocked(restockedValue))}>
        Restock cakes
      </button>
    </div>
  );
};
