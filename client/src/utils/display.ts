// 传入某个轴上父元素大小、字元素数量、字容器间距大小、旁间距大小、字元素 id，计算该子元素在该轴上的位置和大小，使子元素等距分布
export function grid(
  all: number,
  padding: number,
  gap: number,
  cnt: number,
  id: number
): { size: number; position: number } {
  // 计算可用空间（减去两侧的padding）
  const availableSpace = all - 2 * padding;

  // 计算所有间隙的总大小
  const totalGaps = (cnt - 1) * gap;

  // 计算所有元素可用的总空间
  const spaceForElements = availableSpace - totalGaps;

  // 计算每个元素的大小
  const elementSize = spaceForElements / cnt;

  // 计算当前元素的位置
  const position = padding + id * (elementSize + gap);

  return {
    position,
    size: elementSize,
  };
}
