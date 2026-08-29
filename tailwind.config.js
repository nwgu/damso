/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,jsx}",
    ],
    theme: {
        extend: {
            // 앱 아이콘이 가만히 있을 때 천천히 숨쉬는 정도의 확대/축소.
            // 폭(1.06)과 주기(4s)만 만지면 세기가 조절된다.
            keyframes: {
                breathe: {
                    '0%, 100%': { transform: 'scale(1)' },
                    '50%': { transform: 'scale(1.06)' },
                },
            },
            animation: {
                breathe: 'breathe 4s ease-in-out infinite',
            },
        },
    },
    plugins: [],
}