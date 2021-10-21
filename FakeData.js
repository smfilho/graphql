const UserList = [
  {
    id: 1,
    name: 'John',
    username: 'john',
    age: 20,
    nationality: 'CANADA',
    friends: [
      {
        id: 2,
        name: 'Paul',
        username: 'Paul',
        age: 20,
        nationality: 'BRAZIL',
      },
      {
        id: 5,
        name: 'Kelly',
        username: 'kelly2019',
        age: 5,
        nationality: 'CHILE',
      },
    ],
  },
  {
    id: 2,
    name: 'Paul',
    username: 'Paul',
    age: 20,
    nationality: 'BRAZIL',
  },
  {
    id: 3,
    name: 'Sarah',
    username: 'cameron',
    age: 25,
    nationality: 'INDIA',
    friends: [
      {
        id: 2,
        name: 'Paul',
        username: 'Paul',
        age: 20,
        nationality: 'BRAZIL',
      },
    ],
  },
  {
    id: 4,
    name: 'Schmidt',
    username: 'Schmidt123',
    age: 60,
    nationality: 'GERMANY',
  },
  {
    id: 5,
    name: 'Kelly',
    username: 'kelly2019',
    age: 5,
    nationality: 'CHILE',
  },
];

const MovieList = [
  {
    id: 1,
    name: 'Avengers Endgame',
    yearOfPublication: 2019,
    isInTheaters: true,
  },
  {
    id: 2,
    name: 'Interstellar',
    yearOfPublication: 2014,
    isInTheaters: true,
  },
  {
    id: 3,
    name: 'Eternals',
    yearOfPublication: 2021,
    isInTheaters: true,
  },
  {
    id: 4,
    name: 'Doctor Strange 2',
    yearOfPublication: 2022,
    isInTheaters: false,
  },
];

module.exports = { UserList, MovieList };
