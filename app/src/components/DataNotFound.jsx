import NotFound from '../assets/not_found.svg'

export default function DataNotFound() {
    return (
        <>
            <div className='flex justify-center mb-5'>
                <h3 className='text-gray-500 text-2xl'>Data not found!</h3>
                {/* <h3 className='text-blues text-2xl'>Data not found!</h3> */}
            </div>
            <img src={NotFound} alt="Delivery" className='h-52' />
        </>
    )
}