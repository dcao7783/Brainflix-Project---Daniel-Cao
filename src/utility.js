export function convertTime(time) {
    const newDate = new Date(time)
    const option = { month: "2-digit", day: "2-digit", year: "numeric" }
    const displayDate = newDate.toLocaleDateString(undefined, option)

    return displayDate
}

export const base__url = "https://project-2-api.herokuapp.com";

export const api_key = "b3b7b1b4-c040-41d7-8347-f1cea55a73ad";
