interface ThumbnailData {
  data: {
    attributes: {
      url: string;
    };
  };
}

interface BlogPostAttributes {
  title: string;
  summary: string;
  content: string;
  thumbnail: ThumbnailData;
  isFeatured: boolean;
  slug: string;
  createdAt: string;
  publishedAt: string;
  updatedAt: string;
}

export interface BlogPost {
  id: number;
  attributes: BlogPostAttributes;
}
