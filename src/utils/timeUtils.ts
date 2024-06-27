export const calculateTotalTime = (
  startTime: string,
  endTime: string
): number => {
  const start = new Date(`1970-01-01T${startTime}:00`);
  const end = new Date(`1970-01-01T${endTime}:00`);
  const diff = (end.getTime() - start.getTime()) / (1000 * 60 * 60); // 時間に変換
  return diff;
};
