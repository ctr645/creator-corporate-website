export const contactContent = {
  eyebrow: 'Contact',
  title: '문의사항',
  description:
    '제품·가공 문의 및 견적 요청을 환영합니다. 아래 연락처로 편하게 문의해 주세요.',

  notice: {
    title: '문의 안내',
    items: [
      '견적 요청 시 도면 또는 사양서를 함께 보내주시면 보다 정확한 안내가 가능합니다.',
      '긴급 문의는 전화로 연락 주시면 빠르게 대응해 드립니다.',
      '이메일 문의는 영업일 기준 1~2일 내 회신드립니다.',
    ],
  },

  channels: [
    {
      id: 'phone',
      label: '전화 문의',
      valueKey: 'phone',
      hrefType: 'tel',
      description: '평일 09:00 – 18:00',
    },
    {
      id: 'email',
      label: '이메일 문의',
      valueKey: 'email',
      hrefType: 'mailto',
      description: '도면·사양서 첨부 가능',
    },
    {
      id: 'fax',
      label: '팩스',
      valueKey: 'fax',
      hrefType: 'none',
      description: '서류 송부용',
    },
  ],
}
