export const SITE_URL = 'https://www.the-crystalresidence.com'
export const SITE_NAME = 'Crystal Resort Korat'
export const DEFAULT_OG_IMAGE = '/photos/p1.1.jpg'

// Thai SEO keywords — primary + long-tail for Korat / Nakhon Ratchasima
export const KEYWORDS_TH = [
  'ที่พักโคราช',
  'โรงแรมโคราช',
  'ที่พักนครราชสีมา',
  'รีสอร์ทโคราช',
  'ที่พักโคราชใจกลางเมือง',
  'คริสตัล รีสอร์ท โคราช',
  'Crystal Resort โคราช',
  'ที่พักโคราชราคาถูก',
  'ที่พักโคราชใกล้เซ็นทรัล',
  'ที่พักโคราชใกล้เดอะมอลล์',
  'โรงแรมโคราชสำหรับครอบครัว',
  'ที่พักโคราชวิวสวย',
  'ที่พักโคราชเงียบสงบ',
  'ที่พักนครราชสีมาราคาดี',
  'โรงแรมนครราชสีมาใจกลางเมือง',
].join(', ')

export const KEYWORDS_EN = [
  'Crystal Resort Korat',
  'hotel Korat',
  'Korat hotel near The Mall',
  'resort Nakhon Ratchasima',
  'boutique resort Korat',
  'Korat city center hotel',
  'budget hotel Korat',
  'family hotel Korat',
].join(', ')

// Per-page metadata, locale-keyed. Keep titles ≤60 and descriptions ≤155 chars.
export const pageMeta = {
  '/': {
    th: {
      title: 'คริสตัล รีสอร์ท โคราช | ที่พักใจกลางเมืองนครราชสีมา',
      description:
        'Crystal Resort Korat ที่พักโคราชสไตล์โมเดิร์น ใจกลางเมืองนครราชสีมา ใกล้เซ็นทรัลและเดอะมอลล์ ห้องพักสะอาด ราคาคุ้มค่า จองออนไลน์ได้เลย',
    },
    en: {
      title: 'Crystal Resort Korat | Boutique Resort Next to The Mall Korat',
      description:
        'Crystal Resort Korat — boutique modern resort in central Nakhon Ratchasima, steps from The Mall Korat. Daily breakfast, free Wi-Fi, parking, 24h front desk.',
    },
  },
  '/rooms': {
    th: {
      title: 'ห้องพักโคราช | คริสตัล รีสอร์ท โคราช',
      description:
        'ห้องพักโคราช 4 รูปแบบ ที่ คริสตัล รีสอร์ท โคราช — Suite, Deluxe Twin, Deluxe King, Deluxe Queen ห้องสะอาด ฟรีไวไฟ ใกล้เดอะมอลล์โคราช เริ่มต้น 890 บาท',
    },
    en: {
      title: 'Rooms | Crystal Resort Korat — Boutique Resort in Korat',
      description:
        'Choose from Suite, Deluxe Twin, Deluxe King, and Deluxe Queen rooms at Crystal Resort Korat. Modern amenities, free Wi-Fi, central Nakhon Ratchasima from THB 890.',
    },
  },
  '/cafe': {
    th: {
      title: 'คริสตัล คาเฟ่ | คาเฟ่ในโคราช ใกล้เดอะมอลล์',
      description:
        'คริสตัล คาเฟ่ ในสวนของคริสตัล รีสอร์ท โคราช — เครื่องดื่ม เบเกอรี่ อาหารสดโฮมเมด วัตถุดิบจากนครราชสีมา ใกล้เดอะมอลล์โคราช',
    },
    en: {
      title: 'Crystal Café | Café in Korat next to The Mall Korat',
      description:
        'Crystal Café in the garden of Crystal Resort Korat. Drinks, bakery, fresh homemade food using ingredients from Nakhon Ratchasima. Steps from The Mall Korat.',
    },
  },
  '/gallery': {
    th: {
      title: 'แกลเลอรี่ | คริสตัล รีสอร์ท โคราช',
      description:
        'ภาพห้องพัก คาเฟ่ สวน และสิ่งอำนวยความสะดวก ของ คริสตัล รีสอร์ท โคราช — ที่พักโคราชใจกลางเมือง ใกล้เดอะมอลล์โคราช',
    },
    en: {
      title: 'Gallery | Crystal Resort Korat',
      description:
        'Browse photos of rooms, café, gardens and facilities at Crystal Resort Korat — boutique resort in central Nakhon Ratchasima, next to The Mall Korat.',
    },
  },
  '/location': {
    th: {
      title: 'ทำเลที่ตั้ง | คริสตัล รีสอร์ท โคราช ใกล้เดอะมอลล์',
      description:
        'คริสตัล รีสอร์ท โคราช ตั้งอยู่ที่ 1268/1 ถ.มิตรภาพ ใจกลางเมืองนครราชสีมา เดิน 1 นาทีถึงเดอะมอลล์โคราช ใกล้เซ็นทรัลและเทอร์มินอล 21',
    },
    en: {
      title: 'Location | Crystal Resort Korat — Next to The Mall Korat',
      description:
        'Crystal Resort Korat at 1268/1 Mittraphap Rd, central Nakhon Ratchasima — 1-min walk to The Mall Korat, near Central and Terminal 21.',
    },
  },
}

export function getPageMeta(path, locale) {
  const route = pageMeta[path] || pageMeta['/']
  return route[locale] || route.th
}
