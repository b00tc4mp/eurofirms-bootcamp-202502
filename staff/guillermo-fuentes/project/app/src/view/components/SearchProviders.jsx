import { useState,useEffect,useMemo } from "react";
import { logic } from "../../logic";
import debounce from "lodash/debounce";

export const SearchProviders = ({onSelectProviderId,setError=()=>{}})=>{
const [query,setQuery] = useState("")
const [suggestions,setSuggestions]=useState([])
const [providerSelect, setProviderSelect]= useState(false)

const debouncedFetchSuggestions = useMemo(() =>
  debounce((query) => {
    logic.getProvidersSuggestions(query)
      .then((providers) => {
        setSuggestions(providers);
      })
      .catch((error) => {
        setError(error);
        alert(error.message);
      });
  }, 300),
[]); 
const handleSelectProvider = (provider)=>{
    setQuery(provider.name)
    onSelectProviderId(provider._id)
    setSuggestions([])
    setError("")
    setProviderSelect(true)
};
useEffect(()=>{
    if(query && !providerSelect){
        debouncedFetchSuggestions(query)
    }else{
        setSuggestions([])
        setError("")
    }
    return ()=>{
        debouncedFetchSuggestions.cancel();
    }
},[query])

return (
    <div>
      <label htmlFor="userSearch" className="block text-sm font-medium text-gray-700 mb-1">
        Providers
      </label>
      <input
        type="text"
        id="userSearch"
        value={query}
        onChange={(e) => {
          setQuery(e.target.value);
          setProviderSelect(false);
        }}
        placeholder="Search user by name"
        className="w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
        autoComplete="off"
      />
      {suggestions.length > 0 && (
        <ul className="border border-gray-300 rounded-lg mt-1 max-h-40 overflow-y-auto bg-white">
          {suggestions.map((provider) => (
            <li
              key={provider._id}
              onClick={() => handleSelectProvider(provider)}
              className="px-4 py-2 cursor-pointer hover:bg-blue-100"
            >
              {provider.name}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};