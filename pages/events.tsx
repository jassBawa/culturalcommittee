import React from "react";
import Image from "next/image";
import Card from "@/components/Card";

type Props = {};

const fineartsEvents = [
  {
    id: "mehndiEvent",
    image: "/fine-arts-mehndi.jpeg",
    title: "Mehndi",
    description: "card description here",
  },
  {
    id: "rangoliEvent",
    image: "/fine-arts-rangoli.jpeg",
    title: "Rangoli",
    description: "card description here",
  },
  {
    id: "photographyEvent",
    image: "/fine-arts-photography.jpeg",
    title: "Photography",
    description: "card description here",
  },
  {
    id: "paintingEvent",
    image: "/fine-arts-painting.jpeg",
    title: "Painting",
    description: "card description here",
  },
  {
    id: "posterMakingEvent",
    image: "/fine-arts-postermaking.jpeg",
    title: "Poster Making",
    description: "card description here",
  },
  {
    id: "clayModellingEvent",
    image: "/fine-arts-claymodelling.jpeg",
    title: "Clay Modelling",
    description: "card description here",
  },
  {
    id: "cartooningEvent",
    image: "/fine-arts-cartooning.jpeg",
    title: "Cartooning",
    description: "card description here",
  },
  {
    id: "collageMakingEvent",
    image: "/fine-arts-collagemaking.jpeg",
    title: "Collage Making",
    description: "card description here",
  },
];
const danceEvents = [
  {
    id: "solodanceEvent",
    image: "/dance-solo-dance.jpeg",
    title: "Solo Dance",
    description: "card description here",
  },
  {
    id: "groupdanceEvent",
    image: "/dance-group-dance.jpeg",
    title: "Group Dance",
    description: "card description here",
  },
  {
    id: "folkdanceEvent",
    image: "/dance-folk-dance.jpg",
    title: "Folk Dance",
    description: "card description here",
  },
];

export default function events({}: Props) {
  return (
    <main className={`overflow-y-auto bg-[#202020]`}>
      <div className=" max-w-7xl py-12 mx-auto space-y-12 text-gray-100">
        <section id="finearts">
          <h2 className="font-semibold text-xl">Fine Arts Events</h2>
          <div className="mt-8 grid grid-cols-4 gap-8">
            {fineartsEvents.map((event) => (
              <Card key={event.id} event={event} />
            ))}
          </div>
        </section>
        <section id="dance">
          <h2 className="font-semibold text-xl">Dance Events</h2>
          <div className="mt-8 grid grid-cols-4 gap-8">
            {danceEvents.map((event) => (
              <Card key={event.id} event={event} />
            ))}
          </div>
        </section>
      </div>
    </main>
  );
}
