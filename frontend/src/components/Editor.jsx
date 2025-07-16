import { useState } from "react";
import axios from "axios";
import { FaSyncAlt, FaCheck, FaPencilAlt } from "react-icons/fa";
import { SiGrammarly } from "react-icons/si";
const Editor = () => {
  const [text, setText] = useState("");
  const [selectedSentence, setSelectedSentence] = useState("");
  const [rephrasedSentences, setRephrasedSentences] = useState([]);
  const [correctedSentences, setCorrectedSentences] = useState([]);
  const [grammarCheckedText, setGrammarCheckedText] = useState([]);

  const handleTextChange = (e) => setText(e.target.value);

  const handleSentenceSelection = () => {
    const selection = window.getSelection().toString();
    if (selection) setSelectedSentence(selection);
  };

  const rephraseSentence = async () => {
    try {
      const response = await axios.post(
        "http://localhost:3000/api/rephrasing",
        {
          text: selectedSentence,
        }
      );
      console.log("Rephrasing API response:", response.data);
      console.log("Rephrased sentences:", response.data.rephrased);
      setRephrasedSentences(response.data.rephrased);
    } catch (error) {
      console.error("Error rephrasing sentence:", error);
    }
  };

  const addCorrectedSentence = (sentence) => {
    setCorrectedSentences([...correctedSentences, sentence]);
  };

  const checkGrammar = async () => {
    try {
      const response = await axios.post(
        "http://localhost:3000/api/grammarCheck",
        { text }
      );
      setGrammarCheckedText(response.data.rephrased);
    } catch (error) {
      console.error("Error checking grammar:", error);
    }
  };

  return (
    <div className="container mx-auto px-4 py-8 bg-gray-100 min-h-screen">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="md:col-span-2">
          <div className="bg-white shadow-lg rounded-lg p-6 mb-8 text-center">
            <h2 className="text-2xl font-bold mb-4 text-green-600">
              AI Writing Assistant
            </h2>
            <p className="mb-4 text-gray-600">
              Click The "Check Grammar" Button to Check the grammar of the sentence 
            </p>
            <p className="mb-4 text-gray-600">
              OR
            </p>
            <p className="mb-4 text-gray-600">
              Select the Text you want to "Rephrase"
            </p>
            <textarea
              value={text}
              onChange={handleTextChange}
              onMouseUp={handleSentenceSelection}
              placeholder="Type your text here..."
              rows={10}
              className="w-full p-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none"
            />
            <div className="flex justify-end mt-4 space-x-4 ">
              <Button onClick={checkGrammar} icon={<SiGrammarly />}>
                Check Grammar
              </Button>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {grammarCheckedText.length > 0 && (
              <div className="bg-white shadow-lg rounded-lg p-6">
                <h3 className="text-xl font-semibold mb-4 flex items-center">
                  <SiGrammarly className="text-green-500" />
                  <span className="ml-2">Grammar Checked Text</span>
                </h3>
                {grammarCheckedText.map((sentence, index) => (
                  <div
                    key={index}
                    className="mb-4 pb-4 border-b border-gray-200 last:border-b-0"
                  >
                    <p className="mb-2">{sentence}</p>
                    <Button
                      onClick={() => addCorrectedSentence(sentence)}
                      icon={<FaCheck />}
                    >
                      Accept
                    </Button>
                  </div>
                ))}
              </div>
            )}
          </div>

          {selectedSentence && (
            <div className="bg-white shadow-lg rounded-lg p-6 my-8">
              <h3 className="text-xl font-semibold mb-4 flex items-center">
                <FaPencilAlt className="mr-2 text-green-500" />
                Selected Sentence:
              </h3>
              <p className="mb-4">{selectedSentence}</p>
              <Button onClick={rephraseSentence} icon={<FaSyncAlt />}>
                Rephrase
              </Button>
            </div>
          )}

          {rephrasedSentences.length > 0 && (
            <div className="bg-white shadow-lg rounded-lg p-6 my-8">
              <h3 className="text-xl font-semibold mb-4 flex items-center">
                <FaSyncAlt className="mr-2 text-green-500" />
                Rephrased Sentences: (Count: {rephrasedSentences.length})
              </h3>
              {rephrasedSentences.map((sentence, index) => (
                <div
                  key={index}
                  className="mb-4 pb-4 border-b border-gray-200 last:border-b-0"
                >
                  <p className="mb-2">{sentence}</p>
                  <Button
                    onClick={() => addCorrectedSentence(sentence)}
                    icon={<FaCheck />}
                  >
                    Accept
                  </Button>
                </div>
              ))}
            </div>
          )}
        </div>

        <div className="md:col-span-1">
          <div className="bg-white shadow-lg rounded-lg p-6 sticky top-8">
            <h3 className="text-xl font-semibold mb-4 flex items-center">
              <FaCheck className="mr-2 text-green-500" />
              Corrected Sentences
            </h3>
            <p className="mb-4 text-gray-600">
              Your approved corrections will appear here.
            </p>
            {correctedSentences.length > 0 ? (
              correctedSentences.map((sentence, index) => (
                <div
                  key={index}
                  className="mb-2 pb-2 border-b border-gray-200 last:border-b-0"
                >
                  <p>{sentence}</p>
                </div>
              ))
            ) : (
              <p className="text-gray-500 italic">
                No corrected sentences yet.
              </p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

const Button = ({ onClick, children, icon }) => (
  <button
    onClick={onClick}
    className="bg-green-600 text-white px-4 py-2 rounded-full font-semibold hover:bg-green-700 transition duration-300 flex items-center"
  >
    {icon && <span className="mr-2">{icon}</span>}
    {children}
  </button>
);

export default Editor;
