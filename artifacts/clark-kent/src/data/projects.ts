export interface Project {
  id: number;
  slug: string;
  title: string;
  img: string;       // portrait (WP) used on /work grid
  cover?: string;    // optional custom cover for the detail page
  category: string;
}

export const projects: Project[] = [
  { id: 1,  slug: "hampton",            title: "Hampton",             img: "WP1.png",  category: "" },
  { id: 2,  slug: "malbon",             title: "Malbon",              img: "WP2.png",  cover: "cover-malbon.png", category: "" },
  { id: 3,  slug: "malbon-buckets-club",title: "Malbon Buckets Club", img: "WP3.png",  category: "" },
  { id: 4,  slug: "ag1",                title: "AG1",                 img: "WP4.png",  category: "" },
  { id: 5,  slug: "aje",                title: "Aje.",                img: "WP5.png",  category: "" },
  { id: 6,  slug: "real-american-beer", title: "Real American Beer",  img: "WP6.png",  category: "" },
  { id: 7,  slug: "tyr",                title: "TYR",                 img: "WP7.png",  category: "" },
  { id: 8,  slug: "nike-swim",          title: "Nike Swim",           img: "WP8.png",  category: "" },
  { id: 9,  slug: "high-pour",          title: "High Pour",           img: "WP9.png",  category: "" },
  { id: 10, slug: "lady-bird-soda",     title: "Lady Bird Soda",      img: "WP10.png", cover: "cover-lady-bird-soda.png", category: "" },
  { id: 11, slug: "craftd",             title: "CRAFTD",              img: "WP11.png", category: "" },
  { id: 12, slug: "apl",                title: "APL",                 img: "WP12.png", category: "" },
];
