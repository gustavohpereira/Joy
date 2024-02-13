




export function PageTitle(props: {title: string,subtitle: string}) {
    return (
        <section className='flex flex-col justify-center items-start w-1/2 p-6'>
            <h1 className='text-7xl font-bold my-4'>{props.title}</h1>
            <p className='text-2xl text-subtitle-color'>{props.subtitle}</p>
        </section>
    );
}