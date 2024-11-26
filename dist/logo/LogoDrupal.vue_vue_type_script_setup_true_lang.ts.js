import { defineComponent as i, computed as m, openBlock as o, createElementBlock as n, normalizeStyle as s, createElementVNode as l } from "vue";
const p = /* @__PURE__ */ i({
  __name: "LogoDrupal",
  props: {
    width: {},
    height: {}
  },
  setup(c) {
    const e = c, h = m(() => ({
      width: e.width || "1em",
      height: e.height || "1em",
      minWidth: e.width || "1em",
      minHeight: e.height || "1em"
    }));
    return (a, t) => (o(), n("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      width: "512",
      height: "138",
      preserveAspectRatio: "xMidYMid",
      version: "1.1",
      viewBox: "0 0 512 138",
      style: s(h.value)
    }, t[0] || (t[0] = [
      l("g", null, [
        l("path", {
          fill: "#009DDE",
          d: "M52.678 0c2.608 9.871 11.054 18.681 20.18 27.822l1.936 1.935c14.423 14.413 30.565 30.786 30.565 55.216A52.68 52.68 0 1 1 0 84.973c0-23.938 15.498-40.139 29.687-54.34l.876-.876.436-.436C40.684 19.64 49.928 10.41 52.679 0m360.323 78.806c3.192 17.228-7.268 34.051-24.132 38.808-15.916 3.876-23.087-8.484-24.39-11.73-.136-.338-.26-.705-.815-.698-.578.006-.642.602-.648.687v.01l-.005 8.63-.005-.005v23.04h-17.245V84.98c.002-17.521 13.355-32.155 30.803-33.758 17.449-1.602 33.244 10.355 36.437 27.584m-360.324.208s-3.307 3.596-6.771 7.443l-.485.538c-2.503 2.785-5.01 5.62-6.343 7.25a18.88 18.88 0 0 0-4.516 11.966A18.12 18.12 0 0 0 52.68 124.33c10.006 0 18.118-8.111 18.118-18.118a17.72 17.72 0 0 0-4.545-12.005 5792 5792 0 0 1-6.152-6.878l-.482-.54zm404.442-27.79c17.273 1.586 30.532 15.944 30.797 33.232l.004.524v31.506h-17.245l-.009-10.602s-.026-.69-.648-.7c-.557-.005-.679.363-.815.7-1.303 3.244-8.475 15.606-24.39 11.728-16.863-4.757-27.323-21.58-24.13-38.808 3.194-17.227 18.989-29.184 36.436-27.58m-117.452 1.073-.005 32.206c0 18.598-12.135 33.67-30.73 33.67-18.415 0-30.316-14.772-30.552-33.113l-.004-.557.005-32.175h17.167v32.175c0 9.411 4.073 17.025 13.489 17.025 9.298 0 13.348-7.432 13.444-16.686l.002-.34-.028-32.205zM512 32.673v83.84h-17.128v-83.84zM264.38 51.597a27.5 27.5 0 0 1 6.59 2.413l.565.302v19.509l-.012-.012a6 6 0 0 0-.298-.266l-.138-.114c-1.109-.903-4.325-3.16-10.197-4.55-14.63-3.459-22.25 9.816-22.4 12.83l-.003.088v34.66h-17.2V52.425h15.344l1.832 11.22s.061.583.602.594c.653.017.66-.208.85-.594.388-.786 9.7-15.454 24.465-12.047M168.838 32.64c25.418 0 44.696 4.665 44.696 41.855 0 36.835-20.42 41.858-46.124 41.858h-19.564V32.639zm285.166 35.183a17.162 17.162 0 1 0 17.16 17.158c-.003-9.475-7.684-17.156-17.16-17.158m-74.326 0c-9.475.003-17.156 7.683-17.159 17.158a17.162 17.162 0 1 0 17.159-17.158M172.553 47.151h-7.388v54.676l7.102.182c14.565 0 23.945-1.324 23.945-27.515 0-24.862-8.116-27.297-23.66-27.343M52.678 30.308l-.006.006-.148.148-.546.545-1.393 1.392-1.407 1.407-2.454 2.454-1.314 1.314-1.007 1.007-.187.187-.994.996-.274.273-.093.093c-2.015 2.006-6.075 5.755-1.186 11.037 2.54 2.745 10.048 10.642 17.855 18.965l1.042 1.112c9.214 9.835 18.553 19.97 20.386 22.682 1.575 2.331 1.802 3.423 3.934 3.346 1.195-.044 2.081-1.47 2.471-2.323 1.83-4 4.932-16.122-4.07-30.13-6.21-9.667-18.423-22.424-25.399-29.405l-.593-.592a292 292 0 0 0-4.617-4.514M29.355 54.713C7.239 76.591 19.16 97.14 22.39 97.248c.334.012.892.052 1.274-1.013 1.85-5.161 16.735-20.088 20.227-23.67a1.25 1.25 0 0 0 .097-1.866Z"
        })
      ], -1)
    ]), 4));
  }
});
export {
  p as _
};
