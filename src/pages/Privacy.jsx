import { useState } from 'react';
import Layout from '../components/Layout';

function Privacy() {
    const [lang, setLang] = useState('ko');

    return (
        <Layout>
            <div className="max-w-4xl mx-auto px-6 py-12">
                <div className="flex items-center justify-between mb-8">
                    <h1 className="text-2xl font-semibold text-zinc-900">
                        {lang === 'ko' ? '개인정보처리방침' : 'Privacy Policy'}
                    </h1>
                    <div className="flex bg-zinc-100 rounded-lg p-1 text-sm">
                        <button
                            onClick={() => setLang('ko')}
                            className={`px-3 py-1.5 rounded-md transition-colors ${lang === 'ko' ? 'bg-white text-zinc-900 shadow-sm' : 'text-zinc-500 hover:text-zinc-700'}`}
                        >
                            한국어
                        </button>
                        <button
                            onClick={() => setLang('en')}
                            className={`px-3 py-1.5 rounded-md transition-colors ${lang === 'en' ? 'bg-white text-zinc-900 shadow-sm' : 'text-zinc-500 hover:text-zinc-700'}`}
                        >
                            English
                        </button>
                    </div>
                </div>

                {lang === 'ko' ? <PrivacyKo /> : <PrivacyEn />}

                <div className="mt-8 text-sm text-zinc-400">
                    <p>{lang === 'ko' ? '시행일자: 2026년 11월 13일' : 'Effective Date: November 13, 2026'}</p>
                </div>
            </div>
        </Layout>
    );
}

