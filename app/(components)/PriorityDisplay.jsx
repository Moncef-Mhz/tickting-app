import React from "react";
import { AiFillFire } from "react-icons/ai";

function PriorityDisplay({ priority }) {
  return (
    <div className="flex gap-1 flex-row">
      <AiFillFire
        className={priority > 0 ? "text-red-400" : "text-slate-500"}
      />
      <AiFillFire
        className={priority > 1 ? "text-red-400" : "text-slate-500"}
      />
      <AiFillFire
        className={priority > 2 ? "text-red-400" : "text-slate-500"}
      />
      <AiFillFire
        className={priority > 3 ? "text-red-400" : "text-slate-500"}
      />
      <AiFillFire
        className={priority > 4 ? "text-red-400" : "text-slate-500"}
      />
    </div>
  );
}

export default PriorityDisplay;
