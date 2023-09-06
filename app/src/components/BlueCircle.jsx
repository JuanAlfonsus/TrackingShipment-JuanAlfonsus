

export default function BlueCircle({ position }) {
    let class2
    if (position === 'leftUp') {
        class2 = 'h-[500px] w-[500px] bg-blue-500 absolute rounded-full -top-[250px] -left-[250px]'
    } else {
        class2 = 'h-[300px] w-[300px] bg-blue-500 absolute rounded-full -bottom-[150px] -right-[150px] z-0'
    }
    return (
        <>
            <div className={class2}></div>
        </>
    )
}