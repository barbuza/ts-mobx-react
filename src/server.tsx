import { when } from "mobx";
import * as React from "react";
import { renderToStaticMarkup } from "react-dom/server";
import { Layout } from "./components/Layout";
import { makeRouter } from "./routes";

const router = makeRouter("/bar");

router.run();

when(() => router.ready, () => {
  console.log(renderToStaticMarkup(
    <Layout>
      {router.element}
    </Layout>,
  ));
});
