const days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']

export const Days = ({ onSelect })=> {
    return (
        <div className="flex flex-col items-center gap-6 mt-10 w-full px-4">
            <h2 className="text-2xl font-semibold">Select a day</h2>
            <div className="grid grid-cols-2 gap-6 sm:grid-cols-3 w-full max-w-md">
                {days.map(day => (
                    <button
                        key={day}
                        onClick={() => onSelect(day)}
                        className="px-6 py-3 rounded-2xl shadow-md border border-[#0ab5ee] text-lg hover:text-white hover:bg-[#0ab5ee] transition-all duration-200"
                    >{day}</button>    
                ))}
            </div>
        </div>
    )
}