import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import { useAppDispatch, useAppSelector } from "./app/hooks"; //detta är objekt jag kan använda actiosn eller selectros på
import { increment, decrement, reset, addAmount } from "./features/counter/counterSlice"; //Detta är mina actions

function App() {
  const count = useAppSelector((state) => state.counter.value); //om denna select funktion, används på många ställen, skall den göras global och exporteras från tex counterSlice

  const [amountToAdd, setAmountToAdd] = useState(0);
  const dispatch = useAppDispatch();

  return (
    <>
      <p>count is {count}</p>
      <button
        onClick={() => {
          dispatch(increment());
        }}
      >
        inc
      </button>
      <button
        onClick={() => {
          dispatch(decrement());
        }}
      >
        dec
      </button>
      <button
        onClick={() => {
          dispatch(reset());
        }}
      >
        reset
      </button>
      <br></br>
      Amount to add:
      <input
        type="number"
        onChange={(e) => {
          let valueToAdd: number = parseInt(e.target.value);
          setAmountToAdd(valueToAdd);
        }}
      />
      <button
        onClick={() => {
          dispatch(addAmount(amountToAdd));
        }}
      >
        add amount
      </button>
    </>
  );
}

export default App;
