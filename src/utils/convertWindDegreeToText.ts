import { directions } from "../constant/directions";

export const convertWindDegreeToText = (angle: number) => directions[Math.round(angle / 45) % 8];