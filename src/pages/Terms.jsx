import { useState } from 'react';
import Layout from '../components/Layout';

function Terms() {
    const [lang, setLang] = useState('ko');

    return (
        <Layout>
            <div className="max-w-4xl mx-auto px-6 py-12">
                <div className="flex items-center justify-between mb-8">
                    <h1 className="text-2xl font-semibold text-zinc-900">
                        {lang === 'ko' ? '이용약관' : 'Terms of Service'}
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

                {lang === 'ko' ? <TermsKo /> : <TermsEn />}

                <div className="mt-8 text-sm text-zinc-400">
                    <p>{lang === 'ko' ? '시행일자: 2026년 8월 19일' : 'Effective Date: August 19, 2026'}</p>
                </div>
            </div>
        </Layout>
    );
}

function TermsKo() {
    return (
        <div className="space-y-8 text-zinc-600">
            <section>
                <h2 className="text-lg font-semibold text-zinc-900 mb-3">제1조 (목적)</h2>
                {/* [수정됨] Until 추가 */}
                <p>본 약관은 담소(이하 "회사")가 제공하는 모든 모바일 앱 서비스(끄적이, 찍먹, Until, Sync, 기사도, 키네틱코어, 건라인, 집지키기 등 이하 "서비스")의 이용과 관련하여 회사와 회원 간의 권리, 의무 및 책임사항, 기타 필요한 사항을 규정함을 목적으로 합니다.</p>
            </section>

            <section>
                <h2 className="text-lg font-semibold text-zinc-900 mb-3">제2조 (정의)</h2>
                <ul className="list-disc pl-6 space-y-1">
                    <li>"서비스"란 회사가 제공하는 모바일 애플리케이션 및 관련 제반 서비스를 의미합니다.</li>
                    <li>"회원"이란 본 약관에 동의하고 회사와 서비스 이용계약을 체결한 자를 말합니다.</li>
                    <li>"아이디(ID)"란 회원의 식별과 서비스 이용을 위하여 회원이 설정하고 회사가 승인하는 문자 또는 숫자의 조합을 의미합니다.</li>
                </ul>
            </section>

            <section>
                <h2 className="text-lg font-semibold text-zinc-900 mb-3">제3조 (약관의 효력 및 변경)</h2>
                <p>본 약관은 서비스를 이용하고자 하는 모든 회원에 대하여 그 효력을 발생합니다.</p>
                <p className="mt-2">회사는 필요한 경우 관련 법령을 위배하지 않는 범위에서 본 약관을 변경할 수 있으며, 변경된 약관은 서비스 내 공지사항을 통해 공지합니다.</p>
            </section>

            <section>
                <h2 className="text-lg font-semibold text-zinc-900 mb-3">제4조 (서비스의 제공)</h2>
                <p>회사는 다음과 같은 서비스를 제공합니다:</p>
                <ul className="list-disc pl-6 mt-2 space-y-1">
                    {/* [수정됨] 디데이 관리 내용 추가 */}
                    <li>메모, 기록 관리, 랜덤 선택 도구, 디데이 관리, 커플 일정 공유 및 동기화 등 회사가 개발하여 제공하는 각종 모바일 애플리케이션 서비스</li>
                    <li>정보처리기사 기출문제 학습, 오답 노트, AI 기반 취약점 분석 등 수험 지원 서비스</li>
                    <li>기타 회사가 추가 개발하거나 제휴계약 등을 통해 회원에게 제공하는 일체의 서비스</li>
                </ul>
                <p className="mt-2">서비스는 연중무휴, 1일 24시간 제공함을 원칙으로 합니다. 다만, 회사는 서비스 설비의 정기점검, 증설 및 교체를 위해 필요한 경우 일정 기간 동안 서비스를 중단할 수 있습니다.</p>
            </section>

            <section>
                <h2 className="text-lg font-semibold text-zinc-900 mb-3">제5조 (회원가입)</h2>
                <p>이용자는 회사가 정한 가입 양식에 따라 회원정보를 기입한 후 본 약관에 동의한다는 의사표시를 함으로써 회원가입을 신청합니다.</p>
                <p className="mt-2">회사는 제1항과 같이 회원으로 가입할 것을 신청한 이용자 중 다음 각 호에 해당하지 않는 한 회원으로 등록합니다:</p>
                <ul className="list-disc pl-6 mt-2 space-y-1">
                    <li>등록 내용에 허위, 기재누락, 오기가 있는 경우</li>
                    <li>기타 회원으로 등록하는 것이 회사의 기술상 현저히 지장이 있다고 판단되는 경우</li>
                </ul>
            </section>

            <section>
                <h2 className="text-lg font-semibold text-zinc-900 mb-3">제6조 (회원 탈퇴 및 자격 상실)</h2>
                <p>회원은 언제든지 탈퇴를 요청할 수 있으며, 회사는 즉시 회원탈퇴를 처리합니다.</p>
                <p className="mt-2">회원이 다음 각 호의 사유에 해당하는 경우, 회사는 회원자격을 제한 및 정지시킬 수 있습니다:</p>
                <ul className="list-disc pl-6 mt-2 space-y-1">
                    <li>가입 신청 시에 허위 내용을 등록한 경우</li>
                    <li>다른 사람의 서비스 이용을 방해하거나 그 정보를 도용하는 등 전자상거래 질서를 위협하는 경우</li>
                    <li>서비스를 이용하여 법령 또는 본 약관이 금지하거나 공서양속에 반하는 행위를 하는 경우</li>
                </ul>
            </section>

            <section>
                <h2 className="text-lg font-semibold text-zinc-900 mb-3">제7조 (회원에 대한 통지)</h2>
                <p>회사가 회원에 대한 통지를 하는 경우 회원이 지정한 이메일 주소, 앱 푸시알림 등으로 할 수 있습니다.</p>
            </section>

            <section>
                <h2 className="text-lg font-semibold text-zinc-900 mb-3">제8조 (저작권의 귀속 및 게시물 관리)</h2>
                <p>1. 회사가 작성한 저작물에 대한 저작권 기타 지적재산권은 회사에 귀속합니다.</p>
                <p className="mt-2">2. 회원이 서비스 내에 게시한 게시물(메모, 텍스트, 이미지 등)의 저작권은 해당 게시물의 저작자에게 귀속됩니다.</p>
                <p className="mt-2">3. 회원은 서비스를 이용함으로써 얻은 정보 중 회사에게 지적재산권이 귀속된 정보를 회사의 사전 승낙 없이 복제, 송신, 출판, 배포, 방송 기타 방법에 의하여 영리목적으로 이용하거나 제3자에게 이용하게 하여서는 안됩니다.</p>
            </section>

            <section>
                <h2 className="text-lg font-semibold text-zinc-900 mb-3">제9조 (면책조항)</h2>
                <p>회사는 천재지변 또는 이에 준하는 불가항력으로 인하여 서비스를 제공할 수 없는 경우에는 서비스 제공에 관한 책임이 면제됩니다.</p>
                <p className="mt-2">회사는 회원의 귀책사유로 인한 서비스 이용의 장애에 대하여 책임을 지지 않습니다. 특히 회원이 백업하지 않은 데이터의 소실에 대해서는 회사가 책임지지 않습니다.</p>
            </section>

            <section>
                <h2 className="text-lg font-semibold text-zinc-900 mb-3">제10조 (분쟁해결)</h2>
                <p>회사는 회원으로부터 제출되는 불만사항 및 의견을 우선적으로 그 사항을 처리합니다. 다만, 신속한 처리가 곤란한 경우에는 회원에게 그 사유와 처리일정을 즉시 통보해 드립니다.</p>
            </section>
        </div>
    );
}

