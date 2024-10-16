import { ArrowDown } from "lucide-react";

export const HeroSection = () => {
  return (
    <section className="max-w-screen-xl px-8 py-16 mx-auto min-h-screen font-mono">
      <h1 className="mb-4">salem.</h1>
      <h2 className="mb-8">
        we are <span className="font-eb-garamond font-bold">shy studio</span>, a
        creative design studio/agency that focuses on developer first approach,
        while also trying to be as creative as possible.
      </h2>
      <div className="flex items-center gap-4 ">
        <p>scroll down for more.</p>
        <ArrowDown className="animate-bounce" />
      </div>
    </section>
  );
};
