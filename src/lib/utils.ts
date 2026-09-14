import { Temporal } from "temporal-polyfill"

export const daysInShikaPurgatory = (): number => {
  const timeZone = "Pacific/Auckland"
  const startDate: Temporal.ZonedDateTime = Temporal.Now.zonedDateTimeISO(timeZone)

  const endDate: Temporal.ZonedDateTime = Temporal.ZonedDateTime.from({
    timeZone,
    year: 2026,
    month: 10,
    day: 5,
    hour: 12,
  })
  return 30 - startDate.until(endDate, { largestUnit: "day" }).days
}
