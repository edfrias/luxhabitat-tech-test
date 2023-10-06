import { HouseAvailability } from '../components/Types/types';

export default [
  {
    id: 0,
    houseImages: ['https://source.unsplash.com/random/325x245/?house'],
    houseName: 'Palm Jumeriah',
    houseAvailability: HouseAvailability.READY,
    housePrice: 'Price on application',
    houseHasPrice: false,
    houseSpecs: 'Penthouse · 4 beds · 9,222 sq. ft.',
  },
  {
    id: 1,
    houseImages: ['https://source.unsplash.com/random/325x245/?house'],
    houseName: 'The Lakes',
    houseAvailability: HouseAvailability.READY,
    housePrice: 'AED 42,500,000',
    houseHasPrice: true,
    houseSpecs: 'Villa · 6 beds · 11,116 sq. ft.',
  },
  {
    id: 2,
    houseImages: ['https://source.unsplash.com/random/325x245/?house'],
    houseName: 'Bussiness Bay',
    houseAvailability: HouseAvailability.NOT_READY,
    housePrice: 'AED 183,625,000',
    houseHasPrice: true,
    houseSpecs: 'Penthouse · 4 beds · 19,851 sq. ft.',
  },
];
