import React from "react";

import { Minus, Plus } from "lucide-react";

const Quantity = ({
  increase,
  decrease,
  itemId,
  quantity,
}: {
  increase: (id: number) => void;
  decrease: (id: number) => void;
  itemId: number;
  quantity: number;
}) => {
  return (
    <div className="mt-4">
      <div className="flex items-center border-3 border-yellow-400 rounded-full overflow-hidden w-fit">
        {/* Minus */}
        <button onClick={() => decrease(itemId)} className="px-2 py-1">
          <Minus size={16} />
        </button>

        {/* Counter */}
        <span className="px-2 text-sm font-semibold">{quantity}</span>

        {/* Plus */}
        <button onClick={() => increase(itemId)} className="px-2 py-1">
          <Plus size={16} />
        </button>
      </div>
    </div>
  );
};

export default Quantity;
