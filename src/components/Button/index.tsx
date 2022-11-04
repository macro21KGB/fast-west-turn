import React, { FC } from "react"

interface ButtonProps {
    label: string
    onClick: () => void
    children?: React.ReactNode
    isLong?: boolean
    borderColor?: string
    textColor?: string
}

const Button: FC<ButtonProps> = (props) => {

    const { label, onClick, children, isLong, borderColor, textColor } = props

    const buttonStyle = {
        gridColumn: isLong ? "1 / -1" : "",
        borderColor: borderColor != null ? borderColor : "",
        color: textColor != null ? textColor : ""
    }

    return (
        <button style={buttonStyle} onClick={onClick} className="flex flex-col justify-between items-center border hover:bg-gray-100 active:bg-gray-200 border-gray-500 px-3 py-2 rounded" >
            {children}
            {label}
        </button>
    )

}

export default Button;