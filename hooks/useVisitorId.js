// hooks/useVisitorId.js
"use client";
import { useEffect, useState } from "react";

export default function useVisitorId() {
  const [visitorId, setVisitorId] = useState(null);

  useEffect(() => {
    const id = document.cookie
      .split("; ")
      .find((row) => row.startsWith("visitorId="))
      ?.split("=")[1];

    setVisitorId(id || null); // ✅ just read, no generation
  }, []);

  return visitorId;
}
