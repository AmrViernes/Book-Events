export const events = [
  {
    title: 'Stars hotel',
    image: require('@/assets/images/photos/history1.svg'),
    date: '12 Jan  |  09:45 AM',
    requestStatus: 'Pending',
  },
  {
    title: 'New home',
    image: require('@/assets/images/photos/history2.svg'),
    date: '22 Aug  |  09:45 AM',
    requestStatus: 'Completed',
  },
  {
    title: 'Swimming',
    image: require('@/assets/images/photos/history3.svg'),
    date: '22 Aug  |  09:45 AM',
    requestStatus: 'Pending',
  },
  {
    title: 'Technology event',
    image: require('@/assets/images/photos/history4.svg'),
    date: '22 Aug  |  09:45 AM',
    requestStatus: 'Completed',
  },
  {
    title: 'VIP event',
    image: require('@/assets/images/photos/history5.svg'),
    date: '22 Aug  |  09:45 AM',
    requestStatus: 'Pending',
  },
  {
    title: 'Art competition',
    image: require('@/assets/images/photos/history6.svg'),
    date: '25 Dec  |  09:45 AM',
    requestStatus: 'Completed',
  },
  {
    title: ' New sport',
    image: require('@/assets/images/photos/history7.svg'),
    date: '11 May  |  09:45 AM',
    requestStatus: 'Completed',
  },
  {
    title: 'Sea view hotel',
    image: require('@/assets/images/photos/history8.svg'),
    date: '22 Aug  |  09:45 AM',
    requestStatus: 'Pending',
  },
  {
    title: 'Family restaurant',
    image: require('@/assets/images/photos/history9.svg'),
    date: '22 Aug  |  09:45 AM',
    requestStatus: 'Completed',
  },
];

export const homeEvents = [
  {
    title: 'New home',
    image: require('@/assets/images/photos/1.png'),
    dayOfMonth: 22,
    month: 'Aug',
    location: 'Cairo, Egypt',
  },
  {
    title: 'Stars hotel',
    image: require('@/assets/images/photos/2.png'),
    dayOfMonth: 12,
    month: 'Jan',
    location: 'London, UK',
  },
  {
    title: 'Swimming',
    image: require('@/assets/images/photos/3.png'),
    dayOfMonth: 10,
    month: 'May',
    location: 'Paris, France',
  },
];

export const savedEvents = [
  {
    saved: true,
    shareable: true,
    category: 'Art',
    title: 'New home',
    image: require('@/assets/images/photos/1.png'),
    dayOfMonth: 22,
    month: 'Aug',
    location: 'Cairo, Egypt',
  },
  {
    saved: true,
    shareable: true,
    category: 'Hotel',
    title: 'Stars hotel',
    image: require('@/assets/images/photos/2.png'),
    dayOfMonth: 12,
    month: 'Jan',
    location: 'London, UK',
  },
];

export const homeCategories = [
    {
      name: 'All',
      urlNormal: require('@/assets/images/icons/All-normal.svg'),
      urlPressed: require('@/assets/images/icons/All-pressed.svg'),
    },
    {
      name: 'Restaurant',
      urlNormal: require('@/assets/images/icons/restaurant-normal.svg'),
      urlPressed: require('@/assets/images/icons/restaurant-pressed.svg'),
    },
    {
      name: 'Fashion',
      urlNormal: require('@/assets/images/icons/fashion-normal.svg'),
      urlPressed: require('@/assets/images/icons/fashion-pressed.svg'),
    },
    {
      name: 'Sport',
      urlNormal: require('@/assets/images/icons/sport-normal.svg'),
      urlPressed: require('@/assets/images/icons/sport-pressed.svg'),
    },
  ];

 export const searchCategories = [
   {
     name: 'Transport',
     urlNormal: require('@/assets/images/icons/transport-normal.svg'),
     urlPressed: require('@/assets/images/icons/transport-pressed.svg'),
   },
   {
     name: 'Restaurant',
     urlNormal: require('@/assets/images/icons/restaurant-normal.svg'),
     urlPressed: require('@/assets/images/icons/restaurant-pressed.svg'),
   },
   {
     name: 'Fashion',
     urlNormal: require('@/assets/images/icons/fashion-normal.svg'),
     urlPressed: require('@/assets/images/icons/fashion-pressed.svg'),
   },
   {
     name: 'Sport',
     urlNormal: require('@/assets/images/icons/sport-normal.svg'),
     urlPressed: require('@/assets/images/icons/sport-pressed.svg'),
   },
   {
     name: 'Business',
     urlNormal: require('@/assets/images/icons/business-normal.svg'),
     urlPressed: require('@/assets/images/icons/business-normal.svg'),
   },
   {
     name: 'Art',
     urlNormal: require('@/assets/images/icons/art-normal.svg'),
     urlPressed: require('@/assets/images/icons/art-pressed.svg'),
   },
   {
     name: 'Family',
     urlNormal: require('@/assets/images/icons/family-normal.svg'),
     urlPressed: require('@/assets/images/icons/family-pressed.svg'),
   },
   {
     name: 'Hotels',
     urlNormal: require('@/assets/images/icons/hotels-normal.svg'),
     urlPressed: require('@/assets/images/icons/hotels-pressed.svg'),
   },
   {
     name: 'Music',
     urlNormal: require('@/assets/images/icons/music-normal.svg'),
     urlPressed: require('@/assets/images/icons/music-pressed.svg'),
   },
   {
     name: 'Cars',
     urlNormal: require('@/assets/images/icons/cars-normal.svg'),
     urlPressed: require('@/assets/images/icons/cars-normal.svg'),
   },
   {
     name: 'Travel',
     urlNormal: require('@/assets/images/icons/travel-normal.svg'),
     urlPressed: require('@/assets/images/icons/travel-normal.svg'),
   },
   {
     name: 'Cinema',
     urlNormal: require('@/assets/images/icons/cinema-normal.svg'),
     urlPressed: require('@/assets/images/icons/cinema-normal.svg'),
   },
 ]; 

export const notificationsData = [
  {
    id: 1,
    icon: 'calendar',
    title: 'Upcoming event',
    message: '“City Meeting” is coming soon!',
    date: '3 minutes ago',
  },
  {
    id: 2,
    icon: 'check',
    title: 'Success message',
    message: 'Your request to join was sent successfully',
    date: '2 hours ago',
  },
  {
    id: 3,
    icon: 'check',
    title: 'Success message',
    message: 'Your request to join was sent successfully',
    date: '1 week ago',
  },
  {
    id: 4,
    icon: 'calendar',
    title: 'Upcoming event',
    message: "Book Event” is coming soon! Don't miss out!",
    date: '25 days later',
  },
  {
    id: 5,
    icon: 'check',
    title: 'Success message',
    message: 'Your request to join was sent successfully',
    date: '7 hours ago',
  },
  {
    id: 6,
    icon: 'calendar',
    title: 'Upcoming event',
    message: "“Party at Hilton” is coming soon! Don't miss out!",
    date: '4 days later',
  },
  {
    id: 7,
    icon: 'check',
    title: 'Success message',
    message: 'Your request to join was sent successfully',
    date: '7 hours ago',
  },
];

export const Languages = [
  {
    name: 'English',
    code: 'en',
  },
  {
    name: 'French',
    code: 'fr',
  },
  {
    name: 'Spanish',
    code: 'es',
  },
  {
    name: 'العربية',
    code: 'ar',
  },
  {
    name: 'German',
    code: 'de',
  },
];