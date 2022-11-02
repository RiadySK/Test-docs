export enum CommunityWidgetVariant {
  MyCommunity = "MYCOMMUNITY",
  NewCommunity = "NEWCOMMUNITY"
}

export enum CommunityChannelVariant {
  New = 'new',
  Popular = 'popular'
}

export interface Community { 
  id: string,
  slug: string,
  name: string,
  icon: string,
  description?: string,
  membership_status: number,
  meta: { 
    total_thread: number, 
    total_member: number,
    total_post?: number 
  }
}
