import React, { useState } from 'react';
import logoImage from "../../assets/images/logo.png";
import clovaImage from "../../assets/images/clova.png";
import testImage from "../../assets/images/test.png";
import qrcodeImage from "../../assets/images/qrcode.png";

function Main() {
  const [isShow, setIsShow] = useState(false);

  return (
    <div className="wrap">
      <header className="absolute top-0 left-0 w-full bg-white flex justify-between">
        <h1 className="md:px-4">
          <a className="flex px-2" href="/">
            <img className="w-[57px]" src={logoImage} alt="딥플" />
          </a>
        </h1>
        <div className="flex gap-4 items-center px-3 md:px-6 whitespace-nowrap">
          <a className="no-underline" href="mailto:support@deepple.co.kr">
            <span>고객지원</span>
          </a>
          <button type='button' onClick={() => setIsShow(true)}>
            <span>앱 다운로드</span>
          </button>
        </div>
      </header>
      <div className="flex flex-col">
        <section className="w-full bg-[url(./assets/images/bg.png)] bg-cover bg-center">
          <div className="flex flex-col justify-center items-center lg:h-screen min-h-[600px] bg-black/30">
            <h2 className="title lg:text-[88px] md:text-[70px] text-[46px] text-white">
              가볍지 않게, 깊게. 딥플
            </h2>
            <button className="p-4 w-[200px] bg-white text-[20px] font-semibold rounded-full" onClick={() => setIsShow(true)}>앱 다운로드</button>
          </div>
        </section>
        <section className="flex flex-col pt-[100px] items-center gap-[5px] bg-gray-100">
          <h2 className="lg:text-[48px] md:text-[42px] text-[36px] font-bold text-black-500">
            연애가치관 테스트
          </h2>
          <p className='lg:text-[24px] md:text-[20px] text-[16px] text-gray-500 text-center'>
            4개 영역, 9개 문항을 통해<br />
            나의 연애가치관을 알아보세요
          </p>
          <img className="pt-[50px] lg:w-[530px] w-[360px]" src={testImage} alt="테스트 화면" />
        </section>
        <section className="flex flex-col pt-[100px] items-center gap-[5px] bg-black-500">
          <h2 className="lg:text-[48px] md:text-[42px] text-[36px] font-bold text-white">
            나의 연애가치관
          </h2>
          <p className='lg:text-[24px] md:text-[20px] text-[16px] text-gray-300 text-center'>
            6가지 페르소나 중 나의 연애가치관은?
          </p>
          <img className="lg:w-[398.5px] w-[360px]" src={clovaImage} alt="유형 이미지" />
        </section>
        {/* 
        <section className="flex flex-col items-center gap-5">
          <h2 className="title lg:text-[88px] md:text-[70px] text-[46px] text-primary-500">
            나의 연애가치관
          </h2>
          <p>6가지 페르소나 중 나의 연애가치관은?</p>
        </section>
        <section className="flex flex-col items-center gap-5">
          <h2 className="title lg:text-[88px] md:text-[70px] text-[46px] text-primary-500">
            나의 이상형 추천
          </h2>
          <p>가치관이 통하는 이상형을 추천 받으세요</p>
        </section> */}
      </div>
      <footer className="px-4 md:px-8 py-8">
        <ul className="flex items-center gap-[15px] text-gray-500 text-body4">
          <li>
            <a href="/privacy">개인정보 처리방침</a>
          </li>
          <li>
            <a href="/terms">이용약관</a>
          </li>
        </ul>
        <ul className="md:flex items-center gap-[10px] text-body3 pt-1">
          <li>주식회사 딥플랩스 (대표자: 김민호)</li>
          <li className="text-gray-600 text-caption md:flex hidden">|</li>
          <li>사업자 등록번호: 334-86-004048</li>
          <li className="text-gray-600 text-caption md:flex hidden">|</li>
          <li>통신판매신고번호: 2026-서울광진-0028</li>
        </ul>
        <span className="flex text-gray-600 text-caption pt-3">
          ⓒ 2026. Goodmeet All Rights reserved.
        </span>
      </footer>
      {isShow && (
        <div className='flex justify-center items-center absolute top-0 left-0 right-0 bottom-0'>
          <div className='flex flex-col justify-center items-center gap-[20px] bg-white rounded-lg p-6 pb-12'>
            <div className='flex w-full justify-end'>
              <button type="button" onClick={() => setIsShow(false)}>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20" width="16" height="16">
                  <path fill="#3A3A3C" fill-rule="evenodd" d="M1.057 1.057c.52-.52 1.365-.52 1.886 0L10 8.114l7.057-7.057a1.333 1.333 0 1 1 1.886 1.886L11.885 10l7.058 7.057a1.333 1.333 0 1 1-1.886 1.886L10 11.886l-7.057 7.057a1.333 1.333 0 0 1-1.886-1.886L8.114 10 1.057 2.943a1.333 1.333 0 0 1 0-1.886" clip-rule="evenodd"></path>
                </svg>
              </button>
            </div>
            <span className='flex text-[18px] text-center px-12'>
              QR 코드를 휴대폰으로 스캔하여<br />
              딥플 앱을 다운로드 하세요
            </span>
            <img className='w-[200px]' src={qrcodeImage} alt="QR Code" />
          </div>
        </div>
      )}
    </div>
  );
}

export default Main;
