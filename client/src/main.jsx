import { Suspense } from "react";
import ReactDOM from "react-dom/client";
import { RelayEnvironmentProvider } from "react-relay";
import { relayEnvironment } from "./relay";
import App from "./App";

ReactDOM.createRoot(document.getElementById("root")).render(
  <RelayEnvironmentProvider environment={relayEnvironment}>
    <Suspense fallback={<div>Loading...</div>}>
      <App />
    </Suspense>
  </RelayEnvironmentProvider>
);