function PrivacyKo() {
    return (
        <div className="space-y-8 text-zinc-600">
            <section>
                <h2 className="text-lg font-semibold text-zinc-900 mb-3">1. 개인정보의 처리 목적</h2>
                <p>담소(이하 '회사')는 다음의 목적을 위하여 개인정보를 처리합니다. 처리하고 있는 개인정보는 다음의 목적 이외의 용도로는 이용되지 않으며, 이용 목적이 변경되는 경우에는 개인정보 보호법에 따라 별도의 동의를 받는 등 필요한 조치를 이행할 예정입니다.</p>
                <ul className="list-disc pl-6 mt-2 space-y-1">
                    <li>서비스 제공 및 운영</li>
                    <li>회원 관리 및 본인 확인</li>
                    <li>고객 문의 및 불만 처리</li>
                    <li>서비스 개선 및 신규 서비스 개발</li>
                </ul>
            </section>

            <section>
                <h2 className="text-lg font-semibold text-zinc-900 mb-3">2. 수집하는 개인정보 항목</h2>
                <p>회사는 서비스 제공을 위해 앱 별로 아래와 같은 개인정보를 수집합니다.</p>
                <h3 className="font-medium mt-4 mb-2 text-zinc-900">1) 공통 수집 항목 (모든 앱)</h3>
                <ul className="list-disc pl-6">
                    <li>-</li>
                </ul>
                <h3 className="font-medium mt-4 mb-2 text-zinc-900">2) 앱 별 수집 항목</h3>
                <ul className="list-disc pl-6">
                    <li>
                        <span className="font-medium text-zinc-900">Sync(싱크):</span>
                        소셜 로그인 시 이메일, 이름, 프로필 사진 수집. 커플 연결 정보, 일정 데이터, 푸시 알림 토큰 서버 저장.
                    </li>
                    <li><span className="font-medium text-zinc-900">끄적이(Memo App):</span> 별도 서버 수집 정보 없음 (모든 데이터는 사용자 기기에만 저장)</li>
                    <li><span className="font-medium text-zinc-900">찍먹(QuickPick):</span> 별도 서버 수집 정보 없음 (모든 데이터는 사용자 기기에만 저장)</li>
                    {/* [추가됨] Until 앱 내용 */}
                    <li><span className="font-medium text-zinc-900">Until(언틸):</span> 별도 서버 수집 정보 없음 (모든 데이터는 사용자 기기에만 저장)</li>
                    <li>
                        <span className="font-medium text-zinc-900">기사도(Gisado):</span>
                        소셜 로그인 시 이메일, 이름 수집. 학습 기록(풀이 이력, 오답 등), 푸시 알림 토큰(FCM),
                        시험 목표일 서버 저장. ※ AI 맞춤형 분석(Gemini API)을 위해 학습 통계 데이터가 외부로 전송되나, 개인식별 정보는 제외되며 AI 모델 학습용으로 사용되지 않습니다. ※ 서비스 개선을 위해 Firebase Analytics 를 통해 익명 사용 통계(앱 사용 시간, 화면 이동 경로, 기기 정보)가 수집됩니다.
                    </li>
                    <li>
                        <span className="font-medium text-zinc-900">키네틱코어(KineticCore):</span>
                        회원가입·로그인이 없으며 이름, 이메일, 전화번호 등 개인을 직접 식별하는 정보를 수집하지 않습니다.
                        게임 기록(최고 생존 시간, 처치 수, 레벨, 보유 재화, 강화 상태, 설정)은 사용자 기기 내부에만 저장되고 앱 삭제 시 함께 삭제되며 회사 서버로 전송되지 않습니다.
                        ※ 이 앱은 Google AdMob 을 통해 보상형 광고(사망 후 이어하기)를 제공하며, 이 과정에서 Google 및 광고 파트너가 광고 식별자(AAID), IP 주소에 기반한 대략적인 위치,
                        광고 노출·클릭 등 앱 상호작용 정보를 수집·이용할 수 있습니다. 이용 목적은 광고 게재, 광고 실적 측정, 부정 이용 방지이며 모든 전송은 암호화된 연결(HTTPS)로 이루어집니다.
                        자세한 내용은 <a href="https://policies.google.com/privacy" target="_blank" rel="noreferrer" className="underline hover:text-zinc-900">Google 개인정보처리방침</a> 및{' '}
                        <a href="https://policies.google.com/technologies/partner-sites" target="_blank" rel="noreferrer" className="underline hover:text-zinc-900">Google 파트너 사이트 정책</a>을 참고하시기 바랍니다.
                        이용자는 기기의 [설정 &gt; 개인정보 보호 &gt; 광고] 에서 광고 식별자를 재설정하거나 삭제할 수 있습니다.
                        ※ 서비스 개선을 위해 Google 애널리틱스를 통해 익명 이용 통계(플레이 시간, 판이 끝난 사유, 선택한 강화 항목, 도움말 열람 등)가 수집됩니다.
                        이 통계는 앱 설치 시 생성되는 무작위 식별자로만 구분되며 광고 식별자나 개인을 식별하는 정보를 포함하지 않고, 이용 목적은 게임 난이도 조정 등 서비스 개선에 한정됩니다.
                        앱을 삭제하면 해당 식별자도 함께 삭제됩니다.
                        유럽경제지역(EEA)·영국·스위스 이용자에게는 Google 사용자 메시지 플랫폼(UMP)을 통해 광고 개인 맞춤 설정에 관한 동의를 요청하며,
                        동의한 뒤에도 게임 내 [일시정지 &gt; 광고 개인정보 설정] 에서 언제든지 설정을 변경하거나 동의를 철회할 수 있습니다.
                        이 앱은 만 13세 미만 아동을 대상으로 하지 않으며, 광고 수위는 청소년 등급 이하로 제한됩니다.
                    </li>
                    <li>
                        <span className="font-medium text-zinc-900">건라인(Gunline):</span>
                        회원가입·로그인이 없으며 이름, 이메일, 전화번호 등 개인을 직접 식별하는 정보를 수집하지 않습니다.
                        게임 기록(최고 달린 거리, 처치 수, 클리어 횟수, 보유 재화, 강화 상태, 해금 목록, 설정)은 사용자 기기 내부에만 저장되고 앱 삭제 시 함께 삭제되며 회사 서버로 전송되지 않습니다.
                        ※ 이 앱은 Google AdMob 을 통해 보상형 광고(사망 후 이어 달리기)를 제공하며, 이 과정에서 Google 및 광고 파트너가 광고 식별자(AAID), IP 주소에 기반한 대략적인 위치,
                        광고 노출·클릭 등 앱 상호작용 정보를 수집·이용할 수 있습니다. 이용 목적은 광고 게재, 광고 실적 측정, 부정 이용 방지이며 모든 전송은 암호화된 연결(HTTPS)로 이루어집니다.
                        자세한 내용은 <a href="https://policies.google.com/privacy" target="_blank" rel="noreferrer" className="underline hover:text-zinc-900">Google 개인정보처리방침</a> 및{' '}
                        <a href="https://policies.google.com/technologies/partner-sites" target="_blank" rel="noreferrer" className="underline hover:text-zinc-900">Google 파트너 사이트 정책</a>을 참고하시기 바랍니다.
                        이용자는 기기의 [설정 &gt; 개인정보 보호 &gt; 광고] 에서 광고 식별자를 재설정하거나 삭제할 수 있습니다.
                        ※ 서비스 개선을 위해 Google 애널리틱스를 통해 익명 이용 통계(플레이 시간, 달린 거리, 판이 끝난 사유, 선택한 특성, 도움말 열람 등)가 수집됩니다.
                        이 통계는 앱 설치 시 생성되는 무작위 식별자로만 구분되며 광고 식별자나 개인을 식별하는 정보를 포함하지 않고, 이용 목적은 게임 난이도 조정 등 서비스 개선에 한정됩니다.
                        앱을 삭제하면 해당 식별자도 함께 삭제됩니다.
                        유럽경제지역(EEA)·영국·스위스 이용자에게는 Google 사용자 메시지 플랫폼(UMP)을 통해 광고 개인 맞춤 설정에 관한 동의를 요청하며,
                        동의한 뒤에도 게임 내 [일시정지 &gt; 광고 개인정보 설정] 에서 언제든지 설정을 변경하거나 동의를 철회할 수 있습니다.
                        이 앱은 만 13세 미만 아동을 대상으로 하지 않으며, 광고 수위는 청소년 등급 이하로 제한됩니다.
                    </li>
                    <li>
                        <span className="font-medium text-zinc-900">집지키기(HomeKeep):</span>
                        회원가입·로그인이 없으며 이름, 이메일, 전화번호 등 개인을 직접 식별하는 정보를 수집하지 않습니다.
                        게임 기록(최고 도달한 밤, 클리어 횟수와 최단 기록, 보유 재화, 강화 상태, 해금 목록, 설정)은 사용자 기기 내부에만 저장되고 앱 삭제 시 함께 삭제되며 회사 서버로 전송되지 않습니다.
                        ※ 이 앱은 Google AdMob 을 통해 보상형 광고(오두막이 무너진 뒤 이어하기)를 제공하며, 이 과정에서 Google 및 광고 파트너가 광고 식별자(AAID), IP 주소에 기반한 대략적인 위치,
                        광고 노출·클릭 등 앱 상호작용 정보를 수집·이용할 수 있습니다. 이용 목적은 광고 게재, 광고 실적 측정, 부정 이용 방지이며 모든 전송은 암호화된 연결(HTTPS)로 이루어집니다.
                        자세한 내용은 <a href="https://policies.google.com/privacy" target="_blank" rel="noreferrer" className="underline hover:text-zinc-900">Google 개인정보처리방침</a> 및{' '}
                        <a href="https://policies.google.com/technologies/partner-sites" target="_blank" rel="noreferrer" className="underline hover:text-zinc-900">Google 파트너 사이트 정책</a>을 참고하시기 바랍니다.
                        이용자는 기기의 [설정 &gt; 개인정보 보호 &gt; 광고] 에서 광고 식별자를 재설정하거나 삭제할 수 있습니다.
                        ※ 서비스 개선을 위해 Google 애널리틱스를 통해 익명 이용 통계(플레이한 밤 수, 판이 끝난 사유, 세운 구조물과 선택한 강화 항목, 상점 구매 등)가 수집됩니다.
                        이 통계는 앱 설치 시 생성되는 무작위 식별자로만 구분되며 광고 식별자나 개인을 식별하는 정보를 포함하지 않고, 이용 목적은 게임 난이도 조정 등 서비스 개선에 한정됩니다.
                        앱을 삭제하면 해당 식별자도 함께 삭제됩니다.
                        유럽경제지역(EEA)·영국·스위스 이용자에게는 Google 사용자 메시지 플랫폼(UMP)을 통해 광고 개인 맞춤 설정에 관한 동의를 요청하며,
                        동의한 뒤에도 기기의 [설정 &gt; Google &gt; 광고] 에서 광고 식별자를 재설정하거나 맞춤 광고를 해제할 수 있습니다.
                        이 앱은 만 13세 미만 아동을 대상으로 하지 않으며, 광고 수위는 청소년 등급 이하로 제한됩니다.
                    </li>
                    <li>
                        <span className="font-medium text-zinc-900">신전으로(To the Sanctum):</span>
                        회원가입·로그인이 없으며 이름, 이메일, 전화번호 등 개인을 직접 식별하는 정보를 수집하지 않습니다.
                        게임 기록(최고 도달 층, 클리어 횟수, 도감에서 만나고 잡은 몬스터, 보유 재화, 강화 상태, 승급 단계, 설정)은 사용자 기기 내부에만 저장되고 앱 삭제 시 함께 삭제되며 회사 서버로 전송되지 않습니다.
                        ※ 이 앱은 Google AdMob 을 통해 보상형 광고(전멸 후 이어하기, 판이 끝난 뒤 골드 2배)를 제공하며, 이 과정에서 Google 및 광고 파트너가 광고 식별자(AAID), IP 주소에 기반한 대략적인 위치,
                        광고 노출·클릭 등 앱 상호작용 정보를 수집·이용할 수 있습니다. 이용 목적은 광고 게재, 광고 실적 측정, 부정 이용 방지이며 모든 전송은 암호화된 연결(HTTPS)로 이루어집니다.
                        자세한 내용은 <a href="https://policies.google.com/privacy" target="_blank" rel="noreferrer" className="underline hover:text-zinc-900">Google 개인정보처리방침</a> 및{' '}
                        <a href="https://policies.google.com/technologies/partner-sites" target="_blank" rel="noreferrer" className="underline hover:text-zinc-900">Google 파트너 사이트 정책</a>을 참고하시기 바랍니다.
                        이용자는 기기의 [설정 &gt; 개인정보 보호 &gt; 광고] 에서 광고 식별자를 재설정하거나 삭제할 수 있습니다.
                        ※ 서비스 개선을 위해 Google 애널리틱스를 통해 익명 이용 통계(도달한 층, 판이 끝난 사유, 고른 길과 보상, 포획 성공 여부, 상점 구매 등)가 수집됩니다.
                        이 통계는 앱 설치 시 생성되는 무작위 식별자로만 구분되며 광고 식별자나 개인을 식별하는 정보를 포함하지 않고, 이용 목적은 게임 난이도 조정 등 서비스 개선에 한정됩니다.
                        앱을 삭제하면 해당 식별자도 함께 삭제됩니다.
                        유럽경제지역(EEA)·영국·스위스 이용자에게는 Google 사용자 메시지 플랫폼(UMP)을 통해 광고 개인 맞춤 설정에 관한 동의를 요청하며,
                        동의한 뒤에도 기기의 [설정 &gt; Google &gt; 광고] 에서 광고 식별자를 재설정하거나 맞춤 광고를 해제할 수 있습니다.
                        이 앱은 만 13세 미만 아동을 대상으로 하지 않으며, 광고 수위는 청소년 등급 이하로 제한됩니다.
                    </li>
                    <li>
                        <span className="font-medium text-zinc-900">트위스트 잼(Twist Jam):</span>
                        회원가입·로그인이 없으며 이름, 이메일, 전화번호 등 개인을 직접 식별하는 정보를 수집하지 않습니다.
                        게임 기록(도달한 레벨, 보유 코인과 도구, 빵집 꾸미기 단계, 광고 제거 구매 여부, 설정)은 사용자 기기에 저장되며, iOS 에서 기기가 iCloud 에 로그인되어 있으면 사용자 본인의 iCloud 에도 백업되어 다른 기기에서 이어 할 수 있습니다. 이 기록은 회사 서버로 전송되지 않으며 회사는 사용자의 iCloud 에 접근할 수 없습니다.
                        ※ 이 앱은 Google AdMob 을 통해 보상형 광고(이어하기, 도구 받기, 코인 2배)와 레벨 사이 전면 광고를 제공하며, 이 과정에서 Google 및 광고 파트너가 광고 식별자(IDFA·AAID), IP 주소에 기반한 대략적인 위치,
                        광고 노출·클릭 등 앱 상호작용 정보를 수집·이용할 수 있습니다. 이용 목적은 광고 게재, 광고 실적 측정, 부정 이용 방지이며 모든 전송은 암호화된 연결(HTTPS)로 이루어집니다.
                        iOS 에서는 앱 추적 투명성(ATT) 요청에 허용한 경우에만 광고 식별자가 사용되며, 허용하지 않아도 게임은 그대로 이용할 수 있고 기기의 [설정 &gt; 개인정보 보호 및 보안 &gt; 추적] 에서 언제든 바꿀 수 있습니다.
                        자세한 내용은 <a href="https://policies.google.com/privacy" target="_blank" rel="noreferrer" className="underline hover:text-zinc-900">Google 개인정보처리방침</a> 및{' '}
                        <a href="https://policies.google.com/technologies/partner-sites" target="_blank" rel="noreferrer" className="underline hover:text-zinc-900">Google 파트너 사이트 정책</a>을 참고하시기 바랍니다.
                        ※ 인앱 결제는 Apple App Store 결제로 처리되며, 회사는 결제 수단 등 결제 정보를 받지 않고 구매 내역을 회사 서버에 저장하지 않습니다.
                        유럽경제지역(EEA)·영국·스위스 이용자에게는 Google 사용자 메시지 플랫폼(UMP)을 통해 광고 개인 맞춤 설정에 관한 동의를 요청하며,
                        동의한 뒤에도 게임 내 [설정 &gt; 개인정보 설정] 에서 언제든지 설정을 변경하거나 동의를 철회할 수 있습니다.
                        이 앱은 만 13세 미만 아동을 대상으로 하지 않으며, 광고 수위는 청소년 등급 이하로 제한됩니다.
                        ※ 서비스 개선을 위해 Google 애널리틱스를 통해 익명 이용 통계(앱 실행, 시작·성공·실패한 레벨과 실패 사유, 이어하기, 빵집 꾸미기 구매, 보상형 광고 시청, 상점 구매 상품)가 수집됩니다. 광고 식별자가 아닌 앱이 만든 무작위 식별자를 사용합니다.
                        ※ 결제 확인: iOS 에서 상품을 구매하면 거래 번호와, 구매를 기기에 묶기 위해 앱이 만든 무작위 값이 회사의 확인 서버를 거쳐 Apple 에 전달되어 구매가 실제로 완료되었는지, 이후 환불되었는지 확인하며, 환불된 구매로 지급한 상품은 회수합니다. 이 정보는 확인 서버에 저장되지 않습니다. 이용자가 Apple 에 환불을 요청하면 Apple 의 요청에 따라 해당 구매의 상품 지급 여부와 회사의 의견을 Apple 에 회신할 수 있습니다(진행 기록과 사용량은 회신하지 않습니다).
                    </li>
                    <li>
                        <span className="font-medium text-zinc-900">뽀꼬삐 원정대:</span>
                        회원가입·로그인이 없으며 이름, 이메일, 전화번호 등 개인을 직접 식별하는 정보를 수집하지 않습니다.
                        게임 기록(가진 동물과 레벨, 스테이지 별, 보유 열매, 출석·임무 진행, 오늘의 도전 기록, 설정)은 사용자 기기 내부에만 저장되고 앱 삭제 시 함께 삭제되며 회사 서버로 전송되지 않습니다.
                        ※ 이 앱은 Google AdMob 을 통해 광고를 제공하며, 이 과정에서 Google 및 광고 파트너가 광고 식별자(Android 는 AAID, iPhone 은 이용자가 「추적 허용」에 동의한 경우에만 IDFA), IP 주소에 기반한 대략적인 위치,
                        광고 노출·클릭 등 앱 상호작용 정보를 수집·이용할 수 있습니다. 이용 목적은 광고 게재, 광고 실적 측정, 부정 이용 방지이며 모든 전송은 암호화된 연결(HTTPS)로 이루어집니다.
                        자세한 내용은 <a href="https://policies.google.com/privacy" target="_blank" rel="noreferrer" className="underline hover:text-zinc-900">Google 개인정보처리방침</a> 및{' '}
                        <a href="https://policies.google.com/technologies/partner-sites" target="_blank" rel="noreferrer" className="underline hover:text-zinc-900">Google 파트너 사이트 정책</a>을 참고하시기 바랍니다.
                        이용자는 Android 기기의 [설정 &gt; Google &gt; 광고] 에서 광고 식별자를 재설정하거나 삭제할 수 있고, iPhone 은 처음 실행할 때 추적 허용 여부를 물으며 [설정 &gt; 개인정보 보호 및 보안 &gt; 추적] 에서 언제든 바꿀 수 있습니다.
                        ※ 서비스 개선을 위해 Google 애널리틱스를 통해 이용 통계(앱 실행, 진행한 스테이지와 결과, 알 부화, 상점 이용, 비정상 종료와 진단 정보 등)가 수집됩니다.
                        이 통계는 앱 설치 시 생성되는 식별자로 구분되며 이름·이메일 등 개인을 직접 식별하는 정보를 포함하지 않고, 이용 목적은 게임 난이도 조정과 오류 수정 등 서비스 개선에 한정됩니다.
                        ※ 인앱 결제는 Android 는 Google Play 결제, iPhone 은 App Store 결제로 처리되며, 회사는 결제 수단 등 결제 정보를 받지 않습니다.
                        ※ 결제 확인: 상품을 구매하면 구매 토큰(Android) 또는 거래 번호와 구매를 기기에 묶기 위해 앱이 만든 무작위 값(iPhone)이 회사의 확인 서버(Vultr Holdings, Inc. · 대한민국 서울 리전)를 거쳐 Google 또는 Apple 에 전달되어 구매가 실제로 완료되었는지, 이후 환불 · 취소되었는지 확인하며, 환불 · 취소된 구매로 지급한 상품은 회수합니다. 이 정보는 확인 서버에 저장되지 않습니다.
                        ※ 환불 요청 회신: 이용자가 Apple 에 환불을 요청하거나 Google Play 결제를 카드사에서 취소하면, 해당 플랫폼의 요청에 따라 그 구매의 상품 지급 여부와 회사의 의견을 해당 플랫폼에 회신할 수 있습니다. 진행 기록과 사용량은 회신하지 않습니다.
                        유럽경제지역(EEA)·영국·스위스 이용자에게는 Google 사용자 메시지 플랫폼(UMP)을 통해 광고 개인 맞춤 설정에 관한 동의를 요청합니다.
                        이 앱은 만 13세 미만 아동을 대상으로 하지 않으며, 광고 수위는 청소년 등급 이하로 제한됩니다.
                    </li>
                    <li>
                        <span className="font-medium text-zinc-900">하늘바다(Haneulbada):</span>
                        회원가입이 없으며 이름, 이메일, 전화번호 등 개인을 직접 식별하는 정보를 수집하지 않습니다.
                        이야기·전투·사냥은 기기에서 진행되고 진행 기록은 암호화되어 기기에 저장됩니다. 클라우드 저장·유료 상품·무기 강화·주간 순위를 위해 게임이 회사 서버에 연결되면 다음 정보가 처리됩니다.
                        ① 게임 계정: 서버가 발급한 무작위 계정 식별자(서버에는 해시로만 보관) ② 계정 연동(선택): 이용자가 연동을 선택한 경우 Android 는 Google Play 게임즈 플레이어 식별자, iPhone 은 Apple 이 이 앱에만 주는 사용자 식별자(이름·이메일은 받지 않습니다)
                        ③ 클라우드 저장: 계정 키로 암호화된 진행 기록과 저장 시각, 주인공별 진행한 장과 레벨(회사는 진행 기록의 내용을 열어 보지 않습니다) ④ 서버 장부: 구매한 상품의 보유 내역, 무기 강화 단계와 실패 누적
                        ⑤ 주간 순위: 주인공, 주간 보스 전투 기록(피해량)과 기록 시각 — 순위표에는 주인공 이름과 계정 식별자의 끝 4자리로만 표시됩니다 ⑥ 구매 기록: 상품, 구매 시각, Google Play 주문 번호 또는 App Store 거래 번호와 구매 확인 정보(iPhone 은 구매를 계정에 묶기 위해 앱이 만든 값을 포함합니다 · 결제 수단 정보는 받지 않습니다)
                        ⑦ 서비스 이용 기록: IP 주소, 접속 시각, 서버가 받은 요청의 기록.
                        ※ 보유 기간: ①~⑤는 계정 삭제 시까지(삭제하면 지체 없이 파기), ⑥은 「전자상거래 등에서의 소비자보호에 관한 법률」에 따라 5년, ⑦은 부정 이용 확인과 이의 제기 대응을 위해 90일 뒤 자동 삭제됩니다. 기기의 진행 기록은 앱을 삭제하면 함께 삭제됩니다.
                        ※ 이용 목적: 계정 식별과 다른 기기에서 이어 하기, 구매 확인과 지급(환불·취소된 구매로 지급한 상품은 회수), 무기 강화 결과의 결정과 기록, 주간 순위 집계와 비정상 기록 거르기, 비인가 프로그램·요청 폭주 등 부정 이용 방지.
                        ※ 처리위탁: 게임 서버 운영과 데이터 보관은 Vultr Holdings, Inc.(대한민국 서울 리전 — 데이터는 국내에 보관), 인앱 결제 처리와 구매 확인 및 계정 연동 확인은 Android 는 Google LLC, iPhone 은 Apple Inc.(미국 등, 상품 구매·계정 연동 시)가 맡습니다.
                        ※ 환불 요청 회신: 이용자가 Apple 에 환불을 요청하거나 Google Play 결제를 카드사에서 취소하면, 해당 플랫폼의 요청에 따라 그 구매의 상품 지급 여부와 사용 비율(지급한 수량 중 사용한 비율)을 해당 플랫폼에 회신합니다. 진행 기록은 회신하지 않습니다.
                        ※ 이 앱은 Google AdMob 을 통해 보상형 광고(쓰러진 뒤 이어하기, 상자 한 번 더, 의뢰 보상 2배)를 제공하며, 이 과정에서 Google 및 광고 파트너가 광고 식별자(IDFA·AAID), IP 주소에 기반한 대략적인 위치,
                        광고 노출·클릭 등 앱 상호작용 정보를 수집·이용할 수 있습니다. 이용 목적은 광고 게재, 광고 실적 측정, 부정 이용 방지이며 모든 전송은 암호화된 연결(HTTPS)로 이루어집니다.
                        iOS 에서는 앱 추적 투명성(ATT) 요청에 허용한 경우에만 광고 식별자가 사용되며, 허용하지 않아도 게임은 그대로 이용할 수 있고 기기의 [설정 &gt; 개인정보 보호 및 보안 &gt; 추적] 에서 언제든 바꿀 수 있습니다. 광고 제거 상품을 구매하면 광고 없이 같은 보상을 받습니다.
                        ※ 서비스 개선을 위해 Google 애널리틱스(Firebase)를 통해 이용 통계(앱 실행과 이용 시간, 고른 주인공, 마친 장, 무기 강화 결과, 광고 보상 시청, 구매한 상품, 주간 보스 기록, 기기 종류·국가 등)가 수집됩니다.
                        이 통계는 앱 설치 시 생성되는 식별자로 구분되며 이름·이메일 등 개인을 직접 식별하는 정보를 포함하지 않고, 이용 목적은 게임 난이도 조정과 오류 수정 등 서비스 개선에 한정됩니다.
                        ※ 계정 삭제: 게임 안 [메뉴 &gt; 계정 &gt; 계정 삭제]에서 계정과 서버에 보관된 정보를 직접 삭제할 수 있습니다(<a href="/haneulbada/delete" className="underline hover:text-zinc-900">데이터 삭제 안내</a>). 이 앱은 만 14세 미만 아동을 대상으로 하지 않습니다.
                    </li>
                </ul>
            </section>

            <section>
                <h2 className="text-lg font-semibold text-zinc-900 mb-3">3. 개인정보의 보유 및 이용기간</h2>
                <p>회사는 법령에 따른 개인정보 보유·이용기간 또는 정보주체로부터 개인정보를 수집 시에 동의받은 개인정보 보유·이용기간 내에서 개인정보를 처리·보유합니다.</p>
                <ul className="list-disc pl-6 mt-2 space-y-1">
                    <li>회원 탈퇴 시까지 (단, 관계 법령 위반에 따른 수사·조사 등이 진행중인 경우에는 해당 수사·조사 종료 시까지)</li>
                    <li>관련 법령에 의한 정보보유 사유: 계약 또는 청약철회 등에 관한 기록 (5년), 소비자 불만 또는 분쟁처리에 관한 기록 (3년)</li>
                </ul>
            </section>

            <section>
                <h2 className="text-lg font-semibold text-zinc-900 mb-3">4. 개인정보의 제3자 제공</h2>
                <p>회사는 원칙적으로 이용자의 개인정보를 외부에 제공하지 않습니다. 다만, 아래의 경우에는 예외로 합니다.</p>
                <ul className="list-disc pl-6 mt-2 space-y-1">
                    <li>이용자가 사전에 동의한 경우</li>
                    <li>법령의 규정에 의거하거나, 수사 목적으로 법령에 정해진 절차와 방법에 따라 수사기관의 요구가 있는 경우</li>
                    <li>하늘바다(Haneulbada)에서 이용자가 Apple 에 환불을 요청하거나 Google Play 결제를 카드사에서 취소한 경우, 해당 플랫폼(Apple Inc. · Google LLC)의 요청에 따라 그 구매의 상품 지급 여부와 사용 비율을 회신하기 위해 제공되는 경우</li>
                    <li>트위스트 잼(Twist Jam)·뽀꼬삐 원정대에서 이용자가 Apple 에 환불을 요청하거나 Google Play 결제를 카드사에서 취소한 경우, 해당 플랫폼(Apple Inc. · Google LLC)의 요청에 따라 그 구매의 상품 지급 여부와 회사의 의견을 회신하기 위해 제공되는 경우</li>
                    <li>키네틱코어(KineticCore)·건라인(Gunline)·집지키기(HomeKeep)·신전으로(To the Sanctum)·트위스트 잼(Twist Jam)·하늘바다(Haneulbada)·뽀꼬삐 원정대의 광고 게재를 위해 Google AdMob 및 광고 파트너에게 광고 식별자, 대략적인 위치, 앱 상호작용 정보가 제공되는 경우</li>
                </ul>
                <p className="mt-3">
                    한편 키네틱코어(KineticCore)·건라인(Gunline)·집지키기(HomeKeep)·신전으로(To the Sanctum)·트위스트 잼(Twist Jam)·하늘바다(Haneulbada)·뽀꼬삐 원정대의 이용 통계 분석은 Google 애널리틱스에 <span className="font-medium text-zinc-900">처리위탁</span>하고 있습니다.
                    이는 회사를 대신하여 통계를 처리하는 것으로 제3자 제공에 해당하지 않으며, 수탁자는 위탁 목적 외의 용도로 해당 정보를 이용할 수 없습니다.
                </p>
            </section>

            <section>
                <h2 className="text-lg font-semibold text-zinc-900 mb-3">5. 정보주체의 권리·의무 및 행사방법</h2>
                <p>이용자는 개인정보주체로서 다음과 같은 권리를 행사할 수 있습니다.</p>
                <ul className="list-disc pl-6 mt-2 space-y-1">
                    <li>개인정보 열람 요구</li>
                    <li>오류 등이 있을 경우 정정 요구</li>
                    <li>삭제 요구</li>
                    <li>처리정지 요구</li>
                </ul>
                <p className="mt-2">권리 행사는 contact@damso.app 로 서면, 이메일 등을 통하여 하실 수 있으며 회사는 이에 대해 지체없이 조치하겠습니다.</p>
            </section>

            <section>
                <h2 className="text-lg font-semibold text-zinc-900 mb-3">6. 개인정보 보호책임자</h2>
                <p>회사는 개인정보 처리에 관한 업무를 총괄해서 책임지고, 개인정보 처리와 관련한 정보주체의 불만처리 및 피해구제 등을 위하여 아래와 같이 개인정보 보호책임자를 지정하고 있습니다.</p>
                <div className="mt-3 bg-zinc-50 p-4 rounded-lg text-sm">
                    <p>개인정보 보호책임자: 담소</p>
                    <p>이메일: contact@damso.app</p>
                </div>
            </section>

            <section>
                <h2 className="text-lg font-semibold text-zinc-900 mb-3">7. 개인정보처리방침 변경</h2>
                <p>이 개인정보처리방침은 2026년 11월 10일부터 적용되며, 법령 및 방침에 따른 변경내용의 추가, 삭제 및 정정이 있는 경우에는 변경사항의 시행 7일 전부터 공지사항을 통하여 고지할 것입니다.</p>
            </section>
        </div>
    );
}

