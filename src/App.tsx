import Search from "./components/business/Search.tsx";
import AiList from "./components/business/AiList.tsx";
import aiList from "./constants/ai-list.ts";
import {useState} from "react";

function App() {
    const [search, setSearch] = useState("")
    const searchResult = search ? aiList.filter(
        (item) =>
            item.name.toLowerCase().includes(search.toLowerCase()) || // İsimde eşleşme
            item.keys.some((key) => key.toLowerCase().includes(search.toLowerCase())) // Anahtar kelimelerde eşleşme
    ) : [];

    return (
        <div className="flex flex-col h-screen w-screen ">
            <header className="h-1/5 bg-gray-900 p-10 ">
                <div className="inline-flex items-center justify-center  w-full">
                    <Search search={search} setSearch={setSearch}/>
                </div>
            </header>
            <main className="flex-grow overflow-y-auto bg-gray-900 p-4">
                <AiList aiList={searchResult}/>
            </main>
        </div>

    )
}

export default App
