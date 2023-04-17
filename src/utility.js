export function convertTime(time) {
    const newDate = new Date(time)
    const option = { month: "2-digit", day: "2-digit", year: "numeric" }
    const displayDate = newDate.toLocaleDateString(undefined, option)

    return displayDate
}

export const base_url = "https://project-2-api.herokuapp.com";

export const api_key = "3f906f1c-6482-451f-8584-b10adb7551d8";
