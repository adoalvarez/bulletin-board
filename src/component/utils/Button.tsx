interface ButtonProps {
    label?: string,
    fnClick: (e: React.MouseEvent<HTMLElement>) => void,
    classname?: string,
    type?: 'button' | 'reset' | 'submit',
}

export default function Button (props: ButtonProps) {
    
    const { label, fnClick, classname, type } = props;

    return (
        <button 
            className={`py-3 px-6 cursor-pointer border border-[#96CEB4] bg-[#96CEB4] shadow-md rounded-lg font-bold ` + (classname ? classname : '')} 
            onClick={fnClick} 
            type={type ? type : 'button'}
        >
            {label ? label : 'Button'}
        </button>
    )
}