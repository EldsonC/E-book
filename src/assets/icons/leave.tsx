import React from "react";

export function LeaveIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="22"
      height="22"
      fill="none"
      viewBox="0 0 22 22"
    >
      <g clipPath="url(#clip0_13_3)">
        <mask
          id="mask0_13_3"
          style={{ maskType: "luminance" }}
          width="22"
          height="22"
          x="0"
          y="0"
          maskUnits="userSpaceOnUse"
        >
          <path
            fill="#fff"
            stroke="#fff"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="4"
            d="M2.75 2.292H11v14.666H2.75V2.292zM11 5.042h8.25v14.666H11V5.042z"
          ></path>
          <path
            stroke="#000"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="4"
            d="M7.792 7.792L5.958 9.529l1.681 1.93m6.57-.917l1.833 1.737-1.681 1.93"
          ></path>
        </mask>
        <g mask="url(#mask0_13_3)">
          <path fill="#BDBDBD" d="M0 0h22v22H0V0z"></path>
        </g>
      </g>
      <defs>
        <clipPath id="clip0_13_3">
          <path fill="#fff" d="M0 0H22V22H0z"></path>
        </clipPath>
      </defs>
    </svg>
  );
}