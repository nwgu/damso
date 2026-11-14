// 뽀꼬삐 원정대(com.damso.pokopi · 영어 이름 Pawpaw Expedition) 전용 페이지 (2026-11-14) — 확률 정보.
// 공용 약관(Terms.jsx)과 공용 방침(Privacy.jsx)은 그대로 쓴다 (뽀꼬삐 유료 상품 · 순위 기록은 거기 있다).
// 근거(코드): ~/Desktop/Project/Personal_Projects/fourpaws/main.gd
//   ⚠⚠⚠ 알 확률 COMMON · RARE · PITY · EGG_COST 는 main.gd 의 _roll_egg() · PITY · EGG_COST · _hatch() 의 **사본**이다.
//       게임 값을 바꾸면 여기와 게임 안 부화 화면 문구가 같이 바뀌어야 한다 — 두 벌이 갈리면 그게 곧 거짓 공시다.
//   첫 원정 꾸러미의 「다음 알 귀한 동물 확정」은 main.gd _shop_grant() (천장 값을 끝 칸으로 채운다).
import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import Layout from '../components/Layout';

const COMMON = [
    { ko: '불꼬리 (여우 · 불)', en: 'Bulkkori (Fox · Fire)' },
    { ko: '물방울 (수달 · 물)', en: 'Mulbangul (Otter · Water)' },
    { ko: '돌돌이 (천산갑 · 흙)', en: 'Doldori (Pangolin · Earth)' },
    { ko: '바람이 (날다람쥐 · 바람)', en: 'Barami (Flying squirrel · Air)' },
];
const RARE = [
    { ko: '불뿔 (멧돼지 · 불)', en: 'Bulppul (Boar · Fire)' },
    { ko: '등딱지 (거북 · 물)', en: 'Deungttakji (Turtle · Water)' },
    { ko: '땅콩 (두더지 · 흙)', en: 'Ttangkong (Mole · Earth)' },
    { ko: '부엉 (부엉이 · 바람)', en: 'Bueong (Owl · Air)' },
];
const COMMON_P = 17.5;   // 각
const RARE_P = 7.5;      // 각
const PITY = 10;         // 귀한 동물 없이 9번 → 10번째 확정
const EGG_COST = 100;    // 열매 · 열 개는 9개 값

const TABS = [
    { to: '/pokopi/odds', ko: '확률 정보', en: 'Odds' },
    { to: '/terms', ko: '이용약관', en: 'Terms' },
    { to: '/privacy', ko: '개인정보처리방침', en: 'Privacy Policy' },
];

function Shell({ titleKo, titleEn, date, children }) {
    const [lang, setLang] = useState('ko');
    return (
        <Layout>
            <div className="max-w-4xl mx-auto px-6 py-12">
                <div className="flex items-center gap-3 mb-4">
                    <img src="/images/pokopi.png" alt="" className="w-10 h-10 rounded-xl ring-1 ring-black/5" />
                    <span className="text-sm font-semibold text-zinc-500">{lang === 'ko' ? '뽀꼬삐 원정대' : 'Pawpaw Expedition'}</span>
                </div>
                <nav className="flex flex-wrap gap-2 mb-8">
                    {TABS.map((t) => (
                        <NavLink key={t.to} to={t.to}
                            className={({ isActive }) => `px-3.5 h-8 inline-flex items-center rounded-full text-[13px] font-semibold transition-colors ${isActive ? 'bg-zinc-900 text-white' : 'bg-white ring-1 ring-zinc-200 text-zinc-600 hover:text-zinc-900'}`}>
                            {lang === 'ko' ? t.ko : t.en}
                        </NavLink>
                    ))}
                </nav>
                <div className="flex flex-wrap items-center justify-between gap-3 mb-8">
                    <h1 className="text-2xl font-semibold text-zinc-900 break-keep">{lang === 'ko' ? titleKo : titleEn}</h1>
                    <div className="flex bg-zinc-100 rounded-lg p-1 text-sm">
                        {['ko', 'en'].map((l) => (
                            <button key={l} onClick={() => setLang(l)}
                                className={`px-3 py-1.5 rounded-md whitespace-nowrap transition-colors ${lang === l ? 'bg-white text-zinc-900 shadow-sm' : 'text-zinc-500 hover:text-zinc-700'}`}>
                                {l === 'ko' ? '한국어' : 'English'}
                            </button>
                        ))}
                    </div>
                </div>
                <div className="space-y-8 text-zinc-600">{children(lang)}</div>
                <div className="mt-8 text-sm text-zinc-400">
                    <p>{lang === 'ko' ? `시행일자: ${date.ko}` : `Effective Date: ${date.en}`}</p>
                </div>
            </div>
        </Layout>
    );
}

