import dayjs from "dayjs";
import utc from "dayjs/plugin/utc";
import timezone from "dayjs/plugin/timezone";
import { timeFormats } from "../constant/timeFormats";

dayjs.extend(utc);
dayjs.extend(timezone);

export const formatTime = (
  value: number, 
  timezone: string, 
  format = timeFormats.DAY_PLUS_HOURS_PLUS_POST_MERIDIAN
) => {
  return dayjs.unix(value).tz(timezone).format(format);
}