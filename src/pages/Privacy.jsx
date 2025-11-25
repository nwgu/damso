// src/pages/Privacy.jsx (새 파일)
import Layout from '../components/Layout';

function Privacy() {
    return (
        <Layout>
            <div className="max-w-4xl mx-auto px-4 py-12">
                <h1 className="text-3xl font-bold text-gray-900 mb-8">개인정보처리방침</h1>

                <div className="prose max-w-none space-y-6 text-gray-700">
                    <section>
                        <h2 className="text-xl font-bold text-gray-900 mb-3">1. 개인정보의 처리 목적</h2>
                        <p>담소(이하 '회사')는 다음의 목적을 위하여 개인정보를 처리합니다. 처리하고 있는 개인정보는 다음의 목적 이외의 용도로는 이용되지 않으며, 이용 목적이 변경되는 경우에는 개인정보 보호법에 따라 별도의 동의를 받는 등 필요한 조치를 이행할 예정입니다.</p>
                        <ul className="list-disc pl-6 mt-2">
                            <li>서비스 제공 및 운영</li>
                            <li>회원 관리 및 본인 확인</li>
                            <li>고객 문의 및 불만 처리</li>
                            <li>서비스 개선 및 신규 서비스 개발</li>
                        </ul>
                    </section>

                    <section>
                        <h2 className="text-xl font-bold text-gray-900 mb-3">2. 수집하는 개인정보 항목</h2>
                        <p>각 앱에서 수집하는 개인정보는 앱별로 상이하며, 각 앱 내에서 별도로 고지됩니다.</p>
                        <p className="mt-2">일반적으로 수집될 수 있는 항목:</p>
                        <ul className="list-disc pl-6 mt-2">
                            <li>필수항목: 이메일, 닉네임</li>
                            <li>선택항목: 프로필 사진, 연락처</li>
                            <li>자동 수집: 기기정보, IP주소, 쿠키, 서비스 이용 기록</li>
                        </ul>
                    </section>

                    <section>
                        <h2 className="text-xl font-bold text-gray-900 mb-3">3. 개인정보의 보유 및 이용기간</h2>
                        <p>회사는 법령에 따른 개인정보 보유·이용기간 또는 정보주체로부터 개인정보를 수집 시에 동의받은 개인정보 보유·이용기간 내에서 개인정보를 처리·보유합니다.</p>
                        <ul className="list-disc pl-6 mt-2">
                            <li>회원 탈퇴 시까지 (단, 관계 법령 위반에 따른 수사·조사 등이 진행중인 경우에는 해당 수사·조사 종료 시까지)</li>
                            <li>관련 법령에 의한 정보보유 사유: 계약 또는 청약철회 등에 관한 기록 (5년), 소비자 불만 또는 분쟁처리에 관한 기록 (3년)</li>
                        </ul>
                    </section>

                    <section>
                        <h2 className="text-xl font-bold text-gray-900 mb-3">4. 개인정보의 제3자 제공</h2>
                        <p>회사는 원칙적으로 이용자의 개인정보를 외부에 제공하지 않습니다. 다만, 아래의 경우에는 예외로 합니다.</p>
                        <ul className="list-disc pl-6 mt-2">
                            <li>이용자가 사전에 동의한 경우</li>
                            <li>법령의 규정에 의거하거나, 수사 목적으로 법령에 정해진 절차와 방법에 따라 수사기관의 요구가 있는 경우</li>
                        </ul>
                    </section>

                    <section>
                        <h2 className="text-xl font-bold text-gray-900 mb-3">5. 정보주체의 권리·의무 및 행사방법</h2>
                        <p>이용자는 개인정보주체로서 다음과 같은 권리를 행사할 수 있습니다.</p>
                        <ul className="list-disc pl-6 mt-2">
                            <li>개인정보 열람 요구</li>
                            <li>오류 등이 있을 경우 정정 요구</li>
                            <li>삭제 요구</li>
                            <li>처리정지 요구</li>
                        </ul>
                        <p className="mt-2">권리 행사는 contact@damso.app 로 서면, 이메일 등을 통하여 하실 수 있으며 회사는 이에 대해 지체없이 조치하겠습니다.</p>
                    </section>

                    <section>
                        <h2 className="text-xl font-bold text-gray-900 mb-3">6. 개인정보 보호책임자</h2>
                        <p>회사는 개인정보 처리에 관한 업무를 총괄해서 책임지고, 개인정보 처리와 관련한 정보주체의 불만처리 및 피해구제 등을 위하여 아래와 같이 개인정보 보호책임자를 지정하고 있습니다.</p>
                        <div className="mt-2 bg-gray-50 p-4 rounded">
                            <p>개인정보 보호책임자: 담소</p>
                            <p>이메일: contact@damso.app</p>
                        </div>
                    </section>

                    <section>
                        <h2 className="text-xl font-bold text-gray-900 mb-3">7. 개인정보처리방침 변경</h2>
                        <p>이 개인정보처리방침은 2024년 1월 1일부터 적용되며, 법령 및 방침에 따른 변경내용의 추가, 삭제 및 정정이 있는 경우에는 변경사항의 시행 7일 전부터 공지사항을 통하여 고지할 것입니다.</p>
                    </section>

                    <div className="mt-8 text-sm text-gray-500">
                        <p>시행일자: 2024년 1월 1일</p>
                    </div>
                </div>
            </div>
        </Layout>
    );
}

export default Privacy;