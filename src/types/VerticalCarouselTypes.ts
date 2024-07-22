export interface IOption {
  label: string;
  icon: string;
}
export interface IAnswer {
  question: string;
  answer: IOption;
}
export interface ICarouselItem {
  title: string;
  options: IOption[];
}

export interface ICarouselItemProps {
  item: ICarouselItem;
  index: number;
  currentIndex: number;
  answers: IAnswer[];
  handleOptionClick: (option: IAnswer) => void;
}

export interface INavigationDotsProps {
  items: ICarouselItem[];
  currentIndex: number;
  scrollToItem: (index: number) => void;
}
export interface IOptionProps {
  option: IOption;
  isSelected: boolean;
  onClick: () => void;
}
