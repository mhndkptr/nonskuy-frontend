import { useState, useRef, useEffect } from "react";

const Collapse = ({ title, children }) => {
  const [isOpen, setIsOpen] = useState(false);
  const contentRef = useRef(null);
  const [maxHeight, setMaxHeight] = useState("0px");

  const toggleCollapse = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    if (isOpen) {
      setMaxHeight(`${contentRef.current.scrollHeight}px`);
    } else {
      setMaxHeight("0px");
    }
  }, [isOpen]);

  return (
    <div className="md:my-8 my-4">
      <button
        onClick={toggleCollapse}
        className="rounded-md bg-[#fac54e] py-2 px-4 border border-transparent text-center text-sm text-gray-800 hover:text-gray-700 transition-all shadow-md hover:shadow-lg focus:bg-[#d6a940] focus:shadow-none active:bg-[#d6a940] hover:bg-[#d6a940] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none font-medium"
        type="button"
      >
        {title}
      </button>
      <div ref={contentRef} style={{ maxHeight: maxHeight }} className={`overflow-hidden transition-all duration-300 ease-in-out`}>
        <div className="relative mx-auto flex w-full flex-col rounded-lg bg-white border border-slate-200 shadow-sm mt-4">
          <div className="p-4">{children}</div>
        </div>
      </div>
    </div>
  );
};

export default Collapse;
