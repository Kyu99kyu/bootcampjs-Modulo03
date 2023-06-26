import "./inteface";

const styles = "font-size: 18px; font-weight: bold; background-color: green;";

const beatles: MusicBand = {
  name: "The Beatles",
  year: 1960,
  active: true,
  musicalGender: "🎵 Pop Rock",
};

const queen: MusicBand = {
  name: "Queen",
  year: 1970,
  active: false,
  musicalGender: "🎸 Rock",
};

const acdc: MusicBand = {
  name: "AC DC",
  year: 1973,
  active: true,
  musicalGender: "🤘 Hard Rock",
};
const beethoven: MusicBand = {
  name: "Ludwig van Beethoven",
  year: 1770,
  active: false,
  musicalGender: "🎼 Clásica",
};
const stones: MusicBand = {
  name: "The Rolling Stones",
  year: 1962,
  active: true,
  musicalGender: "🎸 Rock",
};

console.log(
  `%c${beatles.name} son un grupo de ${beatles.year}. Su género musical es él ${beatles.musicalGender}. ¿Están activos? ${beatles.active}`,
  styles
);
console.log(
  `%c${queen.name} son un grupo de ${queen.year}. Su género musical es él ${queen.musicalGender}. ¿Están activos? ${queen.active}`,
  styles
);
console.log(
  `%c${acdc.name} son un grupo de ${acdc.year}. Su género musical es él ${acdc.musicalGender}. ¿Están activos? ${acdc.active}`,
  styles
);
console.log(
  `%c${beethoven.name} es un compositor de ${beethoven.year}. Su género musical es él ${beethoven.musicalGender}. ¿Está activos? ${beethoven.active}`,
  styles
);
console.log(
  `%c${stones.name} son un grupo de ${stones.year}. Su género musical es él ${stones.musicalGender}. ¿Están activos? ${stones.active}`,
  styles
);
