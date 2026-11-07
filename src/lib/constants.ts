import { Status, type SocialLink, type WorkItem } from "./types"

export const SOCIAL_LINKS: SocialLink[] = [
  {
    name: "twitter",
    username: "@shiikasenbei",
    url: "https://x.com/shiikasenbei",
    colour: "border-t-social-blue",
  },
  {
    name: "instagram",
    username: "@shiikasenbei",
    url: "https://instagram.com/shiikasenbei",
    colour: "border-t-social-pink",
  },
  {
    name: "twitch",
    username: "@shiikasenbei",
    url: "https://twitch.tv/shiikasenbei",
    colour: "border-t-social-purple",
  },
  {
    name: "pixiv",
    username: "shika",
    url: "https://www.pixiv.net/en/users/128340030",
    colour: "border-t-blue",
  },
  {
    name: "vgen",
    username: "@shiikasenbei",
    url: "https://vgen.co/shiikasenbei",
    description: "waitlists open",
    colour: "border-t-social-green",
  },
]
export const WORK_ITEMS: Record<Status, WorkItem[]> = {
  [Status.Backlog]: [],
  [Status.InQueue]: [
    { name: "cecilia immergreen" },
    { name: "#jyartchi", link: "https://x.com/katkaffie" },
  ],
  [Status.InProgress]: [{ name: "ouro kronii" }],
  [Status.OnHold]: [],
}

export const ANNOUNCEMENTS: string[] = []
