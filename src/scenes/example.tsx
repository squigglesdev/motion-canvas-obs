import { Circle } from '@motion-canvas/2d/lib/components';
import {makeScene2D} from '@motion-canvas/2d/lib/scenes';
import {loop, waitFor, waitUntil} from '@motion-canvas/core/lib/flow';
import { cancel } from '@motion-canvas/core/lib/threading';
import { createRef } from '@motion-canvas/core/lib/utils';

export default makeScene2D(function* (view) {
  // Create your animations here

  const circle = createRef<Circle>();

  view.add(
    <Circle
      ref={circle}
      size={[100,100]}
      fill={"#fff"}
    />
  )

  

  yield* circle().scale(2,1).to(1,1)
  yield* circle().size([200,100],1).to([100,100],1)
  yield* circle().position([200,-100],1).to([100,100],1).to([0,0],1)
  yield* circle().scale(2,1).to(1,1)
  yield* circle().size([200,100],1).to([100,100],1)
  yield* circle().position([200,-100],1).to([100,100],1).to([0,0],1)
  yield* circle().scale(2,1).to(1,1)
  yield* circle().size([200,100],1).to([100,100],1)
  yield* circle().position([200,-100],1).to([100,100],1).to([0,0],1)
  yield* circle().scale(2,1).to(1,1)
  yield* circle().size([200,100],1).to([100,100],1)
  yield* circle().position([200,-100],1).to([100,100],1).to([0,0],1)
  yield* circle().scale(2,1).to(1,1)
  yield* circle().size([200,100],1).to([100,100],1)
  yield* circle().position([200,-100],1).to([100,100],1).to([0,0],1)
  yield* circle().scale(2,1).to(1,1)
  yield* circle().size([200,100],1).to([100,100],1)
  yield* circle().position([200,-100],1).to([100,100],1).to([0,0],1)
  yield* circle().scale(2,1).to(1,1)
  yield* circle().size([200,100],1).to([100,100],1)
  yield* circle().position([200,-100],1).to([100,100],1).to([0,0],1)
  yield* waitUntil("End");
});
