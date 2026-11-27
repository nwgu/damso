// 기사도(com.damso.GisadoApp · Android com.damso.gisadoapp) 계정·데이터 삭제 안내 (2026-11-27)
// Google Play 데이터 보안의 「계정 삭제 URL」 · App Store 심사(5.1.1(v))용.
// 근거(코드): ~/Desktop/Project/Personal_Projects/Gisado/GisadoApp
//   앱 안 삭제 길: 마이 탭 → 맨 아래 「회원 탈퇴」 (MyPageScreen.handleDeleteAccount)
//   서버 삭제: supabase/functions/delete-account — study_logs · question_reports · notification_logs · profiles · auth 계정
import { useState } from 'react';
import Layout from '../components/Layout';

const MAIL = 'contact@damso.app';
const DATE = { ko: '2026년 11월 27일', en: 'November 27, 2026' };
const H = ({ children }) => <h2 className="text-lg font-semibold text-zinc-900 mb-3">{children}</h2>;
const UL = ({ children }) => <ul className="list-disc pl-6 mt-2 space-y-1">{children}</ul>;

export function GisadoDelete() {
    const [lang, setLang] = useState('ko');
    return (
        <Layout>
            <div className="max-w-4xl mx-auto px-6 py-12">
                <div className="flex items-center gap-3 mb-8">
                    <img src="/images/gisado.png" alt="" className="w-10 h-10 rounded-xl ring-1 ring-black/5" />
                    <span className="text-sm font-semibold text-zinc-500">{lang === 'ko' ? '기사도 : 정보처리기사' : 'Gisado'}</span>
                </div>
                <div className="flex flex-wrap items-center justify-between gap-3 mb-8">
                    <h1 className="text-2xl font-semibold text-zinc-900 break-keep">{lang === 'ko' ? '기사도 계정·데이터 삭제 안내' : 'Gisado Account & Data Deletion'}</h1>
                    <div className="flex bg-zinc-100 rounded-lg p-1 text-sm">
                        {['ko', 'en'].map((l) => (
                            <button key={l} onClick={() => setLang(l)}
                                className={`px-3 py-1.5 rounded-md whitespace-nowrap transition-colors ${lang === l ? 'bg-white text-zinc-900 shadow-sm' : 'text-zinc-500 hover:text-zinc-700'}`}>
                                {l === 'ko' ? '한국어' : 'English'}
                            </button>
                        ))}
                    </div>
                </div>
                <div className="space-y-8 text-zinc-600">
                    {lang === 'ko' ? (
                        <>
                            <section><p>앱 이름: <b>기사도 : 정보처리기사</b> · 개발자: <b>담소</b></p>
                                <p className="mt-2">기사도는 로그인 없이도 문제를 풀 수 있으며, Google 또는 Apple 계정으로 로그인하면 학습 기록이 서버에 저장됩니다. 언제든지 계정과 서버에 저장된 정보를 삭제할 수 있습니다.</p></section>
                            <section><H>앱 안에서 바로 삭제하기</H>
                                <ol className="list-decimal pl-6 space-y-1">
                                    <li>앱을 열고 아래 <b>마이</b> 탭으로 이동합니다.</li>
                                    <li>화면 맨 아래 <b>회원 탈퇴</b>를 누릅니다.</li>
                                    <li>안내를 확인하고 <b>탈퇴</b>를 누르면 그 자리에서 영구 삭제됩니다.</li>
                                </ol>
                                <p className="mt-2 text-sm text-zinc-400">인터넷에 연결되어 있어야 합니다.</p></section>
                            <section><H>앱을 열 수 없을 때</H>
                                <p>{MAIL} 로 로그인에 사용한 이메일 주소와 함께 「기사도 계정 삭제」를 보내 주십시오. 확인 후 7일 이내에 삭제하고 회신드립니다.</p></section>
                            <section><H>삭제되는 정보</H>
                                <UL>
                                    <li><b>바로 삭제:</b> 계정(이메일·이름), 문제 풀이 기록, 오답 노트, AI 분석 리포트, 시험 목표일, 푸시 알림 설정과 토큰, 문제 오류 신고 내역</li>
                                    <li>로그인 전에 기기에만 저장된 풀이 기록은 앱을 삭제하면 함께 지워집니다.</li>
                                    <li>Firebase Analytics 익명 통계는 개인을 식별하지 않으며 Google 정책에 따라 자동 만료됩니다.</li>
                                </UL></section>
                        </>
                    ) : (
                        <>
                            <section><p>App: <b>Gisado</b> · Developer: <b>Damso</b></p>
                                <p className="mt-2">Gisado can be used without signing in. If you sign in with Google or Apple, your study records are stored on our server. You can delete your account and the information stored on the server at any time.</p></section>
                            <section><H>Delete in the app</H>
                                <ol className="list-decimal pl-6 space-y-1">
                                    <li>Open the app and go to the <b>My</b> tab at the bottom.</li>
                                    <li>Tap <b>Delete account</b> at the bottom of the screen.</li>
                                    <li>Confirm, and your account is permanently deleted right away.</li>
                                </ol>
                                <p className="mt-2 text-sm text-zinc-400">An internet connection is required.</p></section>
                            <section><H>If you cannot open the app</H>
                                <p>Send "Gisado account deletion" to {MAIL} with the email address you signed in with. We will delete it and reply within 7 days.</p></section>
                            <section><H>What is deleted</H>
                                <UL>
                                    <li><b>Deleted immediately:</b> account (email, name), quiz records, wrong-answer notes, AI analysis reports, target exam date, push notification settings and token, question error reports</li>
                                    <li>Records stored only on the device before signing in are deleted when the app is deleted.</li>
                                    <li>Anonymous Firebase Analytics statistics do not identify you and expire automatically under Google's policy.</li>
                                </UL></section>
                        </>
                    )}
                </div>
                <div className="mt-8 text-sm text-zinc-400">
                    <p>{lang === 'ko' ? `시행일자: ${DATE.ko}` : `Effective Date: ${DATE.en}`}</p>
                </div>
            </div>
        </Layout>
    );
}
