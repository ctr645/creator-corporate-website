import edmImageA from '../assets/equipment/edm/방전기 (소딕).JPG'
import edmImageB from '../assets/equipment/edm/방전기(범용)ZNC 시리즈 JM500+AZ50DR+D500(3대).JPG'
import edmImageC from '../assets/equipment/edm/MARK21 (Sodick - 규격 300200300) 1대.jpg'
import superdrillImage from '../assets/equipment/superdrill/슈퍼드릴 스펙.JPG'
import wireImage350 from '../assets/equipment/wire/350(3대).JPG'
import wireImage500 from '../assets/equipment/wire/500(2대).JPG'
import wireImage650 from '../assets/equipment/wire/650(2대).JPG'
import wireImageZ750 from '../assets/equipment/wire/650(Z750 1대).jpg'
// import wireSpecImage from '../assets/equipment/wire/와이어기 사양.jpg'
import measurementImage from '../assets/equipment/measurement/측정기.JPG'

export const equipmentContent = {
  eyebrow: 'Equipment',
  title: '설비',
  description:
    '방전기, 슈퍼드릴, 와이어, 측정기를 기반으로 고정밀 가공과 품질 검증 체계를 운영하고 있습니다.',

  technologies: [
    {
      id: 'edm',
      name: '방전가공 (EDM)',
      subtitle: 'Electrical Discharge Machining',
      description:
        '전기 전도성이 높은 소재에 미세한 직류 펄스를 발생시켜 소재 입자를 이탈시키는 가공 기술입니다. 고경도 재료와 일반 MCT·NC 선반으로 가공이 어려운 형상에 효과적입니다.',
    },
    {
      id: 'wire-edm',
      name: '와이어 가공',
      subtitle: 'Electrical Discharge Machining',
      description:
        '전기적 방전을 이용해 금속 표면을 미세하게 가공하는 방식으로, 복잡 형상·미세 부품·고경도 재료를 높은 정밀도로 구현할 수 있습니다.',
    },
  ],

  categories: [
    {
      id: 'edm',
      nameKo: '방전기',
      nameEn: 'EDM',
      description:
        '고경도 소재 및 복잡 형상 가공에 특화된 방전기 라인업을 운영하고 있습니다.',
      specs: [
        { label: '보유 설비', value: 'Sodick + 범용 ZNC 시리즈' },
        { label: '운영 대수', value: '총 5대' },
        { label: '주요 대응', value: '고경도 소재, 복잡 형상, 정밀 방전가공' },
      ],
      images: [
        { src: edmImageA, alt: '방전기 Sodick 장비', caption: 'Sodick 방전기' },
        { src: edmImageB, alt: '범용 ZNC 시리즈 방전기', caption: '범용 ZNC 시리즈 (3대)' },
        { src: edmImageC, alt: 'MARK21 방전기', caption: 'MARK21 (규격 300×200×300) 1대' },
      ],
    },
    {
      id: 'superdrill',
      nameKo: '슈퍼드릴',
      nameEn: 'Super Drill',
      description:
        '미세 홀 가공과 전극 스타트 홀 작업에 특화된 슈퍼드릴 장비로, 깊이 있는 천공과 정밀 보조 가공을 수행합니다.',
      specs: [
        { label: '모델', value: 'EZ64C' },
        { label: '테이블 크기', value: '950 × 690 mm' },
        { label: 'X · Y축 이송거리', value: '600 × 400 mm' },
        { label: 'W축 이송거리', value: '300 mm (최대 500 mm)' },
        { label: 'Z축 이송거리', value: '500 mm (최대 600 mm)' },
        { label: '가공물 최대 높이', value: '360 mm' },
        { label: '전극봉 크기', value: 'Ø 0.08 ~ 3.0 mm (3.1 ~ 6.0 mm)' },
        { label: '물탱크', value: '일반물 120 L' },
        { label: '전격 용량', value: '단상 220 V, 2 kVA (최대 3 kVA)' },
      ],
      images: [
        {
          src: superdrillImage,
          alt: '슈퍼드릴 장비 사양 이미지',
          caption: '슈퍼드릴 장비',
        },
      ],
    },
    {
      id: 'wire',
      nameKo: '와이어',
      nameEn: 'Wire EDM',
      description:
        '와이어 방전 가공으로 복잡 형상과 미세 공차 부품을 안정적으로 생산합니다.',
      specs: [
        { label: '350급 장비', value: '3대' },
        { label: '500급 장비', value: '2대' },
        { label: '650급 장비', value: '2대 + Z750 1대' },
      ],
      images: [
        { src: wireImage350, alt: '와이어 350 장비', caption: '350급 장비 (3대)' },
        { src: wireImage500, alt: '와이어 500 장비', caption: '500급 장비 (2대)' },
        { src: wireImage650, alt: '와이어 650 장비', caption: '650급 장비 (2대)' },
        { src: wireImageZ750, alt: '와이어 Z750 장비', caption: '650 (Z750) 장비 (1대)' },
        // { src: wireSpecImage, alt: '와이어 장비 사양 이미지', caption: '와이어 장비 사양' },
      ],
    },
    {
      id: 'measurement',
      nameKo: '측정기',
      nameEn: 'Measurement',
      description:
        '가공 완료 후 정밀 측정을 통해 치수 안정성과 품질 신뢰성을 검증합니다.',
      specs: [
        { label: '모델', value: 'OLM 3020' },
        { label: '규격', value: '300 × 200 × 200 mm' },
        { label: '정밀도', value: 'Exy 3.0+L/150 μm, Ez 5.0+L/150 μm' },
        { label: '배율', value: '수동줌 30x ~ 180x' },
        { label: '최대 허용중량', value: '10 kg' },
      ],
      images: [
        { src: measurementImage, alt: '측정기 장비', caption: '측정기 (OLM 3020)' },
      ],
    },
  ],
}
