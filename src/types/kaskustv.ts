export interface KaskusTV {
  video: KaskusTVVideo
  program: KaskusTVProgram[]
}

export interface KaskusTVVideo {
  id: string;
  title: string;
  url: string;
  embed: string;
  thumbnail: string;
}

export interface KaskusTVProgram {
  id: string;
  name: string;
  url: string;
  thumbnail: string;
}