interface InputProps {
    label?: string,
    name: string,
    fnChange: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void,
    value: string,
    isTextArea?: boolean,
}

export default function Input (props: InputProps) {

    const { label, fnChange, value, name, isTextArea = false } = props;

    return (
        <div className={`w-full flex ${isTextArea ? 'flex-col' : 'flex-row'} px-2 mt-2`}>
            <label className="mr-4 font-bold ">{label}</label>
            {isTextArea ? <textarea className="resize-none min-h-20" onChange={fnChange} value={value} name={name}/> : <input value={value} className="w-full" onChange={fnChange} name={name}/> }
        </div>
    )
}