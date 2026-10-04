import type { SocialLink, WorkItem } from "./types"

export const SOCIAL_LINKS: SocialLink[] = [
  { name: "twitter", username: "@shiikasenbei", url: "https://x.com/shiikasenbei" },
  { name: "instagram", username: "@shiikasenbei", url: "https://instagram.com/shiikasenbei" },
  { name: "twitch", username: "@shiikasenbei", url: "https://twitch.tv/shiikasenbei" },
  { name: "pixiv", username: "shika", url: "https://www.pixiv.net/en/users/128340030" },
  // {
  //   name: "vgen",
  //   username: "@shiikasenbei",
  //   url: "https://vgen.co/shiikasenbei",
  //   description: "#soon"
  // },
]
export const WORK_ITEMS: WorkItem[] = [
  { name: "shiori novella", inProgress: true, confirmed: true },
  { name: "#fwoofart", inProgress: false, confirmed: true, link: "https://x.com/fwoouf" },
  { name: "#jyartchi", inProgress: false, confirmed: true, link: "https://x.com/katkaffie" },

  { name: "gigi murin", inProgress: false, confirmed: false, extraneousText: "on hold" },
  { name: "cecilia immergreen", inProgress: false, confirmed: false, extraneousText: "on hold" },

  {
    name: "more hololive related stuff",
    inProgress: false,
    confirmed: false,
    extraneousText: "on hold",
  },
]

export const DESCRIPTION: string[] = [
  "part time holo artist full time idiot",
  "i'm an idiot, and an artist apparently",
  "shiorium addict",
  "shikanoko nokonoko koshitantan...",
  "deer",
]

export const ANNOUNCEMENTS: string[] = [
  "all hololive art (after the current shiori piece) will be on hold until further notice.",
  "this is so i can clear out some of my personal works from the worklog.",
]
