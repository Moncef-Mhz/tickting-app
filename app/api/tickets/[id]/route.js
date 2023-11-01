import { connectToDB } from "@/utils/ConnectToDB";
import Ticket from "@/models/ticket";

export const GET = async (req, { params }) => {
  const { id } = params;

  const foundTicket = await Ticket.findOne({ _id: id });
  return new Response(JSON.stringify(foundTicket), { status: 201 });
};

export const PUT = async (req, { params }) => {
  try {
    const { id } = params;
    connectToDB();

    const body = await req.json();
    const ticketData = body.formData;

    const updateTicketData = await Ticket.findByIdAndUpdate(id, {
      ...ticketData,
    });

    return new Response("Ticket updated", { status: 200 });
  } catch (err) {
    return new Response("Faild to update ticket", { status: 500 });
  }
};
