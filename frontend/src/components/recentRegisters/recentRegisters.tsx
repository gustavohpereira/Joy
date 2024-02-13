import { PageTitle } from "../PageTitle";
import SearchInput from "../searchInput";
import RegisterCard from "./registerCard";
import  {logData} from "../../data/logsData";

export default function RecentRegisters() {

    const log = logData




    return (
        <div className="w-full ">
            <PageTitle title="Registros recentes" subtitle="lista de registros"></PageTitle>
            <section className="bg-content-bg w-full p-6">
            <SearchInput placeholder=" Pesquise por um grupo, serviço ou agente ..." width={`w-3/12`}/>
            <div className="w-full  my-10">
            <div className="flex items-center gap-6">
                <h1 className="text-3xl my-4 text-center w-2/12">Hoje</h1>
                <hr className="border-black w-full"></hr>
            </div>
               
                <div className="flex flex-col gap-4 w-full items-center">

                {log.map((agent) => {
                    return(
                        agent.logs.map((log) => {
                            if(log.daysPassed === 0){

                                return <RegisterCard title={agent.title} log={log.message} error={log.error} timestamp={log.timestamp}></RegisterCard>
                            }else{
                                return null
                            } 
                        })
                    )
                })}
                </div>
                

            </div>

            <div className="w-full  my-10">
            <div className="flex items-center gap-6">
                <h1 className="text-3xl my-4 text-center w-2/12">Mais de 1 dia</h1>
                <hr className="border-black w-full"></hr>
            </div>
               
                <div className="flex flex-col gap-4 w-full items-center">

                {log.map((agent) => {
                    return(
                        agent.logs.map((log) => {
                            if(log.daysPassed > 0 && log.daysPassed < 7){

                                return <RegisterCard title={agent.title} log={log.message} error={log.error} timestamp={log.timestamp}></RegisterCard>
                            }else{
                                return null
                            } 
                        })
                    )
                })}
                </div>
                

            </div>

            <div className="w-full  my-10">
            <div className="flex items-center gap-6">
                <h1 className="text-3xl my-4 text-center w-2/12">Mais de 7 dias</h1>
                <hr className="border-black w-full"></hr>
            </div>
               
                <div className="flex flex-col gap-4 w-full items-center">

                {log.map((agent) => {
                    return(
                        agent.logs.map((log) => {
                            if(log.daysPassed >= 7){

                                return <RegisterCard title={agent.title} log={log.message} error={log.error} timestamp={log.timestamp}></RegisterCard>
                            }else{
                                return null
                            } 
                        })
                    )
                })}
                </div>
                

            </div>
           
           

            </section>
        </div>
    )
}