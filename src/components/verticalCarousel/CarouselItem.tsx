import React from "react";
import Option from "./Option";
import { ICarouselItemProps } from "../../types/VerticalCarouselTypes";

const CarouselItem: React.FC<ICarouselItemProps> = ({
  item,
  index,
  currentIndex,
  answers,
  handleOptionClick,
}) => (
  <div
    id={`item-${index}`}
    className={`h-screen grid grid-cols-2 ${
      index === currentIndex ? "bg-gray-200" : "bg-white"
    }`}
  >
    <div className="flex items-center justify-center bg-purple-700">
      <h1 className="text-8xl text-left font-bold text-white p-[120px]">
        {item.title}
      </h1>
    </div>
    <div className="ml-4 flex items-center justify-center">
      <div className="grid grid-cols-3 gap-4">
        {item.options.map((option, optionIndex) => (
          <Option
            key={optionIndex}
            option={option}
            isSelected={answers[index]?.answer?.label == option.label ?? false}
            onClick={() =>
              handleOptionClick({ question: item.title, answer: option })
            }
          />
        ))}
      </div>
    </div>
  </div>
);

export default CarouselItem;
