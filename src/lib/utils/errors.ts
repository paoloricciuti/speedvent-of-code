export const errors = new Map<"default" | number, string>([
    [401, "You have to set your session id first!"],
    [500, "It seems like your session id it's not correct!"],
    ["default", "Unexpected error, try again."]
]);