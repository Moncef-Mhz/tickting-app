import { Schema, model, models } from "mongoose";

const TicketSchema = new Schema(
  {
    title: { type: String, required: true },
    description: { type: String, required: true },
    category: { type: String, required: true },
    priority: { type: Number, required: true },
    status: { type: String, required: true },
  },
  { timestamps: true }
);

const Ticket = models.Ticket || model("Ticket", TicketSchema);
export default Ticket;
