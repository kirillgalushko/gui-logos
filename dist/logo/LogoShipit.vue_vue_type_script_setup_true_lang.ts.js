import { defineComponent as a, computed as p, openBlock as h, createElementBlock as o, normalizeStyle as l, createStaticVNode as s } from "vue";
const r = /* @__PURE__ */ a({
  __name: "LogoShipit",
  props: {
    width: {},
    height: {}
  },
  setup(e) {
    const t = e, i = p(() => ({
      width: t.width || "1em",
      height: t.height || "1em",
      minWidth: t.width || "1em",
      minHeight: t.height || "1em"
    }));
    return (m, q) => (h(), o("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      width: "256",
      height: "323",
      preserveAspectRatio: "xMidYMid",
      version: "1.1",
      viewBox: "0 0 256 323",
      style: l(i.value)
    }, q[0] || (q[0] = [
      s('<defs><linearGradient id="shipit-gui-asset-a" x1="50%" x2="50%" y1="0%" y2="100%"><stop offset="0%" stop-color="#8783DC"></stop><stop offset="100%" stop-color="#444361"></stop></linearGradient></defs><g><path fill="#222" d="M63.031 311.178q-4.347 0-7.826-1.086t-6.646-3.82a4.9 4.9 0 0 1-1.242-1.553q-.435-.87-.435-1.74 0-1.428 1.025-2.515 1.025-1.086 2.578-1.087 1.18 0 2.112.746 2.36 1.924 4.69 2.919 2.328.993 5.744.994 2.298 0 4.224-.715 1.926-.714 3.106-1.925t1.18-2.764q0-1.863-1.118-3.168-1.118-1.304-3.416-2.205-2.3-.9-5.839-1.397-3.354-.497-5.9-1.522t-4.255-2.609a10.3 10.3 0 0 1-2.578-3.726q-.87-2.143-.87-4.814 0-4.037 2.081-6.894t5.621-4.348 7.827-1.49q4.037 0 7.484 1.21 3.217 1.13 5.326 2.83l.295.245q1.8 1.429 1.801 3.292 0 1.366-1.056 2.484t-2.484 1.118q-.931 0-1.677-.559-.994-.87-2.67-1.646a24 24 0 0 0-3.541-1.304q-1.864-.528-3.478-.528-2.671 0-4.504.683-1.831.684-2.764 1.864-.93 1.179-.931 2.733 0 1.863 1.087 3.074t3.136 1.925 4.907 1.274q3.727.683 6.553 1.615 2.826.93 4.69 2.391a9.05 9.05 0 0 1 2.794 3.665q.932 2.205.932 5.372 0 4.037-2.236 6.957-2.235 2.92-5.87 4.472-3.632 1.552-7.857 1.552m39.938-34.471q4.471 0 6.801 1.925t3.199 5.124q.87 3.199.87 7.112v15.9q0 1.616-1.056 2.702-1.056 1.087-2.671 1.087t-2.67-1.087-1.057-2.701v-15.901q0-2.049-.497-3.696-.496-1.645-1.8-2.64-1.305-.993-3.728-.993-2.36 0-4.037.994-1.677.993-2.515 2.64-.84 1.646-.839 3.695v15.9q0 1.616-1.056 2.702-1.056 1.087-2.67 1.087-1.615 0-2.671-1.087t-1.056-2.701v-38.385q0-1.616 1.056-2.702 1.056-1.087 2.67-1.087 1.615 0 2.671 1.087t1.056 2.702v15.403l-.932-.186q.559-1.056 1.553-2.267.994-1.212 2.423-2.267a13 13 0 0 1 3.167-1.708q1.74-.652 3.79-.652m25.963 30.062q0 1.614-1.056 2.701t-2.671 1.087-2.67-1.087q-1.057-1.087-1.057-2.701v-25.652q0-1.616 1.056-2.702 1.056-1.087 2.671-1.087t2.67 1.087q1.057 1.086 1.057 2.702zm-3.79-33.479q-2.11 0-2.98-.683t-.87-2.422v-1.18q0-1.801.963-2.454.963-.651 2.95-.652 2.175 0 3.043.683.87.683.87 2.423v1.18q0 1.801-.932 2.453-.93.652-3.043.652m28.634 3.417q4.348 0 7.795 2.205t5.466 6.055q2.019 3.852 2.019 8.945t-2.019 8.975-5.404 6.087-7.608 2.204q-2.486 0-4.659-.807t-3.82-2.05q-1.646-1.242-2.546-2.515t-.9-2.143l1.925-.807v16.335q0 1.614-1.056 2.702t-2.67 1.087q-1.616 0-2.672-1.056t-1.056-2.733v-38.074q0-1.616 1.056-2.702 1.056-1.087 2.671-1.087t2.67 1.087 1.057 2.702v3.043l-1.056-.559q0-.807.87-1.957t2.36-2.298 3.447-1.894a11.5 11.5 0 0 1 4.13-.745m-.931 6.832q-2.734 0-4.783 1.366t-3.199 3.696q-1.149 2.33-1.149 5.31 0 2.92 1.15 5.311 1.148 2.391 3.198 3.758 2.049 1.365 4.783 1.366 2.732 0 4.751-1.366t3.168-3.758 1.149-5.31q0-2.982-1.15-5.311-1.148-2.33-3.167-3.696t-4.751-1.366m29.751 23.23q0 1.614-1.056 2.701t-2.67 1.087q-1.616 0-2.671-1.087-1.056-1.087-1.056-2.701v-25.652q0-1.616 1.056-2.702 1.055-1.087 2.67-1.087t2.671 1.087 1.056 2.702zm-3.789-33.479q-2.112 0-2.981-.683-.87-.683-.87-2.422v-1.18q0-1.801.963-2.454.963-.651 2.95-.652 2.174 0 3.044.683t.87 2.423v1.18q0 1.801-.932 2.453t-3.044.652m11.801 4.659h14.72q1.492 0 2.485.994.994.993.994 2.484 0 1.429-.994 2.391-.993.963-2.484.963h-14.72q-1.492 0-2.485-.994-.994-.993-.994-2.484 0-1.43.994-2.391.993-.963 2.484-.963m6.646-7.764q1.615 0 2.64 1.087t1.025 2.702v27.64q0 .868.341 1.428.342.56.932.807.59.249 1.273.249.622 0 1.156-.194l.21-.086q.622-.28 1.43-.28.87 0 1.583.808.715.808.715 2.236 0 1.74-1.895 2.857a7.87 7.87 0 0 1-4.068 1.118q-1.304 0-2.888-.217a7.8 7.8 0 0 1-2.982-1.056q-1.397-.838-2.329-2.578-.931-1.739-.932-4.782v-27.95q0-1.615 1.087-2.702 1.088-1.087 2.702-1.087"></path><g><path fill="#444361" d="M0 125.062c108.45 35.593 179.883 58.448 256 21.39-13.502 17.912-29.13 35.102-54.108 49.115-52.537 11.46-105.074 8.536-157.61 0C2.915 171.297.652 156.171 0 125.062"></path><path fill="url(#shipit-gui-asset-a)" d="M0 125.062c114.103 57.319 180.638 63.986 256 21.39-13.502 17.912-1.572 37.655-54.108 49.115-52.537 11.46-116.244 24.27-157.61 0S.652 156.171 0 125.062"></path><path fill="#E78724" d="M135.214 0c27.692 13.675 66.109 66.183 100.642 139.184-34.169 7.328-67.337 19.76-94.007 7.691 8.36-47.108 1.425-98.331-6.635-146.875"></path><path fill="#FBA919" d="M161.993 27.698q35.893 36.906 70.505 110.237-10.454 1.113-26.736 0 4.36-18.42-43.769-110.237"></path><path fill="#E78724" d="M128.42 34.413v104.845q-8.345 20.156-47.531-3.343-11.15-6.686-38.082-2.68C49.68 110.41 80.18 76.553 128.42 34.414"></path><path fill="#FBA919" d="m99.043 71.344-25.036 52.879H58.754c6.569-20.262 24.107-36.31 40.289-52.879"></path></g></g>', 2)
    ]), 4));
  }
});
export {
  r as _
};