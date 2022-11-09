import { ThreadBasic } from "./thread";

export interface Kreator {
  userid: string,
  username: string,
  usertitle: string,
  avatar: string,
  connection_status: number,
  threads: ThreadBasic[]
}
