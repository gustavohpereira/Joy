import Image from 'next/image'
import Link from 'next/link'
import SidebarLink from './sidebarLink'


export default function Sidebar(){
    return (
        <header className='h-screen sticky top-0 bg-sidebar-bg lg:w-sidebar-width border-r border-sidebar-border'>
            <div className='border-b-2 border-sidebar-border flex justify-center p-4'>

            <Image src="/logo.svg" alt="logo" width={80} height={80} />
            </div>
            <div className=' text-sidebar-text flex flex-col '>
                <SidebarLink href="/" imageSource="/timeIcon.svg">home</SidebarLink>       
            </div>
        </header>
    )
}