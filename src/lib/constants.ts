import type { SocialLink, WorkItem } from "./types"
import { daysInShikaPurgatory } from "./utils"

export const SOCIAL_LINKS: SocialLink[] = [
  { name: "twitter", username: "@shiikasenbei", url: "https://x.com/shiikasenbei" },
  { name: "instagram", username: "@shiikasenbei", url: "https://instagram.com/shiikasenbei" },
  { name: "twitch", username: "@shiikasenbei", url: "https://twitch.tv/shiikasenbei" },
  { name: "pixiv", username: "shika", url: "https://www.pixiv.net/en/users/128340030" },
  {
    name: "vgen (i have nothing here)",
    username: "@shiikasenbei",
    url: "https://vgen.co/shiikasenbei",
  },
]
export const WORK_ITEMS: WorkItem[] = [
  { name: `30 days of shikamaxxing (day ${daysInShikaPurgatory()})`, inProgress: true },
  { name: "shiori novella", inProgress: true },
  { name: "oc design (maybe?)", inProgress: true },
  { name: "raora panthera", inProgress: false },
  { name: "more hololive related stuff (tbd)", inProgress: false },
]

export const DESCRIPTION: string[] = [
  "part time holo artist full time idiot",
  "i'm an idiot, and an artist apparently",
  "shiorium addict",
  "shikanoko nokonoko koshitantan...",
]
