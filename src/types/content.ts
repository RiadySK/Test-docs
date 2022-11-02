export interface TextContent {
  content: string;
}

export interface ImageContent {
  images: string[];
  description: string
  aspect_ratio: {
    ratio_width: number;
    ratio_height: number;
  }
}

export interface VideoContent {
  video_url: string;
  description: string;
}