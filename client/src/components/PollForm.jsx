import { useState } from "react";

export default function PollForm({ onSubmit }) {
  const [formData, setFormData] = useState({
    question: "",
    options: ["", ""],
    endDate: "",
  });

  const handleChange = (e, index) => {
    const { name, value } = e.target;
    if (name === "option") {
      const newOptions = [...formData.options];
      newOptions[index] = value;
      setFormData((prev) => ({ ...prev, options: newOptions }));
    } else {
      setFormData((prev) => ({ ...prev, [name]: value }));
    }
  };

  const addOption = () => {
    setFormData((prev) => ({
      ...prev,
      options: [...prev.options, ""],
    }));
  };

  const removeOption = (index) => {
    setFormData((prev) => ({
      ...prev,
      options: prev.options.filter((_, i) => i !== index),
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validate question
    if (!formData.question.trim()) {
      alert("Please enter a question");
      return;
    }

    // Validate options
    const validOptions = formData.options.filter((opt) => opt.trim() !== "");
    if (validOptions.length < 2) {
      alert("Please provide at least 2 options");
      return;
    }

    // Validate end date
    if (!formData.endDate) {
      alert("Please select an end date");
      return;
    }

    const endDate = new Date(formData.endDate);
    if (endDate <= new Date()) {
      alert("End date must be in the future");
      return;
    }

    // Format the data before submitting
    const formattedData = {
      question: formData.question.trim(),
      options: validOptions,
      endDate: formData.endDate,
    };

    onSubmit(formattedData);
  };

  // return (
  //   <div className="bg-white rounded-xl shadow-lg p-8">
  //     <h3 className="text-xl font-bold text-gray-800 mb-4">Create New Poll</h3>

  //     <form onSubmit={handleSubmit} className="space-y-5">
  //       <div>
  //         <label className="block text-sm font-semibold text-gray-700 mb-2">
  //           Poll Question
  //         </label>
  //         <input
  //           type="text"
  //           name="question"
  //           value={formData.question}
  //           onChange={handleChange}
  //           required
  //           placeholder="Enter your question..."
  //           className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
  //         />
  //       </div>

  //       <div>
  //         <label className="block text-sm font-semibold text-gray-700 mb-2">
  //           Options
  //         </label>
  //         {formData.options.map((option, index) => (
  //           <div key={index} className="flex gap-2 mb-2">
  //             <input
  //               type="text"
  //               name="option"
  //               value={option}
  //               onChange={(e) => handleChange(e, index)}
  //               required
  //               placeholder={`Option ${index + 1}`}
  //               className="flex-1 px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
  //             />
  //             {formData.options.length > 2 && (
  //               <button
  //                 type="button"
  //                 onClick={() => removeOption(index)}
  //                 className="px-3 py-2 text-red-500 hover:text-red-700"
  //               >
  //                 Remove
  //               </button>
  //             )}
  //           </div>
  //         ))}
  //         <button
  //           type="button"
  //           onClick={addOption}
  //           className="mt-2 text-blue-500 hover:text-blue-700"
  //         >
  //           + Add Option
  //         </button>
  //       </div>

  //       <div>
  //         <label className="block text-sm font-semibold text-gray-700 mb-2">
  //           End Date
  //         </label>
  //         <input
  //           type="datetime-local"
  //           name="endDate"
  //           value={formData.endDate}
  //           onChange={handleChange}
  //           required
  //           className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
  //         />
  //       </div>

  //       <button
  //         type="submit"
  //         className="w-full bg-blue-600 text-white py-3 px-6 rounded-lg font-semibold hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
  //       >
  //         Create Poll
  //       </button>
  //     </form>
  //   </div>
  // );

  return (
    <div className="bg-white rounded-xl shadow-lg p-8">
      <h3 className="text-xl font-bold text-gray-800 mb-6">Create New Poll</h3>

      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-2">
            Poll Question
          </label>
          <input
            type="text"
            name="question"
            value={formData.question}
            onChange={handleChange}
            required
            placeholder="Enter your question..."
            className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-pink-600 focus:border-pink-600 transition-colors"
          />
        </div>

        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-2">
            Options
          </label>
          {formData.options.map((option, index) => (
            <div key={index} className="flex gap-3 mb-3">
              <input
                type="text"
                name="option"
                value={option}
                onChange={(e) => handleChange(e, index)}
                required
                placeholder={`Option ${index + 1}`}
                className="flex-1 px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-pink-600 focus:border-pink-600 transition-colors"
              />
              {formData.options.length > 2 && (
                <button
                  type="button"
                  onClick={() => removeOption(index)}
                  className="px-3 py-2 text-red-500 hover:text-red-700 transition-colors"
                  aria-label={`Remove Option ${index + 1}`}
                >
                  Remove
                </button>
              )}
            </div>
          ))}
          <button
            type="button"
            onClick={addOption}
            className="mt-1 text-pink-600 hover:text-pink-800 font-medium transition-colors"
          >
            + Add Option
          </button>
        </div>

        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-2">
            End Date
          </label>
          <input
            type="datetime-local"
            name="endDate"
            value={formData.endDate}
            onChange={handleChange}
            required
            className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-pink-600 focus:border-pink-600 transition-colors"
          />
        </div>

        <button
          type="submit"
          className="w-full btn-primary-gradient hover:brightness-110 text-white py-3 px-6 rounded-lg font-semibold  focus:outline-none focus:ring-2 focus:ring-pink-600 focus:ring-offset-2 transition-colors"
        >
          Create Poll
        </button>
      </form>
    </div>
  );
}
