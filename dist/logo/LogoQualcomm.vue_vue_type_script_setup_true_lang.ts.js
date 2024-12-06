import { defineComponent as m, computed as i, openBlock as o, createElementBlock as n, normalizeStyle as s, createElementVNode as h } from "vue";
const a = /* @__PURE__ */ m({
  __name: "LogoQualcomm",
  props: {
    width: {},
    height: {}
  },
  setup(t) {
    const c = t, l = i(() => ({
      width: c.width || "1em",
      height: c.height || "1em",
      minWidth: c.width || "1em",
      minHeight: c.height || "1em"
    }));
    return (r, e) => (o(), n("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      width: "512",
      height: "95",
      preserveAspectRatio: "xMidYMid",
      version: "1.1",
      viewBox: "0 0 512 95",
      style: s(l.value)
    }, e[0] || (e[0] = [
      h("g", null, [
        h("path", {
          fill: "#3253DC",
          d: "M138.191 26.985a2.55 2.55 0 0 1 2.548 2.548V78.21c0 1.372-1.241 2.483-2.548 2.483h-6.6c-1.24 0-2.482-.98-2.482-2.352v-4.508c-3.332 4.9-9.082 8.298-17.445 8.298-13.983 0-22.608-9.279-22.608-23.065V29.402c0-1.372 1.242-2.483 2.549-2.483h6.599a2.48 2.48 0 0 1 2.483 2.483v27.77c0 8.95 4.704 14.896 13.982 14.896 9.082 0 14.44-6.141 14.44-14.766v-27.9c0-1.372 1.241-2.483 2.483-2.483h6.599M40.837 0C18.229 0 0 17.576 0 41.033c0 23.521 18.23 41.032 40.837 41.032a41.4 41.4 0 0 0 11.107-1.503l4.443 11.435c.458 1.241 1.372 2.025 3.006 2.025h7.056c1.7 0 2.94-1.11 2.156-3.267l-5.75-14.962C74.16 68.67 81.674 56.06 81.674 40.967 81.673 17.577 63.443 0 40.837 0m17.772 64.881-5.162-13.394c-.457-1.111-1.372-2.156-3.332-2.156h-6.73c-1.699 0-3.006 1.11-2.222 3.267l6.795 17.576c-2.221.588-4.639.849-7.121.849-16.531 0-28.292-13.002-28.292-29.99s11.76-29.99 28.292-29.99c16.53 0 28.291 13.002 28.291 29.99 0 9.931-3.985 18.425-10.52 23.848m453.19 13.069c.588 1.372-.13 2.679-1.764 2.679h-7.384c-1.372 0-2.482-.654-2.94-2.026l-13.656-36.72-13.851 36.72c-.588 1.438-1.568 2.026-2.94 2.026h-6.6c-1.372 0-2.352-.588-2.94-2.026L445.74 41.686l-13.787 36.916c-.588 1.372-1.568 2.026-2.94 2.026h-6.926c-1.372 0-2.352-.654-2.94-2.026L405.49 41.686l-14.113 36.916c-.588 1.438-1.568 2.026-2.94 2.026h-6.6c-1.372 0-2.352-.588-2.94-2.026l-13.786-36.916-13.787 36.916c-.457 1.372-1.568 2.026-2.94 2.026h-7.187c-1.699 0-2.352-1.372-1.764-2.68l18.687-48.872q.882-2.157 2.94-2.157h8.036c1.373 0 2.353.654 2.94 2.157l13.46 35.674 13.33-35.674q.882-2.157 2.94-2.157h7.906c1.372 0 2.352.654 2.94 2.157L425.81 64.75l13.199-35.674q.882-2.157 2.94-2.157h7.971c1.372 0 2.352.654 2.94 2.157l13.395 35.674 13.068-35.674q.882-2.157 2.94-2.157h8.036c1.373 0 2.353.654 2.94 2.157zm-309.64-50.964h-6.599a2.55 2.55 0 0 0-2.548 2.548v4.443c-3.332-5.031-9.866-8.625-17.576-8.625-14.57 0-27.05 11.5-27.05 28.292 0 16.988 12.545 28.422 26.985 28.422 7.84 0 14.178-3.593 17.706-8.624v4.704c0 1.372 1.242 2.483 2.549 2.483h6.599a2.48 2.48 0 0 0 2.483-2.483V29.533c-.066-1.437-1.176-2.548-2.549-2.548M176.675 71.35c-9.604 0-16.465-7.84-16.465-17.576 0-9.866 6.795-17.446 16.465-17.446 9.54 0 16.466 7.58 16.466 17.446-.066 9.8-6.991 17.576-16.466 17.576m104.215 1.698c1.438 1.765.196 3.137-.588 3.725-4.573 3.463-10.65 5.358-17.249 5.358-16.661 0-27.769-12.219-27.769-28.292s11.108-28.422 27.769-28.422c6.6 0 12.61 1.895 17.25 5.357.783.589 1.894 1.765.587 3.725l-3.136 4.377c-1.241 1.7-2.679 1.242-3.92.458-2.94-1.764-6.403-3.267-10.389-3.267-9.735 0-16.204 7.84-16.204 17.772s6.469 17.707 16.204 17.707c4.051 0 7.253-1.568 10.193-3.267 1.241-.654 2.548-1.242 3.92.588zm31.102-47.566c-15.682 0-28.161 12.284-28.161 28.292 0 16.138 12.545 28.291 28.16 28.291 15.682 0 28.162-12.218 28.162-28.291.065-15.943-12.48-28.292-28.161-28.292m0 45.802c-9.605 0-16.466-7.71-16.466-17.445 0-9.866 6.795-17.445 16.466-17.445 9.604 0 16.465 7.579 16.465 17.445 0 9.735-6.795 17.445-16.465 17.445M225.287 1.437c1.438 0 2.483 1.242 2.483 2.549V78.08c0 1.372-.98 2.548-2.483 2.548h-6.599c-1.372 0-2.548-1.242-2.548-2.548V4.05c0-1.372 1.241-2.548 2.548-2.548h6.6"
        })
      ], -1)
    ]), 4));
  }
});
export {
  a as _
};