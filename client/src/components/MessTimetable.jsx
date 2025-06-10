
// export default function MessTimetable() {

//   return (
//     <div className="max-w-6xl mx-auto mb-4 overflow-x-auto bg-white ">
//       <div className="bg-white shadow-md mb-4 overflow-x-auto scroll-auto">
//         <table
//           // ref={tableRef}
//           className="w-full min-w-[600px] overflow-x-auto tracking-wide table-auto border-collapse text-sm"
//         >
//           <thead>
//             <tr className="bg-blue-500 text-left text-white font-light">
//               <th className="p-2 md:p-3 font-semibold border border-gray-300 text-xs md:text-sm">
//                 Day
//               </th>
//               <th className="p-2 md:p-3 font-semibold border border-gray-300 text-xs md:text-sm">
//                 Breakfast
//               </th>
//               <th className="p-2 md:p-3 font-semibold border border-gray-300 text-xs md:text-sm">
//                 Lunch
//               </th>
//               <th className="p-2 md:p-3 font-semibold border border-gray-300 text-xs md:text-sm">
//                 Snacks
//               </th>
//               <th className="p-2 md:p-3 font-semibold border border-gray-300 text-xs md:text-sm">
//                 Dinner
//               </th>
//             </tr>
//           </thead>
//           <tbody>
//             {[
//               [
//                 "Monday",
//                 "Aloo Pyaaz Paratha(2), Butter/Curd/Toasted Bread(4), Boiled Egg(2), Fruits/Tea/Milk",
//                 "Rajma, Rice, Seasonal Veg (Bhindi), Roti, Mix Veg Raita, Green salad",
//                 "Poha, Tea",
//                 "Mix Veg, Soya Matar, Dal Makhani, Rice, Roti, Rice Kheer, Green Salad, Papad/Fryums",
//               ],
//               [
//                 "Tuesday",
//                 "Uttapam(2), Sambhar, Coconut Chutney/Toasted Bread(4), Boiled Egg(2), Fruits, Tea/Milk",
//                 "Aloo Parwal, Urad Chana Dal, Roti, Rice, Boondi Raita, Green Salad",
//                 "Chowmein/Macroni, Nimbu Pani",
//                 "Choley, Sitafal, Dum Aloo, Rice, Poori, Custard, Green Salad, Papad/Fryums",
//               ],
//               [
//                 "Wednesday",
//                 "Matar Kulcha(2), Boiled Egg(2), Toasted Bread(4), Butter/Jam, Tea/Milk",
//                 "Lobiya Dal, Kathal, Rice,Roti,Salad,Boondi Raita",
//                 "Aloo Sandwich, Lassi",
//                 "Butter Chicken/Kadhai Paneer (LTD),Mix Dal, Roti, Ice Cream(1),Green Salad",
//               ],
//               [
//                 "Thursday",
//                 "Vada, Idli,(2+2), Sambhar,Chutney/Bread omelette(1), /Toasted Bread(4), Butter/Jam, Fruits, Tea/Milk",
//                 "Kadhi Pakora, Aloo Jeera, Rice, Roti, Green Salad",
//                 "Dhokla(2 Pcs), Roohafza",
//                 "Aloo Matar, Tinda, Punchmeal Dal, Rice, Roti, Green Salad, Chocopie, Papad/Fryums",
//               ],
//               [
//                 "Friday",
//                 "Mix Paratha(2), Butter/Curd/Toasted Bread(4), Boiled Egg(2), Fruits, Tea/Milk",
//                 "Kala Chana, Lauki, Roti, Rice, Mix Veg Raita, Greeen Salad",
//                 "Corn Chat, Nimbu Pani",
//                 "Curry(2)/Matar Paneer(LTD), Kali Masoor Dal, Rice, Roti, Green Salad",
//               ],
//               [
//                 "Saturday",
//                 "Vermicilli/Butter, Toasted Bread(4), Jam, Bread omelette(1),Sprouts, Tea/Milk",
//                 "Choley Bhature(2), Rice, Curd, Laccha,Onion",
//                 "Mexican Sandwich(2), Tea",
//                 "Khichdi, Papad/Fryums, Curd, Pickle, Sweet",
//               ],
//               [
//                 "Sunday",
//                 "Pav Bhaji(2piece)/Boiled Egg(2)/Toasted Bread(4), Butter/Jam, Tea/Milk,Sprouts",
//                 "Arhal Dal, Seasonal Veg(Karela), Rice, Roti, Green Salad",
//                 "Samosa(2), Tea",
//                 "Chicken Biryani(2Pcs)/Veg Biryani, Boondi Raita, Chutney, Gulab Jamun(2)",
//               ],
//             ].map(([day, b, l, s, d]) => (
//               <tr key={day}>
//                 <td className="p-2 md:p-3 text-gray-700 border font-semibold border-gray-300 text-xs md:text-sm">
//                   {day}
//                 </td>
//                 <td className="p-2 md:p-3 text-gray-700 border border-gray-300 text-xs md:text-sm">
//                   {b}
//                 </td>
//                 <td className="p-2 md:p-3 text-gray-700 border border-gray-300 text-xs md:text-sm">
//                   {l}
//                 </td>
//                 <td className="p-2 md:p-3 text-gray-700 border border-gray-300 text-xs md:text-sm">
//                   {s}
//                 </td>
//                 <td className="p-2 md:p-3 text-gray-700 border border-gray-300 text-xs md:text-sm">
//                   {d}
//                 </td>
//               </tr>
//             ))}
//           </tbody>
//         </table>
//       </div>
//       <div className="mt-4 tracking-wide p-3 sm:p-4 bg-gray-50 border border-gray-200 rounded-md text-sm sm:text-base">
//         <p className="mt-1  text-gray-600">
//           <span className="font-medium text-sm md:text-md mt-1 mb-2">
//             {" "}
//             Note:
//           </span>
//           <ul className="list-disc pl-4 text-xs md:text-sm space-y-0.5">
//             <li>
//               Every breakfast will have Coffee powder, Sugar, Bread Toast &
//               Every Lunch and Dinner will include Green Salad + Pickle.{" "}
//             </li>
//             <li>The quantity of milk will be 200ml.</li>
//             <li>
//               Seasonal Veg, Bhindi, Karela, Gobhi, Parwal, Desi Tinda, Ghiya,
//               Beans, etc.
//             </li>
//           </ul>
//         </p>
//         <div className="md:mt-4 w-full flex flex-col md:flex md:flex-row space-x-0.5 space-between">
//           <p className="mt-4 w-1/2  text-gray-600">
//             <span className="font-medium text-sm md:text-md mt-1 mb-2">
//               MessTiming(General):
//             </span>
//             <ul className="list-disc pl-4 text-xs md:text-sm space-y-0.5">
//               <li>
//                 <span className="font-semibold">Breakfast</span> : 7:30am -
//                 9:30am
//               </li>
//               <li>
//                 <span className="font-semibold">Lunch</span>: 12:30pm - 2:30pm
//               </li>
//               <li>
//                 <span className="font-semibold">Snacks</span>: 5:00pm - 6:00pm
//               </li>
//               <li>
//                 <span className="font-semibold">Dinner</span>: 7:30pm - 9:30pm
//               </li>
//             </ul>
//           </p>
//           <p className="mt-4 w-1/2  text-gray-600">
//             <span className="font-medium text-sm md:text-md mt-1 mb-2">
//               MessTiming(Saturday and Sunday):
//             </span>
//             <ul className="list-disc pl-4 text-xs md:text-sm space-y-0.5">
//               <li>
//                 <span className="font-semibold">Breakfast</span> : 7:30am -
//                 9:30am
//               </li>
//               <li>
//                 <span className="font-semibold">Lunch</span>: 12:30pm - 2:30pm
//               </li>
//               <li>
//                 <span className="font-semibold">Snacks</span>: 5:00pm - 6:00pm
//               </li>
//               <li>
//                 <span className="font-semibold">Dinner</span>: 7:30pm - 9:30pm
//               </li>
//             </ul>
//           </p>
//         </div>
//       </div>
//     </div>
//   );
// }


