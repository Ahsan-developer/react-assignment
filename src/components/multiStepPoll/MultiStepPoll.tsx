import React, { useState } from "react";
import VerticalCarousel from "../verticalCarousel/VerticalCarousel";
import { steps } from "../../config/steps";
import { IAnswer } from "../../types/VerticalCarouselTypes";
import { addOrUpdateAnswer } from "../../store/slices/answerSlice";
import { AppDispatch } from "../../store/store";
import { useDispatch } from "react-redux";

const MultiStepPoll: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const dispatch: AppDispatch = useDispatch();

  const handleOptionClick = (option: IAnswer) => {
    dispatch(addOrUpdateAnswer(option));
    if (currentIndex < steps.length - 1) {
      setCurrentIndex(currentIndex + 1);
      //   scrollToItem(currentIndex + 1);
    } else {
      // Move to summary slide
      setCurrentIndex(steps.length);
    }
  };

  return (
    <VerticalCarousel
      items={steps}
      handleOptionClick={handleOptionClick}
      currentIndex={currentIndex}
      setCurrentIndex={setCurrentIndex}
    />
  );
};
export default MultiStepPoll;
