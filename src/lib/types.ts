export interface SocialLink {
  name: string
  username: string
  url: string
  description?: string
  colour: string
}

export interface WorkItem {
  name: string
  description?: string
  extraneousText?: string
  link?: string
}

export enum Status {
  Backlog,
  InQueue,
  InProgress,
  OnHold,
}
