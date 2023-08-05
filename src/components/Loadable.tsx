import { Suspense } from "react";
import Loader from "./Loader";

const Loadable = (Comp: JSX.ElementType) => {
  const LoadableComponent = (props: any) => (
    <Suspense fallback={<Loader fullscreen />}>
      <Comp {...props} />
    </Suspense>
  );
  return LoadableComponent;
};

export default Loadable;
