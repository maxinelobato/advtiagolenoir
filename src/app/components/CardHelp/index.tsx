import ButtonCardHelp from "../Buttons/buttoncardhelp";

export default function CardHelp() {
  return (
    <section className="bg-white">
      <div className="mx-auto max-w-screen-xl px-4 py-12 sm:px-6 md:py-16 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <h1 className="py-4 mb-5 font-sans font-semibold text-4xl tracking-tight text-stone-950 sm:text-5xl sm:leading-none">
            Tenha a ajuda necessária de um Especialista em{" "}
            <span className="font-extrabold">Direito Penal</span>
          </h1>
          <div className="mt-8 sm:mt-12">
            <ButtonCardHelp />
          </div>
        </div>
      </div>
    </section>
  );
}
