import React from "react";

export default function SmileCareLogo({
  className = "",
  variant = "dark",
}: {
  className?: string;
  variant?: "dark" | "white";
}) {
  const isWhite = variant === "white";

  return (
    <div className={`flex items-center gap-2.5 select-none ${className}`}>
      {/* Dental Heart / Tooth emblem icon */}
      <div className="relative w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-gradient-to-br from-[#0861A8] to-[#1479C9] flex items-center justify-center shadow-md shadow-[#0861A8]/20 shrink-0">
        <svg
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-5 h-5 sm:w-6 sm:h-6 text-white"
        >
          {/* Aesthetic stylized tooth/heart combination */}
          <path
            d="M12 2C8.5 2 6 4.5 6 8C6 11.5 7.5 14 9 17.5C10 19.8 10.5 22 12 22C13.5 22 14 19.8 15 17.5C16.5 14 18 11.5 18 8C18 4.5 15.5 2 12 2Z"
            fill="currentColor"
            opacity="0.95"
          />
          {/* Gentle smile curve inside tooth */}
          <path
            d="M8.8 9.5C9.5 11.5 11.5 12.8 12 12.8C12.5 12.8 14.5 11.5 15.2 9.5"
            stroke="#FF751C"
            strokeWidth="2"
            strokeLinecap="round"
          />
          <circle cx="9.5" cy="7" r="0.8" fill="#FFFFFF" />
          <circle cx="14.5" cy="7" r="0.8" fill="#FFFFFF" />
        </svg>
      </div>

      {/* Typography Brand Name */}
      <div className="flex flex-col leading-none">
        <div className="flex items-center">
          <span
            className={`text-[19px] sm:text-[21px] font-extrabold tracking-tight ${
              isWhite ? "text-white" : "text-[#111C35]"
            }`}
          >
            Smile
          </span>
          <span className="text-[19px] sm:text-[21px] font-extrabold tracking-tight text-[#0861A8]">
            Care
          </span>
          <span className="w-1.5 h-1.5 rounded-full bg-[#FF751C] ml-0.5 mb-2.5 shrink-0" />
        </div>
        <span
          className={`text-[9px] font-bold tracking-[0.2em] uppercase -mt-0.5 ${
            isWhite ? "text-blue-200" : "text-[#596579]"
          }`}
        >
          Medical Center
        </span>
      </div>
    </div>
  );
}
