import { defineComponent as m, computed as i, openBlock as a, createElementBlock as s, normalizeStyle as o, createElementVNode as e } from "vue";
const p = /* @__PURE__ */ m({
  __name: "LogoAsana2",
  props: {
    width: {},
    height: {}
  },
  setup(l) {
    const c = l, t = i(() => ({
      width: c.width || "1em",
      height: c.height || "1em",
      minWidth: c.width || "1em",
      minHeight: c.height || "1em"
    }));
    return (n, h) => (a(), s("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      width: "512",
      height: "102",
      preserveAspectRatio: "xMidYMid",
      version: "1.1",
      viewBox: "0 0 512 102",
      style: o(t.value)
    }, h[0] || (h[0] = [
      e("g", null, [
        e("path", {
          fill: "#0D0E10",
          d: "m499.094 77.034.001.008c.31 3.53 3.133 8.022 8.024 8.022h2.862c1.11 0 2.019-.91 2.019-2.02V20.107h-.013a2.02 2.02 0 0 0-2.006-1.91h-8.868a2.02 2.02 0 0 0-2.007 1.91h-.011v5.114c-5.433-6.697-14-9.477-22.589-9.477-19.526 0-35.354 15.84-35.354 35.382s15.828 35.383 35.354 35.383v.002c8.59 0 17.95-3.335 22.588-9.476m-22.554-2.91c-12.418 0-22.486-10.296-22.486-23 0-12.7 10.068-22.998 22.486-22.998s22.484 10.298 22.484 22.999c0 12.576-9.866 22.794-22.112 22.997zm-46.599 5.083-.004-32.568h.001c0-18.359-11.573-30.744-30.028-30.744-8.81 0-16.03 5.098-18.581 9.477l-.043-.25-.047-.252-.026-.125-.055-.251-.06-.25-.065-.25-.072-.248a10 10 0 0 0-.16-.492l-.09-.243c-.98-2.538-3.055-4.662-7.384-4.662h-2.87c-1.111 0-2.019.91-2.019 2.02v62.944h.012a2.02 2.02 0 0 0 2.007 1.91h8.868c.136 0 .269-.017.397-.042l.058-.015.113-.036.133-.038.064-.023.077-.036.255-.143a2 2 0 0 0 .169-.126l.08-.07c.012-.013.028-.021.04-.033a2 2 0 0 0 .62-1.348h.011v-37.18c0-9.86 7.988-17.853 17.841-17.853s17.84 7.994 17.84 17.854l.009 31.077.002-.011.004.085v6.028h.012a2.02 2.02 0 0 0 2.007 1.91h8.868c.136 0 .269-.017.397-.042.053-.01.101-.03.152-.045l.146-.042.071-.025c.073-.03.139-.072.207-.11.042-.024.086-.042.127-.069.081-.053.156-.118.23-.183l.058-.048q.083-.08.156-.17l.086-.11a2 2 0 0 0 .364-.93l.013-.136h.011v-4.105zm-92.354-2.173v.008c.311 3.53 3.134 8.022 8.025 8.022h2.862c1.11 0 2.017-.91 2.017-2.02V20.107h-.011a2.02 2.02 0 0 0-2.006-1.91h-8.868a2.02 2.02 0 0 0-2.008 1.91h-.01v5.114c-5.434-6.697-14-9.477-22.59-9.477-19.525 0-35.353 15.84-35.353 35.382s15.828 35.383 35.353 35.383v.002c8.59 0 17.952-3.335 22.589-9.476m-22.555-2.91c-12.417 0-22.484-10.296-22.484-23 0-12.7 10.067-22.998 22.484-22.998 12.419 0 22.484 10.298 22.484 22.999 0 12.576-9.865 22.794-22.112 22.997zm-87.829-6.096c5.92 4.104 12.382 6.097 18.591 6.097 1.22 0 2.448-.13 3.63-.384l.353-.08q.263-.062.523-.134l.344-.098q.172-.051.341-.105l.336-.113c.78-.271 1.52-.601 2.205-.988l.29-.169c2.385-1.436 4.01-3.586 4.01-6.34 0-3.709-3.604-5.789-8.24-7.332l-.54-.175-.273-.087-.551-.169-.559-.165-.564-.162-.857-.238-.865-.231-1.162-.302-2.905-.74-1.143-.298-.844-.227-.555-.154-.546-.156-.27-.079-.535-.16-.263-.08-.52-.166q-.256-.084-.508-.169c-8.374-2.847-15.587-8.735-15.587-18.268 0-14.589 12.989-20.614 25.111-20.614 7.681 0 15.607 2.535 20.745 6.166.971.737 1.084 1.533.989 2.102l-.023.118-.029.11-.032.103-.034.094-.035.084-.05.107-.044.082-.05.082-4.905 7.01q-.046.067-.096.13l-.103.128c-.554.644-1.414 1.09-2.586.427l-.17-.102-.855-.54-.307-.187-.337-.2-.241-.14-.255-.143-.133-.074-.275-.149-.288-.15-.3-.154-.315-.154-.327-.155-.34-.155-.352-.154-.365-.153-.377-.15a23.4 23.4 0 0 0-8.51-1.6c-7.396 0-11.851 3.42-11.851 7.656 0 2.407 1.299 4.032 3.388 5.26l.283.162q.648.357 1.382.674l.33.139.168.068.34.134.174.066.352.13.358.127.365.124.185.061.375.12.572.178.585.173.596.17.403.112.408.111.828.22 1.48.382 1.423.386 1.07.296.715.202.357.102.713.207.356.105.711.214.708.22c9.779 3.068 18.661 7.754 18.661 19.79 0 12.854-12.014 20.797-25.29 20.797-10.063 0-18.629-2.87-25.814-8.147-.904-.906-.88-1.772-.72-2.316l.035-.108.037-.098.038-.088.038-.077.05-.094.071-.11 4.88-6.975c.837-1.098 1.857-.949 2.485-.648l.113.058.103.06zm-34.091 9.006v.008c.31 3.53 3.134 8.022 8.025 8.022H204c1.11 0 2.019-.91 2.019-2.02V20.107h-.013a2.02 2.02 0 0 0-2.006-1.91h-8.868a2.02 2.02 0 0 0-2.008 1.91h-.01v5.114c-5.433-6.697-14-9.477-22.59-9.477-19.524 0-35.353 15.84-35.353 35.382S151 86.509 170.525 86.509v.002c8.59 0 17.95-3.335 22.588-9.476m-22.554-2.91c-12.418 0-22.485-10.296-22.485-23 0-12.7 10.067-22.998 22.485-22.998s22.484 10.298 22.484 22.999c0 12.576-9.866 22.794-22.112 22.997z"
        }),
        e("path", {
          fill: "#F06A6A",
          d: "M85.605 53.532c-13.14 0-23.792 10.652-23.792 23.792s10.652 23.792 23.792 23.792 23.791-10.652 23.791-23.792-10.651-23.792-23.791-23.792m-61.813.002C10.652 53.534 0 64.184 0 77.324s10.652 23.792 23.792 23.792 23.793-10.652 23.793-23.792-10.653-23.79-23.793-23.79M78.49 23.79c0 13.141-10.652 23.794-23.792 23.794S30.907 36.932 30.907 23.791C30.907 10.653 41.558 0 54.698 0S78.49 10.653 78.49 23.791"
        })
      ], -1)
    ]), 4));
  }
});
export {
  p as _
};