import React, { useContext } from 'react'
import CustomButton from './CustomButton'
import { SearchParametersContext } from '../App'


const ShowMore = ({ handleSearchParams, pageNumber, isNext }) => {
    const {searchParameters, setSearchParameters} = useContext(SearchParametersContext)
    const handleLimitChange = () => {
        const newLimit = (pageNumber + 1) * 10;
        setSearchParameters({...searchParameters, limit: newLimit})
        handleSearchParams()
    }
    return (
        <div className='w-full flex items-center justify-center gap-5 mt-10'>
            {!isNext && (
                <CustomButton
                    btnType="button"
                    title="Show More"
                    containerStyles="bg-primary-blue rounded-full text-white"
                    handleClick={handleLimitChange}
                />
            )}
        </div>
    )
}

export default ShowMore