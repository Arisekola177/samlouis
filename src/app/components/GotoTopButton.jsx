import Link from "next/link";
import { useEffect } from "react";
import { FaArrowUp } from "react-icons/fa";

const GoToTopButton = () => {
  const handleScrollToTop = (e) => {
    e.preventDefault();
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div className="fixed bottom-4 py-2 px-4 right-4 transition-all duration-300 bg-orange-600 text-white rounded-full shadow-lg hover:bg-orange-700">
      <Link
        href="/"
        onClick={handleScrollToTop}
      >
          <FaArrowUp />  
      </Link>
    </div>
  );
};

export default GoToTopButton;



