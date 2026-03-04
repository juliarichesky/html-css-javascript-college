import type { ReactNode } from "react";

type CardProps = {
    children: ReactNode;
}
const Card = ({ children } : CardProps) => {
    return(
        <>
        <div className="bg-pink-100 p-4 rounded">
            {children}
        </div>
        </>
    )
}
export default Card;