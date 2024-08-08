import Image from 'next/image';
import Link from 'next/link';
import React from 'react'

type CustomButtonProps = {
    textPos?: "left" | "right";
    text: string;
    imageUrl?: string;
    styles: string;
    gradient?: boolean;
    itemPadding: string;
    destination: string;
    buttonPadding: string;
    imageSize?: string;
    imageMove?: string;
}

const CustomButton: React.FC<CustomButtonProps> = ({
    textPos,
    text,
    imageUrl,
    styles,
    gradient,
    imageSize,
    itemPadding,
    buttonPadding,
    destination,
    imageMove,
}) => {
    return (
        <button className={`${styles} flex justify-center items-center ${gradient ? 'background-gradient' : ''}`}>
            <Link href={destination}>
                <span className={`flex ${buttonPadding} items-center`}>
                    {textPos === "left" && <span className={`${itemPadding}`}>{text}</span>}
                    {imageUrl &&
                        <div className={`${itemPadding} flex items-center`}>
                            <img
                                src={imageUrl}
                                alt=""
                                className={`${imageMove} ${imageSize}`}
                            />
                        </div>
                    }
                    {textPos === "right" && <span className={`${itemPadding}`}>{text}</span>}
                    {!textPos && text}
                </span>
            </Link>
        </button>
    )
}

export default CustomButton