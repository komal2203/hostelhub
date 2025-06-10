import { useEffect, useState } from "react";
import LostItemCard from "../components/LostItemCard.jsx";
import LostItemForm from "../components/LostItemForm.jsx";

export default function LostAndFound() {
  const [lostItems, setLostItems] = useState([]);
  const [error, setError] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");
  const [filter, setFilter] = useState("all");

  useEffect(() => {
    fetchLostItems();
  }, []);

  const fetchLostItems = async () => {
    try {
      const response = await fetch("http://localhost:5000/api/lost");
      if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);
      const data = await response.json();
      setLostItems(Array.isArray(data) ? data : []);
    } catch (err) {
      console.error("Failed to fetch lost items:", err);
      setError(err.message);
      setLostItems([]);
    }
  };

  const handleItemSubmit = (newItem) => {
    setLostItems(prev => [newItem, ...prev]);
  };

  const handleMarkFound = (itemId) => {
    setLostItems(prev =>
      prev.map(item =>
        item._id === itemId ? { ...item, found: true } : item
      )
    );
  };

  const filteredItems = lostItems.filter(item => {
    const matchesSearch = item.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesFilter = filter === "all" ||
      (filter === "found" && item.found) ||
      (filter === "lost" && !item.found);
    return matchesSearch && matchesFilter;
  });

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

  // return (
  //   <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-6 py-4">
  //     {/* <div className="text-center mb-12">
  //       <h1 className="text-lg font-bold text-gray-900 sm:text-2xl mb-4">
  //         Lost & Found
  //       </h1>
  //       <p className="text-md text-gray-600 max-w-2xl mx-auto">
  //         Help others find their lost belongings or report your own lost items. Together, we can make our community more connected.
  //       </p>
  //     </div> */}

  //     <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mt-12">
  //       {/* Left column: Form */}
  //       <div className="lg:col-span-1">
  //         <LostItemForm onItemSubmit={handleItemSubmit} />
  //       </div>

  //       {/* Right column: Items list */}
  //       <div className="lg:col-span-2">
  //         {/* Search and filter controls */}
  //         <div className=" rounded-xl  mb-8">
  //           <div className="flex flex-col sm:flex-row gap-4">
  //             <div className="flex-1 bg-white rounded-lg">
  //               <input
  //                 type="text"
  //                 placeholder="Search by title or description..."
  //                 value={searchTerm}
  //                 onChange={(e) => setSearchTerm(e.target.value)}
  //                 className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
  //               />
  //             </div>
  //             <div className="sm:w-48 bg-white rounded-lg">
  //               <select
  //                 value={filter}
  //                 onChange={(e) => setFilter(e.target.value)}
  //                 className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
  //               >
  //                 <option value="all">All Items</option>
  //                 <option value="lost">Lost Items</option>
  //                 <option value="found">Found Items</option>
  //               </select>
  //             </div>
  //           </div>
  //         </div>

  //         {/* Items grid */}
  //         {filteredItems.length === 0 ? (
  //           <div className="bg-white rounded-xl shadow-lg p-8 text-center">
  //             <svg
  //               className="mx-auto h-12 w-12 text-gray-400"
  //               fill="none"
  //               viewBox="0 0 24 24"
  //               stroke="currentColor"
  //             >
  //               <path
  //                 strokeLinecap="round"
  //                 strokeLinejoin="round"
  //                 strokeWidth={2}
  //                 d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
  //               />
  //             </svg>
  //             <h3 className="mt-4 text-lg font-medium text-gray-900">No items found</h3>
  //             <p className="mt-2 text-gray-500">
  //               {searchTerm || filter !== "all"
  //                 ? "Try adjusting your search or filter criteria"
  //                 : "Be the first to report a lost item"}
  //             </p>
  //           </div>
  //         ) : (
  //           <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
  //             {filteredItems.map((item) => (
  //               <LostItemCard
  //                 key={item._id}
  //                 item={item}
  //                 onMarkFound={handleMarkFound}
  //               />
  //             ))}
  //           </div>
  //         )}
  //       </div>

  //     </div>
  //   </div>
  // );
  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-6 py-4">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mt-12">
        {/* Left column: Form */}
        <div className="lg:col-span-1">
          <LostItemForm onItemSubmit={handleItemSubmit} />
        </div>

        {/* Right column: Items list */}
        <div className="lg:col-span-2">
          {/* Search and filter controls */}
          <div className="rounded-xl mb-8">
            <div className="flex flex-col sm:flex-row gap-4">
              <div className="flex-1 bg-white rounded-lg">
                <input
                  type="text"
                  placeholder="Search by title or description..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:outline-none focus:ring-pink-600 focus:border-pink-600 transition-colors"
                />
              </div>
              <div className="sm:w-48 bg-white rounded-lg">
                <select
                  value={filter}
                  onChange={(e) => setFilter(e.target.value)}
                  className="w-full px-4 py-3 text-pink-600 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-pink-600 focus:border-pink-600 transition-colors"
                >

                  <option value="all">All Items</option>
                  <option value="lost">Lost Items</option>
                  <option value="found">Found Items</option>
                </select>
              </div>
            </div>
          </div>

          {/* Items grid */}
          {filteredItems.length === 0 ? (
            <div className="bg-white rounded-xl shadow-lg p-8 text-center">
              <svg
                className="mx-auto h-12 w-12 text-pink-300"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
              <h3 className="mt-4 text-lg font-medium text-pink-700">No items found</h3>
              <p className="mt-2 text-pink-500">
                {searchTerm || filter !== "all"
                  ? "Try adjusting your search or filter criteria"
                  : "Be the first to report a lost item"}
              </p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {filteredItems.map((item) => (
                <LostItemCard
                  key={item._id}
                  item={item}
                  onMarkFound={handleMarkFound}
                />
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );

}