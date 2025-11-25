// src/components/AppCard.jsx
function AppCard({ app }) {
    return (
        <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition">
            <div className="flex items-center gap-4 mb-4">
                <img
                    src={app.icon}
                    alt={app.name}
                    className="w-16 h-16 rounded-xl"
                />
                <div>
                    <h3 className="text-xl font-bold text-gray-900">{app.name}</h3>
                    <p className="text-sm text-gray-500">{app.category}</p>
                </div>
            </div>

            <p className="text-gray-700 mb-4">{app.description}</p>

            <div className="flex gap-3">
                {app.appStore && (
                    <a
                        href={app.appStore}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 bg-black text-white text-center py-2 rounded-lg hover:bg-gray-800 transition"
                    >
                        App Store
                    </a>
                )}
                {app.playStore && (
                    <a
                        href={app.playStore}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 bg-green-600 text-white text-center py-2 rounded-lg hover:bg-green-700 transition"
                    >
                        Play Store
                    </a>
                )}
            </div>
        </div>
    );
}

export default AppCard;