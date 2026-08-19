# 약관 · 방침 유지보수 안내

이 사이트는 담소의 **모든 앱이 공유하는** 법적 문서를 호스팅한다.
앱을 새로 내거나 기존 앱의 데이터 처리 방식을 바꾸면 **여기부터 고쳐야 한다.**
Play Console 에 제출한 내용과 이 문서가 어긋나면 심사 반려·게시 중단 사유가 된다.

---

## 어디에 무엇이 있나

| 문서 | 경로 | URL | 적용 범위 |
|---|---|---|---|
| 개인정보처리방침 | `src/pages/Privacy.jsx` | `/privacy` | 전 앱 공용 (앱별 항목을 나열) |
| 이용약관 | `src/pages/Terms.jsx` | `/terms` | 전 앱 공용 (앱 목록을 나열) |
| 아동 안전 표준 | `src/pages/ChildSafety.jsx` | `/child-safety` | **Sync 전용** |
| 앱 목록 | `src/data/apps.json` | `/` | 홈 카드 |
| 앱 아이콘 | `public/images/*.png` | — | 512x512 PNG (RGBA) |

`ChildSafety` 는 Sync 한정 문서라 다른 앱을 추가해도 손댈 필요가 없다.
푸터 링크에서는 주석 처리되어 있고 `/child-safety` 로 직접 접근한다.

---

## 앱을 새로 추가할 때 체크리스트

한 군데만 빠뜨려도 스토어 심사에서 걸린다. 순서대로 전부 확인할 것.

- [ ] `public/images/<앱>.png` — **512x512 RGBA**. 스토어용 아이콘을 그대로 쓰면 규격이 맞는다
- [ ] `src/data/apps.json` — `id`(다음 번호) · `name` · `category` · `description` · `icon` · `playStore`
      - 출시 전이면 `playStore` 를 **빈 문자열로 둔다** → 카드가 자동으로 `Coming Soon` 으로 뜬다.
        미리 URL 을 넣으면 출시 전까지 404 로 연결된다
      - 출시 후 `https://play.google.com/store/apps/details?id=<패키지명>` 을 채운다
- [ ] `src/pages/Privacy.jsx` — **한국어와 영어 양쪽** `2) 앱 별 수집 항목` 에 추가
- [ ] `src/pages/Terms.jsx` — **한국어와 영어 양쪽** 적용 범위 앱 목록에 이름 추가
- [ ] 시행일자 갱신 (아래 규칙)
- [ ] `npm run lint && npm run build` 통과 확인
- [ ] 브라우저로 `/privacy` `/terms` 를 실제로 열어 렌더링 확인

### 한/영 동기화가 실제로 깨진 적이 있다

2026-08-19 점검에서 이런 것들이 나왔다. 전부 "한쪽만 고치고 반대쪽을 잊어서" 생긴 문제다.

- 개인정보처리방침 **영문판에 Sync 가 통째로 빠져 있었다.**
  데이터를 가장 많이 수집하는 앱(이메일·이름·프로필 사진·일정·푸시 토큰)이
  영문 이용자에게는 고지되지 않는 상태였다
- 이용약관 **영문판에도 Sync 가 빠져 있었다**
- 개인정보처리방침 시행일자가 한국어 `2026년 5월 21일` / 영문 `December 09, 2025` 로 달랐다
- 기사도 항목의 라벨이 두 번 출력되고 있었다 (`기사도(Gisado):기사도(Gisado):...`)

**한쪽 언어만 고치고 넘어가지 말 것.** 이 파일들은 한 파일 안에 `PrivacyKo` / `PrivacyEn`,
`TermsKo` / `TermsEn` 함수가 나란히 있어서 한쪽만 눈에 들어오기 쉽다.

빠진 게 없는지 빠르게 보는 법:

```bash
# 앱 이름이 한/영 양쪽에 다 있는지
grep -c "Sync" src/pages/Privacy.jsx      # 한국어 1 + 영문 1 = 2 이상이어야 한다
grep -n "font-medium text-zinc-900\">" src/pages/Privacy.jsx   # 앱별 항목 라벨 전부 나열
```

---

## 시행일자 규칙

- 문서 내용을 바꾸면 **시행일자를 그날로 갱신하고, 한/영을 같은 날로 맞춘다**
- 개인정보처리방침은 **본문 7항에도 날짜가 한 번 더 박혀 있다.** 상단 표기만 고치면 어긋난다
- 방침 7항이 "변경사항 시행 7일 전부터 공지" 를 약속하고 있다.
  이용자 권리에 영향을 주는 변경(수집 항목 추가, 제3자 제공 등)이라면 그 유예를 지킬 것.
  앱 이름을 목록에 추가하는 정도는 해당하지 않는다

