import React from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../store/store";
import { useSubmitAnswersMutation } from "../../store/api/saveAnswers";

interface SummaryProps {
  title: string;
}

const Summary: React.FC<SummaryProps> = ({ title }) => {
  const [submitAnswers] = useSubmitAnswersMutation();
  const answers = useSelector((state: RootState) => state.answers.answers);

  const handleSubmit = async () => {
    try {
      const response = await submitAnswers(answers).unwrap();
      alert("Data Successfully Submited");
      window.location.reload();
      console.log("Submitted data:", response);
    } catch (error) {
      console.error("Failed to submit data:", error);
    }
  };

  return (
    <div className="text-center p-8 bg-white shadow-lg rounded-lg animate-slide-in-left">
      <h2 className="text-3xl font-bold mb-6">{title}</h2>
      <div className="space-y-4">
        {answers &&
          answers.map((ans, index) => (
            <div key={index} className="mb-4">
              <div className="text-lg">
                <span className="font-semibold">Q{index + 1}:</span>{" "}
                {ans.question}
              </div>
              <div className="text-gray-700">
                <span className="font-semibold">A:</span> {ans.answer.icon}{" "}
                <span>{ans.answer.label}</span>
              </div>
            </div>
          ))}
      </div>
      <button
        className="mt-6 bg-green-500 hover:bg-green-600 text-white font-semibold px-6 py-3 rounded-lg shadow-md"
        onClick={handleSubmit}
      >
        Submit
      </button>
    </div>
  );
};

export default Summary;
