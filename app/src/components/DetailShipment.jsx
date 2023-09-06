import HorizontalLine from "./HorizontalLine"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBox, faBoxArchive, faBoxOpen, faTruckFast } from '@fortawesome/free-solid-svg-icons'


export default function DetailShipment({ data, scrollToRef }) {
    const { resi_info, shipment_detail, tracking_status_detail } = data

    return (
        <>
            {/* resi_info */}
            <div ref={scrollToRef} className="p-10">
                <div className="flex flex-row justify-between pr-7 mb-5">
                    <div>
                        <div className="flex flex-row gap-2 items-center">
                            <FontAwesomeIcon icon={faBoxOpen} style={{ color: "#6b7280", }} />
                            <h3 className="text-2xl text-gray-600 font-bold">Service Type</h3>
                        </div>
                        <p className="text-gray-500 text-xl text-center font-semibold">{resi_info[0].service_type}</p>
                    </div>
                    <div>
                        <div className="flex flex-row gap-2 items-center">
                            <FontAwesomeIcon icon={faBoxArchive} style={{ color: "#6b7280", }} />
                            <h3 className="text-2xl text-gray-600 font-bold">From</h3>
                        </div>
                        <p className="text-gray-500 text-xl text-center font-semibold">{resi_info[0].city_origin}</p>
                    </div>
                    <div>
                    <div className="flex flex-row gap-2 items-center">
                            <FontAwesomeIcon icon={faTruckFast} style={{ color: "#6b7280", }} />
                            <h3 className="text-2xl text-gray-600 font-bold">Destination</h3>
                        </div>
                        <p className="text-gray-500 text-xl text-center font-semibold">{resi_info[0].city_dest}</p>
                    </div>
                </div>

                {/* History Status */}
                <div className="mb-5">
                    <h3 className="text-2xl text-gray-500 font-bold">History Status</h3>
                    <HorizontalLine />
                    <div className="flex flex-col relative mt-5">

                        {
                            tracking_status_detail.map((e, i) => {
                                const { dateprocess, status, branch_code, status_by } = e
                                const date = dateprocess.split(' ')
                                date.splice(0, 1)
                                date.splice(-1, 1)
                                const newDate = date.join(' ')
                                return (
                                    <div key={i}>
                                        <div className="flex items-center mb-4">
                                            <div className={ i == 0 ? "w-8 h-8 rounded-full bg-gray-500 text-white flex items-center justify-center" : "w-8 h-8 rounded-full bg-gray-300 text-white flex items-center justify-center"}></div>
                                            <div className="ml-2">
                                                <h3 className={ i == 0 ? "text-gray-600 font-bold" : "text-gray-500 font-semibold"}>{status} AT {branch_code}</h3>
                                                <p className={ i == 0 ? "text-gray-500 font-semibold" : "text-gray-600"}>BY {status_by}</p>
                                                <p className={ i == 0 ? "text-gray-500 font-semibold text-sm" : "text-gray-500 font-light text-sm"}>{newDate}</p>
                                            </div>
                                        </div>
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>



                {/* Shipment Status */}
                <h3 className="text-2xl text-gray-600 font-bold">Shipment Detail</h3>
                <HorizontalLine />

                <div className="flex flex-row justify-between mr-20 mt-5">
                    <div>
                        <h4 className="text-xl text-gray-600 font-semibold">Shipment Date</h4>
                        <p className="text-gray-500">{shipment_detail.dateprocess}</p>
                    </div>
                    <div>
                        <h4 className="text-xl text-gray-600 font-semibold">Qty</h4>
                        <p className="text-gray-500">{shipment_detail.ttl_piece}</p>
                    </div>
                    <div>
                        <h4 className="text-xl text-gray-600 font-semibold">Weight</h4>
                        <p className="text-gray-500">{shipment_detail.ttl_chargeable_weight} Kg</p>
                    </div>
                </div>

                <div className="mt-3">
                    <h4 className="text-xl text-gray-600 font-semibold">Good Description</h4>
                    <p className="text-gray-500">{shipment_detail.isi}</p>
                </div>

                <div className="mt-3">
                    <h4 className="text-xl text-gray-600 font-semibold">Branch ID</h4>
                    <p className="text-gray-500">{shipment_detail.isi}</p>
                </div>

                <div className="mt-3">
                    <h4 className="text-2xl text-gray-600 font-bold">Shipper Information</h4>
                    <HorizontalLine />
                    <div className="mt-5">
                        <h4 className="text-xl text-gray-600 font-semibold">Shipper Name</h4>
                        <p className="text-gray-500">{shipment_detail.customer_name}</p>
                    </div>
                    <div className="mt-3">
                        <h4 className="text-xl text-gray-600 font-semibold">Shipper City</h4>
                        <p className="text-gray-500">{shipment_detail.origin_city}</p>
                    </div>
                </div>


                <div className="mt-3">
                    <h4 className="text-2xl text-gray-600 font-bold">Consigne Information</h4>
                    <HorizontalLine />
                    <div className="mt-5">
                        <h4 className="text-xl text-gray-600 font-semibold">Consigne Name</h4>
                        <p className="text-gray-500">{shipment_detail.consignee_name}</p>
                    </div>
                    <div className="mt-3">
                        <h4 className="text-xl text-gray-600 font-semibold">Consigne Address</h4>
                        <p className="text-gray-500 font-normal">{shipment_detail.consignee_address}</p>
                    </div>
                </div>



            </div>
        </>
    )
}