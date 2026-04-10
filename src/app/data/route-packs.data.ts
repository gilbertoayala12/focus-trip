export interface RoutePack {
  id: string;
  city: string;
  from: string;
  to: string;
  durationMinutes: number;
  scenery: 'urban' | 'coastal' | 'nature';
  weather: 'sunny' | 'cloudy' | 'foggy' | 'rainy';
  pathPoints: { x: number; y: number }[];
}

export const ROUTE_PACKS: RoutePack[] = [
  {
    id: 'nyc-10-brooklyn',
    city: 'New York',
    from: 'Central Park',
    to: 'Brooklyn Bridge',
    durationMinutes: 10,
    scenery: 'urban',
    weather: 'cloudy',
    pathPoints: [
      { x: 0, y: 100 },
      { x: 25, y: 80 },
      { x: 50, y: 60 },
      { x: 75, y: 40 },
      { x: 100, y: 20 },
    ],
  },{
    id: 'nyc-10-deli-meat',
    city: 'New York',
    from: 'Titos Burgers',
    to: 'Iconic Taco Bell',
    durationMinutes: 10,
    scenery: 'urban',
    weather: 'cloudy',
    pathPoints: [
      { x: 0, y: 100 },
      { x: 25, y: 80 },
      { x: 50, y: 60 },
      { x: 75, y: 40 },
      { x: 100, y: 20 },
    ],
  },
  {
    id: 'nyc-25-brooklyn',
    city: 'New York',
    from: 'Central Park',
    to: 'Brooklyn Bridge',
    durationMinutes: 25,
    scenery: 'urban',
    weather: 'sunny',
    pathPoints: [
      { x: 0, y: 100 },
      { x: 25, y: 80 },
      { x: 50, y: 60 },
      { x: 75, y: 40 },
      { x: 100, y: 20 },
    ],
  },
  {
    id: 'nyc-central-brooklyn',
    city: 'New York',
    from: 'Central Park',
    to: 'Brooklyn Bridge',
    durationMinutes: 30,
    scenery: 'urban',
    weather: 'sunny',
    pathPoints: [
      { x: 0, y: 100 },
      { x: 25, y: 80 },
      { x: 50, y: 60 },
      { x: 75, y: 40 },
      { x: 100, y: 20 },
    ],
  },
  {
    id: 'sf-wharf-golden-gate',
    city: 'San Francisco',
    from: "Fisherman's Wharf",
    to: 'Golden Gate Bridge',
    durationMinutes: 45,
    scenery: 'coastal',
    weather: 'foggy',
    pathPoints: [
      { x: 0, y: 80 },
      { x: 20, y: 90 },
      { x: 50, y: 70 },
      { x: 80, y: 50 },
      { x: 100, y: 30 },
    ],
  },
];
