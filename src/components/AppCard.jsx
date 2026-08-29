function AppCard({ app }) {
    return (
        <div className="group relative bg-white rounded-3xl p-6 border border-zinc-100 shadow-sm hover:shadow-xl hover:shadow-zinc-200/50 hover:-translate-y-1 transition-all duration-300 ease-out flex flex-col h-full">
            {/* Header: Icon & Title */}
            <div className="flex items-start gap-5 mb-5">
                <div
                    className="relative overflow-hidden rounded-2xl border border-zinc-100 shadow-inner motion-safe:animate-breathe"
                    // 카드마다 시작점을 어긋나게 — 8개가 한꺼번에 뛰면 심장박동처럼 보인다
                    style={{ animationDelay: `${(app.id % 4) * 0.5}s` }}
                >
                    <img
                        src={`/images/${app.icon}`}
                        alt={app.name}
                        className="w-16 h-16 object-cover transform group-hover:scale-110 transition-transform duration-500 ease-in-out"
                    />
                </div>
                <div className="flex-1 min-w-0 pt-1">
                    <div className="flex items-center justify-between">
                        <h3 className="text-lg font-bold text-zinc-900 truncate tracking-tight">{app.name}</h3>
                        <span className="text-[10px] font-semibold text-zinc-500 bg-zinc-100 px-2 py-1 rounded-full border border-zinc-200/50">
                            {app.category}
                        </span>
                    </div>
                    <p className="text-xs text-zinc-400 mt-1 font-medium">Damso Original</p>
                </div>
            </div>

            {/* Description */}
            <p className="text-sm text-zinc-600 leading-relaxed mb-8 flex-1 font-normal break-keep">
                {app.description}
            </p>

            {/* Actions */}
            <div className="flex gap-2.5 pt-4 mt-auto border-t border-zinc-50">
                {app.appStore ? (
                    <a href={app.appStore} target="_blank" rel="noopener noreferrer" className="flex-1 bg-zinc-900 text-white flex items-center justify-center gap-2 py-3 rounded-xl text-sm font-semibold hover:bg-zinc-800 hover:shadow-lg hover:shadow-zinc-900/20 transition-all duration-300">
                        <span>App Store</span>
                    </a>
                ) : null}

                {app.playStore ? (
                    <a href={app.playStore} target="_blank" rel="noopener noreferrer" className="flex-1 bg-white text-zinc-900 border border-zinc-200 flex items-center justify-center gap-2 py-3 rounded-xl text-sm font-semibold hover:bg-zinc-50 hover:border-zinc-300 hover:shadow transition-all duration-300">
                        <span>Play Store</span>
                    </a>
                ) : null}

                {/* Coming Soon State */}
                {!app.appStore && !app.playStore && (
                    <div className="w-full py-3 rounded-xl bg-zinc-50 border border-zinc-100 text-zinc-400 text-sm font-medium flex items-center justify-center gap-2 cursor-default">
                        <span className="w-2 h-2 rounded-full bg-zinc-300 animate-pulse"></span>
                        Coming Soon
                    </div>
                )}
            </div>
        </div>
    );
}

export default AppCard;