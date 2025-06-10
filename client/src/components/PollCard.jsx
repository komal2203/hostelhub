import { useState } from "react";

export default function PollCard({ poll, onVote, onDelete }) {
  const [selectedOption, setSelectedOption] = useState(null);
  const [hasVoted, setHasVoted] = useState(false);
  const [isVoting, setIsVoting] = useState(false);
  const [isDeleting, setIsDeleting] = useState(false);

  const totalVotes = poll.options.reduce(
    (sum, option) => sum + option.votes,
    0
  );

  const handleVote = async () => {
    if (selectedOption === null) return;

    try {
      setIsVoting(true);
      await onVote(poll._id, selectedOption);
      setHasVoted(true);
    } catch (error) {
      console.error("Error in PollCard handleVote:", error);
    } finally {
      setIsVoting(false);
    }
  };

  const handleDelete = async () => {
    if (isDeleting) return;
    
    if (!window.confirm("Are you sure you want to delete this poll?")) {
      return;
    }

    try {
      setIsDeleting(true);
      await onDelete(poll._id);
    } catch (error) {
      console.error("Error deleting poll:", error);
      alert(error.message || "Failed to delete poll");
    } finally {
      setIsDeleting(false);
    }
  };

  const isPollEnded = new Date() > new Date(poll.endDate);

  // return (
  //   <div className="bg-white rounded-xl shadow-lg p-6">
  //     <div className="flex justify-between items-start mb-4">
  //       <h3 className="text-lg font-semibold text-gray-900">{poll.question}</h3>
  //       {onDelete && (
  //         <button
  //           onClick={() => onDelete(poll._id)}
  //           className="text-red-400 py-2 px-2 text-sm border-1 border-red-400 hover:text-white hover:bg-red-500 rounded-xl"
  //         >
  //           Delete
  //         </button>
  //       )}
  //     </div>

  //     <div className="space-y-4">
  //       {poll.options.map((option, index) => {
  //         const percentage =
  //           totalVotes > 0 ? (option.votes / totalVotes) * 100 : 0;

  //         return (
  //           <div key={index} className="space-y-2">
  //             <div className="flex items-center">
  //               <input
  //                 type="radio"
  //                 name={`poll-${poll._id}`}
  //                 checked={selectedOption === index}
  //                 onChange={() => setSelectedOption(index)}
  //                 disabled={hasVoted || isPollEnded || isVoting}
  //                 className="h-4 w-4 text-blue-600 focus:ring-blue-500"
  //               />
  //               <label className="ml-3 text-gray-700">
  //                 {option.optionText}
  //               </label>
  //             </div>

  //             {hasVoted && (
  //               <div className="relative pt-1">
  //                 <div className="overflow-hidden h-2 text-xs flex rounded bg-gray-200">
  //                   <div
  //                     style={{ width: `${percentage}%` }}
  //                     className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-blue-500"
  //                   />
  //                 </div>
  //                 <div className="text-right">
  //                   <span className="text-sm font-semibold inline-block text-blue-600">
  //                     {percentage.toFixed(1)}%
  //                   </span>
  //                 </div>
  //               </div>
  //             )}
  //           </div>
  //         );
  //       })}
  //     </div>

  //     <div className="mt-6 flex justify-between items-center">
  //       <div className="text-sm text-gray-500">
  //         {isPollEnded ? (
  //           <span className="text-red-500">Poll ended</span>
  //         ) : (
  //           <span>Ends: {new Date(poll.endDate).toLocaleString()}</span>
  //         )}
  //       </div>

  //       {!hasVoted && !isPollEnded && (
  //         <button
  //           onClick={handleVote}
  //           disabled={selectedOption === null || isVoting}
  //           className="px-4 py-2 bg-blue-600 text-white rounded-xl hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed"
  //         >
  //           {isVoting ? "Voting..." : "Vote"}
  //         </button>
  //       )}
  //     </div>

  //     <div className="mt-4 text-sm text-gray-500">
  //       Total votes: {totalVotes}
  //     </div>
  //   </div>
  // );
  return (
    <div className="bg-white rounded-xl shadow-lg p-6">
      <div className="flex justify-between items-start mb-4">
        <h3 className="text-lg font-semibold text-gray-900">{poll.question}</h3>
        {onDelete && (
          <button
            onClick={handleDelete}
            className="text-red-400 py-2 px-2 text-sm border border-red-400 hover:text-white hover:bg-red-500 rounded-xl transition-colors"
            aria-label="Delete poll"
          >
            Delete
          </button>
        )}
      </div>

      <div className="space-y-4">
        {poll.options.map((option, index) => {
          const percentage =
            totalVotes > 0 ? (option.votes / totalVotes) * 100 : 0;

          return (
            <div key={index} className="space-y-2">
              <div className="flex items-center">
                <input
                  type="radio"
                  name={`poll-${poll._id}`}
                  checked={selectedOption === index}
                  onChange={() => setSelectedOption(index)}
                  disabled={hasVoted || isPollEnded || isVoting}
                  className="h-4 w-4 text-pink-600 focus:ring-pink-500"
                />
                <label className="ml-3 text-gray-700 cursor-pointer">
                  {option.optionText}
                </label>
              </div>

              {hasVoted && (
                <div className="relative pt-1">
                  <div className="overflow-hidden h-2 text-xs flex rounded bg-gray-200">
                    <div
                      style={{ width: `${percentage}%` }}
                      className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-pink-500"
                    />
                  </div>
                  <div className="text-right">
                    <span className="text-sm font-semibold inline-block text-pink-600">
                      {percentage.toFixed(1)}%
                    </span>
                  </div>
                </div>
              )}
            </div>
          );
        })}
      </div>

      <div className="mt-6 flex justify-between items-center">
        <div className="text-sm text-gray-500">
          {isPollEnded ? (
            <span className="text-red-500 font-semibold">Poll ended</span>
          ) : (
            <span>Ends: {new Date(poll.endDate).toLocaleString()}</span>
          )}
        </div>

        {!hasVoted && !isPollEnded && (
          <button
            onClick={handleVote}
            disabled={selectedOption === null || isVoting}
            className="px-4 py-2 btn-primary-gradient hover:brightness-110 text-white rounded-xl  focus:outline-none focus:ring-2 focus:ring-pink-500 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
          >
            {isVoting ? "Voting..." : "Vote"}
          </button>
        )}
      </div>

      <div className="mt-4 text-sm text-gray-500">
        Total votes: {totalVotes}
      </div>
    </div>
  );
}
