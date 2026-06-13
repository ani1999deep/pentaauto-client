"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { keyPersons } from "../data";

import "swiper/css";
import "swiper/css/navigation";

export default function KeyPersonsSection() {
  return (
    <>
      <div className="mb-12 text-center mt-20">
        <span className="inline-block px-4 py-2 rounded-full bg-green-100 text-[#16A34A] font-semibold text-sm mb-4">
          Leadership Team
        </span>
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
          Key Persons
        </h2>
        <p className="mt-3 text-gray-600 text-lg">Meet Our Leadership Team</p>
        <div className="w-24 h-1 bg-gradient-to-r from-[#16A34A] to-[#86EFAC] mx-auto mt-5 rounded-full" />
      </div>

      <div className="relative group">
        <button className="keyperson-prev absolute left-2 lg:-left-6 top-1/2 -translate-y-1/2 z-20 w-12 h-12 rounded-full bg-white shadow-xl border border-green-100 text-[#16A34A] opacity-100 lg:opacity-0 lg:group-hover:opacity-100 transition-all duration-300 hover:bg-[#16A34A] hover:text-white hover:scale-110">
          <ChevronLeft size={24} />
        </button>

        <button className="keyperson-next absolute right-2 lg:-right-6 top-1/2 -translate-y-1/2 z-20 w-12 h-12 rounded-full bg-white shadow-xl border border-green-100 text-[#16A34A] opacity-100 lg:opacity-0 lg:group-hover:opacity-100 transition-all duration-300 hover:bg-[#16A34A] hover:text-white hover:scale-110">
          <ChevronRight size={24} />
        </button>

        <Swiper
          modules={[Navigation]}
          spaceBetween={24}
          navigation={{
            prevEl: ".keyperson-prev",
            nextEl: ".keyperson-next",
          }}
          breakpoints={{
            320: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
          className="px-4 lg:px-8 pb-6"
        >
          {keyPersons.map((person) => (
            <SwiperSlide key={person.id}>
              <motion.div
                whileHover={{ y: -8 }}
                className="group bg-white rounded-3xl border border-gray-100 shadow-md hover:shadow-2xl transition-all duration-300 overflow-hidden"
              >
                <div className="h-20 bg-gradient-to-r from-[#16A34A] to-[#86EFAC]" />
                <div className="relative flex flex-col items-center px-6 pb-6">
                  <Image
                    src={person.photo}
                    alt={person.name}
                    width={100}
                    height={100}
                    className="w-24 h-24 rounded-full border-4 border-white object-cover -mt-12 shadow-lg"
                  />
                  <h4 className="mt-4 text-xl font-bold text-gray-900 text-center">
                    {person.name}
                  </h4>
                  <p className="text-[#16A34A] font-medium text-center">
                    {person.role}
                  </p>
                  <div className="w-16 h-1 bg-green-500 rounded-full my-4" />
                  <div className="w-full">
                    <a
                      href={`mailto:${person.email}`}
                      className="flex items-center gap-3 p-3 rounded-xl bg-gray-50 hover:bg-green-50 transition"
                    >
                      <span className="text-lg">✉️</span>
                      <span className="text-sm truncate">{person.email}</span>
                    </a>
                  </div>
                </div>
              </motion.div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </>
  );
}
