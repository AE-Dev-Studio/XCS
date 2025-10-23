// import { Button } from "./ui/button";


// interface Props{
//     text?: string;
//     onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
// }

// const CustomButton = ({text, onClick}: Props) => {
//   return (
//     <Button 
//     className="border-2  bg-[#a89447] rounded-full text-white font-sans hover:bg-black px-8 py-6 text-lg font-semibold transition-all duration-300"
//     onClick={onClick}>{text}</Button>
//   )
// }

// export default CustomButton
import { cn } from "@/lib/utils";
import { Button } from "./ui/button";

interface Props {
  text?: string;
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
  variant?: "green" | "white" | "black" | "thin-green"; // define your 3 variants
  className?: string;
}

const CustomButton = ({ text, onClick, variant = "green", className }: Props) => {
  return (
    <Button
      onClick={onClick}
      className={cn(
        "border-2 rounded-full font-sans px-8 py-6 text-lg font-semibold transition-all duration-300",
        variant === "green" && "bg-green-600 text-white hover:bg-white hover:text-black",
        variant === "white" && "bg-white text-black hover:bg-green-600 hover:text-white",
        variant === "black" && "bg-black text-white hover:bg-green-600 hover:text-white",
        variant === "thin-green" && "text-sm py-2 px-14 bg-green-600 text-white hover:bg-white hover:text-black",
        className
      )}
    >
      {text}
    </Button>
  );
};

export default CustomButton;
