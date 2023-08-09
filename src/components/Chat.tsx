import { useUser } from "@/contexts/UserContext"
import { NameInput } from "./NameInput";
import { ChatInput } from "./ChatInput";
import { ChatMessages } from "./ChatMessages";

export const Chat = () =>{
    //passo 1: Só aparece se souber o nome do user
    //passo 2: Histórico de mensagens
    //passo 3: Input de adicionar mensagens

    const userCtx = useUser()
    if(!userCtx)return null;
    if(!userCtx.user)return <NameInput />;

    return(
        <div className="border border-white/30 rounded-md">
            <div className="h-96 p-3 overflow-y-auto">
                <ChatMessages/>
            </div>
            <div className="border-t border-t-white/30 p-3">
                <ChatInput name={userCtx.user}/>
            </div>
            <div className="border-t border-t-white/30 p-3">
                <ChatInput name='bot'/>
            </div>
                
    
        </div>
    )
}