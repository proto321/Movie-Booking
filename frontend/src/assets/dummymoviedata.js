// src/data/moviesData.js
import FM1 from "../assets/FM1.png"
import FM2 from "../assets/FM2.png"
import FM3 from "../assets/FM3.png"
import FM4 from "../assets/FM4.png"
import FM5 from "../assets/FM5.png"
import FM6 from "../assets/FM6.png"

import FMD1 from "../assets/FMD1.png"
import FMD2 from "../assets/FMD2.png"
import FMP1 from "../assets/FMP1.png"
import FMC1 from "../assets/FMC1.png"
import FMC2 from "../assets/FMC2.png"
import FMC3 from "../assets/FMC3.png"



const movies = [
  {
    id: 1,
    title: "Obsession",
    img: FM1,
    duration: "2h 10m",
    category: "Thriller",
    rating: "8.0",
    genre: "Psychological Thriller",
    price: 250,
    synopsis:
      "A gripping psychological thriller where a successful writer becomes dangerously obsessed with a mysterious woman, leading him into a maze of secrets, deception, and betrayal.",

    director: {
      name: "Ava Mitchell",
      img: FMD1,
    },

    producer: {
      name: "Silver Moon Studios",
      img: FMP1,
    },

    cast: [
      { name: "Ethan Brooks", role: "Daniel Reed", img: FMC1 },
      { name: "Sophia Carter", role: "Elena Hart", img: FMC2 },
      { name: "Michael Ross", role: "Detective Stone", img: FMC3 },
    ],

    slots: [
      { time: "2026-08-01T10:00:00+05:30", audi: "Audi 1" },
      { time: "2026-08-01T14:00:00+05:30", audi: "Audi 2" },
      { time: "2026-08-01T19:00:00+05:30", audi: "Audi 3" },
      { time: "2026-08-02T11:00:00+05:30", audi: "Audi 1" },
      { time: "2026-08-02T16:00:00+05:30", audi: "Audi 2" },
    ],

    trailer: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
  },

  {
    id: 2,
    title: "Spider-Man: Brand New Day",
    img: FM2,
    duration: "2h 15m",
    category: "Action",
    rating: "8.8",
    genre: "Action / Superhero",
    price: 300,

    synopsis:
      "Peter Parker faces a fresh beginning after life-changing events. New villains emerge while Spider-Man struggles to balance responsibility, friendship, and heroism.",

    director: {
      name: "Jon Watts",
      img: FMD2,
    },

    producer: {
      name: "Marvel Studios",
      img: FMP1,
    },

    cast: [
      { name: "Tom Holland", role: "Peter Parker", img: FMC1 },
      { name: "Zendaya", role: "MJ", img: FMC2 },
      { name: "Jacob Batalon", role: "Ned", img: FMC3 },
    ],

    slots: [
      { time: "2026-08-01T09:00:00+05:30", audi: "Audi 1" },
      { time: "2026-08-01T13:00:00+05:30", audi: "Audi 2" },
      { time: "2026-08-01T18:00:00+05:30", audi: "Audi 3" },
      { time: "2026-08-01T21:30:00+05:30", audi: "Audi 1" },
      { time: "2026-08-02T15:00:00+05:30", audi: "Audi 2" },
    ],

    trailer: "https://www.youtube.com/watch?v=JfVOs4VSpmA",
  },

  {
    id: 3,
    title: "Bhabiji Ghar Par Hain: Fun On The Run",
    img: FM3,
    duration: "1h 48m",
    category: "Comedy",
    rating: "7.5",
    genre: "Comedy",
    price: 180,

    synopsis:
      "The beloved neighborhood characters find themselves on a hilarious road trip full of misunderstandings, surprises, and nonstop laughter.",

    director: {
      name: "Rajiv Sharma",
      img: FMD1,
    },

    producer: {
      name: "Happy Times Entertainment",
      img: FMP1,
    },

    cast: [
      { name: "Aasif Sheikh", role: "Vibhuti", img: FMC1 },
      { name: "Rohitashv Gour", role: "Tiwari", img: FMC2 },
      { name: "Shubhangi Atre", role: "Angoori", img: FMC3 },
    ],

    slots: [
      { time: "2026-08-01T11:00:00+05:30", audi: "Audi 2" },
      { time: "2026-08-01T15:00:00+05:30", audi: "Audi 1" },
      { time: "2026-08-01T18:30:00+05:30", audi: "Audi 3" },
      { time: "2026-08-02T10:00:00+05:30", audi: "Audi 2" },
      { time: "2026-08-02T14:00:00+05:30", audi: "Audi 1" },
    ],

    trailer: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
  },

  {
    id: 4,
    title: "Supergirl",
    img: FM4,
    duration: "1h 30m",
    category: "Action",
    rating: "7.8",
    genre: "Superhero",
    price: 220,

    synopsis:
      "Kara Zor-El embarks on a cosmic journey across galaxies while confronting powerful enemies and discovering her true purpose as Earth's protector.",

    director: {
      name: "Craig Gillespie",
      img: FMD2,
    },

    producer: {
      name: "DC Studios",
      img: FMP1,
    },

    cast: [
      { name: "Milly Alcock", role: "Supergirl", img: FMC1 },
      { name: "Jason Momoa", role: "Lobo", img: FMC2 },
      { name: "Matthias Schoenaerts", role: "Villain", img: FMC3 },
    ],

    slots: [
      { time: "2026-08-01T10:30:00+05:30", audi: "Audi 1" },
      { time: "2026-08-01T13:30:00+05:30", audi: "Audi 2" },
      { time: "2026-08-01T20:00:00+05:30", audi: "Audi 3" },
      { time: "2026-08-02T12:00:00+05:30", audi: "Audi 1" },
      { time: "2026-08-02T18:00:00+05:30", audi: "Audi 2" },
    ],

    trailer: "https://www.youtube.com/watch?v=wxL8bVJhXCM",
  },

  {
    id: 5,
    title: "Paprika",
    img: FM5,
    duration: "2h 05m",
    category: "Sci-Fi",
    rating: "8.2",
    genre: "Animation / Sci-Fi",
    price: 240,

    synopsis:
      "A dream detective enters people's subconscious minds to solve crimes, blurring the line between reality and imagination in a visually stunning adventure.",

    director: {
      name: "Satoshi Kon",
      img: FMD1,
    },

    producer: {
      name: "Dream Vision Pictures",
      img: FMP1,
    },

    cast: [
      { name: "Atsuko Chiba", role: "Paprika", img: FMC1 },
      { name: "Toshimi Konakawa", role: "Detective", img: FMC2 },
      { name: "Tokita", role: "Scientist", img: FMC3 },
    ],

    slots: [
      { time: "2026-08-01T09:30:00+05:30", audi: "Audi 2" },
      { time: "2026-08-01T14:30:00+05:30", audi: "Audi 1" },
      { time: "2026-08-01T19:30:00+05:30", audi: "Audi 3" },
      { time: "2026-08-02T11:30:00+05:30", audi: "Audi 2" },
      { time: "2026-08-02T17:00:00+05:30", audi: "Audi 1" },
    ],

    trailer: "https://www.youtube.com/watch?v=yn7U1KIGeuQ",
  },

  {
    id: 6,
    title: "The Odyssey",
    img: FM6,
    duration: "2h 40m",
    category: "Adventure",
    rating: "9.0",
    genre: "Adventure / Fantasy",
    price: 320,

    synopsis:
      "An epic adaptation of Homer's legendary tale as Odysseus battles mythical creatures, gods, and impossible odds on his journey home.",

    director: {
      name: "Christopher Nolan",
      img: FMD2,
    },

    producer: {
      name: "Syncopy Films",
      img: FMP1,
    },

    cast: [
      { name: "Matt Damon", role: "Odysseus", img: FMC1 },
      { name: "Anne Hathaway", role: "Penelope", img: FMC2 },
      { name: "Tom Holland", role: "Telemachus", img: FMC3 },
    ],

    slots: [
      { time: "2026-08-01T08:30:00+05:30", audi: "Audi 1" },
      { time: "2026-08-01T13:00:00+05:30", audi: "Audi 2" },
      { time: "2026-08-01T18:30:00+05:30", audi: "Audi 3" },
      { time: "2026-08-01T22:00:00+05:30", audi: "Audi 1" },
      { time: "2026-08-02T16:30:00+05:30", audi: "Audi 2" },
    ],

    trailer: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
  },
];

export default movies;