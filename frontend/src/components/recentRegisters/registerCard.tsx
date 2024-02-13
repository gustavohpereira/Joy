



export default function RegisterCard(props: {title: string,log: string,error: boolean,timestamp: string}) {

    const errorColor = props.error ? "bg-red-500" : "bg-green-500"
    return (
       <div className="flex w-8/12 rounded flex bg-white  rounded-full">
            <span className={errorColor + " w-10 rounded-l-full"}>
        
            </span>
            <div className="flex justify-between w-full p-4">
                <div className="flex">

                <h1>
                    {props.title}
                </h1>
                <p>{" : "  + props.log}</p>
                </div>
                <p>{props.timestamp}</p>

            </div>
       </div>
            
            )
        }