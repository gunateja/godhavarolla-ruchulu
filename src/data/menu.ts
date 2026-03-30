export interface MenuItem {
  id: string;
  name: string;
  telugu: string;
  description: string;
  price: number;
  category: string;
  image: string;
  isVeg: boolean;
  isPopular?: boolean;
  isNew?: boolean;
  spiceLevel?: 1 | 2 | 3;
}

export const categories = [
  { id: 'all', name: 'All Items', icon: '🍽️' },
  { id: 'pickles', name: 'Pickles', icon: '🫙' },
  { id: 'sweets', name: 'Sweets', icon: '🍮' },
  { id: 'snacks', name: 'Snacks & Savories', icon: '🥟' },
];

export const menuItems: MenuItem[] = [
  // Pickles
  {
    id: 'pk-1',
    name: 'Avakai (Mango Pickle)',
    telugu: 'ఆవకాయ',
    description: 'The king of Andhra pickles — raw mangoes marinated in mustard powder, chilli, and cold-pressed sesame oil. Aged to perfection.',
    price: 250,
    category: 'pickles',
    image: '/images/avakai.png',
    isVeg: true,
    isPopular: true,
    spiceLevel: 3,
  },
  {
    id: 'pk-2',
    name: 'Gongura Pickle',
    telugu: 'గోంగూర పచ్చడి',
    description: 'Tangy sorrel leaves pickle tempered with garlic, dried red chillies and fenugreek seeds. A traditional staple.',
    price: 200,
    category: 'pickles',
    image: '/images/gongura-pickle.png',
    isVeg: true,
    spiceLevel: 2,
    isPopular: true,
  },
  {
    id: 'pk-3',
    name: 'Tomato Garlic Pickle',
    telugu: 'టమాటో వెల్లుల్లి పచ్చడి',
    description: 'Sun-dried tomatoes blended with roasted garlic and traditional spices. Perfect with hot rice and ghee.',
    price: 180,
    category: 'pickles',
    image: '',
    isVeg: true,
    spiceLevel: 2,
  },
  {
    id: 'pk-4',
    name: 'Ginger Pickle',
    telugu: 'అల్లం పచ్చడి',
    description: 'Fiery ginger pickle with a warming kick — made with fresh ginger, lemon juice and aromatic spices.',
    price: 180,
    category: 'pickles',
    image: '',
    isVeg: true,
    isNew: true,
    spiceLevel: 3,
  },

  // Sweets
  {
    id: 'sw-1',
    name: 'Pootharekulu',
    telugu: 'పూతరేకులు',
    description: 'Paper-thin rice wafers layered with pure ghee, powdered sugar, dry fruits, and cardamom — the crown jewel of Godavari sweets.',
    price: 300,
    category: 'sweets',
    image: '/images/pootharekulu.png',
    isVeg: true,
    isPopular: true,
  },
  {
    id: 'sw-2',
    name: 'Ariselu',
    telugu: 'అరిసెలు',
    description: 'Traditional rice flour discs enriched with jaggery and sesame seeds, deep-fried to golden perfection.',
    price: 150,
    category: 'sweets',
    image: '',
    isVeg: true,
  },
  {
    id: 'sw-3',
    name: 'Sunni Undalu',
    telugu: 'సున్ని ఉండలు',
    description: 'Melt-in-mouth sugar balls made with roasted Bengal gram flour (urad dal), premium ghee and cardamom.',
    price: 160,
    category: 'sweets',
    image: '',
    isVeg: true,
  },

  // Snacks & Savories
  {
    id: 'sn-1',
    name: 'Karapusa (Savory Twists)',
    telugu: 'కారపూస',
    description: 'Crispy twisted savory snack made with rice flour, sesame seeds and spices — a crunchy Godavari specialty!',
    price: 120,
    category: 'snacks',
    image: '/images/karapusa.png',
    isVeg: true,
    isPopular: true,
  },
  {
    id: 'sn-2',
    name: 'Chekkalu (Rice Crackers)',
    telugu: 'చెక్కలు',
    description: 'Paper-thin rice crackers seasoned with cumin, black pepper, and curry leaves, deep-fried for the perfect bite.',
    price: 100,
    category: 'snacks',
    image: '/images/karapusa.png', // using same image as placeholder for now
    isVeg: true,
  },
  {
    id: 'sn-3',
    name: 'Palli Chikki',
    telugu: 'పల్లి చిక్కీ',
    description: 'Crunchy peanut brittle made with organic jaggery and roasted peanuts, a perfect sweet-savory treat.',
    price: 80,
    category: 'snacks',
    image: '',
    isVeg: true,
    isPopular: true,
  }
];
