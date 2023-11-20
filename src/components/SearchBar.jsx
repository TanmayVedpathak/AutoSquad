import { useContext, useState } from 'react'
// import { useNavigate } from "react-router-dom" 

import SearchManufacture from './SearchManufacture'
import magnifyingGlass from "../assets/magnifying-glass.svg"
import modalImage from "../assets/model-icon.png"
import { SearchParametersContext } from './../App';

const SearchButton = ({ otherClasses }) => (
    <button type='submit' className={`ml-2 z-10 ${otherClasses}`}>
        <img
            src={magnifyingGlass}
            alt={"magnifying glass"}
            width={40}
            height={40}
            className='object-contain'
        />
    </button>
);

const SearchBar = ({ handleSearchParams }) => {
    const { searchParameters, setSearchParameters } = useContext(SearchParametersContext)
    const [manufacturer, setManufacturer] = useState("")
    const [model, setModel] = useState("")
    // const navigate = useNavigate()

    const handleSearch = (e) => {
        e.preventDefault()

        if (manufacturer.trim() === "" && model.trim() === "") {
            return alert("Please provide some input");
        }

        updateSearchParams(model.toLowerCase(), manufacturer.toLowerCase())
        handleSearchParams({ model: model.toLowerCase(), manufacturer: manufacturer.toLowerCase() })
    }

    const updateSearchParams = (model, manufacturer) => {
        const searchParams = new URLSearchParams(window.location.search);

        if (model) {
            searchParams.set("model", model);
            setSearchParameters({ ...searchParameters, model: model.toLowerCase() })
        } else {
            // searchParams.delete("model");
        }

        if (manufacturer) {
            searchParams.set("manufacturer", manufacturer);
            setSearchParameters({ ...searchParameters, manufacturer: manufacturer.toLowerCase() })

        } else {
            // searchParams.delete("manufacturer");
        }

        // const newPathname = `${window.location.pathname}?${searchParams.toString()}`;

        // navigate(newPathname);
    }
    return (
        <form className='flex items-center justify-start max-sm:flex-col w-full relative max-sm:gap-4 max-w-3xl' onSubmit={handleSearch}>
            <div className='flex-1 max-sm:w-full flex justify-start items-center relative'>
                <SearchManufacture manufacturer={manufacturer} setManufacturer={setManufacturer} />
                <SearchButton otherClasses='sm:hidden' />
            </div>
            <div className='flex-1 max-sm:w-full flex justify-start items-center relative'>
                <img
                    src={modalImage}
                    width={25}
                    height={25}
                    className='absolute w-[20px] h-[20px] ml-4'
                    alt='car model'

                />
                <input
                    type='text'
                    name='model'
                    value={model}
                    onChange={(e) => {
                        setModel(e.target.value)
                        setSearchParameters({ ...searchParameters, model: e.target.value })
                    }}
                    placeholder='Tiguan...'
                    className='w-full h-[48px] pl-12 p-4 rounded-r-full max-sm:rounded-full outline-none cursor-pointer text-sm bg-slate-200'
                />
                <SearchButton otherClasses='sm:hidden' />
            </div>
            <SearchButton otherClasses='max-sm:hidden' />
        </form>
    )
}

export default SearchBar