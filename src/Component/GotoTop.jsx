import { useEffect, useState } from "react";
import { RxDoubleArrowUp } from "react-icons/rx";
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
            className="z-50  bg-orange-500 hover:bg-black rounded-lg w-fit p-3"
            onClick={goToBtn}>
            <RxDoubleArrowUp className="text-[25px] text-white"  />
          </div>
        )}
      </div>
    </Container>
  );
};

export default GotoTop;