// export default function MessTimetable() {
//   return (
//     <div className="max-w-6xl mx-auto mb-4 overflow-x-auto bg-white">
//       <div className="shadow-md mb-4 overflow-x-auto scroll-auto">
//         <table className="w-full min-w-[600px] overflow-x-auto tracking-wide table-auto border-collapse text-sm">
//           <thead>
//             <tr className="bg-[#3b82f6] text-left text-white font-light">
//               <th className="p-2 md:p-3 font-semibold border border-gray-300 text-xs md:text-sm">
//                 Day
//               </th>
//               <th className="p-2 md:p-3 font-semibold border border-gray-300 text-xs md:text-sm">
//                 Breakfast
//               </th>
//               <th className="p-2 md:p-3 font-semibold border border-gray-300 text-xs md:text-sm">
//                 Lunch
//               </th>
//               <th className="p-2 md:p-3 font-semibold border border-gray-300 text-xs md:text-sm">
//                 Snacks
//               </th>
//               <th className="p-2 md:p-3 font-semibold border border-gray-300 text-xs md:text-sm">
//                 Dinner
//               </th>
//             </tr>
//           </thead>
//           <tbody>
//             {[
//               [
//                 "Monday",
//                 "Aloo Pyaaz Paratha(2), Butter/Curd/Toasted Bread(4), Boiled Egg(2), Fruits/Tea/Milk",
//                 "Rajma, Rice, Seasonal Veg (Bhindi), Roti, Mix Veg Raita, Green salad",
//                 "Poha, Tea",
//                 "Mix Veg, Soya Matar, Dal Makhani, Rice, Roti, Rice Kheer, Green Salad, Papad/Fryums",
//               ],
//               [
//                 "Tuesday",
//                 "Uttapam(2), Sambhar, Coconut Chutney/Toasted Bread(4), Boiled Egg(2), Fruits, Tea/Milk",
//                 "Aloo Parwal, Urad Chana Dal, Roti, Rice, Boondi Raita, Green Salad",
//                 "Chowmein/Macroni, Nimbu Pani",
//                 "Choley, Sitafal, Dum Aloo, Rice, Poori, Custard, Green Salad, Papad/Fryums",
//               ],
//               [
//                 "Wednesday",
//                 "Matar Kulcha(2), Boiled Egg(2), Toasted Bread(4), Butter/Jam, Tea/Milk",
//                 "Lobiya Dal, Kathal, Rice,Roti,Salad,Boondi Raita",
//                 "Aloo Sandwich, Lassi",
//                 "Butter Chicken/Kadhai Paneer (LTD),Mix Dal, Roti, Ice Cream(1),Green Salad",
//               ],
//               [
//                 "Thursday",
//                 "Vada, Idli,(2+2), Sambhar,Chutney/Bread omelette(1), /Toasted Bread(4), Butter/Jam, Fruits, Tea/Milk",
//                 "Kadhi Pakora, Aloo Jeera, Rice, Roti, Green Salad",
//                 "Dhokla(2 Pcs), Roohafza",
//                 "Aloo Matar, Tinda, Punchmeal Dal, Rice, Roti, Green Salad, Chocopie, Papad/Fryums",
//               ],
//               [
//                 "Friday",
//                 "Mix Paratha(2), Butter/Curd/Toasted Bread(4), Boiled Egg(2), Fruits, Tea/Milk",
//                 "Kala Chana, Lauki, Roti, Rice, Mix Veg Raita, Greeen Salad",
//                 "Corn Chat, Nimbu Pani",
//                 "Curry(2)/Matar Paneer(LTD), Kali Masoor Dal, Rice, Roti, Green Salad",
//               ],
//               [
//                 "Saturday",
//                 "Vermicilli/Butter, Toasted Bread(4), Jam, Bread omelette(1),Sprouts, Tea/Milk",
//                 "Choley Bhature(2), Rice, Curd, Laccha,Onion",
//                 "Mexican Sandwich(2), Tea",
//                 "Khichdi, Papad/Fryums, Curd, Pickle, Sweet",
//               ],
//               [
//                 "Sunday",
//                 "Pav Bhaji(2piece)/Boiled Egg(2)/Toasted Bread(4), Butter/Jam, Tea/Milk,Sprouts",
//                 "Arhal Dal, Seasonal Veg(Karela), Rice, Roti, Green Salad",
//                 "Samosa(2), Tea",
//                 "Chicken Biryani(2Pcs)/Veg Biryani, Boondi Raita, Chutney, Gulab Jamun(2)",
//               ],
//             ].map(([day, b, l, s, d]) => (
//               <tr key={day} className="bg-white">
//                 <td className="p-2 md:p-3 text-gray-700 border font-semibold border-gray-300 text-xs md:text-sm">
//                   {day}
//                 </td>
//                 <td className="p-2 md:p-3 text-gray-700 border border-gray-300 text-xs md:text-sm">
//                   {b}
//                 </td>
//                 <td className="p-2 md:p-3 text-gray-700 border border-gray-300 text-xs md:text-sm">
//                   {l}
//                 </td>
//                 <td className="p-2 md:p-3 text-gray-700 border border-gray-300 text-xs md:text-sm">
//                   {s}
//                 </td>
//                 <td className="p-2 md:p-3 text-gray-700 border border-gray-300 text-xs md:text-sm">
//                   {d}
//                 </td>
//               </tr>
//             ))}
//           </tbody>
//         </table>
//       </div>
//       <div className="mt-4 tracking-wide p-3 sm:p-4 bg-[#f9fafb] border border-gray-200 rounded-md text-sm sm:text-base">
//         <p className="mt-1 text-gray-600">
//           <span className="font-medium text-sm md:text-md mt-1 mb-2">
//             Note:
//           </span>
//           <ul className="list-disc pl-4 text-xs md:text-sm space-y-0.5">
//             <li>
//               Every breakfast will have Coffee powder, Sugar, Bread Toast &
//               Every Lunch and Dinner will include Green Salad + Pickle.
//             </li>
//             <li>The quantity of milk will be 200ml.</li>
//             <li>
//               Seasonal Veg, Bhindi, Karela, Gobhi, Parwal, Desi Tinda, Ghiya,
//               Beans, etc.
//             </li>
//           </ul>
//         </p>
//         <div className="md:mt-4 w-full flex flex-col md:flex md:flex-row space-x-0.5 space-between">
//           <p className="mt-4 w-1/2 text-gray-600">
//             <span className="font-medium text-sm md:text-md mt-1 mb-2">
//               MessTiming(General):
//             </span>
//             <ul className="list-disc pl-4 text-xs md:text-sm space-y-0.5">
//               <li>
//                 <span className="font-semibold">Breakfast</span> : 7:30am -
//                 9:30am
//               </li>
//               <li>
//                 <span className="font-semibold">Lunch</span>: 12:30pm - 2:30pm
//               </li>
//               <li>
//                 <span className="font-semibold">Snacks</span>: 5:00pm - 6:00pm
//               </li>
//               <li>
//                 <span className="font-semibold">Dinner</span>: 7:30pm - 9:30pm
//               </li>
//             </ul>
//           </p>
//           <p className="mt-4 w-1/2 text-gray-600">
//             <span className="font-medium text-sm md:text-md mt-1 mb-2">
//               MessTiming(Saturday and Sunday):
//             </span>
//             <ul className="list-disc pl-4 text-xs md:text-sm space-y-0.5">
//               <li>
//                 <span className="font-semibold">Breakfast</span> : 7:30am -
//                 9:30am
//               </li>
//               <li>
//                 <span className="font-semibold">Lunch</span>: 12:30pm - 2:30pm
//               </li>
//               <li>
//                 <span className="font-semibold">Snacks</span>: 5:00pm - 6:00pm
//               </li>
//               <li>
//                 <span className="font-semibold">Dinner</span>: 7:30pm - 9:30pm
//               </li>
//             </ul>
//           </p>
//         </div>
//       </div>
//     </div>
//   );
// }


