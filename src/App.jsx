// src/App.jsx 수정
import AppCard from './components/AppCard';
import Layout from './components/Layout';
import appsData from './data/apps.json';

function App() {
  return (
    <Layout>
      <div className="max-w-6xl mx-auto px-4 py-12">
        {/* <h2 className="text-3xl font-bold text-gray-900 mb-8">Our Apps</h2>
        {appsData.length === 0 ? (
          <p className="text-gray-500 text-center py-12">앱을 추가해주세요</p>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {appsData.map((app) => (
              <AppCard key={app.id} app={app} />
            ))}
          </div>
        )} */}
      </div>
    </Layout>
  );

}

export default App;