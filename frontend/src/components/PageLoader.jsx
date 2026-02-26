import React from "react";

const PageLoader = () => {
  return (
    <div className="fixed inset-0 z-9999 flex flex-col items-center justify-center bg-white">
      {/* Logo / wordmark */}
      <p className="text-gray-900 text-xl font-light tracking-[0.3em] uppercase mb-10 select-none">
        Mage<span className="text-[#00c700] font-semibold">Prime</span>
      </p>

      {/* Animated bar */}
      <div className="relative w-48 h-0.5 bg-gray-200 overflow-hidden rounded-full">
        <div className="absolute inset-y-0 left-0 w-1/3 bg-[#00c700] rounded-full animate-page-loader" />
      </div>

      <style>{`
        @keyframes page-loader {
          0%   { transform: translateX(-100%); }
          50%  { transform: translateX(200%); }
          100% { transform: translateX(-100%); }
        }
        .animate-page-loader {
          animation: page-loader 1.4s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
};

export default PageLoader;
