// src/App.jsx
import AppCard from './components/AppCard';
import Layout from './components/Layout';
import appsData from './data/apps.json';

function App() {
  return (
    <Layout>
      <div className="max-w-5xl mx-auto px-6 py-16">
        <div className="mb-10">
          <h2 className="text-2xl font-semibold text-zinc-900">Our Apps</h2>
          <p className="text-zinc-500 mt-1">다양한 모바일 앱을 개발합니다</p>
        </div>

        {appsData.length === 0 ? (
          <div className="text-center py-20">
            <p className="text-zinc-400">앱을 추가해주세요</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {appsData.map((app) => (
              <AppCard key={app.id} app={app} />
            ))}
          </div>
        )}
      </div>
    </Layout>
  );
}

export default App;