import { motion } from "framer-motion";
import { Search, Utensils } from "lucide-react";
import { Link } from "react-router-dom";

export default function HomePage() {
  // return (
  //     <div className="min-h-screen">
  //         {/* Hero Section */}
  //         <div className="relative h-[600px]">
  //             <div
  //                 className="absolute inset-0 bg-cover bg-center bg-no-repeat"
  //                 style={{
  //                     backgroundImage: `url('https://images.unsplash.com/photo-1556159992-e189f8e50104?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')`,
  //                 }}
  //             />
  //             {/* <div className="absolute inset-0 bg-black bg-opacity-20 "></div> */}
  //             <div className="relative z-10 h-full flex items-center justify-center">
  //                 <div className="text-center text-white px-4">
  //                     <h1 className="text-3xl md:text-6xl font-bold mb-6">Welcome to HostelHub</h1>
  //                     <p className="text-lg md:text-2xl mb-8">Your One-Stop Solution for Hostel Life</p>
  //                     <Link
  //                         to="/home/mess"
  //                         className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-full text-sm md:text-lg font-semibold transition duration-300"
  //                     >
  //                         Get Started
  //                     </Link>
  //                 </div>
  //             </div>
  //         </div>

  //         {/* Features Section
  //   <div className="py-20 bg-gray-50">
  //     <div className="container mx-auto px-4">
  //       <h2 className="text-3xl font-bold text-center mb-12">Why Choose HostelHub?</h2>
  //       <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
  //         <div className="bg-white p-8 rounded-xl shadow-md hover:shadow-lg transition duration-300">
  //           <div className="text-blue-600 text-4xl mb-4">🍽️</div>
  //           <h3 className="text-xl font-semibold mb-4">Rate Your Mess</h3>
  //           <p className="text-gray-600">Share your dining experience and help others make informed choices about their meals.</p>
  //         </div>
  //         <div className="bg-white p-8 rounded-xl shadow-md hover:shadow-lg transition duration-300">
  //           <div className="text-blue-600 text-4xl mb-4">🔍</div>
  //           <h3 className="text-xl font-semibold mb-4">Lost & Found</h3>
  //           <p className="text-gray-600">Lost something? Found something? Our platform helps you connect with your belongings.</p>
  //         </div>
  //         <div className="bg-white p-8 rounded-xl shadow-md hover:shadow-lg transition duration-300">
  //           <div className="text-blue-600 text-4xl mb-4">📊</div>
  //           <h3 className="text-xl font-semibold mb-4">Quick Polls</h3>
  //           <p className="text-gray-600">Participate in hostel polls and make your voice heard in important decisions.</p>
  //         </div>
  //       </div>
  //     </div>
  //   </div> */}

  //         {/* Features Section */}
  //         {/* <div className="py-20 bg-gray-50">
  //             <div className="container mx-auto px-4">
  //                 <h2 className="text-3xl font-bold text-center mb-12">Why Choose HostelHub?</h2>
  //                 <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">

  //                     <Link to="/home/mess" className="transform transition-transform hover:-translate-y-1 hover:scale-105">
  //                         <div className="bg-white p-8 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300">
  //                             <div className="text-blue-600 text-4xl mb-4">🍽️</div>
  //                             <h3 className="text-xl font-semibold mb-4">Rate Your Mess</h3>
  //                             <p className="text-gray-600">Share your dining experience and help others make informed choices about their meals.</p>
  //                         </div>
  //                     </Link>

  //                     <Link to="/home/lost" className="transform transition-transform hover:-translate-y-1 hover:scale-105">
  //                         <div className="bg-white p-8 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300">
  //                             <div className="text-blue-600 text-4xl mb-4">🔍</div>
  //                             <h3 className="text-xl font-semibold mb-4">Lost & Found</h3>
  //                             <p className="text-gray-600">Lost something? Found something? Our platform helps you connect with your belongings.</p>
  //                         </div>
  //                     </Link>

  //                     <Link to="/home/polls" className="transform transition-transform hover:-translate-y-1 hover:scale-105">
  //                         <div className="bg-white p-8 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300">
  //                             <div className="text-blue-600 text-4xl mb-4">📊</div>
  //                             <h3 className="text-xl font-semibold mb-4">Quick Polls</h3>
  //                             <p className="text-gray-600">Participate in hostel polls and make your voice heard in important decisions.</p>
  //                         </div>
  //                     </Link>

  //                 </div>
  //             </div>
  //         </div> */}

  //         {/* Features Section */}
  //         <div className="py-20 bg-gray-50">
  //             <div className="container mx-auto px-4">
  //                 <h2 className="text-3xl font-bold text-center mb-12">Why Choose HostelHub?</h2>
  //                 <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">

  //                     <Link to="/home/mess">
  //                         <motion.div
  //                             className="bg-white p-8 rounded-xl h-full shadow-md hover:shadow-lg transition-shadow duration-300 transform hover:-translate-y-1 hover:scale-105"
  //                             initial={{ opacity: 0, y: 50 }}
  //                             whileInView={{ opacity: 1, y: 0 }}
  //                             viewport={{ once: true }}
  //                             transition={{ duration: 0.6, ease: "easeOut" }}
  //                         >
  //                             <div className="text-blue-600 text-4xl mb-4">
  //                                 <Utensils className="w-10 h-10 mx-auto" />
  //                             </div>
  //                             <h3 className="text-xl font-semibold mb-4">Rate Your Mess</h3>
  //                             <p className="text-gray-600">Share your dining experience and help others make informed choices about their meals.</p>
  //                         </motion.div>
  //                     </Link>

  //                     <Link to="/home/lost">
  //                         <motion.div
  //                             className="bg-white p-8 rounded-xl h-full shadow-md hover:shadow-lg transition-shadow duration-300 transform hover:-translate-y-1 hover:scale-105"
  //                             initial={{ opacity: 0, y: 50 }}
  //                             whileInView={{ opacity: 1, y: 0 }}
  //                             viewport={{ once: true }}
  //                             transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
  //                         >
  //                             <div className="text-blue-600 text-4xl mb-4">
  //                                 <Search className="w-10 h-10 mx-auto" />
  //                             </div>
  //                             <h3 className="text-xl font-semibold mb-4">Lost & Found</h3>
  //                             <p className="text-gray-600">Lost something? Found something? Our platform helps you connect with your belongings.</p>
  //                         </motion.div>
  //                     </Link>

  //                     <Link to="/home/polls">
  //                         <motion.div
  //                             className="bg-white p-8 rounded-xl h-full shadow-md hover:shadow-lg transition-shadow duration-300 transform hover:-translate-y-1 hover:scale-105"
  //                             initial={{ opacity: 0, y: 50 }}
  //                             whileInView={{ opacity: 1, y: 0 }}
  //                             viewport={{ once: true }}
  //                             transition={{ duration: 0.6, delay: 0.4, ease: "easeOut" }}
  //                         >
  //                             <div className="text-blue-600 text-4xl mb-4">
  //                                 <BarChart3 className="w-10 h-10 mx-auto" />
  //                             </div>
  //                             <h3 className="text-xl font-semibold mb-4">Quick Polls</h3>
  //                             <p className="text-gray-600">Participate in hostel polls and make your voice heard in important decisions.</p>
  //                         </motion.div>
  //                     </Link>

  //                 </div>
  //             </div>
  //         </div>

  //         {/* How It Works Section */}
  //         {/* <div className="py-20 bg-white">
  //             <div className="container mx-auto px-4">
  //                 <h2 className="text-3xl font-bold text-center mb-12">How It Works</h2>
  //                 <div className="grid grid-cols-1 md:grid-cols-4 gap-8 max-w-6xl mx-auto">
  //                     <div className="text-center">
  //                         <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
  //                             <span className="text-2xl font-bold text-blue-600">1</span>
  //                         </div>
  //                         <h3 className="font-semibold mb-2">Sign Up</h3>
  //                         <p className="text-gray-600">Create your account in minutes</p>
  //                     </div>
  //                     <div className="text-center">
  //                         <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
  //                             <span className="text-2xl font-bold text-blue-600">2</span>
  //                         </div>
  //                         <h3 className="font-semibold mb-2">Explore Features</h3>
  //                         <p className="text-gray-600">Discover all our services</p>
  //                     </div>
  //                     <div className="text-center">
  //                         <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
  //                             <span className="text-2xl font-bold text-blue-600">3</span>
  //                         </div>
  //                         <h3 className="font-semibold mb-2">Engage</h3>
  //                         <p className="text-gray-600">Rate, report, and participate</p>
  //                     </div>
  //                     <div className="text-center">
  //                         <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
  //                             <span className="text-2xl font-bold text-blue-600">4</span>
  //                         </div>
  //                         <h3 className="font-semibold mb-2">Connect</h3>
  //                         <p className="text-gray-600">Join the hostel community</p>
  //                     </div>
  //                 </div>
  //             </div>
  //         </div> */}

  //         {/* How It Works Section */}
  //         <div className="py-20 bg-white">
  //             <div className="container mx-auto px-4">
  //                 <h2 className="text-3xl font-bold text-center mb-12">How It Works</h2>
  //                 <div className="grid grid-cols-1 md:grid-cols-4 gap-8 max-w-6xl mx-auto">

  //                     {[{
  //                         number: 1,
  //                         title: "Sign Up",
  //                         description: "Create your account in minutes",
  //                     }, {
  //                         number: 2,
  //                         title: "Explore Features",
  //                         description: "Discover all our services",
  //                     }, {
  //                         number: 3,
  //                         title: "Engage",
  //                         description: "Rate, report, and participate",
  //                     }, {
  //                         number: 4,
  //                         title: "Connect",
  //                         description: "Join the hostel community",
  //                     }].map(({ number, title, description }, i) => (
  //                         <motion.div
  //                             key={number}
  //                             className="text-center cursor-default p-4 rounded-lg"
  //                             initial={{ opacity: 0, scale: 0.95 }}
  //                             whileInView={{ opacity: 1, scale: 1 }}
  //                             viewport={{ once: true }}
  //                             transition={{ duration: 0.6, delay: i * 0.2 }}
  //                             whileHover={{ scale: 1.05, transition: { duration: 0.15, ease: "easeOut" } }}
  //                         >
  //                             <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
  //                                 <span className="text-2xl font-bold text-blue-600">{number}</span>
  //                             </div>
  //                             <h3 className="font-semibold mb-2">{title}</h3>
  //                             <p className="text-gray-600">{description}</p>
  //                         </motion.div>
  //                     ))}

  //                 </div>
  //             </div>
  //         </div>

  //         {/* Testimonials Section */}
  //         {/* <div className="py-20 bg-gray-50">
  //             <div className="container mx-auto px-4">
  //                 <h2 className="text-3xl font-bold text-center mb-12">What Students Say</h2>
  //                 <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
  //                     <div className="bg-white p-6 rounded-xl shadow-md">
  //                         <div className="flex items-center mb-4">
  //                             <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold">
  //                                 R
  //                             </div>
  //                             <div className="ml-4">
  //                                 <h4 className="font-semibold">Rahul Sharma</h4>
  //                                 <p className="text-gray-600 text-sm">3rd Year, CSE</p>
  //                             </div>
  //                         </div>
  //                         <p className="text-gray-600">"HostelHub made it so easy to find my lost laptop. The community is really helpful!"</p>
  //                     </div>
  //                     <div className="bg-white p-6 rounded-xl shadow-md">
  //                         <div className="flex items-center mb-4">
  //                             <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold">
  //                                 P
  //                             </div>
  //                             <div className="ml-4">
  //                                 <h4 className="font-semibold">Priya Patel</h4>
  //                                 <p className="text-gray-600 text-sm">2nd Year, ECE</p>
  //                             </div>
  //                         </div>
  //                         <p className="text-gray-600">"The mess rating system is fantastic! It helped me choose the best mess for my dietary preferences."</p>
  //                     </div>
  //                     <div className="bg-white p-6 rounded-xl shadow-md">
  //                         <div className="flex items-center mb-4">
  //                             <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold">
  //                                 A
  //                             </div>
  //                             <div className="ml-4">
  //                                 <h4 className="font-semibold">Amit Kumar</h4>
  //                                 <p className="text-gray-600 text-sm">1st Year, ME</p>
  //                             </div>
  //                         </div>
  //                         <p className="text-gray-600">"Quick polls feature helped us decide on hostel events. Really useful for student participation!"</p>
  //                     </div>
  //                 </div>
  //             </div>
  //         </div> */}

  //         <div className="py-20 bg-gray-50">
  //             <div className="container mx-auto px-4">
  //                 <h2 className="text-3xl font-bold text-center mb-12">What Students Say</h2>
  //                 <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">

  //                     {[{
  //                         initial: "R",
  //                         name: "Rahul Sharma",
  //                         yearDept: "3rd Year, CSE",
  //                         quote: '"HostelHub made it so easy to find my lost laptop. The community is really helpful!"',
  //                     }, {
  //                         initial: "P",
  //                         name: "Priya Patel",
  //                         yearDept: "2nd Year, ECE",
  //                         quote: '"The mess rating system is fantastic! It helped me choose the best mess for my dietary preferences."',
  //                     }, {
  //                         initial: "A",
  //                         name: "Amit Kumar",
  //                         yearDept: "1st Year, ME",
  //                         quote: '"Quick polls feature helped us decide on hostel events. Really useful for student participation!"',
  //                     }].map(({ initial, name, yearDept, quote }, i) => (
  //                         <motion.div
  //                             key={name}
  //                             className="bg-white p-6 rounded-xl shadow-md cursor-default"
  //                             initial={{ opacity: 0, y: 20 }}
  //                             whileInView={{ opacity: 1, y: 0 }}
  //                             viewport={{ once: true }}
  //                             transition={{ duration: 0.7, delay: i * 0.2 }}
  //                             whileHover={{ y: -5, boxShadow: "0 10px 15px rgba(0, 0, 0, 0.15)" , transition: { duration: 0.15, ease: "easeOut" }}}
  //                         >
  //                             <div className="flex items-center mb-4">
  //                                 <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold text-lg">
  //                                     {initial}
  //                                 </div>
  //                                 <div className="ml-4">
  //                                     <h4 className="font-semibold">{name}</h4>
  //                                     <p className="text-gray-600 text-sm">{yearDept}</p>
  //                                 </div>
  //                             </div>
  //                             <p className="text-gray-600">{quote}</p>
  //                         </motion.div>
  //                     ))}

  //                 </div>
  //             </div>
  //         </div>

  //         {/* Call to Action Section */}
  //         {/* <div className="py-20 bg-blue-600 text-white">
  //             <div className="container mx-auto px-4 text-center">
  //                 <h2 className="text-3xl font-bold mb-6">Ready to Get Started?</h2>
  //                 <p className="text-xl mb-8">Join thousands of students already using HostelHub</p>
  //                 <Link
  //                     to="/home/mess"
  //                     className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-3 rounded-full text-lg font-semibold transition duration-300"
  //                 >
  //                     Explore Features
  //                 </Link>
  //             </div>
  //         </div> */}
  //         <motion.div
  //             className="py-15 bg-blue-600 text-white "
  //             initial={{ opacity: 0, scale: 0.95 }}
  //             animate={{ opacity: 1, scale: 1 }}
  //             transition={{ duration: 0.6, ease: "easeOut" }}
  //         >
  //             <div className="container mx-auto px-4 text-center max-w-3xl mx-auto">
  //                 <h2 className="text-xl md:text-3xl font-extrabold mb-6 drop-shadow-md">
  //                     Ready to Get Started?
  //                 </h2>
  //                 <p className="text-lg md:text-xl mb-8 leading-relaxed drop-shadow-sm">
  //                     Join thousands of students already using <span className="font-semibold ">HostelHub</span> to improve their hostel life — from mess ratings and lost & found to quick polls and community support.
  //                 </p>
  //                 <Link
  //                     to="/home/mess"
  //                     className="inline-block bg-white text-blue-600 hover:bg-white hover:text-blue-900 font-semibold px-10 py-4 rounded-full text-md shadow-lg transform transition duration-300 animate-pulse hover:animate-none"
  //                 >
  //                     Explore Features
  //                 </Link>
  //             </div>
  //         </motion.div>
  //     </div>
  // );

  // return (
  //     <div className="min-h-screen">
  //         {/* Hero Section */}
  //         <div className="relative h-[600px]">
  //             <div
  //                 className="absolute inset-0 bg-cover bg-center bg-no-repeat"
  //                 style={{
  //                     backgroundImage: `url('https://images.unsplash.com/photo-1556159992-e189f8e50104?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')`,
  //                 }}
  //             />
  //             <div className="relative z-10 h-full flex items-center justify-center">
  //                 <div className="text-center text-white px-4">
  //                     <h1 className="text-3xl md:text-6xl font-bold mb-6">Welcome to HostelHub</h1>
  //                     <p className="text-md md:text-2xl mb-8">Your One-Stop Solution for Hostel Life</p>
  //                     <Link
  //                         to="/home/mess"
  //                         className="bg-purple-500 hover:bg-purple-700 text-white px-8 py-3 rounded-full text-sm md:text-lg font-semibold transition duration-300"
  //                     >
  //                         Get Started
  //                     </Link>
  //                 </div>
  //             </div>
  //         </div>

  //         {/* Features Section */}
  //         <div className="py-20 bg-gray-50">
  //             <div className="container mx-auto px-4">
  //                 <h2 className="text-3xl font-bold text-center mb-12">Why Choose HostelHub?</h2>
  //                 <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">

  //                     <Link to="/home/mess">
  //                         <motion.div
  //                             className="bg-white p-8 rounded-xl h-full shadow-md hover:shadow-lg transition-shadow duration-300 transform hover:-translate-y-1 hover:scale-105"
  //                             initial={{ opacity: 0, y: 50 }}
  //                             whileInView={{ opacity: 1, y: 0 }}
  //                             viewport={{ once: true }}
  //                             transition={{ duration: 0.6, ease: "easeOut" }}
  //                         >
  //                             <div className="text-purple-500 text-4xl mb-4">
  //                                 <Utensils className="w-10 h-10 mx-auto" />
  //                             </div>
  //                             <h3 className="text-xl font-semibold mb-4">Rate Your Mess</h3>
  //                             <p className="text-gray-600">Share your dining experience and help others make informed choices about their meals.</p>
  //                         </motion.div>
  //                     </Link>

  //                     <Link to="/home/lost">
  //                         <motion.div
  //                             className="bg-white p-8 rounded-xl h-full shadow-md hover:shadow-lg transition-shadow duration-300 transform hover:-translate-y-1 hover:scale-105"
  //                             initial={{ opacity: 0, y: 50 }}
  //                             whileInView={{ opacity: 1, y: 0 }}
  //                             viewport={{ once: true }}
  //                             transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
  //                         >
  //                             <div className="text-purple-500 text-4xl mb-4">
  //                                 <Search className="w-10 h-10 mx-auto" />
  //                             </div>
  //                             <h3 className="text-xl font-semibold mb-4">Lost & Found</h3>
  //                             <p className="text-gray-600">Lost something? Found something? Our platform helps you connect with your belongings.</p>
  //                         </motion.div>
  //                     </Link>

  //                     <Link to="/home/polls">
  //                         <motion.div
  //                             className="bg-white p-8 rounded-xl h-full shadow-md hover:shadow-lg transition-shadow duration-300 transform hover:-translate-y-1 hover:scale-105"
  //                             initial={{ opacity: 0, y: 50 }}
  //                             whileInView={{ opacity: 1, y: 0 }}
  //                             viewport={{ once: true }}
  //                             transition={{ duration: 0.6, delay: 0.4, ease: "easeOut" }}
  //                         >
  //                             <div className="text-purple-500 text-4xl mb-4">
  //                                 <BarChart3 className="w-10 h-10 mx-auto" />
  //                             </div>
  //                             <h3 className="text-xl font-semibold mb-4">Quick Polls</h3>
  //                             <p className="text-gray-600">Participate in hostel polls and make your voice heard in important decisions.</p>
  //                         </motion.div>
  //                     </Link>

  //                 </div>
  //             </div>
  //         </div>

  //         {/* How It Works Section */}
  //         <div className="py-20 bg-white">
  //             <div className="container mx-auto px-4">
  //                 <h2 className="text-3xl font-bold text-center mb-12">How It Works</h2>
  //                 <div className="grid grid-cols-1 md:grid-cols-4 gap-8 max-w-6xl mx-auto">
  //                     {[{
  //                         number: 1,
  //                         title: "Sign Up",
  //                         description: "Create your account in minutes",
  //                     }, {
  //                         number: 2,
  //                         title: "Explore Features",
  //                         description: "Discover all our services",
  //                     }, {
  //                         number: 3,
  //                         title: "Engage",
  //                         description: "Rate, report, and participate",
  //                     }, {
  //                         number: 4,
  //                         title: "Connect",
  //                         description: "Join the hostel community",
  //                     }].map(({ number, title, description }, i) => (
  //                         <motion.div
  //                             key={number}
  //                             className="text-center cursor-default p-4 rounded-lg"
  //                             initial={{ opacity: 0, scale: 0.95 }}
  //                             whileInView={{ opacity: 1, scale: 1 }}
  //                             viewport={{ once: true }}
  //                             transition={{ duration: 0.6, delay: i * 0.2 }}
  //                             whileHover={{ scale: 1.05, transition: { duration: 0.15, ease: "easeOut" } }}
  //                         >
  //                             <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
  //                                 <span className="text-2xl font-bold text-purple-500">{number}</span>
  //                             </div>
  //                             <h3 className="font-semibold mb-2">{title}</h3>
  //                             <p className="text-gray-600">{description}</p>
  //                         </motion.div>
  //                     ))}
  //                 </div>
  //             </div>
  //         </div>

  //         {/* Testimonials Section */}
  //         <div className="py-20 bg-gray-50">
  //             <div className="container mx-auto px-4">
  //                 <h2 className="text-3xl font-bold text-center mb-12">What Students Say</h2>
  //                 <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
  //                     {[{
  //                         initial: "R",
  //                         name: "Rahul Sharma",
  //                         yearDept: "3rd Year, CSE",
  //                         quote: "HostelHub made it so easy to find my lost laptop. The community is really helpful!",
  //                     }, {
  //                         initial: "P",
  //                         name: "Priya Patel",
  //                         yearDept: "2nd Year, ECE",
  //                         quote: "The mess rating system is fantastic! It helped me choose the best mess for my dietary preferences.",
  //                     }, {
  //                         initial: "A",
  //                         name: "Amit Kumar",
  //                         yearDept: "1st Year, ME",
  //                         quote: "Quick polls feature helped us decide on hostel events. Really useful for student participation!",
  //                     }].map(({ initial, name, yearDept, quote }, i) => (
  //                         <motion.div
  //                             key={name}
  //                             className="bg-white p-6 rounded-xl shadow-md cursor-default"
  //                             initial={{ opacity: 0, y: 20 }}
  //                             whileInView={{ opacity: 1, y: 0 }}
  //                             viewport={{ once: true }}
  //                             transition={{ duration: 0.7, delay: i * 0.2 }}
  //                             whileHover={{ y: -5 }}
  //                         >
  //                             <div className="flex items-center mb-4">
  //                                 <div className="w-12 h-12 bg-purple-500 rounded-full flex items-center justify-center text-white font-bold">
  //                                     {initial}
  //                                 </div>
  //                                 <div className="ml-4">
  //                                     <h4 className="font-semibold">{name}</h4>
  //                                     <p className="text-gray-600 text-sm">{yearDept}</p>
  //                                 </div>
  //                             </div>
  //                             <p className="text-gray-600">"{quote}"</p>
  //                         </motion.div>
  //                     ))}
  //                 </div>
  //             </div>
  //         </div>

  //         {/* Call to Action Section */}
  //         <motion.div
  //             className="py-15 bg-purple-600 text-white"
  //             initial={{ opacity: 0, scale: 0.95 }}
  //             animate={{ opacity: 1, scale: 1 }}
  //             transition={{ duration: 0.6, ease: "easeOut" }}
  //         >
  //             <div className="container mx-auto px-4 text-center max-w-3xl">
  //                 <h2 className="text-xl md:text-3xl font-extrabold mb-6 drop-shadow-md">
  //                     Ready to Get Started?
  //                 </h2>
  //                 <p className="text-lg md:text-xl mb-8 leading-relaxed drop-shadow-sm">
  //                     Join thousands of students already using <span className="font-semibold">HostelHub</span> to improve their hostel life — from mess ratings and lost & found to quick polls and community support.
  //                 </p>
  //                 <Link
  //                     to="/home/mess"
  //                     className="inline-block bg-white text-purple-600 hover:bg-white hover:text-purple-900 font-semibold px-10 py-4 rounded-full text-md shadow-lg transform transition duration-300 animate-pulse hover:animate-none"
  //                 >
  //                     Explore Features
  //                 </Link>
  //             </div>
  //         </motion.div>

  //     </div>
  // );

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <div className="relative h-[600px]">
        {/* <div
                    className="absolute inset-0 bg-cover bg-center bg-no-repeat"
                    style={{
                        backgroundImage: `url('https://images.unsplash.com/photo-1556159992-e189f8e50104?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')`,
                    }}
                /> */}
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1556159992-e189f8e50104?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')`,
            zIndex: 0,
          }}
        />

        {/* Gray Overlay */}
        <div
          className="absolute inset-0 bg-gray-800"
          style={{ opacity: 0.5, zIndex: 5 }}
        />
        <div className="relative z-10 h-full flex items-center justify-center">
          <div className="text-center text-white px-4">
            <h1 className="text-3xl md:text-6xl font-bold mb-6">
              Welcome to HostelHub
            </h1>
            <p className="text-md md:text-2xl mb-8">
              Your One-Stop Solution for Hostel Life
            </p>
            <Link
              to="/home/mess"
              className="btn-primary-gradient hover:brightness-110 text-white px-8 py-3 rounded-full text-sm md:text-lg font-semibold transition duration-300"
            >
              Get Started
            </Link>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="py-20 bg-rose-100">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-rose-800">
            Why Choose HostelHub?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-30 max-w-6xl mx-auto">
            <Link to="/home/mess">
              <motion.div
                className="bg-white p-8 rounded-xl h-full shadow-md hover:shadow-lg transition-shadow duration-300 transform hover:-translate-y-1 hover:scale-105"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, ease: "easeOut" }}
              >
                <div className="text-rose-500 text-4xl mb-4">
                  <Utensils className="w-10 h-10 mx-auto" />
                </div>
                <h3 className="text-xl font-semibold mb-4 text-rose-700">
                  Rate Your Mess
                </h3>
                <p className="text-gray-600">
                  Share your dining experience and help others make informed
                  choices about their meals.
                </p>
              </motion.div>
            </Link>

            <Link to="/home/lost">
              <motion.div
                className="bg-white p-8 rounded-xl h-full shadow-md hover:shadow-lg transition-shadow duration-300 transform hover:-translate-y-1 hover:scale-105"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
              >
                <div className="text-rose-500 text-4xl mb-4">
                  <Search className="w-10 h-10 mx-auto" />
                </div>
                <h3 className="text-xl font-semibold mb-4 text-rose-700">
                  Lost & Found
                </h3>
                <p className="text-gray-600">
                  Lost something? Found something? Our platform helps you
                  connect with your belongings.
                </p>
              </motion.div>
            </Link>
            {/* 
                        <Link to="/home/polls">
                            <motion.div
                                className="bg-white p-8 rounded-xl h-full shadow-md hover:shadow-lg transition-shadow duration-300 transform hover:-translate-y-1 hover:scale-105"
                                initial={{ opacity: 0, y: 50 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6, delay: 0.4, ease: "easeOut" }}
                            >
                                <div className="text-rose-500 text-4xl mb-4">
                                    <BarChart3 className="w-10 h-10 mx-auto" />
                                </div>
                                <h3 className="text-xl font-semibold mb-4 text-rose-700">Quick Polls</h3>
                                <p className="text-gray-600">Participate in hostel polls and make your voice heard in important decisions.</p>
                            </motion.div>
                        </Link> */}
          </div>
        </div>
      </div>

      {/* How It Works Section */}
      <div className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-rose-800">
            How It Works
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 max-w-6xl mx-auto">
            {[
              {
                number: 1,
                title: "Sign Up",
                description: "Create your account in minutes",
              },
              {
                number: 2,
                title: "Explore Features",
                description: "Discover all our services",
              },
              {
                number: 3,
                title: "Engage",
                description: "Rate, report, and participate",
              },
              {
                number: 4,
                title: "Connect",
                description: "Join the hostel community",
              },
            ].map(({ number, title, description }, i) => (
              <motion.div
                key={number}
                className="text-center cursor-default p-4 rounded-lg"
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.2 }}
                whileHover={{
                  scale: 1.05,
                  transition: { duration: 0.15, ease: "easeOut" },
                }}
              >
                <div className="bg-rose-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-rose-600">
                    {number}
                  </span>
                </div>
                <h3 className="font-semibold mb-2 text-rose-700">{title}</h3>
                <p className="text-gray-600">{description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Testimonials Section */}
      <div className="py-20 bg-rose-100">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-rose-800">
            What Students Say
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {[
              {
                initial: "R",
                name: "Rahul Sharma",
                yearDept: "3rd Year, CSE",
                quote:
                  "HostelHub made it so easy to find my lost laptop. The community is really helpful!",
              },
              {
                initial: "P",
                name: "Priya Patel",
                yearDept: "2nd Year, ECE",
                quote:
                  "The mess rating system is fantastic! It helped me choose the best mess for my dietary preferences.",
              },
              {
                initial: "A",
                name: "Amit Kumar",
                yearDept: "1st Year, ME",
                quote:
                  "Quick polls feature helped us decide on hostel events. Really useful for student participation!",
              },
            ].map(({ initial, name, yearDept, quote }, i) => (
              <motion.div
                key={name}
                className="bg-white p-6 rounded-xl shadow-md cursor-default"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: i * 0.2 }}
                whileHover={{ y: -5 }}
              >
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-rose-600 rounded-full flex items-center justify-center text-white font-bold">
                    {initial}
                  </div>
                  <div className="ml-4">
                    <h4 className="font-semibold text-rose-700">{name}</h4>
                    <p className="text-gray-600 text-sm">{yearDept}</p>
                  </div>
                </div>
                <p className="text-gray-600">"{quote}"</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Call to Action Section */}
      <motion.div
        className="py-15 bg-gradient-to-r from-red-700 via-red-500 to-pink-500  text-white"
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <div className="container mx-auto px-4 text-center max-w-3xl">
          <h2 className="text-xl md:text-3xl font-extrabold mb-6 drop-shadow-md">
            Ready to Get Started?
          </h2>
          <p className="text-lg md:text-xl mb-8 leading-relaxed drop-shadow-sm">
            Join thousands of students already using{" "}
            <span className="font-semibold">HostelHub</span> to improve their
            hostel life — from mess ratings and lost & found to quick polls and
            community support.
          </p>
          <Link
            to="/home/mess"
            className="inline-block bg-white text-rose-600 hover:bg-white hover:text-rose-900 font-semibold px-10 py-4 rounded-full text-md shadow-lg transform transition duration-300  hover:animate-none"
          >
            Explore Features
          </Link>
        </div>
      </motion.div>
    </div>
  );
}