현재 값 (2026-08-19 기준):

| 문서 | 시행일자 |
|---|---|
| 개인정보처리방침 | 2026년 8월 19일 / August 19, 2026 |
| 이용약관 | 2026년 8월 19일 / August 19, 2026 |
| 아동 안전 표준 | 2026년 3월 18일 (Sync 전용, 별도 관리) |

---

## 앱별 수집 현황 (요약)

방침 본문의 요약이다. **본문을 고치면 이 표도 같이 고칠 것.**

| 앱 | 패키지 | 서버 수집 | 비고 |
|---|---|---|---|
| 끄적이 | `com.kkeujeogiapp` | 없음 | 기기 내 저장만 |
| 찍먹 | `com.damso.jjikmeokapp` | 없음 | 기기 내 저장만 |
| until. | `com.damso.untilapp` | 없음 | 기기 내 저장만 |
| Sync | `com.damso.SyncApp` | **있음** | 이메일·이름·프로필 사진·커플 연결·일정·푸시 토큰 |
| 기사도 | `com.damso.gisadoapp` | **있음** | 이메일·이름·학습 기록·FCM 토큰 · Gemini API · Firebase Analytics |
| 키네틱코어 | `com.damso.kineticcore` | 없음 | **권한 0개** (INTERNET 조차 없음). 기기 내 `records.cfg` 만 |

---

## 릴리즈 배포할 때마다 재확인

**앱을 업데이트할 때마다 아래를 훑는다.** 코드가 바뀌었는데 방침이 그대로면 그때부터 어긋난다.

| 앱에 이런 변경이 있었다면 | 고쳐야 하는 것 |
|---|---|
| 권한 추가 (인터넷·위치·카메라·저장소 등) | Privacy 앱별 항목 · Play 데이터 안전 양식 |
| 광고 SDK(AdMob 등) 도입 | Privacy(광고 ID·기기 ID 수집 명시) · Play 광고 선언 · 콘텐츠 등급 |
| 인앱 결제 도입 | Terms(결제·환불 조항) · Play 콘텐츠 등급(디지털 구매) |
| 분석·크래시 리포트(Firebase 등) 추가 | Privacy(익명 통계 수집 명시) · Play 데이터 안전 |
| 로그인·계정 도입 | Privacy(수집 항목·보유 기간) · Terms(회원 조항) · Play 앱 액세스 권한 |
| 서버 저장·클라우드 세이브·랭킹 추가 | Privacy(서버 수집으로 전환) · Play 데이터 안전 |
| 외부 API 로 데이터 전송 | Privacy 제3자 제공/처리위탁 조항 |
| 앱 이름·패키지·카테고리 변경 | `apps.json` · Privacy · Terms 전부 |
| 앱 서비스 종료 | Privacy·Terms 목록에서 제거 · `apps.json` 에서 제거 |

각 앱 저장소에도 같은 취지의 문서가 있으면 서로 가리키게 해둘 것.
예: 키네틱코어는 `fun/store/app_content.md` 의 `재확인 트리거` 절이 이 문서와 짝을 이룬다.

### 권한이 안 늘었는지 확인하는 법 (안드로이드)

```bash
AAPT=$(ls "$HOME/Library/Android/sdk/build-tools/"*/aapt2 | tail -1)
"$AAPT" dump badging <릴리즈>.apk | grep -iE "uses-permission"
```

권한 목록이 그대로면 개인정보 관련 선언은 대개 손댈 필요가 없다.
**권한이 하나라도 늘었으면 위 표를 처음부터 다시 볼 것.**

---

## Play Console 에 넣는 URL

| 콘솔 항목 | 값 |
|---|---|
| 개인정보처리방침 | `https://<도메인>/privacy` |
| 이용약관 (선택) | `https://<도메인>/terms` |
| 아동 안전 표준 (Sync 만) | `https://<도메인>/child-safety` |

배포는 Vercel (`vercel.json`). `main` 에 푸시하면 반영된다.
**방침 URL 은 Play 심사가 실제로 접속해 확인하므로, 스토어 제출 전에 배포가 끝나 있어야 한다.**

---

## 확인 명령

```bash
npm ci
npm run lint
npm run build
npx vite preview --port 4173     # /privacy, /terms 를 직접 열어볼 것
```
