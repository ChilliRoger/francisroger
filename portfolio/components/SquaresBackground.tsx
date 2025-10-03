"use client";

import dynamic from "next/dynamic";

const SquaresBackground = dynamic(() => import("@/components/Squares"), {
  ssr: false,
  loading: () => <div className="fixed inset-0 bg-black" />
});

export default SquaresBackground;
