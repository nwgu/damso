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
                    <p>{lang === 'ko' ? '시행일자: 2026년 11월 13일' : 'Effective Date: November 13, 2026'}</p>
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
                <p>본 약관은 담소(이하 "회사")가 제공하는 모든 모바일 앱 서비스(끄적이, 찍먹, Until, Sync, 기사도, 키네틱코어, 건라인, 집지키기, 신전으로, 트위스트 잼, 하늘바다, 뽀꼬삐 원정대 등 이하 "서비스")의 이용과 관련하여 회사와 회원 간의 권리, 의무 및 책임사항, 기타 필요한 사항을 규정함을 목적으로 합니다.</p>
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
                <h2 className="text-lg font-semibold text-zinc-900 mb-3">제9조 (유료 상품)</h2>
                <p>1. "유료 상품"이란 회원이 서비스 안에서 Google Play 또는 App Store 결제로 구매하는 게임 재화(열매 · 코인 등), 꾸러미, 광고 제거 등 기능 이용권 및 이와 비슷한 디지털 콘텐츠를 말합니다.</p>
                <p className="mt-2">2. 유료 상품의 결제는 Google LLC(Google Play) 또는 Apple Inc.(App Store)의 결제 정책에 따르며, 회사는 결제 수단 정보를 받지 않습니다. 상품의 이름 · 내용 · 가격은 구매 화면에 표시됩니다.</p>
                <p className="mt-2">3. 회사는 결제가 해당 스토어에서 실제로 완료되었는지 확인한 뒤 유료 상품을 지급합니다. 확인이 지연되면 확인되는 대로 지급합니다.</p>
                <p className="mt-2">4. 미성년자가 법정대리인의 동의 없이 유료 상품을 구매한 경우 미성년자 본인 또는 법정대리인은 그 구매를 취소할 수 있습니다. 다만 미성년자가 법정대리인의 동의를 받은 것으로 믿게 한 경우 등 관련 법령이 정한 경우에는 그러하지 않습니다.</p>
            </section>

            <section>
                <h2 className="text-lg font-semibold text-zinc-900 mb-3">제10조 (청약철회 및 환불)</h2>
                <p>1. 회원은 유료 상품을 구매한 날부터 7일 이내에 청약철회를 할 수 있습니다. 다만 결제 즉시 지급되어 사용이 시작된 상품, 지급된 뒤 사용한 게임 재화, 구매와 동시에 효과가 적용되는 기능 이용권은 「전자상거래 등에서의 소비자보호에 관한 법률」 제17조 제2항에 따라 청약철회가 제한되며, 회사는 이를 구매 화면에 미리 알립니다.</p>
                <p className="mt-2">2. 환불은 회원이 결제한 스토어(Google Play 또는 App Store)의 환불 절차에 따라 진행됩니다. 회사의 귀책사유로 유료 상품을 이용할 수 없는 경우에는 회사가 환불 처리를 돕습니다.</p>
                <p className="mt-2">3. 회원이 스토어에 환불을 요청하면 스토어의 요청에 따라 회사는 해당 구매의 지급 여부와 회사의 의견을 그 스토어에 회신할 수 있습니다.</p>
            </section>

            <section>
                <h2 className="text-lg font-semibold text-zinc-900 mb-3">제11조 (환불 · 결제 취소 시 지급 상품의 회수)</h2>
                <p>1. 유료 상품의 구매가 환불 · 결제 취소 · 지불 거절 등으로 취소된 경우, 회사는 그 구매로 지급한 유료 상품을 회수합니다. 기능 이용권(광고 제거 등)은 효과를 해제합니다.</p>
                <p className="mt-2">2. 회수할 게임 재화가 회원이 보유한 양보다 많으면 보유량이 0 아래(마이너스)가 될 수 있으며, 회원은 다시 모은 게임 재화로 이를 채운 뒤에 게임 재화를 사용할 수 있습니다.</p>
            </section>

            <section>
                <h2 className="text-lg font-semibold text-zinc-900 mb-3">제12조 (확률형 상품)</h2>
                <p>회사는 무작위로 결과가 정해지는 상품(알 부화 등)을 제공하는 경우, 그 종류와 획득 확률을 해당 상품을 구매하거나 이용하는 화면에서 알립니다.</p>
            </section>

            <section>
                <h2 className="text-lg font-semibold text-zinc-900 mb-3">제13조 (면책조항)</h2>
                <p>회사는 천재지변 또는 이에 준하는 불가항력으로 인하여 서비스를 제공할 수 없는 경우에는 서비스 제공에 관한 책임이 면제됩니다.</p>
                <p className="mt-2">회사는 회원의 귀책사유로 인한 서비스 이용의 장애에 대하여 책임을 지지 않습니다. 특히 회원이 백업하지 않은 데이터의 소실에 대해서는 회사가 책임지지 않습니다.</p>
            </section>

            <section>
                <h2 className="text-lg font-semibold text-zinc-900 mb-3">제14조 (분쟁해결)</h2>
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
                <p>These Terms govern the rights, obligations, responsibilities, and other necessary matters between Damso (hereinafter "Company") and members regarding the use of all mobile app services (including Scribbly, QuickPick, Until, Sync, Gisado, KineticCore, Gunline, HomeKeep, To the Sanctum, Twist Jam, Haneulbada, 뽀꼬삐 원정대, hereinafter "Service").</p>            </section>

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
                <h2 className="text-lg font-semibold text-zinc-900 mb-3">Article 9 (Paid Items)</h2>
                <p>1. "Paid Items" means in-game currency (berries, coins, etc.), bundles, feature passes such as ad removal, and similar digital content that a member buys within the Service through Google Play or App Store billing.</p>
                <p className="mt-2">2. Payment for Paid Items follows the billing policies of Google LLC (Google Play) or Apple Inc. (App Store), and the Company does not receive payment method information. The name, contents, and price of each item are shown on the purchase screen.</p>
                <p className="mt-2">3. The Company delivers Paid Items after confirming that the payment was actually completed in the relevant store. If confirmation is delayed, the item is delivered once it is confirmed.</p>
                <p className="mt-2">4. If a minor buys a Paid Item without the consent of a legal guardian, the minor or the guardian may cancel the purchase, except where applicable law provides otherwise, such as when the minor led the Company to believe that consent had been given.</p>
            </section>

            <section>
                <h2 className="text-lg font-semibold text-zinc-900 mb-3">Article 10 (Withdrawal and Refunds)</h2>
                <p>1. A member may withdraw a purchase within 7 days of buying a Paid Item. However, under Article 17(2) of the Korean Act on Consumer Protection in Electronic Commerce, withdrawal is restricted for items delivered and put into use immediately upon payment, in-game currency that has been used after delivery, and feature passes whose effect applies upon purchase; the Company notifies members of this on the purchase screen in advance.</p>
                <p className="mt-2">2. Refunds are handled through the refund process of the store where the member paid (Google Play or App Store). If a Paid Item cannot be used due to the Company's fault, the Company will help process the refund.</p>
                <p className="mt-2">3. If a member asks a store for a refund, the Company may answer that store's request with whether the purchase was delivered and the Company's opinion.</p>
            </section>

            <section>
                <h2 className="text-lg font-semibold text-zinc-900 mb-3">Article 11 (Recovery of Items on Refund or Cancellation)</h2>
                <p>1. If a purchase of a Paid Item is cancelled by refund, payment reversal, chargeback, or similar, the Company recovers the Paid Items granted by that purchase. Feature passes (such as ad removal) are deactivated.</p>
                <p className="mt-2">2. If the in-game currency to be recovered exceeds the amount the member holds, the balance may fall below zero, and the member can use in-game currency again after making up the shortfall.</p>
            </section>

            <section>
                <h2 className="text-lg font-semibold text-zinc-900 mb-3">Article 12 (Randomized Items)</h2>
                <p>Where the Company offers items whose results are determined at random (such as egg hatching), it shows their types and odds on the screen where the item is bought or used.</p>
            </section>

            <section>
                <h2 className="text-lg font-semibold text-zinc-900 mb-3">Article 13 (Disclaimer)</h2>
                <p>The Company is exempt from responsibility for service provision when unable to provide the Service due to force majeure such as natural disasters.</p>
                <p className="mt-2">The Company is not responsible for service disruptions caused by members. In particular, the Company is not responsible for loss of data that members have not backed up.</p>
            </section>

            <section>
                <h2 className="text-lg font-semibold text-zinc-900 mb-3">Article 14 (Dispute Resolution)</h2>
                <p>The Company prioritizes handling complaints and opinions submitted by members. However, if prompt handling is difficult, the Company will immediately notify members of the reason and processing schedule.</p>
            </section>
        </div>
    );
}

export default Terms;