import RenderApplication from "./render-application";

describe("RenderApplication", () => {
  describe("render", () => {
    test("returns true when successful", () => {
      const element = document.createElement("div");
      element.setAttribute("id", "app");
      document.body.appendChild(element);
      expect(RenderApplication.render("#app", "<div>dummy content</div>")).toBe(
        true
      );
    });

    test("Returns false when an error occurs", () => {
      expect(
        RenderApplication.render("#notReal", "<div>dummy content</div>")
      ).toBe(false);
    });
  });
});
