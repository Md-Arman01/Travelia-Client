import { useEffect, useState } from "react";
import { MdKeyboardDoubleArrowUp } from "react-icons/md";
import Container from "./Container";

const GotoTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  const goToBtn = () => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  };
  const countToScroll = () => {
    let heightToHidden = 500;
    const winScroll =
      document.body.scrollTop || document.documentElement.scrollTop;

    if (winScroll > heightToHidden) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", countToScroll);
    return () => {
      window.removeEventListener("scroll", countToScroll);
    };
  }, []);

  return (
    <Container>
      <div className="flex justify-end hover:cursor-pointer">
        {isVisible && (
          <div
            className="z-50 bg-gradient-to-tr from-[#FFA828] to-[#FF4804] bg-clip-border rounded-full w-fit p-1"
            onClick={goToBtn}>
            <MdKeyboardDoubleArrowUp className="animate-bounce transition-transform text-[40px] text-white" />
          </div>
        )}
      </div>
    </Container>
  );
};

export default GotoTop;
