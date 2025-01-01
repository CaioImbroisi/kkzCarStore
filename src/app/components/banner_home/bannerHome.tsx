"use client";
import "./_bannerHome.scss";
import { getHomeBanners } from "../../API/getAllHomeBanners";
import { useEffect, useState } from "react";
import type { BannerHome } from "../../../../public/mock/banner_home";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css/autoplay";
import "swiper/css/pagination";
import "swiper/css/navigation";

export default function BannerHome() {
  const [banners, setBanners] = useState<BannerHome[]>([]);

  useEffect(() => {
    const getAllBanners = async () => {
      const data = await getHomeBanners();
      setBanners(data);
    };
    getAllBanners();
  }, []);

  return (
    <div className="banner-home">
      <Swiper
        spaceBetween={50}
        slidesPerView={1}
        loop={true}
        pagination={{ type: "bullets" }}
        navigation
        autoplay={{ delay: 5000, disableOnInteraction: false }}
        modules={[Pagination, Navigation, Autoplay]}
      >
        {banners.map((banner) => (
          <SwiperSlide key={banner.id}>
            <Image
              src={banner.image}
              alt={banner.name}
              width={1440}
              height={600}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
