import { isValidElement, type ReactElement, type ReactNode } from "react";
import { describe, expect, it } from "vitest";

import RootLayout from "../app/layout";

type ElementProps = {
  alt?: string;
  children?: ReactNode;
  dangerouslySetInnerHTML?: {
    __html?: string;
  };
  id?: string;
  src?: string;
  strategy?: string;
  style?: Record<string, string | number>;
};

function collectElements(node: ReactNode): ReactElement<ElementProps>[] {
  if (Array.isArray(node)) {
    return node.flatMap(collectElements);
  }

  if (!isValidElement<ElementProps>(node)) {
    return [];
  }

  return [node, ...collectElements(node.props.children)];
}

describe("root layout analytics", () => {
  it("loads Yandex Metrika globally after hydration with noscript fallback", () => {
    const layout = RootLayout({ children: null });
    const elements = collectElements(layout);

    const metrikaScript = elements.find((element) => element.props.id === "yandex-metrika");
    const metrikaScriptContent = metrikaScript?.props.dangerouslySetInnerHTML?.__html ?? "";

    expect(metrikaScript?.props.strategy).toBe("afterInteractive");
    expect(metrikaScriptContent).toContain("https://mc.yandex.ru/metrika/tag.js?id=109497871");
    expect(metrikaScriptContent).toContain("ym(109497871, 'init'");
    expect(metrikaScriptContent).toContain("webvisor:true");
    expect(metrikaScriptContent).toContain('ecommerce:"dataLayer"');

    const noscript = elements.find((element) => element.type === "noscript");
    const noscriptElements = collectElements(noscript?.props.children);
    const fallbackImage = noscriptElements.find((element) => element.type === "img");

    expect(fallbackImage?.props.src).toBe("https://mc.yandex.ru/watch/109497871");
    expect(fallbackImage?.props.style).toEqual({
      position: "absolute",
      left: "-9999px"
    });
    expect(fallbackImage?.props.alt).toBe("");
  });
});
