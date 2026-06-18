const InProgress = ({name}) => {
    return (
        <div className="col-span-6 shadow-md flex flex-col  items-center justify-center h-screen">
            <h1 className="text-4xl font-bold mb-4">{name} In Progress</h1>
            <p className="text-lg text-gray-600">We're working hard to bring you this feature. Stay tuned!</p>
        </div>
    )
}


export default InProgress;