import { Wordle } from './components/wordle';
import { Coord2Create } from './utils/math';
import { Box } from './xylem/basic';
import { xComponent } from './xylem/xylem';
export function App() {
  return (
    <Box size={Coord2Create({ x: 1, y: 1 }, { x: 0, y: 0 })}>
      <Wordle></Wordle>
    </Box>
  );
}
