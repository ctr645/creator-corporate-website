import edmImage from '../assets/products/edm/방전.JPG'
import wireImage from '../assets/products/wire/와이어.JPG'
import wireCollageImage from '../assets/products/wire/와이어사진.JPG'
import shapeImage from '../assets/products/shape/이형상.JPG'


export const productsContent = {
  eyebrow: 'Products',
  title: '제품소개',
  description:
    '와이어·EDM 및 정밀 CNC 가공 부품을 다양한 산업 분야에 설계·가공·납품합니다.',

    items: [
      {
        id: 'edm',
        name: '방전 가공',
        category: 'EDM',
        description:
          '고경도 재료 및 복잡 형상의 정밀 가공에 적용되는 방전가공 기술입니다.',
        image: edmImage,
        applications: ['정밀 금형', '고경도 소재', '복잡 형상 가공'],
      },
    
      {
        id: 'wire',
        name: '와이어 가공',
        category: 'Wire EDM',
        description:
          '전기적 방전을 이용하여 미세하고 복잡한 형상을 고정밀로 가공합니다.',
        image: wireImage,
        applications: ['정밀 부품', '미세 가공', '고경도 재료'],
      },
    
      {
        id: 'wire-collage',
        name: '와이어 가공 사례',
        category: 'Wire Processing',
        description:
          '다양한 와이어 가공 사례 및 정밀 가공 결과물을 확인할 수 있습니다.',
        image: wireCollageImage,
        applications: ['다품종 가공', '정밀 절삭', '산업 부품'],
      },
    
      {
        id: 'shape',
        name: '이형상 가공',
        category: 'Custom Shape',
        description:
          '특수 형상 및 난이도 높은 정밀 형상 가공을 수행합니다.',
        image: shapeImage,
        applications: ['특수 형상', '맞춤 제작', '정밀 산업 부품'],
      },
    ]
}
