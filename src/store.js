import { createRef } from "react";

const state = {
  sections: 9,
  pages: 8,
  threshold: 4,
  mouse: [0, 0],
  images: {
      about: [
        "https://res.cloudinary.com/dbqlsilt2/image/upload/v1661139436/a/digital-artist-beeple-122-1200x1500_punohl.jpg",
        "https://res.cloudinary.com/dbqlsilt2/image/upload/v1661139704/a/digital-artist-beeple-127-1200x1500_ku1l6r.jpg",
      ],
      aboutSec: [
        "https://res.cloudinary.com/dbqlsilt2/image/upload/v1661231861/a/main_crystal_baseColor_saxdtz.png",
        "https://res.cloudinary.com/dbqlsilt2/image/upload/v1661231861/a/main_crystal_baseColor_saxdtz.png",
      ],
      mangaCoffee: [
        "https://res.cloudinary.com/dbqlsilt2/image/upload/v1661297564/a/manga-coffee-portfoli-1_duvfgx.png",
        "https://res.cloudinary.com/dbqlsilt2/image/upload/v1661297560/a/manga-coffee-portfoli-2_by7wru.png"

      ]
  },
  content: [
    {
      tag: "00",
      text: `The Bacchic\nand Dionysiac\nRites`,
      images: [
        "/images/BH41NVu.jpg",
        "/images/fBoIJLX.jpg",
        "/images/04zTfWB.jpg",
      ],
    },
    {
      tag: "01",
      text: `The Elysian\nMysteries`,
      images: [
        "/images/c4cA8UN.jpg",
        "/images/ajQ73ol.jpg",
        "/images/gZOmLNU.jpg",
      ],
    },
    {
      tag: "02",
      text: `The Hiramic\nLegend`,
      images: [
        "/images/mbFIW1b.jpg",
        "/images/mlDUVig.jpg",
        "/images/gwuZrgo.jpg",
      ],
    },
  ],
  depthbox: [
    {
      depth: 0,
      color: "#cccccc",
      textColor: "#ffffff",
      text: "In a void,\nno one could say\nwhy a thing\nonce set in motion\nshould stop anywhere.",
      image:
        "https://res.cloudinary.com/dbqlsilt2/image/upload/v1659641695/a/one-piece-manga-wallpaper_611916315_xvunkd.jpg",
    },
    {
      depth: -5,
      textColor: "#272727",
      text: "For why should it stop\nhere rather than here?\nSo that a thing\nwill either be at rest\nor must be moved\nad infinitum.",
      image: "/images/04zTfWB.jpg",
    },
  ],
  lines: [
    {
      points: [
        [-20, 0, 0],
        [-9, 0, 0],
      ],
      color: "black",
      lineWidth: 0.5,
    },
    {
      points: [
        [20, 0, 0],
        [9, 0, 0],
      ],
      color: "black",
      lineWidth: 0.5,
    },
  ],
  paragraphs: [
    {
      offset: 1,
      factor: 1.75,
      header: "District 4",
      image:
        "https://res.cloudinary.com/dbqlsilt2/image/upload/v1659641695/a/one-piece-manga-wallpaper_611916315_xvunkd.jpg",
      aspect: 1.51,
      text: "Two thousand pharmacologists and bio-chemists were subsidized. Six years later it was being produced commercially.",
    },
    {
      offset: 2,
      factor: 2.0,
      header: "Diamond Road",
      image:
        "https://res.cloudinary.com/dbqlsilt2/image/upload/v1659641695/a/one-piece-manga-wallpaper_611916315_xvunkd.jpg",
      aspect: 1.5,
      text: "The man who comes back through the Door in the Wall will never be quite the same as the man who went out. He will be wiser but less sure, happier but less self-satisfied, humbler in acknowledging his ignorance yet better equipped to understand the relationship of words to things, of systematic reasoning to the unfathomable mystery which it tries, forever vainly, to comprehend.",
    },
    {
      offset: 3,
      factor: 2.25,
      header: "Catalina",
      image:
        "https://res.cloudinary.com/dbqlsilt2/image/upload/v1659641695/a/one-piece-manga-wallpaper_611916315_xvunkd.jpg",
      aspect: 1.5037,
      text: "The substance can take you to heaven but it can also take you to hell. Or else to both, together or alternately. Or else (if you're lucky, or if you've made yourself ready) beyond either of them. And then beyond the beyond, back to where you started from — back to here, back to New Rotham sted, back to business as usual. Only now, of course, business as usual is completely different.",
    },
    {
      offset: 4,
      factor: 2.0,
      header: "Building 21",
      image:
        "https://res.cloudinary.com/dbqlsilt2/image/upload/v1659641695/a/one-piece-manga-wallpaper_611916315_xvunkd.jpg",
      aspect: 0.665,
      text: "We’ve found that the people whose EEG doesn’t show any alpha-wave activity when they’re relaxed aren’t likely to respond significantly to the substance. That means that, for about fifteen percent of the population, we have to find other approaches to liberation.",
    },
    {
      offset: 5,
      factor: 1.75,
      header: "Sector 8",
      image:
        "https://res.cloudinary.com/dbqlsilt2/image/upload/v1659641695/a/one-piece-manga-wallpaper_611916315_xvunkd.jpg",
      aspect: 1.55,
      text: "By cultivating the state of mind that makes it possible for the dazzling ecstatic insights to become permanent and habitual illuminations. By getting to know oneself to the point where one won’t be compelled by one’s unconscious to do all the ugly, absurd, self-stultifying things that one so often finds oneself doing.",
    },
    {
      offset: 7,
      factor: 1.05,
      header: "The Factory",
      image:
        "https://res.cloudinary.com/dbqlsilt2/image/upload/v1659641695/a/one-piece-manga-wallpaper_611916315_xvunkd.jpg",
      aspect: 1.77,
      text: "Education and enlightenment.",
    },
  ],
  stripes: [
    { offset: 0, color: "#000", height: 13 },
    { offset: 6.3, color: "#000", height: 20 },
  ],
  top: createRef(),
};

export default state;
