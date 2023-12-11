import * as React from "react";

interface NavbarProps {
    content?: React.ReactElement;
    className?: string;
}
export const Navbar : React.FC<NavbarProps> = ({
content,
className,
}) =>
        {
return(
    <>
    <div className={`bg-white shadow-xl w-full  py-2 px-4     ${className}`}>
     {content}
    </div>
    </>
)

}