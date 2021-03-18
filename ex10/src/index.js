function myFunction() {
  var myMusic = {
    001: {
      artist: "Billy Joel",
      title: "Piano Man",
      release_year: 1973,
      formats: {
        1: "CD",
        2: "8T",
        3: "LP",
      },
      gold: true,
    },

    002: {
      artist: "John Pit",
      title: "Piano Women",
      release_year: 1956,
      id: 17,
      formats: {
        1: "RAW",
        2: "FT",
        3: "KP",
      },
    },
  };
  return myMusic;
}

myFunction()[2];
module.exports = myFunction;
