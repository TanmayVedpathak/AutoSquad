import React from 'react'

const CustomButton = ({ isDisabled, btnType, containerStyles, textStyles, title, rightIcon, handleClick }) => (
    <button
        disabled={isDisabled}
        type={btnType || "button"}
        className={`flex flex-row relative justify-center items-center py-3 px-6 outline-none bg-blue-500 ${containerStyles}`}
        onClick={handleClick}
    >
        <span className={`flex-1 ${textStyles}`}>{title}</span>
        {rightIcon && (
            <div className="relative w-6 h-6">
                <img
                    src={rightIcon}
                    alt="arrow_left"
                    fill="true"
                    className="object-contain"
                />
            </div>
        )}
    </button>
);

export default CustomButton