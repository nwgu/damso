import AppCard from './components/AppCard';
import Layout from './components/Layout';
import appsData from './data/apps.json';

// 최근에 낸 앱이 위로. apps.json 은 추가 순서(id 오름차순)를 유지하고
// 화면에서만 뒤집는다 — 파일을 손으로 재정렬하면 새 앱을 추가할 때마다 헷갈린다.
const sortedApps = [...appsData].sort((a, b) => b.id - a.id);

function App() {
  return (
    <Layout>
      <div className="max-w-5xl mx-auto px-6 py-12 lg:py-16">

        {/* 설명 문구 대신 -> 깔끔한 섹션 헤더 디자인 **/}
        <div className="flex items-end justify-between border-b border-zinc-200 pb-6 mb-10">
          <div>
            <h2 className="text-3xl font-bold text-zinc-900 tracking-tight">
              Our Apps
            </h2>
          </div>
          <div className="flex items-center gap-2">
            <span className="px-3 py-1 bg-zinc-100 rounded-full text-xs font-semibold text-zinc-500 border border-zinc-200/50">
              Total {appsData.length}
            </span>
          </div>
        </div>

        {/* Apps Grid */}
        {appsData.length === 0 ? (
          <div className="text-center py-40 rounded-3xl border-2 border-dashed border-zinc-100 bg-zinc-50/50">
            <p className="text-zinc-400 font-medium">등록된 프로젝트가 없습니다.</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {sortedApps.map((app) => (
              <AppCard key={app.id} app={app} />
            ))}
          </div>
        )}
      </div>
    </Layout>
  );
}

export default App;