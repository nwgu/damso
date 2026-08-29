# 담소 (damso) — 앱 소개 홈페이지 겸 **앱들이 의존하는 정적 파일 서버**

`https://www.damso.app` · Vite(rolldown) + React 19 + Tailwind 3 + react-router-dom 7 · Vercel.
`main` 에 push 하면 자동 배포된다 (1분 안쪽. 실제로 재봤다).

```bash
npm run dev      # 로컬
npm run build    # dist/
npm run lint
```

---

## ⚠ 이 레포는 홈페이지가 절반이고, **나머지 절반이 앱의 런타임 의존성**이다

`public/` 밑의 파일 두 종류는 **출시된 앱이 실제로 물어보는 값**이다.
사이트 디자인을 고치는 감각으로 건드리면 앱이 깨진다.

| 파일 | 누가 읽나 | 잘못 건드리면 |
|---|---|---|
| `public/app-ads.txt` | **AdMob 크롤러** | **모든 앱**의 광고 인증이 깨진다 (게시자 단위라 공유한다) |
| `public/<앱>/version.json` | **앱 본체**가 켤 때마다 | 값이 앞서 나가면 **전원이 게임을 못 한다** |

---

## app-ads.txt — 게시자 단위다. 앱마다 있는 게 아니다

```
google.com, pub-7870010433084022, DIRECT, f08c47fec0942fa0
```

59바이트 · 1줄 · LF · BOM 없음. **담소의 모든 앱이 이 한 줄을 공유한다.**
그래서 앱을 새로 내도 **이 파일은 손댈 게 없다.**

### ⚠ AdMob 이 "일치하지 않는다" 고 해도 대개 파일 문제가 아니다

건라인 게시 당일(2026-08-29) `AdMob > 앱 > 앱 스토어 추가 > 3 앱 인증` 에서 이게 떴다:

> app-ads.txt 파일을 설정했지만 세부정보가 AdMob 계정의 정보와 일치하지 않는 것 같습니다.

**전부 재봤고 우리 쪽은 다 맞았다.** 고치기 전에 이 다섯 개부터 확인할 것:

```bash
curl -s https://www.damso.app/app-ads.txt | xxd            # 바이트로 볼 것 (BOM·CRLF·공백)
curl -sA "Google-adstxt" -o - -w "\n%{http_code} %{content_type}\n" \
     https://www.damso.app/app-ads.txt                     # 200 text/plain
curl -s https://www.damso.app/robots.txt                   # Google-adstxt 를 막지 않는가
curl -sD- -o /dev/null https://damso.app/app-ads.txt       # apex 는 307 로 www 한 번만
# 그리고 Play 등록정보의 "개발자 웹사이트" 가 https://www.damso.app/ 인가
```

다 맞는데도 실패로 뜨면 **크롤 시점 문제다.** 구글은 스토어 연결 뒤 자기 일정으로 긁어가고
**최대 24시간** 걸린다. 게시 당일에는 새 등록정보가 아직 구글 색인에 안 잡혀 있을 수 있다.
**`업데이트 확인` 을 누르고 하루 기다린다.**

> ⚠ **이때 파일을 "고쳐보는" 게 제일 위험하다.** 게시자 단위라 이미 인증을 통과한 앱들이
> 같이 깨진다. 키네틱코어가 같은 파일로 통과해 있다는 게 곧 **파일은 무죄라는 증거**다.

### robots.txt 에 `Google-adstxt` 를 명시한 이유

`vercel.json` 이 `/(.*)` 를 전부 `index.html` 로 rewrite 한다(SPA). 명시하지 않으면
**`robots.txt` 요청에도 HTML 이 돌아가서** 크롤러가 헷갈린다. 파일 안 주석에도 적어뒀다.
같은 이유로 `public/` 에 실제 파일이 있는 경로만 정상 응답한다 — **새 정적 파일은 반드시
`public/` 밑에 두고, `Content-Type` 이 `text/plain` 인지 배포 뒤에 확인할 것.**

---

## version.json — 강제 업데이트. **앞서 나가면 전원이 갇힌다**

```
public/<앱>/version.json     {"latest": <version code>, "message": ""}
```

