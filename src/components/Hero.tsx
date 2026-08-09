import React from "react";
import {
  ShoppingBag,
  ArrowRight,
  Star,
  Heart,
  ShieldCheck,
  Sparkles,
  Instagram,
  Facebook,
  MapPin,
} from "lucide-react";

import {
  BUSINESS_INFO,
  buildWhatsAppLink,
} from "../data/businessData";

interface HeroProps {
  onOpenOrderModal: () => void;
}

export const Hero: React.FC<HeroProps> = ({
  onOpenOrderModal,
}) => {
  return (
    <section
      id="hero"
      className="
        relative
        min-h-[680px]
        overflow-hidden
        bg-gradient-to-br
        from-[#fffaf5]
        via-white
        to-[#fff3e6]
        pt-28
        sm:pt-32
        pb-16
        sm:pb-20
      "
    >

      {/* ========================= */}
      {/* BACKGROUND DECORATION */}
      {/* ========================= */}

      <div
        className="
          absolute
          -top-32
          -left-32
          w-[420px]
          h-[420px]
          rounded-full
          bg-amber-200/30
          blur-3xl
          pointer-events-none
        "
      />

      <div
        className="
          absolute
          top-1/3
          -right-40
          w-[500px]
          h-[500px]
          rounded-full
          bg-orange-200/25
          blur-3xl
          pointer-events-none
        "
      />

      <div
        className="
          absolute
          bottom-0
          left-1/3
          w-80
          h-80
          rounded-full
          bg-rose-100/30
          blur-3xl
          pointer-events-none
        "
      />

      {/* Decorative lines */}

      <div
        className="
          absolute
          top-32
          right-10
          w-24
          h-24
          border
          border-orange-200/50
          rounded-full
          pointer-events-none
        "
      />

      <div
        className="
          absolute
          top-40
          right-16
          w-10
          h-10
          rounded-full
          bg-orange-300/20
          pointer-events-none
        "
      />

      <div
        className="
          max-w-7xl
          mx-auto
          px-4
          sm:px-6
          lg:px-8
          relative
          z-10
        "
      >

        <div
          className="
            grid
            lg:grid-cols-12
            gap-12
            lg:gap-16
            items-center
          "
        >

          {/* ================================================== */}
          {/* LEFT CONTENT */}
          {/* ================================================== */}

          <div
            className="
              lg:col-span-7
              text-center
              lg:text-left
              animate-fade-in
            "
          >

            {/* BRAND LABEL */}

            <div
              className="
                inline-flex
                items-center
                gap-2
                px-4
                py-2
                rounded-full
                bg-white/80
                dark:bg-slate-800/80
                border
                border-orange-200
                dark:border-slate-700
                shadow-sm
                backdrop-blur
                text-orange-600
                dark:text-orange-400
                text-xs
                sm:text-sm
                font-bold
              "
            >
              <Sparkles className="w-4 h-4" />

              BRAND PUDDING BUAH PONTIANAK
            </div>


            {/* MAIN TITLE */}

            <h1
              className="
                mt-6
                text-4xl
                sm:text-5xl
                lg:text-6xl
                xl:text-7xl
                font-black
                leading-[1.05]
                tracking-tight
                text-slate-900
                dark:text-white
              "
            >
              Pudding Buah

              <span
                className="
                  block
                  mt-2
                  bg-gradient-to-r
                  from-amber-500
                  via-orange-500
                  to-rose-500
                  bg-clip-text
                  text-transparent
                "
              >
                Pontianak
              </span>
            </h1>


            {/* DIVIDER */}

            <div
              className="
                mt-6
                flex
                items-center
                justify-center
                lg:justify-start
                gap-3
              "
            >

              <div
                className="
                  h-1
                  w-12
                  rounded-full
                  bg-gradient-to-r
                  from-amber-400
                  to-orange-500
                "
              />

              <span
                className="
                  text-xs
                  font-bold
                  uppercase
                  tracking-[0.2em]
                  text-slate-400
                "
              >
                Premium Homemade Dessert
              </span>

            </div>


            {/* DESCRIPTION */}

            <p
              className="
                mt-6
                max-w-2xl
                mx-auto
                lg:mx-0
                text-base
                sm:text-lg
                leading-relaxed
                text-slate-600
                dark:text-slate-300
              "
            >
              Menghadirkan pudding buah premium dengan tekstur
              lembut, buah segar pilihan, dan vla vanilla homemade.
              Dibuat dengan penuh perhatian untuk menghadirkan
              pengalaman dessert yang istimewa.
            </p>


            {/* BRAND VALUES */}

            <div
              className="
                mt-7
                flex
                flex-wrap
                justify-center
                lg:justify-start
                gap-x-6
                gap-y-3
              "
            >

              <div
                className="
                  flex
                  items-center
                  gap-2
                  text-sm
                  font-semibold
                  text-slate-700
                  dark:text-slate-200
                "
              >
                <ShieldCheck
                  className="
                    w-5
                    h-5
                    text-green-500
                  "
                />

                Bahan Berkualitas
              </div>


              <div
                className="
                  flex
                  items-center
                  gap-2
                  text-sm
                  font-semibold
                  text-slate-700
                  dark:text-slate-200
                "
              >
                <Star
                  className="
                    w-5
                    h-5
                    fill-yellow-400
                    text-yellow-400
                  "
                />

                Fresh Setiap Hari
              </div>


              <div
                className="
                  flex
                  items-center
                  gap-2
                  text-sm
                  font-semibold
                  text-slate-700
                  dark:text-slate-200
                "
              >
                <MapPin
                  className="
                    w-5
                    h-5
                    text-orange-500
                  "
                />

                Pontianak
              </div>

            </div>


            {/* CTA */}

            <div
              className="
                mt-8
                flex
                flex-col
                sm:flex-row
                gap-3
                justify-center
                lg:justify-start
              "
            >

              {/* PRIMARY CTA */}

              <a
                href={buildWhatsAppLink()}
                target="_blank"
                rel="noopener noreferrer"
                className="
                  group
                  inline-flex
                  items-center
                  justify-center
                  gap-2
                  px-7
                  py-4
                  rounded-2xl
                  bg-gradient-to-r
                  from-amber-500
                  via-orange-500
                  to-orange-600
                  text-white
                  font-bold
                  shadow-xl
                  shadow-orange-500/20
                  transition-all
                  duration-300
                  hover:-translate-y-1
                  hover:shadow-2xl
                  hover:shadow-orange-500/30
                "
              >

                <ShoppingBag className="w-5 h-5" />

                Pesan Sekarang

                <ArrowRight
                  className="
                    w-4
                    h-4
                    transition-transform
                    duration-300
                    group-hover:translate-x-1
                  "
                />

              </a>


              {/* SECONDARY CTA */}

              <button
                onClick={onOpenOrderModal}
                className="
                  inline-flex
                  items-center
                  justify-center
                  gap-2
                  px-7
                  py-4
                  rounded-2xl
                  bg-white
                  dark:bg-slate-800
                  border
                  border-orange-200
                  dark:border-slate-700
                  text-slate-800
                  dark:text-white
                  font-bold
                  shadow-sm
                  transition-all
                  duration-300
                  hover:-translate-y-1
                  hover:border-orange-400
                  hover:shadow-lg
                "
              >

                <Sparkles
                  className="
                    w-4
                    h-4
                    text-orange-500
                  "
                />

                Custom Order

              </button>

            </div>


            {/* TRUST */}

            <div
              className="
                mt-8
                pt-6
                border-t
                border-orange-100
                dark:border-slate-800
                flex
                flex-wrap
                justify-center
                lg:justify-start
                gap-x-7
                gap-y-4
              "
            >

              {/* RATING */}

              <div className="flex items-center gap-2">

                <div
                  className="
                    w-10
                    h-10
                    rounded-xl
                    bg-yellow-100
                    flex
                    items-center
                    justify-center
                  "
                >

                  <Star
                    className="
                      w-5
                      h-5
                      fill-yellow-400
                      text-yellow-400
                    "
                  />

                </div>

                <div className="text-left">

                  <p
                    className="
                      text-sm
                      font-black
                      text-slate-900
                      dark:text-white
                    "
                  >
                    4.9/5
                  </p>

                  <p
                    className="
                      text-[11px]
                      text-slate-500
                      dark:text-slate-400
                    "
                  >
                    Kepuasan Pelanggan
                  </p>

                </div>

              </div>


              {/* FRESH */}

              <div className="flex items-center gap-2">

                <div
                  className="
                    w-10
                    h-10
                    rounded-xl
                    bg-green-100
                    flex
                    items-center
                    justify-center
                  "
                >

                  <ShieldCheck
                    className="
                      w-5
                      h-5
                      text-green-600
                    "
                  />

                </div>

                <div className="text-left">

                  <p
                    className="
                      text-sm
                      font-black
                      text-slate-900
                      dark:text-white
                    "
                  >
                    Fresh Daily
                  </p>

                  <p
                    className="
                      text-[11px]
                      text-slate-500
                      dark:text-slate-400
                    "
                  >
                    Dibuat Tanpa Pengawet
                  </p>

                </div>

              </div>

            </div>


            {/* SOCIAL */}

            <div
              className="
                mt-5
                flex
                justify-center
                lg:justify-start
                gap-5
              "
            >

              <a
                href={BUSINESS_INFO.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="
                  inline-flex
                  items-center
                  gap-2
                  text-sm
                  font-semibold
                  text-pink-500
                  transition
                  hover:text-pink-600
                "
              >

                <Instagram className="w-4 h-4" />

                Instagram

              </a>


              <a
                href={BUSINESS_INFO.facebookUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="
                  inline-flex
                  items-center
                  gap-2
                  text-sm
                  font-semibold
                  text-blue-500
                  transition
                  hover:text-blue-600
                "
              >

                <Facebook className="w-4 h-4" />

                Facebook

              </a>

            </div>

          </div>


          {/* ================================================== */}
          {/* RIGHT VISUAL */}
          {/* ================================================== */}

          <div
            className="
              lg:col-span-5
              relative
              mt-8
              lg:mt-0
            "
          >

            {/* OUTER GLOW */}

            <div
              className="
                absolute
                inset-6
                rounded-[3rem]
                bg-gradient-to-br
                from-amber-300
                via-orange-300
                to-rose-300
                blur-3xl
                opacity-40
              "
            />


            {/* MAIN IMAGE */}

            <div
              className="
                relative
                rounded-[2.5rem]
                overflow-hidden
                border
                border-white
                dark:border-slate-700
                bg-white
                dark:bg-slate-800
                shadow-2xl
                shadow-orange-900/10
                group
              "
            >

              <img
                src="/images/foto1.png"
                alt="Pudding Buah Premium Pontianak"
                loading="eager"
                className="
                  w-full
                  h-[400px]
                  sm:h-[500px]
                  lg:h-[570px]
                  object-cover
                  transition-transform
                  duration-1000
                  group-hover:scale-105
                "
              />


              {/* IMAGE OVERLAY */}

              <div
  className="
    absolute
    inset-0
    bg-gradient-to-t
    from-orange-900/10
    via-transparent
    to-transparent
    pointer-events-none
  "
/>


              {/* IMAGE CAPTION */}

              <div
                className="
                  absolute
                  bottom-5
                  left-5
                  right-5
                  rounded-2xl
                  bg-white/90
                  dark:bg-slate-900/90
                  backdrop-blur-xl
                  border
                  border-white/80
                  dark:border-slate-700
                  p-5
                  shadow-xl
                "
              >

                <div
                  className="
                    flex
                    items-center
                    justify-between
                    gap-4
                  "
                >

                  <div>

                    <p
                      className="
                        text-[10px]
                        sm:text-xs
                        font-bold
                        uppercase
                        tracking-[0.18em]
                        text-orange-500
                      "
                    >
                      Signature Product
                    </p>

                    <h3
                      className="
                        mt-1
                        text-base
                        sm:text-lg
                        font-black
                        text-slate-900
                        dark:text-white
                      "
                    >
                      Fresh Fruit Pudding
                    </h3>

                  </div>


                  <div
                    className="
                      shrink-0
                      w-11
                      h-11
                      rounded-full
                      bg-orange-50
                      dark:bg-slate-800
                      flex
                      items-center
                      justify-center
                    "
                  >

                    <Heart
                      className="
                        w-5
                        h-5
                        text-orange-500
                        fill-orange-500
                      "
                    />

                  </div>

                </div>

              </div>

            </div>


            {/* QUALITY BADGE */}

            <div
              className="
                absolute
                -top-5
                left-2
                sm:-left-6
                flex
                items-center
                gap-3
                px-4
                py-3
                rounded-2xl
                bg-white/95
                dark:bg-slate-800/95
                border
                border-orange-100
                dark:border-slate-700
                shadow-xl
                backdrop-blur-md
                animate-float
              "
            >

              <div
                className="
                  w-10
                  h-10
                  rounded-xl
                  bg-green-100
                  flex
                  items-center
                  justify-center
                "
              >

                <ShieldCheck
                  className="
                    w-5
                    h-5
                    text-green-600
                  "
                />

              </div>

              <div>

                <p
                  className="
                    text-[10px]
                    text-slate-400
                  "
                >
                  Kualitas
                </p>

                <p
                  className="
                    text-xs
                    font-bold
                    text-slate-900
                    dark:text-white
                  "
                >
                  100% Buah Segar
                </p>

              </div>

            </div>


            {/* LOCATION BADGE */}

            <div
              className="
                absolute
                -bottom-5
                right-2
                sm:-right-6
                flex
                items-center
                gap-3
                px-4
                py-3
                rounded-2xl
                bg-white/95
                dark:bg-slate-800/95
                border
                border-orange-100
                dark:border-slate-700
                shadow-xl
                backdrop-blur-md
              "
            >

              <div
                className="
                  w-10
                  h-10
                  rounded-xl
                  bg-orange-100
                  flex
                  items-center
                  justify-center
                "
              >

                <MapPin
                  className="
                    w-5
                    h-5
                    text-orange-500
                  "
                />

              </div>

              <div>

                <p
                  className="
                    text-[10px]
                    text-slate-400
                  "
                >
                  Melayani
                </p>

                <p
                  className="
                    text-xs
                    font-bold
                    text-slate-900
                    dark:text-white
                  "
                >
                  Pontianak & Sekitar
                </p>

              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
};