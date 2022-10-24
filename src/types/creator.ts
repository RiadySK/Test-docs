import { ThreadBasic } from "./thread";

export interface Kreator {
  userid: string,
  username: string,
  display_name: string,
  profilepicture: string,
  usertitle: string,
  online_status: number,
  top_threads: ThreadBasic[]
}
