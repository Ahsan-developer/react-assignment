import React from "react";
import { INavigationDotsProps } from "../../types/VerticalCarouselTypes";

const NavigationDots: React.FC<INavigationDotsProps> = ({
  items,
  currentIndex,
  scrollToItem,
}) => (
  <div className="hidden md:flex md:w-1/5 absolute left-5 top-1/2 transform -translate-y-1/2">
    <div className="flex flex-col space-y-4">
      {items.map((_, index) => (
        <button
          key={index}
          onClick={() => scrollToItem(index)}
          className={`w-4 h-4 rounded-full focus:outline-none transition duration-300 border border-white ${
            index === currentIndex ? "bg-none" : "bg-white"
          }`}
        />
      ))}
    </div>
  </div>
);

export default NavigationDots;
