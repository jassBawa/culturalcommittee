import Image from "next/image";
import Link from "next/link";
import React from "react";

type Event = {
  id: string;
  image: string;
  title: string;
  description: string;
};

type Props = {
  title?: string;
  event: Event;
};

export default function Card({ event }: Props) {
  return (
    <Link href="#">
      <div className="card bg-[#303030]  flex flex-col rounded pb-8 gap-4 shadow-xl hover:scale-105 transition-all ease-linear">
        <div className="card-image relative h-52 w-full">
          <Image
            src={event.image}
            alt={event.title}
            fill
            className="absolute object-cover rounded"
          />
        </div>
        <div className="pl-8 space-y-2">
          <div className="card-text text-xl ">{event.title}</div>
          <div className="card-desc text-yellow-300 opacity-70">
            {event.description}
          </div>
        </div>
      </div>
    </Link>
  );
}
