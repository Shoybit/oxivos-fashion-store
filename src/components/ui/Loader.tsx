"use client";

import React, { useState, useEffect } from "react";

interface LoaderProps {
  delayTime?: number; 
  children?: React.ReactNode; 
}

export default function Loader({ delayTime = 2000, children }: LoaderProps) {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, delayTime);

    return () => clearTimeout(timer); 
  }, [delayTime]);

  if (!loading && children) {
    return <>{children}</>;
  }

  return (
    <div className="flex flex-col items-center justify-center gap-4">
      <div className="relative h-16 w-16">
        <div className="absolute h-full w-full rounded-full border-4 border-[#C8A96A]/20"></div>
        <div className="absolute h-full w-full rounded-full border-4 border-t-[#C8A96A] border-r-transparent border-b-transparent border-l-transparent animate-spin"></div>
        <div className="absolute top-2 left-2 h-12 w-12 rounded-full border-4 border-b-black border-t-transparent border-r-transparent border-l-transparent animate-spin duration-1000"></div>
      </div>

      <div className="flex items-center gap-1">
        <span className="text-xs font-bold uppercase tracking-[0.2em] text-gray-900">
          Loading
        </span>
        <span className="flex gap-0.5 text-xs font-bold text-[#C8A96A]">
          <span className="animate-bounce delay-100">.</span>
          <span className="animate-bounce delay-200">.</span>
          <span className="animate-bounce delay-300">.</span>
        </span>
      </div>
    </div>
  );
}