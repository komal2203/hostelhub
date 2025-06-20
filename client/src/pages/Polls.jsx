import { useEffect, useState } from "react";
import PollForm from "../components/PollForm.jsx";
import PollCard from "../components/PollCard.jsx";

export default function Polls() {
  const [polls, setPolls] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchPolls();
  }, []);

  const fetchPolls = async () => {
    try {
      const response = await fetch(`${import.meta.env.VITE_BACKEND_URI}/api/polls`);
      if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);
      const data = await response.json();
      setPolls(data);
    } catch (err) {
      console.error("Failed to fetch polls:", err);
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  const handleCreatePoll = async (pollData) => {
    try {
      console.log("Submitting poll data:", pollData);

      const token = localStorage.getItem("token");
      if (!token) {
        throw new Error("No authentication token found");
      }

      // Format the data properly with optionText instead of text
      const formattedData = {
        question: pollData.question,
        options: pollData.options
          .filter(opt => opt.trim() !== '')
          .map(opt => ({
            optionText: opt.trim(),  // Changed from 'text' to 'optionText'
            votes: 0
          })),
        endDate: new Date(pollData.endDate).toISOString()
      };

      console.log("Formatted data:", formattedData);

      const response = await fetch(`${import.meta.env.VITE_BACKEND_URI}/api/polls`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Authorization": `Bearer ${token}`
        },
        body: JSON.stringify(formattedData)
      });

      console.log("Server response status:", response.status);

      if (!response.ok) {
        const errorData = await response.json();
        console.error("Server error response:", errorData);
        throw new Error(errorData.message || "Failed to create poll");
      }

      const newPoll = await response.json();
      console.log("Successfully created poll:", newPoll);

      setPolls(prev => [newPoll, ...prev]);
    } catch (err) {
      console.error("Error creating poll:", err);
      alert(`Failed to create poll: ${err.message}`);
    }
  };

  const handleVote = async (pollId, optionIndex) => {
    try {
      console.log("Voting on poll:", { pollId, optionIndex });

      const token = localStorage.getItem("token");
      if (!token) {
        throw new Error("No authentication token found");
      }

      const response = await fetch(`${import.meta.env.VITE_BACKEND_URI}/api/polls/${pollId}/vote`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Authorization": `Bearer ${token}`
        },
        body: JSON.stringify({ optionIndex })
      });

      console.log("Vote response status:", response.status);

      if (!response.ok) {
        const errorData = await response.json();
        console.error("Server error response:", errorData);
        throw new Error(errorData.message || "Failed to vote");
      }

      const updatedPoll = await response.json();
      console.log("Successfully voted:", updatedPoll);

      setPolls(prev => prev.map(poll =>
        poll._id === pollId ? updatedPoll : poll
      ));
    } catch (err) {
      console.error("Error voting:", err);
      alert(`Failed to vote: ${err.message}`);
    }
  };

  const handleDeletePoll = async (pollId) => {
    try {
      const token = localStorage.getItem("token");
      if (!token) {
        throw new Error("No authentication token found");
      }

      console.log("Attempting to delete poll:", pollId); // Add this for debugging

      const response = await fetch(`${import.meta.env.VITE_BACKEND_URI}/api/polls/${pollId}`, {
        method: "DELETE",
        headers: {
          "Authorization": `Bearer ${token}`,
          "Content-Type": "application/json"
        }
      });

      const data = await response.json();
      console.log("Delete response:", data); // Add this for debugging

      if (!response.ok) {
        throw new Error(data.message || "Failed to delete poll");
      }

      // Remove the deleted poll from the state
      setPolls(prev => prev.filter(poll => poll._id !== pollId));
    } catch (err) {
      console.error("Error deleting poll:", err);
      throw err;
    }
  };

  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-500"></div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="max-w-7xl mx-auto p-8">
        <div className="bg-red-50 border-l-4 border-red-500 p-4 rounded">
          <h2 className="text-2xl font-bold text-red-700 mb-2">Error</h2>
          <p className="text-red-600">{error}</p>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 mt-14 py-6">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-1">
          <PollForm onSubmit={handleCreatePoll} />
        </div>

        <div className="lg:col-span-2">
          {polls.length === 0 ? (
            <div className="bg-white rounded-xl shadow-md p-8 text-center">
              <svg
                className="mx-auto h-12 w-12 text-gray-400"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"
                />
              </svg>
              <h3 className="mt-4 text-lg font-semibold text-gray-900">
                No polls yet
              </h3>
              <p className="mt-2 text-gray-500">
                Be the first to create a poll!
              </p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {polls.map((poll) => (
                <PollCard
                  key={poll._id}
                  poll={poll}
                  onVote={handleVote}
                  onDelete={handleDeletePoll}
                />
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}