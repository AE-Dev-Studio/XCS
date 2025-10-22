import { Button } from "./ui/button";


interface Props{
    text?: string;
    onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
}

const CustomButton = ({text, onClick}: Props) => {
  return (
    <Button 
    className="border-2  bg-[#a89447] rounded-full text-white font-sans hover:bg-black px-8 py-6 text-lg font-semibold transition-all duration-300"
    onClick={onClick}>{text}</Button>
  )
}

export default CustomButton
