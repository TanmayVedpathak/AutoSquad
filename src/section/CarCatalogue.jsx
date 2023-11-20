import { useQuery } from 'react-query'

import { CarCard, SearchBar, CustomFilter, ShowMore, LoaderComponent } from '../components'
import { fetchCars } from '../utils'
import { fuels, yearsOfProduction } from '../constants'
import { useContext } from 'react'
import { SearchParametersContext } from '../App'

const CarCatalogue = () => {
    const {searchParameters} = useContext(SearchParametersContext)
    const { data, status, refetch } = useQuery("cars", () => fetchCars({
        manufacturer: searchParameters.manufacturer || "",
        year: searchParameters.year || 2022,
        fuel: searchParameters.fuel || "",
        limit: searchParameters.limit || 10,
        model: searchParameters.model || "",
    }));
    const isDataEmpty = !Array.isArray(data) || data.length < 1 || !data

    const handleSearchParams = () => {
        console.log(searchParameters, "searchParameters")
        refetch()
    }

    return (
        <div className=' md:px-16 px-6'>
            <h1 className=' text-4xl font-extrabold'>Car Catalogue</h1>
            <p className=' text-lg'>Explore the cars you might like</p>

            <div className='mt-12 w-full flex flex-between items-center flex-wrap gap-5'>
                <SearchBar handleSearchParams={handleSearchParams} />
                <div className='flex justify-start flex-wrap items-center gap-2'>
                    <CustomFilter title="fuel" options={fuels} />
                    <CustomFilter title="year" options={yearsOfProduction} />
                </div>
            </div>
            {status === "error" && <p>Error fetching data</p>}
            {status === "loading" && <LoaderComponent />}
            {status === "success" &&
                !isDataEmpty ? (
                <section>
                    <div className='grid 2xl:grid-cols-4 xl:grid-cols-3 md:grid-cols-2 grid-cols-1 w-full gap-8 pt-14'>
                        {
                            data?.map((car, index) => (
                                <CarCard key={index} car={car} />
                            ))
                        }
                    </div>
                    <ShowMore handleSearchParams={handleSearchParams} pageNumber={(searchParameters.limit || 10) / 10} isNext={(searchParameters.limit || 10) > data.length} />
                </section>
            ) : (
                <div>
                    <h2 className=' text-black text-xl font-bold'>Oops, no results</h2>
                    <p>{data?.message}</p>
                </div>
            )
            }

        </div>
    )
}

export default CarCatalogue