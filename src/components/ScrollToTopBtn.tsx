import { useEffect, useState } from "react";
import { LiaAngleUpSolid } from "react-icons/lia";

const ScrollToTopBtn = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY > 100) {
        setVisible(true);
      } else {
        setVisible(false);
      }
    };
    onScroll();
    document.addEventListener("scroll", onScroll);
    return () => document.removeEventListener("scroll", onScroll);
  }, []);
  return (
    <>
      {visible && (
        <div
          className="scroll-to-top-btn"
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        >
          <LiaAngleUpSolid size={40} />
        </div>
      )}
    </>
  );
};

export default ScrollToTopBtn;
