// src/components/Layout.jsx (새 파일)
import { Link } from 'react-router-dom';

function Layout({ children }) {
    return (
        <div className="min-h-screen bg-gray-50 flex flex-col">
            <header className="bg-white shadow-sm">
                <div className="max-w-6xl mx-auto px-4 py-6">
                    <Link to="/" className="flex items-center gap-3 w-fit">
                        <span className="text-3xl">💬</span>
                        <div>
                            <h1 className="text-2xl font-bold text-gray-900">담소</h1>
                            <p className="text-gray-600 text-sm">다양한 모바일 앱을 개발합니다</p>
                        </div>
                    </Link>
                </div>
            </header>

            <main className="flex-1">
                {children}
            </main>

            <footer className="bg-white border-t mt-20">
                <div className="max-w-6xl mx-auto px-4 py-8">
                    <div className="flex flex-col md:flex-row justify-between items-center gap-4">
                        <div className="text-sm text-gray-600">
                            <p>상호: 담소</p>
                            <p>대표: 홍길동</p>
                            <p>사업자등록번호: 364-17-02671</p>
                            <p>이메일: contact@damso.app</p>
                        </div>

                        <div className="flex gap-4">
                            <Link to="/privacy" className="text-sm text-gray-600 hover:text-gray-900">
                                개인정보처리방침
                            </Link>
                            <Link to="/terms" className="text-sm text-gray-600 hover:text-gray-900">
                                이용약관
                            </Link>
                        </div>
                    </div>

                    <div className="text-center mt-6 text-sm text-gray-500">
                        © 2024 담소(Damso). All rights reserved.
                    </div>
                </div>
            </footer>
        </div>
    );
}

export default Layout;