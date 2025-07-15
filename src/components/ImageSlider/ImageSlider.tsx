"use client";

import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/splide/dist/css/splide.min.css";
import Image from "next/image";
import type { JSX } from "react";

type Props = {
  images: string[];
};

export const ImageSlider = ({ images }: Props): JSX.Element => {
  return (
    <Splide
      options={{
        type: "loop",
        autoplay: true,
        interval: 5000,
        perPage: 2,
        perMove: 1,
        breakpoints: {
          768: {
            perPage: 1,
          },
        },
        gap: "1rem",
        arrows: true,
        pagination: true,
        pauseOnHover: true,
        drag: true,
      }}
      aria-label="Image carousel"
    >
      {images.map((src, index) => (
        <SplideSlide key={index}>
          <Image
            src={src}
            width={200}
            height={300}
            alt={`Slide ${index + 1}`}
            style={{
              width: "100%",
              height: "auto",
              borderRadius: "12px",
              objectFit: "cover",
            }}
          />
        </SplideSlide>
      ))}
    </Splide>
  );
};
