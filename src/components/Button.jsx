
function Button({label,iconURL,backgroundColor, textColor,borderColor}) {
    return (
        <button className={`
        flex justify-center
        items-center 
        gap-2 px-7
        py-4 border font-montserrat
        text-lg leading-none
        rounded-full
        ${backgroundColor
            ? `${backgroundColor} ${textColor} ${borderColor} `: 'bg-coral-red text-white border-coral-red hover:bg-red-500 [transition:.2s]'}`
        }>
            {label}
            {iconURL && <img src={iconURL} alt="arrow Right Icon" className="ml-2 rounded-full w-5 h-5"/>}
        </button>
        
    )
    }
    
    export default Button