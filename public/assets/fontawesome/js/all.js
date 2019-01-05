! function() {
    "use strict";
    var t = {};
    try {
        "undefined" != typeof window && (t = window)
    } catch (t) {}
    var e = (t.navigator || {}).userAgent,
        r = void 0 === e ? "" : e,
        n = t,
        a = (~r.indexOf("MSIE") || r.indexOf("Trident/"), "___FONT_AWESOME___"),
        i = function() {
            try {
                return !0
            } catch (t) {
                return !1
            }
        }(),
        o = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
        s = o.concat([11, 12, 13, 14, 15, 16, 17, 18, 19, 20]);
    ["xs", "sm", "lg", "fw", "ul", "li", "border", "pull-left", "pull-right", "spin", "pulse", "rotate-90", "rotate-180", "rotate-270", "flip-horizontal", "flip-vertical", "stack", "stack-1x", "stack-2x", "inverse", "layers", "layers-text", "layers-counter"].concat(o.map(function(t) {
        return t + "x"
    })).concat(s.map(function(t) {
        return "w-" + t
    }));
    var c = n || {};
    c[a] || (c[a] = {}), c[a].styles || (c[a].styles = {}), c[a].hooks || (c[a].hooks = {}), c[a].shims || (c[a].shims = []);
    var l = c[a],
        f = Object.assign || function(t) {
            for (var e = 1; e < arguments.length; e++) {
                var r = arguments[e];
                for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (t[n] = r[n])
            }
            return t
        };
    var u = {};
    ! function(t) {
        try {
            t()
        } catch (t) {
            if (!i) throw t
        }
    }(function() {
        ! function t(e, r) {
            var n = Object.keys(r).reduce(function(t, e) {
                var n = r[e];
                return n.icon ? t[n.iconName] = n.icon : t[e] = n, t
            }, {});
            "function" == typeof l.hooks.addPack ? l.hooks.addPack(e, n) : l.styles[e] = f({}, l.styles[e] || {}, n), "fas" === e && t("fa", r)
        }("fab", u)
    })
}(),
function() {
    "use strict";
    var t = {};
    try {
        "undefined" != typeof window && (t = window)
    } catch (t) {}
    var e = (t.navigator || {}).userAgent,
        r = void 0 === e ? "" : e,
        n = t,
        a = (~r.indexOf("MSIE") || r.indexOf("Trident/"), "___FONT_AWESOME___"),
        i = function() {
            try {
                return !0
            } catch (t) {
                return !1
            }
        }(),
        o = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
        s = o.concat([11, 12, 13, 14, 15, 16, 17, 18, 19, 20]);
    ["xs", "sm", "lg", "fw", "ul", "li", "border", "pull-left", "pull-right", "spin", "pulse", "rotate-90", "rotate-180", "rotate-270", "flip-horizontal", "flip-vertical", "stack", "stack-1x", "stack-2x", "inverse", "layers", "layers-text", "layers-counter"].concat(o.map(function(t) {
        return t + "x"
    })).concat(s.map(function(t) {
        return "w-" + t
    }));
    var c = n || {};
    c[a] || (c[a] = {}), c[a].styles || (c[a].styles = {}), c[a].hooks || (c[a].hooks = {}), c[a].shims || (c[a].shims = []);
    var l = c[a],
        f = Object.assign || function(t) {
            for (var e = 1; e < arguments.length; e++) {
                var r = arguments[e];
                for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (t[n] = r[n])
            }
            return t
        };
    var u = {
"grin-hearts": [496, 512, [], "f584", "M353.6 304.6c-25.9 8.3-64.4 13.1-105.6 13.1s-79.6-4.8-105.6-13.1c-9.8-3.1-19.4 5.3-17.7 15.3 7.9 47.2 71.3 80 123.3 80s115.3-32.9 123.3-80c1.6-9.8-7.7-18.4-17.7-15.3zm-152.8-48.9c4.5 1.2 9.2-1.5 10.5-6l19.4-69.9c5.6-20.3-7.4-41.1-28.8-44.5-18.6-3-36.4 9.8-41.5 27.9l-2 7.1-7.1-1.9c-18.2-4.7-38.2 4.3-44.9 22-7.7 20.2 3.8 41.9 24.2 47.2l70.2 18.1zm188.8-65.3c-6.7-17.6-26.7-26.7-44.9-22l-7.1 1.9-2-7.1c-5-18.1-22.8-30.9-41.5-27.9-21.4 3.4-34.4 24.2-28.8 44.5l19.4 69.9c1.2 4.5 5.9 7.2 10.5 6l70.2-18.2c20.4-5.3 31.9-26.9 24.2-47.1zM248 8C111 8 0 119 0 256s111 248 248 248 248-111 248-248S385 8 248 8zm0 448c-110.3 0-200-89.7-200-200S137.7 56 248 56s200 89.7 200 200-89.7 200-200 200z"],
 "grin-stars": [496, 512, [], "f587", "M248 8C111 8 0 119 0 256s111 248 248 248 248-111 248-248S385 8 248 8zm0 448c-110.3 0-200-89.7-200-200S137.7 56 248 56s200 89.7 200 200-89.7 200-200 200zm105.6-151.4c-25.9 8.3-64.4 13.1-105.6 13.1s-79.6-4.8-105.6-13.1c-9.8-3.1-19.4 5.3-17.7 15.3 7.9 47.2 71.3 80 123.3 80s115.3-32.9 123.3-80c1.6-9.8-7.7-18.4-17.7-15.3zm-227.9-57.5c-1 6.2 5.4 11 11 7.9l31.3-16.3 31.3 16.3c5.6 3.1 12-1.7 11-7.9l-6-34.9 25.4-24.6c4.5-4.5 1.9-12.2-4.3-13.2l-34.9-5-15.5-31.6c-2.9-5.8-11-5.8-13.9 0l-15.5 31.6-34.9 5c-6.2.9-8.9 8.6-4.3 13.2l25.4 24.6-6.1 34.9zm259.7-72.7l-34.9-5-15.5-31.6c-2.9-5.8-11-5.8-13.9 0l-15.5 31.6-34.9 5c-6.2.9-8.9 8.6-4.3 13.2l25.4 24.6-6 34.9c-1 6.2 5.4 11 11 7.9l31.3-16.3 31.3 16.3c5.6 3.1 12-1.7 11-7.9l-6-34.9 25.4-24.6c4.5-4.6 1.8-12.2-4.4-13.2z"],
  "smile-beam": [496, 512, [], "f5b8", "M248 8C111 8 0 119 0 256s111 248 248 248 248-111 248-248S385 8 248 8zm0 448c-110.3 0-200-89.7-200-200S137.7 56 248 56s200 89.7 200 200-89.7 200-200 200zm84-143.4c-20.8 25-51.5 39.4-84 39.4s-63.2-14.3-84-39.4c-8.5-10.2-23.6-11.5-33.8-3.1-10.2 8.5-11.5 23.6-3.1 33.8 30 36 74.1 56.6 120.9 56.6s90.9-20.6 120.9-56.6c8.5-10.2 7.1-25.3-3.1-33.8-10.2-8.4-25.3-7.1-33.8 3.1zM136.5 211c7.7-13.7 19.2-21.6 31.5-21.6s23.8 7.9 31.5 21.6l9.5 17c2.1 3.7 6.2 4.7 9.3 3.7 3.6-1.1 6-4.5 5.7-8.3-3.3-42.1-32.2-71.4-56-71.4s-52.7 29.3-56 71.4c-.3 3.7 2.1 7.2 5.7 8.3 3.4 1.1 7.4-.5 9.3-3.7l9.5-17zM328 152c-23.8 0-52.7 29.3-56 71.4-.3 3.7 2.1 7.2 5.7 8.3 3.5 1.1 7.4-.5 9.3-3.7l9.5-17c7.7-13.7 19.2-21.6 31.5-21.6s23.8 7.9 31.5 21.6l9.5 17c2.1 3.7 6.2 4.7 9.3 3.7 3.6-1.1 6-4.5 5.7-8.3-3.3-42.1-32.2-71.4-56-71.4z"],
 "smile-wink": [496, 512, [], "f4da", "M248 8C111 8 0 119 0 256s111 248 248 248 248-111 248-248S385 8 248 8zm0 448c-110.3 0-200-89.7-200-200S137.7 56 248 56s200 89.7 200 200-89.7 200-200 200zm117.8-146.4c-10.2-8.5-25.3-7.1-33.8 3.1-20.8 25-51.5 39.4-84 39.4s-63.2-14.3-84-39.4c-8.5-10.2-23.7-11.5-33.8-3.1-10.2 8.5-11.5 23.6-3.1 33.8 30 36 74.1 56.6 120.9 56.6s90.9-20.6 120.9-56.6c8.5-10.2 7.1-25.3-3.1-33.8zM168 240c17.7 0 32-14.3 32-32s-14.3-32-32-32-32 14.3-32 32 14.3 32 32 32zm160-60c-25.7 0-55.9 16.9-59.9 42.1-1.7 11.2 11.5 18.2 19.8 10.8l9.5-8.5c14.8-13.2 46.2-13.2 61 0l9.5 8.5c8.5 7.4 21.6.3 19.8-10.8-3.8-25.2-34-42.1-59.7-42.1z"],
        "check-square": [448, 512, [], "f14a", "M400 480H48c-26.51 0-48-21.49-48-48V80c0-26.51 21.49-48 48-48h352c26.51 0 48 21.49 48 48v352c0 26.51-21.49 48-48 48zm-204.686-98.059l184-184c6.248-6.248 6.248-16.379 0-22.627l-22.627-22.627c-6.248-6.248-16.379-6.249-22.628 0L184 302.745l-70.059-70.059c-6.248-6.248-16.379-6.248-22.628 0l-22.627 22.627c-6.248 6.248-6.248 16.379 0 22.627l104 104c6.249 6.25 16.379 6.25 22.628.001z"],        
        "circle": [512, 512, [], "f111", "M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8zm0 448c-110.5 0-200-89.5-200-200S145.5 56 256 56s200 89.5 200 200-89.5 200-200 200z"],        
        smile: [496, 512, [], "f118", "M248 8C111 8 0 119 0 256s111 248 248 248 248-111 248-248S385 8 248 8zm0 448c-110.3 0-200-89.7-200-200S137.7 56 248 56s200 89.7 200 200-89.7 200-200 200zm-80-216c17.7 0 32-14.3 32-32s-14.3-32-32-32-32 14.3-32 32 14.3 32 32 32zm160 0c17.7 0 32-14.3 32-32s-14.3-32-32-32-32 14.3-32 32 14.3 32 32 32zm4 72.6c-20.8 25-51.5 39.4-84 39.4s-63.2-14.3-84-39.4c-8.5-10.2-23.7-11.5-33.8-3.1-10.2 8.5-11.5 23.6-3.1 33.8 30 36 74.1 56.6 120.9 56.6s90.9-20.6 120.9-56.6c8.5-10.2 7.1-25.3-3.1-33.8-10.1-8.4-25.3-7.1-33.8 3.1z"],
        square: [448, 512, [], "f0c8", "M400 32H48C21.5 32 0 53.5 0 80v352c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48V80c0-26.5-21.5-48-48-48zm-6 400H54c-3.3 0-6-2.7-6-6V86c0-3.3 2.7-6 6-6h340c3.3 0 6 2.7 6 6v340c0 3.3-2.7 6-6 6z"],
        user: [448, 512, [], "f007", "M313.6 304c-28.7 0-42.5 16-89.6 16-47.1 0-60.8-16-89.6-16C60.2 304 0 364.2 0 438.4V464c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48v-25.6c0-74.2-60.2-134.4-134.4-134.4zM400 464H48v-25.6c0-47.6 38.8-86.4 86.4-86.4 14.6 0 38.3 16 89.6 16 51.7 0 74.9-16 89.6-16 47.6 0 86.4 38.8 86.4 86.4V464zM224 288c79.5 0 144-64.5 144-144S303.5 0 224 0 80 64.5 80 144s64.5 144 144 144zm0-240c52.9 0 96 43.1 96 96s-43.1 96-96 96-96-43.1-96-96 43.1-96 96-96z"],
        grimace: [496, 512, [], "f57f", "M248 8C111 8 0 119 0 256s111 248 248 248 248-111 248-248S385 8 248 8zm0 448c-110.3 0-200-89.7-200-200S137.7 56 248 56s200 89.7 200 200-89.7 200-200 200zm-80-216c17.7 0 32-14.3 32-32s-14.3-32-32-32-32 14.3-32 32 14.3 32 32 32zm160 0c17.7 0 32-14.3 32-32s-14.3-32-32-32-32 14.3-32 32 14.3 32 32 32zm16 16H152c-26.5 0-48 21.5-48 48v32c0 26.5 21.5 48 48 48h192c26.5 0 48-21.5 48-48v-32c0-26.5-21.5-48-48-48zm-168 96h-24c-8.8 0-16-7.2-16-16v-8h40v24zm0-40h-40v-8c0-8.8 7.2-16 16-16h24v24zm64 40h-48v-24h48v24zm0-40h-48v-24h48v24zm64 40h-48v-24h48v24zm0-40h-48v-24h48v24zm56 24c0 8.8-7.2 16-16 16h-24v-24h40v8zm0-24h-40v-24h24c8.8 0 16 7.2 16 16v8z"]
    };
    ! function(t) {
        try {
            t()
        } catch (t) {
            if (!i) throw t
        }
    }(function() {
        ! function t(e, r) {
            var n = Object.keys(r).reduce(function(t, e) {
                var n = r[e];
                return n.icon ? t[n.iconName] = n.icon : t[e] = n, t
            }, {});
            "function" == typeof l.hooks.addPack ? l.hooks.addPack(e, n) : l.styles[e] = f({}, l.styles[e] || {}, n), "fas" === e && t("fa", r)
        }("far", u)
    })
}(),
function() {
    "use strict";
    var t = {};
    try {
        "undefined" != typeof window && (t = window)
    } catch (t) {}
    var e = (t.navigator || {}).userAgent,
        r = void 0 === e ? "" : e,
        n = t,
        a = (~r.indexOf("MSIE") || r.indexOf("Trident/"), "___FONT_AWESOME___"),
        i = function() {
            try {
                return !0
            } catch (t) {
                return !1
            }
        }(),
        o = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
        s = o.concat([11, 12, 13, 14, 15, 16, 17, 18, 19, 20]);
    ["xs", "sm", "lg", "fw", "ul", "li", "border", "pull-left", "pull-right", "spin", "pulse", "rotate-90", "rotate-180", "rotate-270", "flip-horizontal", "flip-vertical", "stack", "stack-1x", "stack-2x", "inverse", "layers", "layers-text", "layers-counter"].concat(o.map(function(t) {
        return t + "x"
    })).concat(s.map(function(t) {
        return "w-" + t
    }));
    var c = n || {};
    c[a] || (c[a] = {}), c[a].styles || (c[a].styles = {}), c[a].hooks || (c[a].hooks = {}), c[a].shims || (c[a].shims = []);
    var l = c[a],
        f = Object.assign || function(t) {
            for (var e = 1; e < arguments.length; e++) {
                var r = arguments[e];
                for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (t[n] = r[n])
            }
            return t
        };
    var u = {
        "check-square": [448, 512, [], "f14a", "M400 480H48c-26.51 0-48-21.49-48-48V80c0-26.51 21.49-48 48-48h352c26.51 0 48 21.49 48 48v352c0 26.51-21.49 48-48 48zm-204.686-98.059l184-184c6.248-6.248 6.248-16.379 0-22.627l-22.627-22.627c-6.248-6.248-16.379-6.249-22.628 0L184 302.745l-70.059-70.059c-6.248-6.248-16.379-6.248-22.628 0l-22.627 22.627c-6.248 6.248-6.248 16.379 0 22.627l104 104c6.249 6.25 16.379 6.25 22.628.001z"],        
        "circle": [512, 512, [], "f111", "M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8zm0 448c-110.5 0-200-89.5-200-200S145.5 56 256 56s200 89.5 200 200-89.5 200-200 200z"],
        "align-right": [448, 512, [], "f038", "M160 84V44c0-8.837 7.163-16 16-16h256c8.837 0 16 7.163 16 16v40c0 8.837-7.163 16-16 16H176c-8.837 0-16-7.163-16-16zM16 228h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16zm0 256h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16zm160-128h256c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H176c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16z"],
        at: [512, 512, [], "f1fa", "M256 8C118.941 8 8 118.919 8 256c0 137.059 110.919 248 248 248 48.154 0 95.342-14.14 135.408-40.223 12.005-7.815 14.625-24.288 5.552-35.372l-10.177-12.433c-7.671-9.371-21.179-11.667-31.373-5.129C325.92 429.757 291.314 440 256 440c-101.458 0-184-82.542-184-184S154.542 72 256 72c100.139 0 184 57.619 184 160 0 38.786-21.093 79.742-58.17 83.693-17.349-.454-16.91-12.857-13.476-30.024l23.433-121.11C394.653 149.75 383.308 136 368.225 136h-44.981a13.518 13.518 0 0 0-13.432 11.993l-.01.092c-14.697-17.901-40.448-21.775-59.971-21.775-74.58 0-137.831 62.234-137.831 151.46 0 65.303 36.785 105.87 96 105.87 26.984 0 57.369-15.637 74.991-38.333 9.522 34.104 40.613 34.103 70.71 34.103C462.609 379.41 504 307.798 504 232 504 95.653 394.023 8 256 8zm-21.68 304.43c-22.249 0-36.07-15.623-36.07-40.771 0-44.993 30.779-72.729 58.63-72.729 22.292 0 35.601 15.241 35.601 40.77 0 45.061-33.875 72.73-58.161 72.73z"],
        book: [448, 512, [], "f02d", "M448 360V24c0-13.3-10.7-24-24-24H96C43 0 0 43 0 96v320c0 53 43 96 96 96h328c13.3 0 24-10.7 24-24v-16c0-7.5-3.5-14.3-8.9-18.7-4.2-15.4-4.2-59.3 0-74.7 5.4-4.3 8.9-11.1 8.9-18.6zM128 134c0-3.3 2.7-6 6-6h212c3.3 0 6 2.7 6 6v20c0 3.3-2.7 6-6 6H134c-3.3 0-6-2.7-6-6v-20zm0 64c0-3.3 2.7-6 6-6h212c3.3 0 6 2.7 6 6v20c0 3.3-2.7 6-6 6H134c-3.3 0-6-2.7-6-6v-20zm253.4 250H96c-17.7 0-32-14.3-32-32 0-17.6 14.4-32 32-32h285.4c-1.9 17.1-1.9 46.9 0 64z"],
        "chevron-down": [448, 512, [], "f078", "M207.029 381.476L12.686 187.132c-9.373-9.373-9.373-24.569 0-33.941l22.667-22.667c9.357-9.357 24.522-9.375 33.901-.04L224 284.505l154.745-154.021c9.379-9.335 24.544-9.317 33.901.04l22.667 22.667c9.373 9.373 9.373 24.569 0 33.941L240.971 381.476c-9.373 9.372-24.569 9.372-33.942 0z"],
        "chevron-left": [320, 512, [], "f053", "M34.52 239.03L228.87 44.69c9.37-9.37 24.57-9.37 33.94 0l22.67 22.67c9.36 9.36 9.37 24.52.04 33.9L131.49 256l154.02 154.75c9.34 9.38 9.32 24.54-.04 33.9l-22.67 22.67c-9.37 9.37-24.57 9.37-33.94 0L34.52 272.97c-9.37-9.37-9.37-24.57 0-33.94z"],
        "chevron-right": [320, 512, [], "f054", "M285.476 272.971L91.132 467.314c-9.373 9.373-24.569 9.373-33.941 0l-22.667-22.667c-9.357-9.357-9.375-24.522-.04-33.901L188.505 256 34.484 101.255c-9.335-9.379-9.317-24.544.04-33.901l22.667-22.667c9.373-9.373 24.569-9.373 33.941 0L285.475 239.03c9.373 9.372 9.373 24.568.001 33.941z"],
        grimace: [496, 512, [], "f57f", "M248 8C111 8 0 119 0 256s111 248 248 248 248-111 248-248S385 8 248 8zM144 400h-8c-17.7 0-32-14.3-32-32v-8h40v40zm0-56h-40v-8c0-17.7 14.3-32 32-32h8v40zm-8-136c0-17.7 14.3-32 32-32s32 14.3 32 32-14.3 32-32 32-32-14.3-32-32zm72 192h-48v-40h48v40zm0-56h-48v-40h48v40zm64 56h-48v-40h48v40zm0-56h-48v-40h48v40zm64 56h-48v-40h48v40zm0-56h-48v-40h48v40zm-8-104c-17.7 0-32-14.3-32-32s14.3-32 32-32 32 14.3 32 32-14.3 32-32 32zm64 128c0 17.7-14.3 32-32 32h-8v-40h40v8zm0-24h-40v-40h8c17.7 0 32 14.3 32 32v8z"],
        lock: [448, 512, [], "f023", "M400 224h-24v-72C376 68.2 307.8 0 224 0S72 68.2 72 152v72H48c-26.5 0-48 21.5-48 48v192c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48V272c0-26.5-21.5-48-48-48zm-104 0H152v-72c0-39.7 32.3-72 72-72s72 32.3 72 72v72z"],
        plus: [448, 512, [], "f067", "M416 208H272V64c0-17.67-14.33-32-32-32h-32c-17.67 0-32 14.33-32 32v144H32c-17.67 0-32 14.33-32 32v32c0 17.67 14.33 32 32 32h144v144c0 17.67 14.33 32 32 32h32c17.67 0 32-14.33 32-32V304h144c17.67 0 32-14.33 32-32v-32c0-17.67-14.33-32-32-32z"],
        "redo-alt": [512, 512, [], "f2f9", "M256.455 8c66.269.119 126.437 26.233 170.859 68.685l35.715-35.715C478.149 25.851 504 36.559 504 57.941V192c0 13.255-10.745 24-24 24H345.941c-21.382 0-32.09-25.851-16.971-40.971l41.75-41.75c-30.864-28.899-70.801-44.907-113.23-45.273-92.398-.798-170.283 73.977-169.484 169.442C88.764 348.009 162.184 424 256 424c41.127 0 79.997-14.678 110.629-41.556 4.743-4.161 11.906-3.908 16.368.553l39.662 39.662c4.872 4.872 4.631 12.815-.482 17.433C378.202 479.813 319.926 504 256 504 119.034 504 8.001 392.967 8 256.002 7.999 119.193 119.646 7.755 256.455 8z"],
        smile: [496, 512, [], "f118", "M248 8C111 8 0 119 0 256s111 248 248 248 248-111 248-248S385 8 248 8zm80 168c17.7 0 32 14.3 32 32s-14.3 32-32 32-32-14.3-32-32 14.3-32 32-32zm-160 0c17.7 0 32 14.3 32 32s-14.3 32-32 32-32-14.3-32-32 14.3-32 32-32zm194.8 170.2C334.3 380.4 292.5 400 248 400s-86.3-19.6-114.8-53.8c-13.6-16.3 11-36.7 24.6-20.5 22.4 26.9 55.2 42.2 90.2 42.2s67.8-15.4 90.2-42.2c13.4-16.2 38.1 4.2 24.6 20.5z"],
        square: [448, 512, [], "f0c8", "M400 32H48C21.5 32 0 53.5 0 80v352c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48V80c0-26.5-21.5-48-48-48z"],
        user: [448, 512, [], "f007", "M224 256c70.7 0 128-57.3 128-128S294.7 0 224 0 96 57.3 96 128s57.3 128 128 128zm89.6 32h-16.7c-22.2 10.2-46.9 16-72.9 16s-50.6-5.8-72.9-16h-16.7C60.2 288 0 348.2 0 422.4V464c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48v-41.6c0-74.2-60.2-134.4-134.4-134.4z"]
    };
    ! function(t) {
        try {
            t()
        } catch (t) {
            if (!i) throw t
        }
    }(function() {
        ! function t(e, r) {
            var n = Object.keys(r).reduce(function(t, e) {
                var n = r[e];
                return n.icon ? t[n.iconName] = n.icon : t[e] = n, t
            }, {});
            "function" == typeof l.hooks.addPack ? l.hooks.addPack(e, n) : l.styles[e] = f({}, l.styles[e] || {}, n), "fas" === e && t("fa", r)
        }("fas", u)
    })
}(),
function() {
    "use strict";
    var t = function() {},
        e = {},
        r = {},
        n = null,
        a = {
            mark: t,
            measure: t
        };
    try {
        "undefined" != typeof window && (e = window), "undefined" != typeof document && (r = document), "undefined" != typeof MutationObserver && (n = MutationObserver), "undefined" != typeof performance && (a = performance)
    } catch (t) {}
    var i = (e.navigator || {}).userAgent,
        o = void 0 === i ? "" : i,
        s = e,
        c = r,
        l = n,
        f = a,
        u = !!s.document,
        m = !!c.documentElement && !!c.head && "function" == typeof c.addEventListener && "function" == typeof c.createElement,
        d = ~o.indexOf("MSIE") || ~o.indexOf("Trident/"),
        h = "___FONT_AWESOME___",
        v = 16,
        p = "svg-inline--fa",
        g = "data-fa-i2svg",
        b = "data-fa-pseudo-element",
        y = "data-prefix",
        w = "data-icon",
        x = "fontawesome-i2svg",
        k = ["HTML", "HEAD", "STYLE", "SCRIPT"],
        z = function() {
            try {
                return !0
            } catch (t) {
                return !1
            }
        }(),
        M = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
        C = M.concat([11, 12, 13, 14, 15, 16, 17, 18, 19, 20]),
        O = ["class", "data-prefix", "data-icon", "data-fa-transform", "data-fa-mask"],
        A = ["xs", "sm", "lg", "fw", "ul", "li", "border", "pull-left", "pull-right", "spin", "pulse", "rotate-90", "rotate-180", "rotate-270", "flip-horizontal", "flip-vertical", "stack", "stack-1x", "stack-2x", "inverse", "layers", "layers-text", "layers-counter"].concat(M.map(function(t) {
            return t + "x"
        })).concat(C.map(function(t) {
            return "w-" + t
        })),
        N = function(t, e) {
            if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
        },
        S = function() {
            function t(t, e) {
                for (var r = 0; r < e.length; r++) {
                    var n = e[r];
                    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(t, n.key, n)
                }
            }
            return function(e, r, n) {
                return r && t(e.prototype, r), n && t(e, n), e
            }
        }(),
        L = Object.assign || function(t) {
            for (var e = 1; e < arguments.length; e++) {
                var r = arguments[e];
                for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (t[n] = r[n])
            }
            return t
        },
        E = function() {
            return function(t, e) {
                if (Array.isArray(t)) return t;
                if (Symbol.iterator in Object(t)) return function(t, e) {
                    var r = [],
                        n = !0,
                        a = !1,
                        i = void 0;
                    try {
                        for (var o, s = t[Symbol.iterator](); !(n = (o = s.next()).done) && (r.push(o.value), !e || r.length !== e); n = !0);
                    } catch (t) {
                        a = !0, i = t
                    } finally {
                        try {
                            !n && s.return && s.return()
                        } finally {
                            if (a) throw i
                        }
                    }
                    return r
                }(t, e);
                throw new TypeError("Invalid attempt to destructure non-iterable instance")
            }
        }(),
        P = function(t) {
            if (Array.isArray(t)) {
                for (var e = 0, r = Array(t.length); e < t.length; e++) r[e] = t[e];
                return r
            }
            return Array.from(t)
        },
        j = s.FontAwesomeConfig || {};
    if (c && "function" == typeof c.querySelector) {
        [
            ["data-family-prefix", "familyPrefix"],
            ["data-replacement-class", "replacementClass"],
            ["data-auto-replace-svg", "autoReplaceSvg"],
            ["data-auto-add-css", "autoAddCss"],
            ["data-auto-a11y", "autoA11y"],
            ["data-search-pseudo-elements", "searchPseudoElements"],
            ["data-observe-mutations", "observeMutations"],
            ["data-keep-original-source", "keepOriginalSource"],
            ["data-measure-performance", "measurePerformance"],
            ["data-show-missing-icons", "showMissingIcons"]
        ].forEach(function(t) {
            var e, r = E(t, 2),
                n = r[0],
                a = r[1],
                i = "" === (e = function(t) {
                    var e = c.querySelector("script[" + t + "]");
                    if (e) return e.getAttribute(t)
                }(n)) || "false" !== e && ("true" === e || e);
            void 0 !== i && null !== i && (j[a] = i)
        })
    }
    var H = L({
        familyPrefix: "fa",
        replacementClass: p,
        autoReplaceSvg: !0,
        autoAddCss: !0,
        autoA11y: !0,
        searchPseudoElements: !1,
        observeMutations: !0,
        keepOriginalSource: !0,
        measurePerformance: !1,
        showMissingIcons: !0
    }, j);
    H.autoReplaceSvg || (H.observeMutations = !1);
    var T = L({}, H);
    s.FontAwesomeConfig = T;
    var _ = s || {};
    _[h] || (_[h] = {}), _[h].styles || (_[h].styles = {}), _[h].hooks || (_[h].hooks = {}), _[h].shims || (_[h].shims = []);
    var R = _[h],
        V = [],
        I = !1;
    m && ((I = (c.documentElement.doScroll ? /^loaded|^c/ : /^loaded|^i|^c/).test(c.readyState)) || c.addEventListener("DOMContentLoaded", function t() {
        c.removeEventListener("DOMContentLoaded", t), I = 1, V.map(function(t) {
            return t()
        })
    }));
    var F = function(t) {
            m && (I ? setTimeout(t, 0) : V.push(t))
        },
        W = v,
        q = {
            size: 16,
            x: 0,
            y: 0,
            rotate: 0,
            flipX: !1,
            flipY: !1
        };

    function Y(t) {
        if (t && m) {
            var e = c.createElement("style");
            e.setAttribute("type", "text/css"), e.innerHTML = t;
            for (var r = c.head.childNodes, n = null, a = r.length - 1; a > -1; a--) {
                var i = r[a],
                    o = (i.tagName || "").toUpperCase();
                ["STYLE", "LINK"].indexOf(o) > -1 && (n = i)
            }
            return c.head.insertBefore(e, n), t
        }
    }
    var B = 0;

    function D() {
        return ++B
    }

    function X(t) {
        for (var e = [], r = (t || []).length >>> 0; r--;) e[r] = t[r];
        return e
    }

    function U(t) {
        return t.classList ? X(t.classList) : (t.getAttribute("class") || "").split(" ").filter(function(t) {
            return t
        })
    }

    function K(t, e) {
        var r, n = e.split("-"),
            a = n[0],
            i = n.slice(1).join("-");
        return a !== t || "" === i || (r = i, ~A.indexOf(r)) ? null : i
    }

    function G(t) {
        return ("" + t).replace(/&/g, "&amp;").replace(/"/g, "&quot;").replace(/'/g, "&#39;").replace(/</g, "&lt;").replace(/>/g, "&gt;")
    }

    function J(t) {
        return Object.keys(t || {}).reduce(function(e, r) {
            return e + (r + ": ") + t[r] + ";"
        }, "")
    }

    function Q(t) {
        return t.size !== q.size || t.x !== q.x || t.y !== q.y || t.rotate !== q.rotate || t.flipX || t.flipY
    }

    function Z(t) {
        var e = t.transform,
            r = t.containerWidth,
            n = t.iconWidth;
        return {
            outer: {
                transform: "translate(" + r / 2 + " 256)"
            },
            inner: {
                transform: "translate(" + 32 * e.x + ", " + 32 * e.y + ") " + " " + ("scale(" + e.size / 16 * (e.flipX ? -1 : 1) + ", " + e.size / 16 * (e.flipY ? -1 : 1) + ") ") + " " + ("rotate(" + e.rotate + " 0 0)")
            },
            path: {
                transform: "translate(" + n / 2 * -1 + " -256)"
            }
        }
    }
    var $ = {
            x: 0,
            y: 0,
            width: "100%",
            height: "100%"
        },
        tt = function(t) {
            var e = t.children,
                r = t.attributes,
                n = t.main,
                a = t.mask,
                i = t.transform,
                o = n.width,
                s = n.icon,
                c = a.width,
                l = a.icon,
                f = Z({
                    transform: i,
                    containerWidth: c,
                    iconWidth: o
                }),
                u = {
                    tag: "rect",
                    attributes: L({}, $, {
                        fill: "white"
                    })
                },
                m = {
                    tag: "g",
                    attributes: L({}, f.inner),
                    children: [{
                        tag: "path",
                        attributes: L({}, s.attributes, f.path, {
                            fill: "black"
                        })
                    }]
                },
                d = {
                    tag: "g",
                    attributes: L({}, f.outer),
                    children: [m]
                },
                h = "mask-" + D(),
                v = "clip-" + D(),
                p = {
                    tag: "defs",
                    children: [{
                        tag: "clipPath",
                        attributes: {
                            id: v
                        },
                        children: [l]
                    }, {
                        tag: "mask",
                        attributes: L({}, $, {
                            id: h,
                            maskUnits: "userSpaceOnUse",
                            maskContentUnits: "userSpaceOnUse"
                        }),
                        children: [u, d]
                    }]
                };
            return e.push(p, {
                tag: "rect",
                attributes: L({
                    fill: "currentColor",
                    "clip-path": "url(#" + v + ")",
                    mask: "url(#" + h + ")"
                }, $)
            }), {
                children: e,
                attributes: r
            }
        },
        et = function(t) {
            var e = t.children,
                r = t.attributes,
                n = t.main,
                a = t.transform,
                i = J(t.styles);
            if (i.length > 0 && (r.style = i), Q(a)) {
                var o = Z({
                    transform: a,
                    containerWidth: n.width,
                    iconWidth: n.width
                });
                e.push({
                    tag: "g",
                    attributes: L({}, o.outer),
                    children: [{
                        tag: "g",
                        attributes: L({}, o.inner),
                        children: [{
                            tag: n.icon.tag,
                            children: n.icon.children,
                            attributes: L({}, n.icon.attributes, o.path)
                        }]
                    }]
                })
            } else e.push(n.icon);
            return {
                children: e,
                attributes: r
            }
        },
        rt = function(t) {
            var e = t.children,
                r = t.main,
                n = t.mask,
                a = t.attributes,
                i = t.styles,
                o = t.transform;
            if (Q(o) && r.found && !n.found) {
                var s = r.width / r.height / 2,
                    c = .5;
                a.style = J(L({}, i, {
                    "transform-origin": s + o.x / 16 + "em " + (c + o.y / 16) + "em"
                }))
            }
            return [{
                tag: "svg",
                attributes: a,
                children: e
            }]
        },
        nt = function(t) {
            var e = t.prefix,
                r = t.iconName,
                n = t.children,
                a = t.attributes,
                i = t.symbol,
                o = !0 === i ? e + "-" + T.familyPrefix + "-" + r : i;
            return [{
                tag: "svg",
                attributes: {
                    style: "display: none;"
                },
                children: [{
                    tag: "symbol",
                    attributes: L({}, a, {
                        id: o
                    }),
                    children: n
                }]
            }]
        };

    function at(t) {
        var e = t.icons,
            r = e.main,
            n = e.mask,
            a = t.prefix,
            i = t.iconName,
            o = t.transform,
            s = t.symbol,
            c = t.title,
            l = t.extra,
            f = t.watchable,
            u = void 0 !== f && f,
            m = n.found ? n : r,
            d = m.width,
            h = m.height,
            v = "fa-w-" + Math.ceil(d / h * 16),
            p = [T.replacementClass, i ? T.familyPrefix + "-" + i : "", v].filter(function(t) {
                return -1 === l.classes.indexOf(t)
            }).concat(l.classes).join(" "),
            b = {
                children: [],
                attributes: L({}, l.attributes, {
                    "data-prefix": a,
                    "data-icon": i,
                    class: p,
                    role: "img",
                    xmlns: "http://www.w3.org/2000/svg",
                    viewBox: "0 0 " + d + " " + h
                })
            };
        u && (b.attributes[g] = ""), c && b.children.push({
            tag: "title",
            attributes: {
                id: b.attributes["aria-labelledby"] || "title-" + D()
            },
            children: [c]
        });
        var y = L({}, b, {
                prefix: a,
                iconName: i,
                main: r,
                mask: n,
                transform: o,
                symbol: s,
                styles: l.styles
            }),
            w = n.found && r.found ? tt(y) : et(y),
            x = w.children,
            k = w.attributes;
        return y.children = x, y.attributes = k, s ? nt(y) : rt(y)
    }

    function it(t) {
        var e = t.content,
            r = t.width,
            n = t.height,
            a = t.transform,
            i = t.title,
            o = t.extra,
            s = t.watchable,
            c = void 0 !== s && s,
            l = L({}, o.attributes, i ? {
                title: i
            } : {}, {
                class: o.classes.join(" ")
            });
        c && (l[g] = "");
        var f, u, m, h, p, b, y, w, x, k = L({}, o.styles);
        Q(a) && (k.transform = (u = (f = {
            transform: a,
            startCentered: !0,
            width: r,
            height: n
        }).transform, m = f.width, h = void 0 === m ? v : m, p = f.height, b = void 0 === p ? v : p, y = f.startCentered, x = "", x += (w = void 0 !== y && y) && d ? "translate(" + (u.x / W - h / 2) + "em, " + (u.y / W - b / 2) + "em) " : w ? "translate(calc(-50% + " + u.x / W + "em), calc(-50% + " + u.y / W + "em)) " : "translate(" + u.x / W + "em, " + u.y / W + "em) ", x += "scale(" + u.size / W * (u.flipX ? -1 : 1) + ", " + u.size / W * (u.flipY ? -1 : 1) + ") ", x += "rotate(" + u.rotate + "deg) "), k["-webkit-transform"] = k.transform);
        var z = J(k);
        z.length > 0 && (l.style = z);
        var M = [];
        return M.push({
            tag: "span",
            attributes: l,
            children: [e]
        }), i && M.push({
            tag: "span",
            attributes: {
                class: "sr-only"
            },
            children: [i]
        }), M
    }
    var ot = function() {},
        st = T.measurePerformance && f && f.mark && f.measure ? f : {
            mark: ot,
            measure: ot
        },
        ct = 'FA "5.3.1"',
        lt = function(t) {
            st.mark(ct + " " + t + " ends"), st.measure(ct + " " + t, ct + " " + t + " begins", ct + " " + t + " ends")
        },
        ft = {
            begin: function(t) {
                return st.mark(ct + " " + t + " begins"),
                    function() {
                        return lt(t)
                    }
            },
            end: lt
        },
        ut = function(t, e, r, n) {
            var a, i, o, s, c, l = Object.keys(t),
                f = l.length,
                u = void 0 !== n ? (s = e, c = n, function(t, e, r, n) {
                    return s.call(c, t, e, r, n)
                }) : e;
            for (void 0 === r ? (a = 1, o = t[l[0]]) : (a = 0, o = r); a < f; a++) o = u(o, t[i = l[a]], i, t);
            return o
        },
        mt = R.styles,
        dt = R.shims,
        ht = {},
        vt = {},
        pt = {},
        gt = function() {
            var t = function(t) {
                return ut(mt, function(e, r, n) {
                    return e[n] = ut(r, t, {}), e
                }, {})
            };
            ht = t(function(t, e, r) {
                return t[e[3]] = r, t
            }), vt = t(function(t, e, r) {
                var n = e[2];
                return t[r] = r, n.forEach(function(e) {
                    t[e] = r
                }), t
            });
            var e = "far" in mt;
            pt = ut(dt, function(t, r) {
                var n = r[0],
                    a = r[1],
                    i = r[2];
                return "far" !== a || e || (a = "fas"), t[n] = {
                    prefix: a,
                    iconName: i
                }, t
            }, {})
        };

    function bt(t, e) {
        return ht[t][e]
    }
    gt();
    var yt = R.styles,
        wt = function() {
            return {
                prefix: null,
                iconName: null,
                rest: []
            }
        };

    function xt(t) {
        return t.reduce(function(t, e) {
            var r = K(T.familyPrefix, e);
            if (yt[e]) t.prefix = e;
            else if (r) {
                var n = "fa" === t.prefix ? pt[r] || {
                    prefix: null,
                    iconName: null
                } : {};
                t.iconName = n.iconName || r, t.prefix = n.prefix || t.prefix
            } else e !== T.replacementClass && 0 !== e.indexOf("fa-w-") && t.rest.push(e);
            return t
        }, wt())
    }

    function kt(t, e, r) {
        if (t && t[e] && t[e][r]) return {
            prefix: e,
            iconName: r,
            icon: t[e][r]
        }
    }

    function zt(t) {
        var e, r = t.tag,
            n = t.attributes,
            a = void 0 === n ? {} : n,
            i = t.children,
            o = void 0 === i ? [] : i;
        return "string" == typeof t ? G(t) : "<" + r + " " + (e = a, Object.keys(e || {}).reduce(function(t, r) {
            return t + (r + '="') + G(e[r]) + '" '
        }, "").trim()) + ">" + o.map(zt).join("") + "</" + r + ">"
    }
    var Mt = function() {};

    function Ct(t) {
        return "string" == typeof(t.getAttribute ? t.getAttribute(g) : null)
    }
    var Ot = {
        replace: function(t) {
            var e = t[0],
                r = t[1].map(function(t) {
                    return zt(t)
                }).join("\n");
            if (e.parentNode && e.outerHTML) e.outerHTML = r + (T.keepOriginalSource && "svg" !== e.tagName.toLowerCase() ? "\x3c!-- " + e.outerHTML + " --\x3e" : "");
            else if (e.parentNode) {
                var n = document.createElement("span");
                e.parentNode.replaceChild(n, e), n.outerHTML = r
            }
        },
        nest: function(t) {
            var e = t[0],
                r = t[1];
            if (~U(e).indexOf(T.replacementClass)) return Ot.replace(t);
            var n = new RegExp(T.familyPrefix + "-.*");
            delete r[0].attributes.style;
            var a = r[0].attributes.class.split(" ").reduce(function(t, e) {
                return e === T.replacementClass || e.match(n) ? t.toSvg.push(e) : t.toNode.push(e), t
            }, {
                toNode: [],
                toSvg: []
            });
            r[0].attributes.class = a.toSvg.join(" ");
            var i = r.map(function(t) {
                return zt(t)
            }).join("\n");
            e.setAttribute("class", a.toNode.join(" ")), e.setAttribute(g, ""), e.innerHTML = i
        }
    };

    function At(t, e) {
        var r = "function" == typeof e ? e : Mt;
        0 === t.length ? r() : (s.requestAnimationFrame || function(t) {
            return t()
        })(function() {
            var e = !0 === T.autoReplaceSvg ? Ot.replace : Ot[T.autoReplaceSvg] || Ot.replace,
                n = ft.begin("mutate");
            t.map(e), n(), r()
        })
    }
    var Nt = !1;
    var St = null;

    function Lt(t) {
        if (l && T.observeMutations) {
            var e = t.treeCallback,
                r = t.nodeCallback,
                n = t.pseudoElementsCallback,
                a = t.observeMutationsRoot,
                i = void 0 === a ? c.body : a;
            St = new l(function(t) {
                Nt || X(t).forEach(function(t) {
                    if ("childList" === t.type && t.addedNodes.length > 0 && !Ct(t.addedNodes[0]) && (T.searchPseudoElements && n(t.target), e(t.target)), "attributes" === t.type && t.target.parentNode && T.searchPseudoElements && n(t.target.parentNode), "attributes" === t.type && Ct(t.target) && ~O.indexOf(t.attributeName))
                        if ("class" === t.attributeName) {
                            var a = xt(U(t.target)),
                                i = a.prefix,
                                o = a.iconName;
                            i && t.target.setAttribute("data-prefix", i), o && t.target.setAttribute("data-icon", o)
                        } else r(t.target)
                })
            }), m && St.observe(i, {
                childList: !0,
                attributes: !0,
                characterData: !0,
                subtree: !0
            })
        }
    }
    var Et = function(t) {
        var e = t.getAttribute("style"),
            r = [];
        return e && (r = e.split(";").reduce(function(t, e) {
            var r = e.split(":"),
                n = r[0],
                a = r.slice(1);
            return n && a.length > 0 && (t[n] = a.join(":").trim()), t
        }, {})), r
    };

    function Pt(t) {
        for (var e = "", r = 0; r < t.length; r++) {
            e += ("000" + t.charCodeAt(r).toString(16)).slice(-4)
        }
        return e
    }
    var jt = function(t) {
            var e, r, n = t.getAttribute("data-prefix"),
                a = t.getAttribute("data-icon"),
                i = void 0 !== t.innerText ? t.innerText.trim() : "",
                o = xt(U(t));
            return n && a && (o.prefix = n, o.iconName = a), o.prefix && i.length > 1 ? o.iconName = (e = o.prefix, r = t.innerText, vt[e][r]) : o.prefix && 1 === i.length && (o.iconName = bt(o.prefix, Pt(t.innerText))), o
        },
        Ht = function(t) {
            var e = {
                size: 16,
                x: 0,
                y: 0,
                flipX: !1,
                flipY: !1,
                rotate: 0
            };
            return t ? t.toLowerCase().split(" ").reduce(function(t, e) {
                var r = e.toLowerCase().split("-"),
                    n = r[0],
                    a = r.slice(1).join("-");
                if (n && "h" === a) return t.flipX = !0, t;
                if (n && "v" === a) return t.flipY = !0, t;
                if (a = parseFloat(a), isNaN(a)) return t;
                switch (n) {
                    case "grow":
                        t.size = t.size + a;
                        break;
                    case "shrink":
                        t.size = t.size - a;
                        break;
                    case "left":
                        t.x = t.x - a;
                        break;
                    case "right":
                        t.x = t.x + a;
                        break;
                    case "up":
                        t.y = t.y - a;
                        break;
                    case "down":
                        t.y = t.y + a;
                        break;
                    case "rotate":
                        t.rotate = t.rotate + a
                }
                return t
            }, e) : e
        },
        Tt = function(t) {
            return Ht(t.getAttribute("data-fa-transform"))
        },
        _t = function(t) {
            var e = t.getAttribute("data-fa-symbol");
            return null !== e && ("" === e || e)
        },
        Rt = function(t) {
            var e = X(t.attributes).reduce(function(t, e) {
                    return "class" !== t.name && "style" !== t.name && (t[e.name] = e.value), t
                }, {}),
                r = t.getAttribute("title");
            return T.autoA11y && (r ? e["aria-labelledby"] = T.replacementClass + "-title-" + D() : e["aria-hidden"] = "true"), e
        },
        Vt = function(t) {
            var e = t.getAttribute("data-fa-mask");
            return e ? xt(e.split(" ").map(function(t) {
                return t.trim()
            })) : wt()
        },
        It = {
            iconName: null,
            title: null,
            prefix: null,
            transform: q,
            symbol: !1,
            mask: null,
            extra: {
                classes: [],
                styles: {},
                attributes: {}
            }
        };

    function Ft(t) {
        this.name = "MissingIcon", this.message = t || "Icon unavailable", this.stack = (new Error).stack
    }
    Ft.prototype = Object.create(Error.prototype), Ft.prototype.constructor = Ft;
    var Wt = {
            fill: "currentColor"
        },
        qt = {
            attributeType: "XML",
            repeatCount: "indefinite",
            dur: "2s"
        },
        Yt = {
            tag: "path",
            attributes: L({}, Wt, {
                d: "M156.5,447.7l-12.6,29.5c-18.7-9.5-35.9-21.2-51.5-34.9l22.7-22.7C127.6,430.5,141.5,440,156.5,447.7z M40.6,272H8.5 c1.4,21.2,5.4,41.7,11.7,61.1L50,321.2C45.1,305.5,41.8,289,40.6,272z M40.6,240c1.4-18.8,5.2-37,11.1-54.1l-29.5-12.6 C14.7,194.3,10,216.7,8.5,240H40.6z M64.3,156.5c7.8-14.9,17.2-28.8,28.1-41.5L69.7,92.3c-13.7,15.6-25.5,32.8-34.9,51.5 L64.3,156.5z M397,419.6c-13.9,12-29.4,22.3-46.1,30.4l11.9,29.8c20.7-9.9,39.8-22.6,56.9-37.6L397,419.6z M115,92.4 c13.9-12,29.4-22.3,46.1-30.4l-11.9-29.8c-20.7,9.9-39.8,22.6-56.8,37.6L115,92.4z M447.7,355.5c-7.8,14.9-17.2,28.8-28.1,41.5 l22.7,22.7c13.7-15.6,25.5-32.9,34.9-51.5L447.7,355.5z M471.4,272c-1.4,18.8-5.2,37-11.1,54.1l29.5,12.6 c7.5-21.1,12.2-43.5,13.6-66.8H471.4z M321.2,462c-15.7,5-32.2,8.2-49.2,9.4v32.1c21.2-1.4,41.7-5.4,61.1-11.7L321.2,462z M240,471.4c-18.8-1.4-37-5.2-54.1-11.1l-12.6,29.5c21.1,7.5,43.5,12.2,66.8,13.6V471.4z M462,190.8c5,15.7,8.2,32.2,9.4,49.2h32.1 c-1.4-21.2-5.4-41.7-11.7-61.1L462,190.8z M92.4,397c-12-13.9-22.3-29.4-30.4-46.1l-29.8,11.9c9.9,20.7,22.6,39.8,37.6,56.9 L92.4,397z M272,40.6c18.8,1.4,36.9,5.2,54.1,11.1l12.6-29.5C317.7,14.7,295.3,10,272,8.5V40.6z M190.8,50 c15.7-5,32.2-8.2,49.2-9.4V8.5c-21.2,1.4-41.7,5.4-61.1,11.7L190.8,50z M442.3,92.3L419.6,115c12,13.9,22.3,29.4,30.5,46.1 l29.8-11.9C470,128.5,457.3,109.4,442.3,92.3z M397,92.4l22.7-22.7c-15.6-13.7-32.8-25.5-51.5-34.9l-12.6,29.5 C370.4,72.1,384.4,81.5,397,92.4z"
            })
        },
        Bt = L({}, qt, {
            attributeName: "opacity"
        }),
        Dt = {
            tag: "g",
            children: [Yt, {
                tag: "circle",
                attributes: L({}, Wt, {
                    cx: "256",
                    cy: "364",
                    r: "28"
                }),
                children: [{
                    tag: "animate",
                    attributes: L({}, qt, {
                        attributeName: "r",
                        values: "28;14;28;28;14;28;"
                    })
                }, {
                    tag: "animate",
                    attributes: L({}, Bt, {
                        values: "1;0;1;1;0;1;"
                    })
                }]
            }, {
                tag: "path",
                attributes: L({}, Wt, {
                    opacity: "1",
                    d: "M263.7,312h-16c-6.6,0-12-5.4-12-12c0-71,77.4-63.9,77.4-107.8c0-20-17.8-40.2-57.4-40.2c-29.1,0-44.3,9.6-59.2,28.7 c-3.9,5-11.1,6-16.2,2.4l-13.1-9.2c-5.6-3.9-6.9-11.8-2.6-17.2c21.2-27.2,46.4-44.7,91.2-44.7c52.3,0,97.4,29.8,97.4,80.2 c0,67.6-77.4,63.5-77.4,107.8C275.7,306.6,270.3,312,263.7,312z"
                }),
                children: [{
                    tag: "animate",
                    attributes: L({}, Bt, {
                        values: "1;0;0;0;0;1;"
                    })
                }]
            }, {
                tag: "path",
                attributes: L({}, Wt, {
                    opacity: "0",
                    d: "M232.5,134.5l7,168c0.3,6.4,5.6,11.5,12,11.5h9c6.4,0,11.7-5.1,12-11.5l7-168c0.3-6.8-5.2-12.5-12-12.5h-23 C237.7,122,232.2,127.7,232.5,134.5z"
                }),
                children: [{
                    tag: "animate",
                    attributes: L({}, Bt, {
                        values: "0;0;1;1;0;0;"
                    })
                }]
            }]
        },
        Xt = R.styles,
        Ut = "fa-layers-text",
        Kt = /Font Awesome 5 (Solid|Regular|Light|Brands|Free|Pro)/,
        Gt = {
            Solid: "fas",
            Regular: "far",
            Light: "fal",
            Brands: "fab"
        },
        Jt = {
            900: "fas",
            400: "far",
            300: "fal"
        };

    function Qt(t, e) {
        var r = {
            found: !1,
            width: 512,
            height: 512,
            icon: Dt
        };
        if (t && e && Xt[e] && Xt[e][t]) {
            var n = Xt[e][t];
            r = {
                found: !0,
                width: n[0],
                height: n[1],
                icon: {
                    tag: "path",
                    attributes: {
                        fill: "currentColor",
                        d: n.slice(4)[0]
                    }
                }
            }
        } else if (t && e && !T.showMissingIcons) throw new Ft("Icon is missing for prefix " + e + " with icon name " + t);
        return r
    }

    function Zt(t) {
        var e, r, n, a, i, o, s, c, l, f, u, m, h, v, p, g, b, y, w, x = (r = jt(e = t), n = r.iconName, a = r.prefix, i = r.rest, o = Et(e), s = Tt(e), c = _t(e), l = Rt(e), f = Vt(e), {
            iconName: n,
            title: e.getAttribute("title"),
            prefix: a,
            transform: s,
            symbol: c,
            mask: f,
            extra: {
                classes: i,
                styles: o,
                attributes: l
            }
        });
        return ~x.extra.classes.indexOf(Ut) ? function(t, e) {
            var r = e.title,
                n = e.transform,
                a = e.extra,
                i = null,
                o = null;
            if (d) {
                var s = parseInt(getComputedStyle(t).fontSize, 10),
                    c = t.getBoundingClientRect();
                i = c.width / s, o = c.height / s
            }
            return T.autoA11y && !r && (a.attributes["aria-hidden"] = "true"), [t, it({
                content: t.innerHTML,
                width: i,
                height: o,
                transform: n,
                title: r,
                extra: a,
                watchable: !0
            })]
        }(t, x) : (u = t, h = (m = x).iconName, v = m.title, p = m.prefix, g = m.transform, b = m.symbol, y = m.mask, w = m.extra, [u, at({
            icons: {
                main: Qt(h, p),
                mask: Qt(y.iconName, y.prefix)
            },
            prefix: p,
            iconName: h,
            transform: g,
            symbol: b,
            mask: y,
            title: v,
            extra: w,
            watchable: !0
        })])
    }

    function $t(t) {
        if (m) {
            var e = ft.begin("searchPseudoElements");
            Nt = !0,
                function() {
                    X(t.querySelectorAll("*")).filter(function(t) {
                        return !(t.parentNode === document.head || ~k.indexOf(t.tagName.toUpperCase()) || t.getAttribute(b) || t.parentNode && "svg" === t.parentNode.tagName)
                    }).forEach(function(t) {
                        [":before", ":after"].forEach(function(e) {
                            var r = X(t.children).filter(function(t) {
                                    return t.getAttribute(b) === e
                                })[0],
                                n = s.getComputedStyle(t, e),
                                a = n.getPropertyValue("font-family").match(Kt),
                                i = n.getPropertyValue("font-weight");
                            if (r && !a) t.removeChild(r);
                            else if (a) {
                                var o = n.getPropertyValue("content"),
                                    l = ~["Light", "Regular", "Solid", "Brands"].indexOf(a[1]) ? Gt[a[1]] : Jt[i],
                                    f = bt(l, Pt(3 === o.length ? o.substr(1, 1) : o));
                                if (!r || r.getAttribute(y) !== l || r.getAttribute(w) !== f) {
                                    r && t.removeChild(r);
                                    var u = It.extra;
                                    u.attributes[b] = e;
                                    var m = at(L({}, It, {
                                            icons: {
                                                main: Qt(f, l),
                                                mask: wt()
                                            },
                                            prefix: l,
                                            iconName: f,
                                            extra: u,
                                            watchable: !0
                                        })),
                                        d = c.createElement("svg");
                                    ":before" === e ? t.insertBefore(d, t.firstChild) : t.appendChild(d), d.outerHTML = m.map(function(t) {
                                        return zt(t)
                                    }).join("\n")
                                }
                            }
                        })
                    })
                }(), Nt = !1, e()
        }
    }

    function te(t) {
        var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
        if (m) {
            var r = c.documentElement.classList,
                n = function(t) {
                    return r.add(x + "-" + t)
                },
                a = function(t) {
                    return r.remove(x + "-" + t)
                },
                i = Object.keys(Xt),
                o = ["." + Ut + ":not([" + g + "])"].concat(i.map(function(t) {
                    return "." + t + ":not([" + g + "])"
                })).join(", ");
            if (0 !== o.length) {
                var s = X(t.querySelectorAll(o));
                if (s.length > 0) {
                    n("pending"), a("complete");
                    var l = ft.begin("onTree"),
                        f = s.reduce(function(t, e) {
                            try {
                                var r = Zt(e);
                                r && t.push(r)
                            } catch (t) {
                                z || t instanceof Ft && console.error(t)
                            }
                            return t
                        }, []);
                    l(), At(f, function() {
                        n("active"), n("complete"), a("pending"), "function" == typeof e && e()
                    })
                }
            }
        }
    }

    function ee(t) {
        var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
            r = Zt(t);
        r && At([r], e)
    }
    var re = function() {
        var t = p,
            e = T.familyPrefix,
            r = T.replacementClass,
            n = "svg:not(:root).svg-inline--fa{overflow:visible}.svg-inline--fa{display:inline-block;font-size:inherit;height:1em;overflow:visible;vertical-align:-.125em}.svg-inline--fa.fa-lg{vertical-align:-.225em}.svg-inline--fa.fa-w-1{width:.0625em}.svg-inline--fa.fa-w-2{width:.125em}.svg-inline--fa.fa-w-3{width:.1875em}.svg-inline--fa.fa-w-4{width:.25em}.svg-inline--fa.fa-w-5{width:.3125em}.svg-inline--fa.fa-w-6{width:.375em}.svg-inline--fa.fa-w-7{width:.4375em}.svg-inline--fa.fa-w-8{width:.5em}.svg-inline--fa.fa-w-9{width:.5625em}.svg-inline--fa.fa-w-10{width:.625em}.svg-inline--fa.fa-w-11{width:.6875em}.svg-inline--fa.fa-w-12{width:.75em}.svg-inline--fa.fa-w-13{width:.8125em}.svg-inline--fa.fa-w-14{width:.875em}.svg-inline--fa.fa-w-15{width:.9375em}.svg-inline--fa.fa-w-16{width:1em}.svg-inline--fa.fa-w-17{width:1.0625em}.svg-inline--fa.fa-w-18{width:1.125em}.svg-inline--fa.fa-w-19{width:1.1875em}.svg-inline--fa.fa-w-20{width:1.25em}.svg-inline--fa.fa-pull-left{margin-right:.3em;width:auto}.svg-inline--fa.fa-pull-right{margin-left:.3em;width:auto}.svg-inline--fa.fa-border{height:1.5em}.svg-inline--fa.fa-li{width:2em}.svg-inline--fa.fa-fw{width:1.25em}.fa-layers svg.svg-inline--fa{bottom:0;left:0;margin:auto;position:absolute;right:0;top:0}.fa-layers{display:inline-block;height:1em;position:relative;text-align:center;vertical-align:-.125em;width:1em}.fa-layers svg.svg-inline--fa{-webkit-transform-origin:center center;transform-origin:center center}.fa-layers-counter,.fa-layers-text{display:inline-block;position:absolute;text-align:center}.fa-layers-text{left:50%;top:50%;-webkit-transform:translate(-50%,-50%);transform:translate(-50%,-50%);-webkit-transform-origin:center center;transform-origin:center center}.fa-layers-counter{background-color:#ff253a;border-radius:1em;-webkit-box-sizing:border-box;box-sizing:border-box;color:#fff;height:1.5em;line-height:1;max-width:5em;min-width:1.5em;overflow:hidden;padding:.25em;right:0;text-overflow:ellipsis;top:0;-webkit-transform:scale(.25);transform:scale(.25);-webkit-transform-origin:top right;transform-origin:top right}.fa-layers-bottom-right{bottom:0;right:0;top:auto;-webkit-transform:scale(.25);transform:scale(.25);-webkit-transform-origin:bottom right;transform-origin:bottom right}.fa-layers-bottom-left{bottom:0;left:0;right:auto;top:auto;-webkit-transform:scale(.25);transform:scale(.25);-webkit-transform-origin:bottom left;transform-origin:bottom left}.fa-layers-top-right{right:0;top:0;-webkit-transform:scale(.25);transform:scale(.25);-webkit-transform-origin:top right;transform-origin:top right}.fa-layers-top-left{left:0;right:auto;top:0;-webkit-transform:scale(.25);transform:scale(.25);-webkit-transform-origin:top left;transform-origin:top left}.fa-lg{font-size:1.33333em;line-height:.75em;vertical-align:-.0667em}.fa-xs{font-size:.75em}.fa-sm{font-size:.875em}.fa-1x{font-size:1em}.fa-2x{font-size:2em}.fa-3x{font-size:3em}.fa-4x{font-size:4em}.fa-5x{font-size:5em}.fa-6x{font-size:6em}.fa-7x{font-size:7em}.fa-8x{font-size:8em}.fa-9x{font-size:9em}.fa-10x{font-size:10em}.fa-fw{text-align:center;width:1.25em}.fa-ul{list-style-type:none;margin-left:2.5em;padding-left:0}.fa-ul>li{position:relative}.fa-li{left:-2em;position:absolute;text-align:center;width:2em;line-height:inherit}.fa-border{border:solid .08em #eee;border-radius:.1em;padding:.2em .25em .15em}.fa-pull-left{float:left}.fa-pull-right{float:right}.fa.fa-pull-left,.fab.fa-pull-left,.fal.fa-pull-left,.far.fa-pull-left,.fas.fa-pull-left{margin-right:.3em}.fa.fa-pull-right,.fab.fa-pull-right,.fal.fa-pull-right,.far.fa-pull-right,.fas.fa-pull-right{margin-left:.3em}.fa-spin{-webkit-animation:fa-spin 2s infinite linear;animation:fa-spin 2s infinite linear}.fa-pulse{-webkit-animation:fa-spin 1s infinite steps(8);animation:fa-spin 1s infinite steps(8)}@-webkit-keyframes fa-spin{0%{-webkit-transform:rotate(0);transform:rotate(0)}100%{-webkit-transform:rotate(360deg);transform:rotate(360deg)}}@keyframes fa-spin{0%{-webkit-transform:rotate(0);transform:rotate(0)}100%{-webkit-transform:rotate(360deg);transform:rotate(360deg)}}.fa-rotate-90{-webkit-transform:rotate(90deg);transform:rotate(90deg)}.fa-rotate-180{-webkit-transform:rotate(180deg);transform:rotate(180deg)}.fa-rotate-270{-webkit-transform:rotate(270deg);transform:rotate(270deg)}.fa-flip-horizontal{-webkit-transform:scale(-1,1);transform:scale(-1,1)}.fa-flip-vertical{-webkit-transform:scale(1,-1);transform:scale(1,-1)}.fa-flip-horizontal.fa-flip-vertical{-webkit-transform:scale(-1,-1);transform:scale(-1,-1)}:root .fa-flip-horizontal,:root .fa-flip-vertical,:root .fa-rotate-180,:root .fa-rotate-270,:root .fa-rotate-90{-webkit-filter:none;filter:none}.fa-stack{display:inline-block;height:2em;position:relative;width:2em}.fa-stack-1x,.fa-stack-2x{bottom:0;left:0;margin:auto;position:absolute;right:0;top:0}.svg-inline--fa.fa-stack-1x{height:1em;width:1em}.svg-inline--fa.fa-stack-2x{height:2em;width:2em}.fa-inverse{color:#fff}.sr-only{border:0;clip:rect(0,0,0,0);height:1px;margin:-1px;overflow:hidden;padding:0;position:absolute;width:1px}.sr-only-focusable:active,.sr-only-focusable:focus{clip:auto;height:auto;margin:0;overflow:visible;position:static;width:auto}";
        if ("fa" !== e || r !== t) {
            var a = new RegExp("\\.fa\\-", "g"),
                i = new RegExp("\\." + t, "g");
            n = n.replace(a, "." + e + "-").replace(i, "." + r)
        }
        return n
    };

    function ne(t) {
        return {
            found: !0,
            width: t[0],
            height: t[1],
            icon: {
                tag: "path",
                attributes: {
                    fill: "currentColor",
                    d: t.slice(4)[0]
                }
            }
        }
    }

    function ae() {
        T.autoAddCss && !le && (Y(re()), le = !0)
    }

    function ie(t, e) {
        return Object.defineProperty(t, "abstract", {
            get: e
        }), Object.defineProperty(t, "html", {
            get: function() {
                return t.abstract.map(function(t) {
                    return zt(t)
                })
            }
        }), Object.defineProperty(t, "node", {
            get: function() {
                if (m) {
                    var e = c.createElement("div");
                    return e.innerHTML = t.html, e.children
                }
            }
        }), t
    }

    function oe(t) {
        var e = t.prefix,
            r = void 0 === e ? "fa" : e,
            n = t.iconName;
        if (n) return kt(ce.definitions, r, n) || kt(R.styles, r, n)
    }
    var se, ce = new(function() {
            function t() {
                N(this, t), this.definitions = {}
            }
            return S(t, [{
                key: "add",
                value: function() {
                    for (var t = this, e = arguments.length, r = Array(e), n = 0; n < e; n++) r[n] = arguments[n];
                    var a = r.reduce(this._pullDefinitions, {});
                    Object.keys(a).forEach(function(e) {
                        t.definitions[e] = L({}, t.definitions[e] || {}, a[e]),
                            function t(e, r) {
                                var n = Object.keys(r).reduce(function(t, e) {
                                    var n = r[e];
                                    return n.icon ? t[n.iconName] = n.icon : t[e] = n, t
                                }, {});
                                "function" == typeof R.hooks.addPack ? R.hooks.addPack(e, n) : R.styles[e] = L({}, R.styles[e] || {}, n), "fas" === e && t("fa", r)
                            }(e, a[e]), gt()
                    })
                }
            }, {
                key: "reset",
                value: function() {
                    this.definitions = {}
                }
            }, {
                key: "_pullDefinitions",
                value: function(t, e) {
                    var r = e.prefix && e.iconName && e.icon ? {
                        0: e
                    } : e;
                    return Object.keys(r).map(function(e) {
                        var n = r[e],
                            a = n.prefix,
                            i = n.iconName,
                            o = n.icon;
                        t[a] || (t[a] = {}), t[a][i] = o
                    }), t
                }
            }]), t
        }()),
        le = !1,
        fe = {
            i2svg: function() {
                var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                if (m) {
                    ae();
                    var e = t.node,
                        r = void 0 === e ? c : e,
                        n = t.callback,
                        a = void 0 === n ? function() {} : n;
                    T.searchPseudoElements && $t(r), te(r, a)
                }
            },
            css: re,
            insertCss: function() {
                le || (Y(re()), le = !0)
            },
            watch: function() {
                var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                    e = t.autoReplaceSvgRoot,
                    r = t.observeMutationsRoot;
                !1 === T.autoReplaceSvg && (T.autoReplaceSvg = !0), T.observeMutations = !0, F(function() {
                    de({
                        autoReplaceSvgRoot: e
                    }), Lt({
                        treeCallback: te,
                        nodeCallback: ee,
                        pseudoElementsCallback: $t,
                        observeMutationsRoot: r
                    })
                })
            }
        },
        ue = (se = function(t) {
            var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                r = e.transform,
                n = void 0 === r ? q : r,
                a = e.symbol,
                i = void 0 !== a && a,
                o = e.mask,
                s = void 0 === o ? null : o,
                c = e.title,
                l = void 0 === c ? null : c,
                f = e.classes,
                u = void 0 === f ? [] : f,
                m = e.attributes,
                d = void 0 === m ? {} : m,
                h = e.styles,
                v = void 0 === h ? {} : h;
            if (t) {
                var p = t.prefix,
                    g = t.iconName,
                    b = t.icon;
                return ie(L({
                    type: "icon"
                }, t), function() {
                    return ae(), T.autoA11y && (l ? d["aria-labelledby"] = T.replacementClass + "-title-" + D() : d["aria-hidden"] = "true"), at({
                        icons: {
                            main: ne(b),
                            mask: s ? ne(s.icon) : {
                                found: !1,
                                width: null,
                                height: null,
                                icon: {}
                            }
                        },
                        prefix: p,
                        iconName: g,
                        transform: L({}, q, n),
                        symbol: i,
                        title: l,
                        extra: {
                            attributes: d,
                            styles: v,
                            classes: u
                        }
                    })
                })
            }
        }, function(t) {
            var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                r = (t || {}).icon ? t : oe(t || {}),
                n = e.mask;
            return n && (n = (n || {}).icon ? n : oe(n || {})), se(r, L({}, e, {
                mask: n
            }))
        }),
        me = {
            noAuto: function() {
                T.autoReplaceSvg = !1, T.observeMutations = !1, St && St.disconnect()
            },
            config: T,
            dom: fe,
            library: ce,
            parse: {
                transform: function(t) {
                    return Ht(t)
                }
            },
            findIconDefinition: oe,
            icon: ue,
            text: function(t) {
                var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                    r = e.transform,
                    n = void 0 === r ? q : r,
                    a = e.title,
                    i = void 0 === a ? null : a,
                    o = e.classes,
                    s = void 0 === o ? [] : o,
                    c = e.attributes,
                    l = void 0 === c ? {} : c,
                    f = e.styles,
                    u = void 0 === f ? {} : f;
                return ie({
                    type: "text",
                    content: t
                }, function() {
                    return ae(), it({
                        content: t,
                        transform: L({}, q, n),
                        title: i,
                        extra: {
                            attributes: l,
                            styles: u,
                            classes: [T.familyPrefix + "-layers-text"].concat(P(s))
                        }
                    })
                })
            },
            counter: function(t) {
                var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                    r = e.title,
                    n = void 0 === r ? null : r,
                    a = e.classes,
                    i = void 0 === a ? [] : a,
                    o = e.attributes,
                    s = void 0 === o ? {} : o,
                    c = e.styles,
                    l = void 0 === c ? {} : c;
                return ie({
                    type: "counter",
                    content: t
                }, function() {
                    return ae(),
                        function(t) {
                            var e = t.content,
                                r = t.title,
                                n = t.extra,
                                a = L({}, n.attributes, r ? {
                                    title: r
                                } : {}, {
                                    class: n.classes.join(" ")
                                }),
                                i = J(n.styles);
                            i.length > 0 && (a.style = i);
                            var o = [];
                            return o.push({
                                tag: "span",
                                attributes: a,
                                children: [e]
                            }), r && o.push({
                                tag: "span",
                                attributes: {
                                    class: "sr-only"
                                },
                                children: [r]
                            }), o
                        }({
                            content: t.toString(),
                            title: n,
                            extra: {
                                attributes: s,
                                styles: l,
                                classes: [T.familyPrefix + "-layers-counter"].concat(P(i))
                            }
                        })
                })
            },
            layer: function(t) {
                return ie({
                    type: "layer"
                }, function() {
                    ae();
                    var e = [];
                    return t(function(t) {
                        Array.isArray(t) ? t.map(function(t) {
                            e = e.concat(t.abstract)
                        }) : e = e.concat(t.abstract)
                    }), [{
                        tag: "span",
                        attributes: {
                            class: T.familyPrefix + "-layers"
                        },
                        children: e
                    }]
                })
            },
            toHtml: zt
        },
        de = function() {
            var t = (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}).autoReplaceSvgRoot,
                e = void 0 === t ? c : t;
            Object.keys(R.styles).length > 0 && m && T.autoReplaceSvg && me.dom.i2svg({
                node: e
            })
        };
    ! function(t) {
        try {
            t()
        } catch (t) {
            if (!z) throw t
        }
    }(function() {
        u && (s.FontAwesome || (s.FontAwesome = me), F(function() {
            de(), Lt({
                treeCallback: te,
                nodeCallback: ee,
                pseudoElementsCallback: $t
            })
        })), R.hooks = L({}, R.hooks, {
            addPack: function(t, e) {
                R.styles[t] = L({}, R.styles[t] || {}, e), gt(), de()
            },
            addShims: function(t) {
                var e;
                (e = R.shims).push.apply(e, P(t)), gt(), de()
            }
        })
    })
}();