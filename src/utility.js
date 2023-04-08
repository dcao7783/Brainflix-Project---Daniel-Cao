export function convertTime(time) {
    const newDate = new Date(time)
    const option = { month: "2-digit", day: "2-digit", year: "numeric" }
    const displayDate = newDate.toLocaleDateString(undefined, option)

    return displayDate
}
