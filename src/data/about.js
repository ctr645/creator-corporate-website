import companyImage from '../assets/company/company.jpg'

export const aboutContent = {
  eyebrow: 'About Us',
  title: '회사소개',
  description:
    'CREATOR TECH는 방전가공(EDM), 와이어 가공, 정밀 CNC 가공 기술을 바탕으로 고난도 산업 부품을 안정적으로 생산합니다.',

  greeting: {
    title: '대표 인사말',
    name: '홍세진',
    position: '대표이사',
    paragraphs: [
      '안녕하십니까. (주)크레타(CREATOR TECH) 대표 홍세진입니다.',
      '저희 CREATOR TECH는 방전가공(EDM)과 와이어 가공 기술을 중심으로, 일반 절삭이 어려운 고경도 소재와 복잡 형상을 정밀하게 가공해 왔습니다. 품질과 납기를 최우선으로 하는 운영 체계로 고객의 신뢰에 보답하고 있습니다.',
      '앞으로도 끊임없는 기술 개발과 설비 투자를 통해 더 나은 파트너가 되겠습니다. 감사합니다.',
    ],
  },

  overview: {
    title: '회사 개요',
    items: [
      { label: '회사명', value: '(주)크레타' },
      { label: '브랜드명', value: 'CREATOR TECH' },
      { label: '대표자', value: '홍세진' },
      { label: '설립일', value: '2005년 3월' },
      { label: '사업분야', value: '방전가공(EDM), 와이어 가공, 정밀 CNC 가공' },
      { label: '주요 거래처', value: '자동차 · 반도체 · 기계 부품' },
      { label: '소재지', value: '경상남도 창원시 의창구 팔용로 448' },
    ],
  },

  facilityImage: {
    src: companyImage,
    alt: '크레타 회사 전경',
    caption: '크레타 본사 및 정밀 가공 설비 전경',
  },
}
