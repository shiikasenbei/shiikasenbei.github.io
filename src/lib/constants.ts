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
  { name: "#jyartchi", inProgress: false, confirmed: true, link: "https://x.com/katkaffie" },
  { name: "manhattan cafe", inProgress: false, confirmed: true },
  { name: "irys", inProgress: false, confirmed: true },

  { name: "gigi murin", inProgress: false, confirmed: false, extraneousText: "on hold" },
  { name: "cecilia immergreen", inProgress: false, confirmed: false, extraneousText: "on hold" },

  {
    name: "more hololive related stuff",
    inProgress: false,
    confirmed: false,
    extraneousText: "on hold",
  },
]

export const ANNOUNCEMENTS: string[] = [
  "clearing out some of my personal works from the worklog, so no hololive art for the time being!",
]
