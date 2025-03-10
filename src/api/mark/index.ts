import { CompositeMarkType } from '../../spec';
import {
  Interval,
  Rect,
  Point,
  Area,
  Line,
  Cell,
  Vector,
  Link,
  Polygon,
  Image,
  Text,
  Box,
  LineX,
  LineY,
  Range,
  RangeX,
  RangeY,
  Connector,
  Sankey,
  Treemap,
  Boxplot,
  Density,
  Heatmap,
  Path,
  Shape,
  Pack,
  ForceGraph,
  Tree,
  WordCloud,
  Composite,
  Gauge,
  AxisX,
  AxisY,
  Legends,
} from './mark';

export interface Mark {
  mark(Composite: CompositeMarkType): Composite;
  interval(): Interval;
  rect(): Rect;
  point(): Point;
  area(): Area;
  line(): Line;
  cell(): Cell;
  vector(): Vector;
  link(): Link;
  polygon(): Polygon;
  image(): Image;
  text(): Text;
  box(): Box;
  lineX(): LineX;
  lineY(): LineY;
  range(): Range;
  rangeX(): RangeX;
  rangeY(): RangeY;
  connector(): Connector;
  sankey(): Sankey;
  treemap(): Treemap;
  boxplot(): Boxplot;
  density(): Density;
  heatmap(): Heatmap;
  path(): Path;
  shape(): Shape;
  pack(): Pack;
  forceGraph(): ForceGraph;
  tree(): Tree;
  wordCloud(): WordCloud;
  gauge(): Gauge;
  axisX(): AxisX;
  axisY(): AxisY;
  legends(): Legends;
}

export { MarkNode } from './base';

export const mark = {
  mark: Composite,
  interval: Interval,
  rect: Rect,
  point: Point,
  area: Area,
  line: Line,
  cell: Cell,
  vector: Vector,
  link: Link,
  polygon: Polygon,
  image: Image,
  text: Text,
  box: Box,
  lineX: LineX,
  lineY: LineY,
  range: Range,
  rangeX: RangeX,
  rangeY: RangeY,
  connector: Connector,
  sankey: Sankey,
  treemap: Treemap,
  boxplot: Boxplot,
  density: Density,
  heatmap: Heatmap,
  path: Path,
  shape: Shape,
  pack: Pack,
  forceGraph: ForceGraph,
  tree: Tree,
  wordCloud: WordCloud,
  gauge: Gauge,
  axisX: AxisX,
  axisY: AxisY,
  legends: Legends,
};
