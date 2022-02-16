import Link, { LinkProps } from "next/link";
import { useRouter } from "next/router";
import { ReactElement ,cloneElement} from "react";

interface ActiveLinkProps extends LinkProps {
    children: ReactElement;
    actionClassName:string;
}
export function ActiveLink({children,actionClassName,...rest}:ActiveLinkProps){
    const {asPath}= useRouter()
    const className = asPath === rest.href ? actionClassName : ''
    return(
        <Link {...rest}>
            {cloneElement(children,{
                className
            })}
        </Link>
    )
}