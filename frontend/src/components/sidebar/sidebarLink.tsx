import Link from "next/link";


interface ISidebarLink {
    href: string
    imageSource: string
    children: React.ReactNode
}
export default function SidebarLink(props:ISidebarLink) {
    return (
        <Link
            href={props.href}
            className="flex hover:text-sidebar-text-hover hover:bg-sidebar-bg-hover lg:p-4"
        >
            <img src={props.imageSource} className="w-1/6 mx-2"></img>
            {props.children}
        </Link>
    );
}