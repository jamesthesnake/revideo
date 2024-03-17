import {Vector2} from '@revideo/core';

export interface CurveDrawingInfo {
  path: Path2D;
  arrowSize: number;
  endPoint: Vector2;
  endTangent: Vector2;
  startPoint: Vector2;
  startTangent: Vector2;
  startOffset: number;
}
