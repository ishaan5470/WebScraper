"use client";
//when we are using next js 13 so by default any compoentn is considered as server component  this means they are rendered on the server 
// there is not window to actually mount things like click handlers so onSubmit or any piece of state will not gonna work so we used useClient after putting e.prevent default
import { MagnifyingGlassIcon } from "@heroicons/react/24/solid"
import { FormEvent, useRef } from "react"




function Header() {
    const handleSearch= async (e:FormEvent<HTMLFormElement>)=>{
        e.preventDefault();
        const input=inputRef.current?.value;
        if (!input) return;
        if (inputRef.current?.value){
            inputRef.current.value=" ";
        }
        try{
            //calling our api to activate our scraper
            //api/activate/scraper
            const response= await fetch("/api/activateScraper",{
                method:"POST",
                headers:{
                    "Content-Type":"application/json"
                },
                body:JSON.stringify({search:input})
            });

        }
        catch(error){
            //catches any error
            console.log("cannot fetch")
        }
        //wait for the response to come back

    }

const inputRef=useRef<HTMLInputElement>(null) //think of this as a pointer and now point to my input field and gives the current value from the input field 

  return (
    <div> 
        <form className="flex flex-row items-center justify-center rounded-full bg-indigo-100/50 py-2 px-4" onSubmit={handleSearch}>
            <input ref={inputRef} type="text" placeholder="Search..." className="flex-1 outline-none bg-transparent placeholder:text-indigo-500 text-indigo-500" />
            <button  hidden className="text-black">  Search</button>
            <MagnifyingGlassIcon className="h-6 w-6 text-indigo-300"/>
        </form>
      
    </div>
  )
}

export default Header
