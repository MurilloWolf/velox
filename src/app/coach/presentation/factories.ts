import { createElement, type ComponentType } from "react";

import type { RendererFactory } from "./types";

export const makeRenderer = <P extends object = Record<string, never>>(
  Component: ComponentType<P>,
  props?: P
): RendererFactory => {
  const RenderedComponent = () => createElement(Component, props ?? ({} as P));
  RenderedComponent.displayName = `RenderedComponent(${
    Component.displayName || Component.name || "Anonymous"
  })`;
  return RenderedComponent;
};
