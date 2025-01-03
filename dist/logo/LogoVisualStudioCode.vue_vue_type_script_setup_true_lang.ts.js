import { defineComponent as s, computed as l, openBlock as o, createElementBlock as u, normalizeStyle as d, createStaticVNode as c } from "vue";
const n = /* @__PURE__ */ s({
  __name: "LogoVisualStudioCode",
  props: {
    width: {},
    height: {}
  },
  setup(e) {
    const t = e, i = l(() => ({
      width: t.width || "1em",
      height: t.height || "1em",
      minWidth: t.width || "1em",
      minHeight: t.height || "1em"
    }));
    return (r, a) => (o(), u("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      "xmlns:xlink": "http://www.w3.org/1999/xlink",
      width: "256",
      height: "254",
      preserveAspectRatio: "xMidYMid",
      version: "1.1",
      viewBox: "0 0 256 254",
      style: d(i.value)
    }, a[0] || (a[0] = [
      c('<defs><linearGradient id="visual-studio-code-gui-asset-c" x1="50%" x2="50%" y1="0%" y2="100%"><stop offset="0%" stop-color="#FFF"></stop><stop offset="100%" stop-color="#FFF" stop-opacity="0"></stop></linearGradient><path id="visual-studio-code-gui-asset-a" d="M180.828 252.605a15.87 15.87 0 0 0 12.65-.486l52.501-25.262a15.94 15.94 0 0 0 9.025-14.364V41.197a15.94 15.94 0 0 0-9.025-14.363l-52.5-25.263a15.88 15.88 0 0 0-18.115 3.084L74.857 96.35l-43.78-33.232a10.614 10.614 0 0 0-13.56.603L3.476 76.494c-4.63 4.211-4.635 11.495-.012 15.713l37.967 34.638-37.967 34.637c-4.623 4.219-4.618 11.502.012 15.714l14.041 12.772a10.614 10.614 0 0 0 13.56.604l43.78-33.233 100.507 91.695a15.85 15.85 0 0 0 5.464 3.571m10.464-183.649-76.262 57.889 76.262 57.888z"></path></defs><g><mask id="visual-studio-code-gui-asset-b" fill="#fff"><use xlink:href="#visual-studio-code-gui-asset-a"></use></mask><path fill="#0065A9" fill-rule="nonzero" d="M246.135 26.873 193.593 1.575a15.885 15.885 0 0 0-18.123 3.08L3.466 161.482c-4.626 4.219-4.62 11.502.012 15.714l14.05 12.772a10.625 10.625 0 0 0 13.569.604L238.229 33.436c6.949-5.271 16.93-.315 16.93 8.407v-.61a15.94 15.94 0 0 0-9.024-14.36" mask="url(#visual-studio-code-gui-asset-b)"></path><path fill="#007ACC" fill-rule="nonzero" d="m246.135 226.816-52.542 25.298a15.89 15.89 0 0 1-18.123-3.08L3.466 92.207c-4.626-4.218-4.62-11.502.012-15.713l14.05-12.773a10.625 10.625 0 0 1 13.569-.603l207.132 157.135c6.949 5.271 16.93.315 16.93-8.408v.611a15.94 15.94 0 0 1-9.024 14.36" mask="url(#visual-studio-code-gui-asset-b)"></path><path fill="#1F9CF0" fill-rule="nonzero" d="M193.428 252.134a15.89 15.89 0 0 1-18.125-3.083c5.881 5.88 15.938 1.715 15.938-6.603V11.273c0-8.318-10.057-12.483-15.938-6.602a15.89 15.89 0 0 1 18.125-3.084l52.533 25.263a15.94 15.94 0 0 1 9.03 14.363V212.51c0 6.125-3.51 11.709-9.03 14.363z" mask="url(#visual-studio-code-gui-asset-b)"></path><path fill="url(#visual-studio-code-gui-asset-c)" fill-opacity=".25" d="M180.828 252.605a15.87 15.87 0 0 0 12.65-.486l52.5-25.263a15.94 15.94 0 0 0 9.026-14.363V41.197a15.94 15.94 0 0 0-9.025-14.363L193.477 1.57a15.88 15.88 0 0 0-18.114 3.084L74.857 96.35l-43.78-33.232a10.614 10.614 0 0 0-13.56.603L3.476 76.494c-4.63 4.211-4.635 11.495-.012 15.713l37.967 34.638-37.967 34.637c-4.623 4.219-4.618 11.502.012 15.714l14.041 12.772a10.614 10.614 0 0 0 13.56.604l43.78-33.233 100.506 91.695a15.9 15.9 0 0 0 5.465 3.571m10.464-183.65-76.262 57.89 76.262 57.888z" mask="url(#visual-studio-code-gui-asset-b)"></path></g>', 2)
    ]), 4));
  }
});
export {
  n as _
};
