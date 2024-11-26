import { defineComponent as o, computed as e, openBlock as m, createElementBlock as i, normalizeStyle as n, createStaticVNode as l } from "vue";
const r = /* @__PURE__ */ o({
  __name: "LogoProductboard",
  props: {
    width: {},
    height: {}
  },
  setup(t) {
    const a = t, h = e(() => ({
      width: a.width || "1em",
      height: a.height || "1em",
      minWidth: a.width || "1em",
      minHeight: a.height || "1em"
    }));
    return (p, c) => (m(), i("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      width: "512",
      height: "64",
      preserveAspectRatio: "xMidYMid",
      version: "1.1",
      viewBox: "0 0 512 64",
      style: n(h.value)
    }, c[0] || (c[0] = [
      l('<g><g transform="translate(0 5.226)"><polygon fill="#FF2638" points="27.8627462 27.4283703 55.7254923 54.8567407 0 54.8567407"></polygon><polygon fill="#FFC600" points="0 0 27.8627462 27.4283703 55.7254923 0"></polygon><polygon fill="#0079F2" points="27.8672243 27.4283703 55.7299704 54.8567407 83.5927166 27.4283703 55.7299704 0"></polygon></g><path fill="#000C2C" d="M504.243 18.226c0 .398-.55.573-.81.269-2.038-2.37-5.405-4.165-10.013-4.165-9.973 0-15.642 8.052-15.642 17.8 0 9.687 5.669 17.734 15.642 17.734 4.67 0 8.32-1.635 10.586-4.456.255-.314.824-.143.824.26v3.013a.4.4 0 0 0 .398.403h6.368a.4.4 0 0 0 .403-.403V.403a.403.403 0 0 0-.403-.403h-6.954a.403.403 0 0 0-.399.403zm.323 13.904c0 6.09-3.583 10.864-9.516 10.864-5.867 0-9.516-4.778-9.516-10.864 0-6.215 3.65-10.926 9.516-10.926 5.933 0 9.516 4.71 9.516 10.926m-28.723-16.904a.4.4 0 0 0-.367-.399 13 13 0 0 0-.744-.036c-4.791 0-7.581 1.921-9.117 3.802-.26.314-.855.143-.855-.269v-2.807a.403.403 0 0 0-.399-.403h-6.372a.403.403 0 0 0-.399.403V48.68a.4.4 0 0 0 .399.403h6.959a.403.403 0 0 0 .398-.403V31.414c0-6.547 3.26-9.427 8.737-9.427.466 0 .958.045 1.299.077a.416.416 0 0 0 .461-.403zm-32.847 17.957a.403.403 0 0 1 .461.398v1.693c0 4.581-3.063 8.508-9.323 8.508-3.717 0-6-1.245-6-4.45 0-2.356 1.567-4.12 6.327-4.846l8.535-1.299zm-10.425 16.685c4.823 0 8.45-1.406 10.801-4.164.256-.305.815-.135.833.268.094 1.948.372 3.108.426 3.108h6.757c.287 0 .488-.296.399-.569-.47-1.486-.77-3.896-.77-5.844V27.025c0-7.787-4.694-12.695-14.6-12.695-9.98 0-14.07 5.23-14.875 11.012a.4.4 0 0 0 .394.443h6.775a.42.42 0 0 0 .403-.336c.631-2.942 3.023-4.702 7.107-4.702 4.626 0 7.236 2.091 7.236 6.216v.174c0 .2-.146.37-.344.399l-9.436 1.325c-8.93 1.24-12.968 4.971-12.968 10.73 0 5.821 3.452 10.277 11.862 10.277m-32.394 0c10.819 0 17.599-8.181 17.599-17.733 0-9.556-6.78-17.805-17.6-17.805-10.756 0-17.531 8.249-17.531 17.8 0 9.557 6.775 17.734 17.532 17.734zM390.4 32.135c0-6.614 4.169-10.931 9.776-10.931 5.673 0 9.842 4.317 9.842 10.926 0 6.547-4.169 10.864-9.842 10.864-5.607 0-9.776-4.317-9.776-10.864zm-36.322-13.64c-.26.304-.806.13-.806-.27V.404A.403.403 0 0 0 352.87 0h-6.955a.403.403 0 0 0-.403.403v48.274c0 .224.18.403.403.403h6.368c.224 0 .403-.18.403-.403v-3.045c0-.403.556-.573.806-.26 2.316 2.844 5.97 4.496 10.6 4.496 10.035 0 15.71-8.051 15.71-17.733 0-9.753-5.675-17.805-15.71-17.805-4.554 0-7.962 1.796-10.013 4.165m-1.07 13.635c0-6.215 3.582-10.926 9.516-10.926 5.866 0 9.52 4.71 9.52 10.926 0 6.09-3.654 10.864-9.52 10.864-5.93 0-9.516-4.778-9.516-10.864m-14.084 10.55a.43.43 0 0 0-.52-.407 10 10 0 0 1-1.89.202c-2.673 0-3.779-1.312-3.779-3.995V21.732a.403.403 0 0 1 .403-.398h5.517c.224 0 .403-.18.403-.403v-5.405a.403.403 0 0 0-.403-.403h-5.521a.403.403 0 0 1-.403-.403V6.69c0-.22-.178-.4-.399-.403h-6.954a.403.403 0 0 0-.403.403v8.034a.403.403 0 0 1-.403.403h-4.344c-.22 0-.4.178-.403.399v5.414c0 .224.18.403.403.403h4.344a.4.4 0 0 1 .403.398v17.532c0 6.413 3 10.013 9.91 10.013 1.916 0 3.197-.215 3.744-.327a.376.376 0 0 0 .295-.376zm-54.713-10.55c0 9.816 6.91 17.734 16.882 17.734 9.79 0 14.867-6.655 15.96-12.629a.39.39 0 0 0-.39-.456h-7.173a.41.41 0 0 0-.395.304c-1.003 3.498-4.012 5.911-8.07 5.911-5.538 0-9.058-4.514-9.058-10.864 0-6.412 3.52-10.926 9.059-10.926 4.057 0 7.066 2.414 8.07 5.91a.41.41 0 0 0 .394.305h7.173a.39.39 0 0 0 .39-.456c-1.093-5.974-6.17-12.629-15.96-12.629-9.973 0-16.882 7.918-16.882 17.796m-13.063 2.553c0 5.562-2.996 8.508-7.819 8.508-4.693 0-6.583-3.076-6.583-7.72V15.517a.403.403 0 0 0-.403-.403h-6.954a.403.403 0 0 0-.403.403v21.002c0 7.917 4.24 13.345 12.449 13.345 4.559 0 7.671-1.715 9.413-3.843.264-.322.891-.138.891.278v2.382c0 .224.18.403.403.403h6.364a.4.4 0 0 0 .403-.403V15.517a.403.403 0 0 0-.403-.403h-6.955a.403.403 0 0 0-.403.403zm-35.87-16.457c0 .398-.55.573-.81.269-2.038-2.37-5.405-4.165-10.013-4.165-9.973 0-15.647 8.052-15.647 17.8 0 9.687 5.674 17.734 15.647 17.734 4.666 0 8.316-1.635 10.586-4.456.255-.314.82-.143.82.26v3.013c0 .224.179.403.403.403h6.367a.4.4 0 0 0 .404-.403V.403a.403.403 0 0 0-.404-.403h-6.954a.403.403 0 0 0-.403.403v17.823zm.323 13.904c0 6.09-3.583 10.864-9.516 10.864-5.866 0-9.52-4.778-9.52-10.864 0-6.215 3.654-10.926 9.52-10.926 5.929 0 9.516 4.71 9.516 10.926M188.08 49.868c10.824 0 17.6-8.181 17.6-17.733 0-9.56-6.772-17.805-17.6-17.805-10.752 0-17.532 8.249-17.532 17.8 0 9.557 6.78 17.734 17.532 17.734zm-9.775-17.733c0-6.614 4.169-10.931 9.775-10.931 5.674 0 9.843 4.317 9.843 10.926 0 6.547-4.169 10.864-9.843 10.864-5.606 0-9.775-4.317-9.775-10.864zm-8.648-16.91a.4.4 0 0 0-.367-.398 13 13 0 0 0-.739-.036c-4.791 0-7.586 1.921-9.122 3.802-.26.314-.85.143-.85-.269v-2.807a.403.403 0 0 0-.404-.403h-6.367a.403.403 0 0 0-.403.403V48.68c0 .224.179.403.403.403h6.954a.4.4 0 0 0 .403-.403V31.414c0-6.547 3.256-9.427 8.732-9.427.47 0 .959.045 1.3.077a.416.416 0 0 0 .46-.403zM120.085 46c0-.403.555-.578.82-.269 2.046 2.396 5.454 4.138 10.003 4.138 10.036 0 15.71-8.051 15.71-17.733 0-9.753-5.674-17.805-15.71-17.805-4.634 0-8.289 1.706-10.604 4.523-.25.309-.806.134-.806-.269v-3.067a.403.403 0 0 0-.403-.403h-6.363a.403.403 0 0 0-.403.403V62.29c0 .224.179.403.403.403h6.954a.4.4 0 0 0 .403-.403V46zm-.26-13.869c0-6.282 3.583-11.06 9.516-11.06 5.866 0 9.52 4.778 9.52 11.06 0 6.09-3.654 10.864-9.52 10.864-5.929 0-9.516-4.778-9.516-10.864"></path></g>', 1)
    ]), 4));
  }
});
export {
  r as _
};
