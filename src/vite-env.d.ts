/// <reference types="vite/client" />

import type { JSX_ElementTagNameMap } from "@melvdouc/dsx";

declare global {
  namespace JSX {
    interface Element extends globalThis.Node { }

    interface ElementChildrenAttribute {
      children: unknown;
    }

    interface IntrinsicElements extends JSX_ElementTagNameMap { }
  }

  const Dsx: typeof import("@melvdouc/dsx").Dsx;
}