import { Link } from "react-router-dom";
const Home = () => {
  return (
    <div className="flex flex-col ">
      <main className="flex-1">
        <section className=" bg-gradient-to-r from-green-500 to-green-700 text-white py-20 px-6">
          <div className="container mx-auto flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 w-full flex justify-center items-center">
              <img
                src="https://static-web.grammarly.com/1e6ajr2k4140/6nUUJHAIoXlJUu1ErZmTlX/ca1aeaaabc9d53e2df44e0bca5fd5906/Image__6_.png?w=1248"
                alt="AI_IMG"
                className="max-w-3xl w-full h-auto object-contain"
              />
            </div>
            <div className="md:w-1/2 mb-10 md:mb-0">
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                Enhance Your Writing with the Power of AI
              </h2>
              <p className="text-xl mb-8">
               Harness the power of artificial intelligence to refine your grammar, correct spelling mistakes, and elevate your writing style.
              </p>
              <Link
                to="/write"
                className="bg-white text-black px-8 py-3 rounded-full font-bold text-lg hover:bg-green-100 transition duration-300"
              >
                Start Writing Now
              </Link>
            </div>

          </div>
        </section>
      </main>

      <footer className="bg-gray-800 text-white py-8 h-30 ">
      </footer>
    </div>
  );
};

export default Home;
