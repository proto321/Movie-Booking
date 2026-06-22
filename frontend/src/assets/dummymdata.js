import FMD1 from "../assets/FMD1.png"
import FMD2 from "../assets/FMD2.png"
import FMP1 from "../assets/FMP1.png"
import FMC1 from "../assets/FMC1.png"
import FMC2 from "../assets/FMC2.png"
import FMC3 from "../assets/FMC3.png"
import M1 from "../assets/M1.png"
import M2 from "../assets/M2.png"
import M3 from "../assets/M3.png"
import M4 from "../assets/M4.png"
import M5 from "../assets/M5.png"
import M6 from "../assets/M6.png"
import M7 from "../assets/M7.png"
import M8 from "../assets/M8.png"
import  M9 from "../assets/M9.png"
import M10 from "../assets/M10.png"
import M11 from "../assets/M11.png"
import M12 from "../assets/M12.png"
import M13 from "../assets/M13.png"
import M14 from "../assets/M14.png"
import M15 from "../assets/M15.png"
import M16 from "../assets/M16.png"
import M17 from "../assets/M17.png"
import M18 from "../assets/M18.png"
import M19 from "../assets/M19.png"
import M20 from "../assets/M20.png"
import M21 from "../assets/M21.png"
import M22 from "../assets/M22.png"
import M23 from "../assets/M23.png"
import M24 from "../assets/M24.png"
import M25 from "../assets/M25.png"



