import { Link } from 'react-router-dom';

const AppleIcon = () => (
    <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
        <path d="M16.37 12.6c-.02-2.3 1.88-3.4 1.96-3.46-1.07-1.56-2.73-1.77-3.32-1.8-1.41-.14-2.76.83-3.48.83-.72 0-1.82-.81-3-.79-1.54.02-2.97.9-3.76 2.28-1.6 2.78-.41 6.9 1.15 9.16.77 1.1 1.68 2.34 2.87 2.3 1.15-.05 1.59-.75 2.98-.75 1.39 0 1.78.75 3 .72 1.24-.02 2.03-1.12 2.79-2.23.88-1.28 1.24-2.52 1.26-2.59-.03-.01-2.42-.93-2.45-3.68zM14.1 5.86c.63-.77 1.06-1.83.94-2.89-.91.04-2.01.61-2.67 1.37-.58.67-1.1 1.76-.96 2.8 1.01.08 2.05-.52 2.69-1.28z" />
    </svg>
);

const PlayIcon = () => (
    <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
        <path d="M3.609 1.814L13.792 12 3.61 22.186a.996.996 0 0 1-.61-.92V2.734a1 1 0 0 1 .609-.92zm10.89 10.893l2.302 2.302-10.937 6.333 8.635-8.635zm3.199-3.198l2.807 1.626a1 1 0 0 1 0 1.73l-2.808 1.626L15.206 12l2.492-2.491zM5.864 2.658L16.8 9.99l-2.302 2.302-8.634-8.634z" />
    </svg>
);

const storeBtn =
    'inline-flex items-center gap-1.5 h-9 px-3.5 rounded-full text-[13px] font-semibold transition-colors';

function AppCard({ app }) {
    const released = app.appStore || app.playStore;

    return (
        <article className="group flex flex-col h-full rounded-[28px] bg-white p-5 ring-1 ring-zinc-200/70 hover:ring-zinc-300 hover:shadow-[0_12px_40px_-12px_rgba(0,0,0,0.15)] transition-all duration-300">
            <div className="flex items-center gap-4">
                {/* 카드마다 시작점을 어긋나게 — 한꺼번에 뛰면 심장박동처럼 보인다 */}
                <div className="shrink-0 motion-safe:animate-breathe" style={{ animationDelay: `${(app.id % 4) * 0.5}s` }}>
                    <img
                        src={`/images/${app.icon}`}
                        alt=""
                        loading="lazy"
                        className="w-[72px] h-[72px] rounded-[20px] object-cover ring-1 ring-black/5"
                    />
                </div>
                <div className="min-w-0">
                    {/* 게임은 '게임' 칸 제목이 이미 말해준다 — 앱(생산성 · 도구 …)만 분류를 단다 */}
                    {app.category !== '게임' && (
                        <p className="text-[11px] font-semibold text-zinc-400 tracking-wide">{app.category}</p>
                    )}
                    <h3 className="mt-0.5 text-[19px] font-bold text-zinc-900 tracking-tight truncate">{app.name}</h3>
                    {!released && (
                        <span className="mt-1.5 inline-flex items-center gap-1.5 text-[11px] font-semibold text-amber-700 bg-amber-50 ring-1 ring-amber-200/70 px-2 py-0.5 rounded-full">
                            <span className="w-1.5 h-1.5 rounded-full bg-amber-500 motion-safe:animate-pulse" />
                            Coming Soon
                        </span>
                    )}
                </div>
            </div>

            <p className="mt-4 text-[14px] leading-relaxed text-zinc-600 break-keep flex-1">
                {app.description}
            </p>

            {released && (
                <div className="mt-5 flex flex-wrap gap-2">
                    {app.appStore && (
                        <a href={app.appStore} target="_blank" rel="noopener noreferrer"
                            className={`${storeBtn} bg-zinc-900 text-white hover:bg-zinc-700`}>
                            <AppleIcon /> App Store
                        </a>
                    )}
                    {app.playStore && (
                        <a href={app.playStore} target="_blank" rel="noopener noreferrer"
                            className={`${storeBtn} bg-zinc-100 text-zinc-800 hover:bg-zinc-200`}>
                            <PlayIcon /> Google Play
                        </a>
                    )}
                </div>
            )}

            {/* 앱 전용 안내 페이지 (게임 약관 · 확률 · 데이터 삭제 등). apps.json 의 links 로 채운다 */}
            {app.links?.length > 0 && (
                <div className="mt-4 pt-4 border-t border-zinc-100 flex flex-wrap gap-x-4 gap-y-1.5">
                    {app.links.map((l) => (
                        <Link key={l.href} to={l.href}
                            className="text-[12px] font-medium text-zinc-500 hover:text-zinc-900 underline-offset-4 hover:underline">
                            {l.label} →
                        </Link>
                    ))}
                </div>
            )}
        </article>
    );
}

export default AppCard;
