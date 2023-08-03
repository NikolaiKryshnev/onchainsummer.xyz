import { Partner } from './types'
import { limited } from '../test-contracts'

const rainbowWallet: Partner = {
  slug: 'rainbow-wallet',
  name: 'Rainbow Wallet',
  url: 'https://rainbow.me/',
  description:
    'Rainbow is a community owned platform for creators to monetize their digital work.',
  brandColor: '#e9f2ff',
  icon: '/partners/rainbow-wallet/icon.png',
  aarweaveDigest: 'GjssNdA6XK7VYynkvwDem3KYwPACSU9nDWpR5rei3hw',
  twitter: '@rainbowdotme',
  drops: [
    {
      image: '/partners/rainbow-wallet/drops/drop.png',
      creator: '0xd365Ae104DA3E86EA36f268050D6e5212a42e360',
      name: 'Rainbow Drop',
      ...limited,
      type: 'erc-721',
      startDate: Date.UTC(2023, 7, 26, 13, 0, 0, 0),
      endDate: Date.UTC(2023, 7, 27, 13, 0, 0, 0),
      price: '0.0001',
    },
  ],
}

export default rainbowWallet