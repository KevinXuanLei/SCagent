interface ButtonProps {
    text: string;
    theme?: "black" | "white";
    disabled?: boolean;
}

export default function Button ({ text, disabled = false, theme = "black" }: ButtonProps) {
    
    const themeClass = 
        theme === "black" 
            ? "border bg-black text-neutral-50" 
            : "border border-neutral-300 bg-neutral-50 text-neutral-900";

    return (
        <button className={`px-3 py-1 rounded-sm cursor-pointer ${themeClass} ${disabled ? "opacity-50 cursor-not-allowed" : ""}`}>
            { text }
        </button>
    )
}