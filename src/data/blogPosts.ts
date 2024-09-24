import { BlogPost } from "@/types/blogPost";

import blog1 from "@/assets/ai.jpg";
import blog2 from "@/assets/aidin.jpg";


export const posts: BlogPost[] = [
  {
    title: "Introducing the Latest Technology Trends",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nisl vel tincidunt lacinia, nisl nisl aliquam nisl, eget aliquam nisl nisl sit amet nisl.",
    date: "April 15, 2023",
    content: "content here...",
    thumbnail: blog1.src,
    link: "introducing-the-latest-technology-trends",
  },
  {
    title: "The Future of Sustainable Living",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nisl vel tincidunt lacinia, nisl nisl aliquam nisl, eget aliquam nisl nisl sit amet nisl.",
    date: "May 1, 2023",
    content: "content here...",
    thumbnail: blog2.src,
    link: "the-future-of-sustainable-living",
  },
  {
    title: "The Art of Mindful Productivity",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nisl vel tincidunt lacinia, nisl nisl aliquam nisl, eget aliquam nisl nisl sit amet nisl.",
    date: "June 10, 2023",
    content: "content here...",
    thumbnail: blog1.src,
    link: "the-art-of-mindful-productivity",
  },
];
