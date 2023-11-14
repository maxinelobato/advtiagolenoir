import Image from "next/image";
import ButtonSpecialts from "../Buttons/buttonspecialts";
import imgcard1 from "/public/imgcard1.webp";
import imgcard2 from "/public/imgcard2.webp";
import imgcard3 from "/public/imgcard3.webp";
import imgcard4 from "/public/imgcard4.webp";
import imgcard5 from "/public/imgcard5.webp";
import imgcard6 from "/public/imgcard6.webp";
import imgcard7 from "/public/imgcard7.webp";
import imgcard8 from "/public/imgcard8.webp";
import imgcard9 from "/public/imgcard9.webp";
import imgcard10 from "/public/imgcard10.webp";

export default function HowWeHelp() {
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
            <ul className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              <li className="rounded-xl shadow-2xl shadow-black/50 hover:ring-2 hover:ring-offset-1 hover:ring-stone-800 hover:transition-all">
                <div className="flex items-center justify-center">
                  <Image
                    alt="Lava"
                    src={imgcard1}
                    className="h-56 w-full rounded-xl object-cover shadow-2xl transition hover:grayscale-[100%]"
                    width={300}
                    height={300}
                  />
                </div>
                <div className="p-4">
                  <a href="#">
                    <h3 className="text-2xl font-bold text-center text-gray-900">
                      Defesa em Ação Penal
                    </h3>
                  </a>
                </div>
                <div className="flex items-center justify-center">
                  <div className="pt-4 pb-4">
                    <ButtonSpecialts />
                  </div>
                </div>
              </li>
              <li className="rounded-xl shadow-2xl shadow-black/50 hover:ring-2 hover:ring-offset-1 hover:ring-stone-800 hover:transition-all">
                <div className="flex items-center justify-center">
                  <Image
                    alt="Lava"
                    src={imgcard8}
                    className="h-56 w-full rounded-xl object-cover shadow-2xl transition hover:grayscale-[100%]"
                    width={300}
                    height={300}
                  />
                </div>
                <div className="p-4">
                  <a href="#">
                    <h3 className="text-2xl font-bold text-center text-gray-900">
                      Tribunal do Júri
                    </h3>
                  </a>
                </div>
                <div className="flex items-center justify-center">
                  <div className="pt-4 pb-4">
                    <ButtonSpecialts />
                  </div>
                </div>
              </li>
              <li className="rounded-xl shadow-2xl shadow-black/50 hover:ring-2 hover:ring-offset-1 hover:ring-stone-800 hover:transition-all">
                <div className="flex items-center justify-center">
                  <Image
                    alt="Lava"
                    src={imgcard2}
                    className="h-56 w-full rounded-xl object-cover shadow-xl transition hover:grayscale-[100%]"
                    width={300}
                    height={300}
                  />
                </div>
                <div className="p-4">
                  <a href="#">
                    <h3 className="text-2xl font-bold text-center text-gray-900">
                      Atuação em Inquérito Policial
                    </h3>
                  </a>
                </div>
                <div className="flex items-center justify-center">
                  <div className="pt-4 pb-4">
                    <ButtonSpecialts />
                  </div>
                </div>
              </li>
              <li className="rounded-xl shadow-2xl shadow-black/50 hover:ring-2 hover:ring-offset-1 hover:ring-stone-800 hover:transition-all">
                <div className="flex items-center justify-center">
                  <Image
                    alt="Lava"
                    src={imgcard3}
                    className="h-56 w-full rounded-xl object-cover shadow-xl transition hover:grayscale-[100%]"
                    width={300}
                    height={300}
                  />
                </div>
                <div className="p-4">
                  <a href="#">
                    <h3 className="text-2xl font-bold text-center text-gray-900">
                      Pedido de Liberdade
                    </h3>
                  </a>
                </div>
                <div className="flex items-center justify-center">
                  <div className="pt-4 pb-4">
                    <ButtonSpecialts />
                  </div>
                </div>
              </li>
              <li className="rounded-xl shadow-2xl shadow-black/50 hover:ring-2 hover:ring-offset-1 hover:ring-stone-800 hover:transition-all">
                <div className="flex items-center justify-center">
                  <Image
                    alt="Lava"
                    src={imgcard4}
                    className="h-56 w-full rounded-xl object-cover shadow-xl transition hover:grayscale-[100%]"
                    width={300}
                    height={300}
                  />
                </div>
                <div className="p-4">
                  <a href="#">
                    <h3 className="text-2xl font-bold text-center text-gray-900">
                      Habeas Corpus
                    </h3>
                  </a>
                </div>
                <div className="flex items-center justify-center">
                  <div className="pt-4 pb-4">
                    <ButtonSpecialts />
                  </div>
                </div>
              </li>
              <li className="rounded-xl shadow-2xl shadow-black/50 hover:ring-2 hover:ring-offset-1 hover:ring-stone-800 hover:transition-all">
                <div className="flex items-center justify-center">
                  <Image
                    alt="Lava"
                    src={imgcard5}
                    className="h-56 w-full rounded-xl object-cover shadow-xl transition hover:grayscale-[100%]"
                    width={300}
                    height={300}
                  />
                </div>
                <div className="p-4">
                  <a href="#">
                    <h3 className="text-2xl font-bold text-center text-gray-900">
                      Audiência de Custódia
                    </h3>
                  </a>
                </div>
                <div className="flex items-center justify-center">
                  <div className="pt-4 pb-4">
                    <ButtonSpecialts />
                  </div>
                </div>
              </li>
              <li className="rounded-xl shadow-2xl shadow-black/50 hover:ring-2 hover:ring-offset-1 hover:ring-stone-800 hover:transition-all">
                <div className="flex items-center justify-center">
                  <Image
                    alt="Lava"
                    src={imgcard6}
                    className="h-56 w-full rounded-xl object-cover shadow-xl transition hover:grayscale-[100%]"
                    width={300}
                    height={300}
                  />
                </div>
                <div className="p-4">
                  <a href="#">
                    <h3 className="text-2xl font-bold text-center text-gray-900">
                      Prisão em Flagrante
                    </h3>
                  </a>
                </div>
                <div className="flex items-center justify-center">
                  <div className="pt-4 pb-4">
                    <ButtonSpecialts />
                  </div>
                </div>
              </li>
              <li className="rounded-xl shadow-2xl shadow-black/50 hover:ring-2 hover:ring-offset-1 hover:ring-stone-800 hover:transition-all">
                <div className="flex items-center justify-center">
                  <Image
                    alt="Lava"
                    src={imgcard7}
                    className="h-56 w-full rounded-xl object-cover shadow-xl transition hover:grayscale-[100%]"
                    width={300}
                    height={300}
                  />
                </div>
                <div className="p-4">
                  <a href="#">
                    <h3 className="text-2xl font-bold text-center text-gray-900">
                      Progressão de Regime Carcerário
                    </h3>
                  </a>
                </div>
                <div className="flex items-center justify-center">
                  <div className="pt-4 pb-4">
                    <ButtonSpecialts />
                  </div>
                </div>
              </li>
              <li className="rounded-xl shadow-2xl shadow-black/50 hover:ring-2 hover:ring-offset-1 hover:ring-stone-800 hover:transition-all">
                <div className="flex items-center justify-center">
                  <Image
                    alt="Lava"
                    src={imgcard9}
                    className="h-56 w-full rounded-xl object-cover shadow-xl transition hover:grayscale-[100%]"
                    width={300}
                    height={300}
                  />
                </div>
                <div className="p-4">
                  <a href="#">
                    <h3 className="text-2xl font-bold text-center text-gray-900">
                      Assistência à Acusação
                    </h3>
                  </a>
                </div>
                <div className="flex items-center justify-center">
                  <div className="pt-4 pb-4">
                    <ButtonSpecialts />
                  </div>
                </div>
              </li>
              <li className="rounded-xl shadow-2xl shadow-black/50 hover:ring-2 hover:ring-offset-1 hover:ring-stone-800 hover:transition-all">
                <div className="flex items-center justify-center">
                  <Image
                    alt="Lava"
                    src={imgcard10}
                    className="h-56 w-full rounded-xl object-cover shadow-xl transition hover:grayscale-[100%]"
                    width={300}
                    height={300}
                  />
                </div>
                <div className="p-4">
                  <a href="#">
                    <h3 className="text-2xl font-bold text-center text-gray-900">
                      Recursos aos Tribunais Superiores
                    </h3>
                  </a>
                </div>
                <div className="flex items-center justify-center">
                  <div className="pt-4 pb-4">
                    <ButtonSpecialts />
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}
