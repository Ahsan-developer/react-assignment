import React from "react";
import NavigationDots from "./NavigationDots";
import CarouselItemComp from "./CarouselItem";
import type { IAnswer, ICarouselItem } from "../../types/VerticalCarouselTypes";
import { RootState } from "../../store/store";
import { useSelector } from "react-redux";
import Summary from "../summarySlide/SummarySlide";

interface VerticalCarouselProps {
  items: ICarouselItem[];
  handleOptionClick: (option: IAnswer) => void;
  currentIndex: number;
}

const VerticalCarousel: React.FC<VerticalCarouselProps> = ({
  items,
  handleOptionClick,
  currentIndex,
}) => {
  // const [currentIndex, setCurrentIndex] = useState(0);
  const answers = useSelector((state: RootState) => state.answers.answers);

  const handleClick = (option: IAnswer) => {
    handleOptionClick(option);
    if (currentIndex < items.length - 1) {
      scrollToItem(currentIndex + 1);
    }
  };

  const scrollToItem = (index: number) => {
    // setCurrentIndex(index);
    const element = document.getElementById(`item-${index}`);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <div className="relative h-screen flex">
      <NavigationDots
        items={items}
        currentIndex={currentIndex}
        scrollToItem={scrollToItem}
      />
      <div className="w-full h-[100vh] overflow-hidden">
        {currentIndex < items.length ? (
          items.map((item, index) => (
            <CarouselItemComp
              item={item}
              index={index}
              currentIndex={currentIndex}
              answers={answers}
              handleOptionClick={handleClick}
            />
          ))
        ) : (
          <Summary title="Summary" />
        )}
      </div>
    </div>
  );
};

export default VerticalCarousel;