// export default function MessTimetable() {
//   return (
//     <div style={{ maxWidth: '72rem', margin: '0 auto', marginBottom: '1rem', overflowX: 'auto', backgroundColor: '#ffffff' }}>
//       <div style={{ boxShadow: '0 1px 3px 0 rgba(0, 0, 0, 0.1)', marginBottom: '1rem', overflowX: 'auto' }}>
//         <table style={{ width: '100%', minWidth: '600px', borderCollapse: 'collapse', fontSize: '0.875rem' }}>
//           <thead>
//             <tr style={{ backgroundColor: '#3b82f6', color: '#ffffff', textAlign: 'left' }}>
//               <th style={{ padding: '0.5rem', border: '1px solid #d1d5db', fontWeight: '600', fontSize: '0.85rem' }}>Day</th>
//               <th style={{ padding: '0.5rem', border: '1px solid #d1d5db', fontWeight: '600', fontSize: '0.85rem' }}>Breakfast</th>
//               <th style={{ padding: '0.5rem', border: '1px solid #d1d5db', fontWeight: '600', fontSize: '0.85rem' }}>Lunch</th>
//               <th style={{ padding: '0.5rem', border: '1px solid #d1d5db', fontWeight: '600', fontSize: '0.85rem' }}>Snacks</th>
//               <th style={{ padding: '0.5rem', border: '1px solid #d1d5db', fontWeight: '600', fontSize: '0.85rem' }}>Dinner</th>
//             </tr>
//           </thead>
//           <tbody>
//             {[
//               [
//                 "Monday",
//                 "Aloo Pyaaz Paratha(2), Butter/Curd/Toasted Bread(4), Boiled Egg(2), Fruits/Tea/Milk",
//                 "Rajma, Rice, Seasonal Veg (Bhindi), Roti, Mix Veg Raita, Green salad",
//                 "Poha, Tea",
//                 "Mix Veg, Soya Matar, Dal Makhani, Rice, Roti, Rice Kheer, Green Salad, Papad/Fryums",
//               ],
//               [
//                 "Tuesday",
//                 "Uttapam(2), Sambhar, Coconut Chutney/Toasted Bread(4), Boiled Egg(2), Fruits, Tea/Milk",
//                 "Aloo Parwal, Urad Chana Dal, Roti, Rice, Boondi Raita, Green Salad",
//                 "Chowmein/Macroni, Nimbu Pani",
//                 "Choley, Sitafal, Dum Aloo, Rice, Poori, Custard, Green Salad, Papad/Fryums",
//               ],
//               [
//                 "Wednesday",
//                 "Matar Kulcha(2), Boiled Egg(2), Toasted Bread(4), Butter/Jam, Tea/Milk",
//                 "Lobiya Dal, Kathal, Rice,Roti,Salad,Boondi Raita",
//                 "Aloo Sandwich, Lassi",
//                 "Butter Chicken/Kadhai Paneer (LTD),Mix Dal, Roti, Ice Cream(1),Green Salad",
//               ],
//               [
//                 "Thursday",
//                 "Vada, Idli,(2+2), Sambhar,Chutney/Bread omelette(1), /Toasted Bread(4), Butter/Jam, Fruits, Tea/Milk",
//                 "Kadhi Pakora, Aloo Jeera, Rice, Roti, Green Salad",
//                 "Dhokla(2 Pcs), Roohafza",
//                 "Aloo Matar, Tinda, Punchmeal Dal, Rice, Roti, Green Salad, Chocopie, Papad/Fryums",
//               ],
//               [
//                 "Friday",
//                 "Mix Paratha(2), Butter/Curd/Toasted Bread(4), Boiled Egg(2), Fruits, Tea/Milk",
//                 "Kala Chana, Lauki, Roti, Rice, Mix Veg Raita, Greeen Salad",
//                 "Corn Chat, Nimbu Pani",
//                 "Curry(2)/Matar Paneer(LTD), Kali Masoor Dal, Rice, Roti, Green Salad",
//               ],
//               [
//                 "Saturday",
//                 "Vermicilli/Butter, Toasted Bread(4), Jam, Bread omelette(1),Sprouts, Tea/Milk",
//                 "Choley Bhature(2), Rice, Curd, Laccha,Onion",
//                 "Mexican Sandwich(2), Tea",
//                 "Khichdi, Papad/Fryums, Curd, Pickle, Sweet",
//               ],
//               [
//                 "Sunday",
//                 "Pav Bhaji(2piece)/Boiled Egg(2)/Toasted Bread(4), Butter/Jam, Tea/Milk,Sprouts",
//                 "Arhal Dal, Seasonal Veg(Karela), Rice, Roti, Green Salad",
//                 "Samosa(2), Tea",
//                 "Chicken Biryani(2Pcs)/Veg Biryani, Boondi Raita, Chutney, Gulab Jamun(2)",
//               ],
//             ].map(([day, b, l, s, d]) => (
//               <tr key={day} style={{ backgroundColor: '#ffffff' }}>
//                 <td style={{ padding: '0.5rem', border: '1px solid #d1d5db', color: '#374151', fontWeight: '600' }}>{day}</td>
//                 <td style={{ padding: '0.5rem', border: '1px solid #d1d5db', color: '#374151' }}>{b}</td>
//                 <td style={{ padding: '0.5rem', border: '1px solid #d1d5db', color: '#374151' }}>{l}</td>
//                 <td style={{ padding: '0.5rem', border: '1px solid #d1d5db', color: '#374151' }}>{s}</td>
//                 <td style={{ padding: '0.5rem', border: '1px solid #d1d5db', color: '#374151' }}>{d}</td>
//               </tr>
//             ))}
//           </tbody>
//         </table>
//       </div>
//       <div style={{ marginTop: '1rem', padding: '1rem', backgroundColor: '#f9fafb', border: '1px solid #e5e7eb', borderRadius: '0.375rem' }}>
//         <p style={{ marginTop: '0.25rem', color: '#4b5563' }}>
//           <span style={{ fontWeight: '500', fontSize: '0.975rem' }}>Note:</span>
//           <ul style={{ listStyleType: 'disc', paddingLeft: '1rem', fontSize: '0.85rem' }}>
//             <li>Every breakfast will have Coffee powder, Sugar, Bread Toast & Every Lunch and Dinner will include Green Salad + Pickle.</li>
//             <li>The quantity of milk will be 200ml.</li>
//             <li>Seasonal Veg, Bhindi, Karela, Gobhi, Parwal, Desi Tinda, Ghiya, Beans, etc.</li>
//           </ul>
//         </p>
//         <div style={{ marginTop: '1rem', display: 'flex', flexDirection: 'column', gap: '1rem' }}>
//           <div style={{ width: '50%' }}>
//             <p style={{ color: '#4b5563' }}>
//               <span style={{ fontWeight: '500', fontSize: '0.975rem' }}>MessTiming(General):</span>
//               <ul style={{ listStyleType: 'disc', paddingLeft: '1rem', fontSize: '0.85rem' }}>
//                 <li><span style={{ fontWeight: '600' }}>Breakfast</span>: 7:30am - 9:30am</li>
//                 <li><span style={{ fontWeight: '600' }}>Lunch</span>: 12:30pm - 2:30pm</li>
//                 <li><span style={{ fontWeight: '600' }}>Snacks</span>: 5:00pm - 6:00pm</li>
//                 <li><span style={{ fontWeight: '600' }}>Dinner</span>: 7:30pm - 9:30pm</li>
//               </ul>
//             </p>
//           </div>
//           <div style={{ width: '50%' }}>
//             <p style={{ color: '#4b5563' }}>
//               <span style={{ fontWeight: '500', fontSize: '0.975rem' }}>MessTiming(Saturday and Sunday):</span>
//               <ul style={{ listStyleType: 'disc', paddingLeft: '1rem', fontSize: '0.85rem' }}>
//                 <li><span style={{ fontWeight: '600' }}>Breakfast</span>: 7:30am - 9:30am</li>
//                 <li><span style={{ fontWeight: '600' }}>Lunch</span>: 12:30pm - 2:30pm</li>
//                 <li><span style={{ fontWeight: '600' }}>Snacks</span>: 5:00pm - 6:00pm</li>
//                 <li><span style={{ fontWeight: '600' }}>Dinner</span>: 7:30pm - 9:30pm</li>
//               </ul>
//             </p>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }


