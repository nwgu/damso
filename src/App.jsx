import { useState } from 'react';
import AppCard from './components/AppCard';
import Layout from './components/Layout';
import appsData from './data/apps.json';

// 최근에 낸 앱이 위로. apps.json 은 추가 순서(id 오름차순)를 유지하고
// 화면에서만 뒤집는다 — 파일을 손으로 재정렬하면 새 앱을 추가할 때마다 헷갈린다.
const sortedApps = [...appsData].sort((a, b) => b.id - a.id);

const FILTERS = [
    { key: 'all', label: '전체', match: () => true },
    { key: 'game', label: '게임', match: (a) => a.category === '게임' },
    { key: 'app', label: '앱', match: (a) => a.category !== '게임' },
];

function App() {
    const [filter, setFilter] = useState('all');
    const current = FILTERS.find((f) => f.key === filter);
    const apps = sortedApps.filter(current.match);

    return (
        <Layout>
            {/* Apps */}
            <section id="apps" className="max-w-6xl mx-auto px-5 sm:px-6 scroll-mt-24 pt-10 sm:pt-14">
                <div className="flex items-center justify-between gap-4 mb-6">
                    <h2 className="text-xl font-bold text-zinc-900 tracking-tight">
                        앱 <span className="ml-1 text-zinc-400 font-semibold">{apps.length}</span>
                    </h2>
                    <div className="flex p-1 rounded-full bg-zinc-200/60">
                        {FILTERS.map((f) => (
                            <button key={f.key} onClick={() => setFilter(f.key)}
                                className={`px-4 h-8 rounded-full text-[13px] font-semibold transition-colors ${filter === f.key ? 'bg-white text-zinc-900 shadow-sm' : 'text-zinc-500 hover:text-zinc-800'}`}>
                                {f.label}
                            </button>
                        ))}
                    </div>
                </div>

                {apps.length === 0 ? (
                    <div className="text-center py-32 rounded-3xl border-2 border-dashed border-zinc-200">
                        <p className="text-zinc-400 font-medium">등록된 앱이 없습니다.</p>
                    </div>
                ) : (
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5">
                        {apps.map((app) => (
                            <AppCard key={app.id} app={app} />
                        ))}
                    </div>
                )}
            </section>
        </Layout>
    );
}

export default App;
