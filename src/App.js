import logoImage from "./assets/images/logo.png";
import storeIcon from "./assets/images/store.svg";

function App() {
  return (
    <div className="wrap">
      <header className="absolute top-0 left-0 w-full bg-white flex justify-between">
        <h1 className="px-4">
          <a className="flex px-2" href="/">
            <img className="w-[57px]" src={logoImage} alt="에이투지" />
          </a>
        </h1>
        <ul className="flex items-center px-6">
          <li className="px-4">
            <a className="" href="/">
              <span>고객지원</span>
            </a>
          </li>
          <li className="px-2">
            <a className="" href="/">
              <span>앱 다운로드</span>
            </a>
          </li>
        </ul>
      </header>
      <div className="flex justify-center items-center w-full lg:h-screen min-h-[600px] bg-[url(./assets/images/bg.png)] bg-cover bg-center">
        <section className="flex flex-col items-center gap-5">
          <h2 className="lg:text-[88px] md:text-[70px] text-[46px] text-primary-500">
            연애의 모든것, 에이투지
          </h2>
          <img src={storeIcon} alt="앱스토어 다운로드 하러가기" />
        </section>
      </div>
      <footer className="p-8">
        <ul className="md:flex items-center gap-[10px] text-body4">
          <li>굿밋 (대표자: 김민호)</li>
          <li className="text-gray-600 text-caption md:flex hidden">|</li>
          <li>사업자 등록번호: 580-19-02336</li>
          <li className="text-gray-600 text-caption md:flex hidden">|</li>
          <li>통신판매신고번호: 2025-서울광진-0496</li>
        </ul>
        <span className="flex text-gray-600 text-body4 pt-2">
          ⓒ 2025. Goodmeet All Rights reserved.
        </span>
      </footer>
    </div>
  );
}

export default App;
