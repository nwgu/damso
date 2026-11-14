import AppCard from './components/AppCard';
import Layout from './components/Layout';
import appsData from './data/apps.json';

// 최근에 낸 앱이 위로. apps.json 은 추가 순서(id 오름차순)를 유지하고
// 화면에서만 뒤집는다 — 파일을 손으로 재정렬하면 새 앱을 추가할 때마다 헷갈린다.
const sortedApps = [...appsData].sort((a, b) => b.id - a.id);

// 게임을 위에, 나머지(생산성 · 도구 · 교육 · 라이프스타일)를 아래에. category 가 '게임' 인지로만 가른다.
const SECTIONS = [
    { key: 'games', title: '게임', apps: sortedApps.filter((a) => a.category === '게임') },
    { key: 'apps', title: '앱', apps: sortedApps.filter((a) => a.category !== '게임') },
].filter((s) => s.apps.length > 0);

function App() {
    return (
        <Layout>
            <div className="max-w-6xl mx-auto px-5 sm:px-6 pt-10 sm:pt-14 space-y-14 sm:space-y-16">
                {SECTIONS.map((s) => (
                    <section key={s.key} id={s.key} className="scroll-mt-24">
                        <h2 className="mb-6 text-xl font-bold text-zinc-900 tracking-tight">
                            {s.title} <span className="ml-1 text-zinc-400 font-semibold">{s.apps.length}</span>
                        </h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5">
                            {s.apps.map((app) => (
                                <AppCard key={app.id} app={app} />
                            ))}
                        </div>
                    </section>
                ))}
            </div>
        </Layout>
    );
}

export default App;
