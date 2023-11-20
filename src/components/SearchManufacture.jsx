import { useState, Fragment } from 'react'
import { Combobox, Transition } from '@headlessui/react'
import { CheckIcon } from '@heroicons/react/20/solid'

import { manufacturers } from '../constants'
import carLogo from "../assets/car-logo.svg"

const SearchManufacture = (props) => {
    const { manufacturer, setManufacturer } = props
    const [query, setQuery] = useState("")

    const filteredManufactures = query === "" ? manufacturers : manufacturers.filter((item) => (
        item.toLowerCase().replace(/\s+/g, "").includes(query.toLowerCase().replace(/\s+/g, ""))
    ))
    return (
        <div className='flex-1 max-sm:w-full flex justify-start items-center'>
            <Combobox value={manufacturer} onChange={setManufacturer}>
                <div className="relative w-full">
                    <Combobox.Button className='absolute top-[14px]'>
                        <img src={carLogo} alt="Car Logo" width={20} height={20} className='ml-4' />
                    </Combobox.Button>

                    <Combobox.Input className="w-full h-[48px] pl-12 p-4 rounded-l-full max-sm:rounded-full outline-none cursor-pointer text-sm bg-slate-200" placeholder="Volkswagen" displayValue={(manufacturer) => manufacturer} onChange={(e) => setQuery(e.target.value)} />

                    <Transition
                        as={Fragment}
                        leave='transition ease-in duration-100'
                        leaveFrom='opacity-100'
                        leaveTo='opacity-0'
                        afterLeave={() => setQuery("")}
                    >
                        <Combobox.Options className=' absolute top-14  z-10 bg-white'>
                            {
                                filteredManufactures.length === 0 && query !== "" ? (
                                    <Combobox.Option value={query} className='cursor-default select-none py-2 pl-10 pr-4'>
                                        {query} not available
                                    </Combobox.Option>
                                ) : (
                                    filteredManufactures.map(item => (
                                        <Combobox.Option key={item} value={item} className={({ active }) => `relative cursor-default select-none py-2 pl-10 pr-4 ${active ? ' text-white bg-blue-700' : 'text-gray-900'}`}>

                                            {({ active, selected }) => (
                                                <li
                                                    className={`${active ? 'bg-blue-700 text-white' : 'bg-white text-black'
                                                        }`}
                                                >
                                                    {item}
                                                </li>
                                            )}

                                        </Combobox.Option>
                                    ))
                                )
                            }
                        </Combobox.Options>
                    </Transition>
                </div>
            </Combobox>
        </div>
    )
}

export default SearchManufacture