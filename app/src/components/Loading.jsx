import SyncLoader from "react-spinners/ClipLoader";

export default function ModalLoading() {
    return (
        <div className="text-center">
            <SyncLoader color="#36d7b7" size={70} />
        </div>
    )
}