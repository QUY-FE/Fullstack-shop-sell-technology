import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

// 🎯 Nút carousel trái
export const CustomLeftArrow = ({ onClick }: { onClick?: () => void }) => (
  <button
    onClick={onClick}
    className="absolute left-2 top-1/2 -translate-y-1/2 bg-black/60 p-2 rounded-full hover:scale-110 transition-transform duration-200 shadow-md"
  >
    <FaChevronLeft className="text-white text-xl" />
  </button>
);

// 🎯 Nút carousel phải
export const CustomRightArrow = ({ onClick }: { onClick?: () => void }) => (
  <button
    onClick={onClick}
    className="absolute right-2 top-1/2 -translate-y-1/2 bg-black/60 p-2 rounded-full hover:scale-110 transition-transform duration-200 shadow-md"
  >
    <FaChevronRight className="text-white text-xl" />
  </button>
);

// 🎯 Component Button chính
interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  primary?: boolean;
  text?: string;
  w?: number | string;
  h?: number | string;
}

export default function Button({
  type = "button",
  primary = false,
  text = "Thêm text",
  w = 225,
  h = 55,
  className = "",
  ...rest
}: ButtonProps) {
  const style = {
    width: typeof w === "number" ? `${w}px` : w,
    height: typeof h === "number" ? `${h}px` : h,
  };

  return (
    <button
      type={type}
      style={style}
      {...rest}
      className={`rounded-md my-3 shadow-md font-semibold text-sm transition-all duration-200 
        ${
          primary
            ? "bg-[#e34646] text-white hover:bg-[#fd5151] hover:shadow-lg"
            : "border-2 border-gray-300 hover:border-[#e34646] hover:text-[#e34646]"
        } 
        ${className}`}
    >
      {text}
    </button>
  );
}
