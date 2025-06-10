import { useState } from 'react';

export default function LostItemCard({ item, onMarkFound }) {
  const [isExpanded, setIsExpanded] = useState(false);

  const handleMarkFound = async () => {
    try {
      const response = await fetch(`http://localhost:5000/api/lost/${item._id}/found`, {
        method: 'PATCH',
        headers: {
          'Authorization': `Bearer ${localStorage.getItem('token')}`
        }
      });

      if (!response.ok) throw new Error('Failed to mark item as found');

      onMarkFound(item._id);
    } catch (error) {
      console.error('Error marking item as found:', error);
      alert('Failed to mark item as found. Please try again.');
    }
  };

  // return (
  //   <div className="bg-white rounded-xl shadow-sm overflow-hidden hover:shadow-xl transition-shadow duration-300">
  //     {item.image && (
  //       <div className="relative aspect-w-16 aspect-h-9">
  //         <img
  //           src={`http://localhost:5000/${item.image}`}
  //           alt={item.title}
  //           className="w-full h-48 object-cover"
  //         />
  //         {item.found && (
  //           <div className="absolute top-4 right-4 bg-green-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
  //             Found
  //           </div>
  //         )}
  //       </div>
  //     )}

  //     <div className="p-6">
  //       <div className="flex justify-between items-start mb-4">
  //         <h3 className="text-xl font-semibold text-gray-900">{item.title}</h3>
  //         {!item.found && (
  //           <button
  //             onClick={handleMarkFound}
  //             className="px-4 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2 transition-colors"
  //           >
  //             Mark Found
  //           </button>
  //         )}
  //       </div>

  //       <p className="text-gray-600 mb-4 line-clamp-3">{item.description}</p>

  //       <div className="space-y-2 text-sm text-gray-500">
  //         <div className="flex items-center">
  //           <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
  //             <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
  //           </svg>
  //           <span>Lost on: {new Date(item.dateLost).toLocaleDateString()}</span>
  //         </div>
  //         <div className="flex items-center">
  //           <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
  //             <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
  //             <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
  //           </svg>
  //           <span>Location: {item.location}</span>
  //         </div>
  //       </div>
  //     </div>
  //   </div>
  // );
  return (
    <div className="bg-white rounded-xl shadow-sm overflow-hidden hover:shadow-xl transition-shadow duration-300">
      {item.image && (
        <div className="relative aspect-w-16 aspect-h-9">
          <img
            src={`http://localhost:5000/${item.image}`}
            alt={item.title}
            className="w-full h-48 object-cover"
          />
          {item.found && (
            <div className="absolute top-4 right-4 bg-pink-600 text-white px-3 py-1 rounded-full text-sm font-semibold">
              Found
            </div>
          )}
        </div>
      )}

      <div className="p-6">
        <div className="flex justify-between items-start mb-4">
          <h3 className="text-xl font-semibold text-gray-900">{item.title}</h3>
          {!item.found && (
            <button
              onClick={handleMarkFound}
              className="px-4 py-2 bg-rose-600 text-white rounded-lg hover:bg-rose-700 focus:outline-none focus:ring-2 focus:ring-rose-500 focus:ring-offset-2 transition-colors"
            >
              Mark Found
            </button>
          )}
        </div>

        <p className="text-gray-600 mb-4 line-clamp-3">{item.description}</p>

        <div className="space-y-2 text-sm text-gray-500">
          <div className="flex items-center">
            <svg className="w-5 h-5 mr-2 text-pink-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
            </svg>
            <span><span className='text-gray-700'>Lost on</span>:  {new Date(item.dateLost).toLocaleDateString()}</span>
          </div>
          <div className="flex items-center">
            <svg className="w-5 h-5 mr-2 text-pink-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
            <span><span className="text-gray-700">Location</span>:  {item.location}</span>
          </div>
        </div>
      </div>
    </div>
  );
}