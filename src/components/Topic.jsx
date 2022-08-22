import { Slider } from "./slider";

const topics = [
  {
    topic: "Coding",
  },
  {
    topic: "Digital Life",
  },
  {
    topic: "Productivity",
  },
  {
    topic: "Programming",
  },
  {
    topic: "LifeStyle",
  },
  {
    topic: "Other",
  },
];

const Topic = () => {
  return (
    <div className=" w-full gap-12 flex mt-12 lg:mt-0  items-center">
        <p className="uppercase text-gray-500 ">Your Topics</p>
      <Slider data={topics} />
    </div>
  );
};

export default Topic;
