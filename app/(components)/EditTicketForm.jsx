"use client";
import React, { useState } from "react";
import { useRouter } from "next/navigation";

function EditTicketForm({ ticket }) {
  const EDITMODE = ticket._id === "new" ? false : true;
  const router = useRouter();
  const StartingTicketData = {
    title: "",
    description: "",
    priority: 1,
    status: "not started yet",
    category: "Hardware Problem",
  };
  if (EDITMODE) {
    StartingTicketData["title"] = ticket.title;
    StartingTicketData["description"] = ticket.description;
    StartingTicketData["priority"] = ticket.priority;
    StartingTicketData["status"] = ticket.status;
    StartingTicketData["category"] = ticket.category;
  }
  const [formData, setFormData] = useState(StartingTicketData);

  const handleChange = (e) => {
    const value = e.target.value;
    const name = e.target.name;

    setFormData((preState) => ({
      ...preState,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (EDITMODE) {
      const res = await fetch(`/api/tickets/${ticket._id}`, {
        method: "PUT",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify({ formData }),
      });
      if (!res.ok) {
        throw new Error("Faild to update ticket");
      }
    } else {
      const res = await fetch("/api/tickets", {
        method: "POST",
        body: JSON.stringify({ formData }),
        "Content-Type": "application/json",
      });
      if (!res.ok) {
        console.log(res);

        throw new Error("Failed to create ticket");
      }
    }
    router.refresh();
    router.push("/");
  };
  const categories = [
    "Hardware Problem",
    "Software Problem",
    "Application Deveopment",
    "Project",
  ];

  return (
    <div className=" items-center bg-dark-gray p-4 w-full flex justify-center">
      <form
        onSubmit={handleSubmit}
        className="flex flex-col gap-1 w-full bg-dark"
      >
        <h3>{EDITMODE ? "Update Your Ticket" : "Create New Ticket"}</h3>
        <label className="text-light">Title</label>
        <input
          id="title"
          name="title"
          className="text-light outline-none"
          type="text"
          onChange={handleChange}
          required={true}
          value={formData.title}
        />
        <label className="text-light">Description</label>
        <textarea
          id="description"
          className="text-light outline-none"
          name="description"
          onChange={handleChange}
          required={true}
          value={formData.description}
          rows="5"
        />
        <label className="text-light">Category</label>
        <select
          name="category"
          className="text-light"
          value={formData.category}
          onChange={handleChange}
        >
          {categories?.map((category, _index) => (
            <option key={_index} value={category} className="text-light">
              {category}
            </option>
          ))}
        </select>

        <label className="text-light">Priority</label>
        <div>
          <input
            id="priority-1"
            name="priority"
            type="radio"
            onChange={handleChange}
            value={1}
            checked={formData.priority == 1}
          />
          <label className="text-light">1</label>
          <input
            id="priority-2"
            name="priority"
            type="radio"
            onChange={handleChange}
            value={2}
            checked={formData.priority == 2}
          />
          <label className="text-light">2</label>
          <input
            id="priority-3"
            name="priority"
            type="radio"
            onChange={handleChange}
            value={3}
            checked={formData.priority == 3}
          />
          <label className="text-light">3</label>
          <input
            id="priority-4"
            name="priority"
            type="radio"
            onChange={handleChange}
            value={4}
            checked={formData.priority == 4}
          />
          <label className="text-light">4</label>
          <input
            id="priority-5"
            name="priority"
            type="radio"
            onChange={handleChange}
            value={5}
            checked={formData.priority == 5}
          />
          <label className="text-light">5</label>
        </div>

        <label className="text-light">Status</label>
        <select
          name="status"
          value={formData.status}
          className="text-light"
          onChange={handleChange}
        >
          <option value="not started yet" className="text-light">
            Not Started Yet
          </option>
          <option value="started" className="text-light">
            Started
          </option>
          <option value="done" className="text-light">
            Done
          </option>
        </select>
        <input
          type="submit"
          className="bg-dark-gray text-light p-2 cursor-pointer"
          value={EDITMODE ? "Update Ticket" : "Create Ticket"}
        />
      </form>
    </div>
  );
}

export default EditTicketForm;
