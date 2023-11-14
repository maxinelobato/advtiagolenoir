import Image from "next/image";
import ButtonHero from "../Buttons/buttonhero";
import lenoir from "/public/lenoir.svg";

export default function Header() {
  return (
    <>
      <section className="relative max-h-[87vh] bg-no-repeat bg-center bg-cover bg-bg1 lg:bg-cover">
        <div className="absolute inset-0 bg-gradient-to-r from-stone-950 to-transparent"></div>
        <div className="max-w-screen-xl px-4 py-20 relative mx-auto lg:flex lg:items-center lg:h-screen lg:px-8 sm:px-6">
          <div className="max-w-screen-2xl text-center sm:text-left">
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
              <span className="text-yellow-400">experiência na área penal</span>
            </p>

            <p
              className="font-bold sm:text-2xl/relaxed text-white "
              style={{ textShadow: "0px 0px 8px #000000" }}
            >
              Atendimento em{" "}
              <span className="text-yellow-400">todo Brasil</span>
            </p>

            <div className="py-8 sm:py-10">
              <ButtonHero />
              <div className="sm:flex sm:items-center sm:justify-between">
                <div className="flex justify-center sm:justify-start">
                  <div className="py-8 sm:py-10">
                    <Image
                      className="w-48 md:w-auto lg:w-64"
                      src={lenoir}
                      sizes="100vw"
                      alt="Logo Lenoir"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
