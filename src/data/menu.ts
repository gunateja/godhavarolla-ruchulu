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

export interface Location {
  id: string;
  name: string;
  address: string;
  metro: string;
  stallNo: string;
  hours: string;
  lat: number;
  lng: number;
  image: string;
}

export const categories = [
  { id: 'all', name: 'All Items', icon: '🍽️' },
  { id: 'rice-bowls', name: 'Rice Bowls', icon: '🍚' },
  { id: 'snacks', name: 'Snacks & Savories', icon: '🥟' },
  { id: 'pickles', name: 'Pickles', icon: '🫙' },
  { id: 'sweets', name: 'Sweets', icon: '🍮' },
  { id: 'meals', name: 'Meals', icon: '🥘' },
  { id: 'beverages', name: 'Beverages', icon: '🥤' },
];

export const menuItems: MenuItem[] = [
  // Rice Bowls
  {
    id: 'rb-1',
    name: 'Gongura Mutton Pickle Rice',
    telugu: 'గోంగూర మటన్ పికిల్ రైస్',
    description: 'Fragrant basmati rice tossed with spicy gongura mutton pickle, topped with crispy onions and fresh curry leaves',
    price: 199,
    category: 'rice-bowls',
    image: '/images/gongura-mutton-rice.jpg',
    isVeg: false,
    isPopular: true,
    spiceLevel: 3,
  },
  {
    id: 'rb-2',
    name: 'Naatukodi Pickle Rice',
    telugu: 'నాటుకోడి పికిల్ రైస్',
    description: 'Country chicken pickle mixed with steamed rice, garnished with roasted peanuts and green chillies',
    price: 189,
    category: 'rice-bowls',
    image: '/images/naatukodi-rice.jpg',
    isVeg: false,
    isPopular: true,
    spiceLevel: 2,
  },
  {
    id: 'rb-3',
    name: 'Prawns Pickle Rice',
    telugu: 'రొయ్యల పికిల్ రైస్',
    description: 'Succulent prawns pickle layered with hot rice, drizzled with sesame oil and tempered with mustard seeds',
    price: 219,
    category: 'rice-bowls',
    image: '/images/prawns-rice.jpg',
    isVeg: false,
    spiceLevel: 2,
  },
  {
    id: 'rb-4',
    name: 'Fish Pickle Rice',
    telugu: 'చేప పికిల్ రైస్',
    description: 'Tender fish pickle combined with fluffy rice, finished with crispy garlic bits and a squeeze of lime',
    price: 209,
    category: 'rice-bowls',
    image: '/images/fish-rice.jpg',
    isVeg: false,
    spiceLevel: 2,
  },
  {
    id: 'rb-5',
    name: 'Avakai Rice Bowl',
    telugu: 'ఆవకాయ రైస్ బౌల్',
    description: 'Classic Andhra avakaya mango pickle mixed with ghee rice, accompanied by papadam and onion raita',
    price: 149,
    category: 'rice-bowls',
    image: '/images/avakai-rice.jpg',
    isVeg: true,
    isPopular: true,
    spiceLevel: 3,
  },
  {
    id: 'rb-6',
    name: 'Gongura Rice Bowl',
    telugu: 'గోంగూర రైస్ బౌల్',
    description: 'Tangy gongura (sorrel leaves) chutney rice with a side of crunchy appadam and lemon wedge',
    price: 139,
    category: 'rice-bowls',
    image: '/images/gongura-rice.jpg',
    isVeg: true,
    spiceLevel: 2,
  },

  // Snacks & Savories
  {
    id: 'sn-1',
    name: 'Karapusa (Savory Twists)',
    telugu: 'కారపూస',
    description: 'Crispy twisted savory snack made with rice flour, sesame seeds and spices — a Godavari specialty!',
    price: 120,
    category: 'snacks',
    image: '/images/karapusa.jpg',
    isVeg: true,
    isPopular: true,
  },
  {
    id: 'sn-2',
    name: 'Chekkalu (Rice Crackers)',
    telugu: 'చెక్కలు',
    description: 'Paper-thin rice crackers seasoned with cumin and black pepper, sun-dried and deep fried to perfection',
    price: 100,
    category: 'snacks',
    image: '/images/chekkalu.jpg',
    isVeg: true,
  },
  {
    id: 'sn-3',
    name: 'Vadiyalu (Fryums)',
    telugu: 'వడియాలు',
    description: 'Traditional sun-dried fryums made from urad dal batter, puffed and crispy when fried',
    price: 90,
    category: 'snacks',
    image: '/images/vadiyalu.jpg',
    isVeg: true,
    isNew: true,
  },
  {
    id: 'sn-4',
    name: 'Palli Chikki',
    telugu: 'పల్లి చిక్కీ',
    description: 'Crunchy peanut brittle made with jaggery and roasted peanuts, a perfect sweet-savory treat',
    price: 80,
    category: 'snacks',
    image: '/images/palli-chikki.jpg',
    isVeg: true,
    isPopular: true,
  },
  {
    id: 'sn-5',
    name: 'Sakinalu',
    telugu: 'సకినాలు',
    description: 'Ring-shaped crispy snack made from rice flour, hand-rolled and deep-fried — authentic Telangana flavour',
    price: 110,
    category: 'snacks',
    image: '/images/sakinalu.jpg',
    isVeg: true,
  },

  // Pickles
  {
    id: 'pk-1',
    name: 'Avakai (Mango Pickle)',
    telugu: 'ఆవకాయ',
    description: 'The king of Andhra pickles — raw mangoes marinated in mustard powder, chilli, and cold-pressed sesame oil',
    price: 250,
    category: 'pickles',
    image: '/images/avakai.jpg',
    isVeg: true,
    isPopular: true,
    spiceLevel: 3,
  },
  {
    id: 'pk-2',
    name: 'Gongura Pickle',
    telugu: 'గోంగూర పచ్చడి',
    description: 'Tangy sorrel leaves pickle tempered with garlic, dried red chillies and fenugreek seeds',
    price: 200,
    category: 'pickles',
    image: '/images/gongura-pickle.jpg',
    isVeg: true,
    spiceLevel: 2,
  },
  {
    id: 'pk-3',
    name: 'Dondakaya Pickle',
    telugu: 'దొండకాయ పచ్చడి',
    description: 'Crunchy ivy gourd pickle with a blend of traditional spices and tangy tamarind base',
    price: 180,
    category: 'pickles',
    image: '/images/dondakaya-pickle.jpg',
    isVeg: true,
    spiceLevel: 1,
  },
  {
    id: 'pk-4',
    name: 'Ginger Pickle',
    telugu: 'అల్లం పచ్చడి',
    description: 'Fiery ginger pickle with a warming kick — made with fresh ginger, lemon juice and aromatic spices',
    price: 180,
    category: 'pickles',
    image: '/images/ginger-pickle.jpg',
    isVeg: true,
    isNew: true,
    spiceLevel: 3,
  },
  {
    id: 'pk-5',
    name: 'Chinthakaya Pickle',
    telugu: 'చింతకాయ పచ్చడి',
    description: 'Raw tamarind pickle with a perfect balance of sour, spicy and pungent flavours',
    price: 190,
    category: 'pickles',
    image: '/images/chinthakaya-pickle.jpg',
    isVeg: true,
    spiceLevel: 2,
  },

  // Sweets
  {
    id: 'sw-1',
    name: 'Pootharekulu',
    telugu: 'పూతరేకులు',
    description: 'Paper-thin rice wafers layered with ghee, powdered sugar and cardamom — the crown jewel of Godavari sweets',
    price: 300,
    category: 'sweets',
    image: '/images/pootharekulu.jpg',
    isVeg: true,
    isPopular: true,
  },
  {
    id: 'sw-2',
    name: 'Ariselu',
    telugu: 'అరిసెలు',
    description: 'Traditional rice flour sweet discs enriched with jaggery and sesame seeds, deep-fried to golden perfection',
    price: 150,
    category: 'sweets',
    image: '/images/ariselu.jpg',
    isVeg: true,
  },
  {
    id: 'sw-3',
    name: 'Sunni Undalu',
    telugu: 'సున్ని ఉండలు',
    description: 'Melt-in-mouth sugar balls made with roasted Bengal gram flour, ghee and cardamom — heavenly bites!',
    price: 160,
    category: 'sweets',
    image: '/images/sunni-undalu.jpg',
    isVeg: true,
  },
  {
    id: 'sw-4',
    name: 'Pot Junnu (Baked Milk)',
    telugu: 'పాట్ జున్ను',
    description: 'A rare Godavari delicacy — soft, custard-like baked colostrum milk with a caramelised top',
    price: 180,
    category: 'sweets',
    image: '/images/pot-junnu.jpg',
    isVeg: true,
    isPopular: true,
    isNew: true,
  },

  // Meals
  {
    id: 'ml-1',
    name: 'Godavari Bhojanam',
    telugu: 'గోదావరి భోజనం',
    description: 'A complete traditional Godavari meal — rice, sambar, rasam, 2 curries, pickle, papadam, curd and sweet',
    price: 249,
    category: 'meals',
    image: '/images/godavari-bhojanam.jpg',
    isVeg: true,
    isPopular: true,
  },
  {
    id: 'ml-2',
    name: 'Non-Veg Godavari Thali',
    telugu: 'నాన్-వెజ్ గోదావరి థాలీ',
    description: 'Unlimited rice with chicken curry, fish fry, mutton pickle, rasam, dal, curd and assorted sides',
    price: 349,
    category: 'meals',
    image: '/images/nonveg-thali.jpg',
    isVeg: false,
    isPopular: true,
    spiceLevel: 2,
  },

  // Beverages
  {
    id: 'bv-1',
    name: 'Panakam',
    telugu: 'పానకం',
    description: 'Traditional jaggery lemonade with a hint of dry ginger powder, cardamom and black pepper — divine coolant',
    price: 60,
    category: 'beverages',
    image: '/images/panakam.jpg',
    isVeg: true,
  },
  {
    id: 'bv-2',
    name: 'Majjiga (Spiced Buttermilk)',
    telugu: 'మజ్జిగ',
    description: 'Refreshing churned buttermilk tempered with curry leaves, green chillies, ginger and asafoetida',
    price: 50,
    category: 'beverages',
    image: '/images/majjiga.jpg',
    isVeg: true,
    isPopular: true,
  },
  {
    id: 'bv-3',
    name: 'Filter Coffee',
    telugu: 'ఫిల్టర్ కాఫీ',
    description: 'Strong South Indian filter coffee brewed with fresh decoction and frothy hot milk, served in a traditional davara-tumbler',
    price: 40,
    category: 'beverages',
    image: '/images/filter-coffee.jpg',
    isVeg: true,
  },
];

