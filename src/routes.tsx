import * as React from "react";
import { Bar, IBarProps } from "./pages/Bar";
import { IIndexProps, Index } from "./pages/Index";
import { RouteConfig } from "./stores/RouteConfig";
import { Router } from "./stores/Router";

export function makeRouter(path: string): Router {
  return new Router(path, [
    new RouteConfig<IIndexProps>("/", Index),
    new RouteConfig<IBarProps>("/bar", Bar),
  ], <div>loading</div>);
}
