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
  {
    name: `shikamaxxing (day ${daysInShikaPurgatory()}/30)`,
    inProgress: true,
    confirmed: true,
  },
  { name: "shiori novella (again!)", inProgress: true, confirmed: true },
  { name: "oc design", inProgress: true, confirmed: true },
  { name: "cecilia immergreen", inProgress: false, confirmed: true },

  { name: "hyakuto kyoko", inProgress: false, confirmed: false, candidate: true },
  { name: "raora panthera", inProgress: false, confirmed: false, candidate: false },
  {
    name: "more hololive related stuff",
    inProgress: false,
    confirmed: false,
    ongoing: true,
  },
]

export const DESCRIPTION: string[] = [
  "part time holo artist full time idiot",
  "i'm an idiot, and an artist apparently",
  "shiorium addict",
  "shikanoko nokonoko koshitantan...",
  "deer",
]
