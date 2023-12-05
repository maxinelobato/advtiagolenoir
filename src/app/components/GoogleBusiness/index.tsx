"use client";

import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";

import { Navigation, Autoplay } from "swiper/modules";

import Image from "next/image";
import client1 from "/public/clients/client1.png";
import client2 from "/public/clients/client2.png";
import client3 from "/public/clients/client3.png";
import client4 from "/public/clients/client4.png";
import client5 from "/public/clients/client5.png";
import client6 from "/public/clients/client6.png";
import client7 from "/public/clients/client7.png";
import client8 from "/public/clients/client8.png";
import client9 from "/public/clients/client9.png";
import client10 from "/public/clients/client10.png";
import client11 from "/public/clients/client11.png";
import client12 from "/public/clients/client12.png";
import client13 from "/public/clients/client13.png";
import client14 from "/public/clients/client14.png";

export default function GoogleBusiness() {
  
  return (
    <>
      <section className="bg-white">
        <div className="mx-auto max-w-3xl px-4 py-12 sm:px-6">
          <div className="mx-auto max-w-screen-xl">
            <div className="mx-auto max-w-3xl text-center">
              <h1 className="font-sans font-semibold text-4xl tracking-tight text-stone-950 sm:text-5xl sm:leading-none">
                O que os clientes falam sobre a{" "}
                <span className="font-extrabold">
                  Lenoir Advogados Associados
                </span>
              </h1>
            </div>
            <div className="mt-10 flex flex-wrap items-center justify-center gap-4 xl:justify-center">
              <Image
                src="/google.png"
                alt="Imagem"
                width={300}
                height={300}
                rel="preload"
                className="w-28 h-28 drop-shadow-lg"
              />
            </div>
          </div>

          <div className="-mx-6 mt-8 lg:col-span-10 lg:mx-0">
            <Swiper
              navigation={true}
              autoplay={{
                delay: 2200,
                disableOnInteraction: false,
              }}
              modules={[Navigation, Autoplay]}
              className="mySwiper"
            >
              <SwiperSlide>
                <blockquote className="items-center justify-center p-6 sm:p-8 lg:p-12">
                  <Image
                    src={client1}
                    alt="Imagem"
                    rel="preload"
                    className="cursor-pointer rounded-2xl"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                </blockquote>
              </SwiperSlide>

              <SwiperSlide>
                <blockquote className="items-center justify-center p-6 sm:p-8 lg:p-12">
                  <Image
                    src={client2}
                    alt="Imagem"
                    rel="preload"
                    className="cursor-pointer rounded-2xl"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                </blockquote>
              </SwiperSlide>

              <SwiperSlide>
                <blockquote className="items-center justify-center p-6 sm:p-8 lg:p-12">
                  <Image
                    src={client3}
                    alt="Imagem"
                    rel="preload"
                    className="cursor-pointer rounded-2xl"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                </blockquote>
              </SwiperSlide>

              <SwiperSlide>
                <blockquote className="items-center justify-center p-6 sm:p-8 lg:p-12">
                  <Image
                    src={client4}
                    alt="Imagem"
                    rel="preload"
                    className="cursor-pointer rounded-2xl"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                </blockquote>
              </SwiperSlide>

              <SwiperSlide>
                <blockquote className="items-center justify-center p-6 sm:p-8 lg:p-12">
                  <Image
                    src={client5}
                    alt="Imagem"
                    rel="preload"
                    className="cursor-pointer rounded-2xl"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                </blockquote>
              </SwiperSlide>

              <SwiperSlide>
                <blockquote className="items-center justify-center p-6 sm:p-8 lg:p-12">
                  <Image
                    src={client6}
                    alt="Imagem"
                    rel="preload"
                    className="cursor-pointer rounded-2xl"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                </blockquote>
              </SwiperSlide>

              <SwiperSlide>
                <blockquote className="items-center justify-center p-6 sm:p-8 lg:p-12">
                  <Image
                    src={client7}
                    alt="Imagem"
                    rel="preload"
                    className="cursor-pointer rounded-2xl"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                </blockquote>
              </SwiperSlide>

              <SwiperSlide>
                <blockquote className="items-center justify-center p-6 sm:p-8 lg:p-12">
                  <Image
                    src={client8}
                    alt="Imagem"
                    rel="preload"
                    className="cursor-pointer rounded-2xl"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                </blockquote>
              </SwiperSlide>

              <SwiperSlide>
                <blockquote className="items-center justify-center p-6 sm:p-8 lg:p-12">
                  <Image
                    src={client9}
                    alt="Imagem"
                    rel="preload"
                    className="cursor-pointer rounded-2xl"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                </blockquote>
              </SwiperSlide>

              <SwiperSlide>
                <blockquote className="items-center justify-center p-6 sm:p-8 lg:p-12">
                  <Image
                    src={client10}
                    alt="Imagem"
                    rel="preload"
                    className="cursor-pointer rounded-2xl"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                </blockquote>
              </SwiperSlide>

              <SwiperSlide>
                <blockquote className="items-center justify-center p-6 sm:p-8 lg:p-12">
                  <Image
                    src={client11}
                    alt="Imagem"
                    rel="preload"
                    className="cursor-pointer rounded-2xl"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                </blockquote>
              </SwiperSlide>

              <SwiperSlide>
                <blockquote className="items-center justify-center p-6 sm:p-8 lg:p-12">
                  <Image
                    src={client12}
                    alt="Imagem"
                    rel="preload"
                    className="cursor-pointer rounded-2xl"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                </blockquote>
              </SwiperSlide>

              <SwiperSlide>
                <blockquote className="items-center justify-center p-6 sm:p-8 lg:p-12">
                  <Image
                    src={client13}
                    alt="Imagem"
                    rel="preload"
                    className="cursor-pointer rounded-2xl"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                </blockquote>
              </SwiperSlide>

              <SwiperSlide>
                <blockquote className="items-center justify-center p-6 sm:p-8 lg:p-12">
                  <Image
                    src={client14}
                    alt="Imagem"
                    rel="preload"
                    className="cursor-pointer rounded-2xl"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                </blockquote>
              </SwiperSlide>
              
            </Swiper>
          </div>
        </div>
      </section>
    </>
  );
}
