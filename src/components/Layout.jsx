// src/components/Layout.jsx
import { Link } from 'react-router-dom';

function Layout({ children }) {
    return (
        <div className="min-h-screen bg-zinc-50 flex flex-col">
            <header className="bg-white/80 backdrop-blur-md border-b border-zinc-100 sticky top-0 z-50">
                <div className="max-w-5xl mx-auto px-6 py-4 flex items-center justify-between">
                    <Link to="/" className="flex items-center gap-2.5 w-fit group">
                        <div className="w-9 h-9 bg-zinc-900 rounded-lg flex items-center justify-center">
                            <span className="text-white text-sm font-semibold">💬</span>
                        </div>
                        <div>
                            <h1 className="text-lg font-semibold text-zinc-900 leading-tight">담소</h1>
                            <p className="text-zinc-500 text-xs">Mobile App Studio</p>
                        </div>
                    </Link>

                    <a
                        href="https://open.kakao.com/o/spOG7G4h"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-4 py-2 text-sm font-medium text-zinc-700 bg-white/60 backdrop-blur border border-zinc-200 rounded-full shadow-sm hover:shadow hover:bg-white transition-all"
                    >
                        문의하기
                    </a>
                </div>
            </header>

            <main className="flex-1">
                {children}
            </main>

            <footer className="bg-zinc-900 text-zinc-400">
                <div className="max-w-5xl mx-auto px-6 py-10">
                    <div className="flex flex-col md:flex-row justify-between gap-8">
                        <div className="space-y-3">
                            <div className="flex items-center gap-2">
                                <div className="w-7 h-7 bg-zinc-800 rounded-md flex items-center justify-center">
                                    <span className="text-white text-xs font-semibold">💬</span>
                                </div>
                                <span className="text-zinc-300 font-medium">담소</span>
                            </div>
                            <div className="text-sm space-y-1">
                                <p>사업자등록번호: 364-17-02671</p>
                                <p>contact@damso.app</p>
                            </div>
                        </div>

                        <div className="flex flex-col gap-4">
                            <div className="flex gap-6 text-sm">
                                <Link to="/privacy" className="hover:text-white transition-colors">
                                    개인정보처리방침
                                </Link>
                                <Link to="/terms" className="hover:text-white transition-colors">
                                    이용약관
                                </Link>
                            </div>
                            <a
                                href="https://play.google.com/store/apps/developer?id=%EB%8B%B4%EC%86%8C"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-2 px-4 py-2 bg-zinc-800 hover:bg-zinc-700 rounded-lg transition-colors w-fit"
                            >
                                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                                    <path d="M3.609 1.814L13.792 12 3.61 22.186a.996.996 0 0 1-.61-.92V2.734a1 1 0 0 1 .609-.92zm10.89 10.893l2.302 2.302-10.937 6.333 8.635-8.635zm3.199-3.198l2.807 1.626a1 1 0 0 1 0 1.73l-2.808 1.626L15.206 12l2.492-2.491zM5.864 2.658L16.8 9.99l-2.302 2.302-8.634-8.634z" />
                                </svg>
                                <span className="text-sm text-zinc-300">Google Play에서 보기</span>
                            </a>
                        </div>
                    </div>

                    <div className="mt-8 pt-6 border-t border-zinc-800 text-xs text-zinc-500">
                        © 2025 담소(Damso). All rights reserved.
                    </div>
                </div>
            </footer>
        </div>
    );
}

export default Layout;