import React from "react";
import TicketCard from "./(components)/TicketCard";
import { carditems } from "@/utils";

const getTickets = async () => {
  try {
    const res = await fetch("http://localhost:3000/api/tickets", {
      cache: "no-store",
    });
    if (!res.ok) {
      throw new Error("Faild to fetch topics");
    }
    return res.json();
  } catch (err) {
    console.log("Error loading topics: ", err);
  }
};

const Home = async () => {
  const data = await getTickets();

  if (!data?.tickets) {
    return <p>No Ticket.</p>;
  }

  const categories = [...new Set(tickets?.map((item) => item.category))];

  return (
    <main className="bg-dark-gray  w-full h-screen max-h-screen p-2">
      {tickets &&
        categories?.map((categorie, index) => (
          <div className="mb-4 " key={index}>
            <h2>{categorie}</h2>
            <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-4 gap-4 mt-4">
              {tickets
                ?.filter((item) => item.category === categorie)
                .map((item) => (
                  <TicketCard item={item} key={item.id} />
                ))}
            </div>
          </div>
        ))}
    </main>
  );
};

export default Home;
