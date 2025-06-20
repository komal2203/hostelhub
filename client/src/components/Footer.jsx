// // src/components/Footer.jsx
// export default function Footer() {
//   return (
//     <footer className="fixed bottom-0 left-0 w-full btn-primary-gradient  shadow-md  text-white p-4 text-center">
//       <p className="text-white text-sm">
//         © 2025 <span className="font-semibold text-blue-100">HostelHub</span>.
//         All rights reserved.
//       </p>
//     </footer>
//   );
// }


export default function Footer() {
  return (
    <footer
      className="fixed z-10 bottom-0 left-0 w-full bg-gradient-to-r from-red-700 via-red-500 to-pink-500 shadow-md text-white pr-4 pl-4 pt-2.5 pb-2.5 text-center"
      role="contentinfo"
    >
      <p className="text-sm">
        © 2025{" "}
        <span className="font-semibold text-pink-100">HostelHub</span>. All rights reserved.
      </p>
    </footer>
  );
}

