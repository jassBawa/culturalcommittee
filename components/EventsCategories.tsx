import Image from "next/image";
import Link from "next/link";
import React from "react";
import EventCategory from "./EventCategory";

type Props = {};

const eventCategories = [
  {
    id: "finearts",
    image: "/finearts.png",
    title: "Fine Arts",
    list: ["Mehndi", "Rangoli", "Photography"],
  },
  {
    id: "dance",
    image: "/.png",
    title: "Dance",
    list: ["Solo Dance", "Group Dance", "Folk Dance"],
  },
  {
    id: "dance",
    image: "/.png",
    title: "Dance",
    list: ["Solo Dance", "Group Dance", "Folk Dance"],
  },
  {
    id: "dance",
    image: "/.png",
    title: "Dance",
    list: ["Solo Dance", "Group Dance", "Folk Dance"],
  },
];

export default function Events({}: Props) {
  return (
    <section className="max-w-7xl scroll-smooth mx-auto h-screen p-4 text-gray-100">
      <h1 className="text-3xl  font-semibold">Event Categories</h1>
      <div className="grid grid-cols-1 gap-6 justify-center md:grid-cols-3 lg:grid-cols-4 mt-8">
        {eventCategories.map((category) => (
          <EventCategory key={category.id} event={category} />
        ))}
      </div>
      <div className="text-center mt-12">
        <Link href="/events">
          <button className="px-4 py-2 bg-yellow-600 rounded self-center hover:bg-yellow-500 shadow animate-bounce">
            Browse Categories
          </button>
        </Link>
      </div>
    </section>
  );
}
