export interface Product {
  id: string
  name: string
  nameEn: string
  description: string
  icon?: string
  link: string
  cta: string
}

export const products: Product[] = [
  {
    id: 'keshtyar',
    name: 'کشتیار',
    nameEn: 'Keshtyar',
    description: 'سامانه هوشمند پایش و مدیریت مزرعه',
    link: 'https://keshtyar.auron.ir',
    cta: 'مشاهده محصول',
  },
]
