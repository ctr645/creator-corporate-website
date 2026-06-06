export const company = {
  name: 'CREATOR TECH',
  koreanName: '크레타테크',
  tagline: 'Precision Wire & EDM Solutions',
  taglineKo: '고경도·정밀 형상 가공 전문 기업',
  footerDescription:
    '와이어 가공과 방전가공(EDM) 기술을 기반으로 난삭재 및 복잡 형상 부품의 정밀 가공 솔루션을 제공합니다.',
  phone: '010-9302-6450',
  fax: '265-6450',
  email: 'hongsj6456@naver.com',
  address: '경상남도 창원시 의창구 팔용로 448',
  businessHours: '평일 09:00 – 18:00',
}

export function toTelLink(phone) {
  return `tel:${phone.replace(/[^0-9+]/g, '')}`
}

export const navLinks = [
  { id: 'about', label: '회사소개' },
  { id: 'equipment', label: '설비' },
  { id: 'products', label: '제품소개' },
  { id: 'history', label: '회사 연혁' },
  { id: 'partners', label: '협력업체' },
  { id: 'contact', label: '문의사항' },
  { id: 'location', label: '찾아오는길' },
]

export const footerLinks = [
  { id: 'about', label: '회사소개' },
  { id: 'equipment', label: '설비' },
  { id: 'products', label: '제품소개' },
  { id: 'contact', label: '문의사항' },
]
