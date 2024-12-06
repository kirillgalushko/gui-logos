import { defineComponent as l, computed as p, openBlock as i, createElementBlock as a, normalizeStyle as s, createStaticVNode as m } from "vue";
const v = /* @__PURE__ */ l({
  __name: "LogoEgghead",
  props: {
    width: {},
    height: {}
  },
  setup(c) {
    const h = c, e = p(() => ({
      width: h.width || "1em",
      height: h.height || "1em",
      minWidth: h.width || "1em",
      minHeight: h.height || "1em"
    }));
    return (d, t) => (i(), a("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      width: "256",
      height: "263",
      preserveAspectRatio: "xMidYMid",
      version: "1.1",
      viewBox: "0 0 256 263",
      style: s(e.value)
    }, t[0] || (t[0] = [
      m('<g><path fill="#FFF" d="M128 262.4c-14.4 0-28-3.191-40.8-7.976-12.8-5.583-24-12.761-32.8-23.13Q40 216.938 32.8 197.796c-1.6-4.785-3.2-9.57-4.8-15.153h-.8l-.8-7.976c-9.6-3.988-16.8-13.559-19.2-22.332C4 141.17.8 124.42 0 109.267c0-11.964 6.4-23.13 17.6-27.915 7.2-3.19 17.6-6.38 29.6-7.976 8-16.749 16.8-31.903 26.4-43.068C90.4 10.368 108.8 0 128 0s37.6 10.368 54.4 30.308C192 41.473 200.8 55.83 208 73.376c12 2.393 22.4 4.785 30.4 7.976 11.2 4.785 17.6 15.951 17.6 27.915-.8 17.546-4.8 36.688-7.2 43.866-2.4 9.57-9.6 19.141-19.2 22.332l-.8 7.975h-.8c-.8 4.786-2.4 10.369-4.8 15.154q-7.2 19.141-21.6 33.498c-9.6 9.57-20.8 17.546-32.8 23.13q-19.2 7.177-40.8 7.177"></path><path fill="#FCFBFA" d="M126.919 19.248c45.461 0 82.15 97.303 82.15 142.764s-36.689 82.15-82.15 82.15-82.15-36.689-82.15-82.15S81.459 19.248 126.92 19.248"></path><path fill="#252526" d="m231.4 97.409-33.498 11.963s4.786 15.952 5.583 15.952l33.498-3.988zm-208.165 0 33.498 11.963s-4.785 15.952-5.583 15.952l-33.498-3.988z"></path><path fill="#E0E0E0" d="M92.624 95.016c8.773 0 10.368 7.178 10.368 8.774.798 4.785 1.595 11.165 2.393 17.546 0 1.595 0 3.19-.798 4.785-.797-3.987-.797-7.975-1.595-11.963 0-1.595-2.393-8.773-10.368-8.773-4.786 0-21.535.797-37.486 3.19.798-3.988 2.393-7.178 3.988-11.166 14.356-2.393 28.712-3.19 33.498-2.393m116.444 63.008c-29.51-1.595-55.032-11.166-60.615-14.356-4.785-2.393-10.368-6.38-11.963-17.547-.798 12.761 1.595 23.927 12.76 29.51.798.798 23.13 11.166 59.02 13.559v-7.178c.798-1.595.798-3.19.798-3.988m-163.501 0c29.51-1.595 55.032-11.166 60.615-14.356 4.786-2.393 10.369-6.38 11.964-17.547.797 12.761-1.595 23.927-12.761 29.51-.798.798-23.13 11.166-59.02 13.559v-7.178c-.798-1.595-.798-3.19-.798-3.988m115.647-63.008c-8.773 0-10.368 7.178-10.368 8.774-.798 4.785-1.595 11.165-2.393 17.546 0 1.595 0 3.19.798 4.785.797-3.987.797-7.975 1.595-11.963 0-1.595 2.393-8.773 10.368-8.773 4.786 0 21.535.797 37.486 3.19-.798-3.988-2.393-7.178-3.988-11.166-14.356-2.393-28.712-3.19-33.498-2.393"></path><path fill="#56555C" d="M55.138 85.445c7.976-19.141 17.546-36.688 27.915-48.651 13.558-16.749 28.712-25.522 43.866-25.522s29.51 8.773 43.866 25.522c10.368 12.761 19.94 29.51 27.915 48.651v.798h-.798c-3.19 0-4.785-.798-7.975-.798-8.774-21.534-24.725-48.651-44.664-60.615-6.38-3.19-11.964-5.582-18.344-5.582s-11.964 1.595-18.344 5.582C88.635 35.996 73.482 63.911 63.91 85.445c-3.19 0-4.785.798-7.975.798h-.798zm154.728 62.211h-7.178v-.798c-1.595-15.951-6.38-33.498-12.761-51.044l-.798-1.595h1.595c2.393 0 4.786.797 7.178.797h.798v.798c5.583 17.546 10.368 35.89 11.963 51.044v.798z"></path><path fill="#252526" d="M202.688 108.575c-1.595-3.988-2.393-7.976-3.988-11.964v-.797h-.798c-2.392-.798-4.785-.798-7.178-.798h-1.595l.798 1.595c1.595 3.988 2.392 7.976 3.987 11.964 3.988-.798 6.381-.798 8.774 0"></path><path fill="#56555C" d="M43.972 146.06c1.595-15.153 6.38-33.497 11.964-51.044v-.797h.797c2.393 0 4.786-.798 7.178-.798h1.595l-.797 1.595c-6.38 17.547-10.369 35.89-12.761 51.045v.797h-7.976z"></path><path fill="#252526" d="M56.733 95.016c-2.393 4.786-3.19 8.774-4.785 12.761 3.988-.797 5.583-.797 8.773-.797 1.595-3.988 2.393-7.976 3.988-11.964l.797-1.595h-1.595c-2.392.798-4.785 1.595-7.178 1.595"></path><path fill="#56555C" d="M126.919 251.34c-11.964 0-23.927-2.393-35.093-7.179-11.166-4.785-20.737-11.166-28.712-19.939s-14.357-18.344-19.142-29.51-6.38-23.927-6.38-36.688v-.798h8.773v.798c-.798 11.963 1.595 22.332 5.583 33.498 3.988 10.368 9.57 19.141 16.749 27.117s16.748 14.356 26.32 18.344c10.368 4.785 20.736 6.38 31.902 6.38s22.332-2.392 31.903-6.38 19.141-10.368 26.32-18.344c7.177-7.976 13.558-16.749 16.748-27.117 3.988-10.369 5.583-21.535 5.583-33.498v-.798h8.773v.798c.798 12.761-1.595 24.725-6.38 36.688-3.988 11.166-10.369 20.737-19.142 29.51-7.975 8.773-18.344 15.154-28.712 19.94-10.369 3.987-22.332 7.177-35.093 7.177"></path><path fill="#252526" d="M46.365 168.392v-11.166h-8.773v11.166zm169.881-11.166h-7.975v11.166h7.975z"></path><path fill="#252526" d="M221.032 164.405c-18.344 0-35.093-4.786-51.045-8.774-7.975-2.392-15.153-6.38-20.736-8.773v-.797c-13.559-6.381-14.356-20.737-13.559-32.7 0-3.191-.797-7.179-3.988-9.571-1.595-.798-3.19-1.596-4.785-1.596s-3.988.798-4.785 1.596c-3.19 2.392-3.988 6.38-3.988 9.57 1.595 11.964.797 25.522-13.559 31.903-5.583 2.393-12.761 7.976-20.737 10.368-15.951 3.988-32.7 8.774-51.044 8.774-7.178 0-13.558-7.179-15.154-14.357-2.392-10.368-6.38-27.117-6.38-41.473 0-5.583 3.19-11.964 8.773-14.356 19.142-8.774 58.222-11.964 74.971-11.964 6.38 0 11.166 2.393 15.154 6.38 5.583-2.392 11.166-3.987 16.749-3.987s11.166 1.595 16.749 3.988c3.19-3.19 7.975-6.38 15.154-6.38 9.57 0 52.639 1.594 74.97 11.165 5.584 2.393 8.774 7.976 8.774 13.559-.798 14.356-3.988 32.7-6.38 43.068-1.596 7.178-7.976 14.357-15.154 14.357m-59.818-69.389c-7.975 0-9.57 7.178-10.368 7.976-.798 3.988-1.595 10.368-2.393 17.546 0 6.38 2.393 11.166 7.178 13.559q26.32 11.964 62.21 11.964c1.596 0 3.19-1.596 3.988-3.19 2.393-8.774 5.583-22.333 5.583-35.094 0-.797-.797-2.392-1.595-2.392-15.154-7.976-51.044-10.369-64.603-10.369m-133.99 10.369c-.798.797-1.596 1.595-1.596 2.392 0 12.761 3.19 26.32 5.583 35.093.798 1.595 2.393 3.19 3.988 3.19 24.724 0 44.664-3.987 62.21-11.963 4.785-2.393 7.178-7.178 7.178-13.559 0-5.583-.797-11.166-2.393-17.546 0-1.595-1.595-7.976-10.368-7.976-6.38 0-45.461 1.595-64.603 10.369"></path></g>', 1)
    ]), 4));
  }
});
export {
  v as _
};