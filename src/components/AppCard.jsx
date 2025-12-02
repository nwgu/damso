// src/components/AppCard.jsx
function AppCard({ app }) {
    return (
        <div className="bg-white rounded-2xl p-5 border border-zinc-100 hover:border-zinc-200 hover:shadow-lg transition-all duration-300">
            <div className="flex items-start gap-4 mb-4">
                <img
                    src={`/images/${app.icon}`}
                    alt={app.name}
                    className="w-14 h-14 rounded-xl object-cover shadow-sm"
                />
                <div className="flex-1 min-w-0">
                    <h3 className="text-base font-semibold text-zinc-900 truncate">{app.name}</h3>
                    <p className="text-xs text-zinc-400 mt-0.5">{app.category}</p>
                </div>
            </div>

            <p className="text-sm text-zinc-600 leading-relaxed mb-5">{app.description}</p>

            <div className="flex gap-2">
                {app.appStore && (
                    <a href={app.appStore} target="_blank" rel="noopener noreferrer" className="flex-1 bg-zinc-900 text-white text-center py-2.5 text-sm font-medium rounded-xl hover:bg-zinc-800 transition-colors">
                        App Store
                    </a>
                )}
                {app.playStore && (
                    <a href={app.playStore} target="_blank" rel="noopener noreferrer" className="flex-1 bg-zinc-100 text-zinc-900 text-center py-2.5 text-sm font-medium rounded-xl hover:bg-zinc-200 transition-colors">
                        Play Store
                    </a>
                )}
                {!app.appStore && !app.playStore && (
                    <div className="flex-1 bg-zinc-50 text-zinc-400 text-center py-2.5 text-sm font-medium rounded-xl border border-dashed border-zinc-200">
                        Coming Soon
                    </div>
                )}
            </div>
        </div>
    );
}

export default AppCard;