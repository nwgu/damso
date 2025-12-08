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
                    <p>{lang === 'ko' ? '시행일자: 2025년 12월 09일' : 'Effective Date: December 09, 2025'}</p>
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
                    <li><span className="font-medium text-zinc-900">끄적이(Memo App):</span> 별도 서버 수집 정보 없음 (모든 데이터는 사용자 기기에만 저장)</li>
                    <li><span className="font-medium text-zinc-900">찍먹(JjikMeok):</span> 별도 서버 수집 정보 없음 (모든 데이터는 사용자 기기에만 저장)</li>
                    {/* [추가됨] Until 앱 내용 */}
                    <li><span className="font-medium text-zinc-900">Until(언틸):</span> 별도 서버 수집 정보 없음 (모든 데이터는 사용자 기기에만 저장)</li>
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
                </ul>
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
                <p>이 개인정보처리방침은 2025년 12월 09일부터 적용되며, 법령 및 방침에 따른 변경내용의 추가, 삭제 및 정정이 있는 경우에는 변경사항의 시행 7일 전부터 공지사항을 통하여 고지할 것입니다.</p>
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
                    <li><span className="font-medium text-zinc-900">Kkeujeogi (Memo App):</span> No server-side data collection (All data stored locally on device)</li>
                    <li><span className="font-medium text-zinc-900">JjikMeok (Random Picker):</span> No server-side data collection (All data stored locally on device)</li>
                    {/* [Added] Until App */}
                    <li><span className="font-medium text-zinc-900">Until (D-Day App):</span> No server-side data collection (All data stored locally on device)</li>
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
                </ul>
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
                <p>This Privacy Policy is effective from December 09, 2025. Any additions, deletions, or modifications will be announced through notices at least 7 days before implementation.</p>
            </section>
        </div>
    );
}

export default Privacy;