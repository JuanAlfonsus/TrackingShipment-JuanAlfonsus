import { useState } from "react"
import axios from "axios"
import DetailShipment from "../components/DetailShipment"
import Delivery from '../assets/icon_devilery.svg'
import DataNotFound from "../components/DataNotFound"
import ModalLoading from "../components/Loading"


export default function TrackingShipmentView() {

    const [input, setInput] = useState('')
    const [loading, setLoading] = useState(false)
    const [data, setData] = useState({})

    // Handle input resi
    const handleInput = (e) => {
        setInput(e.target.value)
    }

    // Hit API Check Resi
    const handleCheck = async (e) => {
        try {
            e.preventDefault()
            setData({})
            if (!input) {
                setData({
                    noInput: 1
                })
                return
            }

            setLoading(true)

            const { data } = await axios({
                method: 'get',
                url: 'https://partner-api.21express.co.id/publics/tracking?resi_no=' + input,
                headers: {
                    'Api-Key': 'X*kLJ=GDcA1q',
                    'Sisco-Token': 'TOBGOAV5ULI/QGN8UQCKY9M6SNP+5TZZLN/JDFLXCUSKIDADBZ6MNQWLJPVE9JKY'
                }
            })
            setData(data.express21.results)
        } catch (error) {
            console.log(error)
            setData({
                notFound: 1
            })
        } finally {
            setLoading(false)
        }
    }


    return (
        <>
            <section className="flex justify-center align-middle mt-10 pb-10">
                {/* form */}
                <div className="bg-white w-2/3 rounded shadow-lg flex flex-col pb-14">
                    <h1 className="text-4xl text-center p-10 text-gray-500">Trace & Track</h1>
                    {/* Form */}
                    <form className="p-5" onSubmit={(e) => handleCheck(e)}>
                        <div className="flex flex-col gap-3 items-center">
                            <label className="text-gray-500 font-bold">
                                No. Resi
                            </label>
                            <div className="flex flex-row gap-5">
                                <input className="shadow appearance-none border rounded w-9/12 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" type="text" name="resi" placeholder="Input nomor resi disini" onChange={(e) => handleInput(e)} />
                                <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" type='submit'>Cek</button>
                            </div>
                        </div>
                    </form>

                    {/* detail user */}
                    {
                        loading ? <ModalLoading /> : data.resi_info ? <DetailShipment data={data} /> : data.notFound ? <DataNotFound /> : <img src={Delivery} alt="Delivery" className='h-32' />
                    }
                </div>
            </section>
        </>
    )
}