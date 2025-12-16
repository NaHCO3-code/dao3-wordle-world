export function Vec2Create(x: number, y: number) {
  return Vec2.create({
    x,
    y,
  });
}

export function Coord2Create(
  scale: { x: number; y: number },
  offset: { x: number; y: number }
) {
  return Coord2.create({
    scale: Vec2Create(scale.x, scale.y),
    offset: Vec2Create(offset.x, offset.y),
  });
}

export function Vec2Add(
  v1: { x: number; y: number },
  v2: { x: number; y: number }
): Vec2 {
  return Vec2Create(v1.x + v2.x, v1.y + v2.y);
}

export function Coord2SetPosition(
  coord: Coord2,
  position: { x: number; y: number }
): Coord2 {
  return Coord2Create(coord.scale, position);
}

export function Coord2SetScale(
  coord: Coord2,
  scale: { x: number; y: number }
): Coord2 {
  return Coord2Create(scale, coord.offset);
}

export function Coord2AddPosition(
  coord: Coord2,
  position: { x: number; y: number }
): Coord2 {
  return Coord2Create(coord.scale, Vec2Add(coord.offset, position));
}

export function Coord2AddScale(
  coord: Coord2,
  scale: { x: number; y: number }
): Coord2 {
  return Coord2Create(Vec2Add(coord.scale, scale), coord.offset);
}

export function ColorCreate(r: number, g: number, b: number): Vec3 {
  return Vec3.create({ r, g, b });
}

export function ColorFromHex(hex: number) {
  return ColorCreate(
    (hex & 0xff0000) >> 16,
    (hex & 0x00ff00) >> 8,
    hex & 0x0000ff
  );
}
