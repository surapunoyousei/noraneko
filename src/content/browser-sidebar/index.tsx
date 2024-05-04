import { render } from "@solid-xul/solid-xul";
import { IconBar } from "./IconBar";
import { customElement } from "solid-element";
import Sortable from "sortablejs";

export function initSidebar() {
  render(
    () => (
      <section id="@nora:tmp:sidebar:base">
        <IconBar />
      </section>
    ),
    document.getElementById("browser"),
  );
  //@ts-expect-error
  // biome-ignore lint/style/noNonNullAssertion: <explanation>
  Sortable.create(document.getElementById("nyanrusIconBar")!);
}
