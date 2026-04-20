import React from "react";

const SectionSelector = ({
  isAvailablePage,
  setIsAvailablePage,
  selectedPlayerIds,
}) => {
  return (
    <div className="mt-5 mb-6 sticky top-0 z-10 bg-white py-2 px-4 md:px-0 flex flex-col md:flex-row gap-4 items-center justify-between font-bold">
      <h2 className="text-xl">
        {isAvailablePage
          ? "Available Players"
          : `Selected Players (${selectedPlayerIds.size}/6)`}
      </h2>
      <div className="flex items-center">
        <button
          className={`btn ${isAvailablePage ? "bg-[#E7FE29]" : ""} rounded-xl border-r-0 rounded-r-none`}
          onClick={() => setIsAvailablePage(true)}
        >
          Available
        </button>
        <button
          className={`btn ${!isAvailablePage ? "bg-[#E7FE29]" : ""} rounded-xl border-l-0 rounded-l-none`}
          onClick={() => setIsAvailablePage(false)}
        >
          Selected <span>({selectedPlayerIds.size})</span>
        </button>
      </div>
    </div>
  );
};

export default SectionSelector;
