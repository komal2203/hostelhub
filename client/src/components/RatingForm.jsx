import { useState } from "react";
import { useToast } from "./ToastContext";
// or without extension (if vite resolves .js/.jsx):

export default function RatingForm({ onNewRating }) {
  const [rating, setRating] = useState("");
  const [comment, setComment] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isAnonymous, setIsAnonymous] = useState(false);
  const [imageFile, setImageFile] = useState(null);
  const [imagePreview, setImagePreview] = useState(null);
  const [errors, setErrors] = useState({});
  const [mealTag, setMealTag] = useState("");
  const toast = useToast();

  // Generate meal options
  const mealOptions = [
    "Monday-Breakfast",
    "Monday-Lunch",
    "Monday-Snacks",
    "Monday-Dinner",
    "Tuesday-Breakfast",
    "Tuesday-Lunch",
    "Tuesday-Snacks",
    "Tuesday-Dinner",
    "Wednesday-Breakfast",
    "Wednesday-Lunch",
    "Wednesday-Snacks",
    "Wednesday-Dinner",
    "Thursday-Breakfast",
    "Thursday-Lunch",
    "Thursday-Snacks",
    "Thursday-Dinner",
    "Friday-Breakfast",
    "Friday-Lunch",
    "Friday-Snacks",
    "Friday-Dinner",
    "Saturday-Breakfast",
    "Saturday-Lunch",
    "Saturday-Snacks",
    "Saturday-Dinner",
    "Sunday-Breakfast",
    "Sunday-Lunch",
    "Sunday-Snacks",
    "Sunday-Dinner",
  ];

  const handleSubmit = async (e) => {
    e.preventDefault();

    const token = localStorage.getItem("token");
    if (!token) {
      alert("You must be logged in to submit a rating.");
      return;
    }

    if (!mealTag) {
      setErrors((prev) => ({ ...prev, mealTag: "Please select a meal" }));
      return;
    }

    setIsSubmitting(true);

    try {
      const formData = new FormData();
      formData.append("rating", Number(rating));
      formData.append("comment", comment);
      formData.append("isAnonymous", isAnonymous ? "true" : "false");
      formData.append("mealTag", mealTag);

      if (imageFile) {
        formData.append("image", imageFile);
      }

      const res = await fetch("http://localhost:5000/api/mess", {
        method: "POST",
        headers: {
          Authorization: `Bearer ${token}`,
        },
        body: formData,
      });

      if (res.ok) {
        // alert("Rating submitted!");
        // inside handleSubmit success:
        toast("Rating submitted!", "success");

        setRating("");
        setComment("");
        setIsAnonymous(false);
        setImageFile(null);
        setImagePreview(null);
        setMealTag("");
        if (onNewRating) {
          const newRating = await res.json();
          onNewRating(newRating);
        }
      } else {
        // const data = await res.json();
        // alert("Failed to submit rating: " + (data.message || res.statusText));
        // inside handleSubmit error:
        toast("Failed to submit rating", "error");
      }
    } catch (error) {
      // alert("Error submitting rating: " + error.message);
      toast("Error submitting rating: " + error.message, "error");
    } finally {
      setIsSubmitting(false);
    }
  };

  // return (
  //   <form
  //     onSubmit={handleSubmit}
  //     className="flex flex-col h-full pb-6 pt-4"
  //     style={{ minHeight: 0 }}
  //   >
  //     <h2 className="text-md md:text-xl font-semibold mb-6 text-primary-700">
  //       Submit Your Rating 😊
  //     </h2>

  //     {/* Meal Selection - Moved to top */}
  //     <div className="mb-4">
  //       <label className="block text-sm font-medium text-gray-700 mb-1">
  //         Select Meal
  //       </label>
  //       <select
  //         value={mealTag}
  //         onChange={(e) => setMealTag(e.target.value)}
  //         className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
  //         required
  //       >
  //         <option value="">Select a meal</option>
  //         {mealOptions.map((option) => (
  //           <option key={option} value={option}>
  //             {option.replace("-", " ")}
  //           </option>
  //         ))}
  //       </select>
  //       {errors.mealTag && (
  //         <p className="text-red-500 text-sm mt-1">{errors.mealTag}</p>
  //       )}
  //     </div>

  //     <label className="block mb-4">
  //       <span className="block mb-1 text-sm md:text-md font-medium text-gray-700">
  //         Rating (1-5):
  //       </span>
  //       <input
  //         type="number"
  //         min="1"
  //         max="5"
  //         value={rating}
  //         onChange={(e) => {
  //           const val = e.target.value;
  //           setRating(val);
  //           setErrors((err) => ({
  //             ...err,
  //             rating:
  //               val < 1 || val > 5 ? "Rating must be between 1 and 5" : null,
  //           }));
  //         }}
  //         required
  //         placeholder="For example - 5 for very good food..."
  //         className="w-full px-3 py-1 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent transition"
  //         disabled={isSubmitting}
  //       />
  //       {errors.rating && (
  //         <p className="text-red-500 text-sm mt-1">{errors.rating}</p>
  //       )}
  //     </label>

  //     <label className="block mb-3">
  //       <span className="block mb-1 font-medium text-sm md:text-md text-gray-700">
  //         Comment:
  //       </span>
  //       <textarea
  //         value={comment}
  //         onChange={(e) => {
  //           const txt = e.target.value;
  //           setComment(txt);
  //           setErrors((err) => ({
  //             ...err,
  //             comment:
  //               txt.length < 5 ? "Comment must be at least 5 characters" : null,
  //           }));
  //         }}
  //         required
  //         rows={2}
  //         placeholder="Write about you feedback or complaints..."
  //         className="w-full px-3 py-1 border border-gray-300 rounded-md resize-none focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent transition"
  //         disabled={isSubmitting}
  //       />
  //       {errors.comment && (
  //         <p className="text-red-500 text-sm mt-1">{errors.comment}</p>
  //       )}
  //     </label>

  //     <label className="flex items-center mb-4">
  //       <input
  //         type="checkbox"
  //         checked={isAnonymous}
  //         onChange={() => setIsAnonymous(!isAnonymous)}
  //         className="mr-2"
  //         disabled={isSubmitting}
  //       />
  //       <span className="text-gray-700 text-sm md:text-md">
  //         Submit anonymously
  //       </span>
  //     </label>

  //     <label className="block mb-7">
  //       <span className="block mb-1 text-sm md:text-md font-medium text-gray-700">
  //         Upload Image (optional):
  //       </span>
  //       <input
  //         type="file"
  //         accept="image/*"
  //         onChange={(e) => {
  //           const file = e.target.files[0];
  //           let fileError = null;
  //           if (file && file.size > 2_000_000)
  //             fileError = "File must be under 2MB";
  //           setErrors((err) => ({ ...err, image: fileError }));
  //           if (!fileError) {
  //             setImageFile(file);
  //             setImagePreview(URL.createObjectURL(file));
  //           }
  //         }}
  //         disabled={isSubmitting}
  //         className="w-full text-sm md:text-md"
  //       />
  //       {errors.image && (
  //         <p className="text-red-600 text-sm mt-1">{errors.image}</p>
  //       )}
  //     </label>

  //     {imagePreview && (
  //       <div className="mb-4">
  //         <p className="font-medium text-gray-700 mb-1">Image Preview:</p>
  //         <img
  //           src={imagePreview}
  //           alt="Preview"
  //           className="max-w-full max-h-24 rounded border"
  //         />
  //       </div>
  //     )}

  //     <button
  //       type="submit"
  //       disabled={isSubmitting}
  //       className="mt-1 w-full text-sm md:text-md btn-primary-gradient font-semibold py-2 rounded-md hover:brightness-110 transition disabled:opacity-50 disabled:cursor-not-allowed"
  //       style={{ marginBottom: "80px" }} // padding so button not behind footer
  //     >
  //       {isSubmitting ? "Submitting..." : "Submit Rating"}
  //     </button>
  //   </form>
  // );

  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col mt-3 pt-3 pb-6  border-none rounded-lg"
      style={{ minHeight: 0 }}
    >
      <h2 className="text-md md:text-xl font-semibold mb-6 text-pink-700">
        Submit Your Rating 😊
      </h2>

      {/* Meal Selection - Moved to top */}
      <div className="mb-4">
        <label className="block text-sm font-medium text-pink-700 mb-1">
          Select Meal
        </label>
        <select
          value={mealTag}
          onChange={(e) => setMealTag(e.target.value)}
          className="w-full p-2 border bg-white border-pink-300 rounded-md focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-transparent"
          required
        >
          <option value="">Select a meal</option>
          {mealOptions.map((option) => (
            <option key={option} value={option}>
              {option.replace("-", " ")}
            </option>
          ))}
        </select>
        {errors.mealTag && (
          <p className="text-red-600 text-sm mt-1">{errors.mealTag}</p>
        )}
      </div>

      <label className="block mb-4">
        <span className="block mb-1 text-sm md:text-md font-medium text-pink-700">
          Rating (1-5):
        </span>
        <input
          type="number"
          min="1"
          max="5"
          value={rating}
          onChange={(e) => {
            const val = e.target.value;
            setRating(val);
            setErrors((err) => ({
              ...err,
              rating:
                val < 1 || val > 5 ? "Rating must be between 1 and 5" : null,
            }));
          }}
          required
          placeholder="For example - 5 for very good food..."
          className="w-full px-3 py-1 bg-white border border-pink-300 rounded-md focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-transparent transition"
          disabled={isSubmitting}
        />
        {errors.rating && (
          <p className="text-red-600 text-sm mt-1">{errors.rating}</p>
        )}
      </label>

      <label className="block mb-3">
        <span className="block mb-1 font-medium text-sm md:text-md text-pink-700">
          Comment:
        </span>
        <textarea
          value={comment}
          onChange={(e) => {
            const txt = e.target.value;
            setComment(txt);
            setErrors((err) => ({
              ...err,
              comment:
                txt.length < 5 ? "Comment must be at least 5 characters" : null,
            }));
          }}
          required
          rows={2}
          placeholder="Write about your feedback or complaints..."
          className="w-full px-3 py-1 border bg-white  border-pink-300 rounded-md resize-none focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-transparent transition"
          disabled={isSubmitting}
        />
        {errors.comment && (
          <p className="text-red-600 text-sm mt-1">{errors.comment}</p>
        )}
      </label>

      <label className="flex items-center mb-4">
        <input
          type="checkbox"
          checked={isAnonymous}
          onChange={() => setIsAnonymous(!isAnonymous)}
          className="mr-2 accent-pink-600"
          disabled={isSubmitting}
        />
        <span className="text-pink-700 text-sm md:text-md">
          Submit anonymously
        </span>
      </label>

      <label className="block mb-7">
        <span className="block mb-1 text-sm md:text-md font-medium text-pink-700">
          Upload Image (optional):
        </span>
        <input
          type="file"
          accept="image/*"
          onChange={(e) => {
            const file = e.target.files[0];
            let fileError = null;
            if (file && file.size > 2_000_000)
              fileError = "File must be under 2MB";
            setErrors((err) => ({ ...err, image: fileError }));
            if (!fileError) {
              setImageFile(file);
              setImagePreview(URL.createObjectURL(file));
            }
          }}
          disabled={isSubmitting}
          className="w-full text-sm md:text-md"
        />
        {errors.image && (
          <p className="text-red-600 text-sm mt-1">{errors.image}</p>
        )}
      </label>

      {imagePreview && (
        <div className="mb-3">
          <p className="font-medium text-pink-700 mb-1">Image Preview:</p>
          <img
            src={imagePreview}
            alt="Preview"
            className="max-w-full max-h-24 rounded border border-pink-300"
          />
        </div>
      )}

      <button
        type="submit"
        disabled={isSubmitting}
        className=" w-full text-sm md:text-md btn-primary-gradient font-semibold py-2 rounded-md hover:brightness-110 transition disabled:opacity-50 disabled:cursor-not-allowed"
        style={{ marginBottom: "80px" }} // padding so button not behind footer
      >
        {isSubmitting ? "Submitting..." : "Submit Rating"}
      </button>
    </form>
  );
}
