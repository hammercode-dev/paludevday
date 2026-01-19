const HeroTitle = () => {
  return (
    <div className="flex flex-col-reverse items-center justify-between gap-4 md:flex-row md:items-start md:gap-0">
      <div className="flex w-full flex-col items-center justify-center gap-4 md:gap-2">
        <h1 className="gradient-text inline-block text-center text-3xl font-bold md:h-14 md:text-left md:text-4xl">
          Palu Developer Day 2024
        </h1>
        <h2 className="mb-6 text-center text-lg font-semibold text-blue-100 md:mb-8 md:text-left md:text-5xl md:leading-17.5">
          Driving Technological Advancements:
          <br />
          AI-Powered IT from Concept to Reality
        </h2>
      </div>
    </div>
  );
};

export default HeroTitle;
