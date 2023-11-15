import Image from "next/image";

export default function LenoirMidia() {
  const features = [
    {
      imgURL: "/imgblog1.webp",
      title:
        "Advogado de Bruno, ex-goleiro do Flamengo, condenado a 23 anos pelo assassinato de Eliza Samudio, ao assumir defesa da biomédica de Divinópolis diz que morte de paciente foi fatalidade.",
      time: "13 de Maio de 2023",
      desc: "Tiago é o mesmo advogado que defendeu o ex-goleiro do Flamengo que cumpriu uma pena de 23 anos por homicídio e ocultação de cadáver, sequestro e cárcere privado de Eliza Samudio.",
    },
    {
      imgURL: "/imgblog2.webp",
      title:
        "Sobram inconfidências de advogados na embaraçosa defesa de Najila no caso Neymar.",
      time: "14 de Maio de 2023",
      desc: "Mesmo em casos midiáticos, a indiscrição de advogados ao revelar detalhes de processos e contratos soa incomum. Essa é a avaliação de Tiago Lenoir.",
    },
    {
      imgURL: "/imgblog3.webp",
      title: "Defesa de Lorena Marcondes protocola pedido de prisão domiciliar",
      time: "15 de Maio de 2023",
      desc: "O pedido tinha sido feito pelo advogado de defesa Tiago Lenoir Moreira. O alvará de soltura já foi expedido e Lorena deverá deixar o presídio nas próximas horas.",
    },
    {
      imgURL: "/imgblog4.webp",
      title:
        "Mais duas mulheres denunciam padre por assédio sexual em Santa Luzia, na Grande BH",
      time: "16 de Maio de 2023",
      desc: "Segundo o advogado Tiago Lenoir, que representa uma das vítimas, às sextas-feiras o padre dava dinheiro para funcionárias, depois de cometer abusos ao longo da semana.",
    },
  ];

  return (
    <>
      <div className="bg-white">
        <div className="max-w-screen-xl mx-auto px-4 pb-8 md:px-8">
          <div className="mx-auto text-center">
            <div className="space-y-5 max-w-full mx-auto text-center px-4 pt-8">
              <h1 className="uppercase py-4 mb-5 font-sans text-4xl font-bold tracking-tight text-stone-950 sm:text-5xl sm:leading-none">
                Casos de maior repercussão na Mídia
              </h1>
            </div>
          </div>
          <div className="relative mt-6 mb-6">
            <ul className="grid gap-6 sm:grid-cols-2 lg:grid-cols-2">
              {features.map((item, idx) => (
                <li
                  key={idx}
                  className="rounded-2xl shadow-2xl transition hover:shadow-black hover:shadow-2xl hover:transition-all"
                >
                  <article className="overflow-hidden rounded-2xl">
                    <Image
                      alt="Lava"
                      src={item.imgURL}
                      className="h-auto w-full object-cover"
                      width={600}
                      height={600}
                      loading="lazy"
                    />
                    <div className="p-4 sm:p-6">
                      <time
                        dateTime="2022-10-10"
                        className="block text-xs text-gray-500"
                      >
                        {item.time}
                      </time>

                      <h3 className="mt-0.5 text-gray-900 text-sm sm:text-lg">
                        {item.title}
                      </h3>

                      <p className="mt-2 line-clamp-3 text-xs/relaxed text-gray-500">
                        {item.desc}
                      </p>
                    </div>
                  </article>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}
