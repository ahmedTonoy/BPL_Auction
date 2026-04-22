import React, { useState } from "react";
import heroImg from "../../assets/bg-shadow.png";
import bannerImg from "../../assets/banner-main.png";
import { toast } from "react-toastify";

const HeroBanner = ({ setAvailableCoins }) => {
  const [isCreditClaimed, setIsCreditClaimed] = useState(false);

  const handleCreditClaim = () => {
    if (!isCreditClaimed) {
      setAvailableCoins(10000000);
      setIsCreditClaimed(true);
      toast.success("Coins claim successful", { position: "top-center" });
    }
  };

  return (
    <div
      style={{ backgroundImage: `url(${heroImg})` }}
      className="my-2 py-8 border bg-[#131313] text-white flex flex-col items-center text-center bg-cover bg-center gap-4 md:rounded-3xl"
    >
      <img
        src={bannerImg}
        className="w-30 md:w-40"
        alt="Hero section image portraying cricket bat and ball"
      />
      <h1 className="text-3xl font-bold">
        Assemble Your Ultimate Dream 11 Cricket Team
      </h1>
      <p className="text-[#ffffffb3]">Beyond Boundaries Beyond Limits</p>
      <div className="p-1.5 border border-[#E7FE29] w-fit rounded-lg">
        <button
          className={`btn ${isCreditClaimed ? "bg-[#16ee0f]" : "bg-[#E7FE29]"}`}
          onClick={handleCreditClaim}
        >
          {isCreditClaimed ? "Free Credit Claimed" : "Claim Free Credit"}
        </button>
      </div>
    </div>
  );
};

export default HeroBanner;
