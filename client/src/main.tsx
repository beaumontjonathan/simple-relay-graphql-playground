import { Suspense } from "react";
import ReactDOM from "react-dom/client";
import { RelayEnvironmentProvider } from "react-relay";
import { relayEnvironment } from "./relay";
import { App } from "./App";

// eslint-disable-next-line @typescript-eslint/no-non-null-assertion -- Will anyway without root
ReactDOM.createRoot(document.getElementById("root")!).render(
  <RelayEnvironmentProvider environment={relayEnvironment as any}>
    <Suspense fallback={<div>Loading...</div>}>
      <App />
    </Suspense>
  </RelayEnvironmentProvider>
);
