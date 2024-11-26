import { defineComponent as o, computed as n, openBlock as i, createElementBlock as h, normalizeStyle as s, createElementVNode as e } from "vue";
const p = /* @__PURE__ */ o({
  __name: "LogoDeno",
  props: {
    width: {},
    height: {}
  },
  setup(m) {
    const c = m, t = n(() => ({
      width: c.width || "1em",
      height: c.height || "1em",
      minWidth: c.width || "1em",
      minHeight: c.height || "1em"
    }));
    return (r, l) => (i(), h("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      width: "800",
      height: "800",
      version: "1.1",
      viewBox: "0 0 256 256",
      style: s(t.value)
    }, l[0] || (l[0] = [
      e("g", {
        fill: "none",
        "fill-rule": "evenodd",
        stroke: "none",
        "stroke-width": "1"
      }, [
        e("path", {
          fill: "#222",
          "fill-rule": "nonzero",
          d: "M117.926.066c.598-.063 5.792-.095 11.49-.032 7.462.063 11.492.22 14.262.598 25.627 3.432 47.79 13.128 67.278 29.435 3.652 3.023 11.964 11.334 14.986 14.985 16.371 19.55 25.942 41.493 29.468 67.465.787 5.76.787 25.216 0 30.977-3.526 25.972-13.097 47.914-29.468 67.464-3.022 3.652-11.334 11.963-14.986 14.985-19.55 16.37-41.494 25.94-67.467 29.467-5.76.787-25.217.787-30.978 0-25.973-3.526-47.917-13.096-67.467-29.467-3.652-3.022-11.964-11.333-14.986-14.985C13.687 191.408 4.116 169.466.59 143.494c-.787-5.761-.787-25.216 0-30.977 3.526-25.972 13.097-47.915 29.468-67.465 3.022-3.651 11.334-11.962 14.986-14.985C64.814 13.508 89.056 3.088 113.675.507c1.732-.158 3.652-.378 4.25-.441m7.083 92.523c-6.485-.976-15.048-.85-21.093.283-18.984 3.59-37.496 13.82-46.468 25.626-2.015 2.644-4.219 7.178-5.006 10.294-.724 2.834-.882 7.87-.315 10.39 1.04 4.658 4.534 8.594 10.232 11.553 4.943 2.55 10.861 4.785 14.167 5.383 6.076 1.102 14.828 1.448 20.464.85 8.154-.85 22.29-4.66 29.341-7.902 1.48-.66 3.086-1.228 3.62-1.228 3.086 0 5.51 3.337 4.157 5.667-.756 1.228-5.699 3.715-11.397 5.698-3.117 1.07-3.84 1.417-3.684 1.826.756 1.889 2.11 10.452 2.802 17.504 1.228 12.277 1.417 34.409.473 51.944-.19 3.62-.378 8.248-.378 10.231l-.063 3.62 7.556-.031c10.389-.032 17.19-.85 27.704-3.432 8.595-2.109 15.112-4.375 21.88-7.65 4.88-2.36 4.471-1.605 4.125-7.146a320 320 0 0 1-.504-9.444c-.346-8.91-1.952-30.663-3.18-42.657-2.707-26.76-4.848-36.739-10.357-48.009-3.778-7.744-7.808-13.222-14.356-19.487-4.408-4.218-6.297-5.635-10.264-7.681-6.139-3.148-12.34-5.132-19.456-6.202M79.58 222.827c-1.227-.126-1.195-.378-.534 6.107.377 3.589.63 4.785 1.007 5.069 1.29.975 1.385.63 1.165-4.093-.126-2.456-.315-5.037-.41-5.73-.188-1.133-.314-1.259-1.227-1.353m-14.607-20.211c-.693 0-.724.63-.126 6.139.252 2.235.535 5.572.661 7.398s.41 4.785.63 6.61c.252 1.795.378 3.37.315 3.495-.158.189.566.913 1.385 1.385.535.315.44-1.322-.756-13.38-.409-4.407-.787-8.657-.787-9.475 0-.787-.157-1.574-.378-1.794-.22-.22-.63-.378-.944-.378m127.882-17.882c-.283-.031-.598.032-.724.158-.252.22.063 40.107.283 40.359.095.094.378-.126.693-.472.504-.567.535-1.984.378-20.274-.126-17.441-.22-19.676-.63-19.77m-103.22 5.604h-1.082l.22 2.582c.85 10.766 1.543 17.755 1.764 17.975.126.158.567.19.944.063.693-.22.693-.315.504-3.274-.315-4.407-1.102-13.757-1.322-15.709-.158-1.574-.22-1.637-1.134-1.637Zm-48.715-19.865c-.314-.535-1.07-.283-1.07.378 0 .378.472 4.376 1.07 8.91 1.04 7.996 2.393 21.06 2.393 23.044 0 .724.22 1.133.819 1.542l.787.504-.158-1.354c-.094-.755-.535-4.753-.976-8.909-1.48-13.757-2.676-23.831-2.865-24.115m181.686.032c-.126 0-.756.535-1.385 1.165l-1.165 1.196-.063 13.505c-.095 14.734-.189 14.23 1.605 11.586l.788-1.165.22-13.16c.094-7.209.094-13.127 0-13.127m-122.499-6.076c-.157-.472-1.07-.755-1.416-.378-.095.063.094 2.928.378 6.36.314 3.43.787 9.286 1.038 13.001.693 8.972.756 9.445 1.354 9.445.535 0 .504-1.606-.378-14.324-.251-3.463-.535-7.934-.63-9.917-.125-1.983-.283-3.872-.346-4.187M27.1 137.67c-.22-1.763-.504-2.078-1.354-1.511-.41.252-.44.031 4.47 33.968.756 5.258 1.48 9.633 1.574 9.728.756.787.63-1.07-1.07-14.072-1.133-8.406-3.337-25.531-3.62-28.113m207.312-27.294c-.212 0-.307 3.313-.315 9.939v.827c-.031 5.95-.094 12.782-.157 15.206s-.22 12.844-.284 23.139c-.189 20.588-.283 19.644 1.669 14.953 1.196-2.865 1.228-3.84 1.48-37.053l.22-26.067-1.133-.472c-.63-.252-1.291-.472-1.48-.472M73.945 163.579c-.85 0-.85-.063-.41 5.572.417 5.233.412 5.44 1.524 5.446h.274c1.222.015 1.153.365.69-5.666-.284-3.4-.504-4.66-.85-4.974-.284-.189-.82-.378-1.228-.378M47.373 148.94l.19 1.574c.087.792.393 3.657.715 6.564l.071.646c.315 3.085.724 5.76.882 5.918.503.504 1.637-.315 1.637-1.196 0-1.04-.913-9.57-1.102-10.358-.094-.346-.661-1.196-1.29-1.888zm-18.04-82.89c-.188-.189-2.046 2.77-2.266 3.62-.094.41.252 4.22.819 8.5a5081 5081 0 0 0 3.935 30.631 2473 2473 0 0 0 1.889 14.64c2.11 16.401 3.054 23.705 3.62 28.018.347 2.581.63 4.974.63 5.257 0 .661.315.724 1.07.158.504-.378.504-.63.063-4.313-.251-2.173-.692-5.982-.944-8.5-.283-2.519-1.763-15.961-3.337-29.907s-3.4-30.443-4.093-36.644c-.693-6.234-1.322-11.365-1.385-11.46m176.051-25.972.189 4.534c.094 2.487.252 23.012.378 45.616.157 37.305.22 41.114.692 41.46.284.221.756.41 1.102.41.567 0 .567-1.133.472-44.798-.094-38.03-.157-44.923-.535-45.364-.252-.284-.85-.819-1.385-1.197zM46.177 115.917c-.094-.063-.661.188-1.196.566-1.197.756-1.197.976-.599 6.013l.378 3.148 1.008-2.14c.913-2.015.976-2.267.787-4.817-.095-1.448-.284-2.707-.378-2.77m-26.193-31.67c-.095 0-.504.944-.882 2.109l-.724 2.14 2.235 15.426c1.26 8.469 2.424 16.56 2.613 17.945s.441 2.644.567 2.77.504 0 .881-.315l.662-.567-.599-4.407c-.346-2.424-1.102-8.248-1.7-12.907-.598-4.691-1.48-11.585-1.952-15.363-.503-3.746-.976-6.832-1.101-6.832m200.575 8.814c-.19 0-.315 5.604-.315 15.552v1.334c.004 12.66.077 14.254.503 14.407.693.251 2.33.22 2.362-.063.157-.819.346-20.463.283-29.058 0-1.07-.126-1.196-1.26-1.668-.692-.283-1.416-.504-1.573-.504m-28.114-6.61h-1.008l.095 16.275c.122 17.345.096 17.42 1.847 17.41l1.05-.001V103.33c-.002-14.026-.069-15.94-.505-16.376-.251-.283-.944-.504-1.48-.504m-101.53 24.24c2.896-1.763 6.863.566 6.863 4.03 0 3.588-3.873 5.95-6.863 4.155-3.023-1.858-3.023-6.328 0-8.185m-21.346-3.023c3.841-1.668 7.43 2.488 5.227 6.076-1.165 1.952-3.432 2.487-5.667 1.354-3.086-1.574-2.834-6.013.44-7.43M53.103 62.084c-.22-.567-.346-.535-1.448.503l-1.228 1.134.882 9.066c.472 5.006 1.416 14.419 2.077 20.904.662 6.485 1.291 12.907 1.417 14.292l.22 2.487 1.197-1.227 1.228-1.228-1.07-11.648c-.599-6.422-1.512-16.622-2.079-22.667-.535-6.076-1.07-11.301-1.196-11.616m124.325-14.356v53.55l1.133.472c.63.252 1.196.41 1.26.346.157-.126.125-42.783-.032-49.74-.032-2.046-.19-3.84-.347-3.967-.157-.157-.66-.346-1.133-.472zM119.5 11.21l-.85.032c-.504.031-1.291.126-1.763.188l-.882.126.19 6.99c.188 6.358 2.045 49.834 2.612 61.041.126 2.55.346 4.722.44 4.848.127.095.85.284 1.638.347l1.417.157-.158-2.298c-.157-2.298-1.196-28.081-1.542-37.903-.095-2.77-.315-8.091-.504-11.806-.346-7.587-.598-15.583-.598-19.266zM39.755 51.947c-.315-.347-2.74 2.833-2.74 3.589 0 1.259 3.149 29.12 3.306 29.277.252.252 2.676-.944 2.676-1.322 0-.189-.44-4.596-.976-9.79a2971 2971 0 0 0-1.542-15.52c-.315-3.37-.63-6.171-.724-6.234m37.054-28.49c-.22-.41-.787-.316-1.794.22-.819.44-.85.566-.693 1.952.095.818.724 8.342 1.417 16.748 1.196 14.292 2.896 34.062 3.337 38.155.095 1.007.284 1.826.378 1.826.126 0 .693-.284 1.26-.63 1.007-.63 1.038-.693.88-2.298-.094-.882-.692-7.933-1.29-15.646-1.826-22.698-3.306-40.044-3.495-40.328m85.507 37.493h-.724l.189 6.99c.126 3.871.22 8.247.22 9.758v2.708l.976.346c1.7.598 2.046.126 1.983-2.707 0-1.354-.063-5.51-.094-9.224l-.031-6.8-.913-.535c-.504-.284-1.228-.536-1.606-.536m-70.3-12.246c-.756.063-2.393.63-2.55.85-.158.252.944 15.74 1.259 17.598.126.945.252 1.04 1.196 1.04 1.795 0 1.858-.347 1.48-5.888-.19-2.739-.41-6.265-.504-7.807a108 108 0 0 0-.346-4.345c-.095-.818-.347-1.48-.536-1.448m39.762-9.57v2.33c0 2.266.944 25.594 1.039 25.657.031.031.724.126 1.574.22l1.48.22-.032-4.659c-.031-7.744-.472-23.013-.661-23.201-.094-.095-.881-.252-1.794-.378zm-26.446-8.198c-.006-1.152-.08-1.15-1.007-1.12-.567 0-1.448.157-1.952.346-.85.315-.881.378-.692 1.952.089.832.375 4.557.618 8.469l.043.692c.252 4.155.63 9.601.787 12.12.189 2.518.346 5.257.41 6.139.062 1.574.062 1.574 1.101 1.542 2.11-.126 2.046.063 1.826-5.414-.126-2.708-.41-8.973-.661-13.915-.252-4.943-.472-9.633-.472-10.483Zm42.596-18.404c-1.322-.22-1.668-.189-1.794.158-.189.472.031 19.392.283 24.964.063 1.826.22 7.43.347 12.498l.22 9.161 1.448.126c.787.095 1.574.095 1.7 0 .158-.063.19-1.07.095-2.235-.095-1.133-.252-11.553-.378-23.17-.095-11.585-.189-21.092-.22-21.124-.032-.031-.788-.189-1.7-.378m44.737 23.045c-1.29-.536-1.29-.536-1.417-.063-.063.22-.094 5.1-.031 10.86l.094 10.452 1.323.63 1.322.661.094-6.863c.063-3.746 0-8.72-.094-11.018l-.22-4.219Zm-29.184-5.793c-2.154-.728-2.116-1.31-2.11 7.798v1.417c.005 4.928.097 9.21.19 9.58.157.597 2.046 1.668 2.959 1.668.346 0 .44-15.048.126-18.196-.19-1.795-.284-1.952-1.165-2.267"
        })
      ], -1)
    ]), 4));
  }
});
export {
  p as _
};
