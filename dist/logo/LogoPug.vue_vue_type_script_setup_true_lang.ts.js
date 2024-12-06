import { defineComponent as e, computed as r, openBlock as h, createElementBlock as a, normalizeStyle as p, createStaticVNode as s } from "vue";
const F = /* @__PURE__ */ e({
  __name: "LogoPug",
  props: {
    width: {},
    height: {}
  },
  setup(i) {
    const c = i, t = r(() => ({
      width: c.width || "1em",
      height: c.height || "1em",
      minWidth: c.width || "1em",
      minHeight: c.height || "1em"
    }));
    return (f, l) => (h(), a("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      width: "256",
      height: "256",
      preserveAspectRatio: "xMidYMid",
      version: "1.1",
      viewBox: "0 0 256 256",
      style: p(t.value)
    }, l[0] || (l[0] = [
      s('<g><circle cx="128" cy="128" r="128" fill="#F2F2F2"></circle><path fill="#ED1C24" d="M166.493 203.683a113.23 113.23 0 0 1-78.29 0c-2.327-.838-4.188-3.584-4.188-5.958v-6.097c0-2.374 1.861-3.538 4.189-2.7a113.23 113.23 0 0 0 78.29 0c2.326-.838 4.188.326 4.188 2.7v6.097c-.046 2.374-1.908 5.12-4.189 5.958"></path><path fill="#C1272D" d="M166.493 196.236c-25.274 12.94-53.015 12.94-78.29 0-2.327-1.164-4.188-4.98-4.188-8.285v-8.425c0-3.305 1.861-4.934 4.189-3.724 25.274 12.94 53.015 12.94 78.29 0 2.326-1.163 4.188.42 4.188 3.724v8.425c-.046 3.304-1.908 7.121-4.189 8.285"></path><g transform="translate(117.76 202.938)"><circle cx="9.588" cy="3.91" r="3.584" fill="#C1272D"></circle><circle cx="9.588" cy="3.398" r="3.072" fill="#FF931E"></circle><circle cx="10.473" cy="4.468" r="1.071" fill="#FFB81E"></circle><circle cx="9.588" cy="15.546" r="9.588" fill="#FF931E"></circle><circle cx="9.588" cy="15.639" r="8.611" fill="#FFB81E"></circle><path fill="#FF931E" d="M12.102 12.893c.512.466.791 1.117.791 2.048s-.28 1.583-.791 2.048c-.559.419-1.35.652-2.467.652h-.978v2.094H6.982v-7.494h2.653c1.117 0 1.955.187 2.467.652m-1.21 2.932q.279-.348.279-.977c0-.419-.14-.745-.372-.93-.28-.187-.652-.28-1.21-.28h-.932v2.513h1.118c.558 0 .93-.093 1.117-.326"></path></g><path fill="#F7BD89" d="M205.033 140.474c2.327 31.884-32.163 60.51-77.22 60.463-45.009.046-79.545-28.58-77.218-60.463 2.327-31.977 37.004-58.368 77.312-58.414 40.355.046 74.752 26.437 77.126 58.414"></path><path fill="#FBD5A0" d="M127.674 77.591c-42.356 0-81.687 29.836-74.24 75.264 1.49 4.19 3.957 15.081 15.733 24.716 3.537 2.886 9.634 5.306 12.52 3.351 7.401-5.027-5.725-19.456 9.263-32.768h-.326c8.145-6.19 19.689-11.124 36.957-11.124s28.812 4.934 36.957 11.124h-.326c14.988 13.312 1.909 27.741 9.263 32.768 2.886 1.955 9.03-.465 12.52-3.351 11.777-9.635 14.29-20.527 15.78-24.716 7.447-45.475-31.744-75.264-74.1-75.264"></path><path fill="#000" d="M164.12 153.041c-7.122-8.75-20.62-17.221-36.306-17.221h-.186c-15.733 0-29.23 8.47-36.306 17.221-7.354 8.937-4.7 12.754-4.7 21.318 0 31 10.844 21.97 18.152 25.693 7.447 3.63 14.987 2.328 22.9 2.328h.14c7.913 0 15.453 1.303 22.9-2.374 7.261-3.724 18.153 5.4 18.153-25.6-.047-8.518 2.606-12.428-4.748-21.365"></path><g transform="translate(62.37 123.81)"><circle cx="13.033" cy="15.453" r="12.986" fill="#F7BD89"></circle><circle cx="14.196" cy="13.265" r="12.986" fill="#000"></circle><circle cx="17.501" cy="7.447" r="3.351" fill="#FFF"></circle></g><g transform="translate(165.702 123.81)"><circle cx="13.964" cy="15.453" r="12.986" fill="#F7BD89"></circle><circle cx="13.219" cy="13.265" r="12.986" fill="#000"></circle><circle cx="16.524" cy="7.447" r="3.351" fill="#FFF"></circle></g><path fill="#F7BD89" d="M100.352 89.228s-43.985 7.587-45.754 60.136c-.047.792-.885 1.304-1.583.885l-1.396-.838-1.07-13.778 2-28.113 18.34-13.545 16.477-6.656zm54.598 0s43.985 7.587 45.754 60.136c.047.792.884 1.304 1.583.885l1.396-.838 1.07-13.778-2.001-28.113-18.339-13.545-16.477-6.656z"></path><path fill="#4D4D4D" d="M126.753 182.81V156.3h1.936v26.447c2.853.335 6.56 1.993 10.11 3.062 3.677 1.304 7.214 1.816 5.818 2.002-4.841.186-10.147-1.63-16.664-1.536-6.562-.093-11.869 1.722-16.663 1.536-1.396-.233 2.141-.745 5.818-2.002 3.366-1.013 6.837-2.557 9.645-3m13.116-35.447c1.536 3.398-3.77 8.937-12.195 8.937s-13.73-5.54-12.195-8.937c1.49-3.491 6.842-4.608 12.195-4.655 5.353.047 10.706 1.164 12.195 4.655"></path><path fill="#000" d="M100.352 89.228s-51.805 7.168-47.337 58.6c.233 2.607-10.333-11.124-18.525-15.313-8.192-4.19-7.913-17.734-7.913-17.734s-.14-23.598 32.955-30.58c33.047-6.936 40.82 5.027 40.82 5.027m54.598 0s51.805 7.168 47.337 58.6c-.233 2.607 10.333-11.124 18.525-15.313 8.192-4.19 7.912-17.734 7.912-17.734s.14-23.598-32.954-30.58c-33.047-6.936-40.82 5.027-40.82 5.027"></path><path fill="#F7BD89" d="M127.72 126.278c-16.104 0-32.395 15.825-28.997 14.057 6.284-3.305 9.914-9.123 28.998-9.123 19.083 0 22.667 5.818 28.998 9.123 3.397 1.768-12.894-14.057-28.998-14.057"></path><path fill="#F7BD89" d="M127.72 119.343c-12.24 0-24.575 12.008-22.015 10.658 4.794-2.513 10.938-6.935 22.016-6.935s17.222 4.422 22.016 6.935c2.56 1.35-9.775-10.658-22.016-10.658m-.093-38.959c-13.499 0-27.183 7.727-24.344 6.842 5.307-1.629 12.102-4.468 24.344-4.468 12.241 0 19.037 2.84 24.343 4.468 2.84.885-10.799-6.842-24.343-6.842"></path><path fill="gray" d="M130.746 145.501c.373.838-.93 2.188-3.025 2.188s-3.398-1.35-3.026-2.188 1.676-1.117 3.026-1.164c1.303 0 2.653.28 3.025 1.164"></path></g>', 1)
    ]), 4));
  }
});
export {
  F as _
};