export const action = [
// Movies (IDs 7 - 18) — slots normalized to { time, audi }
{
  id: 7,
  title: "Mortal Kombat 2",
  category: "action",
  image: M1,
  duration: "1h 55m",
  rating: "8.2",
  genre: "Action, Fantasy",
  price: 250,
  synopsis: "Earthrealm's champions return to face deadly warriors in the legendary Mortal Kombat tournament, where the fate of worlds hangs in the balance.",
  director: [
    { name: "Simon McQuoid", img: FMD1 }
  ],
  producer: {
    name: "James Wan",
    img: FMP1
  },
  cast: [
    { name: "Karl Urban", role: "Johnny Cage", img: FMC1 },
    { name: "Lewis Tan", role: "Cole Young", img: FMC2 },
    { name: "Jessica McNamee", role: "Sonya Blade", img: FMC3 }
  ],
   slots: [
      { time: "2025-09-24T10:00:00+05:30", audi: "Audi 1" },
      { time: "2025-09-24T16:00:00+05:30", audi: "Audi 2" },
      { time: "2025-09-24T20:00:00+05:30", audi: "Audi 3" },
      { time: "2025-09-25T09:30:00+05:30", audi: "Audi 1" },
      { time: "2025-09-25T13:00:00+05:30", audi: "Audi 2" },
      { time: "2025-09-25T18:30:00+05:30", audi: "Audi 3" },
      { time: "2025-09-26T11:00:00+05:30", audi: "Audi 1" },
      { time: "2025-09-26T14:30:00+05:30", audi: "Audi 2" },
      { time: "2025-09-26T19:00:00+05:30", audi: "Audi 3" },
      { time: "2025-09-27T10:15:00+05:30", audi: "Audi 1" },
      { time: "2025-09-27T15:45:00+05:30", audi: "Audi 2" },
      { time: "2025-09-27T20:15:00+05:30", audi: "Audi 3" },
      { time: "2025-09-28T12:00:00+05:30", audi: "Audi 1" },
      { time: "2025-09-28T16:30:00+05:30", audi: "Audi 2" },
      { time: "2025-09-29T09:45:00+05:30", audi: "Audi 3" },
      { time: "2025-09-29T13:15:00+05:30", audi: "Audi 1" },
      { time: "2025-09-29T21:00:00+05:30", audi: "Audi 2" },
      { time: "2025-09-30T11:30:00+05:30", audi: "Audi 3" },
      { time: "2025-09-30T17:00:00+05:30", audi: "Audi 1" },
    ],
  trailer: "https://youtu.be/HkTyjO4ryZo?si=b6OzZB9bD9eR-Ygu"
},
{
  id: 8,
  title: "Iron Lung",
  category: "horror",
  image: M2,
  duration: "1h 45m",
  rating: "7.7",
  genre: "Sci-Fi, Horror",
  price: 250,
  synopsis: "A lone prisoner pilots a submarine through a mysterious blood-red ocean on a distant moon, uncovering terrifying secrets beneath the surface.",
  director: [
    { name: "Mark Fischbach", img: FMD1 }
  ],
  producer: {
    name: "Mark Fischbach",
    img: FMP1
  },
  cast: [
    { name: "Mark Fischbach", role: "The Prisoner", img: FMC1 },
    { name: "Sean Chiplock", role: "Mission Control", img: FMC2 },
    { name: "Caroline Gordon", role: "Scientist", img: FMC3 }
  ],
  slots: [
      { time: "2025-09-24T10:00:00+05:30", audi: "Audi 1" },
      { time: "2025-09-24T16:00:00+05:30", audi: "Audi 2" },
      { time: "2025-09-24T20:00:00+05:30", audi: "Audi 3" },
      { time: "2025-09-25T09:30:00+05:30", audi: "Audi 1" },
      { time: "2025-09-25T13:00:00+05:30", audi: "Audi 2" },
      { time: "2025-09-25T18:30:00+05:30", audi: "Audi 3" },
      { time: "2025-09-26T11:00:00+05:30", audi: "Audi 1" },
      { time: "2025-09-26T14:30:00+05:30", audi: "Audi 2" },
      { time: "2025-09-26T19:00:00+05:30", audi: "Audi 3" },
      { time: "2025-09-27T10:15:00+05:30", audi: "Audi 1" },
      { time: "2025-09-27T15:45:00+05:30", audi: "Audi 2" },
      { time: "2025-09-27T20:15:00+05:30", audi: "Audi 3" },
    ],
  trailer: "https://youtu.be/x8E8Ryx49so?si=J2uCqL30n4eVhKz5"
},
{
  id: 9,
  title: "My Adventures with Superman",
  category: "animation",
  image: M3,
  duration: "1h 50m",
  rating: "8.4",
  genre: "Animation, Adventure",
  price: 250,
  synopsis: "Clark Kent balances life as a young reporter while discovering his powers and protecting Metropolis alongside Lois Lane and Jimmy Olsen.",
  director: [
    { name: "Jake Wyatt", img: FMD1 }
  ],
  producer: {
    name: "Sam Register",
    img: FMP1
  },
  cast: [
    { name: "Jack Quaid", role: "Clark Kent / Superman", img: FMC1 },
    { name: "Alice Lee", role: "Lois Lane", img: FMC2 },
    { name: "Ishmel Sahid", role: "Jimmy Olsen", img: FMC3 }
  ],
   slots: [
      { time: "2025-09-24T10:00:00+05:30", audi: "Audi 1" },
      { time: "2025-09-24T16:00:00+05:30", audi: "Audi 2" },
      { time: "2025-09-24T20:00:00+05:30", audi: "Audi 3" },
      { time: "2025-09-25T09:30:00+05:30", audi: "Audi 1" },
      { time: "2025-09-25T13:00:00+05:30", audi: "Audi 2" },
      { time: "2025-09-25T18:30:00+05:30", audi: "Audi 3" },
      { time: "2025-09-26T11:00:00+05:30", audi: "Audi 1" },
      { time: "2025-09-26T14:30:00+05:30", audi: "Audi 2" },
      { time: "2025-09-26T19:00:00+05:30", audi: "Audi 3" },
      { time: "2025-09-27T10:15:00+05:30", audi: "Audi 1" },
      { time: "2025-09-27T15:45:00+05:30", audi: "Audi 2" },
      { time: "2025-09-27T20:15:00+05:30", audi: "Audi 3" },
      { time: "2025-09-28T12:00:00+05:30", audi: "Audi 1" },
      { time: "2025-09-28T16:30:00+05:30", audi: "Audi 2" },
    ],
  trailer: "https://youtu.be/nI9uUv6AdoY?si=4JolxvQrBFpo7K2P"
},
{
  id: 10,
  title: "Lokah",
  category: "action",
  image: M4,
  duration: "2h 15m",
  rating: "7.9",
  genre: "Action, Fantasy",
  price: 250,
  synopsis: "A warrior destined by prophecy embarks on a dangerous journey through mystical lands to confront ancient forces threatening humanity.",
  director: [
    { name: "Rahul Sadasivan", img: FMD1 }
  ],
  producer: {
    name: "Dulquer Salmaan",
    img: FMP1
  },
  cast: [
    { name: "Kalyani Priyadarshan", role: "Lokah", img: FMC1 },
    { name: "Naslen", role: "Companion", img: FMC2 },
    { name: "Chandu Salimkumar", role: "Warrior", img: FMC3 }
  ],
  slots: [
      { time: "2025-09-24T10:00:00+05:30", audi: "Audi 1" },
      { time: "2025-09-24T16:00:00+05:30", audi: "Audi 2" },
      { time: "2025-09-24T20:00:00+05:30", audi: "Audi 3" },
      { time: "2025-09-25T09:30:00+05:30", audi: "Audi 1" },
      { time: "2025-09-25T13:00:00+05:30", audi: "Audi 2" },
      { time: "2025-09-25T18:30:00+05:30", audi: "Audi 3" },
      { time: "2025-09-26T11:00:00+05:30", audi: "Audi 1" },
      { time: "2025-09-26T14:30:00+05:30", audi: "Audi 2" },
      { time: "2025-09-26T19:00:00+05:30", audi: "Audi 3" },
      { time: "2025-09-27T10:15:00+05:30", audi: "Audi 1" },
      { time: "2025-09-27T15:45:00+05:30", audi: "Audi 2" },
      { time: "2025-09-27T20:15:00+05:30", audi: "Audi 3" },
      { time: "2025-09-28T12:00:00+05:30", audi: "Audi 1" },
      { time: "2025-09-28T16:30:00+05:30", audi: "Audi 2" },
      { time: "2025-09-29T09:45:00+05:30", audi: "Audi 3" },
      { time: "2025-09-29T13:15:00+05:30", audi: "Audi 1" },
      { time: "2025-09-29T21:00:00+05:30", audi: "Audi 2" },
      { time: "2025-09-30T11:30:00+05:30", audi: "Audi 3" },
      { time: "2025-09-30T17:00:00+05:30", audi: "Audi 1" }
    ],
  trailer: "https://youtu.be/8tyDDnJ5F_c?si=-DiOwvYQPw57golF"
},

{
  id: 11,
  title: "Big Hero 6",
  category: "animation",
  image: M5,
  duration: "1h 42m",
  rating: "7.8",
  genre: "Animation, Adventure",
  price: 250,
  synopsis: "A young robotics prodigy teams up with a lovable inflatable robot and a group of friends to uncover a dangerous conspiracy threatening their city.",
  director: [
    { name: "Don Hall", img: FMD1 },
    { name: "Chris Williams", img: FMD2 }
  ],
  producer: {
    name: "Roy Conli",
    img: FMP1
  },
  cast: [
    { name: "Ryan Potter", role: "Hiro Hamada", img: FMC1 },
    { name: "Scott Adsit", role: "Baymax", img: FMC2 },
    { name: "Jamie Chung", role: "Go Go Tomago", img: FMC3 }
  ],
   slots: [
      { time: "2025-09-24T10:00:00+05:30", audi: "Audi 1" },
      { time: "2025-09-24T16:00:00+05:30", audi: "Audi 2" },
      { time: "2025-09-24T20:00:00+05:30", audi: "Audi 3" },
      { time: "2025-09-25T09:30:00+05:30", audi: "Audi 1" },
      { time: "2025-09-25T13:00:00+05:30", audi: "Audi 2" },
      { time: "2025-09-25T18:30:00+05:30", audi: "Audi 3" },
      { time: "2025-09-26T11:00:00+05:30", audi: "Audi 1" },
      { time: "2025-09-26T14:30:00+05:30", audi: "Audi 2" },
      { time: "2025-09-26T19:00:00+05:30", audi: "Audi 3" },
      { time: "2025-09-27T10:15:00+05:30", audi: "Audi 1" },
      { time: "2025-09-27T15:45:00+05:30", audi: "Audi 2" },
      { time: "2025-09-27T20:15:00+05:30", audi: "Audi 3" },
      { time: "2025-09-28T12:00:00+05:30", audi: "Audi 1" },
      { time: "2025-09-28T16:30:00+05:30", audi: "Audi 2" },
      { time: "2025-09-29T09:45:00+05:30", audi: "Audi 3" },
      { time: "2025-09-29T13:15:00+05:30", audi: "Audi 1" },
      { time: "2025-09-29T21:00:00+05:30", audi: "Audi 2" },
      { time: "2025-09-30T11:30:00+05:30", audi: "Audi 3" },
      { time: "2025-09-30T17:00:00+05:30", audi: "Audi 1" },
    ],
  trailer: "z3biFxZIJOQ"
},
{
  id: 12,
  title: "Kill",
  category: "action",
  image: M6,
  duration: "1h 45m",
  rating: "7.7",
  genre: "Action, Thriller",
  price: 250,
  synopsis: "An army commando boards a train to save his loved one but finds himself trapped in a brutal fight against ruthless bandits.",
  director: [
    { name: "Nikhil Nagesh Bhat", img: FMD1 }
  ],
  producer: {
    name: "Karan Johar",
    img: FMP1
  },
  cast: [
    { name: "Lakshya", role: "Amrit", img: FMC1 },
    { name: "Raghav Juyal", role: "Fani", img: FMC2 },
    { name: "Tanya Maniktala", role: "Tulika", img: FMC3 }
  ],
 slots: [
      { time: "2025-09-24T10:00:00+05:30", audi: "Audi 1" },
      { time: "2025-09-24T16:00:00+05:30", audi: "Audi 2" },
      { time: "2025-09-24T20:00:00+05:30", audi: "Audi 3" },
      { time: "2025-09-25T09:30:00+05:30", audi: "Audi 1" },
      { time: "2025-09-25T13:00:00+05:30", audi: "Audi 2" },
      { time: "2025-09-25T18:30:00+05:30", audi: "Audi 3" },
      { time: "2025-09-26T11:00:00+05:30", audi: "Audi 1" },
      { time: "2025-09-26T14:30:00+05:30", audi: "Audi 2" },
      { time: "2025-09-26T19:00:00+05:30", audi: "Audi 3" },
      { time: "2025-09-27T10:15:00+05:30", audi: "Audi 1" },
      { time: "2025-09-27T15:45:00+05:30", audi: "Audi 2" },
      { time: "2025-09-27T20:15:00+05:30", audi: "Audi 3" },
      { time: "2025-09-28T12:00:00+05:30", audi: "Audi 1" },
      { time: "2025-09-28T16:30:00+05:30", audi: "Audi 2" },
    ],
  trailer: "https://youtu.be/da7lKeeS67c?si=Akd2eB5cDVkUkV_l"
},

{
  id: 13,
  title: "The Boy and the Heron",
  category: "animation",
  image: M7,
  duration: "2h 04m",
  rating: "8.0",
  genre: "Animation, Fantasy",
  price: 250,
  synopsis: "After the loss of his mother, a young boy enters a magical world guided by a mysterious heron and discovers secrets about life and death.",
  director: [
    { name: "Hayao Miyazaki", img: FMD1 }
  ],
  producer: {
    name: "Toshio Suzuki",
    img: FMP1
  },
  cast: [
    { name: "Soma Santoki", role: "Mahito", img: FMC1 },
    { name: "Masaki Suda", role: "Blue Heron", img: FMC2 },
    { name: "Aimyon", role: "Himi", img: FMC3 }
  ],
  slots: [
      { time: "2025-09-24T10:00:00+05:30", audi: "Audi 1" },
      { time: "2025-09-24T16:00:00+05:30", audi: "Audi 2" },
      { time: "2025-09-24T20:00:00+05:30", audi: "Audi 3" },
      { time: "2025-09-25T09:30:00+05:30", audi: "Audi 1" },
      { time: "2025-09-25T13:00:00+05:30", audi: "Audi 2" },
      { time: "2025-09-25T18:30:00+05:30", audi: "Audi 3" },
      { time: "2025-09-26T11:00:00+05:30", audi: "Audi 1" },
      { time: "2025-09-26T14:30:00+05:30", audi: "Audi 2" },
      { time: "2025-09-26T19:00:00+05:30", audi: "Audi 3" },
      { time: "2025-09-27T10:15:00+05:30", audi: "Audi 1" },
      { time: "2025-09-27T15:45:00+05:30", audi: "Audi 2" },
      { time: "2025-09-27T20:15:00+05:30", audi: "Audi 3" },
      { time: "2025-09-28T12:00:00+05:30", audi: "Audi 1" },
      { time: "2025-09-28T16:30:00+05:30", audi: "Audi 2" },
      { time: "2025-09-29T09:45:00+05:30", audi: "Audi 3" },
      { time: "2025-09-29T13:15:00+05:30", audi: "Audi 1" },
      { time: "2025-09-29T21:00:00+05:30", audi: "Audi 2" },
      { time: "2025-09-30T11:30:00+05:30", audi: "Audi 3" },
      { time: "2025-09-30T17:00:00+05:30", audi: "Audi 1" },
    ],
  trailer: "https://youtu.be/658aukjP5G0?si=dmIc2QnXYG0EhaWp"
},

{
  id: 14,
  title: "Gone Girl",
  category: "drama",
  image: M8,
  duration: "2h 29m",
  rating: "8.1",
  genre: "Mystery, Thriller",
  price: 250,
  synopsis: "A man's life spirals out of control when his wife mysteriously disappears and he becomes the prime suspect in a nationwide media frenzy.",
  director: [
    { name: "David Fincher", img: FMD1 }
  ],
  producer: {
    name: "Cean Chaffin",
    img: FMP1
  },
  cast: [
    { name: "Ben Affleck", role: "Nick Dunne", img: FMC1 },
    { name: "Rosamund Pike", role: "Amy Dunne", img: FMC2 },
    { name: "Neil Patrick Harris", role: "Desi Collings", img: FMC3 }
  ],
 slots: [
      { time: "2025-09-24T10:00:00+05:30", audi: "Audi 1" },
      { time: "2025-09-24T16:00:00+05:30", audi: "Audi 2" },
      { time: "2025-09-24T20:00:00+05:30", audi: "Audi 3" },
      { time: "2025-09-25T09:30:00+05:30", audi: "Audi 1" },
      { time: "2025-09-25T13:00:00+05:30", audi: "Audi 2" },
      { time: "2025-09-25T18:30:00+05:30", audi: "Audi 3" },
      { time: "2025-09-26T11:00:00+05:30", audi: "Audi 1" },
      { time: "2025-09-26T14:30:00+05:30", audi: "Audi 2" },
      { time: "2025-09-26T19:00:00+05:30", audi: "Audi 3" },
      { time: "2025-09-27T10:15:00+05:30", audi: "Audi 1" },
      { time: "2025-09-27T15:45:00+05:30", audi: "Audi 2" },
      { time: "2025-09-27T20:15:00+05:30", audi: "Audi 3" },
      { time: "2025-09-28T12:00:00+05:30", audi: "Audi 1" },
      { time: "2025-09-28T16:30:00+05:30", audi: "Audi 2" },
      { time: "2025-09-29T09:45:00+05:30", audi: "Audi 3" },
      { time: "2025-09-29T13:15:00+05:30", audi: "Audi 1" },
      { time: "2025-09-29T21:00:00+05:30", audi: "Audi 2" },
      { time: "2025-09-30T11:30:00+05:30", audi: "Audi 3" },
      { time: "2025-09-30T17:00:00+05:30", audi: "Audi 1" },
    ],
  trailer: "https://youtu.be/2-_-1nJf8Vg?si=pwH0XPBK7Npuoxl0"
},

{
  id: 15,
  title: "The Martian",
  category: "sci-fi",
  image: M9,
  duration: "2h 24m",
  rating: "8.0",
  genre: "Sci-Fi, Adventure",
  price: 250,
  synopsis: "An astronaut stranded on Mars must use his ingenuity and scientific knowledge to survive while NASA works to bring him home.",
  director: [
    { name: "Ridley Scott", img: FMD1 }
  ],
  producer: {
    name: "Simon Kinberg",
    img: FMP1
  },
  cast: [
    { name: "Matt Damon", role: "Mark Watney", img: FMC1 },
    { name: "Jessica Chastain", role: "Melissa Lewis", img: FMC2 },
    { name: "Chiwetel Ejiofor", role: "Vincent Kapoor", img: FMC3 }
  ],
  slots: [
      { time: "2025-09-24T10:00:00+05:30", audi: "Audi 1" },
      { time: "2025-09-24T16:00:00+05:30", audi: "Audi 2" },
      { time: "2025-09-24T20:00:00+05:30", audi: "Audi 3" },
      { time: "2025-09-25T09:30:00+05:30", audi: "Audi 1" },
      { time: "2025-09-25T13:00:00+05:30", audi: "Audi 2" },
      { time: "2025-09-25T18:30:00+05:30", audi: "Audi 3" },
      { time: "2025-09-26T11:00:00+05:30", audi: "Audi 1" },
      { time: "2025-09-26T14:30:00+05:30", audi: "Audi 2" },
      { time: "2025-09-26T19:00:00+05:30", audi: "Audi 3" },
      { time: "2025-09-27T10:15:00+05:30", audi: "Audi 1" },
      { time: "2025-09-27T15:45:00+05:30", audi: "Audi 2" },
      { time: "2025-09-27T20:15:00+05:30", audi: "Audi 3" },
      { time: "2025-09-28T12:00:00+05:30", audi: "Audi 1" },
      { time: "2025-09-28T16:30:00+05:30", audi: "Audi 2" },
      { time: "2025-09-29T09:45:00+05:30", audi: "Audi 3" },
      { time: "2025-09-29T13:15:00+05:30", audi: "Audi 1" },
      { time: "2025-09-29T21:00:00+05:30", audi: "Audi 2" },
      { time: "2025-09-30T11:30:00+05:30", audi: "Audi 3" },
      { time: "2025-09-30T17:00:00+05:30", audi: "Audi 1" },
    ],
  trailer: "https://youtu.be/ej3ioOneTy8?si=V-fNzK6LIaSxHgRX"
},
  {
  id: 16,
  title: "Masaan",
  category: "drama",
  image: M10,
  duration: "1h 49m",
  rating: "8.1",
  genre: "Drama, Romance",
  price: 250,
  synopsis: "Set along the ghats of Varanasi, four lives become intertwined through love, loss, social pressure, and the search for redemption.",
  director: [
    { name: "Neeraj Ghaywan", img: FMD1 }
  ],
  producer: {
    name: "Anurag Kashyap",
    img: FMP1
  },
  cast: [
    { name: "Vicky Kaushal", role: "Deepak Kumar", img: FMC1 },
    { name: "Richa Chadha", role: "Devi Pathak", img: FMC2 },
    { name: "Shweta Tripathi", role: "Shaalu Gupta", img: FMC3 }
  ],
   slots: [
      { time: "2025-09-24T10:00:00+05:30", audi: "Audi 1" },
      { time: "2025-09-24T16:00:00+05:30", audi: "Audi 2" },
      { time: "2025-09-24T20:00:00+05:30", audi: "Audi 3" },
      { time: "2025-09-25T09:30:00+05:30", audi: "Audi 1" },
      { time: "2025-09-25T13:00:00+05:30", audi: "Audi 2" },
      { time: "2025-09-25T18:30:00+05:30", audi: "Audi 3" },
      { time: "2025-09-26T11:00:00+05:30", audi: "Audi 1" },
      { time: "2025-09-26T14:30:00+05:30", audi: "Audi 2" },
      { time: "2025-09-26T19:00:00+05:30", audi: "Audi 3" },
      { time: "2025-09-27T10:15:00+05:30", audi: "Audi 1" },
      { time: "2025-09-27T15:45:00+05:30", audi: "Audi 2" },
      { time: "2025-09-27T20:15:00+05:30", audi: "Audi 3" },
      { time: "2025-09-28T12:00:00+05:30", audi: "Audi 1" },
      { time: "2025-09-28T16:30:00+05:30", audi: "Audi 2" },
      { time: "2025-09-29T09:45:00+05:30", audi: "Audi 3" },
      { time: "2025-09-29T13:15:00+05:30", audi: "Audi 1" },
      { time: "2025-09-29T21:00:00+05:30", audi: "Audi 2" },
      { time: "2025-09-30T11:30:00+05:30", audi: "Audi 3" },
      { time: "2025-09-30T17:00:00+05:30", audi: "Audi 1" },
    ],
  trailer: "https://youtu.be/SKJfBo3xMW0?si=cZm5CdjqdgR0AMDk"
},
{
  id: 17,
  title: "Bhagam Bhag",
  category: "comedy",
  image: M11,
  duration: "2h 37m",
  rating: "7.4",
  genre: "Comedy, Drama",
  price: 250,
  synopsis: "A theatre group finds itself tangled in a series of hilarious misunderstandings, kidnappings, and mistaken identities while searching for a new actress.",
  director: [
    { name: "Priyadarshan", img: FMD1 }
  ],
  producer: {
    name: "Sunil Shetty",
    img: FMP1
  },
  cast: [
    { name: "Akshay Kumar", role: "Bunty", img: FMC1 },
    { name: "Govinda", role: "Babla", img: FMC2 },
    { name: "Paresh Rawal", role: "Champak Seth", img: FMC3 }
  ],
  slots: [
      { time: "2025-09-24T10:00:00+05:30", audi: "Audi 1" },
      { time: "2025-09-24T16:00:00+05:30", audi: "Audi 2" },
      { time: "2025-09-24T20:00:00+05:30", audi: "Audi 3" },
      { time: "2025-09-25T09:30:00+05:30", audi: "Audi 1" },
      { time: "2025-09-25T13:00:00+05:30", audi: "Audi 2" },
      { time: "2025-09-25T18:30:00+05:30", audi: "Audi 3" },
      { time: "2025-09-26T11:00:00+05:30", audi: "Audi 1" },
      { time: "2025-09-26T14:30:00+05:30", audi: "Audi 2" },
      { time: "2025-09-26T19:00:00+05:30", audi: "Audi 3" },
      { time: "2025-09-27T10:15:00+05:30", audi: "Audi 1" },
      { time: "2025-09-27T15:45:00+05:30", audi: "Audi 2" },
      { time: "2025-09-27T20:15:00+05:30", audi: "Audi 3" },
      { time: "2025-09-28T12:00:00+05:30", audi: "Audi 1" },
      { time: "2025-09-28T16:30:00+05:30", audi: "Audi 2" },
      { time: "2025-09-29T09:45:00+05:30", audi: "Audi 3" },
      { time: "2025-09-29T13:15:00+05:30", audi: "Audi 1" },
      { time: "2025-09-29T21:00:00+05:30", audi: "Audi 2" },
      { time: "2025-09-30T11:30:00+05:30", audi: "Audi 3" },
      { time: "2025-09-30T17:00:00+05:30", audi: "Audi 1" }
    ],
  trailer: "https://youtu.be/ihCaohTJYCo?si=e4t3HgAf6zskzR9M"
},
{
  id: 18,
  title: "Deadpool & Wolverine",
  category: "comedy",
  image: M12,
  duration: "2h 08m",
  rating: "8.0",
  genre: "Action, Comedy",
  price: 250,
  synopsis: "Deadpool is recruited into a multiversal mission that forces him to team up with a reluctant Wolverine to save reality itself.",
  director: [
    { name: "Shawn Levy", img: FMD1 }
  ],
  producer: {
    name: "Kevin Feige",
    img: FMP1
  },
  cast: [
    { name: "Ryan Reynolds", role: "Deadpool", img: FMC1 },
    { name: "Hugh Jackman", role: "Wolverine", img: FMC2 },
    { name: "Emma Corrin", role: "Cassandra Nova", img: FMC3 }
  ],
  slots: [
      { time: "2025-09-24T10:00:00+05:30", audi: "Audi 1" },
      { time: "2025-09-24T16:00:00+05:30", audi: "Audi 2" },
      { time: "2025-09-24T20:00:00+05:30", audi: "Audi 3" },
      { time: "2025-09-25T09:30:00+05:30", audi: "Audi 1" },
      { time: "2025-09-25T13:00:00+05:30", audi: "Audi 2" },
      { time: "2025-09-25T18:30:00+05:30", audi: "Audi 3" },
      { time: "2025-09-26T11:00:00+05:30", audi: "Audi 1" },
      { time: "2025-09-26T14:30:00+05:30", audi: "Audi 2" },
      { time: "2025-09-26T19:00:00+05:30", audi: "Audi 3" },
      { time: "2025-09-27T10:15:00+05:30", audi: "Audi 1" },
      { time: "2025-09-27T15:45:00+05:30", audi: "Audi 2" },
      { time: "2025-09-27T20:15:00+05:30", audi: "Audi 3" },
      { time: "2025-09-28T12:00:00+05:30", audi: "Audi 1" },
      { time: "2025-09-28T16:30:00+05:30", audi: "Audi 2" },
      { time: "2025-09-29T09:45:00+05:30", audi: "Audi 3" },
      { time: "2025-09-29T13:15:00+05:30", audi: "Audi 1" },
      { time: "2025-09-29T21:00:00+05:30", audi: "Audi 2" },
      { time: "2025-09-30T11:30:00+05:30", audi: "Audi 3" },
      { time: "2025-09-30T17:00:00+05:30", audi: "Audi 1" }
    ],
  trailer: "https://youtu.be/73_1biulkYk?si=BmzQc7DLTZOTDMOJ"
},

{
  id: 19,
  title: "Terrifier",
  category: "horror",
  image: M13,
  duration: "1h 25m",
  rating: "6.1",
  genre: "Horror, Slasher",
  price: 250,
  synopsis: "On Halloween night, a sadistic clown known as Art the Clown terrorizes a group of unsuspecting victims in a gruesome killing spree.",
  director: [
    { name: "Damien Leone", img: FMD1 }
  ],
  producer: {
    name: "Phil Falcone",
    img: FMP1
  },
  cast: [
    { name: "David Howard Thornton", role: "Art the Clown", img: FMC1 },
    { name: "Jenna Kanell", role: "Tara Heyes", img: FMC2 },
    { name: "Samantha Scaffidi", role: "Victoria Heyes", img: FMC3 }
  ],
   slots: [
      { time: "2025-09-24T10:00:00+05:30", audi: "Audi 1" },
      { time: "2025-09-24T16:00:00+05:30", audi: "Audi 2" },
      { time: "2025-09-24T20:00:00+05:30", audi: "Audi 3" },
      { time: "2025-09-25T09:30:00+05:30", audi: "Audi 1" },
      { time: "2025-09-25T13:00:00+05:30", audi: "Audi 2" },
      { time: "2025-09-25T18:30:00+05:30", audi: "Audi 3" },
      { time: "2025-09-26T11:00:00+05:30", audi: "Audi 1" },
      { time: "2025-09-26T14:30:00+05:30", audi: "Audi 2" },
      { time: "2025-09-26T19:00:00+05:30", audi: "Audi 3" },
      { time: "2025-09-27T10:15:00+05:30", audi: "Audi 1" },
      { time: "2025-09-27T15:45:00+05:30", audi: "Audi 2" },
      { time: "2025-09-27T20:15:00+05:30", audi: "Audi 3" },
      { time: "2025-09-28T12:00:00+05:30", audi: "Audi 1" },
      { time: "2025-09-28T16:30:00+05:30", audi: "Audi 2" },
      { time: "2025-09-29T09:45:00+05:30", audi: "Audi 3" },
      { time: "2025-09-29T13:15:00+05:30", audi: "Audi 1" },
      { time: "2025-09-29T21:00:00+05:30", audi: "Audi 2" },
      { time: "2025-09-30T11:30:00+05:30", audi: "Audi 3" },
      { time: "2025-09-30T17:00:00+05:30", audi: "Audi 1" }
    ],
  trailer: "https://youtu.be/fN5j1MtGO2Q?si=v0Vsthe-avaiEull"
},

{
  id: 20,
  title: "Demon Slayer: Infinity Castle",
  category: "animation",
  image: M14,
  duration: "2h 20m",
  rating: "8.8",
  genre: "Anime, Action, Fantasy",
  price: 250,
  synopsis: "Tanjiro and the Demon Slayer Corps enter Muzan's Infinity Castle for the ultimate battle against the Upper Rank demons.",
  director: [
    { name: "Haruo Sotozaki", img: FMD1 }
  ],
  producer: {
    name: "Akifumi Fujio",
    img: FMP1
  },
  cast: [
    { name: "Natsuki Hanae", role: "Tanjiro Kamado", img: FMC1 },
    { name: "Akari Kito", role: "Nezuko Kamado", img: FMC2 },
    { name: "Yoshitsugu Matsuoka", role: "Inosuke Hashibira", img: FMC3 }
  ],
  slots: [
      { time: "2025-09-24T10:00:00+05:30", audi: "Audi 1" },
      { time: "2025-09-24T16:00:00+05:30", audi: "Audi 2" },
      { time: "2025-09-24T20:00:00+05:30", audi: "Audi 3" },
      { time: "2025-09-25T09:30:00+05:30", audi: "Audi 1" },
      { time: "2025-09-25T13:00:00+05:30", audi: "Audi 2" },
      { time: "2025-09-25T18:30:00+05:30", audi: "Audi 3" },
      { time: "2025-09-26T11:00:00+05:30", audi: "Audi 1" },
      { time: "2025-09-26T14:30:00+05:30", audi: "Audi 2" },
      { time: "2025-09-26T19:00:00+05:30", audi: "Audi 3" },
      { time: "2025-09-27T10:15:00+05:30", audi: "Audi 1" },
      { time: "2025-09-27T15:45:00+05:30", audi: "Audi 2" },
      { time: "2025-09-27T20:15:00+05:30", audi: "Audi 3" },
      { time: "2025-09-28T12:00:00+05:30", audi: "Audi 1" },
      { time: "2025-09-28T16:30:00+05:30", audi: "Audi 2" },
      { time: "2025-09-29T09:45:00+05:30", audi: "Audi 3" },
      { time: "2025-09-29T13:15:00+05:30", audi: "Audi 1" },
      { time: "2025-09-29T21:00:00+05:30", audi: "Audi 2" },
      { time: "2025-09-30T11:30:00+05:30", audi: "Audi 3" },
      { time: "2025-09-30T17:00:00+05:30", audi: "Audi 1" }
    ],
  trailer: "https://youtu.be/wyiZWYMilgk?si=46UmINAHxLOyi7vo"
},

{
  id: 21,
  title: "Chainsaw Man: Reze Arc",
  category: "animation",
  image: M15,
  duration: "2h 05m",
  rating: "8.8",
  genre: "Anime, Action, Horror",
  price: 250,
  synopsis: "Denji encounters the mysterious Reze, whose arrival changes his life and leads to a deadly conflict.",
  director: [
    { name: "Tatsuya Yoshihara", img: FMD1 }
  ],
  producer: {
    name: "Manabu Otsuka",
    img: FMP1
  },
  cast: [
    { name: "Kikunosuke Toya", role: "Denji", img: FMC1 },
    { name: "Reina Ueda", role: "Reze", img: FMC2 },
    { name: "Tomori Kusunoki", role: "Makima", img: FMC3 }
  ],
  slots: [
      { time: "2025-09-24T10:00:00+05:30", audi: "Audi 1" },
      { time: "2025-09-24T16:00:00+05:30", audi: "Audi 2" },
      { time: "2025-09-24T20:00:00+05:30", audi: "Audi 3" },
      { time: "2025-09-25T09:30:00+05:30", audi: "Audi 1" },
      { time: "2025-09-25T13:00:00+05:30", audi: "Audi 2" },
      { time: "2025-09-25T18:30:00+05:30", audi: "Audi 3" },
      { time: "2025-09-26T11:00:00+05:30", audi: "Audi 1" },
      { time: "2025-09-26T14:30:00+05:30", audi: "Audi 2" },
      { time: "2025-09-26T19:00:00+05:30", audi: "Audi 3" },
      { time: "2025-09-27T10:15:00+05:30", audi: "Audi 1" },
      { time: "2025-09-27T15:45:00+05:30", audi: "Audi 2" },
      { time: "2025-09-27T20:15:00+05:30", audi: "Audi 3" },
      { time: "2025-09-28T12:00:00+05:30", audi: "Audi 1" },
      { time: "2025-09-28T16:30:00+05:30", audi: "Audi 2" },
      { time: "2025-09-29T09:45:00+05:30", audi: "Audi 3" },
      { time: "2025-09-29T13:15:00+05:30", audi: "Audi 1" },
      { time: "2025-09-29T21:00:00+05:30", audi: "Audi 2" },
      { time: "2025-09-30T11:30:00+05:30", audi: "Audi 3" },
      { time: "2025-09-30T17:00:00+05:30", audi: "Audi 1" }
    ],
  trailer: "https://youtu.be/tAzAhDNdehs?si=jdtAd61upfx94wk4"
},

{
  id: 22,
  title: "Avengers: Doomsday",
  category: "action",
  image: M16,
  duration: "2h 45m",
  rating: "9.0",
  genre: "Action, Adventure, Superhero",
  price: 250,
  synopsis: "Earth's mightiest heroes unite against Doctor Doom in a battle that threatens the entire multiverse.",
  director: [
    { name: "Anthony Russo", img: FMD1 },
    { name: "Joe Russo", img: FMD2 }
  ],
  producer: {
    name: "Kevin Feige",
    img: FMP1
  },
  cast: [
    { name: "Robert Downey Jr.", role: "Doctor Doom", img: FMC1 },
    { name: "Chris Hemsworth", role: "Thor", img: FMC2 },
    { name: "Anthony Mackie", role: "Captain America", img: FMC3 }
  ],
   slots: [
      { time: "2025-09-24T10:00:00+05:30", audi: "Audi 1" },
      { time: "2025-09-24T16:00:00+05:30", audi: "Audi 2" },
      { time: "2025-09-24T20:00:00+05:30", audi: "Audi 3" },
      { time: "2025-09-25T09:30:00+05:30", audi: "Audi 1" },
      { time: "2025-09-25T13:00:00+05:30", audi: "Audi 2" },
      { time: "2025-09-25T18:30:00+05:30", audi: "Audi 3" },
      { time: "2025-09-26T11:00:00+05:30", audi: "Audi 1" },
      { time: "2025-09-26T14:30:00+05:30", audi: "Audi 2" },
      { time: "2025-09-26T19:00:00+05:30", audi: "Audi 3" },
      { time: "2025-09-27T10:15:00+05:30", audi: "Audi 1" },
      { time: "2025-09-27T15:45:00+05:30", audi: "Audi 2" },
      { time: "2025-09-27T20:15:00+05:30", audi: "Audi 3" },
      { time: "2025-09-28T12:00:00+05:30", audi: "Audi 1" },
      { time: "2025-09-28T16:30:00+05:30", audi: "Audi 2" },
      { time: "2025-09-29T09:45:00+05:30", audi: "Audi 3" },
      { time: "2025-09-29T13:15:00+05:30", audi: "Audi 1" },
      { time: "2025-09-29T21:00:00+05:30", audi: "Audi 2" },
      { time: "2025-09-30T11:30:00+05:30", audi: "Audi 3" },
      { time: "2025-09-30T17:00:00+05:30", audi: "Audi 1" }
    ],
  trailer: "https://youtu.be/UiMg566PREA?si=EbtQkyUz68eLsqKC"
},

{
  id: 23,
  title: "Schindler's List",
  category: "drama",
  image: M17,
  duration: "3h 15m",
  rating: "9.0",
  genre: "Drama, History, War",
  price: 250,
  synopsis: "During World War II, Oskar Schindler risks everything to save more than a thousand Jewish refugees from the Holocaust.",
  director: [
    { name: "Steven Spielberg", img: FMD1 }
  ],
  producer: {
    name: "Gerald R. Molen",
    img: FMP1
  },
  cast: [
    { name: "Liam Neeson", role: "Oskar Schindler", img: FMC1 },
    { name: "Ben Kingsley", role: "Itzhak Stern", img: FMC2 },
    { name: "Ralph Fiennes", role: "Amon Goeth", img: FMC3 }
  ],
  slots: [
      { time: "2025-09-24T10:00:00+05:30", audi: "Audi 1" },
      { time: "2025-09-24T16:00:00+05:30", audi: "Audi 2" },
      { time: "2025-09-24T20:00:00+05:30", audi: "Audi 3" },
      { time: "2025-09-25T09:30:00+05:30", audi: "Audi 1" },
      { time: "2025-09-25T13:00:00+05:30", audi: "Audi 2" },
      { time: "2025-09-25T18:30:00+05:30", audi: "Audi 3" },
      { time: "2025-09-26T11:00:00+05:30", audi: "Audi 1" },
      { time: "2025-09-26T14:30:00+05:30", audi: "Audi 2" },
      { time: "2025-09-26T19:00:00+05:30", audi: "Audi 3" },
      { time: "2025-09-27T10:15:00+05:30", audi: "Audi 1" },
      { time: "2025-09-27T15:45:00+05:30", audi: "Audi 2" },
      { time: "2025-09-27T20:15:00+05:30", audi: "Audi 3" },
      { time: "2025-09-28T12:00:00+05:30", audi: "Audi 1" },
      { time: "2025-09-28T16:30:00+05:30", audi: "Audi 2" },
      { time: "2025-09-29T09:45:00+05:30", audi: "Audi 3" },
      { time: "2025-09-29T13:15:00+05:30", audi: "Audi 1" },
      { time: "2025-09-29T21:00:00+05:30", audi: "Audi 2" },
      { time: "2025-09-30T11:30:00+05:30", audi: "Audi 3" },
      { time: "2025-09-30T17:00:00+05:30", audi: "Audi 1" }
    ],
  trailer: "https://youtu.be/mxphAlJID9U?si=Mxc0AyfMxZxHnxLQ"
},

{
  id: 24,
  title: "Ford v Ferrari",
  category: "drama",
  image: M18,
  duration: "2h 32m",
  rating: "8.6",
  genre: "Drama, Sport, Biography",
  price: 250,
  synopsis: "Car designer Carroll Shelby and driver Ken Miles challenge Ferrari's dominance at the legendary 24 Hours of Le Mans.",
  director: [
    { name: "James Mangold", img: FMD1 }
  ],
  producer: {
    name: "Peter Chernin",
    img: FMP1
  },
  cast: [
    { name: "Matt Damon", role: "Carroll Shelby", img: FMC1 },
    { name: "Christian Bale", role: "Ken Miles", img: FMC2 },
    { name: "Jon Bernthal", role: "Lee Iacocca", img: FMC3 }
  ],
 slots: [
      { time: "2025-09-24T10:00:00+05:30", audi: "Audi 1" },
      { time: "2025-09-24T16:00:00+05:30", audi: "Audi 2" },
      { time: "2025-09-24T20:00:00+05:30", audi: "Audi 3" },
      { time: "2025-09-25T09:30:00+05:30", audi: "Audi 1" },
      { time: "2025-09-25T13:00:00+05:30", audi: "Audi 2" },
      { time: "2025-09-25T18:30:00+05:30", audi: "Audi 3" },
      { time: "2025-09-26T11:00:00+05:30", audi: "Audi 1" },
      { time: "2025-09-26T14:30:00+05:30", audi: "Audi 2" },
      { time: "2025-09-26T19:00:00+05:30", audi: "Audi 3" },
      { time: "2025-09-27T10:15:00+05:30", audi: "Audi 1" },
      { time: "2025-09-27T15:45:00+05:30", audi: "Audi 2" },
      { time: "2025-09-27T20:15:00+05:30", audi: "Audi 3" },
      { time: "2025-09-28T12:00:00+05:30", audi: "Audi 1" },
      { time: "2025-09-28T16:30:00+05:30", audi: "Audi 2" },
      { time: "2025-09-29T09:45:00+05:30", audi: "Audi 3" },
      { time: "2025-09-29T13:15:00+05:30", audi: "Audi 1" },
      { time: "2025-09-29T21:00:00+05:30", audi: "Audi 2" },
      { time: "2025-09-30T11:30:00+05:30", audi: "Audi 3" },
      { time: "2025-09-30T17:00:00+05:30", audi: "Audi 1" },
    ],
  trailer: "https://youtu.be/zyYgDtY2AMY?si=16Sr8K9MjJfA0Dze"
},

{
  id: 25,
  title: "De Dana Dan",
  category: "comedy",
  image: M19,
  duration: "2h 45m",
  rating: "8.0",
  genre: "Comedy",
  price: 250,
  synopsis: "Two struggling friends become trapped in a series of hilarious misunderstandings involving gangsters, kidnappings, and a luxury hotel.",
  director: [
    { name: "Priyadarshan", img: FMD1 }
  ],
  producer: {
    name: "Ganesh Jain",
    img: FMP1
  },
  cast: [
    { name: "Akshay Kumar", role: "Nitin", img: FMC1 },
    { name: "Suniel Shetty", role: "Ram", img: FMC2 },
    { name: "Katrina Kaif", role: "Anjali", img: FMC3 }
  ],
slots: [
      { time: "2025-09-24T10:00:00+05:30", audi: "Audi 1" },
      { time: "2025-09-24T16:00:00+05:30", audi: "Audi 2" },
      { time: "2025-09-24T20:00:00+05:30", audi: "Audi 3" },
      { time: "2025-09-25T09:30:00+05:30", audi: "Audi 1" },
      { time: "2025-09-25T13:00:00+05:30", audi: "Audi 2" },
      { time: "2025-09-25T18:30:00+05:30", audi: "Audi 3" },
      { time: "2025-09-26T11:00:00+05:30", audi: "Audi 1" },
      { time: "2025-09-26T14:30:00+05:30", audi: "Audi 2" },
      { time: "2025-09-26T19:00:00+05:30", audi: "Audi 3" },
      { time: "2025-09-27T10:15:00+05:30", audi: "Audi 1" },
      { time: "2025-09-27T15:45:00+05:30", audi: "Audi 2" },
      { time: "2025-09-27T20:15:00+05:30", audi: "Audi 3" },
      { time: "2025-09-28T12:00:00+05:30", audi: "Audi 1" },
      { time: "2025-09-28T16:30:00+05:30", audi: "Audi 2" },
      { time: "2025-09-29T09:45:00+05:30", audi: "Audi 3" },
      { time: "2025-09-29T13:15:00+05:30", audi: "Audi 1" },
      { time: "2025-09-29T21:00:00+05:30", audi: "Audi 2" },
      { time: "2025-09-30T11:30:00+05:30", audi: "Audi 3" },
      { time: "2025-09-30T17:00:00+05:30", audi: "Audi 1" },
    ],
  trailer: "https://youtu.be/VMOlmpDS5O4?si=4mWSyX5pEfnGCM6f"
},

{
  id: 26,
  title: "Children of the Corn",
  category: "horror",
  image: M20,
  duration: "1h 33m",
  rating: "5.0",
  genre: "Horror",
  price: 250,
  synopsis: "A young couple becomes trapped in a remote town where a sinister cult of children worships a dark supernatural force hiding in the cornfields.",
  director: [
    { name: "Kurt Wimmer", img: FMD1 }
  ],
  producer: {
    name: "Lucas Foster",
    img: FMP1
  },
  cast: [
    { name: "Elena Kampouris", role: "Boleyn Williams", img: FMC1 },
    { name: "Kate Moyer", role: "Eden Edwards", img: FMC2 },
    { name: "Callan Mulvey", role: "Robert Williams", img: FMC3 }
  ],
   slots: [
      { time: "2025-09-24T10:00:00+05:30", audi: "Audi 1" },
      { time: "2025-09-24T16:00:00+05:30", audi: "Audi 2" },
      { time: "2025-09-24T20:00:00+05:30", audi: "Audi 3" },
      { time: "2025-09-25T09:30:00+05:30", audi: "Audi 1" },
      { time: "2025-09-25T13:00:00+05:30", audi: "Audi 2" },
      { time: "2025-09-25T18:30:00+05:30", audi: "Audi 3" },
      { time: "2025-09-26T11:00:00+05:30", audi: "Audi 1" },
      { time: "2025-09-26T14:30:00+05:30", audi: "Audi 2" },
      { time: "2025-09-26T19:00:00+05:30", audi: "Audi 3" },
      { time: "2025-09-27T10:15:00+05:30", audi: "Audi 1" },
      { time: "2025-09-27T15:45:00+05:30", audi: "Audi 2" },
      { time: "2025-09-27T20:15:00+05:30", audi: "Audi 3" },
      { time: "2025-09-28T12:00:00+05:30", audi: "Audi 1" },
      { time: "2025-09-28T16:30:00+05:30", audi: "Audi 2" },
      { time: "2025-09-29T09:45:00+05:30", audi: "Audi 3" },
      { time: "2025-09-29T13:15:00+05:30", audi: "Audi 1" },
      { time: "2025-09-29T21:00:00+05:30", audi: "Audi 2" },
      { time: "2025-09-30T11:30:00+05:30", audi: "Audi 3" },
      { time: "2025-09-30T17:00:00+05:30", audi: "Audi 1" },
    ],
  trailer: "https://youtu.be/dClKllEv5MU?si=h0Qjq4_r2xY-CSyN"
},

{
  id: 27,
  title: "Weapons",
  category: "horror",
  image: M21,
  duration: "2h 08m",
  rating: "8.1",
  genre: "Horror, Mystery",
  price: 250,
  synopsis: "When a group of children mysteriously vanish overnight, a small town becomes consumed by fear as dark secrets begin to surface.",
  director: [
    { name: "Zach Cregger", img: FMD1 }
  ],
  producer: {
    name: "Roy Lee",
    img: FMP1
  },
  cast: [
    { name: "Josh Brolin", role: "Father", img: FMC1 },
    { name: "Julia Garner", role: "Teacher", img: FMC2 },
    { name: "Alden Ehrenreich", role: "Police Officer", img: FMC3 }
  ],
  slots: [
      { time: "2025-09-24T10:00:00+05:30", audi: "Audi 1" },
      { time: "2025-09-24T16:00:00+05:30", audi: "Audi 2" },
      { time: "2025-09-24T20:00:00+05:30", audi: "Audi 3" },
      { time: "2025-09-25T09:30:00+05:30", audi: "Audi 1" },
      { time: "2025-09-25T13:00:00+05:30", audi: "Audi 2" },
      { time: "2025-09-25T18:30:00+05:30", audi: "Audi 3" },
      { time: "2025-09-26T11:00:00+05:30", audi: "Audi 1" },
      { time: "2025-09-26T14:30:00+05:30", audi: "Audi 2" },
      { time: "2025-09-26T19:00:00+05:30", audi: "Audi 3" },
      { time: "2025-09-27T10:15:00+05:30", audi: "Audi 1" },
      { time: "2025-09-27T15:45:00+05:30", audi: "Audi 2" },
      { time: "2025-09-27T20:15:00+05:30", audi: "Audi 3" },
      { time: "2025-09-28T12:00:00+05:30", audi: "Audi 1" },
      { time: "2025-09-28T16:30:00+05:30", audi: "Audi 2" },
      { time: "2025-09-29T09:45:00+05:30", audi: "Audi 3" },
      { time: "2025-09-29T13:15:00+05:30", audi: "Audi 1" },
      { time: "2025-09-29T21:00:00+05:30", audi: "Audi 2" },
      { time: "2025-09-30T11:30:00+05:30", audi: "Audi 3" },
      { time: "2025-09-30T17:00:00+05:30", audi: "Audi 1" },
    ],
  trailer: "https://youtu.be/OpThntO9ixc"
},

{
  id: 28,
  title: "Smile",
  category: "horror",
  image: M22,
  duration: "1h 55m",
  rating: "6.5",
  genre: "Psychological Horror",
  price: 250,
  synopsis: "After witnessing a traumatic incident, a therapist becomes haunted by a terrifying presence that manifests through disturbing smiles.",
  director: [
    { name: "Parker Finn", img: FMD1 }
  ],
  producer: {
    name: "Marty Bowen",
    img: FMP1
  },
  cast: [
    { name: "Sosie Bacon", role: "Rose Cotter", img: FMC1 },
    { name: "Kyle Gallner", role: "Joel", img: FMC2 },
    { name: "Jessie T. Usher", role: "Trevor", img: FMC3 }
  ],
  slots: [
      { time: "2025-09-24T10:00:00+05:30", audi: "Audi 1" },
      { time: "2025-09-24T16:00:00+05:30", audi: "Audi 2" },
      { time: "2025-09-24T20:00:00+05:30", audi: "Audi 3" },
      { time: "2025-09-25T09:30:00+05:30", audi: "Audi 1" },
      { time: "2025-09-25T13:00:00+05:30", audi: "Audi 2" },
      { time: "2025-09-25T18:30:00+05:30", audi: "Audi 3" },
      { time: "2025-09-26T11:00:00+05:30", audi: "Audi 1" },
      { time: "2025-09-26T14:30:00+05:30", audi: "Audi 2" },
      { time: "2025-09-26T19:00:00+05:30", audi: "Audi 3" },
      { time: "2025-09-27T10:15:00+05:30", audi: "Audi 1" },
      { time: "2025-09-27T15:45:00+05:30", audi: "Audi 2" },
      { time: "2025-09-27T20:15:00+05:30", audi: "Audi 3" },
      { time: "2025-09-28T12:00:00+05:30", audi: "Audi 1" },
      { time: "2025-09-28T16:30:00+05:30", audi: "Audi 2" },
      { time: "2025-09-29T09:45:00+05:30", audi: "Audi 3" },
      { time: "2025-09-29T13:15:00+05:30", audi: "Audi 1" },
      { time: "2025-09-29T21:00:00+05:30", audi: "Audi 2" },
      { time: "2025-09-30T11:30:00+05:30", audi: "Audi 3" },
      { time: "2025-09-30T17:00:00+05:30", audi: "Audi 1" },
    ],
  trailer: "https://youtu.be/BcDK7lkzzsU?si=lk3EWo9kDVxXWgqa"
},

{
  id: 29,
  title: "Trick 'r Treat",
  category: "horror",
  image: M23,
  duration: "1h 22m",
  rating: "6.8",
  genre: "Horror, Anthology",
  price: 250,
  synopsis: "A series of interconnected Halloween tales reveal the consequences of breaking the traditions of the spooky holiday.",
  director: [
    { name: "Michael Dougherty", img: FMD1 }
  ],
  producer: {
    name: "Bryan Singer",
    img: FMP1
  },
  cast: [
    { name: "Quinn Lord", role: "Sam", img: FMC1 },
    { name: "Anna Paquin", role: "Laurie", img: FMC2 },
    { name: "Brian Cox", role: "Mr. Kreeg", img: FMC3 }
  ],
  slots: [
      { time: "2025-09-24T10:00:00+05:30", audi: "Audi 1" },
      { time: "2025-09-24T16:00:00+05:30", audi: "Audi 2" },
      { time: "2025-09-24T20:00:00+05:30", audi: "Audi 3" },
      { time: "2025-09-25T09:30:00+05:30", audi: "Audi 1" },
      { time: "2025-09-25T13:00:00+05:30", audi: "Audi 2" },
      { time: "2025-09-25T18:30:00+05:30", audi: "Audi 3" },
      { time: "2025-09-26T11:00:00+05:30", audi: "Audi 1" },
      { time: "2025-09-26T14:30:00+05:30", audi: "Audi 2" },
      { time: "2025-09-26T19:00:00+05:30", audi: "Audi 3" },
      { time: "2025-09-27T10:15:00+05:30", audi: "Audi 1" },
      { time: "2025-09-27T15:45:00+05:30", audi: "Audi 2" },
      { time: "2025-09-27T20:15:00+05:30", audi: "Audi 3" },
      { time: "2025-09-28T12:00:00+05:30", audi: "Audi 1" },
      { time: "2025-09-28T16:30:00+05:30", audi: "Audi 2" },
      { time: "2025-09-29T09:45:00+05:30", audi: "Audi 3" },
      { time: "2025-09-29T13:15:00+05:30", audi: "Audi 1" },
      { time: "2025-09-29T21:00:00+05:30", audi: "Audi 2" },
      { time: "2025-09-30T11:30:00+05:30", audi: "Audi 3" },
      { time: "2025-09-30T17:00:00+05:30", audi: "Audi 1" },
    ],
  trailer: "https://youtu.be/NJ66Htmmq4M?si=AIdcZlqblZGzIU8O"
},
 {
  id: 30,
  title: "Black Phone 2",
  category: "horror",
  image: M24,
  duration: "1h 50m",
  rating: "8.0",
  genre: "Horror, Thriller",
  price: 250,
  synopsis: "The nightmare returns as Finney faces a new supernatural threat connected to the mysterious black phone and his terrifying past.",
  director: [
    { name: "Scott Derrickson", img: FMD1 }
  ],
  producer: {
    name: "Jason Blum",
    img: FMP1
  },
  cast: [
    { name: "Mason Thames", role: "Finney Shaw", img: FMC1 },
    { name: "Madeleine McGraw", role: "Gwen Shaw", img: FMC2 },
    { name: "Ethan Hawke", role: "The Grabber", img: FMC3 }
  ],
  slots: [
      { time: "2025-09-24T10:00:00+05:30", audi: "Audi 1" },
      { time: "2025-09-24T16:00:00+05:30", audi: "Audi 2" },
      { time: "2025-09-24T20:00:00+05:30", audi: "Audi 3" },
      { time: "2025-09-25T09:30:00+05:30", audi: "Audi 1" },
      { time: "2025-09-25T13:00:00+05:30", audi: "Audi 2" },
      { time: "2025-09-25T18:30:00+05:30", audi: "Audi 3" },
      { time: "2025-09-26T11:00:00+05:30", audi: "Audi 1" },
      { time: "2025-09-26T14:30:00+05:30", audi: "Audi 2" },
      { time: "2025-09-26T19:00:00+05:30", audi: "Audi 3" },
      { time: "2025-09-27T10:15:00+05:30", audi: "Audi 1" },
      { time: "2025-09-27T15:45:00+05:30", audi: "Audi 2" },
      { time: "2025-09-27T20:15:00+05:30", audi: "Audi 3" },
      { time: "2025-09-28T12:00:00+05:30", audi: "Audi 1" },
      { time: "2025-09-28T16:30:00+05:30", audi: "Audi 2" },
      { time: "2025-09-29T09:45:00+05:30", audi: "Audi 3" },
      { time: "2025-09-29T13:15:00+05:30", audi: "Audi 1" },
      { time: "2025-09-29T21:00:00+05:30", audi: "Audi 2" },
      { time: "2025-09-30T11:30:00+05:30", audi: "Audi 3" },
      { time: "2025-09-30T17:00:00+05:30", audi: "Audi 1" }
    ],
  trailer: "DdR-gzFZoDk"
},

{
   id: 31,
  title: "Subservience",
  category: "sci-fi",
  image: M25,
  duration: "1h 45m",
  rating: 5.4,
  genre: "Sci-Fi Thriller",

  price: 250,
  synopsis:  "A struggling father purchases an advanced AI domestic robot to help manage his household. As the android becomes increasingly self-aware and possessive, the family finds themselves trapped in a dangerous fight for survival.",
  director: [
    { name: "S.K. Dale", img: FMD1 }
  ],
  producer: {
    name: "Simon Kinberg",
    img: FMP1
  },
  cast: [
    { name: "Megan Fox", role: "?", img: FMC1 },
    { name: "Michele Morrone", role: "?", img: FMC2 },
    { name: "Madeline Zima", role: "?", img: FMC3 }
  ],

  slots: [
      { time: "2025-09-24T10:00:00+05:30", audi: "Audi 1" },
      { time: "2025-09-24T16:00:00+05:30", audi: "Audi 2" },
      { time: "2025-09-24T20:00:00+05:30", audi: "Audi 3" },
      { time: "2025-09-25T09:30:00+05:30", audi: "Audi 1" },
      { time: "2025-09-25T13:00:00+05:30", audi: "Audi 2" },
      { time: "2025-09-25T18:30:00+05:30", audi: "Audi 3" },
      { time: "2025-09-26T11:00:00+05:30", audi: "Audi 1" },
      { time: "2025-09-26T14:30:00+05:30", audi: "Audi 2" },
      { time: "2025-09-26T19:00:00+05:30", audi: "Audi 3" },
      { time: "2025-09-27T10:15:00+05:30", audi: "Audi 1" },
      { time: "2025-09-27T15:45:00+05:30", audi: "Audi 2" },
      { time: "2025-09-27T20:15:00+05:30", audi: "Audi 3" },
      { time: "2025-09-28T12:00:00+05:30", audi: "Audi 1" },
      { time: "2025-09-28T16:30:00+05:30", audi: "Audi 2" },
      { time: "2025-09-29T09:45:00+05:30", audi: "Audi 3" },
      { time: "2025-09-29T13:15:00+05:30", audi: "Audi 1" },
      { time: "2025-09-29T21:00:00+05:30", audi: "Audi 2" },
      { time: "2025-09-30T11:30:00+05:30", audi: "Audi 3" },
      { time: "2025-09-30T17:00:00+05:30", audi: "Audi 1" },
    ],
  trailer: "https://youtu.be/v0kqkRZHqk4?si=APWwhGiGkSrm4RSl"
},

];



export const horror = [
 
];

export const comedy = [


];

export const adventure = [

];

// Combined array export (default) so existing code can import easily
const MOVIES = [...action, ...horror, ...comedy, ...adventure];
export default MOVIES;

