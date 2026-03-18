// src/pages/ChildSafety.jsx
import Layout from '../components/Layout';

const ChildSafety = () => {
    return (
        <Layout>
            <div className="max-w-3xl mx-auto px-6 py-12 lg:py-16">
                <h1 className="text-3xl font-bold text-zinc-900 tracking-tight mb-2">
                    아동 안전 표준
                </h1>
                <p className="text-sm font-semibold text-zinc-400 mb-10">
                    Child Safety Standards Policy · 최종 업데이트: 2026년 3월 18일
                </p>

                <Section icon="📋" title="서비스 개요">
                    <p>Sync(싱크)는 성인 커플을 위한 1:1 일정 공유 앱입니다. 커플 코드를 통해 연결된 두 명의 사용자가 캘린더, D-Day, 리마인더를 공유합니다.</p>
                    <p>본 서비스는 아동을 대상으로 하지 않으며, 만 18세 미만의 미성년자는 서비스 이용 대상이 아닙니다.</p>
                </Section>

                <Section icon="🛡️" title="아동 성적 학대 및 착취(CSAE) 방지 정책">
                    <p>Sync(싱크)는 아동 성적 학대 콘텐츠(CSAM) 및 아동 착취에 대해 무관용 원칙을 적용합니다.</p>
                    <ul>
                        <li>아동을 성적으로 착취하거나 학대하는 콘텐츠의 생성, 업로드, 배포, 저장을 엄격히 금지합니다.</li>
                        <li>아동을 대상으로 하는 그루밍, 성적 유인, 성적 접촉 시도 등 모든 형태의 행위를 금지합니다.</li>
                        <li>위반 사항이 발견될 경우 해당 계정을 즉시 정지하고 관련 데이터를 보존하여 수사 기관에 협조합니다.</li>
                        <li>대한민국 아동·청소년의 성보호에 관한 법률 및 관련 법규를 준수합니다.</li>
                    </ul>
                </Section>

                <Section icon="🚨" title="신고 절차">
                    <p>아동 안전과 관련된 우려사항을 발견하신 경우, 아래 방법으로 즉시 신고해 주세요.</p>
                    <ul>
                        <li>앱 내 설정 화면의 문의하기를 통해 신고</li>
                        <li>이메일을 통한 직접 신고</li>
                        <li>모든 신고는 접수 후 24시간 이내에 검토를 시작합니다.</li>
                    </ul>
                    <div className="mt-4 bg-pink-50 rounded-2xl px-6 py-5 border border-pink-100">
                        <p className="text-sm font-bold text-zinc-800 mb-1">신고 및 문의</p>
                        <a href="mailto:contact@damso.app" className="text-pink-400 font-bold text-sm hover:underline">
                            contact@damso.app
                        </a>
                    </div>
                </Section>

                <Section icon="⚖️" title="법적 준수 사항">
                    <p>Sync(싱크)는 다음 법률 및 규정을 준수합니다.</p>
                    <ul>
                        <li>대한민국 아동·청소년의 성보호에 관한 법률</li>
                        <li>대한민국 정보통신망 이용촉진 및 정보보호 등에 관한 법률</li>
                        <li>Google Play 아동 안전 표준 정책</li>
                        <li>관련 국가 및 지역의 아동 보호 법규</li>
                    </ul>
                </Section>

                <Section icon="🔄" title="정책 업데이트">
                    <p>본 정책은 법률 변경 또는 서비스 운영 상 필요에 따라 수정될 수 있으며, 변경 시 본 페이지를 통해 공지합니다.</p>
                </Section>
            </div>
        </Layout>
    );
};

const Section = ({ icon, title, children }) => (
    <div className="bg-white rounded-2xl p-8 mb-5 border border-zinc-100">
        <h2 className="text-lg font-bold text-zinc-900 mb-4 flex items-center gap-3">
            <span className="w-9 h-9 rounded-xl bg-pink-50 flex items-center justify-center text-base flex-shrink-0">
                {icon}
            </span>
            {title}
        </h2>
        <div className="space-y-3 text-[15px] text-zinc-500 leading-relaxed [&_ul]:list-none [&_ul]:space-y-2 [&_ul]:mt-3 [&_li]:relative [&_li]:pl-5 [&_li]:before:content-[''] [&_li]:before:absolute [&_li]:before:left-1 [&_li]:before:top-[10px] [&_li]:before:w-1.5 [&_li]:before:h-1.5 [&_li]:before:rounded-full [&_li]:before:bg-pink-300">
            {children}
        </div>
    </div>
);

export default ChildSafety;