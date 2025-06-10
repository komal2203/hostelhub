export default function DarkTest() {
  return (
    <div className="min-h-screen bg-white dark:bg-black text-black dark:text-white flex items-center justify-center">
      <button
        onClick={() => document.documentElement.classList.toggle("dark")}
        className="p-4 rounded bg-gray-300 dark:bg-gray-700"
      >
        Toggle Dark Mode
      </button>
    </div>
  );
}
