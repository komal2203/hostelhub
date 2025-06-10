import { useState } from 'react';

export default function LostItemForm({ onItemSubmit }) {
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    dateLost: '',
    location: '',
    image: null
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    const formDataToSend = new FormData();
    Object.keys(formData).forEach(key => {
      formDataToSend.append(key, formData[key]);
    });

    try {
      const response = await fetch('http://localhost:5000/api/lost', {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${localStorage.getItem('token')}`
        },
        body: formDataToSend
      });

      if (!response.ok) throw new Error('Failed to submit item');
      
      const data = await response.json();
      onItemSubmit(data);
      setFormData({
        title: '',
        description: '',
        dateLost: '',
        location: '',
        image: null
      });
    } catch (error) {
      console.error('Error submitting lost item:', error);
      alert('Failed to submit lost item. Please try again.');
    }
  };

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: files ? files[0] : value
    }));
  };

  // return (
  //   <div className="bg-white rounded-xl shadow-sm p-4">
  //     {/* <div className="mb-8">
  //       <h3 className="text-md font-bold text-gray-800 mb-2">Report Lost Item</h3>
  //       <p className="text-gray-600 text-sm">Help others find your lost belongings by providing details below.</p>
  //     </div> */}
      
  //     <form onSubmit={handleSubmit} className="space-y-3">
  //       <div className="space-y-2">
  //         <div className='text-lg font-semibold'>Report Lost Item</div>
  //         <label className="block text-sm font-semibold text-gray-700">Item Title</label>
  //         <input
  //           type="text"
  //           name="title"
  //           value={formData.title}
  //           onChange={handleChange}
  //           required
  //           placeholder="e.g., Black Laptop Bag"
  //           className="w-full text-sm px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
  //         />
  //       </div>

  //       <div className="space-y-2">
  //         <label className="block text-sm font-semibold text-gray-700">Description</label>
  //         <textarea
  //           name="description"
  //           value={formData.description}
  //           onChange={handleChange}
  //           required
  //           placeholder="Describe your item in detail..."
  //           rows="2"
  //           className="w-full text-sm px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors resize-none"
  //         />
  //       </div>

  //       <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
  //         <div className="space-y-2">
  //           <label className="block text-sm font-semibold text-gray-700">Date Lost</label>
  //           <input
  //             type="date"
  //             name="dateLost"
  //             value={formData.dateLost}
  //             onChange={handleChange}
  //             required
  //             className="w-full text-sm px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
  //           />
  //         </div>

  //         <div className="space-y-2">
  //           <label className="block text-sm font-semibold text-gray-700">Location</label>
  //           <input
  //             type="text"
  //             name="location"
  //             value={formData.location}
  //             onChange={handleChange}
  //             required
  //             placeholder="e.g., Main Library, Room 101"
  //             className="w-full text-sm px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
  //           />
  //         </div>
  //       </div>

  //       <div className="space-y-2">
  //         <label className="block text-sm font-semibold text-gray-700">Item Image</label>
  //         <div className="mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-lg hover:border-blue-500 transition-colors">
  //           <div className="space-y-1 text-center">
  //             <svg
  //               className="mx-auto text-sm h-6 w-6 text-gray-400"
  //               stroke="currentColor"
  //               fill="none"
  //               viewBox="0 0 48 48"
  //               aria-hidden="true"
  //             >
  //               <path
  //                 d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02"
  //                 strokeWidth={2}
  //                 strokeLinecap="round"
  //                 strokeLinejoin="round"
  //               />
  //             </svg>
  //             <div className="flex text-sm text-gray-600">
  //               <label
  //                 htmlFor="file-upload"
  //                 className="relative cursor-pointer bg-white rounded-md font-medium text-blue-600 hover:text-blue-500 focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-blue-500"
  //               >
  //                 <span className='text-sm'>Upload a file</span>
  //                 <input
  //                   id="file-upload"
  //                   name="image"
  //                   type="file"
  //                   onChange={handleChange}
  //                   accept="image/*"
  //                   className="sr-only"
  //                 />
  //               </label>
  //               <p className="pl-1 text-sm">or drag and drop</p>
  //             </div>
  //             <p className="text-xs text-gray-500">PNG, JPG, GIF up to 5MB</p>
  //           </div>
  //         </div>
  //       </div>

  //       <button
  //         type="submit"
  //         className="w-full text-sm bg-blue-600 text-white py-2 px-5 rounded-lg font-semibold hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-colors"
  //       >
  //         Submit Lost Item
  //       </button>
  //     </form>
  //   </div>
  // );

  return (
    <div className="bg-white rounded-xl  shadow-sm p-4">
      {/* <div className="mb-8">
        <h3 className="text-md font-bold text-pink-800 mb-2">Report Lost Item</h3>
        <p className="text-pink-600 text-sm">Help others find your lost belongings by providing details below.</p>
      </div> */}
      
      <form onSubmit={handleSubmit} className="space-y-3">
        <div className="space-y-2">
          <div className="text-lg font-semibold text-pink-800">Report Lost Item</div>
          <label className="block text-sm font-semibold text-pink-700">Item Title</label>
          <input
            type="text"
            name="title"
            value={formData.title}
            onChange={handleChange}
            required
            placeholder="e.g., Black Laptop Bag"
            className="w-full text-sm px-4 py-3 rounded-lg focus:outline-none border border-pink-300 focus:ring-2 focus:ring-pink-500 focus:border-pink-500 transition-colors"
          />
        </div>
  
        <div className="space-y-2">
          <label className="block text-sm font-semibold text-pink-700">Description</label>
          <textarea
            name="description"
            value={formData.description}
            onChange={handleChange}
            required
            placeholder="Describe your item in detail..."
            rows="2"
            className="w-full text-sm px-4 py-3 focus:outline-none rounded-lg border border-pink-300 focus:ring-2 focus:ring-pink-500 focus:border-pink-500 transition-colors resize-none"
          />
        </div>
  
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-2">
            <label className="block text-sm font-semibold text-pink-700">Date Lost</label>
            <input
              type="date"
              name="dateLost"
              value={formData.dateLost}
              onChange={handleChange}
              required
              className="w-full text-sm px-4 py-3 focus:outline-none rounded-lg border border-pink-300 focus:ring-2 focus:ring-pink-500 focus:border-pink-500 transition-colors"
            />
          </div>
  
          <div className="space-y-2">
            <label className="block text-sm font-semibold text-pink-700">Location</label>
            <input
              type="text"
              name="location"
              value={formData.location}
              onChange={handleChange}
              required
              placeholder="e.g., Main Library, Room 101"
              className="w-full text-sm px-4 py-3 rounded-lg focus:outline-none border border-pink-300 focus:ring-2 focus:ring-pink-500 focus:border-pink-500 transition-colors"
            />
          </div>
        </div>
  
        <div className="space-y-2">
          <label className="block text-sm font-semibold text-pink-700">Item Image</label>
          <div className="mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-pink-300 border-dashed rounded-lg hover:border-pink-500 transition-colors">
            <div className="space-y-1 text-center">
              <svg
                className="mx-auto text-sm h-6 w-6 text-pink-300"
                stroke="currentColor"
                fill="none"
                viewBox="0 0 48 48"
                aria-hidden="true"
              >
                <path
                  d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02"
                  strokeWidth={2}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              <div className="flex text-sm text-pink-600">
                <label
                  htmlFor="file-upload"
                  className="relative cursor-pointer bg-white rounded-md font-medium text-pink-600 hover:text-pink-500 focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-pink-500"
                >
                  <span className="text-sm">Upload a file</span>
                  <input
                    id="file-upload"
                    name="image"
                    type="file"
                    onChange={handleChange}
                    accept="image/*"
                    className="sr-only"
                  />
                </label>
                <p className="pl-1 text-sm">or drag and drop</p>
              </div>
              <p className="text-xs text-pink-400">PNG, JPG, GIF up to 5MB</p>
            </div>
          </div>
        </div>
  
        <button
          type="submit"
          className="w-full text-sm btn-primary-gradient text-white py-2 px-5 rounded-lg font-semibold hover:bg-pink-700 focus:outline-none focus:ring-2 focus:ring-pink-500 focus:ring-offset-2 transition-colors"
        >
          Submit Lost Item
        </button>
      </form>
    </div>
  );
  
}