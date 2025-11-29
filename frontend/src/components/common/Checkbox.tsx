interface CheckboxProps {
    text: string;
}

export default function Checkbox({ text }: CheckboxProps) {


    return (
        <label className="flex flex-row items-center gap-2">
            <input type="checkbox" />
            <span>{text}</span>
        </label>
    )
}