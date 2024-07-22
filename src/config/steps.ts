import { ICarouselItem } from "../types/VerticalCarouselTypes";

export const steps: ICarouselItem[] = [
  {
    title: "How was your week overall?",
    options: [
      { icon: "👍", label: "Good" },
      { icon: "🤔", label: "Okay" },
      { icon: "👎", label: "Bad" },
    ],
  },
  {
    title: "How do you feel about your productivity this week?",
    options: [
      { icon: "💪", label: "Very productive" },
      { icon: "👌", label: "Somewhat productive" },
      { icon: "😴", label: "Not productive" },
    ],
  },
  {
    title: "How was your work-life balance this week?",
    options: [
      { icon: "😊", label: "Great" },
      { icon: "😐", label: "Average" },
      { icon: "😟", label: "Poor" },
    ],
  },
  {
    title: "How satisfied are you with your current project?",
    options: [
      { icon: "😍", label: "Very satisfied" },
      { icon: "🙂", label: "Satisfied" },
      { icon: "😕", label: "Not satisfied" },
    ],
  },
  {
    title: "How do you feel about your team's collaboration this week?",
    options: [
      { icon: "🤝", label: "Excellent" },
      { icon: "👍", label: "Good" },
      { icon: "👎", label: "Needs improvement" },
    ],
  },
  {
    title: "How do you rate your stress level this week?",
    options: [
      { icon: "😌", label: "Low" },
      { icon: "😅", label: "Moderate" },
      { icon: "😫", label: "High" },
    ],
  },
  {
    title: "How satisfied are you with your work environment?",
    options: [
      { icon: "🏠", label: "Very satisfied" },
      { icon: "😐", label: "Satisfied" },
      { icon: "😕", label: "Not satisfied" },
    ],
  },
  {
    title: "How confident are you in meeting your upcoming deadlines?",
    options: [
      { icon: "👍", label: "Very confident" },
      { icon: "🤔", label: "Somewhat confident" },
      { icon: "👎", label: "Not confident" },
    ],
  },
];
