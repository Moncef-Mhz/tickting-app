"use client";
import React, { useState } from "react";
import { AiOutlineDelete, AiOutlineEdit } from "react-icons/ai";
import StatusDisplay from "./StatusDisplay";
import PriorityDisplay from "./PriorityDisplay";

function TicketCard({ item }) {
  return (
    <div className="p-4 bg-dark text-white relative rounded">
      <div className="flex w-full items-center justify-between border-b pb-2 border-light/20">
        <h4>{item.title}</h4>
        <div className="flex items-center justify-center gap-2">
          <AiOutlineEdit size={20} className="cursor-pointer" />
          <AiOutlineDelete size={20} className="cursor-pointer" />
        </div>
      </div>
      <div className="my-2">
        <p className="text-light/60 capitalize">{item.description}</p>
      </div>
      <div className="flex items-center justify-between ">
        <PriorityDisplay priority={item.priority} />
        <StatusDisplay status={item.status} />
      </div>
    </div>
  );
}

export default TicketCard;
