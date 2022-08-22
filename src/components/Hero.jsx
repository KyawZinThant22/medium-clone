
const Hero = () => {
  return (
    <div className="mt-24">
      <div className="">
        <h1 className="lg:text-[126px] text-[80px] mb-0 font-bold leading-none">
          Stay curious.
        </h1>
        <p className="text-3xl text-[28px]  mb-12 lg:mt-0 mt-12 ">
          Discover stories, thinking, and expertise{" "}
          <br className="hidden md:block" /> from writers on any topic.
        </p>
        <button
        aria-label="start reading from medium"
          className="bg-black text-white p-3 rounded-full px-12 text-2xl tracking-wide hover:bg-blackLight"
        >
          Start Reading
        </button>
      </div>
    </div>
  );
};

export default Hero;
