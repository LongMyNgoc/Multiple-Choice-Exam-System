// utils/hoverEffects.ts
import React from "react";

// Hiệu ứng hover cho button
export const hoverEffect = (e: React.MouseEvent<HTMLButtonElement>, type: "in" | "out") => {
  e.currentTarget.style.filter = type === "in" ? "brightness(1.1)" : "brightness(1)";
};

// Hiệu ứng click cho button
export const clickEffect = (e: React.MouseEvent<HTMLButtonElement>, type: "down" | "up") => {
  e.currentTarget.style.transform = type === "down" ? "scale(0.95)" : "scale(1)";
};

// Hiệu ứng hover cho link
export const linkHover = (e: React.MouseEvent<HTMLAnchorElement>, type: "in" | "out") => {
  e.currentTarget.style.color = type === "in" ? "#FF4081" : "#007BFF";
  e.currentTarget.style.transform = type === "in" ? "scale(1.1)" : "scale(1)";
};
