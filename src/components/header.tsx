function Header({
  showBack,
  onBack,
}: {
  showBack?: boolean;
  onBack?: () => void;
}) {
  return (
    <div className="sticky top-0 left-0 w-full z-50 p-2 bg-gray-900 ">
      <div
        className={`max-w-5xl mx-auto flex items-center font-bold ${showBack ? "justify-between" : "justify-center"}`}
      >
        <div className="p-2">My Portfolio 2026</div>

        {showBack && (
          <button
            onClick={onBack}
            className="bg-blue-600 hover:bg-blue-700 text-white p-2 rounded shadow cursor-pointer"
          >
            Go Back
          </button>
        )}
      </div>
    </div>
  );
}

export default Header;
