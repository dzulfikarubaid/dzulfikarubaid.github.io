import { BiSolidCircle } from "react-icons/bi"

    function TopBar({theme}:any) {
        return (
            <div className={`${theme == "light" ? "bg-purple-50 border-neutral-200": "bg-neutral-600 border-neutral-400"} border-b-[1px]  flex flex-row gap-2 p-5 py-3 w-full rounded-t-xl`}>
                <BiSolidCircle className='text-red-500'></BiSolidCircle>
                <BiSolidCircle className='text-yellow-500'></BiSolidCircle>
                <BiSolidCircle className='text-green-500'></BiSolidCircle>
            </div>
        )
    }
    export default TopBar