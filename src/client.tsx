import { autorun } from "mobx";
import * as React from "react";
import { renderToStaticMarkup } from "react-dom/server";
import { Layout } from "./components/Layout";
import { makeRouter } from "./routes";

const router = makeRouter("/bar");

autorun(router.run.bind(router));

autorun(() => {
  console.log(renderToStaticMarkup(
    <Layout>
      {router.element}
    </Layout>,
  ));
});

setTimeout(() => {
  router.path = "/";
}, 100);

setTimeout(() => {
  router.path = "/";
}, 200);

setTimeout(() => {
  router.path = "/bar";
}, 300);

setTimeout(() => {
  router.path = "/bar";
}, 400);
