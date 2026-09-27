export interface SocialLink {
  name: string
  username: string
  url: string
  description?: string
}

export interface WorkItem {
  name: string
  inProgress: boolean
  confirmed?: boolean
  candidate?: boolean
  description?: string
  extraneousText?: string
}