앱은 켤 때 이걸 받아서 **`latest > 내 version code` 이면 업데이트 창을 띄우고 막는다**
(`message` 가 비면 기본 문구). 지금 값:

| 앱 | latest |
|---|---|
| `kineticcore` | 4 |
| `homekeep` | 2 |
| `gunline` | 2 |

### ⚠ 올리는 순서가 정해져 있다

```
1. 스토어에 새 version code 를 올린다
2. 그게 실제로 "게시됨" 이 된 걸 확인한다        ← 여기까지 하고
3. 그제서야 version.json 의 latest 를 올린다
```

**먼저 올리면 받을 수 있는 버전이 없는 채로 전원이 앱을 못 쓴다.**
**단계적 출시(%) 중에도 올리면 안 된다** — 아직 못 받는 사람들이 그대로 갇힌다.

> 그래서 게시 직후에는 `latest == 방금 게시한 code` 가 정상이다. 그 상태에서는 아무에게도
> 창이 안 뜨고, **다음 버전을 게시한 뒤에** 올려야 그때 강제 업데이트가 걸린다.
> (건라인 2026-08-29: 게시 확인 후 `latest: 2` — 현재 빌드와 같다)

배포됐는지는 이걸로 본다:

```bash
curl -s https://www.damso.app/gunline/version.json
```

---

## 새 앱을 낼 때

1. `src/data/apps.json` 에 **id 를 이어서** 추가. `playStore` 는 **빈 문자열로 둔다**
   → `AppCard` 가 `Coming Soon` 배지를 띄운다 (두 스토어가 다 비었을 때만)
2. `public/images/<icon>.png` 추가
3. **`src/pages/Privacy.jsx` 와 `Terms.jsx` 의 앱 이름 나열에 추가.** 손으로 적혀 있고
   **`Privacy.jsx` 는 한 곳이 아니다** — 광고 제공·애널리틱스 위탁 등 게임 3종을 나열하는
   자리가 여러 군데다 (`grep -n 건라인 src/pages/Privacy.jsx` 로 세어볼 것).
   방침에 앱 이름이 빠지면 스토어 심사에서 걸린다.
   `ChildSafety.jsx` 는 앱 이름을 안 쓴다 — 건드릴 필요 없다
4. AdMob 앱/광고 단위를 만든다 (`app-ads.txt` 는 그대로 둔다)
5. **게시된 뒤에** `public/<앱>/version.json` 을 만들고 `playStore` 링크를 채운다

`apps.json` 은 **추가 순서(id 오름차순)를 유지한다.** 화면에서만 `App.jsx` 가 뒤집어
최신순으로 보여준다 — 파일을 손으로 재정렬하면 새 앱을 넣을 때마다 헷갈린다.

---

## 구조

```
src/
  App.jsx              앱 목록 (apps.json 을 id 내림차순으로 보여준다)
  main.jsx             라우트 4개: / · /privacy · /terms · /child-safety
  data/apps.json       앱 표 — 이 파일 하나가 목록의 전부다
  components/          AppCard(Coming Soon 분기 포함) · Layout · Footer
  pages/               Privacy · Terms · ChildSafety
public/
  app-ads.txt          ⚠ 게시자 단위. 모든 앱이 공유한다
  robots.txt           ⚠ Google-adstxt 명시 허용 (SPA rewrite 때문)
  <앱>/version.json    ⚠ 강제 업데이트. 게시 뒤에만 올린다
  images/              앱 아이콘
vercel.json            SPA rewrite — /(.*) -> /index.html
```

## 앱 현황 (2026-08-29)

| 앱 | 분류 | Play | 비고 |
|---|---|---|---|
| 끄적이 · 찍먹 · until. · Sync · 기사도 | 생산성/도구/교육 | 게시 | |
| 키네틱코어 | 게임 | 게시 | 광고 인증 통과 |
| **건라인** | 게임 | **2026-08-29 게시** | **app-ads.txt 인증 대기 중** |
| 집지키기 | 게임 | 게시 | |

iOS 는 아직 하나도 없다 (`appStore` 가 전부 빈 문자열).
