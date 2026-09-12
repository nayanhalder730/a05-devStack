import bannerImg from "../assets/banner-stack.png";

export default function Banner() {
  return (
    <section className="container mx-auto my-4">
      <div className="flex justify-between items-center gap-10 py-20">

  <div className="w-1/2">
    <h2 className="text-4xl font-bold ">
      Build Your Ideal <br />
      <span className="text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-orange-500 via-pink-500 to-purple-600">
        Development Stack
      </span>
    </h2>

    <h4 className="mt-4 text-gray-500 py-3">
      Explore frontend, backend, database, and tooling options, compare
      them side by side, and put together the stack that fits your next
      project.
    </h4>

    <div className="flex gap-4 mt-6">
      <button className="bg-gradient-to-r from-orange-500 via-pink-500 to-purple-600 text-white px-4 py-2 rounded-lg">
        Explore Technologies
      </button>

      <button className="btn btn-outline border-[#cac5c5]">
        Learn More
      </button>
    </div>
  </div>

  <div className="w-1/2 flex justify-center">
    <img
      className="w-[350px]"
      src={bannerImg}
      alt="Development Stack"
    />
  </div>

</div>
    </section>
  );
}