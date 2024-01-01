import {DocumentMagnifyingGlassIcon} from "@heroicons/react/24/outline";
function Homepage(){
    return(
        <div className="bg-white text-center p-20">
           <div className="flex flex-col items-center justify-center">
            <DocumentMagnifyingGlassIcon className="h-64 w-64 text-indigo-50 text-center"/>
            <h1 className="text-3xl text-black font-bold text-center">
                Welcome to the E-commerce scrapper
            </h1>
           </div>
           
        </div>
    );

}
export default Homepage;