export default function MessTimetable() {
  return (
    <div
      style={{
        maxWidth: "72rem",
        margin: "0 auto",
        marginBottom: "1rem",
        overflowX: "auto",
        backgroundColor: "#ffffff",
      }}
    >
      <div
        style={{
          boxShadow: "0 1px 3px 0 rgba(0, 0, 0, 0.1)",
          marginBottom: "1rem",
          overflowX: "auto",
        }}
      >
        <table
          style={{
            width: "100%",
            minWidth: "600px",
            borderCollapse: "collapse",
            fontSize: "0.875rem",

          }}
        >
          <thead>
            <tr style={{ backgroundColor: "#db2777", color: "#ffffff", textAlign: "left" }}>
              <th style={headerCellStyle}>Day</th>
              <th style={headerCellStyle}>Breakfast</th>
              <th style={headerCellStyle}>Lunch</th>
              <th style={headerCellStyle}>Snacks</th>
              <th style={headerCellStyle}>Dinner</th>
            </tr>
          </thead>
          <tbody>
            {days.map(([day, b, l, s, d]) => (
              <tr key={day} style={{ backgroundColor: "#ffffff" }}>
                <td style={dayCellStyle}>{day}</td>
                <td style={cellStyle}>{b}</td>
                <td style={cellStyle}>{l}</td>
                <td style={cellStyle}>{s}</td>
                <td style={cellStyle}>{d}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div
        style={{
          marginTop: "1rem",
          padding: "1rem",
          backgroundColor: "#fdf2f8",
          border: "1px solid #db2777",
          borderRadius: "0.375rem",
        }}
      >
        <p style={{ marginTop: "0.25rem", color: "#4b5563" }}>
          <span style={{ fontWeight: "500", fontSize: "0.975rem", color: "#db2777" }}>Note:</span>
          <ul style={listStyle}>
            <li>
              Every breakfast will have Coffee powder, Sugar, Bread Toast & Every Lunch and
              Dinner will include Green Salad + Pickle.
            </li>
            <li>The quantity of milk will be 200ml.</li>
            <li>
              Seasonal Veg, Bhindi, Karela, Gobhi, Parwal, Desi Tinda, Ghiya, Beans, etc.
            </li>
          </ul>
        </p>
        <div style={{ marginTop: "1rem", display: "flex", flexDirection: "column", gap: "1rem" }}>
          <div style={{ width: "50%" }}>
            <p style={{ color: "#4b5563" }}>
              <span style={sectionTitleStyle}>MessTiming (General):</span>
              <ul style={listStyle}>
                <li><span style={labelStyle}>Breakfast</span>: 7:30am - 9:30am</li>
                <li><span style={labelStyle}>Lunch</span>: 12:30pm - 2:30pm</li>
                <li><span style={labelStyle}>Snacks</span>: 5:00pm - 6:00pm</li>
                <li><span style={labelStyle}>Dinner</span>: 7:30pm - 9:30pm</li>
              </ul>
            </p>
          </div>
          <div style={{ width: "50%" }}>
            <p style={{ color: "#4b5563" }}>
              <span style={sectionTitleStyle}>MessTiming (Saturday and Sunday):</span>
              <ul style={listStyle}>
                <li><span style={labelStyle}>Breakfast</span>: 7:30am - 9:30am</li>
                <li><span style={labelStyle}>Lunch</span>: 12:30pm - 2:30pm</li>
                <li><span style={labelStyle}>Snacks</span>: 5:00pm - 6:00pm</li>
                <li><span style={labelStyle}>Dinner</span>: 7:30pm - 9:30pm</li>
              </ul>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

const headerCellStyle = {
  padding: "0.5rem",
  border: "1px solid rgb(225, 227, 232)",
  fontWeight: "600",
  fontSize: "0.85rem",
};

const cellStyle = {
  padding: "0.5rem",
  border: "1px solid rgb(225, 227, 232)",
  color: "#374151",
};

const dayCellStyle = {
  ...cellStyle,
  fontWeight: "600",
};

const listStyle = {
  listStyleType: "disc",
  paddingLeft: "1rem",
  fontSize: "0.85rem",
};

const labelStyle = {
  fontWeight: "600",
  color: "#be123c",
};

const sectionTitleStyle = {
  fontWeight: "500",
  fontSize: "0.975rem",
  color: "#db2777",
};

const days = [
  [
    "Monday",
    "Aloo Pyaaz Paratha(2), Butter/Curd/Toasted Bread(4), Boiled Egg(2), Fruits/Tea/Milk",
    "Rajma, Rice, Seasonal Veg (Bhindi), Roti, Mix Veg Raita, Green salad",
    "Poha, Tea",
    "Mix Veg, Soya Matar, Dal Makhani, Rice, Roti, Rice Kheer, Green Salad, Papad/Fryums",
  ],
  [
    "Tuesday",
    "Uttapam(2), Sambhar, Coconut Chutney/Toasted Bread(4), Boiled Egg(2), Fruits, Tea/Milk",
    "Aloo Parwal, Urad Chana Dal, Roti, Rice, Boondi Raita, Green Salad",
    "Chowmein/Macroni, Nimbu Pani",
    "Choley, Sitafal, Dum Aloo, Rice, Poori, Custard, Green Salad, Papad/Fryums",
  ],
  [
    "Wednesday",
    "Matar Kulcha(2), Boiled Egg(2), Toasted Bread(4), Butter/Jam, Tea/Milk",
    "Lobiya Dal, Kathal, Rice,Roti,Salad,Boondi Raita",
    "Aloo Sandwich, Lassi",
    "Butter Chicken/Kadhai Paneer (LTD),Mix Dal, Roti, Ice Cream(1),Green Salad",
  ],
  [
    "Thursday",
    "Vada, Idli,(2+2), Sambhar,Chutney/Bread omelette(1), /Toasted Bread(4), Butter/Jam, Fruits, Tea/Milk",
    "Kadhi Pakora, Aloo Jeera, Rice, Roti, Green Salad",
    "Dhokla(2 Pcs), Roohafza",
    "Aloo Matar, Tinda, Punchmeal Dal, Rice, Roti, Green Salad, Chocopie, Papad/Fryums",
  ],
  [
    "Friday",
    "Mix Paratha(2), Butter/Curd/Toasted Bread(4), Boiled Egg(2), Fruits, Tea/Milk",
    "Kala Chana, Lauki, Roti, Rice, Mix Veg Raita, Greeen Salad",
    "Corn Chat, Nimbu Pani",
    "Curry(2)/Matar Paneer(LTD), Kali Masoor Dal, Rice, Roti, Green Salad",
  ],
  [
    "Saturday",
    "Vermicilli/Butter, Toasted Bread(4), Jam, Bread omelette(1),Sprouts, Tea/Milk",
    "Choley Bhature(2), Rice, Curd, Laccha,Onion",
    "Mexican Sandwich(2), Tea",
    "Khichdi, Papad/Fryums, Curd, Pickle, Sweet",
  ],
  [
    "Sunday",
    "Pav Bhaji(2piece)/Boiled Egg(2)/Toasted Bread(4), Butter/Jam, Tea/Milk,Sprouts",
    "Arhal Dal, Seasonal Veg(Karela), Rice, Roti, Green Salad",
    "Samosa(2), Tea",
    "Chicken Biryani(2Pcs)/Veg Biryani, Boondi Raita, Chutney, Gulab Jamun(2)",
  ],
];
