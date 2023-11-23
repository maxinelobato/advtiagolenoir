import Image from "next/image";
import ButtonHero from "../Buttons/buttonhero";
import lenoir from "/public/lenoir.svg";

export default function Header() {
  return (
    <>
      <section className="relative max-h-[90vh] bg-no-repeat bg-center bg-cover bg-bg1 lg:max-h-[85vh] lg:bg-cover">
        <div className="absolute inset-0 bg-gradient-to-r from-stone-950 to-transparent"></div>
        <div className="relative max-w-screen-xl mx-auto px-4 py-20 lg:py-52 lg:flex lg:items-center lg:h-screen lg:px-8 sm:px-6">
          <div className="max-w-screen-2xl text-center sm:text-left">
            <div className="pt-8 sm:pt-0">
              <h1
                className="text-3xl sm:text-5xl text-white font-extrabold"
                style={{ textShadow: "0px 0px 8px #000000" }}
              >
                Precisa de um Advogado
                <strong
                  className="block font-extrabold"
                  style={{ textShadow: "0px 0px 8px #000000" }}
                >
                  Criminalista?
                </strong>
              </h1>

              <p
                className="font-bold sm:text-2xl/relaxed pt-4 text-white "
                style={{ textShadow: "0px 0px 8px #000000" }}
              >
                Mais de 18 anos de{" "}
                <span className="text-yellow-400">
                  experiência na área penal
                </span>
              </p>

              <p
                className="font-bold sm:text-2xl/relaxed text-white "
                style={{ textShadow: "0px 0px 8px #000000" }}
              >
                Atendimento em{" "}
                <span className="text-yellow-400">todo Brasil</span>
              </p>
            </div>

            <div className="pt-8">
              <ButtonHero />
            </div>

            <div className="pt-7 sm:pt-10 sm:flex sm:items-center sm:justify-between">
              <div className="flex justify-center sm:justify-start">
                <Image
                  className="w-48 md:w-auto lg:w-64"
                  src={lenoir}
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  alt="Logo Lenoir"
                  loading="eager"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
