import { defineComponent as c, computed as s, openBlock as a, createElementBlock as h, normalizeStyle as l, createStaticVNode as r } from "vue";
const p = /* @__PURE__ */ c({
  __name: "LogoAwsAthena",
  props: {
    width: {},
    height: {}
  },
  setup(i) {
    const t = i, o = s(() => ({
      width: t.width || "1em",
      height: t.height || "1em",
      minWidth: t.width || "1em",
      minHeight: t.height || "1em"
    }));
    return (n, e) => (a(), h("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      width: "256",
      height: "256",
      preserveAspectRatio: "xMidYMid",
      version: "1.1",
      viewBox: "0 0 256 256",
      style: l(o.value)
    }, e[0] || (e[0] = [
      r('<defs><linearGradient id="aws-athena-gui-asset-a" x1="0%" x2="100%" y1="100%" y2="0%"><stop offset="0%" stop-color="#4D27A8"></stop><stop offset="100%" stop-color="#A166FF"></stop></linearGradient></defs><g><rect width="256" height="256" x="0" y="0" fill="url(#aws-athena-gui-asset-a)"></rect><path fill="#FFF" d="M122.544 87.126c14.375 0 22.25 3.22 23.685 4.835-1.436 1.615-9.31 4.836-23.685 4.836s-22.249-3.22-23.684-4.836c1.435-1.615 9.309-4.835 23.684-4.835m-1.636 25.778a1.63 1.63 0 0 1-.898-1.448c0-.896.724-1.628 1.61-1.628.257 0 .492.074.711.187zm18.508 26.587c-.238.193-.785.567-1.909 1.019-1 .4-2.185.76-3.529 1.076-3.57.839-7.96 1.3-12.361 1.3-9.627 0-16.335-2.08-17.78-3.37L99.57 99.684c6.54 2.675 16.173 3.562 22.973 3.562 6.686 0 16.11-.86 22.646-3.434l-2.55 17.519c-4.806-1.812-10.802-4.443-16.485-7.209-.578-2.005-2.378-3.481-4.535-3.481-2.617 0-4.745 2.163-4.745 4.816 0 2.66 2.128 4.82 4.745 4.82.62 0 1.21-.13 1.75-.348 7.94 3.92 13.858 6.434 18.31 7.985zM92.39 92.31l5.142 48.01c.362 8.91 23.106 9.013 24.085 9.013 4.869 0 9.766-.522 13.79-1.463 1.649-.387 3.142-.845 4.434-1.364 3.755-1.509 5.724-3.566 5.86-6.11l2.141-14.713c1.458.3 2.65.432 3.599.432 2.989 0 3.776-1.225 4.32-2.07.571-.89.736-1.982.47-3.082-.61-2.527-4.177-5.854-6.56-7.83l3.012-20.701-.029-.003c.013-.158.064-.306.064-.468 0-8.907-18.968-11.283-30.174-11.283S92.371 83.054 92.371 91.96c0 .12.041.226.047.345zm28.684-28.12c27.683 0 50.205 22.861 50.205 50.96 0 28.1-22.522 50.96-50.205 50.96-27.687 0-50.209-22.86-50.209-50.96 0-28.099 22.522-50.96 50.209-50.96m-79.522 69.682v6.447h28.586v-.38c9.137 19.26 28.506 32.619 50.936 32.619 31.183 0 56.557-25.752 56.557-57.407 0-31.656-25.374-57.408-56.557-57.408-24.263 0-44.943 15.617-52.96 37.442H41.552v6.448h24.612c-.99 4.15-1.572 8.453-1.62 12.895H35.2v6.448h29.605c.448 4.478 1.455 8.779 2.858 12.896zm173.104 77.44c-3.843 3.907-10.507 3.93-14.347.036l-34.125-34.64a76.8 76.8 0 0 0 14.595-14.544l33.915 34.59a10.28 10.28 0 0 1 2.954 7.275 10.28 10.28 0 0 1-2.992 7.283m4.535-19.11-34.674-35.37c7.687-12.012 12.171-26.32 12.171-41.681 0-42.323-33.921-76.751-75.614-76.751-29.961 0-57.13 17.983-69.221 45.814l5.812 2.599c11.075-25.491 35.963-41.965 63.409-41.965 38.193 0 69.262 31.536 69.262 70.303 0 38.763-31.07 70.303-69.262 70.303-25.514 0-48.89-14.176-61.014-36.994l-5.59 3.062c13.228 24.908 38.752 40.38 66.604 40.38 14.578 0 28.2-4.22 39.759-11.507l34.988 35.514c3.106 3.153 7.239 4.891 11.628 4.891 4.415 0 8.572-1.75 11.691-4.92 3.126-3.153 4.854-7.356 4.86-11.84.01-4.479-1.702-8.683-4.809-11.839"></path></g>', 2)
    ]), 4));
  }
});
export {
  p as _
};