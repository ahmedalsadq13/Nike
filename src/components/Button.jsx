
function Button({label,iconURL}) {
    return (
        <button className="
        flex justify-center
        items-center 
        gap-2 px-7
        py-4 border font-montserrat
        text-lg leading-none
        bg-coral-red border-coral-red
        rounded-full text-white hover:bg-red-500 [transition:.2s]">
            {label}
            <img src={iconURL} alt="arrow Right Icon" className="ml-2 rounded-full w-5 h-5"/>
        </button>
        
    )
    }
    
    export default Button