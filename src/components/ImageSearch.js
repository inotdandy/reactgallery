import { useState } from "react";

const ImageSearch = ( { textSearch }) => {

    const [text, setText] = useState('')

    const handleSearch = (e) => {

        e.preventDefault()

        textSearch(text);
    }

    return (
        <div className="mx-auto max-w-sm my-10 overflow-hidden rounded">
            <form 
            onSubmit={handleSearch}
            className="w-full max-w-sm">
                <div className="flex item-center border-b border-b-2 border-purple-500 py-2">
                    <input type="text"
                    onChange={ (e) => setText(e.target.value)} 
                    className="appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus-outline-none" 
                    placeholder="Search Image Term...."
                    />
                    <button
                    type="submit" 
                    className="flex-shrink-0 bg-purple-500 hover:bg-purple-700 border-purple-500 hover:border-purple-700 text-sm border-4 text-white py-1 px-2 rounded">
                        Search
                    </button>
                </div>
            </form>
        </div>
    );
}
 
export default ImageSearch;