"use client";
import { useEffect, useState } from "react";
import { circularData } from "../data/circulars";

export type Circular = (typeof circularData)[0];

export function useCirculars() {
  const [circulars, setCirculars] = useState<Circular[]>([]);

  useEffect(() => {
    const saved = localStorage.getItem("circulars");
    if (saved) {
      setCirculars(JSON.parse(saved));
    } else {
      setCirculars(circularData);
    }
  }, []);

  useEffect(() => {
    if (circulars.length > 0) {
      localStorage.setItem("circulars", JSON.stringify(circulars));
    }
  }, [circulars]);

  function addCircular(newCircular: Omit<Circular, "id">) {
    const id =
      circulars.length > 0 ? circulars[circulars.length - 1].id + 1 : 1;
    const circularWithId = { id, ...newCircular };
    setCirculars([...circulars, circularWithId]);
  }

  return { circulars, addCircular };
}
