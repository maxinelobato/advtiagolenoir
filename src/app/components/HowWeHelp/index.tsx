import Image from "next/image";
import ButtonSpecialts from "../Buttons/buttonspecialts";

export default function HowWeHelp() {
  const features = [
    {
      imgURL: "/imgcard1.webp",
      title: "Defesa em Ação Penal",
    },
    {
      imgURL: "/imgcard8.webp",
      title: "Tribunal do Júri",
    },
    {
      imgURL: "/imgcard2.webp",
      title: "Atuação em Inquérito Policial",
    },
    {
      imgURL: "/imgcard3.webp",
      title: "Pedido de Liberdade",
    },
    {
      imgURL: "/imgcard4.webp",
      title: "Habeas Corpus",
    },
    {
      imgURL: "/imgcard5.webp",
      title: "Audiência de Custódia",
    },
    {
      imgURL: "/imgcard6.webp",
      title: "Prisão em Flagrante",
    },
    {
      imgURL: "/imgcard7.webp",
      title: "Progressão de Regime Carcerário",
    },
    {
      imgURL: "/imgcard9.webp",
      title: "Assistência à Acusação",
    },
    {
      imgURL: "/imgcard10.webp",
      title: "Recursos aos Tribunais Superiores",
    },
  ];

  return (
    <>
      <div className="bg-white">
        <div className="max-w-screen-xl mx-auto px-4 pb-8 md:px-8">
          <div className="mx-auto text-center">
            <div className="space-y-5 max-w-full mx-auto text-center px-4 pt-8">
              <h1 className="uppercase py-4 mb-5 font-sans text-4xl font-bold tracking-tight text-stone-950 sm:text-5xl sm:leading-none">
                quais serviços você precisa?
              </h1>
            </div>
          </div>
          <div className="relative mt-6">
            <ul className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {features.map((item, idx) => (
                <li key={idx}>
                  <div className="card w-auto rounded-xl shadow-2xl shadow-black/50 hover:ring-2 hover:ring-offset-1 hover:ring-stone-800 hover:transition-all">
                    <figure>
                      <Image
                        alt="Card"
                        src={item.imgURL}
                        className="h-56 w-full rounded-xl object-cover shadow-2xl transition hover:grayscale-[100%]"
                        width={300}
                        height={300}
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        loading="lazy"
                      />
                    </figure>
                    <div className="card-body items-center text-center">
                      <h1 className="card-title uppercase text-stone-950 font-extrabold">
                        {item.title}
                      </h1>
                      <div className="card-actions justify-center pt-4">
                        <ButtonSpecialts />
                      </div>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}
