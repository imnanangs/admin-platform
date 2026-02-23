import { describe, it, expect, beforeAll, afterAll, vi } from "vitest";
import "dayjs/locale/id";
import "dayjs/locale/en";
import { getNowDate } from "@/utils/getDateNow";

describe("Fungsi getNowDate", () => {
  const tanggalMock = new Date("2025-02-04T14:00:00");

  beforeAll(() => {
    vi.useFakeTimers();
    vi.setSystemTime(tanggalMock);
  });

  afterAll(() => {
    vi.useRealTimers();
  });

  it("harus mengembalikan tanggal format Bahasa Inggris dengan jam", () => {
    const hasil = getNowDate({ locale: "en", withTime: true });
    expect(hasil).toBe("04 February 2025, 14:00:00");
  });

  it("harus mengembalikan tanggal format Bahasa Indonesia tanpa jam", () => {
    const hasil = getNowDate({ locale: "id", withTime: false });
    expect(hasil).toBe("04 Februari 2025");
  });

  it("harus menggunakan default (en dan dengan jam) jika tanpa parameter", () => {
    const hasil = getNowDate();
    expect(hasil).toBe("04 February 2025, 14:00:00");
  });
});
