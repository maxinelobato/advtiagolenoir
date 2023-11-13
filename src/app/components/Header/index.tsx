import Image from "next/image";
import ButtonHero from "../Buttons/buttonhero";
import lenoir from "/public/lenoir.svg";

export default function Header() {
  return (
    <>
      <section className="relative max-h-[87vh] bg-no-repeat bg-center bg-cover bg-[url(https://img.freepik.com/fotos-gratis/criminoso-algemado_53876-139638.jpg?w=1060&t=st=1699825563~exp=1699826163~hmac=7c8fced5e11338e3387fbf16321ad6dbb9d564fc6988b9586f471a353c3d425f)]">
        <div className="absolute inset-0 bg-stone-950/80"></div>
        <div className="relative mx-auto max-w-screen-xl px-4 py-32 sm:px-6 lg:flex lg:h-screen lg:items-center lg:px-8">
          <div className="max-w-3xl text-center sm:text-left">
            <h1 className="text-3xl text-white font-extrabold sm:text-5xl" style={{ textShadow: "0px 0px 8px #000000" }}>
              Precisa de um Advogado Penal 
              <strong className="block font-extrabold text-stone-300" style={{ textShadow: "0px 0px 8px #000000" }}>
              para Responder à Sua Chamada?
              </strong>
            </h1>

            <p className="mt-4 text-white max-w-lg sm:text-xl/relaxed" style={{ textShadow: "0px 0px 8px #000000" }}>
            18 Anos de Defesa Jurídica <span className="text-yellow-400">Experiente na Área Penal</span>
            </p>
            
            <p className="text-white max-w-lg sm:text-xl/relaxed" style={{ textShadow: "0px 0px 8px #000000" }}>
            Atendimento em <span className="text-yellow-400">Belo Horizonte</span>
            </p>

            <div className="mt-8 flex flex-wrap gap-4 text-center">
              <ButtonHero/>
            </div>

            <div className="pt-16">
              <Image
                className="self-end w-48 md:w-auto lg:w-60"
                src={lenoir}
                sizes="100vw"
                alt="Logo Lenoir"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
