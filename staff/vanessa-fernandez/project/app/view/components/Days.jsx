const days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']

export const Days = ({ onSelect })=> {
    return (
        <div className="flex flex-col items-center gap-4 mt-10">
            <h2 className="text-2xl font-semibold">Select a day</h2>
            <div className="grid grid-cols-2 gap-4">
                {days.map(day => (
                    <button
                        key={day}
                        onClick={() => onSelect(day)}
                        className="px-6 py-3 rounded-2xl shadow-md bg-[#0ab5ee] text-white text-lg hover:bg-[#099ecf] transition"
                    >{day}</button>    
                ))}
            </div>
        </div>
    )
}