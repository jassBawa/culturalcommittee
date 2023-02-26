import React from "react";
import Image from "next/image";
import Link from "next/link";

type Event = {
  id: string;
  title: string;
  list: string[];
};

type Props = {
  event: Event;
};

export default function EventCategory({ event }: Props) {
  return (
    <div className="flex flex-col hover:scale-105 transition-all bg-[#303030] pb-8 gap-6 min-w-[100px] max-w-md shadow-xl  rounded-lg ">
      <div className="relative h-48 w-full">
        <Image
          className="absolute object-cover"
          fill
          src="/finearts.png"
          alt="finearts"
        />
      </div>
      <div className="description pl-8 ">
        <h4 className="font-semibold text-xl">{event.title}</h4>
        <ul className="list-disc pl-8 mt-4 space-y-1 text-gray-100 font-light">
          {event.list.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </div>
      <Link
        href={`/events/#${event.id}`}
        className="px-4 py-2 bg-yellow-600 rounded self-center hover:bg-yellow-500 shadow "
      >
        View All
      </Link>
    </div>
  );
}