function TermsEn() {
    return (
        <div className="space-y-8 text-zinc-600">
            <section>
                <h2 className="text-lg font-semibold text-zinc-900 mb-3">Article 1 (Purpose)</h2>
                {/* [Added] Until */}
                <p>These Terms govern the rights, obligations, responsibilities, and other necessary matters between Damso (hereinafter "Company") and members regarding the use of all mobile app services (including Scribbly, QuickPick, Until, Sync, Gisado, KineticCore, Gunline, HomeKeep, hereinafter "Service").</p>            </section>

            <section>
                <h2 className="text-lg font-semibold text-zinc-900 mb-3">Article 2 (Definitions)</h2>
                <ul className="list-disc pl-6 space-y-1">
                    <li>"Service" refers to mobile applications and related services provided by the Company.</li>
                    <li>"Member" refers to a person who has agreed to these Terms and entered into a service agreement with the Company.</li>
                    <li>"ID" refers to a combination of letters or numbers set by the member and approved by the Company for identification and service use.</li>
                </ul>
            </section>

            <section>
                <h2 className="text-lg font-semibold text-zinc-900 mb-3">Article 3 (Effect and Amendment of Terms)</h2>
                <p>These Terms are effective for all members who wish to use the Service.</p>
                <p className="mt-2">The Company may amend these Terms within the scope that does not violate relevant laws, and amended Terms will be announced through notices within the Service.</p>
            </section>

            <section>
                <h2 className="text-lg font-semibold text-zinc-900 mb-3">Article 4 (Provision of Service)</h2>
                <p>The Company provides the following services:</p>
                <ul className="list-disc pl-6 mt-2 space-y-1">
                    {/* [Added] D-Day management */}
                    <li>Various mobile application services developed and provided by the Company, such as memo management, record keeping, random selection tools, and D-Day management</li>
                    <li>Exam preparation support services, including past paper practice, incorrect answer notes, and AI-based weakness analysis</li>
                    <li>All other services provided to members through additional development or partnership agreements</li>
                </ul>
                <p className="mt-2">The Service is available 24 hours a day, 365 days a year in principle. However, the Company may suspend the Service for a certain period for regular maintenance, expansion, or replacement of service facilities.</p>
            </section>

            <section>
                <h2 className="text-lg font-semibold text-zinc-900 mb-3">Article 5 (Membership Registration)</h2>
                <p>Users apply for membership by filling in member information according to the registration form set by the Company and expressing their agreement to these Terms.</p>
                <p className="mt-2">The Company registers users as members unless they fall under any of the following:</p>
                <ul className="list-disc pl-6 mt-2 space-y-1">
                    <li>False information, omissions, or errors in registration details</li>
                    <li>Registration is deemed to significantly hinder the Company's technical operations</li>
                </ul>
            </section>

            <section>
                <h2 className="text-lg font-semibold text-zinc-900 mb-3">Article 6 (Withdrawal and Disqualification)</h2>
                <p>Members may request withdrawal at any time, and the Company will process the withdrawal immediately.</p>
                <p className="mt-2">The Company may restrict or suspend membership if a member falls under any of the following:</p>
                <ul className="list-disc pl-6 mt-2 space-y-1">
                    <li>Registering false information at the time of application</li>
                    <li>Interfering with others' use of the Service or stealing their information</li>
                    <li>Using the Service to engage in activities prohibited by law or these Terms</li>
                </ul>
            </section>

            <section>
                <h2 className="text-lg font-semibold text-zinc-900 mb-3">Article 7 (Notification to Members)</h2>
                <p>The Company may notify members via email address or app push notifications designated by the member.</p>
            </section>

            <section>
                <h2 className="text-lg font-semibold text-zinc-900 mb-3">Article 8 (Copyright and Content Management)</h2>
                <p>1. Copyright and other intellectual property rights for works created by the Company belong to the Company.</p>
                <p className="mt-2">2. Copyright for content posted by members within the Service (memos, text, images, etc.) belongs to the author of such content.</p>
                <p className="mt-2">3. Members shall not use information with intellectual property rights belonging to the Company for commercial purposes or allow third parties to use it without prior consent.</p>
            </section>

            <section>
                <h2 className="text-lg font-semibold text-zinc-900 mb-3">Article 9 (Disclaimer)</h2>
                <p>The Company is exempt from responsibility for service provision when unable to provide the Service due to force majeure such as natural disasters.</p>
                <p className="mt-2">The Company is not responsible for service disruptions caused by members. In particular, the Company is not responsible for loss of data that members have not backed up.</p>
            </section>

            <section>
                <h2 className="text-lg font-semibold text-zinc-900 mb-3">Article 10 (Dispute Resolution)</h2>
                <p>The Company prioritizes handling complaints and opinions submitted by members. However, if prompt handling is difficult, the Company will immediately notify members of the reason and processing schedule.</p>
            </section>
        </div>
    );
}

export default Terms;