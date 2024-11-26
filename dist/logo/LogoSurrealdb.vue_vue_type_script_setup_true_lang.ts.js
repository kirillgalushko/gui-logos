import { defineComponent as c, computed as i, openBlock as r, createElementBlock as h, normalizeStyle as l, createStaticVNode as a } from "vue";
const m = /* @__PURE__ */ c({
  __name: "LogoSurrealdb",
  props: {
    width: {},
    height: {}
  },
  setup(s) {
    const t = s, o = i(() => ({
      width: t.width || "1em",
      height: t.height || "1em",
      minWidth: t.width || "1em",
      minHeight: t.height || "1em"
    }));
    return (p, e) => (r(), h("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      width: "512",
      height: "111",
      preserveAspectRatio: "xMidYMid",
      version: "1.1",
      viewBox: "0 0 512 111",
      style: l(o.value)
    }, e[0] || (e[0] = [
      a('<defs><linearGradient id="surrealdb-gui-asset-a" x1="21.25%" x2="68.245%" y1="26.214%" y2="73.259%"><stop offset="0%" stop-color="#FF00A0"></stop><stop offset="100%" stop-color="#9600FF"></stop></linearGradient><linearGradient id="surrealdb-gui-asset-b" x1="31.047%" x2="68.957%" y1="11.705%" y2="88.303%"><stop offset="0%" stop-color="#FF00A0"></stop><stop offset="100%" stop-color="#9600FF"></stop></linearGradient></defs><g><path fill="#000" d="M161.091 49.974c8.429 1.337 16.71 7.214 16.576 15.912 0 5.35-2.27 10.294-6.417 13.766-14.575 11.508-40.377 4.552-40.781-14.833h13.373c.54 4.944 4.55 8.956 9.889 8.821 5.619 0 10.563-2.27 10.563-7.754 0-2.54-1.472-3.877-3.877-5.08-8.956-3.606-22.194-3.472-27.678-12.428-3.338-6.012-.663-14.17 4.675-18.452 4.416-3.607 10.159-5.08 16.317-5.08 10.968-.134 22.734 6.956 22.734 17.913h-13.643c-1.742-6.147-10.428-8.023-15.643-4.675-2.674 1.742-3.742 4.945-1.202 6.956 4.012 3.203 10.035 4.136 15.114 4.934m148.011-10.687c13.901-.405 26.072 12.968 23.127 27.139H298c3.214 8.821 14.845 10.698 20.318 3.214h13.103c-5.484 16.317-27.273 20.722-39.04 8.821-15.103-14.845-3.741-39.31 16.722-39.174m11.092 18.845a11.783 11.783 0 0 0-22.194 0zm70.066-33.286h12.036v60.425H390.26zm-173.554 14.44v22.319c-.663 15.912-22.464 15.912-22.992 0v-22.33H181.68v22.33c0 2.405.404 4.81 1.067 7.09 3.08 9.766 12.17 16.441 22.464 16.441s19.385-6.686 22.464-16.44c.663-2.27 1.068-4.675 1.068-7.091V39.287zM384.911 62.28c0-12.699-10.428-22.992-23.396-22.992s-23.397 10.293-23.397 22.992c0 12.698 10.417 22.992 23.397 22.992 4.146 0 8.023-1.067 11.36-2.944v2.944h12.036zm-23.531 11.9c-6.821 0-12.17-5.349-12.17-12.035 0-6.551 5.483-12.035 12.17-12.035 6.821 0 12.17 5.349 12.17 12.035s-5.495 12.036-12.17 12.036M257.623 39.288c-10.294 0-19.385 6.686-22.464 16.44-.663 2.27-1.068 4.675-1.068 7.091v22.33h12.036v-22.33c.27-8.023 5.888-12.035 11.496-12.035zm25.666 0c-10.293 0-19.384 6.686-22.464 16.44-.663 2.27-1.067 4.675-1.067 7.091v22.33h12.035v-22.33c.27-8.023 5.878-12.035 11.496-12.035z"></path><path fill="url(#surrealdb-gui-asset-a)" d="M442.538 27.116c-3.742-1.472-7.889-2.27-12.429-2.27h-22.464v60.302h22.464c4.81 0 9.091-.798 12.834-2.27C454.439 78.46 460.855 67.1 460.72 54.93c.135-12.17-6.686-23.408-18.182-27.814m5.35 27.937c.123 9.496-7.766 18.194-17.386 18.059h-10.967V37.006h10.967c9.631-.135 17.52 8.686 17.385 18.047m56.142-2.135c9.496-7.215 4.417-23.127-5.888-26.746-2.27-.932-4.675-1.337-7.215-1.337h-24.869v60.301h28.207c4.81 0 9.36-1.742 12.698-4.944 7.507-7.215 6.698-21.925-2.933-27.274M477.96 37.006h12.564c3.214 0 5.877 2.27 5.753 5.618.135 3.214-2.54 5.889-5.753 5.754H477.96zm15.643 36.106h-15.508V60.009h15.508c3.214-.135 5.888 3.472 5.753 6.686.135 3.068-2.54 6.552-5.753 6.417"></path><path fill="url(#surrealdb-gui-asset-b)" d="m47.198 28.97 26.217 14.52v-5.821L47.198 23.183c-3.9 2.158-22.745 12.575-26.217 14.486 3.225 1.786 37.095 20.497 57.682 31.87v5.798c-2.798 1.55-31.465 17.385-31.465 17.385a28209 28209 0 0 1-31.465-17.385V57.952l31.465 17.385 5.248-2.9-41.961-23.171v28.982L47.198 98.52c3.619-2 34.028-18.8 36.702-20.284V66.65L31.465 37.67zm-36.713 2.9v11.597L62.92 72.45l-15.733 8.698-26.218-14.52v5.822l26.218 14.485c3.9-2.157 22.745-12.575 26.217-14.485-3.225-1.787-37.084-20.497-57.671-31.881V34.77c2.798-1.55 31.465-17.384 31.465-17.384 7.833 4.337 23.622 13.058 31.465 17.384v17.385L47.198 34.769l-5.248 2.9L83.9 60.852V31.87L47.198 11.586A36323 36323 0 0 1 10.485 31.87M47.198 0 0 26.083v57.952l47.198 26.083 47.198-26.072V26.083zm41.939 81.136-41.939 23.183-41.95-23.183V28.982l41.95-23.183 41.95 23.183z"></path></g>', 2)
    ]), 4));
  }
});
export {
  m as _
};
