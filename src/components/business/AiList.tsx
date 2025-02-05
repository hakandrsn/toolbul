const AiList = ({aiList}: { aiList: any }) => {
    return (
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 p-6">
            {aiList.map((tool: any, index: any) => (
                <div
                    key={index}
                    className="bg-gray-800 text-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-200"
                >
                    {/* Ikon ve Başlık */}
                    <div className="flex items-center space-x-4 text-lg font-semibold">
                        <span className="text-2xl">{tool.icon}</span>
                        <h2>{tool.name}</h2>
                    </div>
                    {/* Açıklama */}
                    <p className="text-gray-400 mt-3 text-sm">{tool.description}</p>
                </div>
            ))}
        </div>
    );
};

export default AiList;
