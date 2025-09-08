"use client";
import { useEffect, useState } from "react";
import { staffData } from "../data/staff";

export type Staff = (typeof staffData)[0];

export function useStaff() {
  const [staffList, setStaffList] = useState<Staff[]>([]);

  useEffect(() => {
    const saved = localStorage.getItem("staff");
    if (saved) {
      setStaffList(JSON.parse(saved));
    } else {
      setStaffList(staffData);
    }
  }, []);

  useEffect(() => {
    if (staffList.length > 0) {
      localStorage.setItem("staff", JSON.stringify(staffList));
    }
  }, [staffList]);

  function addStaff(newStaff: Omit<Staff, "id">) {
    const id =
      staffList.length > 0 ? staffList[staffList.length - 1].id + 1 : 1;
    const staffWithId = { id, ...newStaff };
    setStaffList([...staffList, staffWithId]);
  }

  function updateStaff(id: number, updated: Partial<Staff>) {
    setStaffList(
      staffList.map((s) => (s.id === id ? { ...s, ...updated } : s))
    );
  }

  return { staffList, addStaff, updateStaff };
}
