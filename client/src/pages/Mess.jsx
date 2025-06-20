import { useEffect, useState } from "react";
import RatingForm from "../components/RatingForm.jsx";
// import { FaThumbsUp, FaThumbsDown } from "react-icons/fa";
import { ArrowDownCircleIcon, ChartBarIcon } from "@heroicons/react/24/outline";
import { Utensils } from "lucide-react";
import { AiFillStar } from "react-icons/ai";
import { FaArrowDown, FaArrowUp, FaUser } from "react-icons/fa";

import { useRef } from "react";
import MessTimetable from "../components/MessTimetable";
import parseJWT from "../utils/parseJWT.js";
// import html2pdf from "html2pdf.js";
import html2canvas from "html2canvas";
import { jsPDF } from "jspdf";
import { useMemo } from "react";
import ImageGallery from "../components/ImageGallery"; // adjust path if needed
import RatingPieChart from "../components/RatingPieChart"; // adjust path if needed
import RatingTrendChart from "../components/RatingTrendChart"; // adjust path if needed
import SummaryCard from "../components/SummaryCard";

export default function MessRating() {
  const [message, setMessage] = useState("");
  const [ratings, setRatings] = useState([]);
  const [loading, setLoading] = useState(true);
  const [upvotes, setUpvotes] = useState({});
  const [downvotes, setDownvotes] = useState({});
  const [sort, setSort] = useState("newest");
  const [images, setImages] = useState([]);
  const [filter, setFilter] = useState("all");
  const token = localStorage.getItem("token");
  const [mealFilter, setMealFilter] = useState("all");

  const currentUserId = token ? parseJWT(token)?.id : null;
  console.log("Current User ID:", currentUserId);

  const timetableRef = useRef(null);

  // Add this near the top of your Mess.jsx component, with other state declarations
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

  const handleDownloadPDF = async () => {
    const element = timetableRef.current;

    if (!element) {
      console.error("Timetable element not found");
      alert("Timetable not loaded yet!");
      return;
    }

    try {
      // Show loading state
      const button = document.querySelector(
        'button[onClick="handleDownloadPDF"]'
      );
      if (button) {
        const originalText = button.textContent;
        button.textContent = "Generating PDF...";
        button.disabled = true;
      }

      console.log("Starting PDF generation...");

      // Create canvas with specific options
      const canvas = await html2canvas(element, {
        scale: 2,
        useCORS: true,
        allowTaint: true,
        backgroundColor: "#ffffff",
        logging: true, // Enable logging for debugging
        onclone: (clonedDoc) => {
          // Ensure all images are loaded in the cloned document
          const images = clonedDoc.getElementsByTagName("img");
          return Promise.all(
            Array.from(images).map((img) => {
              if (img.complete) return Promise.resolve();
              return new Promise((resolve) => {
                img.onload = resolve;
                img.onerror = resolve;
              });
            })
          );
        },
      });

      console.log("Canvas created successfully");

      // Calculate dimensions
      const imgWidth = 210; // A4 width in mm
      const pageHeight = 297; // A4 height in mm
      const imgHeight = (canvas.height * imgWidth) / canvas.width;

      // Create PDF with specific options
      const pdf = new jsPDF({
        orientation: "portrait",
        unit: "mm",
        format: "a4",
        compress: true,
      });

      console.log("PDF object created");

      // Add image to PDF with specific options
      const imgData = canvas.toDataURL("image/jpeg", 1.0);
      pdf.addImage(imgData, "JPEG", 0, 0, imgWidth, imgHeight);

      console.log("Image added to PDF");

      // Save the PDF
      pdf.save("MessTimetable.pdf");
      console.log("PDF saved successfully");

      // Reset button state
      if (button) {
        button.textContent = originalText;
        button.disabled = false;
      }
    } catch (error) {
      console.error("Detailed error in PDF generation:", error);
      alert("Failed to generate PDF. Please check console for details.");

      // Reset button state
      const button = document.querySelector(
        'button[onClick="handleDownloadPDF"]'
      );
      if (button) {
        button.textContent = "Download Timetable as PDF";
        button.disabled = false;
      }
    }
  };
  // const handleDownloadPDF = () => {
  //   // Access the global objects exposed by the CDN scripts
  //   const { jsPDF } = window.jspdf;
  //   const element = timetableRef.current;

  //   if (!element) {
  //     alert("Timetable not loaded yet!");
  //     return;
  //   }

  //   window.html2canvas(element).then((canvas) => {
  //     const imgData = canvas.toDataURL("image/png");
  //     const pdf = new jsPDF({
  //       orientation: "portrait",
  //       unit: "pt",
  //       format: "a4",
  //     });

  //     const pdfWidth = pdf.internal.pageSize.getWidth();
  //     const pdfHeight = (canvas.height * pdfWidth) / canvas.width;

  //     pdf.addImage(imgData, "PNG", 0, 0, pdfWidth, pdfHeight);
  //     pdf.save("MessTimetable.pdf");
  //   });
  // };

  // Fetch ratings from backend
  const fetchRatings = () => {
    setLoading(true);
    fetch(`${import.meta.env.VITE_BACKEND_URI}/api/mess`)
      .then((res) => res.json())
      .then((data) => {
        setMessage("");
        // Process the data to ensure all required fields exist
        const processedData = data.map((rating) => ({
          ...rating,
          mealTag: rating.mealTag || "No meal specified",
          rating: rating.rating || 0,
          comment: rating.comment || "",
          date: rating.date || new Date().toISOString(),
          user: rating.user || null,
          image: rating.image || null,
          upvotes: rating.upvotes || [],
          downvotes: rating.downvotes || [],
        }));
        setRatings(processedData);
        setLoading(false);

        // Process upvotes and downvotes
        const ups = {},
          downs = {};
        processedData.forEach((r) => {
          ups[r._id] = r.upvotes?.length || 0;
          downs[r._id] = r.downvotes?.length || 0;
        });
        setUpvotes(ups);
        setDownvotes(downs);
      })
      .catch((error) => {
        console.error("Error fetching ratings:", error);
        setMessage("Failed to load mess ratings.");
        setLoading(false);
      });
  };

  useEffect(() => {
    fetchRatings();
  }, []);

  // Callback to refresh ratings after new rating submitted
  const handleNewRating = () => {
    fetchRatings();
  };

  async function handleVote(ratingId, type) {
    const token = localStorage.getItem("token");
    const res = await fetch(`${import.meta.env.VITE_BACKEND_URI}/api/mess/${ratingId}/vote`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({ type }),
    });
    if (res.ok) {
      const { upvotes: u, downvotes: d, id } = await res.json();
      setUpvotes((prev) => ({ ...prev, [id]: u }));
      setDownvotes((prev) => ({ ...prev, [id]: d }));
    } else {
      alert("Failed to vote");
    }
  }

  // Filtered and sorted ratings based on selected filter and sort state
  const displayed = useMemo(() => {
    return ratings
      .filter((r) => {
        if (!r) return false;
        if (filter === "mine") return r.user?._id === currentUserId;
        if (filter === "anon") return r.isAnonymous;
        if (mealFilter !== "all") return r.mealTag === mealFilter;
        return true;
      })
      .sort((a, b) => {
        if (sort === "newest") return new Date(b.date) - new Date(a.date);
        if (sort === "highest") return b.rating - a.rating;
        if (sort === "topvoted") {
          const aScore = (upvotes[a._id] || 0) - (downvotes[a._id] || 0);
          const bScore = (upvotes[b._id] || 0) - (downvotes[b._id] || 0);
          return bScore - aScore;
        }
        return 0;
      });
  }, [ratings, filter, mealFilter, sort, currentUserId, upvotes, downvotes]);

  // Utility to compute counts for 1–5 ratings
  const getRatingCounts = (ratingsArray) => {
    const counts = { 1: 0, 2: 0, 3: 0, 4: 0, 5: 0 };

    ratingsArray.forEach(({ rating }) => {
      if (rating >= 1 && rating <= 5) {
        counts[rating]++;
      }
    });

    return counts;
  };

  const ratingCounts = useMemo(() => getRatingCounts(displayed), [displayed]);

  //computing summary stats
  const getDayStats = (ratingsArray) => {
    const dayMap = {};

    ratingsArray.forEach(({ day, rating }) => {
      if (!day) return;
      if (!dayMap[day]) dayMap[day] = { total: 0, count: 0 };

      dayMap[day].total += rating;
      dayMap[day].count += 1;
    });

    const avgPerDay = Object.entries(dayMap).map(([day, val]) => ({
      day,
      avg: val.total / val.count,
    }));

    avgPerDay.sort((a, b) => b.avg - a.avg);

    return {
      highest: avgPerDay[0],
      lowest: avgPerDay[avgPerDay.length - 1],
    };
  };

  const summaryStats = useMemo(() => {
    const totalRatings = displayed.length;
    const average =
      totalRatings > 0
        ? (
            displayed.reduce((sum, r) => sum + r.rating, 0) / totalRatings
          ).toFixed(2)
        : 0;

    const { highest, lowest } = getDayStats(displayed);

    return {
      average,
      totalRatings,
      highest,
      lowest,
    };
  }, [displayed]);

  function getDailyAverageRatings(ratingsArray) {
    const grouped = {};

    ratingsArray.forEach(({ rating, date }) => {
      if (!date) return;

      const day = new Date(date).toISOString().split("T")[0]; // 'YYYY-MM-DD'

      if (!grouped[day]) grouped[day] = { sum: 0, count: 0 };

      grouped[day].sum += rating;
      grouped[day].count += 1;
    });

    const averages = [];

    for (const day in grouped) {
      const avg = grouped[day].sum / grouped[day].count;
      averages.push({ day, avg });
    }

    return averages;
  }

  // 1. Get average ratings by day
  const dailyAverages = useMemo(
    () => getDailyAverageRatings(displayed),
    [displayed]
  );

  // 2. Find the highest/lowest
  const highestRatedDay = useMemo(() => {
    if (dailyAverages.length === 0) return null;
    return dailyAverages.reduce((max, curr) =>
      curr.avg > max.avg ? curr : max
    );
  }, [dailyAverages]);

  const lowestRatedDay = useMemo(() => {
    if (dailyAverages.length === 0) return null;
    return dailyAverages.reduce((min, curr) =>
      curr.avg < min.avg ? curr : min
    );
  }, [dailyAverages]);

  useEffect(() => {
    fetch(`${import.meta.env.VITE_BACKEND_URI}/api/images`)
      .then((res) => {
        if (!res.ok) throw new Error("Failed to fetch images");
        return res.json();
      })
      .then((data) => {
        console.log("Received image data:", data); // Debug log
        const withFullPath = data.images.map((img) => {
          const processedImage = {
            src: `${import.meta.env.VITE_BACKEND_URI}${img.path}`,
            alt: img.filename,
            createdAt: img.createdAt,
          };
          console.log("Processed image:", processedImage); // Debug log
          return processedImage;
        });
        console.log("All processed images:", withFullPath); // Debug log
        setImages(withFullPath);
      })
      .catch((err) => {
        console.error("Error loading images:", err);
        console.error("Error details:", err.message);
      });
  }, []);

  // return (
  //   <div className="flex tracking-wide flex-col mb-6 max-h-full max-w-6xl mx-auto p-4">
  //     {/* <h2 className="text-2xl font-bold mb-3">Rate My Mess</h2> */}

  //     <div className="flex flex-col md:flex-row gap-6 md:gap-12 flex-grow">
  //       {/* Form side: fixed width */}
  //       <div className="w-full md:w-1/2 flex flex-col">
  //         <RatingForm onNewRating={handleNewRating} />
  //       </div>

  //       {/* Ratings side: scrollable */}
  //       <div className="w-full md:w-1/2 h-[72vh] overflow-y-auto border border-gray-300 rounded-md p-4 bg-gray-50">
  //         <h3 className="text-md md:text-xl font-semibold mb-4">
  //           Previous Ratings
  //         </h3>
  //         {/* SORT & FILTER CONTROLS */}
  //         <div className="mb-4 text-sm md:text-md flex items-center space-x-4">
  //           <select
  //             value={sort}
  //             onChange={(e) => setSort(e.target.value)}
  //             className="border border-gray-300 px-2 py-1 rounded focus:outline-none focus:ring-0 focus:border-gray-300"
  //           >
  //             <option value="newest">Newest</option>
  //             <option value="highest">Highest Rating</option>
  //             <option value="topvoted">Most Upvoted</option>
  //           </select>

  //           <select
  //             value={filter}
  //             onChange={(e) => setFilter(e.target.value)}
  //             className="border border-gray-300 px-2 py-1 rounded focus:outline-none focus:ring-0 focus:border-gray-300"
  //           >
  //             <option value="all">All</option>
  //             <option value="mine">My Ratings</option>
  //             <option value="anon">Anonymous Only</option>
  //           </select>

  //           <select
  //             value={mealFilter}
  //             onChange={(e) => setMealFilter(e.target.value)}
  //             className="border border-gray-300 px-2 py-1 rounded focus:outline-none focus:ring-0 focus:border-gray-300"
  //           >
  //             <option value="all">All Meals</option>
  //             {mealOptions.map((option) => (
  //               <option key={option} value={option}>
  //                 {option.replace('-', ' ')}
  //               </option>
  //             ))}
  //           </select>
  //         </div>
  //         {message && <p className="mb-6">{message}</p>}

  //         {loading ? (
  //           <div className="flex items-center justify-center h-full">
  //             <svg
  //               className="animate-spin h-8 w-8 text-blue-500"
  //               xmlns="http://www.w3.org/2000/svg"
  //               fill="none"
  //               viewBox="0 0 24 24"
  //             >
  //               <circle
  //                 className="opacity-80 stroke-current"
  //                 cx="12"
  //                 cy="12"
  //                 r="10"
  //                 strokeWidth="4"
  //               />
  //               <path
  //                 className="opacity-100 fill-current text-white"
  //                 d="M4 12a8 8 0 018-8v8H4z"
  //               />
  //             </svg>
  //           </div>
  //         ) : (
  //           <ul>
  //             {displayed.map((rating) => {
  //               if (!rating) return null; // Skip invalid ratings

  //               const {
  //                 _id,
  //                 rating: ratingValue = 0,
  //                 comment = '',
  //                 date = new Date().toISOString(),
  //                 user = null,
  //                 image = null,
  //                 mealTag = 'No meal specified'
  //               } = rating;

  //               return (
  //                 <li
  //                   key={_id}
  //                   className="mb-4 p-4 text-sm md:text-md border border-gray-300 rounded-md bg-white transition-colors duration-500 ease-in-out hover:shadow-lg hover:scale-[1.01]"
  //                 >
  //                   <div className="flex justify-between items-center mb-2">
  //                     <div>
  //                       <span className="font-semibold text-primary-700 mr-2">
  //                         {"⭐".repeat(ratingValue)}
  //                       </span>
  //                       <small className="text-gray-500">
  //                         {new Date(date).toLocaleString()}
  //                       </small>
  //                     </div>
  //                     <div className="text-sm italic text-gray-700 leading-relaxed">
  //                       {user?.username ? user.username : "Anonymous"}
  //                     </div>
  //                   </div>

  //                   <div className="text-sm text-gray-600 mb-2">
  //                     {mealTag && mealTag !== 'No meal specified'
  //                       ? mealTag.replace('-', ' ')
  //                       : 'No meal specified'}
  //                   </div>

  //                   <p>{comment}</p>

  //                   {image && (
  //                     <img
  //                       src={`http://localhost:5000${image}`}
  //                       alt="Uploaded"
  //                       className="mt-2 max-w-[60] rounded border"
  //                     />
  //                   )}

  //                   <div className="mt-3 flex items-center space-x-6">
  //                     <button
  //                       onClick={() => handleVote(_id, "up")}
  //                       className="flex items-center space-x-1 text-blue-500 hover:text-blue-700"
  //                     >
  //                       <FaArrowUp />
  //                       <span>{upvotes[_id] || 0}</span>
  //                     </button>
  //                     <button
  //                       onClick={() => handleVote(_id, "down")}
  //                       className="flex items-center space-x-1 text-red-500 hover:text-red-700"
  //                     >
  //                       <FaArrowDown />
  //                       <span>{downvotes[_id] || 0}</span>
  //                     </button>
  //                   </div>
  //                 </li>
  //               );
  //             })}
  //           </ul>
  //         )}
  //       </div>
  //     </div>

  //     <div className="mt-6 mb-6 p-6 border border-gray-300 rounded-md bg-white">
  //       <div className="w-full flex justify-between items-center ">
  //         <h3 className="text-md md:text-lg  font-semibold mb-3">
  //           Mess Menu
  //         </h3>
  //         {/* Download Button */}
  //         <button
  //           onClick={handleDownloadPDF}
  //           className="mb-4 text-md md:text-sm px-2 py-1 md:px-4 md:py-2  bg-blue-500 text-white rounded hover:bg-blue-600 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
  //           type="button"
  //         >
  //           Download Timetable
  //         </button>
  //       </div>
  //       {/* Attach ref to the component or div around the table */}
  //       <div ref={timetableRef}>
  //         <MessTimetable />
  //       </div>
  //     </div>
  //     <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 my-6">
  //       <SummaryCard
  //         icon="⭐"
  //         value={summaryStats.average}
  //         label="Average Rating"
  //         color="text-yellow-500"
  //       />
  //       <SummaryCard
  //         icon="🧍‍♂️"
  //         value={summaryStats.totalRatings}
  //         label="Total Ratings"
  //         color="text-blue-500"
  //       />
  //       <SummaryCard
  //         icon={<ChartBarIcon className="w-8 h-8 mx-auto " />}
  //         label="Best Rated Day"
  //         value={
  //           highestRatedDay
  //             ? `${highestRatedDay.day} (${highestRatedDay.avg.toFixed(2)}⭐)`
  //             : "N/A"
  //         }
  //         color="text-green-500"
  //       />

  //       <SummaryCard
  //         icon={<ArrowDownCircleIcon className="w-8 h-8 mx-auto " />}
  //         label="Lowest Rated Day"
  //         value={
  //           lowestRatedDay
  //             ? `${lowestRatedDay.day} (${lowestRatedDay.avg.toFixed(2)}⭐)`
  //             : "N/A"
  //         }
  //         color="text-red-500"
  //       />
  //     </div>

  //     <div className="my-6 p-4 rounded-lg shadow bg-white">
  //       <h2 className="text-xl font-semibold mb-4 text-gray-800">
  //         Ratings Overview
  //       </h2>
  //       <RatingPieChart ratings={ratingCounts} />
  //     </div>

  //     <div className="my-6">
  //       <RatingTrendChart ratings={displayed} />
  //     </div>

  //     <div className="my-6">
  //       <h2 className="text-xl font-semibold mb-4">🍽️ Food Gallery</h2>
  //       <ImageGallery images={images} />
  //     </div>
  //   </div>
  // );

  return (
    <div className="flex tracking-wide flex-col mt-12 mb-6 max-h-full max-w-6xl  mx-auto p-4">
      {/* <h2 className="text-2xl font-bold mb-3">Rate My Mess</h2> */}

      <div className="flex flex-col md:flex-row gap-6 md:gap-12 flex-grow">
        {/* Form side: fixed width */}
        <div className="w-full md:w-1/2 h-[72vh] flex flex-col">
          <RatingForm onNewRating={handleNewRating} />
        </div>

        {/* Ratings side: scrollable */}
        <div className="w-full mt-3 md:w-1/2 h-[72vh] overflow-y-auto border bg-rose-100 shadow-sm border-none rounded-md p-4 bg-pink-10">
          <h3 className="text-md md:text-xl font-semibold mb-4 text-pink-700">
            Previous Ratings
          </h3>
          {/* SORT & FILTER CONTROLS */}
          <div className="mb-4 text-sm md:text-md text-gray-700  flex items-center space-x-4">
            <select
              value={sort}
              onChange={(e) => setSort(e.target.value)}
              className="border border-rose-200 px-2 py-1 bg-white rounded focus:outline-none focus:ring-0 focus:border-pink-400"
            >
              <option value="newest">Newest</option>
              <option value="highest">Highest Rating</option>
              <option value="topvoted">Most Upvoted</option>
            </select>

            <select
              value={filter}
              onChange={(e) => setFilter(e.target.value)}
              className="border border-rose-200 bg-white px-2 py-1 rounded focus:outline-none focus:ring-0 focus:border-pink-400"
            >
              <option value="all">All</option>
              <option value="mine">My Ratings</option>
              <option value="anon">Anonymous Only</option>
            </select>

            <select
              value={mealFilter}
              onChange={(e) => setMealFilter(e.target.value)}
              className="border border-rose-200 px-2 py-1 bg-white rounded focus:outline-none focus:ring-0 focus:border-pink-400"
            >
              <option value="all">All Meals</option>
              {mealOptions.map((option) => (
                <option key={option} value={option}>
                  {option.replace("-", " ")}
                </option>
              ))}
            </select>
          </div>
          {message && <p className="mb-6 text-pink-600">{message}</p>}

          {loading ? (
            <div className="flex items-center justify-center h-full">
              <svg
                className="animate-spin h-8 w-8 text-pink-600"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
              >
                <circle
                  className="opacity-80 stroke-current"
                  cx="12"
                  cy="12"
                  r="10"
                  strokeWidth="4"
                />
                <path
                  className="opacity-100 fill-current text-pink-200"
                  d="M4 12a8 8 0 018-8v8H4z"
                />
              </svg>
            </div>
          ) : (
            <ul>
              {displayed.map((rating) => {
                if (!rating) return null; // Skip invalid ratings

                const {
                  _id,
                  rating: ratingValue = 0,
                  comment = "",
                  date = new Date().toISOString(),
                  user = null,
                  image = null,
                  mealTag = "No meal specified",
                } = rating;

                return (
                  <li
                    key={_id}
                    className="mb-4 p-4 text-sm md:text-md border border-rose-200 rounded-md bg-white transition-colors duration-500 ease-in-out hover:shadow-lg hover:scale-[1.01]"
                  >
                    <div className="flex justify-between items-center mb-2">
                      <div>
                        <span className="font-semibold text-pink-700 mr-2">
                          {"⭐".repeat(ratingValue)}
                        </span>
                        <small className="text-red-700 bg-red-100 px-2 py-1 rounded-md">
                          {new Date(date).toLocaleString()}
                        </small>
                      </div>
                      <small className=" italic bg-red-400 text-pink-50 px-2 py-1 rounded-xl hover:scale-105 transition-transform duration-150 ease-in hover:cursor-pointer leading-relaxed">
                        {user?.username ? user.username : "Anonymous"}
                      </small>
                    </div>

                    <div className="text-sm text-pink-800 mb-3">
                      {mealTag && mealTag !== "No meal specified"
                        ? mealTag.replace("-", " ")
                        : "No meal specified"}
                    </div>

                    <p className="text-gray-600">{comment}</p>

                    {image && (
                      <img
                        src={`http://localhost:5000${image}`}
                        alt="Uploaded"
                        className="mt-2 max-w-[60] rounded border border-pink-300"
                      />
                    )}

                    <div className="mt-3 flex items-center space-x-6">
                      <button
                        onClick={() => handleVote(_id, "up")}
                        className="flex items-center space-x-1 text-pink-400 hover:text-pink-700"
                      >
                        <FaArrowUp />
                        <span>{upvotes[_id] || 0}</span>
                      </button>
                      <button
                        onClick={() => handleVote(_id, "down")}
                        className="flex items-center space-x-1 text-red-400 hover:text-red-600"
                      >
                        <FaArrowDown />
                        <span>{downvotes[_id] || 0}</span>
                      </button>
                    </div>
                  </li>
                );
              })}
            </ul>
          )}
        </div>
      </div>

      <div className="mt-30 mb-6 p-6 border border-pink-300 rounded-md bg-white">
        <div className="w-full flex justify-between items-center">
          <h3 className="text-md md:text-lg font-semibold mb-3 text-pink-700">
            Mess Menu
          </h3>
          {/* Download Button */}
          <button
            onClick={handleDownloadPDF}
            className="mb-4 text-md md:text-sm px-2 py-1 md:px-4 md:py-2 bg-pink-600 text-white  rounded hover:bg-pink-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
            type="button"
          >
            Download Timetable
          </button>
        </div>
        {/* Attach ref to the component or div around the table */}
        <div ref={timetableRef}>
          <MessTimetable />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 my-6">
        <SummaryCard
          icon={<AiFillStar className="text-yellow-500 w-8 h-8 mx-auto" />}
          value={summaryStats.average}
          label="Average Rating"
          color="text-yellow-500"
        />

        <SummaryCard
          icon={<FaUser className="text-pink-600 w-7 h-7 mx-auto" />}
          value={summaryStats.totalRatings}
          label="Total Ratings"
          color="text-pink-600"
        />

        <SummaryCard
          icon={<ChartBarIcon className="w-8 h-8 mx-auto text-pink-600" />}
          label="Best Rated Day"
          value={
            highestRatedDay
              ? `${highestRatedDay.day} (${highestRatedDay.avg.toFixed(2)}⭐)`
              : "N/A"
          }
          color="text-pink-600"
        />

        <SummaryCard
          icon={
            <ArrowDownCircleIcon className="w-8 h-8 mx-auto text-pink-600" />
          }
          label="Lowest Rated Day"
          value={
            lowestRatedDay
              ? `${lowestRatedDay.day} (${lowestRatedDay.avg.toFixed(2)}⭐)`
              : "N/A"
          }
          color="text-red-500" // red for lowest still makes sense
        />
      </div>

      <div className="my-6 p-4 rounded-lg shadow bg-white">
        <h2 className="text-xl font-semibold mb-4 text-pink-700">
          Ratings Overview
        </h2>
        <RatingPieChart ratings={ratingCounts} />
      </div>

      <div className="my-6">
        <RatingTrendChart ratings={displayed} />
      </div>

      <div className="my-6">
        <div className="flex justify-start align-center w-auto gap-3">
          <Utensils className="w-5 h-5 text-pink-700 " />
          <h2 className="text-xl font-semibold mb-4 text-pink-700">
            Food Gallery
          </h2>
        </div>
        <ImageGallery images={images} />
      </div>
    </div>
  );
}
