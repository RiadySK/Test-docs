export type Post = {
  post_id: string,
  dateline: number,
  user: {
    userid: number,
    username: string,
    display_name: string
  }
  vote_info: {
    total_vote: number,
    vote: number
  }
}