import React from "react";
import { IOptionProps } from "../../types/VerticalCarouselTypes";

const Option: React.FC<IOptionProps> = ({ option, isSelected, onClick }) => (
  <div className={`p-4 border rounded cursor-pointer`} onClick={onClick}>
    <div className="relative group">
      <span className="text-8xl relative">
        {option.icon}
        <span
          className={`absolute inset-0 bg-black transition-opacity duration-1000 ease-in-out ${
            isSelected ? "opacity-40" : "opacity-0 group-hover:opacity-40"
          }`}
        ></span>
      </span>
      <span
        className={`block text-white font-bold absolute inset-0 flex items-center justify-center transition-opacity duration-1000 ease-in-out ${
          isSelected ? "opacity-100" : "opacity-0 group-hover:opacity-100"
        }`}
      >
        {option.label}
      </span>
    </div>
  </div>
);

export default Option;
