import { useSelector } from "react-redux";
import { icecreamActions } from "./icecreamSlice";
import { useDispatch } from "react-redux";
import { useState } from "react";

const { smallOrder, bigOrder, restocked } = icecreamActions;

export const IcecreamView = () => {
  const [restockIcecreamValue, setRestockIcecreamValue] = useState(0);
  const [bigOrderValue, setBigOrderValue] = useState(0);
  const numOfIcecreams = useSelector((state) => state.ice.numOfIcecreams);
  const dispatch = useDispatch();

  return (
    <div>
      <h2>Number of icecreams {numOfIcecreams}</h2>

      <button onClick={() => dispatch(smallOrder())}>Order icecream</button>
      <br />

      <input
        type="text"
        value={restockIcecreamValue}
        onChange={(e) => setRestockIcecreamValue(parseInt(e.target.value))}
      />
      <button onClick={() => dispatch(restocked(restockIcecreamValue))}>
        restock cakes
      </button>

      <input
        type="text "
        value={bigOrderValue}
        onChange={(e) => setBigOrderValue(parseInt(e.target.value))}
      />
      <button onClick={() => dispatch(bigOrder(bigOrderValue))}>
        Order cakes
      </button>
    </div>
  );
};
