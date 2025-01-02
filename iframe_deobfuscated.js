onmessage = async z => {
    if ("object" == typeof z.data && z.data.rid === "HCF" + jid) {
        onmessage = () => {};
        let H = null;
        try {
            {
                let g = Date.now(), A = await fetch("/rpc/" + eid).then(F => F.arrayBuffer()), E = Date.now(), O = new Uint8Array(A), W = new Uint32Array(O.buffer, O.byteOffset, 4)[0] + 4, I = new TextDecoder().decode(new Uint8Array(O.buffer, O.byteOffset + W, O.byteLength - W));
                H = Date.now();
                var G = O.slice().buffer, q = Date.now();
                Function(I)()(I, -2031046560029716628n, [ z.data.data, g, E, q ], w, G);
            }
        } catch (R) {
            R.__hcl || w(R);
        }
        async function w(g) {
            let A = {
                UGYhc: function(E, O) {
                    return E !== O;
                },
                XeyYa: "dxqOo",
                lnVwD: "REmTJ",
                aQonh: function(E, O) {
                    return E !== O;
                },
                QPWgR: "RSzHZ",
                cWvit: "VasUF",
                iFelN: function(E, O) {
                    return E === O;
                },
                MDykv: "jDMqM",
                ikWbd: "GCGkt"
            };
            console.error(g);
            var E = g?.message || g?.stack ? (z => z + (g?.stack ?? "no stack"))((g?.message ?? "no message") + "\n") : g?.toString?.() ?? "unknown";
            if (!/^Load failed|^Failed to fetch|^The operation was aborted|^NetworkError when attempting to fetch|^отменено/.test(E)) {
                var O = navigator.userAgent;
                let I = [ (W = (P, u) => {
                    if (!A.UGYhc(A.XeyYa, A.lnVwD)) return "" + z;
                    try {
                        var Y;
                        if (A.aQonh(A.QPWgR, A.cWvit)) {
                            var B, y = P.split(/\./);
                            let U = window;
                            for (B of y) U = U[B];
                            return Object.getOwnPropertyDescriptor(U, u) ? "1" : "0";
                        }
                        return Y = H.apply(z, arguments), w = null, Y;
                    } catch (Y) {
                        if (A.iFelN(A.MDykv, A.ikWbd)) {
                            var d;
                            let T = w;
                            for (d of Y.split(/\./)) T = T[d];
                            return g.getOwnPropertyDescriptor(T, A) ? "1" : "0";
                        }
                        return "" + Y;
                    }
                })("HTMLElement.prototype", "innerText"), W("HTMLElement.prototype", "onload"), W("HTMLElement.prototype", "onerror"), W("HTMLElement.prototype", "onmousedown"), W("HTMLElement.prototype", "onmouseup"), W("HTMLElement.prototype", "onmousemove"), W("HTMLElement.prototype", "onclick"), W("Element.prototype", "innerHTML"), W("HTMLScriptElement.prototype", "src"), W("HTMLImageElement.prototype", "src"), W("HTMLLinkElement.prototype", "href"), W("HTMLLinkElement.prototype", "type"), W("HTMLLinkElement.prototype", "rel"), W("MessagePort.prototype", "onmessage") ], G = bid, q = null;
                (W = window?.performance?.memory) && (q = {
                    totalJSHeapSize: W.totalJSHeapSize,
                    usedJSHeapSize: W.usedJSHeapSize,
                    jsHeapSizeLimit: W.jsHeapSizeLimit
                });
                var W = Date.now() - window.gid, Z = H && Date.now() - H;
                await ((z, S) => z(S, {
                    body: JSON.stringify({
                        esid: E,
                        uaid: O,
                        wkid: I,
                        muid: q,
                        ltid: W,
                        dtid: Z,
                        ctid: "frame"
                    }),
                    method: "POST",
                    keepalive: !0
                }))(fetch, "/report/" + G);
            }
        }
    }
};