const H = ({ children }) => <h2 className="text-lg font-semibold text-zinc-900 mb-3">{children}</h2>;
const UL = ({ children }) => <ul className="list-disc pl-6 mt-2 space-y-1">{children}</ul>;
const DATE = { ko: '2026년 11월 14일', en: 'November 14, 2026' };

export function PokopiOdds() {
    const rows = [
        ...COMMON.map((a) => ({ ...a, rare: false, p: COMMON_P })),
        ...RARE.map((a) => ({ ...a, rare: true, p: RARE_P })),
    ];
    return (
        <Shell titleKo="뽀꼬삐 원정대 확률 정보" titleEn="Pawpaw Expedition Odds" date={DATE}>
            {(lang) => (
                <>
                    <section>
                        <p>{lang === 'ko'
                            ? '「게임산업진흥에 관한 법률」 제33조와 Google Play · App Store 정책에 따라 게임 "뽀꼬삐 원정대"의 알 부화 확률을 공개합니다. 같은 정보를 게임 안 「알 부화」 화면 아래에서도 확인하실 수 있습니다.'
                            : 'In accordance with Article 33 of the Game Industry Promotion Act and Google Play and App Store policies, the egg hatching odds of "Pawpaw Expedition" are published here. The same information is shown in the Game at the bottom of the "Hatch" screen.'}</p>
                    </section>
                    <section><H>{lang === 'ko' ? `알 부화 (알 하나 열매 ${EGG_COST} · 열 개 열매 ${EGG_COST * 9})` : `Egg hatching (1 egg: ${EGG_COST} fruit · 10 eggs: ${EGG_COST * 9} fruit)`}</H>
                        <div className="overflow-x-auto">
                            <table className="w-full text-sm border-collapse">
                                <thead><tr className="border-b border-zinc-200 text-zinc-900">
                                    <th className="text-left py-2 pr-4">{lang === 'ko' ? '동물' : 'Animal'}</th>
                                    <th className="text-left py-2 pr-4">{lang === 'ko' ? '등급' : 'Grade'}</th>
                                    <th className="text-left py-2">{lang === 'ko' ? '확률 (알 하나)' : 'Chance (per egg)'}</th>
                                </tr></thead>
                                <tbody>{rows.map((a) => (
                                    <tr key={a.en} className="border-b border-zinc-100">
                                        <td className="py-1.5 pr-4">{lang === 'ko' ? a.ko : a.en}</td>
                                        <td className="py-1.5 pr-4">{a.rare ? (lang === 'ko' ? '귀한 동물' : 'Rare') : (lang === 'ko' ? '일반' : 'Common')}</td>
                                        <td className="py-1.5">{a.p}%</td>
                                    </tr>
                                ))}</tbody>
                                <tfoot><tr className="text-zinc-900">
                                    <td className="py-2 pr-4 font-semibold">{lang === 'ko' ? '합계' : 'Total'}</td>
                                    <td className="py-2 pr-4">{lang === 'ko' ? `귀한 동물 ${RARE_P * RARE.length}%` : `Rare ${RARE_P * RARE.length}%`}</td>
                                    <td className="py-2">100%</td>
                                </tr></tfoot>
                            </table>
                        </div>
                        <UL>
                            {lang === 'ko' ? (<>
                                <li>알은 하나씩 따로 굴립니다. 열 개를 한 번에 깨도 확률은 위와 같고, 값만 아홉 개 값입니다.</li>
                                <li>귀한 동물 없이 {PITY - 1}번 연달아 깨면 {PITY}번째 알은 귀한 동물이 확정으로 나옵니다(넷 중 하나, 각 25%). 귀한 동물이 나오면 횟수는 처음부터 다시 셉니다.</li>
                                <li>이미 있는 동물이 나오면 그 동물의 레벨이 1 오릅니다(최대 레벨 30).</li>
                                <li>유료 상품 「첫 원정 꾸러미」를 사면 다음 알 하나는 귀한 동물이 확정으로 나옵니다(넷 중 하나, 각 25%).</li>
                                <li>열매는 게임에서 얻는 재화이며 상점에서도 판매합니다.</li>
                            </>) : (<>
                                <li>Each egg is rolled separately. Hatching 10 at once uses the same odds above; it only costs the price of 9.</li>
                                <li>If {PITY - 1} eggs in a row give no rare animal, the {PITY}th egg is a guaranteed rare animal (one of four, 25% each). The count resets whenever a rare animal appears.</li>
                                <li>If you hatch an animal you already have, that animal gains one level (up to level 30).</li>
                                <li>Buying the paid "First Expedition Pack" makes the next egg a guaranteed rare animal (one of four, 25% each).</li>
                                <li>Fruit is a currency earned in the Game and is also sold in the shop.</li>
                            </>)}
                        </UL>
                    </section>
                </>
            )}
        </Shell>
    );
}
