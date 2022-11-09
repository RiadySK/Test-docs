import { Thread } from "./thread";
import { Image } from 'types/image';

export enum CardDisplayType {
  THUMBNAIL = "THUMBNAIL",
  COMPACT = "COMPACT",
}

export interface HotThread extends Thread {
  hot_thread_content: {
    description: string;
    url?: string;
    audio_url?: string;
    promotion_data?: PromotionData
  }
}

interface PromotionData {
  entitlement: string;
  cta_button: string;
  promoted_username: string;
  promoted_avatar: Image;
}