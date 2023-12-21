"use client";

import { useEffect, useState } from "react";

type Props = {
  price: number;
  id: number;
  options?: { title: string; additionalPrice: number }[];
};

const Price = ({ id, price, options }: Props) => {
  const [total, setTotal] = useState(price);
  const [quantity, setQuantity] = useState(1);
  const [selected, setSelected] = useState(0);

  useEffect(() => {
    setTotal(
      quantity * (options ? price + options[selected].additionalPrice : price)
    );
  }, [quantity, selected, options, price]);

  return (
    <div className="flex flex-col gap-4">
      <h2 className="text2xl font-bold">${total.toFixed(2)}</h2>
      {/* OPTIONS CONTAINER */}
      <div className="flex gap-4">
        {options?.map((op, idx) => (
          <button
            key={op.title}
            className="min-w-[6rem] p-2 ring-1 ring-red-400 rounded-md"
            style={{
              background: selected === idx ? "rgb(248 113 113)" : "white",
              color: selected === idx ? "white" : "rgb(248 113 113)",
            }}
            onClick={() => setSelected(idx)}
          >
            {op.title}
          </button>
        ))}
      </div>
      {/* QUANTITY AND ADD BUTTON CONTAINER */}
      <div className="flex justify-between items-center">
        {/* QUANTITY */}
        <div className="flex justify-between w-full p-3 ring-1 ring-red-500">
          <span>Quantity</span>
          <div className="flex gap-4 items-center">
            <button
              onClick={() =>
                setQuantity((prevQ) => (prevQ > 1 ? prevQ - 1 : 1))
              }
            >
              {"<"}
            </button>
            <span>{quantity}</span>
            <button
              onClick={() =>
                setQuantity((prevQ) => (prevQ < 9 ? prevQ + 1 : 9))
              }
            >
              {">"}
            </button>
          </div>
        </div>
        {/* CART BUTTON */}
        <button className="uppercase w-56 bg-red-500 text-white p-3 ring-1 ring-red-500">
          ADD TO CART
        </button>
      </div>
    </div>
  );
};

export default Price;
