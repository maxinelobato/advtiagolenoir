import Image from "next/image";
import ButtonHero from "../Buttons/buttonhero";
import lenoir from "/public/lenoir.svg";

export default function Header() {
  return (
    <>
      {/* <section className="hero min-h-[85vh] bg-no-repeat bg-center bg-cover bg-[url(https://img.freepik.com/fotos-gratis/vista-superior-bonito-conceito-de-familia-arranjo_23-2148485826.jpg?w=740&t=st=1699645401~exp=1699646001~hmac=7023570bcc50b3c192ba16d8258dbd757b4d4f532602c7d218cc359dae79a0bf)] sm:bg-[url(https://img.freepik.com/fotos-gratis/silhueta-de-familia-feliz-na-sunset_1303-22466.jpg?w=1060&t=st=1699645478~exp=1699646078~hmac=32459f080dfcba73cd84aa1855f089aca0a4da0a14e02c7bd620926fa1de241f)] sm:bg-cover md:bg-[url(https://img.freepik.com/fotos-gratis/silhueta-de-familia-feliz-na-sunset_1303-22466.jpg?w=1060&t=st=1699645478~exp=1699646078~hmac=32459f080dfcba73cd84aa1855f089aca0a4da0a14e02c7bd620926fa1de241f)] md:bg-cover lg:bg-[url(https://img.freepik.com/fotos-gratis/silhueta-de-familia-feliz-na-sunset_1303-22466.jpg?w=1060&t=st=1699645478~exp=1699646078~hmac=32459f080dfcba73cd84aa1855f089aca0a4da0a14e02c7bd620926fa1de241f)] lg:bg-cover">
        <div className="hero-overlay bg-gradient-to-r from-teal-950 to-transparent"></div>
          <div className="max-w-screen-2xl text-center">
            <h1
              className="mb-6 text-3xl sm:text-5xl font-bold text-white uppercase"
              style={{ textShadow: "0px 0px 8px #000000" }}
            >
              precisa de uma advogada de família?
            </h1>
            <p
              className="text-sm sm:text-2xl text-white"
              style={{ textShadow: "0px 0px 8px #000000" }}
            >
              Protegendo seu futuro familiar com{" "}
              <span className="text-stone-400">
                experiência jurídica especializada!
              </span>
            </p>
            <p
              className="mb-8 text-sm sm:text-2xl text-white"
              style={{ textShadow: "0px 0px 10px #000000" }}
            >
              Atendimento em{" "}
              <span className="text-stone-400">Belo Horizonte</span>
            </p>
            <ButtonHero />
            <div className="mt-16">
              <Image
                className="self-end w-48 mx-auto md:w-auto lg:w-72"
                src={lenoir}
                sizes="100vw"
                alt="Logo Lenoir"
              />
            </div>
          </div>
      </section> */}
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
