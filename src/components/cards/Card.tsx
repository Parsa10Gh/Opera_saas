import React, { useState } from "react";

// Define the props type
type CardProps = {
  title: string;
  description: string;
  imagesrc: string;
  extratext?: string; // Optional property
};

// Define the component with typed props
const Card: React.FC<CardProps> = ({ title, description, imagesrc, extratext }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleExpand = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div id="first-container" className="w-fit">
      <div
        id="second-container"
        className="bg-customBackWhite w-[80vw] sm:w-[350px] md:w-[350px] rounded-[29px] flex items-center justify-center m-4 lg:m- lg:p-2 p-1 hover:scale-105 transition-transform duration-300"
      >
        <div
          id="main-container"
          className="bg-customFrontWhite border-solid shadow-customShadow1 rounded-[29px] relative overflow-hidden"
        >
          <div
            id="image-container"
            className="relative justify-center flex mb-[-32px]"
          >
            <img
              src={imagesrc}
              alt={title}
              className="z-10 absolute w-[246px] h-[246px]"
              // sm:h-[116px] sm:w-[111px]
            />
            <div className="w-[241px] h-[246px] z-20 rounded-full bg-custom-cart-gradient">
              {/* sm:h-[116px] sm:w-[111px] */}
            </div>
          </div>
          <div id="text-container" className="text-right flex flex-col p-4">
            <h1 className="text-customPurple font-semibold text-xl sm:my-0 my-4 sm:mt-0 mt-7 lg:my-5">
              {/* sm:text-xs */}
              {title}
            </h1>
            <p className="mx-1 text-center font-semibold">
              {/* sm:text-[6px] */}
              {description}
            </p>

            <button
              onClick={toggleExpand}
              className="mt-2 text-customPurple w-fit"
            >
              {isExpanded ? (
                <img className="size-5" src="keyboard_arrow_up.svg" alt="" />
              ) : (
                <img
                  className="size-5 md:size-5 lg:size-7"
                  src="keyboard_arrow_down.svg"
                  alt=""
                />
              )}
            </button>
            <div
              className={`transition-all duration-500 ease-in-out overflow-hidden ${
                isExpanded ? "max-h-40" : "max-h-0"
              }`}
            >
              {isExpanded && (
                // Enter the rest of your text
                <p className="text-center font-normal mt-2">{extratext}</p>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;


0