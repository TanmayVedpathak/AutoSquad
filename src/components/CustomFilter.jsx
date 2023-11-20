import { Fragment, useContext, useState } from 'react'
// import { useNavigate } from "react-router-dom"
import { Listbox, Transition } from '@headlessui/react'

import chevronUpDown from "../assets/chevron-up-down.svg"
// import { updateSearchParams } from '../utils'
import { SearchParametersContext } from '../App'

const CustomFilter = (props) => {
    const { title, options } = props
    const [selected, setSelected] = useState(options[0])
    const {searchParameters, setSearchParameters} = useContext(SearchParametersContext)
    // const navigate = useNavigate()

    const handleParamsUpdated = (title, value) => {
        // const newPathname = updateSearchParams(title, value.toLowerCase());
        setSearchParameters({...searchParameters, [title]: typeof(value) === "string" ? value.toLowerCase() : value})
        // navigate(newPathname);
    }

    return (
        <div className=' w-fit'>
            <Listbox value={selected} onChange={(e) => {
                setSelected(e)
                handleParamsUpdated(title, e.value)
            }}>
                <div className=' relative w-fit z-10'>
                    <Listbox.Button className="relative w-full min-w-[127px] flex justify-between items-center cursor-default rounded-lg bg-white py-2 px-3 text-left shadow-md sm:text-sm border">
                        <span className='block truncate'>{selected.title}</span>
                        <img src={chevronUpDown} alt="icon" className='ml-4 object-contain' width={20} height={20} />
                    </Listbox.Button>
                    <Transition
                        as={Fragment}
                        leave='transition ease-in duration-100'
                        leaveFrom='opacity-100'
                        leaveTo='opacity-0'
                    >
                        <Listbox.Options className='absolute mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm'>
                            {
                                options.map((option, index) => (
                                    <Listbox.Option key={index} value={option} className={({ active }) => `relative cursor-default select-none py-2 px-4 ${active ? "bg-blue-500 text-white" : " text-gray-900"}`}>
                                        {({ selected }) => (
                                            <span className={() => `block truncate ${selected ? "font-medium" : "font-normal"}`}>
                                                {option.title}
                                            </span>
                                        )}
                                    </Listbox.Option>
                                ))
                            }
                        </Listbox.Options>
                    </Transition>
                </div>
            </Listbox>
        </div>
    )
}

export default CustomFilter