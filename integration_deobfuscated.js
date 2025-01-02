{
    const S = window, H = [ "auto", "en", "ru" ], w = Symbol(), g = new URL(document.currentScript.src, window.location.href).host;
    let A = 0, E = Object.create(null), O = {
        mount(W) {
            let I = {
                IZPJq: function(G, q) {
                    return G !== q;
                },
                kaLdk: "vVBrt",
                PkTcG: "VUtOI",
                BOVZK: function(G, q) {
                    return G(q);
                },
                ChyDh: function(G, q) {
                    return G || q;
                }
            };
            {
                let q, {
                    target: F,
                    siteKey: R,
                    callback: Z,
                    magic: P,
                    invisible: y,
                    language: U = "auto",
                    __captchaId: B
                } = W;
                if (H.includes(U) || (console.warn("HatCaptcha.mount: invalid language passed, resetting to 'auto', supported languages: " + H), 
                U = "auto"), y) q = document.body; else if (!(q = "string" == typeof F ? document.querySelector(F) : F)) throw new Error("HatCaptcha.mount: unable to find target element by selector");
                let L = "" + Math.random(), Y = document.createElement("div"), J = document.createElement("iframe"), j = (J.style.width = "300px", 
                J.style.height = "75px", J.style.border = "0", J.style.borderRadius = "5px", 
                J.src = "https://" + g + "/frame/" + R + "/" + U + "/" + L, J.setAttribute("sandbox", "allow-same-origin allow-scripts allow-popups"), 
                J.setAttribute("allow", "cross-origin-isolated; fullscreen"), y && (Y.style.position = "absolute", 
                Y.style.top = "-999999px", Y.style.left = "-999999px"), Y.appendChild(J), 
                q.appendChild(Y), void 0 === B ? A++ : B);
                return J.onload = () => {
                    {
                        let x = new MessageChannel();
                        J.contentWindow.postMessage({
                            rid: "HCF" + L,
                            data: x.port1
                        }, "*", [ x.port1 ]), x.port2.onmessage = D => {
                            if (!I.IZPJq(I.kaLdk, I.PkTcG)) {
                                let K = Y ? function() {
                                    var N;
                                    if (K) return N = G.apply(q, arguments), F = null, 
                                    N;
                                } : function() {};
                                return g = !1, K;
                            }
                            D.data[0] || I.BOVZK(Function, D.data[1])()(D.data[1], Math.PI, [ x.port2, Z, Y, J, w, I.ChyDh(P, ""), y, !!W.disableSlider, j ], 0, D.data[2]);
                        };
                    }
                }, E[j] = [ W, Y ], j;
            }
        },
        unmount(c) {
            E[c][1].remove(), delete E[c];
        },
        reset(c) {
            var G = E[c][0];
            O.unmount(c), O.mount({
                ...G,
                __captchaId: c
            });
        }
    };
    S.HatCaptcha = O, S.HatCaptchaLoaded && S.HatCaptchaLoaded();
}
