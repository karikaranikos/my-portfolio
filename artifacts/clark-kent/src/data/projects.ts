export interface MediaSlot {
  images: string[];  // one image = single cell; two+ = stacked, no gap
}

export interface Project {
  id: number;
  slug: string;
  title: string;
  img: string;       // portrait (WP) used on /work grid
  cover?: string;    // optional custom cover for the detail page
  category: string;
  overview?: string; // case study body copy
  mediaGrid?: (MediaSlot | null)[];  // 6 slots, null = placeholder
}

export const projects: Project[] = [
  { id: 1,  slug: "hampton",            title: "Hampton",             img: "WP1.png",  cover: "cover-hampton.png",            category: "",
    overview: `I worked with <a href="https://joinhampton.com/about-us" target="_blank" rel="noopener noreferrer">Hampton</a>, a private community for founders doing $3M+ in ARR, founded by <a href="https://www.instagram.com/thesamparr/?hl=en" target="_blank" rel="noopener noreferrer">Sam Parr</a> and his partner <a href="https://www.linkedin.com/in/joespeiser/" target="_blank" rel="noopener noreferrer">Joe Speiser</a>. I served as co-creative strategist and copywriter, tasked with launching Hampton's presence on Instagram and building a library of paid creative behind the scenes. The challenge was establishing Sam's authority and presence online with no existing Instagram audience.\n\nOur approach was to build a tiered content system instead of a one-off campaign: a hero storytelling series centered around Sam & Joe's success to build emotional credibility, a second layer pulling educational lessons from Sam and Joe into bite-sized content, and a third layer of highly shareable content designed to travel through founders' networks. Rather than building around Sam alone, every series, topic, and visual style was designed to be repeatable and applicable across other members of the community — so the content system could scale across the entire Hampton ecosystem, not just one founder's story.\n\nOnce content was in production, I also owned the client and post-production workflow, keeping execution aligned with strategy through final cut. The biggest win was <a href="https://www.instagram.com/reel/DSDAAspERrj/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==" target="_blank" rel="noopener noreferrer">Sam's hero piece</a> becoming their top performing ad for 4 months.`,
    mediaGrid: [
      { images: ["hampton-media-comments-b.png", "hampton-media-comments-a.png"] },
      null,
      null,
      null,
      null,
      null,
    ],
  },
  { id: 2,  slug: "malbon",             title: "Malbon",              img: "WP2.png",  cover: "cover-malbon.png",             category: "" },
  { id: 3,  slug: "malbon-buckets-club",title: "Malbon Buckets Club", img: "WP3.png",  cover: "cover-malbon-buckets-club.png",category: "" },
  { id: 4,  slug: "ag1",                title: "AG1",                 img: "WP4.png",  cover: "cover-ag1.png",                category: "" },
  { id: 5,  slug: "aje",                title: "Aje.",                img: "WP5.png",  cover: "cover-aje.png",                category: "" },
  { id: 6,  slug: "real-american-beer", title: "Real American Beer",  img: "WP6.png",  cover: "cover-real-american-beer.png", category: "" },
  { id: 7,  slug: "tyr",                title: "TYR",                 img: "WP7.png",  cover: "cover-tyr.png",                category: "" },
  { id: 8,  slug: "nike-swim",          title: "Nike Swim",           img: "WP8.png",  cover: "cover-nike-swim.png",          category: "" },
  { id: 9,  slug: "high-pour",          title: "High Pour",           img: "WP9.png",  cover: "cover-high-pour.png",          category: "" },
  { id: 10, slug: "lady-bird-soda",     title: "Lady Bird Soda",      img: "WP10.png", cover: "cover-lady-bird-soda.png",     category: "" },
  { id: 11, slug: "craftd",             title: "CRAFTD",              img: "WP11.png", cover: "cover-craftd.png",             category: "" },
  { id: 12, slug: "apl",                title: "APL",                 img: "WP12.png", cover: "cover-apl.png",                category: "" },
];
