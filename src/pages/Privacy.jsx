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
                    <p>{lang === 'ko' ? '시행일자: 2026년 8월 29일' : 'Effective Date: August 29, 2026'}</p>
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
                    <li>키네틱코어(KineticCore)·건라인(Gunline)·집지키기(HomeKeep)·신전으로(To the Sanctum)의 광고 게재를 위해 Google AdMob 및 광고 파트너에게 광고 식별자, 대략적인 위치, 앱 상호작용 정보가 제공되는 경우</li>
                </ul>
                <p className="mt-3">
                    한편 키네틱코어(KineticCore)·건라인(Gunline)·집지키기(HomeKeep)·신전으로(To the Sanctum)의 이용 통계 분석은 Google 애널리틱스에 <span className="font-medium text-zinc-900">처리위탁</span>하고 있습니다.
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
                <p>이 개인정보처리방침은 2026년 8월 29일부터 적용되며, 법령 및 방침에 따른 변경내용의 추가, 삭제 및 정정이 있는 경우에는 변경사항의 시행 7일 전부터 공지사항을 통하여 고지할 것입니다.</p>
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
                    <li>When the advertising identifier, approximate location, and app interaction data are provided to Google AdMob and its advertising partners in order to serve ads in KineticCore, Gunline, and HomeKeep</li>
                </ul>
                <p className="mt-3">
                    Separately, usage statistics analysis for KineticCore, Gunline, and HomeKeep is <span className="font-medium text-zinc-900">entrusted</span> to Google Analytics.
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
                <p>This Privacy Policy is effective from August 25, 2026. Any additions, deletions, or modifications will be announced through notices at least 7 days before implementation.</p>
            </section>
        </div>
    );
}

export default Privacy;