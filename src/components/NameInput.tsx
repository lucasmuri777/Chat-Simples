import { useUser } from '@/contexts/UserContext'
import {useState,KeyboardEvent} from 'react'

export const NameInput = () =>{
    const userCtx = useUser()
    const [nameInput, setNameInput] = useState('')


    const handleKeyUpAction = (event: KeyboardEvent<HTMLInputElement>) =>{
        if(event.code.toLowerCase() === 'enter'){
            if(nameInput.trim() !== '' && nameInput !== 'bot'){
                userCtx?.setUser(nameInput.trim())
            }
        }
    }

    return(
        <div className="mt-14">
            <p className="text-xl mb-4">Qual seu nome?</p>
            <div className="flex gap-3 items-center text-lg">
                <input 
                    type="text" 
                    className="flex-1 border-white/30 rounded-md 
                    px-4 py-3 text-white bg-white/10 outline-none" 
                    placeholder="Digite seu nome"
                    value={nameInput}
                    onChange={(e) => setNameInput(e.target.value)} 
                    onKeyUp={handleKeyUpAction}
                />
                
                
            </div>
        </div>
    )
}