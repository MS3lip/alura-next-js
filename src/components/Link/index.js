import NextLink from "next/link";
import LinkEstilizado from "../LinkEstilizado";

export default function Link({ children, href, ...props}){
    return (
        <NextLink href={href}>
            <LinkEstilizado href={href}  {...props}>{children}</LinkEstilizado>
        </NextLink> 
    )
}