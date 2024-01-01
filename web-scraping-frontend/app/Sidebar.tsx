import { AcademicCapIcon, DocumentMagnifyingGlassIcon } from "@heroicons/react/24/solid";

function Sidebar(){
    return(
        <div className="flex flex-col items-center justify-center p-7  bg-white overflow-auto border-b border-indigo-500/50">
          <div className="bg-white">
            <AcademicCapIcon className="h-40 w-40"color="black"/>
          
            <h1 className="text-black font-bold text-3xl text-center">Scraping </h1>
            <h2 className="text-black text-xs italic text-center">Here we scrap the information from amazon ,flipkart and Myntra</h2>
        </div>

        <ul>

        </ul>
            </div>
    )
}
export default Sidebar;