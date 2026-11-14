// 하늘바다(com.damso.haneulbada) 전용 페이지 셋 (2026-11-12) — 게임 약관 · 확률 정보 · 데이터 삭제.
// 공용 방침(Privacy.jsx)과 공용 약관(Terms.jsx)은 그대로 쓰고, 이 게임에만 있는 것(유료 상품 · 청약철회 · 강화 확률 · 계정 삭제)을 여기 둔다.
// 근거(코드): ~/Desktop/Project/Personal_Projects/blade
//   ⚠⚠⚠ 강화 확률표 RATE · DROP_FROM · PITY_STEP · cost() 는 blade/server/enhance_defs.gd 의 **사본**이다.
//       게임 값을 바꾸면 여기와 게임 안 「확률 보기」가 같이 바뀌어야 한다 — 두 벌이 갈리면 그게 곧 거짓 공시다.
//   상품 목록은 blade/server/billing_defs.gd (가격은 Google Play 가 정한다 — 여기에 적지 않는다).
//   계정 삭제 길은 blade/scripts/menu_window.gd (메뉴 → 계정 → 계정 삭제 · 두 번 누른다).
// ⚠ 보관 기간은 Privacy.jsx 하늘바다 항목과 같은 값이어야 한다 (이용 기록 90일 · 구매 기록 5년).
import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import Layout from '../components/Layout';

const MAIL = 'contact@damso.app';
const RATE = [10000, 10000, 10000, 10000, 10000, 9000, 8000, 7000, 6000, 5000, 4000, 3500, 3000, 2500, 2000];
const DROP_FROM = 10;
const PITY_STEP = 500;
const cost = (n) => 30 + n * n * 15;
const pct = (r) => (r / 100).toFixed(r % 100 ? 2 : 0) + '%';

// 세 페이지를 서로 오갈 수 있게 위에 탭으로 단다. 공용 방침도 함께 (하늘바다 수집 항목은 거기 있다).
const TABS = [
    { to: '/haneulbada/terms', ko: '게임 이용약관', en: 'Game Terms' },
    { to: '/haneulbada/odds', ko: '확률 정보', en: 'Odds' },
    { to: '/haneulbada/delete', ko: '데이터 삭제', en: 'Data Deletion' },
    { to: '/privacy', ko: '개인정보처리방침', en: 'Privacy Policy' },
];

