import Image from "next/image";
import ButtonHero from "../Buttons/buttonhero";
import tiago from "/public/drtiago.jpg";

export default function AboutTiago() {
  return (
    <>
      <div className="bg-stone-950 relative flex flex-col-reverse py-16 lg:pt-0 lg:flex-col lg:pb-0">
        <div className="inset-y-0 top-0 right-0 z-0 w-full max-w-xl px-4 mx-auto md:px-0 lg:pr-0 lg:mb-0 lg:mx-0 lg:w-2/4 lg:max-w-full lg:absolute xl:pb-0">
          <svg
            className="absolute left-0 hidden h-full text-stone-950 transform -translate-x-1/2 lg:block"
            viewBox="0 0 100 100"
            fill="currentColor"
            preserveAspectRatio="none slice"
          >
            <path d="M50 0H100L50 100H0L50 0Z" />
          </svg>
          <Image
            className="object-cover w-full h-56 rounded-xl shadow-lg lg:rounded-none lg:shadow-none md:h-96 lg:h-full"
            alt="Tiago About"
            src={tiago}
            width={600}
            height={720}
          />
        </div>
        <div className="relative flex flex-col items-start w-full max-w-xl px-4 mx-auto md:px-0 lg:px-8 lg:max-w-screen-xl">
          <div className="mb-16 lg:my-24 lg:max-w-lg lg:pr-5">
            <p className="inline-block px-3 py-px mb-4 text-xs font-semibold tracking-wider text-stone-900 uppercase rounded-full bg-white">
              Sobre
            </p>
            <h2 className="mb-5 font-sans text-3xl font-bold tracking-tight text-white sm:text-4xl sm:leading-none">
              Dr. Tiago Lenoir
              <span className="inline-block text-white font-light pt-4">
                OAB/MG 102.238
              </span>
            </h2>
            <p className="pr-5 mb-5 font-semibold text-sm text-white md:text-lg">
              Tiago Lenoir é advogado criminalista com mais de 18 anos de
              experiência na área penal. Professor Universitário. Mestre em
              Direito e especialista em Criminologia pela Universidade de
              Itaúna.
            </p>
            <p className="pr-5 mb-5 font-semibold text-sm text-white md:text-lg">
              Especialista em Criminologia pelo IEC-PUC MINAS. Graduado em
              Direito pela PUC Minas. Auditor do Tribunal de Justiça Desportiva
              da FMF.
            </p>
            <div className="flex items-center mt-4 md:mt-8">
              <ButtonHero />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
