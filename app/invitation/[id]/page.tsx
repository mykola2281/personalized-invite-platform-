"use client"
import { getOneNote } from "@/api/services"
import { Note, NoteData } from "@/interface"
import { useParams } from "next/navigation" 
import { useEffect, useState } from "react"
 
 const Hello =  ()=>{
    const [currentNote ,setCurrentNote]= useState(null)
    const {id}:any = useParams()
    useEffect(()=>{
        getOneNote(id).then((it:any)=>setCurrentNote({...it}))
    },[])
    
    console.log(currentNote,'currentNote')


    return(
        <div className="">
            Hello
        </div>
    )
}
export default Hello