function Shell({ titleKo, titleEn, date, children }) {
    const [lang, setLang] = useState('ko');
    return (
        <Layout>
            <div className="max-w-4xl mx-auto px-6 py-12">
                <div className="flex items-center gap-3 mb-4">
                    <img src="/images/haneulbada.png" alt="" className="w-10 h-10 rounded-xl ring-1 ring-black/5" />
                    <span className="text-sm font-semibold text-zinc-500">{lang === 'ko' ? '하늘바다' : 'Haneulbada'}</span>
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
const DATE = { ko: '2026년 11월 12일', en: 'November 12, 2026' };

export function HaneulbadaTerms() {
    return (
        <Shell titleKo="하늘바다 게임 이용약관" titleEn="Haneulbada Game Terms" date={DATE}>
            {(lang) => lang === 'ko' ? (
                <>
                    <section><H>제1조 (목적과 적용)</H>
                        <p>이 약관은 담소(이하 "회사")가 제공하는 게임 "하늘바다"(이하 "게임")의 이용에 관하여 <a href="/terms" className="underline hover:text-zinc-900">담소 이용약관</a>에 더하여 적용됩니다. 두 약관이 다르면 게임에 관하여는 이 약관이 우선합니다. 개인정보 처리는 <a href="/privacy" className="underline hover:text-zinc-900">개인정보처리방침</a>을 따릅니다.</p></section>
                    <section><H>제2조 (계정과 진행 기록)</H>
                        <UL>
                            <li>게임은 회원가입 없이 이용하며, 게임이 처음 서버에 연결될 때 회사가 무작위 계정을 발급합니다.</li>
                            <li>진행 기록은 이용자의 기기에 저장되고, 저장 지점마다 서버에 사본(클라우드 저장)이 보관됩니다. 다른 기기에서 이어 하려면 게임 안에서 계정 연동(Android 는 Google, iPhone 은 Apple)을 해야 합니다. 연동하지 않은 채 앱을 삭제하거나 기기를 바꾸면 기록과 구매한 상품을 되찾지 못할 수 있습니다.</li>
                            <li>구매한 상품, 무기 강화 단계, 주간 순위 기록은 서버에 보관되며, 서버의 기록을 기준으로 합니다.</li>
                        </UL></section>
                    <section><H>제3조 (이용자의 의무)</H>
                        <p>이용자는 다음 행위를 해서는 안 됩니다.</p>
                        <UL>
                            <li>비인가 프로그램(매크로, 메모리·기록 조작, 통신 변조 도구 등)을 사용하거나 배포하는 행위</li>
                            <li>게임 앱을 변조하거나, 서버를 공격·역설계하는 행위</li>
                            <li>버그를 악용하여 재화, 상품, 순위 기록을 얻는 행위</li>
                            <li>회사가 제공하지 않는 방법으로 계정이나 게임 재화를 매매·증여하는 행위</li>
                        </UL>
                        <p className="mt-2">위 행위가 서버 기록으로 확인되면 회사는 이용을 제한하고, 부정하게 얻은 재화·상품·순위 기록을 회수하거나 지울 수 있습니다. 이용자는 통지를 받은 날부터 15일 이내에 {MAIL} 로 이의를 신청할 수 있으며, 회사는 15일 이내에 답변합니다.</p></section>
                    <section><H>제4조 (유료 상품)</H>
                        <UL>
                            <li>회사는 게임 안에서 코스튬, 보호 주문서, 소금(게임 재화), 가방 확장, 스킬 초기화권, 광고 제거 등의 상품을 판매할 수 있습니다. 상품의 구성과 가격은 게임 안 구매 화면에 표시되며, 결제는 Google Play 또는 App Store 결제로 이루어집니다.</li>
                            <li>코스튬과 광고 제거는 구매한 계정에 영구히 적용됩니다. 소금·보호 주문서·초기화권은 사용하면 소멸합니다. iPhone 에서는 게임 안 [메뉴 &gt; 계정 &gt; 구매 복원]으로 코스튬과 광고 제거를 되찾을 수 있습니다.</li>
                        </UL></section>
                    <section><H>제5조 (청약철회와 환불)</H>
                        <UL>
                            <li>이용자는 구매일 또는 상품을 이용할 수 있게 된 날 중 늦은 날부터 <b>7일 이내</b>에 청약을 철회할 수 있습니다.</li>
                            <li>다만 이미 사용한 소금·보호 주문서·초기화권, 그리고 구매 즉시 적용되어 이용이 시작된 코스튬·광고 제거·가방 확장은 「전자상거래 등에서의 소비자보호에 관한 법률」 제17조 제2항에 따라 청약철회가 제한될 수 있습니다. 회사는 구매 화면에 이를 미리 표시합니다.</li>
                            <li>환불은 결제가 이루어진 Google Play 또는 App Store 의 환불 절차로 처리됩니다. 회사로 문의하신 경우에도 환불은 그 플랫폼을 통해 처리됩니다.</li>
                            <li>미성년자가 법정대리인의 동의 없이 결제한 경우 미성년자 또는 법정대리인은 그 결제를 취소할 수 있습니다.</li>
                            <li>결제가 환불되거나 취소되면 회사는 그 결제로 지급한 상품을 회수합니다. 이미 사용한 재화는 보유량에서 차감되며, 보유량이 모자라면 0보다 적게 표시될 수 있습니다.</li>
                        </UL></section>
                    <section><H>제6조 (무기 강화와 확률 정보)</H>
                        <p>무기 강화는 확률에 따라 성공하며, 결과는 회사 서버가 정합니다. 강화 확률과 규칙은 「게임산업진흥에 관한 법률」 제33조에 따라 게임 안 「확률 보기」와 <a href="/haneulbada/odds" className="underline hover:text-zinc-900">확률 정보</a> 페이지에 게시합니다.</p></section>
                    <section><H>제7조 (주간 순위)</H>
                        <p>주간 보스 순위는 매주 월요일 0시(한국 시간)에 새로 시작합니다. 회사는 낼 수 없는 기록이나 부정한 방법으로 얻은 기록을 순위에서 지울 수 있습니다.</p></section>
                    <section><H>제8조 (계정 삭제)</H>
                        <p>이용자는 게임 안 [메뉴 &gt; 계정 &gt; 계정 삭제]에서 언제든지 계정을 삭제할 수 있습니다. 삭제하면 계정, 클라우드 저장, 구매한 상품, 강화 단계, 순위 기록이 지워지며 복구할 수 없습니다. 자세한 내용은 <a href="/haneulbada/delete" className="underline hover:text-zinc-900">데이터 삭제 안내</a>를 참고해 주십시오.</p></section>
                    <section><H>제9조 (서비스의 변경과 종료)</H>
                        <UL>
                            <li>회사는 점검·장애 대응을 위해 서버를 일시 중단할 수 있으며, 서버가 중단되어도 이야기·전투·사냥은 기기에서 계속 이용할 수 있습니다.</li>
                            <li>회사가 게임 서비스를 종료하는 경우 종료일 <b>30일 전</b>까지 게임 안과 홈페이지에 공지합니다.</li>
                        </UL></section>
                    <section><H>제10조 (분쟁 해결)</H>
                        <p>분쟁이 생기면 먼저 {MAIL} 로 협의하며, 협의가 되지 않으면 이용자는 한국소비자원(1372) 또는 콘텐츠분쟁조정위원회(1588-2594)에 조정을 신청할 수 있습니다. 이 약관은 대한민국 법률에 따릅니다.</p></section>
                </>
            ) : (
                <>
                    <section><H>Article 1 (Purpose and Scope)</H>
                        <p>These terms apply to the game "Haneulbada" (the "Game") provided by Damso (the "Company"), in addition to the <a href="/terms" className="underline hover:text-zinc-900">Damso Terms of Service</a>. Where the two differ, these terms prevail for the Game. Personal data is handled under the <a href="/privacy" className="underline hover:text-zinc-900">Privacy Policy</a>.</p></section>
                    <section><H>Article 2 (Account and Play Records)</H>
                        <UL>
                            <li>No sign-up is required; the Company issues a random account when the Game first connects to the server.</li>
                            <li>Play records are stored on the user's device, and a copy (cloud save) is kept on the server at each save point. To continue on another device, the user must link an account in the Game (Google on Android, Apple on iPhone). If the app is deleted or the device is changed without linking, records and purchased items may not be recoverable.</li>
                            <li>Purchased items, weapon enhancement levels, and weekly ranking records are kept on the server, and the server's records prevail.</li>
                        </UL></section>
                    <section><H>Article 3 (User Obligations)</H>
                        <p>Users must not:</p>
                        <UL>
                            <li>use or distribute unauthorized programs (macros, memory or record editing, traffic tampering tools, etc.)</li>
                            <li>modify the game app, or attack or reverse-engineer the server</li>
                            <li>exploit bugs to obtain currency, items, or ranking records</li>
                            <li>buy, sell, or gift accounts or game currency by means not provided by the Company</li>
                        </UL>
                        <p className="mt-2">If such conduct is confirmed by server records, the Company may restrict use and take back or delete improperly obtained currency, items, or ranking records. Users may appeal to {MAIL} within 15 days of notice, and the Company will respond within 15 days.</p></section>
                    <section><H>Article 4 (Paid Items)</H>
                        <UL>
                            <li>The Company may sell items in the Game such as costumes, protection scrolls, salt (game currency), bag expansions, skill reset tickets, and ad removal. Contents and prices are shown on the in-game purchase screen, and payment is made through Google Play or the App Store.</li>
                            <li>Costumes and ad removal apply permanently to the purchasing account. Salt, protection scrolls, and reset tickets are consumed when used. On iPhone, costumes and ad removal can be recovered with [Menu &gt; Account &gt; Restore purchases].</li>
                        </UL></section>
                    <section><H>Article 5 (Withdrawal and Refunds)</H>
                        <UL>
                            <li>Users may withdraw a purchase within <b>7 days</b> of the purchase date or the date the item became available, whichever is later.</li>
                            <li>However, withdrawal may be limited under Article 17(2) of the Act on the Consumer Protection in Electronic Commerce for salt, protection scrolls, or reset tickets already used, and for costumes, ad removal, and bag expansions that take effect immediately upon purchase. The Company indicates this on the purchase screen in advance.</li>
                            <li>Refunds are handled through the refund process of Google Play or the App Store, wherever the payment was made, including when the user contacts the Company.</li>
                            <li>If a minor pays without the consent of a legal guardian, the minor or the guardian may cancel the payment.</li>
                            <li>If a payment is refunded or cancelled, the Company takes back the items granted for it. Currency already used is deducted from the balance, which may then show below zero.</li>
                        </UL></section>
                    <section><H>Article 6 (Weapon Enhancement and Odds)</H>
                        <p>Weapon enhancement succeeds by chance, and the result is decided by the Company's server. The odds and rules are published in the in-game "View odds" screen and on the <a href="/haneulbada/odds" className="underline hover:text-zinc-900">odds page</a>, in accordance with Article 33 of the Game Industry Promotion Act.</p></section>
                    <section><H>Article 7 (Weekly Ranking)</H>
                        <p>The weekly boss ranking restarts every Monday at 00:00 Korea Standard Time. The Company may remove impossible or improperly obtained records from the ranking.</p></section>
                    <section><H>Article 8 (Account Deletion)</H>
                        <p>Users may delete their account at any time in the Game under [Menu &gt; Account &gt; Delete account]. Deletion erases the account, cloud save, purchased items, enhancement levels, and ranking records, and cannot be undone. See the <a href="/haneulbada/delete" className="underline hover:text-zinc-900">data deletion guide</a> for details.</p></section>
                    <section><H>Article 9 (Changes and Termination)</H>
                        <UL>
                            <li>The Company may suspend the server temporarily for maintenance or outages; story, combat, and hunting remain playable on the device during that time.</li>
                            <li>If the Company ends the Game's service, it will announce this in the Game and on its website at least <b>30 days</b> in advance.</li>
                        </UL></section>
                    <section><H>Article 10 (Disputes)</H>
                        <p>Disputes are first discussed through {MAIL}. If no agreement is reached, users may apply for mediation to the Korea Consumer Agency (1372) or the Content Dispute Resolution Committee (1588-2594). These terms are governed by the laws of the Republic of Korea.</p></section>
                </>
            )}
        </Shell>
    );
}

export function HaneulbadaOdds() {
    const rows = RATE.map((r, n) => ({ n, r, drop: n >= DROP_FROM }));
    return (
        <Shell titleKo="하늘바다 확률 정보" titleEn="Haneulbada Odds" date={DATE}>
            {(lang) => (
                <>
                    <section>
                        <p>{lang === 'ko'
                            ? '「게임산업진흥에 관한 법률」 제33조와 Google Play · App Store 정책에 따라 게임 "하늘바다"의 무기 강화 확률을 공개합니다. 같은 정보를 게임 안 대장장이의 「강화 > 확률 보기」에서도 확인하실 수 있습니다. 결과는 회사 서버가 정합니다.'
                            : 'In accordance with Article 33 of the Game Industry Promotion Act and Google Play and App Store policies, the weapon enhancement odds of "Haneulbada" are published here. The same information is shown in the Game at the blacksmith under "Enhance > View odds". Results are decided by the Company\'s server.'}</p>
                    </section>
                    <section><H>{lang === 'ko' ? '무기 강화 (최대 +15)' : 'Weapon enhancement (up to +15)'}</H>
                        <div className="overflow-x-auto">
                            <table className="w-full text-sm border-collapse">
                                <thead><tr className="border-b border-zinc-200 text-zinc-900">
                                    <th className="text-left py-2 pr-4">{lang === 'ko' ? '단계' : 'Step'}</th>
                                    <th className="text-left py-2 pr-4">{lang === 'ko' ? '성공 확률' : 'Success'}</th>
                                    <th className="text-left py-2 pr-4">{lang === 'ko' ? '실패하면' : 'On failure'}</th>
                                    <th className="text-left py-2">{lang === 'ko' ? '소금' : 'Salt'}</th>
                                </tr></thead>
                                <tbody>{rows.map(({ n, r, drop }) => (
                                    <tr key={n} className="border-b border-zinc-100">
                                        <td className="py-1.5 pr-4">+{n} → +{n + 1}</td>
                                        <td className="py-1.5 pr-4">{pct(r)}</td>
                                        <td className="py-1.5 pr-4">{r >= 10000 ? '—' : drop
                                            ? (lang === 'ko' ? `+${n - 1} 로 내려감 (보호 주문서를 쓰면 그대로)` : `drops to +${n - 1} (stays with a protection scroll)`)
                                            : (lang === 'ko' ? '그대로' : 'stays')}</td>
                                        <td className="py-1.5">{cost(n).toLocaleString()}</td>
                                    </tr>
                                ))}</tbody>
                            </table>
                        </div>
                        <UL>
                            {lang === 'ko' ? (<>
                                <li>실패할 때마다 다음 시도의 성공 확률이 <b>{PITY_STEP / 100}%p</b> 오르며(최대 100%), 성공하면 처음 확률로 돌아갑니다. 게임 안 화면에 지금 더해진 확률이 표시됩니다.</li>
                                <li>무기는 강화에 실패해도 사라지지 않습니다.</li>
                                <li>보호 주문서(유료 상품)는 +{DROP_FROM} 이상에서 실패했을 때 단계가 내려가지 않게 할 뿐, 성공 확률을 바꾸지 않습니다.</li>
                                <li>소금은 게임에서 얻는 재화이며 상점에서도 판매할 수 있습니다.</li>
                            </>) : (<>
                                <li>Each failure raises the success chance of the next attempt by <b>{PITY_STEP / 100} percentage points</b> (up to 100%), and a success resets it. The current bonus is shown in the Game.</li>
                                <li>Weapons are never destroyed by a failed enhancement.</li>
                                <li>A protection scroll (paid item) only prevents the step from dropping on failure at +{DROP_FROM} and above; it does not change the success chance.</li>
                                <li>Salt is a currency earned in the Game and may also be sold in the shop.</li>
                            </>)}
                        </UL>
                    </section>
                </>
            )}
        </Shell>
    );
}

export function HaneulbadaDelete() {
    return (
        <Shell titleKo="하늘바다 데이터 삭제 안내" titleEn="Haneulbada Data Deletion" date={DATE}>
            {(lang) => lang === 'ko' ? (
                <>
                    <section><p>앱 이름: <b>하늘바다</b> · 개발자: <b>담소</b></p>
                        <p className="mt-2">하늘바다는 회원가입 없이 즐기는 게임입니다. 이름·이메일·전화번호 같은 정보는 받지 않으며, 계정은 서버가 만든 무작위 식별자로만 구분합니다. 언제든지 계정과 서버에 보관된 정보를 지울 수 있습니다.</p></section>
                    <section><H>게임 안에서 바로 지우기</H>
                        <ol className="list-decimal pl-6 space-y-1">
                            <li>게임을 켜고 오른쪽 위 버튼으로 <b>메뉴</b>를 엽니다.</li>
                            <li><b>계정</b>을 누릅니다.</li>
                            <li><b>계정 삭제</b>를 누르고, 한 번 더 누르면 그 자리에서 영구 삭제됩니다.</li>
                        </ol>
                        <p className="mt-2 text-sm text-zinc-400">인터넷에 연결되어 있어야 합니다.</p></section>
                    <section><H>게임을 열 수 없을 때</H>
                        <p>{MAIL} 로 「하늘바다 계정 삭제」를 보내 주십시오. 본인 확인을 위해 게임 안 계정 화면의 정보를 요청드릴 수 있습니다.</p></section>
                    <section><H>지워지는 것과 남는 것</H>
                        <UL>
                            <li><b>바로 지워짐:</b> 계정, Google · Apple 연동 정보, 클라우드 저장, 구매한 상품과 재화, 무기 강화 단계, 주간 순위 기록</li>
                            <li><b>90일 뒤 자동 삭제:</b> 서비스 이용 기록(IP 주소 포함) — 부정 이용 확인과 이의 제기 대응용</li>
                            <li><b>5년 보관:</b> 구매 기록 — 「전자상거래 등에서의 소비자보호에 관한 법률」에 따른 보존 의무</li>
                            <li>기기에 남은 진행 기록은 앱을 삭제하면 함께 지워집니다.</li>
                        </UL></section>
                </>
            ) : (
                <>
                    <section><p>App: <b>Haneulbada</b> · Developer: <b>Damso</b></p>
                        <p className="mt-2">Haneulbada requires no sign-up. No name, email, or phone number is collected, and accounts are identified only by a random identifier issued by the server. You can delete your account and the information stored on the server at any time.</p></section>
                    <section><H>Delete in the game</H>
                        <ol className="list-decimal pl-6 space-y-1">
                            <li>Open the game and open the <b>Menu</b> with the button at the top right.</li>
                            <li>Tap <b>Account</b>.</li>
                            <li>Tap <b>Delete account</b>, then tap it once more to delete permanently.</li>
                        </ol>
                        <p className="mt-2 text-sm text-zinc-400">An internet connection is required.</p></section>
                    <section><H>If you cannot open the game</H>
                        <p>Send "Haneulbada account deletion" to {MAIL}. We may ask for information from the in-game account screen to confirm it is you.</p></section>
                    <section><H>What is deleted and what is kept</H>
                        <UL>
                            <li><b>Deleted immediately:</b> account, Google or Apple link, cloud save, purchased items and currency, weapon enhancement levels, weekly ranking records</li>
                            <li><b>Deleted automatically after 90 days:</b> service logs (including IP address) — kept to investigate misuse and handle appeals</li>
                            <li><b>Kept for 5 years:</b> purchase records — required by the Act on the Consumer Protection in Electronic Commerce</li>
                            <li>Play records on the device are deleted when the app is deleted.</li>
                        </UL></section>
                </>
            )}
        </Shell>
    );
}
