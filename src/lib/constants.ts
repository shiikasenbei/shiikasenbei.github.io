import { Status, type SocialLink, type WorkItem } from "./types"

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
export const WORK_ITEMS: Record<Status, WorkItem[]> = {
  [Status.Backlog]: [],
  [Status.InQueue]: [
    { name: "#jyartchi", link: "https://x.com/katkaffie" },
    { name: "manhattan cafe" },
  ],
  [Status.InProgress]: [{ name: "shiori novella" }],
  [Status.OnHold]: [{ name: "gigi murin" }, { name: "cecilia immergreen" }],
}

export const ANNOUNCEMENTS: string[] = []
