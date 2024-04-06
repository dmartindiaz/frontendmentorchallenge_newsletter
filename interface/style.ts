type ColorType = "primary" | "secondary" | "error" | "success" | "neutral"

const TextColor = (color: ColorType) => {
    switch (color) {
        case "primary":
            return 'text-orange-600'
        case "secondary":
            return 'text-red-500'
        case "neutral":
            return 'text-gray-800'
        case "error":
            return 'text-red-500'
        case "success":
            return 'text-green-500'
        default:
            break;
    }
}

const BgColor = (color: ColorType) => {
    switch (color) {
        case "primary":
            return 'bg-orange-600'
        case "secondary":
            return 'bg-red-500'
        case "neutral":
            return 'bg-gray-800'
        case "error":
            return 'bg-red-500'
        case "success":
            return 'bg-green-500'
        default:
            break;
    }
}

export type {
    ColorType
}

export {
    TextColor,
    BgColor
}