export const locations: Location[] = [
  {
    id: 'loc-1',
    name: 'JNTU Metro Station',
    address: 'Stall No: L-30, JNTU Metro Station, KPHB Colony, Hyderabad',
    metro: 'JNTU',
    stallNo: 'L-30',
    hours: '8:00 AM – 10:00 PM',
    lat: 17.4523,
    lng: 78.3879,
    image: '/images/jntu-metro.jpg',
  },
  {
    id: 'loc-2',
    name: 'Raidurg Metro Station',
    address: 'Kiosk L4b, Raidurgam Metro Station, HITEC City, Madhapur, Hyderabad',
    metro: 'Raidurg',
    stallNo: 'L4b',
    hours: '8:00 AM – 10:00 PM',
    lat: 17.4260,
    lng: 78.3800,
    image: '/images/raidurg-metro.jpg',
  },
  {
    id: 'loc-3',
    name: 'Ameerpet Metro Station',
    address: 'Food Court, Ameerpet Metro Station, Hyderabad',
    metro: 'Ameerpet',
    stallNo: 'FC-12',
    hours: '8:00 AM – 10:00 PM',
    lat: 17.4375,
    lng: 78.4483,
    image: '/images/ameerpet-metro.jpg',
  },
  {
    id: 'loc-4',
    name: 'Miyapur Metro Station',
    address: 'Stall No: M-8, Miyapur Metro Station, Hyderabad',
    metro: 'Miyapur',
    stallNo: 'M-8',
    hours: '8:00 AM – 10:00 PM',
    lat: 17.4969,
    lng: 78.3522,
    image: '/images/miyapur-metro.jpg',
  },
];
