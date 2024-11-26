import { defineComponent as p, computed as i, openBlock as r, createElementBlock as l, normalizeStyle as a, createStaticVNode as c } from "vue";
const f = /* @__PURE__ */ p({
  __name: "LogoCypress2",
  props: {
    width: {},
    height: {}
  },
  setup(o) {
    const t = o, e = i(() => ({
      width: t.width || "1em",
      height: t.height || "1em",
      minWidth: t.width || "1em",
      minHeight: t.height || "1em"
    }));
    return (n, s) => (r(), l("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      width: "256",
      height: "256",
      preserveAspectRatio: "xMidYMid",
      version: "1.1",
      viewBox: "0 0 256 256",
      style: a(e.value)
    }, s[0] || (s[0] = [
      c('<defs><linearGradient id="cypress-2-gui-asset-a" x1="6.32%" x2="87.52%" y1="44.028%" y2="58.406%"><stop offset="0%" stop-color="#315C55"></stop><stop offset="100%" stop-color="#09293F"></stop></linearGradient><linearGradient id="cypress-2-gui-asset-b" x1="54.298%" x2="50%" y1="27.262%" y2="100%"><stop offset="0%" stop-color="#4FB38D"></stop><stop offset="100%" stop-color="#315C55"></stop></linearGradient><linearGradient id="cypress-2-gui-asset-c" x1="13.909%" x2="70.819%" y1="50%" y2="54.96%"><stop offset="0%" stop-color="#4FB38D"></stop><stop offset="100%" stop-color="#97DEC0"></stop></linearGradient><linearGradient id="cypress-2-gui-asset-d" x1="53.86%" x2="38.388%" y1="30.892%" y2="95.794%"><stop offset="0%" stop-color="#97DEC0"></stop><stop offset="100%" stop-color="ivory" stop-opacity="0"></stop><stop offset="100%" stop-color="ivory" stop-opacity="0"></stop></linearGradient></defs><g><path fill="url(#cypress-2-gui-asset-a)" d="m141.651 223.943-4.335 10.526c-.861 2.084-2.83 3.495-5.046 3.59-1.464.056-2.94.097-4.431.097-51.024-.027-96.169-36.113-107.355-85.836l-17.369 3.933c6.277 27.89 22.032 53.204 44.365 71.295 22.592 18.296 51.052 28.397 80.167 28.452h.26c1.71 0 3.406-.041 5.101-.11 9.136-.383 17.3-6.126 20.788-14.637l5.661-13.76z"></path><path fill="url(#cypress-2-gui-asset-b)" d="M4.54 161.914A128.5 128.5 0 0 1 0 128.007C0 75.516 32.863 27.52 81.782 8.593l6.414 16.652c-42.108 16.295-70.39 57.59-70.39 102.762a110.7 110.7 0 0 0 3.898 29.178z"></path><path fill="url(#cypress-2-gui-asset-c)" d="M225.693 77.298c-19.037-36.662-56.509-59.44-97.769-59.44-14.62 0-28.828 2.823-42.204 8.374L78.897 9.744C94.446 3.29 110.939 0 127.924 0c47.934 0 91.45 26.451 113.564 69.047z"></path><path fill="#09293F" d="M89.727 101.597c10.326 0 18.737 5.523 23.058 15.158l.342.754 17.34-5.907-.369-.891c-6.715-16.405-22.182-26.602-40.37-26.602-12.787 0-23.181 4.112-31.77 12.554-8.533 8.388-12.855 18.94-12.855 31.371 0 12.321 4.322 22.82 12.855 31.207 8.589 8.443 18.983 12.554 31.77 12.554 18.188 0 33.655-10.197 40.37-26.588l.37-.89-17.368-5.922-.329.782c-3.87 9.47-12.486 15.13-23.044 15.13-7.193 0-13.265-2.521-18.08-7.483-4.867-5.03-7.329-11.348-7.329-18.776 0-7.483 2.407-13.678 7.33-18.94 4.8-4.99 10.886-7.511 18.08-7.511"></path><polygon fill="#09293F" points="198.340727 85.7264 173.628774 148.454933 148.752008 85.7264 128.402302 85.7264 163.289639 171.342933 138.467634 231.728 156.26007 235.277867 217.569168 85.7264"></polygon><path fill="url(#cypress-2-gui-asset-d)" d="M241.488 69.047C250.491 86.585 256 107.185 256 128.27c0 49.2-27.671 91.916-68.253 113.343l-8.768-15.548c35.19-18.352 59.227-55.258 59.227-97.795 0-18.46-4.513-35.691-12.513-50.973z"></path></g>', 2)
    ]), 4));
  }
});
export {
  f as _
};
