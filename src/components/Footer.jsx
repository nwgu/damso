// src/components/Footer.jsx
function Footer() {
    return (
        <footer className="bg-white border-t mt-20">
            <div className="max-w-6xl mx-auto px-4 py-8">
                <div className="flex flex-col md:flex-row justify-between items-center gap-4">
                    <div className="text-sm text-gray-600">
                        <p>상호: 담소</p>
                        <p>사업자등록번호: 364-17-02671</p>
                        <p>이메일: contact@damso.app</p>
                    </div>

                    <div className="flex gap-4">
                        <a href="/privacy" className="text-sm text-gray-600 hover:text-gray-900">
                            개인정보처리방침
                        </a>
                        <a href="/terms" className="text-sm text-gray-600 hover:text-gray-900">
                            이용약관
                        </a>
                        <a href="/child-safety" className="text-sm text-gray-600 hover:text-gray-900">
                            아동 안전 표준
                        </a>
                    </div>
                </div>

                <div className="text-center mt-6 text-sm text-gray-500">
                    © 2025 담소(Damso). All rights reserved.
                </div>
            </div>
        </footer>
    );
}

export default Footer;