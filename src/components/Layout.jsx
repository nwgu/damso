import { Link, NavLink } from 'react-router-dom';
import appsData from '../data/apps.json';

const KAKAO = 'https://open.kakao.com/o/spOG7G4h';
const PLAY_DEV = 'https://play.google.com/store/apps/developer?id=Damso';

// 앱 전용 안내 페이지가 있는 앱 (apps.json 의 links). 푸터에서 앱별로 묶어 보여준다.
const appsWithLinks = [...appsData].filter((a) => a.links?.length).sort((a, b) => b.id - a.id);

const navCls = ({ isActive }) =>
    `px-3 h-9 inline-flex items-center rounded-full text-[13px] font-semibold transition-colors ${isActive ? 'bg-zinc-900 text-white' : 'text-zinc-600 hover:text-zinc-900 hover:bg-zinc-100'}`;

const footLink = 'text-zinc-400 hover:text-white transition-colors';

function Layout({ children }) {
    return (
        <div className="min-h-screen bg-zinc-50 flex flex-col">
            <header className="sticky top-0 z-50 bg-zinc-50/80 backdrop-blur-lg border-b border-zinc-200/60">
                <div className="max-w-6xl mx-auto px-5 sm:px-6 h-16 flex items-center justify-between gap-4">
                    <Link to="/" className="flex items-center gap-2.5">
                        <span className="w-9 h-9 rounded-xl bg-zinc-900 flex items-center justify-center text-base">💬</span>
                        <span className="text-[17px] font-extrabold text-zinc-900 tracking-tight">담소</span>
                    </Link>

                    <nav className="flex items-center gap-1">
                        <NavLink to="/" end className={navCls}>앱</NavLink>
                        <NavLink to="/privacy" className={(s) => `${navCls(s)} hidden sm:inline-flex`}>개인정보처리방침</NavLink>
                        <NavLink to="/terms" className={(s) => `${navCls(s)} hidden sm:inline-flex`}>이용약관</NavLink>
                        <a href={KAKAO} target="_blank" rel="noopener noreferrer"
                            className="ml-1 px-4 h-9 inline-flex items-center rounded-full text-[13px] font-semibold bg-white ring-1 ring-zinc-200 text-zinc-800 hover:ring-zinc-300 transition">
                            문의하기
                        </a>
                    </nav>
                </div>
            </header>

            <main className="flex-1 pb-24">{children}</main>

            <footer className="bg-zinc-900 text-zinc-400">
                <div className="max-w-6xl mx-auto px-5 sm:px-6 py-14">
                    <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4 text-sm">
                        <div className="space-y-3">
                            <div className="flex items-center gap-2">
                                <span className="w-8 h-8 rounded-lg bg-zinc-800 flex items-center justify-center text-sm">💬</span>
                                <span className="text-zinc-100 font-bold tracking-tight text-lg">담소</span>
                            </div>
                            <div className="text-zinc-500 space-y-1 text-[13px]">
                                <p>상호: 담소</p>
                                <p>사업자등록번호: 364-17-02671</p>
                                <p>contact@damso.app</p>
                            </div>
                        </div>

                        <div>
                            <p className="text-zinc-200 font-semibold mb-3">약관 · 정책</p>
                            <ul className="space-y-2">
                                <li><Link to="/privacy" className={footLink}>개인정보처리방침</Link></li>
                                <li><Link to="/terms" className={footLink}>이용약관</Link></li>
                            </ul>
                        </div>

                        {appsWithLinks.map((app) => (
                            <div key={app.id}>
                                <p className="text-zinc-200 font-semibold mb-3">{app.name}</p>
                                <ul className="space-y-2">
                                    {app.links.map((l) => (
                                        <li key={l.href}><Link to={l.href} className={footLink}>{l.label}</Link></li>
                                    ))}
                                </ul>
                            </div>
                        ))}

                        <div>
                            <p className="text-zinc-200 font-semibold mb-3">스토어 · 문의</p>
                            <ul className="space-y-2">
                                <li><a href={PLAY_DEV} target="_blank" rel="noopener noreferrer" className={footLink}>Google Play 개발자 페이지</a></li>
                                <li><a href={KAKAO} target="_blank" rel="noopener noreferrer" className={footLink}>카카오톡 오픈채팅 문의</a></li>
                                <li><a href="mailto:contact@damso.app" className={footLink}>이메일 문의</a></li>
                            </ul>
                        </div>
                    </div>

                    <div className="mt-12 pt-6 border-t border-zinc-800 text-[12px] text-zinc-600">
                        © {new Date().getFullYear()} 담소(Damso). All rights reserved.
                    </div>
                </div>
            </footer>
        </div>
    );
}

export default Layout;
