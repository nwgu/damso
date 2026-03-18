import { Link } from 'react-router-dom';

function Layout({ children }) {
    return (
        // 배경에 은은한 도트 패턴 추가 (modern tech vibe)
        <div className="min-h-screen bg-zinc-50 flex flex-col relative overflow-hidden">
            <div className="absolute inset-0 bg-[radial-gradient(#e4e4e7_1px,transparent_1px)] [background-size:16px_16px] [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,#000_70%,transparent_100%)] pointer-events-none" />

            <header className="fixed top-0 w-full bg-white/70 backdrop-blur-lg border-b border-zinc-200/50 z-50 transition-all duration-300">
                <div className="max-w-5xl mx-auto px-6 py-4 flex items-center justify-between">
                    <Link to="/" className="flex items-center gap-3 group">
                        <div className="w-10 h-10 bg-zinc-900 rounded-xl flex items-center justify-center shadow-lg group-hover:scale-105 transition-transform duration-300">
                            <span className="text-white text-lg">💬</span>
                        </div>
                        <div className="flex flex-col">
                            <h1 className="text-lg font-bold text-zinc-900 leading-none tracking-tight">담소</h1>
                            <span className="text-[10px] font-medium text-zinc-400 tracking-wider uppercase mt-1">Mobile App Studio</span>
                        </div>
                    </Link>

                    <a
                        href="https://open.kakao.com/o/spOG7G4h"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-5 py-2.5 text-sm font-semibold text-zinc-800 bg-white border border-zinc-200 rounded-full shadow-sm hover:shadow-md hover:bg-zinc-50 hover:-translate-y-0.5 transition-all duration-300"
                    >
                        문의하기
                    </a>
                </div>
            </header>

            <main className="flex-1 pt-24 pb-20 relative z-10">
                {children}
            </main>

            <footer className="bg-zinc-900 text-zinc-400 border-t border-zinc-800 relative z-10">
                <div className="max-w-5xl mx-auto px-6 py-12">
                    <div className="flex flex-col md:flex-row justify-between gap-10">
                        <div className="space-y-4">
                            <div className="flex items-center gap-2">
                                <div className="w-8 h-8 bg-zinc-800 rounded-lg flex items-center justify-center">
                                    <span className="text-white text-sm">💬</span>
                                </div>
                                <span className="text-zinc-100 font-bold tracking-tight text-lg">담소</span>
                            </div>
                            <div className="text-sm text-zinc-500 space-y-1.5 font-light">
                                <p>사업자등록번호: 364-17-02671</p>
                                <p>contact@damso.app</p>
                            </div>
                        </div>

                        <div className="flex flex-col gap-5">
                            <div className="flex gap-6 text-sm font-medium">
                                <Link to="/privacy" className="text-zinc-500 hover:text-white transition-colors">
                                    개인정보처리방침
                                </Link>
                                <Link to="/terms" className="text-zinc-500 hover:text-white transition-colors">
                                    이용약관
                                </Link>
                                {/* <Link to="/child-safety" className="text-zinc-500 hover:text-white transition-colors">
                                    아동 안전 표준
                                </Link> */}
                            </div>
                            <a
                                href="https://play.google.com/store/apps/developer?id=%EB%8B%B4%EC%86%8C"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-2 px-5 py-3 bg-zinc-800/50 hover:bg-zinc-800 border border-zinc-700/50 hover:border-zinc-600 rounded-xl transition-all duration-300 w-fit group"
                            >
                                <svg className="w-5 h-5 text-zinc-400 group-hover:text-white transition-colors" viewBox="0 0 24 24" fill="currentColor">
                                    <path d="M3.609 1.814L13.792 12 3.61 22.186a.996.996 0 0 1-.61-.92V2.734a1 1 0 0 1 .609-.92zm10.89 10.893l2.302 2.302-10.937 6.333 8.635-8.635zm3.199-3.198l2.807 1.626a1 1 0 0 1 0 1.73l-2.808 1.626L15.206 12l2.492-2.491zM5.864 2.658L16.8 9.99l-2.302 2.302-8.634-8.634z" />
                                </svg>
                                <span className="text-sm text-zinc-300 group-hover:text-white font-medium transition-colors">Google Play에서 보기</span>
                            </a>
                        </div>
                    </div>

                    <div className="mt-10 pt-8 border-t border-zinc-800 text-[11px] text-zinc-600 flex justify-between items-center">
                        <p>© 2025 담소(Damso). All rights reserved.</p>
                        <p>Designed & Developed by Damso</p>
                    </div>
                </div>
            </footer>
        </div>
    );
}

export default Layout;