function PrivacyEn() {
    return (
        <div className="space-y-8 text-zinc-600">
            <section>
                <h2 className="text-lg font-semibold text-zinc-900 mb-3">1. Purpose of Processing Personal Information</h2>
                <p>Damso (hereinafter "Company") processes personal information for the following purposes. Personal information being processed will not be used for purposes other than the following, and if the purpose of use changes, necessary measures such as obtaining separate consent will be implemented in accordance with the Personal Information Protection Act.</p>
                <ul className="list-disc pl-6 mt-2 space-y-1">
                    <li>Service provision and operation</li>
                    <li>Member management and identity verification</li>
                    <li>Customer inquiry and complaint handling</li>
                    <li>Service improvement and new service development</li>
                </ul>
            </section>

            <section>
                <h2 className="text-lg font-semibold text-zinc-900 mb-3">2. Personal Information Collected</h2>
                <p>The Company collects the following personal information for each app to provide services.</p>
                <h3 className="font-medium mt-4 mb-2 text-zinc-900">1) Common Items (All Apps)</h3>
                <ul className="list-disc pl-6">
                    <li>-</li>
                </ul>
                <h3 className="font-medium mt-4 mb-2 text-zinc-900">2) App-specific Items</h3>
                <ul className="list-disc pl-6">
                    <li>
                        <span className="font-medium text-zinc-900">Sync:</span>
                        Collects email, name, and profile photo during social login. Couple connection information, schedule data, and push notification tokens are stored on the server.
                    </li>
                    <li><span className="font-medium text-zinc-900">Scribbly (Memo App):</span> No server-side data collection (All data stored locally on device)</li>
                    <li><span className="font-medium text-zinc-900">QuickPick (Random Picker):</span> No server-side data collection (All data stored locally on device)</li>
                    {/* [Added] Until App */}
                    <li><span className="font-medium text-zinc-900">Until. (D-Day App):</span> No server-side data collection (All data stored locally on device)</li>
                    <li>
                        <span className="font-medium text-zinc-900">Gisado:</span>
                        Collects email and name during social login. Study logs (quiz results) are stored on the server.
                        * Study statistics are transmitted to an external AI service (Gemini API) for weakness analysis, but personally identifiable information is excluded and data is not used for AI training.
                    </li>
                    <li>
                        <span className="font-medium text-zinc-900">KineticCore:</span>
                        No account or login is required, and no directly identifying information such as name, email address, or phone number is collected.
                        Game records (best survival time, kill count, level, in-game currency, upgrade state, and settings) are stored only on the user's device, are deleted when the app is uninstalled, and are never transmitted to the Company's servers.
                        * This app serves rewarded ads (continue after death) through Google AdMob. In this process, Google and its advertising partners may collect and use the advertising identifier (AAID),
                        approximate location derived from the IP address, and app interaction data such as ad impressions and clicks. The purposes are ad delivery, ad performance measurement, and fraud prevention, and all transmission uses an encrypted connection (HTTPS).
                        For details, see the <a href="https://policies.google.com/privacy" target="_blank" rel="noreferrer" className="underline hover:text-zinc-900">Google Privacy Policy</a> and{' '}
                        <a href="https://policies.google.com/technologies/partner-sites" target="_blank" rel="noreferrer" className="underline hover:text-zinc-900">How Google uses information from partner sites</a>.
                        Users may reset or delete the advertising identifier under [Settings &gt; Privacy &gt; Ads] on their device.
                        * For service improvement, anonymous usage statistics (play time, how a run ended, upgrades selected, help screen views, and similar) are collected through Google Analytics.
                        These statistics are distinguished only by a random identifier generated at app installation, contain no advertising identifier or directly identifying information, and are used solely to improve the service, such as tuning game difficulty.
                        The identifier is deleted when the app is uninstalled.
                        Users in the European Economic Area, the United Kingdom, and Switzerland are asked for consent to personalized advertising through
                        Google's User Messaging Platform (UMP), and may change those settings or withdraw consent at any time from
                        [Pause &gt; Ad Privacy Settings] inside the game.
                        This app is not directed to children under 13, and ad content is limited to a teen rating or below.
                    </li>
                    <li>
                        <span className="font-medium text-zinc-900">Gunline:</span>
                        No account or login is required, and no directly identifying information such as name, email address, or phone number is collected.
                        Game records (longest distance, kill count, clear count, in-game currency, upgrade state, unlock list, and settings) are stored only on the user's device, are deleted when the app is uninstalled, and are never transmitted to the Company's servers.
                        * This app serves rewarded ads (continue running after death) through Google AdMob. In this process, Google and its advertising partners may collect and use the advertising identifier (AAID),
                        approximate location derived from the IP address, and app interaction data such as ad impressions and clicks. The purposes are ad delivery, ad performance measurement, and fraud prevention, and all transmission uses an encrypted connection (HTTPS).
                        For details, see the <a href="https://policies.google.com/privacy" target="_blank" rel="noreferrer" className="underline hover:text-zinc-900">Google Privacy Policy</a> and{' '}
                        <a href="https://policies.google.com/technologies/partner-sites" target="_blank" rel="noreferrer" className="underline hover:text-zinc-900">Google Partner Sites Policy</a>.
                        Users can reset or delete the advertising identifier under [Settings &gt; Privacy &gt; Ads] on their device.
                        * To improve the service, anonymous usage statistics (play time, distance run, how a run ended, chosen perks, and help screen views) are collected through Google Analytics.
                        These statistics are distinguished only by a random identifier generated at install time, contain no advertising identifier or personally identifying information, and are used solely for service improvement such as difficulty tuning.
                        Uninstalling the app also deletes that identifier.
                        Users in the European Economic Area (EEA), the United Kingdom, and Switzerland are asked for consent regarding ad personalization through
                        Google's User Messaging Platform (UMP), and may change those settings or withdraw consent at any time from
                        [Pause &gt; Ad Privacy Settings] inside the game.
                        This app is not directed to children under 13, and ad content is limited to a teen rating or below.
                    </li>
                    <li>
                        <span className="font-medium text-zinc-900">HomeKeep:</span>
                        No account or login is required, and no directly identifying information such as name, email address, or phone number is collected.
                        Game records (furthest night reached, clear count and best clear time, in-game currency, upgrade state, unlock list, and settings) are stored only on the user's device, are deleted when the app is uninstalled, and are never transmitted to the Company's servers.
                        * This app serves rewarded ads (continue after the cabin falls) through Google AdMob. In this process, Google and its advertising partners may collect and use the advertising identifier (AAID),
                        approximate location derived from the IP address, and app interaction data such as ad impressions and clicks. The purposes are ad delivery, ad performance measurement, and fraud prevention, and all transmission uses an encrypted connection (HTTPS).
                        For details, see the <a href="https://policies.google.com/privacy" target="_blank" rel="noreferrer" className="underline hover:text-zinc-900">Google Privacy Policy</a> and{' '}
                        <a href="https://policies.google.com/technologies/partner-sites" target="_blank" rel="noreferrer" className="underline hover:text-zinc-900">Google Partner Sites Policy</a>.
                        Users can reset or delete the advertising identifier under [Settings &gt; Privacy &gt; Ads] on their device.
                        * To improve the service, anonymous usage statistics (nights played, how the run ended, which structures were built and which upgrades were chosen, shop purchases) are collected through Google Analytics.
                        These statistics are distinguished only by a random identifier generated at app installation, contain no advertising identifier or directly identifying information, and are used solely to improve the service, such as tuning game difficulty.
                        The identifier is deleted when the app is uninstalled.
                        Users in the European Economic Area, the United Kingdom, and Switzerland are asked for consent to personalized advertising through
                        Google's User Messaging Platform (UMP), and may reset the advertising identifier or opt out of personalized ads at any time under
                        [Settings &gt; Google &gt; Ads] on their device.
                        This app is not directed to children under 13, and ad content is limited to a teen rating or below.
                    </li>
                    <li>
                        <span className="font-medium text-zinc-900">To the Sanctum:</span>
                        No account or login is required, and no directly identifying information such as name, email address, or phone number is collected.
                        Game records (deepest floor reached, clear count, monsters met and caught in the bestiary, in-game currency, upgrade state, rank, and settings) are stored only on the user's device, are deleted when the app is uninstalled, and are never transmitted to the Company's servers.
                        * This app serves rewarded ads (continue after a wipe, double gold after a run) through Google AdMob. In this process, Google and its advertising partners may collect and use the advertising identifier (AAID),
                        approximate location derived from the IP address, and app interaction data such as ad impressions and clicks. The purposes are ad delivery, ad performance measurement, and fraud prevention, and all transmission uses an encrypted connection (HTTPS).
                        For details, see the <a href="https://policies.google.com/privacy" target="_blank" rel="noreferrer" className="underline hover:text-zinc-900">Google Privacy Policy</a> and{' '}
                        <a href="https://policies.google.com/technologies/partner-sites" target="_blank" rel="noreferrer" className="underline hover:text-zinc-900">Google Partner Sites Policy</a>.
                        Users can reset or delete the advertising identifier under [Settings &gt; Privacy &gt; Ads] on their device.
                        * To improve the service, anonymous usage statistics (floor reached, how a run ended, paths and rewards chosen, capture results, shop purchases, and similar) are collected through Google Analytics.
                        These statistics are distinguished only by a random identifier generated at install time, contain no advertising identifier or personally identifying information, and are used solely for service improvement such as difficulty tuning.
                        Uninstalling the app also deletes that identifier.
                        Users in the European Economic Area (EEA), the United Kingdom, and Switzerland are asked for consent regarding ad personalization through
                        Google's User Messaging Platform (UMP), and may reset the advertising identifier or turn off personalized ads at any time under [Settings &gt; Google &gt; Ads] on their device.
                        This app is not directed to children under 13, and ad content is limited to a teen rating or below.
                    </li>
                    <li>
                        <span className="font-medium text-zinc-900">Twist Jam:</span>
                        No account or login is required, and no directly identifying information such as name, email address, or phone number is collected.
                        Game records (level reached, coins and tools held, bakery decoration stages, whether ad removal was purchased, and settings) are stored on the user's device and, on iOS, also backed up to the user's own iCloud if the device is signed in, so play can continue on another device. These records are never transmitted to the Company's servers, and the Company cannot access the user's iCloud.
                        * This app serves rewarded ads (continue, receive tools, double coins) and interstitial ads between levels through Google AdMob. In this process, Google and its advertising partners may collect and use the advertising identifier (IDFA/AAID),
                        approximate location derived from the IP address, and app interaction data such as ad impressions and clicks. The purposes are ad delivery, ad performance measurement, and fraud prevention, and all transmission uses an encrypted connection (HTTPS).
                        On iOS, the advertising identifier is used only if the user allows the App Tracking Transparency (ATT) request; the game can be played without allowing it, and the choice can be changed at any time under [Settings &gt; Privacy &amp; Security &gt; Tracking] on the device.
                        For details, see the <a href="https://policies.google.com/privacy" target="_blank" rel="noreferrer" className="underline hover:text-zinc-900">Google Privacy Policy</a> and{' '}
                        <a href="https://policies.google.com/technologies/partner-sites" target="_blank" rel="noreferrer" className="underline hover:text-zinc-900">Google Partner Sites Policy</a>.
                        * In-app purchases are processed by Apple App Store payments. The Company does not receive payment information such as payment methods and does not store purchase history on its servers.
                        Users in the European Economic Area (EEA), the United Kingdom, and Switzerland are asked for consent regarding ad personalization through
                        Google's User Messaging Platform (UMP), and may change those settings or withdraw consent at any time from
                        [Settings &gt; Privacy Settings] inside the game.
                        This app is not directed to children under 13, and ad content is limited to a teen rating or below.
                        * To improve the service, anonymous usage statistics (app launches, levels started, cleared and failed with the reason, continues, bakery decoration purchases, rewarded ad views, and shop products purchased) are collected through Google Analytics, using a random identifier created by the app rather than the advertising identifier.
                        * Purchase verification: on iOS, when a product is purchased, the transaction ID and a random value created by the app to tie the purchase to the device pass through the Company's verification server to Apple to confirm the purchase was completed and whether it was later refunded; items granted for refunded purchases are taken back. This information is not stored on the verification server. If a user asks Apple for a refund, the Company may answer Apple's request with whether the item was delivered and the Company's opinion (play records and usage are not sent).
                    </li>
                    <li>
                        <span className="font-medium text-zinc-900">뽀꼬삐 원정대:</span>
                        No account or login is required, and no directly identifying information such as name, email address, or phone number is collected.
                        Game records (animals owned and their levels, stage stars, fruit held, attendance and mission progress, daily challenge records, and settings) are stored only on the user's device, are deleted when the app is uninstalled, and are never transmitted to the Company's servers.
                        * This app serves ads through Google AdMob. In this process, Google and its advertising partners may collect and use the advertising identifier (AAID on Android; on iPhone, the IDFA only if the user allows tracking),
                        approximate location derived from the IP address, and app interaction data such as ad impressions and clicks. The purposes are ad delivery, ad performance measurement, and fraud prevention, and all transmission uses an encrypted connection (HTTPS).
                        For details, see the <a href="https://policies.google.com/privacy" target="_blank" rel="noreferrer" className="underline hover:text-zinc-900">Google Privacy Policy</a> and{' '}
                        <a href="https://policies.google.com/technologies/partner-sites" target="_blank" rel="noreferrer" className="underline hover:text-zinc-900">Google Partner Sites Policy</a>.
                        On Android, users can reset or delete the advertising identifier under [Settings &gt; Google &gt; Ads]; on iPhone, the app asks for tracking permission at first launch and users can change it at any time under [Settings &gt; Privacy &amp; Security &gt; Tracking].
                        * To improve the service, usage statistics (app launches, stages played and their results, egg hatching, shop use, crash and diagnostic information, and similar) are collected through Google Analytics.
                        These statistics are distinguished by an identifier generated at install time, contain no directly identifying information such as name or email address, and are used solely for service improvement such as difficulty tuning and bug fixing.
                        * In-app purchases are processed by Google Play billing on Android and App Store billing on iPhone. The Company does not receive payment information such as payment methods.
                        * Purchase verification: when a product is purchased, the purchase token (Android) or the transaction ID and a random value created by the app to tie the purchase to the device (iPhone) pass through the Company's verification server (Vultr Holdings, Inc., Seoul, Republic of Korea region) to Google or Apple to confirm the purchase was completed and whether it was later refunded or cancelled; items granted for refunded or cancelled purchases are taken back. This information is not stored on the verification server.
                        * Refund request replies: if a user asks Apple for a refund or has a Google Play payment reversed through their card issuer, the Company may answer that platform's request with whether the item was delivered and the Company's opinion. Play records and usage are not sent.
                        Users in the European Economic Area (EEA), the United Kingdom, and Switzerland are asked for consent regarding ad personalization through Google's User Messaging Platform (UMP).
                        This app is not directed to children under 13, and ad content is limited to a teen rating or below.
                    </li>
                    <li>
                        <span className="font-medium text-zinc-900">Haneulbada:</span>
                        No sign-up is required, and no directly identifying information such as name, email address, or phone number is collected.
                        Story, combat, and hunting run on the device, and play records are stored on the device in encrypted form. When the game connects to the Company's server for cloud save, paid items, weapon enhancement, or the weekly ranking, the following is processed:
                        (1) Game account: a random account identifier issued by the server (stored on the server only as a hash) (2) Account link (optional): if the user chooses to link, the Google Play Games player ID on Android, or the user identifier Apple issues for this app only on iPhone (no name or email is received)
                        (3) Cloud save: play records encrypted with the account key, the save time, and the chapter and level reached per hero (the Company does not open the contents of play records) (4) Server ledger: paid items held, weapon enhancement level and accumulated failures
                        (5) Weekly ranking: hero, weekly boss battle record (damage) and its time — the ranking shows only the hero name and the last four characters of the account identifier (6) Purchase records: product, purchase time, Google Play order number or App Store transaction ID, and purchase verification data (on iPhone, including a value the app creates to tie the purchase to the account; no payment method information is received)
                        (7) Service logs: IP address, connection time, and a record of requests received by the server.
                        * Retention: (1)–(5) until the account is deleted (destroyed without delay upon deletion); (6) five years under the Act on the Consumer Protection in Electronic Commerce; (7) automatically deleted after 90 days, kept to investigate misuse and handle appeals. Play records on the device are deleted with the app.
                        * Purposes: identifying the account and continuing on another device, verifying and delivering purchases (items granted for refunded or cancelled purchases are taken back), deciding and recording weapon enhancement results, compiling the weekly ranking and filtering abnormal records, and preventing misuse such as unauthorized programs or request flooding.
                        * Entrusted processing: game server operation and data storage by Vultr Holdings, Inc. (Seoul, Republic of Korea region — data is stored in Korea); in-app payment processing, purchase verification, and account link verification by Google LLC on Android and Apple Inc. on iPhone (United States and elsewhere, when purchasing or linking).
                        * Refund request replies: if a user asks Apple for a refund or has a Google Play payment reversed through their card issuer, the Company answers that platform's request with whether the item was delivered and the share used (the portion of the granted quantity that was used). Play records are not sent.
                        * This app serves rewarded ads (continue after falling, open one more chest, double quest rewards) through Google AdMob. In this process, Google and its advertising partners may collect and use the advertising identifier (IDFA/AAID),
                        approximate location derived from the IP address, and app interaction data such as ad impressions and clicks. The purposes are ad delivery, ad performance measurement, and fraud prevention, and all transmission uses an encrypted connection (HTTPS).
                        On iOS, the advertising identifier is used only if the user allows the App Tracking Transparency (ATT) request; the game can be played without allowing it, and the choice can be changed at any time under [Settings &gt; Privacy &amp; Security &gt; Tracking] on the device. Buying the Remove Ads item grants the same rewards without ads.
                        * To improve the service, usage statistics (app launches and time played, the hero chosen, chapters completed, weapon enhancement results, rewarded ads watched, items purchased, weekly boss records, device type, country, and similar) are collected through Google Analytics (Firebase).
                        These statistics are identified by an identifier created when the app is installed, do not include information that directly identifies a person such as a name or email address, and are used only to improve the service, such as adjusting game difficulty and fixing errors.
                        * Account deletion: the account and the information stored on the server can be deleted directly in the game under [Menu &gt; Account &gt; Delete account] (<a href="/haneulbada/delete" className="underline hover:text-zinc-900">data deletion guide</a>). This app is not directed to children under 14.
                    </li>
                </ul>
            </section>

            <section>
                <h2 className="text-lg font-semibold text-zinc-900 mb-3">3. Retention and Use Period</h2>
                <p>The Company processes and retains personal information within the retention and use period prescribed by law or agreed upon when collecting personal information from the data subject.</p>
                <ul className="list-disc pl-6 mt-2 space-y-1">
                    <li>Until membership withdrawal (however, if investigation is in progress due to violation of related laws, until the end of such investigation)</li>
                    <li>Retention reasons under related laws: Records on contracts or withdrawal of subscription (5 years), Records on consumer complaints or dispute resolution (3 years)</li>
                </ul>
            </section>

            <section>
                <h2 className="text-lg font-semibold text-zinc-900 mb-3">4. Provision to Third Parties</h2>
                <p>The Company does not provide users' personal information to outside parties in principle. However, exceptions are made in the following cases:</p>
                <ul className="list-disc pl-6 mt-2 space-y-1">
                    <li>When the user has given prior consent</li>
                    <li>When required by law or when requested by investigative agencies following legal procedures</li>
                    <li>When, in Haneulbada, a user asks Apple for a refund or has a Google Play payment reversed through their card issuer, and whether the item was delivered and the share used are provided to that platform (Apple Inc. or Google LLC) to answer its request</li>
                    <li>When, in Twist Jam or 뽀꼬삐 원정대, a user asks Apple for a refund or has a Google Play payment reversed through their card issuer, and whether the item was delivered and the Company's opinion are provided to that platform (Apple Inc. or Google LLC) to answer its request</li>
                    <li>When the advertising identifier, approximate location, and app interaction data are provided to Google AdMob and its advertising partners in order to serve ads in KineticCore, Gunline, HomeKeep, To the Sanctum, Twist Jam, Haneulbada, and 뽀꼬삐 원정대</li>
                </ul>
                <p className="mt-3">
                    Separately, usage statistics analysis for KineticCore, Gunline, HomeKeep, To the Sanctum, Twist Jam, Haneulbada, and 뽀꼬삐 원정대 is <span className="font-medium text-zinc-900">entrusted</span> to Google Analytics.
                    Google Analytics processes this data on the Company's behalf, which does not constitute provision to a third party, and the processor may not use the information for any purpose beyond the entrusted scope.
                </p>
            </section>

            <section>
                <h2 className="text-lg font-semibold text-zinc-900 mb-3">5. Rights of Data Subjects</h2>
                <p>Users may exercise the following rights as data subjects:</p>
                <ul className="list-disc pl-6 mt-2 space-y-1">
                    <li>Request to access personal information</li>
                    <li>Request for correction if there are errors</li>
                    <li>Request for deletion</li>
                    <li>Request to suspend processing</li>
                </ul>
                <p className="mt-2">Rights can be exercised via written request or email to contact@damso.app, and the Company will take action without delay.</p>
            </section>

            <section>
                <h2 className="text-lg font-semibold text-zinc-900 mb-3">6. Privacy Officer</h2>
                <p>The Company has designated a Privacy Officer to handle complaints and remedies related to personal information processing.</p>
                <div className="mt-3 bg-zinc-50 p-4 rounded-lg text-sm">
                    <p>Privacy Officer: Damso</p>
                    <p>Email: contact@damso.app</p>
                </div>
            </section>

            <section>
                <h2 className="text-lg font-semibold text-zinc-900 mb-3">7. Changes to Privacy Policy</h2>
                <p>This Privacy Policy is effective from November 10, 2026. Any additions, deletions, or modifications will be announced through notices at least 7 days before implementation.</p>
            </section>
        </div>
    );
}

export default Privacy;