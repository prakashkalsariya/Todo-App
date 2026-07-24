export class ProcessData {
  static formatTime = (time: string) => {
    const [hour, minute] = time.split(":").map(Number);
    const period = hour >= 12 ? "PM" : "AM";
    const hour12 = hour % 12 || 12;

    return `${hour12}:${String(minute).padStart(2, "0")} ${period}`;
  };

  static formatDate = (date: string) => {
    const finalDate = new Date(date);
    return finalDate.toLocaleDateString("en-GB", {
      day: "2-digit",
      month: "short",
      year: "numeric",
    });
  };
}
