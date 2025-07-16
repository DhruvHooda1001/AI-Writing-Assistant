import { FaPencilAlt, FaRobot } from "react-icons/fa";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <div className="container mx-auto px-4 py-12 bg-gray-100 min-h-screen">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-center mb-8 text-green-600">
          About AI Writing Assistant
        </h1>
        <div className="bg-white shadow-lg rounded-lg p-8 mb-12">
          <p className="text-xl text-gray-700 mb-6">
            The AI Writing Assistant is a state-of-the-art tool crafted to
            enhance your writing experience. Leveraging advanced artificial
            intelligence, it provides a range of features designed to improve
            the quality of your writing, increase productivity, and spark
            creativity.
          </p>
          <p className="text-xl text-gray-700">
            Whether you're a student, a professional writer, or simply looking
            to elevate your writing skills, our AI-powered tools are here to
            guide and support you at every stage.
          </p>
        </div>
        <h2 className="text-3xl font-semibold mb-6 text-center text-gray-800">
          Key Features
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          <FeatureCard
            icon={<FaPencilAlt className="text-green-500" />}
            title="Grammar Correction"
            description="Advanced AI technology automatically identifies and fixes grammar errors, helping you produce writing that is accurate, refined, and professional."
          />
          <FeatureCard
            icon={<FaRobot className="text-green-500" />}
            title="Sentence Rephrasing"
            description="Smart rephrasing suggestions help you enhance clarity, strengthen impact, and add variety to your language."
          />
        </div>
        <div className="bg-green-600 text-white rounded-lg p-8 text-center">
          <h2 className="text-3xl font-bold mb-4">
            Ready to Transform Your Writing?
          </h2>
          <p className="text-xl mb-6">
            Join thousands of satisfied users who have elevated their writing
            with AI Writing Assistant.
          </p>
          <Link
            to="/write"
            className="bg-white text-green-600 px-8 py-3 rounded-full font-bold text-lg hover:bg-green-100 transition duration-300"
          >
            Get Started Now
          </Link>
        </div>
      </div>
    </div>
  );
};

const FeatureCard = ({ icon, title, description }) => (
  <div className="bg-white shadow-lg rounded-lg p-6">
    <div className="flex items-center mb-4">
      <div className="text-3xl mr-4">{icon}</div>
      <h3 className="text-xl font-semibold text-gray-800">{title}</h3>
    </div>
    <p className="text-gray-600">{description}</p>
  </div>
);

export default About;
