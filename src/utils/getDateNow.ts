import dayjs from "dayjs";
import "dayjs/locale/id";
import "dayjs/locale/en";

type LocaleType = "en" | "id";

interface getDateNow {
  locale?: LocaleType;
  withTime?: boolean;
}

export function getNowDate(options?: getDateNow): string {
  const { locale = "en", withTime = true } = options || {};

  const format = withTime ? "DD MMMM YYYY, HH:mm:ss" : "DD MMMM YYYY";

  return dayjs().locale(locale).format(format);
}

// Example usage:
// import { getNowDate } from "@/utils/getNowDate";

// // English with time
// getNowDate({ locale: "en", withTime: true });
// // → 04 February 2025, 14:00:00

// // Indonesian without time
// getNowDate({ locale: "id", withTime: false });
// // → 04 Februari 2025