// browserify /Users/louisabraham/Dropbox/Informatique/Programmes/Python/SlitherBot/test.js -o /Users/louisabraham/Dropbox/Informatique/Programmes/Python/SlitherBot/bundle.js
// ws.on("message", ws.onmessage); ws.on("error", ws.onerror); ws.on("close", ws.onclose); ws.on("connect", ws.onopen)
var WebSocketClient = require('websocket').client;
// var test = new WebSocketClient();
// test.connect("ws://176.9.138.77:443/slither", null, 'http://slither.io')

function WebSocket(host) {
    // console.log(host)
    var client = new WebSocketClient()
    client.close = function() {};
    client.connect(host, null, 'http://slither.io')
    return client
};
var nlc = 48,
    vfas = [],
    vfc = 62,
    fvpos = 0,
    fvtg = 0,
    ovxx, ovyy, fvxs = [],
    fvys = [];




var forcing = !1,
    ws = null;
var sos = [],
    clus = [],
    bso, u_m = [64, 32, 16, 8, 4, 2, 1],
    lgbsc = 1,
    lgcsc = 1,
    lb_fr = 0,
    login_fr = 0,
    llgmtm = Date.now(),
    login_iv = -1;

function loadSos(c) {
    if (!forcing && 0 < c.length) {
        sos = [];
        clus = [];
        c.charAt(0);
        for (var f = 1, b = {}, h = 0, b = h = 0, x, q = 0, e = 0, y = [], F = [], t = [], w = []; f < c.length;)
            if (x = (c.charCodeAt(f++) - 97 - e) % 26,
                0 > x && (x += 26),
                q *= 16,
                q += x,
                e += 7,
                1 == b) {
                if (0 == h)
                    y.push(q),
                4 == y.length && h++;
                else if (1 == h)
                    F.push(q),
                3 == F.length && h++;
                else if (2 == h)
                    t.push(q),
                3 == t.length && h++;
                else if (3 == h && (w.push(q),
                    1 == w.length)) {
                    b = {};
                    for (h = x = 0; h < F.length; h++)
                        x *= 256,
                    x += F[h];
                    for (h = F = 0; h < t.length; h++)
                        F *= 256,
                    F += t[h];
                    b.ip = y.join(".");
                    b.po = x;
                    b.ac = F;
                    b.clu = w[0];
                    clus[b.clu] ?
                        y = clus[b.clu] : (y = {},
                            clus[b.clu] = y,
                            y.sis = [],
                            y.ptms = []);
                    b.cluo = y;
                    sos.push(b);
                    y = [];
                    F = [];
                    t = [];
                    w = [];
                    h = 0
                }
                b = q = 0
            } else
                b++;
        for (f = sos.length - 1; 0 <= f; f--)
            if (b = 1,
                y = sos[f].cluo) {
                for (h = y.sis.length - 1; 0 <= h; h--)
                    if (y.sis[h].ip == sos[f].ip) {
                        b = 0;
                        break
                    }
                1 == b && y.sis.push({
                    ip: sos[f].ip
                })
            }
        for (f = clus.length - 1; 0 <= f; f--)
            if ((y = clus[f]) && 0 < y.sis.length) {
                h = Math.floor(Math.random() * y.sis.length);
                c = y.sis[h].ip;
                e = null;
                try {
                    e = new WebSocket("ws://" + c + ":80/ptc")
                } catch (z) {
                    e = null
                }
                e && (e.binaryType = "arraybuffer",
                    e.onerror = function(b) {},
                    e.onmessage =
                    function(b) {
                        b = new Uint8Array(b.data);
                        if (1 == b.length && 112 == b[0])
                            for (b = clus.length - 1; 0 <= b; b--) {
                                var c = clus[b];
                                if (c && c.ps == this) {
                                    var e = Date.now() - c.stm;
                                    testing && console.log(" ping time for cluster " + b + ": " + e);
                                    c.ptms.push(e);
                                    4 > c.ptms.length ? (c.stm = Date.now(),
                                        b = new Uint8Array(1),
                                        b[0] = 112,
                                        this.send(b)) : (waiting_for_sos && -1 == sos_ready_after_mtm && (sos_ready_after_mtm = Date.now() + 2E3),
                                        this.close(),
                                        c.ps = null);
                                    break
                                }
                            }
                    },
                    e.onopen = function(b) {
                        console.log(b)
                        b = !1;
                        for (var c = clus.length - 1; 0 <= c; c--) {
                            var e = clus[c];
                            if (e && e.ps == this) {
                                e.stm =
                                    Date.now();
                                b = new Uint8Array(1);
                                b[0] = 112;
                                this.send(b);
                                b = !0;
                                break
                            }
                        }
                        b || this.close()
                    },
                    y.ps = e, e.on("message", e.onmessage), e.on("error", e.onerror), e.on("connect", e.onopen))
            }
    }
}

function resetGame() {
    ws && (ws.close(),
        ws = null);
    snake = null;
    want_close_socket = !1;
    snakes = [];
    foods = [];
    foods_c = 0;
    preys = [];
    sectors = [];
    os = {};
    rank = 0;
    best_rank = 999999999;
    biggest_snake_count = snake_count = 0;
    lagging = wfpr = playing = connected = !1;
    for (j = vfc - 1; 0 <= j; j--)
        fvxs[j] = 0,
    fvys[j] = 0;
    fvy = fvx = fvtg = 0;
    lag_mult = 1;
    cptm = 0;
    // gsc = sgsc
}
var protocol_version = 2,
    connecting = !1,
    start_connect_mtm, play_btn_click_mtm = -1,
    waiting_for_sos = !1,
    sos_ready_after_mtm = -1;

var tip_pos = -1,
    tip_fr = 1.9;
var pi2 = 2 * Math.PI
var view_xx = 0,
    view_yy = 0,
    view_ang = 0,
    view_dist = 0,
    fvx = 0,
    fvy = 0,
    xm = 0,
    ym = 0,
    lsxm = 0,
    lsym = 0,
    snake = null,
    my_nick = "",
    dhx, dhy, hsz, fr = 0,
    lfr = 0,
    ltm = Date.now(),
    vfr = 0,
    vfrb = 0,
    avfr = 0,
    fr2 = 0,
    lfr2 = 0,
    vfrb2 = 0,
    cptm = 0,
    lptm = 0,
    lpstm = 0,
    last_ping_mtm = 0,
    lagging = !1,
    lag_mult = 1,
    wfpr = !1,
    high_quality = !0,
    gla = 1,
    wdfg = 0,
    qsm = 1,
    mqsm = 1.7,
    playing = !1,
    connected = !1,
    want_close_socket = !1,
    want_victory_message = !1,
    want_victory_focus = !1,
    want_hide_victory = 0,
    hvfr = 0,
    dead_mtm = -1,
    at2lt = new Float32Array(65536),
    choosing_skin = !1;
var mscps = 0,
    fmlts = [],
    fpsls = [],
    etm = 0,
    ws = null,
    tcsecs = 0,
    trdps = 0,
    rdps = 0,
    rfps = 0,
    rnps = 0,
    rsps = 0,
    reps = 0,
    rdpspc = [],
    anguc = 0,
    angnuc = 0,
    wangnuc = 0,
    lrd_mtm = Date.now(),
    locu_mtm = 0;

var kd_l_frb = 0,
    kd_r_frb = 0,
    kd_l = !1,
    kd_r = !1,
    kd_u = !1,
    lkstm = 0,
    spinner_shown = !1

var wumsts = !1,
    rank = 0,
    best_rank = 999999999,
    snake_count = 0,
    biggest_snake_count = 0,
    cm1, snakes = [],
    foods = [],
    foods_c = 0,
    preys = [],
    os = {},
    lsang = 0,
    want_e = !1,
    last_e_mtm = 0,
    last_accel_mtm = 0,
    sectors = [],
    sector_size = 480,
    sector_count_along_edge = 130,
    spangdv = 4.8,
    nsp1 = 4.25,
    nsp2 = .5,
    nsp3 = 12,
    mamu = .033,
    mamu2 = .028,
    cst = .43,
    lfas = [],
    lfc = 128;
no_raf = !0
var testing = !1;

var oef = function() {
    global.snake = snake
    var c = Date.now();
    avfr = vfr = (c - ltm) / 8;
    ltm = c;
    choosing_skin || (lagging || wfpr && 420 < c - last_ping_mtm && (lagging = !0),
        lagging ? (lag_mult *= .85,
            .01 > lag_mult && (lag_mult = .01)) : 1 > lag_mult && (lag_mult += .05,
            1 <= lag_mult && (lag_mult = 1)));
    120 < vfr && (vfr = 120);
    vfr *= lag_mult;
    etm *= lag_mult;
    lfr = fr;
    fr += vfr;
    vfrb = Math.floor(fr) - Math.floor(lfr);
    lfr2 = fr2;
    fr2 += 2 * vfr;
    vfrb2 = Math.floor(fr2) - Math.floor(lfr2);
    kd_l && (kd_l_frb += vfrb);
    kd_r && (kd_r_frb += vfrb);
    if (spinner_shown) {
        lsfr += avfr;
        var f = ldmc.getContext("2d");
        f.clearRect(0,
            0, 512, 128);
        for (var b, h, x = 1; 2 >= x; x++) {
            f.beginPath();
            1 == x ? (f.fillStyle = "#60FF70",
                h = 0) : (f.fillStyle = "#9850FF",
                h = Math.PI);
            for (var q = 0; 256 >= q; q++)
                b = 32 + 5 * Math.cos(h + lsfr / 6 + 8 * q / 256) + 8 * q / 256,
            256 == q && (b += 10),
            xx = 64 + Math.cos(h + lsfr / 44 + .8 * Math.PI * q / 256) * b * 1.25,
            yy = 64 + Math.sin(h + lsfr / 44 + .8 * Math.PI * q / 256) * b,
            0 == q ? f.moveTo(xx, yy) : f.lineTo(xx, yy);
            b = 32;
            xx = 64 + Math.cos(h + lsfr / 44 + .8 * Math.PI * (q + 47) / 256) * b * 1.25;
            yy = 64 + Math.sin(h + lsfr / 44 + .8 * Math.PI * (q + 47) / 256) * b;
            f.lineTo(xx, yy);
            for (q = 256; 0 <= q; q--)
                b = 32 + 5 * Math.cos(h + lsfr / 6 +
                    8 * q / 256) - 8 * q / 256,
            256 == q && (b -= 10),
            xx = 64 + Math.cos(h + lsfr / 44 + .8 * Math.PI * q / 256) * b * 1.25,
            yy = 64 + Math.sin(h + lsfr / 44 + .8 * Math.PI * q / 256) * b,
            f.lineTo(xx, yy);
            f.fill()
        }
        connecting ? (ss_a += avfr / 86,
            1 <= ss_a && (ss_a = 1),
            ss_sh += avfr / 93,
            1 <= ss_sh && (ss_sh = 1)) : (ss_a -= avfr / 86,
            0 >= ss_a && (ss_sh = ss_a = 0,
                ldmc.style.display = "none",
                trf(ldmc, "")));
        ldmc.style.opacity = ss_a;
        q = Math.round(.1 + .9 * ss_sh * (1 + 2 * Math.pow(1 - ss_a, 2)) * 1E5) / 1E5;
        trf(ldmc, "scale(" + q + "," + q + ")")
    }
    if (-1 != play_btn_click_mtm && 6666 < c - play_btn_click_mtm) {
        q = document.createElement("img");
        h = [];
        h.push("bso=" + encodeURIComponent(bso));
        if (bso)
            for (var e in bso)
                h.push(e + "=" + encodeURIComponent(bso[e]));
        h.push("waiting_for_sos=" + (waiting_for_sos ? "true" : "false"));
        h.push("soslen=" + sos.length);
        q.src = "http://slither.io/cnc.jpg?" + h.join("&");
        play_btn_click_mtm = -1
    }
    waiting_for_sos && c > sos_ready_after_mtm && (connecting || connected || console.log(12), connect());
    connecting && 3E3 < c - start_connect_mtm && (bso && (bso.tainted = !0),
        console.log(123), connect());
    if (choosing_skin) {
        for (q = snakes.length - 1; 0 <= q; q--)
            for (e = snakes[q],
                x = e.pts.length - 1; 0 <= x; x--)
                e.pts[x].yy =
                    grd / 2 + 15 * Math.cos(x / 4 + fr / 19) * (1 - x / e.pts.length);
        view_xx -= vfr
    }
    playing && (high_quality ? (1 > gla && (gla += .0075 * vfr,
            1 < gla && (gla = 1)),
        1 < qsm && (qsm -= 4E-5 * vfr,
            1 > qsm && (qsm = 1))) : (0 < gla && (gla -= .0075 * vfr,
            0 > gla && (gla = 0)),
        qsm < mqsm && (qsm += 4E-5 * vfr,
            qsm > mqsm && (qsm = mqsm))));
    0 != want_hide_victory && (1 == want_hide_victory ? (hvfr += .02 * vfr,
        1 <= hvfr ? (hvfr = 0,
            want_hide_victory = 2,
            victory_holder.style.opacity = 1,
            saveh.style.opacity = 1,
            victory_holder.style.display = "none",
            saveh.style.display = "none",
            nick_holder.style.opacity = 0,
            playh.style.opacity =
            0,
            smh.style.opacity = 0,
            nick_holder.style.display = "inline-block",
            playh.style.display = "block",
            smh.style.display = "block") : (victory_holder.style.opacity = 1 - hvfr,
            saveh.style.opacity = 1 - hvfr)) : 2 == want_hide_victory && (hvfr += .02 * vfr,
        1 <= hvfr && (hvfr = 1,
            want_hide_victory = 0),
        nick_holder.style.opacity = hvfr,
        playh.style.opacity = hvfr,
        smh.style.opacity = hvfr));
    1 != login_fr && -1 != tip_fr && (tip_fr += .017 * vfr,
        tip_fr >= pi2 && (tip_fr -= pi2
            //     ,
            // tip_pos++,
            // tip_pos >= tipss.length && (tip_pos = 0),
            // tips.textContent = tipss[tip_pos]
        ),
        x = .5 - .5 * Math.cos(tip_fr)
        // ,tips.style.opacity = Math.round(1E5 * Math.pow(x, .5)) / 1E5
    );
    if (-1 == dead_mtm) -
        1 != lb_fr && 1 != lb_fr && (lb_fr += .01 * vfr,
            1 <= lb_fr && (lb_fr = 1)
            // ,lbh.style.opacity = .85 * lb_fr,
            // lbs.style.opacity = lbn.style.opacity = lbp.style.opacity = lbf.style.opacity = vcm.style.opacity = lb_fr
    );
    else if (1600 < c - dead_mtm) {
        if (-1 == login_iv) {
            login_iv = -2;
            login.style.display = "inline";
            try {
                "1" != localStorage.edttsg ? cstx.style.display = "inline" : cskh.style.display = "inline"
            } catch (y) {}
            fbh.style.display = "inline";
            twth.style.display = "inline";
            plq.style.display =
                "inline";
            clq.style.display = "inline";
            grqh.style.display = "inline";
            social.style.display = "inline";
            want_victory_focus && (want_victory_focus = !1,
                victory.focus())
        } -
            2 == login_iv && (login_fr -= .004 * vfr,
                choosing_skin && (login_fr -= .007 * vfr),
                lb_fr = login_fr,
                0 >= login_fr && (login_fr = 0,
                    dead_mtm = -1,
                    nick.disabled = !1,
                    nick.focus(),
                    lb_fr = -1,
                    playing = !1,
                    choosing_skin && (choosing_skin = !1,
                        resetGame(),
                        pskh.style.display = "none",
                        nskh.style.display = "none",
                        skodiv.style.display = "none")),
                pbdiv.style.opacity = 1 - .5 * Math.max(0, Math.min(1, 6 *
                    login_fr)),
                lgcsc = 1 + .1 * Math.pow(login_fr, 2),
                q = Math.round(lgbsc * lgcsc * 1E5) / 1E5,
                1 == q ? trf(login, "") : trf(login, "scale(" + q + "," + q + ")"),
                login.style.opacity = 1 - login_fr,
                cstx.style.opacity = 1 - login_fr,
                fbh.style.opacity = 1 - login_fr,
                twth.style.opacity = 1 - login_fr,
                cskh.style.opacity = 1 - login_fr,
                grqh.style.opacity = 1 - login_fr,
                plq.style.opacity = 1 - login_fr,
                clq.style.opacity = 1 - login_fr,
                social.style.opacity = 1 - login_fr,
                pskh.style.opacity = login_fr,
                nskh.style.opacity = login_fr,
                skodiv.style.opacity = login_fr,
                mc.style.opacity =
                login_fr,
                loch.style.opacity = login_fr,
                lbh.style.opacity = .85 * lb_fr,
                lbs.style.opacity = lbn.style.opacity = lbp.style.opacity = lbf.style.opacity = vcm.style.opacity = lb_fr)
    }
    want_close_socket && -1 == dead_mtm && (want_close_socket = !1,
        ws && (ws.close(),
            ws = null,
            playing = connected = !1),
        resetGame());
    want_victory_message && (victory_bg.style.opacity = .92 + .08 * Math.cos(fr / 10));
    connected && ((0 < kd_l_frb || 0 < kd_r_frb) && 150 < c - lkstm && (lkstm = c,
        0 < kd_r_frb && kd_l_frb > kd_r_frb && (kd_l_frb -= kd_r_frb,
            kd_r_frb = 0),
        0 < kd_l_frb && kd_r_frb > kd_l_frb &&
        (kd_r_frb -= kd_l_frb,
            kd_l_frb = 0),
        0 < kd_l_frb ? (v = kd_l_frb,
            127 < v && (v = 127),
            kd_l_frb -= v,
            5 <= protocol_version ? (q = new Uint8Array(2),
                q[0] = 252) : (q = new Uint8Array(2),
                q[0] = 108),
            q[1] = v,
            ws.send(q),
            snake.eang -= mamu * v * snake.scang * snake.spang) : 0 < kd_r_frb && (v = kd_r_frb,
            127 < v && (v = 127),
            kd_r_frb -= v,
            5 <= protocol_version ? (v += 128,
                q = new Uint8Array(2),
                q[0] = 252) : (q = new Uint8Array(2),
                q[0] = 114),
            q[1] = v,
            snake.eang += mamu * v * snake.scang * snake.spang,
            ws.send(q))), !wfpr && 250 < c - last_ping_mtm && (last_ping_mtm = c,
        wfpr = !0,
        q = new Uint8Array(1),
        q[0] = 5 <= protocol_version ? 251 : 112,
        ws.send(q),
        lpstm = c));
    null != snake && 2147483647 != grd && 1E3 < c - locu_mtm && (locu_mtm = Date.now(),
        myloc.style.left = Math.round(52 + 40 * (snake.xx - grd) / grd - 7) + "px",
        myloc.style.top = Math.round(52 + 40 * (snake.yy - grd) / grd - 7) + "px");
    if (1E3 < c - lrd_mtm) {
        if (testing && console && console.log) {
            console.log("FPS: " + fps);
            h = [];
            trdps += rdps;
            playing && tcsecs++;
            h.push("FPS: " + fps);
            h.push("sectors: " + sectors.length);
            h.push("foods: " + foods_c);
            h.push("bytes/sec: " + rdps);
            h.push("bytes/sec avg: " + Math.round(trdps /
                tcsecs));
            h.push("");
            for (q = e = 0; q < rdpspc.length; q++)
                0 <= rdpspc[q] && (e += rdpspc[q]);
            for (q = 0; q < rdpspc.length; q++)
                0 <= rdpspc[q] && h.push(String.fromCharCode(q) + ": " + rdpspc[q] + " (" + Math.round(rdpspc[q] / e * 1E3) / 10 + "%)");
            h.push("total: " + e);
            maxp = pf_ep = pf_nap = pf_remove = pf_new_add = pf_add = 0;
            h.push("");
            for (q = 1; q < pfs.length; q++)
                0 != pfs[q] && (h.push(q + ": " + Math.round(1E3 * pfs[q]) / 1E3),
                    pfs[q] = 0);
            pft = 0;
            pfd.innerHTML = h.join("<br>")
        }
        // dfx || eval(dfs);
        //         if (0 < dfa.length) {
        //             for (q = dfa.length - 1; 0 <= q; q--)
        //                 try {
        //                     dfa[q]["ono" + dfq]()
        //                 } catch (y) {}
        //             dfa =
        //             []
        //         }
        playing && 1 == want_quality && (32 >= fps ? high_quality && (wdfg++,
            1 <= wdfg && (high_quality = !1)) : (high_quality || 48 <= fps) && 0 < wdfg && (wdfg--,
            0 >= wdfg && (high_quality = !0)));
        wangnuc = angnuc = anguc = fps = reps = rsps = rnps = rfps = rdps = 0;
        lrd_mtm = Date.now()
    }
    etm *= Math.pow(.993, vfrb);
    if (null != snake) {
        snake.md != snake.wmd && 150 < c - last_accel_mtm && (snake.md = snake.wmd,
            last_accel_mtm = c,
            5 <= protocol_version ? (q = new Uint8Array(1),
                q[0] = snake.md ? 253 : 254) : (q = new Uint8Array(2),
                q[0] = 109,
                q[1] = snake.md ? 1 : 0),
            ws.send(q));
        if (xm != lsxm || ym != lsym)
            want_e = !0;
        want_e && 100 < c - last_e_mtm && (want_e = !1,
            last_e_mtm = c,
            lsxm = xm,
            lsym = ym,
            d2 = xm * xm + ym * ym,
            256 < d2 ? (ang = Math.atan2(ym, xm),
                snake.eang = ang) : ang = snake.wang,
            ang %= pi2,
            0 > ang && (ang += pi2),
            5 <= protocol_version ? (sang = Math.floor(251 * ang / pi2),
                sang != lsang && (lsang = sang,
                    q = new Uint8Array(1),
                    q[0] = sang & 255,
                    lpstm = c,
                    ws.send(q.buffer))) : (sang = Math.floor(16777215 * ang / pi2),
                sang != lsang && (lsang = sang,
                    q = new Uint8Array(4),
                    q[0] = 101,
                    q[1] = sang >> 16 & 255,
                    q[2] = sang >> 8 & 255,
                    q[3] = sang & 255,
                    lpstm = c,
                    ws.send(q.buffer))))
    }
    if (!choosing_skin)
        for (q = snakes.length -
            1; 0 <= q; q--) {
            e = snakes[q];
            f = mamu * vfr * e.scang * e.spang;
            c = e.sp * vfr / 4;
            c > e.msl && (c = e.msl);
            if (!e.dead) {
                e.tsp != e.sp && (e.tsp < e.sp ? (e.tsp += .3 * vfr,
                    e.tsp > e.sp && (e.tsp = e.sp)) : (e.tsp -= .3 * vfr,
                    e.tsp < e.sp && (e.tsp = e.sp)));
                e.tsp > e.fsp && (e.sfr += (e.tsp - e.fsp) * vfr * .021);
                if (0 < e.fltg)
                    for (h = vfrb,
                        h > e.fltg && (h = e.fltg),
                        e.fltg -= h,
                        qq = 0; qq < h; qq++)
                        e.fl = e.fls[e.flpos],
                e.fls[e.flpos] = 0,
                e.flpos++,
                e.flpos >= lfc && (e.flpos = 0);
                else
                    0 == e.fltg && (e.fltg = -1,
                        e.fl = 0);
                e.cfl = e.tl + e.fl
            }
            if (1 == e.dir) {
                e.ang -= f;
                if (0 > e.ang || e.ang >= pi2)
                    e.ang %= pi2;
                0 > e.ang &&
                    (e.ang += pi2);
                h = (e.wang - e.ang) % pi2;
                0 > h && (h += pi2);
                h > Math.PI && (h -= pi2);
                0 < h && (e.ang = e.wang,
                    e.dir = 0)
            } else if (2 == e.dir) {
                e.ang += f;
                if (0 > e.ang || e.ang >= pi2)
                    e.ang %= pi2;
                0 > e.ang && (e.ang += pi2);
                h = (e.wang - e.ang) % pi2;
                0 > h && (h += pi2);
                h > Math.PI && (h -= pi2);
                0 > h && (e.ang = e.wang,
                    e.dir = 0)
            } else
                e.ang = e.wang;
            1 != e.ehl && (e.ehl += .03 * vfr,
                1 <= e.ehl && (e.ehl = 1));
            f = e.pts[e.pts.length - 1];
            e.wehang = Math.atan2(e.yy + e.fy - f.yy - f.fy + f.eby * (1 - e.ehl), e.xx + e.fx - f.xx - f.fx + f.ebx * (1 - e.ehl));
            e.dead || e.ehang == e.wehang || (h = (e.wehang - e.ehang) % pi2,
                0 > h &&
                (h += pi2),
                h > Math.PI && (h -= pi2),
                0 > h ? e.edir = 1 : 0 < h && (e.edir = 2));
            if (1 == e.edir) {
                e.ehang -= .1 * vfr;
                if (0 > e.ehang || e.ehang >= pi2)
                    e.ehang %= pi2;
                0 > e.ehang && (e.ehang += pi2);
                h = (e.wehang - e.ehang) % pi2;
                0 > h && (h += pi2);
                h > Math.PI && (h -= pi2);
                0 < h && (e.ehang = e.wehang,
                    e.edir = 0)
            } else if (2 == e.edir) {
                e.ehang += .1 * vfr;
                if (0 > e.ehang || e.ehang >= pi2)
                    e.ehang %= pi2;
                0 > e.ehang && (e.ehang += pi2);
                h = (e.wehang - e.ehang) % pi2;
                0 > h && (h += pi2);
                h > Math.PI && (h -= pi2);
                0 > h && (e.ehang = e.wehang,
                    e.edir = 0)
            }
            e.dead || (e.xx += Math.cos(e.ang) * c,
                e.yy += Math.sin(e.ang) * c,
                e.chl +=
                c / e.msl);
            if (0 < vfrb) {
                for (x = e.pts.length - 1; 0 <= x; x--)
                    f = e.pts[x],
                f.dying && (f.da += .0015 * vfrb,
                    1 < f.da && (e.pts.splice(x, 1),
                        f.dying = !1,
                        points_dp.add(f)));
                for (x = e.pts.length - 1; 0 <= x; x--)
                    if (f = e.pts[x],
                        0 < f.eiu) {
                        fy = fx = 0;
                        for (qq = cm1 = f.eiu - 1; 0 <= qq; qq--)
                            f.efs[qq] = 2 == f.ems[qq] ? f.efs[qq] + vfrb2 : f.efs[qq] + vfrb,
                        h = f.efs[qq],
                        h >= hfc ? (qq != cm1 && (f.exs[qq] = f.exs[cm1],
                                f.eys[qq] = f.eys[cm1],
                                f.efs[qq] = f.efs[cm1],
                                f.ems[qq] = f.ems[cm1]),
                            f.eiu--,
                            cm1--) : (fx += f.exs[qq] * hfas[h],
                            fy += f.eys[qq] * hfas[h]);
                        f.fx = fx;
                        f.fy = fy
                    }
            }
            c = Math.cos(e.eang) *
                e.pma;
            h = Math.sin(e.eang) * e.pma;
            e.rex < c && (e.rex += vfr / 6,
                e.rex >= c && (e.rex = c));
            e.rey < h && (e.rey += vfr / 6,
                e.rey >= h && (e.rey = h));
            e.rex > c && (e.rex -= vfr / 6,
                e.rex <= c && (e.rex = c));
            e.rey > h && (e.rey -= vfr / 6,
                e.rey <= h && (e.rey = h));
            if (0 < vfrb) {
                if (0 < e.ftg)
                    for (h = vfrb,
                        h > e.ftg && (h = e.ftg),
                        e.ftg -= h,
                        qq = 0; qq < h; qq++)
                        e.fx = e.fxs[e.fpos],
                e.fy = e.fys[e.fpos],
                e.fchl = e.fchls[e.fpos],
                e.fxs[e.fpos] = 0,
                e.fys[e.fpos] = 0,
                e.fchls[e.fpos] = 0,
                e.fpos++,
                e.fpos >= rfc && (e.fpos = 0);
                else
                    0 == e.ftg && (e.ftg = -1,
                        e.fx = 0,
                        e.fy = 0,
                        e.fchl = 0);
                if (0 < e.fatg)
                    for (h = vfrb,
                        h >
                        e.fatg && (h = e.fatg),
                        e.fatg -= h,
                        qq = 0; qq < h; qq++)
                        e.fa = e.fas[e.fapos],
                e.fas[e.fapos] = 0,
                e.fapos++,
                e.fapos >= afc && (e.fapos = 0);
                else
                    0 == e.fatg && (e.fatg = -1,
                        e.fa = 0)
            }
            e.dead ? (e.dead_amt += .02 * vfr,
                1 <= e.dead_amt && snakes.splice(q, 1)) : 1 != e.alive_amt && (e.alive_amt += .015 * vfr,
                1 <= e.alive_amt && (e.alive_amt = 1))
        }
    for (q = preys.length - 1; 0 <= q; q--) {
        x = preys[q];
        f = mamu2 * vfr;
        c = x.sp * vfr / 4;
        if (0 < vfrb)
            if (0 < x.ftg)
                for (h = vfrb,
                    h > x.ftg && (h = x.ftg),
                    x.ftg -= h,
                    qq = 1; qq <= h; qq++)
                    qq == h && (x.fx = x.fxs[x.fpos],
                        x.fy = x.fys[x.fpos]),
        x.fxs[x.fpos] = 0,
        x.fys[x.fpos] =
            0,
        x.fpos++,
        x.fpos >= rfc && (x.fpos = 0);
        else
            0 == x.ftg && (x.fx = 0,
                x.fy = 0,
                x.ftg = -1);
        if (1 == x.dir) {
            x.ang -= f;
            if (0 > x.ang || x.ang >= pi2)
                x.ang %= pi2;
            0 > x.ang && (x.ang += pi2);
            h = (x.wang - x.ang) % pi2;
            0 > h && (h += pi2);
            h > Math.PI && (h -= pi2);
            0 < h && (x.ang = x.wang,
                x.dir = 0)
        } else if (2 == x.dir) {
            x.ang += f;
            if (0 > x.ang || x.ang >= pi2)
                x.ang %= pi2;
            0 > x.ang && (x.ang += pi2);
            h = (x.wang - x.ang) % pi2;
            0 > h && (h += pi2);
            h > Math.PI && (h -= pi2);
            0 > h && (x.ang = x.wang,
                x.dir = 0)
        } else
            x.ang = x.wang;
        x.xx += Math.cos(x.ang) * c;
        x.yy += Math.sin(x.ang) * c;
        x.gfr += vfr * x.gr;
        x.eaten ? (1.5 != x.fr &&
            (x.fr += vfr / 150,
                1.5 <= x.fr && (x.fr = 1.5)),
            x.eaten_fr += vfr / 47,
            x.gfr += vfr,
            e = x.eaten_by,
            1 <= x.eaten_fr || !e ? preys.splice(q, 1) : x.rad = 1 - Math.pow(x.eaten_fr, 3)) : 1 != x.fr && (x.fr += vfr / 150,
            1 <= x.fr ? (x.fr = 1,
                x.rad = 1) : (x.rad = .5 * (1 - Math.cos(Math.PI * x.fr)),
                x.rad += .66 * (.5 * (1 - Math.cos(Math.PI * x.rad)) - x.rad)))
    }
    for (q = cm1 = foods_c - 1; 0 <= q; q--)
        c = foods[q],
    c.gfr += vfr * c.gr,
    c.eaten ? (c.eaten_fr += vfr / 41,
        e = c.eaten_by,
        1 <= c.eaten_fr || !e ? (q == cm1 ? foods[q] = null : (foods[q] = foods[cm1],
                foods[cm1] = null),
            foods_c--,
            cm1--) : (e = c.eaten_by,
            h = c.eaten_fr *
            c.eaten_fr,
            c.rad = c.lrrad * (1 - c.eaten_fr * h),
            c.rx = c.xx + (e.xx + e.fx + Math.cos(e.ang + e.fa) * (43 - 24 * h) * (1 - h) - c.xx) * h,
            c.ry = c.yy + (e.yy + e.fy + Math.sin(e.ang + e.fa) * (43 - 24 * h) * (1 - h) - c.yy) * h,
            c.rx += 6 * Math.cos(c.wsp * c.gfr) * (1 - c.eaten_fr),
            c.ry += 6 * Math.sin(c.wsp * c.gfr) * (1 - c.eaten_fr))) : (1 != c.fr && (c.fr += c.rsp * vfr / 150,
            1 <= c.fr ? (c.fr = 1,
                c.rad = 1) : (c.rad = .5 * (1 - Math.cos(Math.PI * c.fr)),
                c.rad += .66 * (.5 * (1 - Math.cos(Math.PI * c.rad)) - c.rad)),
            c.lrrad = c.rad),
        c.rx = c.xx,
        c.ry = c.yy,
        c.rx = c.xx + 6 * Math.cos(c.wsp * c.gfr),
        c.ry = c.yy + 6 * Math.sin(c.wsp *
            c.gfr));
    vfrb = vfr = 0;
    // redraw();
    no_raf || raf(oef)
}

setInterval(oef, 33)


function connect() {
    if (0 == sos.length)
        waiting_for_sos || (waiting_for_sos = !0,
            sos_ready_after_mtm = -1);
    else {
        waiting_for_sos = !1;
        sos_ready_after_mtm = -1;
        resetGame();
        connecting = !0;
        start_connect_mtm = Date.now();
        if (!forcing) {
            for (var c = 0; c < sos.length; c++)
                sos[c].ptm = 9999999;
            for (c = clus.length - 1; 0 <= c; c--) {
                var f = clus[c];
                if (f && 0 < f.ptms.length) {
                    for (var b = 0, h = f.ptms.length - 1; 0 <= h; h--)
                        b += f.ptms[h];
                    b /= f.ptms.length;
                    testing && console.log("cluster " + c + " ping time: " + b);
                    for (h = sos.length - 1; 0 <= h; h--)
                        sos[h].clu == c && (sos[h].ptm =
                            b)
                }
            }
            if ("undefined" != typeof rmsos)
                for (c = 0; c < rmsos.length; c++)
                    for (f = "." + rmsos[c].a[0] + "." + rmsos[c].a[1] + "." + rmsos[c].a[2],
                        b = rmsos[c].a[3],
                        h = sos.length - 1; 0 <= h; h--)
                        0 <= sos[h].ip.indexOf(f) && sos[h].po == b && sos.splice(h, 1);
            sos.sort(function(c, b) {
                return parseFloat(c.po) - parseFloat(b.po)
            });
            bso = sos[Math.floor(Math.random() * sos.length)];
            for (c = sos.length - 1; 0 <= c; c--)
                sos[c].tainted || sos[c].ptm <= bso.ptm && 30 < sos[c].ac && (bso = sos[c])
        }
        ws = new WebSocket("ws://" + bso.ip + ":" + bso.po + "/slither");
        console.log("ws://" + bso.ip + ":" + bso.po + "/slither")
        ws.binaryType = "arraybuffer";
        global.ws = ws;
        ws.onmessage = function(c) {
            console.log('caca123');
            if (ws == this && (c = new Uint8Array(c.data),
                rdps += c.length,
                2 <= c.length)) {
                lptm = cptm;
                cptm = Date.now();
                var b = c[0] << 8 | c[1],
                    e = cptm - lptm;
                0 == lptm && (e = 0);
                etm += e - b;
                testing && (rdpspc[c[2]] += c.length);
                var h = String.fromCharCode(c[2]),
                    b = 3,
                    f = c.length,
                    e = c.length - 2,
                    t = c.length - 3;
                if ("a" == h)
                    console.log('caca'),
                connecting = !1,
                playing = connected = !0,
                play_btn_click_mtm = -1,
                grd = c[b] << 16 | c[b + 1] << 8 | c[b + 2],
                b += 3,
                e = c[b] << 8 | c[b + 1],
                b += 2,
                sector_size = c[b] << 8 | c[b + 1],
                b += 2,
                sector_count_along_edge = c[b] << 8 | c[b + 1],
                b += 2,
                spangdv =
                    c[b] / 10,
                b++,
                nsp1 = (c[b] << 8 | c[b + 1]) / 100,
                b += 2,
                nsp2 = (c[b] << 8 | c[b + 1]) / 100,
                b += 2,
                nsp3 = (c[b] << 8 | c[b + 1]) / 100,
                b += 2,
                mamu = (c[b] << 8 | c[b + 1]) / 1E3,
                b += 2,
                mamu2 = (c[b] << 8 | c[b + 1]) / 1E3,
                b += 2,
                cst = (c[b] << 8 | c[b + 1]) / 1E3,
                b += 2,
                b < f && (protocol_version = c[b]),
                setMscps(e),
                lbh.style.display = "inline",
                lbs.style.display = "inline",
                lbn.style.display = "inline",
                lbp.style.display = "inline",
                lbf.style.display = "inline",
                vcm.style.display = "inline",
                loch.style.display = "inline",
                startShowGame();
                else if ("e" == h || "E" == h || "3" == h || "4" == h || "5" == h) {
                    var w = c[b] <<
                        8 | c[b + 1],
                        b = b + 2,
                        z = -1,
                        E = -1,
                        u = -1,
                        A = -1;
                    if (6 <= protocol_version)
                        6 == e ? (z = "e" == h ? 1 : 2,
                            E = 2 * c[b] * Math.PI / 256,
                            b++,
                            u = 2 * c[b] * Math.PI / 256,
                            b++,
                            A = c[b] / 18) : 5 == e ? "e" == h ? (E = 2 * c[b] * Math.PI / 256,
                            b++,
                            A = c[b] / 18) : "E" == h ? (z = 1,
                            u = 2 * c[b] * Math.PI / 256,
                            b++,
                            A = c[b] / 18) : "4" == h ? (z = 2,
                            u = 2 * c[b] * Math.PI / 256,
                            b++,
                            A = c[b] / 18) : "3" == h ? (z = 1,
                            E = 2 * c[b] * Math.PI / 256,
                            b++,
                            u = 2 * c[b] * Math.PI / 256) : "5" == h && (z = 2,
                            E = 2 * c[b] * Math.PI / 256,
                            b++,
                            u = 2 * c[b] * Math.PI / 256) : 4 == e && ("e" == h ? E = 2 * c[b] * Math.PI / 256 : "E" == h ? (z = 1,
                                u = 2 * c[b] * Math.PI / 256) : "4" == h ? (z = 2,
                                u = 2 * c[b] * Math.PI / 256) :
                            "3" == h && (A = c[b] / 18));
                    else if (3 <= protocol_version) {
                        "3" != h && (8 == e || 7 == e || 6 == e && "3" != h || 5 == e && "3" != h) && (z = "e" == h ? 1 : 2);
                        if (8 == e || 7 == e || 5 == e && "3" == h || 6 == e && "3" == h)
                            E = 2 * (c[b] << 8 | c[b + 1]) * Math.PI / 65535,
                        b += 2;
                        if (8 == e || 7 == e || 5 == e && "3" != h || 6 == e && "3" != h)
                            u = 2 * (c[b] << 8 | c[b + 1]) * Math.PI / 65535,
                        b += 2;
                        if (8 == e || 6 == e || 4 == e)
                            A = c[b] / 18
                    } else {
                        if (11 == t || 8 == t || 9 == t || 6 == t)
                            z = c[b] - 48,
                        b++;
                        if (11 == t || 7 == t || 9 == t || 5 == t)
                            E = 2 * (c[b] << 16 | c[b + 1] << 8 | c[b + 2]) * Math.PI / 16777215,
                        b += 3;
                        if (11 == t || 8 == t || 9 == t || 6 == t)
                            u = 2 * (c[b] << 16 | c[b + 1] << 8 | c[b + 2]) * Math.PI /
                                16777215,
                        b += 3;
                        if (11 == t || 7 == t || 8 == t || 4 == t)
                            A = (c[b] << 8 | c[b + 1]) / 1E3
                    }
                    if (f = os["s" + w]) {
                        -1 != z && (f.dir = z);
                        anguc++;
                        if (-1 != E) {
                            f.ang == E && angnuc++;
                            c = (E - f.ang) % pi2;
                            0 > c && (c += pi2);
                            c > Math.PI && (c -= pi2);
                            w = f.fapos;
                            for (t = 0; t < afc; t++)
                                f.fas[w] -= c * afas[t],
                            w++,
                            w >= afc && (w = 0);
                            f.fatg = afc;
                            f.ang = E
                        } -
                            1 != u && (f.wang == u && wangnuc++,
                                f.wang = u,
                                f != snake && (f.eang = u)); -
                            1 != A && (f.sp = A,
                                f.spang = f.sp / spangdv,
                                1 < f.spang && (f.spang = 1))
                    }
                } else if ("h" == h) {
                    var w = c[b] << 8 | c[b + 1],
                        b = b + 2,
                        B = (c[b] << 16 | c[b + 1] << 8 | c[b + 2]) / 16777215;
                    if (f = os["s" + w])
                        f.fam = B,
                    snl(f)
                } else if ("r" ==
                    h) {
                    if (w = c[b] << 8 | c[b + 1],
                        b += 2,
                        f = os["s" + w]) {
                        4 <= t && (f.fam = (c[b] << 16 | c[b + 1] << 8 | c[b + 2]) / 16777215);
                        for (t = 0; t < f.pts.length; t++)
                            if (!f.pts[t].dying) {
                                f.pts[t].dying = !0;
                                f.sct--;
                                f.sc = Math.min(6, 1 + (f.sct - 2) / 106);
                                f.scang = .13 + .87 * Math.pow((7 - f.sc) / 6, 2);
                                f.ssp = nsp1 + nsp2 * f.sc;
                                f.fsp = f.ssp + .1;
                                f.wsep = 6 * f.sc;
                                c = nsep / gsc;
                                f.wsep < c && (f.wsep = c);
                                break
                            }
                        snl(f)
                    }
                } else if ("g" == h || "n" == h || "G" == h || "N" == h) {
                    if (playing && (B = "n" == h || "N" == h,
                        w = c[b] << 8 | c[b + 1],
                        b += 2,
                        f = os["s" + w])) {
                        if (B)
                            f.sct++;
                        else
                            for (t = 0; t < f.pts.length; t++)
                                if (!f.pts[t].dying) {
                                    f.pts[t].dying = !0;
                                    break
                                }
                        var t = z = f.pts[f.pts.length - 1],
                            D = !1;
                        3 <= protocol_version ? "g" == h || "n" == h ? (e = c[b] << 8 | c[b + 1],
                            b += 2,
                            C = c[b] << 8 | c[b + 1],
                            b += 2) : (e = t.xx + c[b] - 128,
                            b++,
                            C = t.yy + c[b] - 128,
                            b++) : (e = (c[b] << 16 | c[b + 1] << 8 | c[b + 2]) / 5,
                            b += 3,
                            C = (c[b] << 16 | c[b + 1] << 8 | c[b + 2]) / 5,
                            b += 3);
                        B && (f.fam = (c[b] << 16 | c[b + 1] << 8 | c[b + 2]) / 16777215);
                        (z = points_dp.get()) || (z = {
                            exs: [],
                            eys: [],
                            efs: [],
                            ems: []
                        });
                        z.eiu = 0;
                        z.xx = e;
                        z.yy = C;
                        z.fx = 0;
                        z.fy = 0;
                        z.da = 0;
                        z.ebx = z.xx - t.xx;
                        z.eby = z.yy - t.yy;
                        f.pts.push(z);
                        D = !0;
                        f.iiv && (c = f.xx + f.fx - z.xx,
                            b = f.yy + f.fy - z.yy,
                            z.fx += c,
                            z.fy += b,
                            z.exs[z.eiu] =
                            c,
                            z.eys[z.eiu] = b,
                            z.efs[z.eiu] = 0,
                            z.ems[z.eiu] = 1,
                            z.eiu++);
                        w = f.pts.length - 3;
                        if (1 <= w)
                            for (E = f.pts[w],
                                h = n = 0,
                                t = w - 1; 0 <= t; t--)
                                w = f.pts[t],
                        n++,
                        c = w.xx,
                        b = w.yy,
                        4 >= n && (h = cst * n / 4),
                        w.xx += (E.xx - w.xx) * h,
                        w.yy += (E.yy - w.yy) * h,
                        f.iiv && (c -= w.xx,
                            b -= w.yy,
                            w.fx += c,
                            w.fy += b,
                            w.exs[w.eiu] = c,
                            w.eys[w.eiu] = b,
                            w.efs[w.eiu] = 0,
                            w.ems[w.eiu] = 2,
                            w.eiu++),
                        E = w;
                        f.sc = Math.min(6, 1 + (f.sct - 2) / 106);
                        f.scang = .13 + .87 * Math.pow((7 - f.sc) / 6, 2);
                        f.ssp = nsp1 + nsp2 * f.sc;
                        f.fsp = f.ssp + .1;
                        f.wsep = 6 * f.sc;
                        c = nsep / gsc;
                        f.wsep < c && (f.wsep = c);
                        B && snl(f);
                        f.lnp = z;
                        f == snake && (ovxx =
                            snake.xx + snake.fx,
                            ovyy = snake.yy + snake.fy);
                        z = etm / 8 * f.sp / 4;
                        z *= lag_mult;
                        t = f.chl - 1;
                        f.chl = z / f.msl;
                        h = f.xx;
                        w = f.yy;
                        f.xx = e + Math.cos(f.ang) * z;
                        f.yy = C + Math.sin(f.ang) * z;
                        c = f.xx - h;
                        b = f.yy - w;
                        e = f.chl - t;
                        w = f.fpos;
                        for (t = 0; t < rfc; t++)
                            f.fxs[w] -= c * rfas[t],
                        f.fys[w] -= b * rfas[t],
                        f.fchls[w] -= e * rfas[t],
                        w++,
                        w >= rfc && (w = 0);
                        f.fx = f.fxs[f.fpos];
                        f.fy = f.fys[f.fpos];
                        f.fchl = f.fchls[f.fpos];
                        f.ftg = rfc;
                        D && (f.ehl = 0);
                        if (f == snake) {
                            view_xx = snake.xx + snake.fx;
                            view_yy = snake.yy + snake.fy;
                            c = view_xx - ovxx;
                            b = view_yy - ovyy;
                            w = fvpos;
                            for (t = 0; t < vfc; t++)
                                fvxs[w] -=
                                    c * vfas[t],
                            fvys[w] -= b * vfas[t],
                            w++,
                            w >= vfc && (w = 0);
                            fvtg = vfc
                        }
                    }
                } else if ("l" == h) {
                    if (playing) {
                        wumsts = !0;
                        E = z = C = "";
                        A = u = 0; -
                            1 == lb_fr && -1 == dead_mtm && (lb_fr = 0);
                        var L = c[b];
                        b++;
                        rank = c[b] << 8 | c[b + 1];
                        rank < best_rank && (best_rank = rank);
                        b += 2;
                        snake_count = c[b] << 8 | c[b + 1];
                        snake_count > biggest_snake_count && (biggest_snake_count = snake_count);
                        for (b += 2; b < f;) {
                            var H = c[b] << 8 | c[b + 1],
                                b = b + 2,
                                B = (c[b] << 16 | c[b + 1] << 8 | c[b + 2]) / 16777215,
                                b = b + 3,
                                D = c[b] % 9;
                            b++;
                            e = c[b];
                            b++;
                            A++;
                            h = "";
                            for (t = 0; t < e; t++)
                                w = c[b],
                            h += String.fromCharCode(w),
                            b++;
                            A != L && (gdnm(h) ||
                                (h = ""));
                            for (var K = "", t = 0; t < e; t++)
                                w = h.charCodeAt(t),
                            K = 38 == w ? K + "&amp;" : 60 == w ? K + "&lt;" : 62 == w ? K + "&gt;" : 32 == w ? K + "&nbsp;" : K + String.fromCharCode(w);
                            h = K;
                            u++;
                            score = Math.floor(150 * (fpsls[H] + B / fmlts[H] - 1) - 50) / 10;
                            w = A == L ? 1 : .7 * (.3 + .7 * (1 - u / 10));
                            C += '<span style="opacity:' + w + "; color:" + per_color_imgs[D].cs + ';">' + score + "</span><BR>";
                            z += '<span style="opacity:' + w + "; color:" + per_color_imgs[D].cs + ";" + (A == L ? "font-weight:bold;" : "") + '">' + h + "</span><BR>";
                            E += '<span style="opacity:' + w + "; color:" + per_color_imgs[D].cs + ';">#' +
                                u + "</span><BR>"
                        }
                        lbs.innerHTML = C;
                        lbn.innerHTML = z;
                        lbp.innerHTML = E
                    }
                } else if ("v" == h)
                    2 == c[b] ? (want_close_socket = !0,
                        want_victory_message = !1,
                        want_hide_victory = 1,
                        hvfr = 0) : (dead_mtm = Date.now(),
                        play_btn.setEnabled(!0),
                        e = Math.floor(150 * (fpsls[snake.sct] + snake.fam / fmlts[snake.sct] - 1) - 50) / 10,
                        twt.href = "http://twitter.com/intent/tweet?status=" + encodeURIComponent("I got a length of " + e + " in http://slither.io! Can you beat that? #slitherio"),
                        C = "Your final length was",
                        "DE" == country ? C = "Deine endg\u00fcltige L\u00e4nge war" :
                        "FR" == country ? C = "Votre longueur finale \u00e9tait de" : "BR" == country && (C = "Seu comprimento final foi de"),
                        f = "",
                        1E3 < e && (f = "!"),
                        lastscore.innerHTML = '<span style="opacity: .45;">' + C + " </span><b>" + e + "</b>" + f,
                        e = "Play Again",
                        "FR" == country ? e = "Jouer" : "BR" == country && (e = "Joga"),
                        play_btn.setText(String.fromCharCode(160) + e + String.fromCharCode(160)),
                        1 == c[b] ? (nick_holder.style.display = "none",
                            playh.style.display = "none",
                            smh.style.display = "none",
                            victory_holder.style.display = "inline",
                            saveh.style.display = "block",
                            want_victory_focus =
                            want_victory_message = !0,
                            victory.disabled = !1,
                            save_btn.setEnabled(!0)) : want_close_socket = !0);
                else if ("W" == h)
                    e = c[b],
                b++,
                C = c[b],
                f = {},
                f.xx = e,
                f.yy = C,
                sectors.push(f);
                else if ("w" == h)
                    if (8 <= protocol_version ? (f = 2,
                            e = c[b],
                            b++,
                            C = c[b]) : (f = c[b],
                            b++,
                            e = c[b] << 8 | c[b + 1],
                            b += 2,
                            C = c[b] << 8 | c[b + 1]),
                        1 == f)
                        f = {},
                f.xx = e,
                f.yy = C,
                sectors.push(f);
                else {
                    for (D = cm1 = foods_c - 1; 0 <= D; D--)
                        t = foods[D],
                    t.sx == e && t.sy == C && (D == cm1 ? foods[D] = null : (foods[D] = foods[cm1],
                            foods[cm1] = null),
                        foods_c--,
                        cm1--);
                    for (D = sectors.length - 1; 0 <= D; D--)
                        f = sectors[D],
                    f.xx ==
                        e && f.yy == C && sectors.splice(D, 1)
                } else if ("m" == h) {
                    H = c[b] << 16 | c[b + 1] << 8 | c[b + 2];
                    b += 3;
                    B = (c[b] << 16 | c[b + 1] << 8 | c[b + 2]) / 16777215;
                    b += 3;
                    C = Math.floor(150 * (fpsls[H] + B / fmlts[H] - 1) - 50) / 10;
                    e = c[b];
                    b++;
                    t = "";
                    for (D = 0; D < e; D++)
                        t += String.fromCharCode(c[b]),
                    b++;
                    for (e = ""; b < f;)
                        e += String.fromCharCode(c[b]),
                    b++;
                    t = t.split("&").join("&amp;").split("<").join("&lt;").split(">").join("&gt;");
                    e = e.split("&").join("&amp;").split("<").join("&lt;").split(">").join("&gt;");
                    0 < C && (c = "",
                        0 < e.length && (c += "<span style='font-size:17px;'><b><i><span style='opacity: .5;'>&quot;</span>" +
                            e + "<span style='opacity: .5;'>&quot;</span></i></b></span><BR><div style='height: 5px;'></div>"),
                        0 < t.length ? (c = 0 < e.length ? c + ("<i><span style='opacity: .5;'>- </span><span style='opacity: .75;'><b>" + t + "</b></span><span style='opacity: .5;'>, today's longest</span></i>") : "<i><span style='opacity: .5;'>Today's longest was </span><span style='opacity: .75;'><b>" + t + "</b></span></i>",
                            c += "<br><i><span style='opacity: .5;'>with a length of </span><span style='opacity: .65;'><b>" + C + "</b></span></i>") : c = 0 <
                        e.length ? c + "<i><span style='opacity: .5;'>- </span><span style='opacity: .5;'>today's longest</span></i>" + ("<br><i><span style='opacity: .5;'>with a length of </span><span style='opacity: .65;'><b>" + C + "</b></span></i>") : c + ("<i><span style='opacity: .5;'>Today's longest: </span><span style='opacity: .75;'><b>" + C + "</b></span></i>"),
                        vcm.innerHTML = c)
                } else if ("p" == h)
                    wfpr = !1,
                lagging && (etm *= lag_mult,
                    lagging = !1);
                else if ("u" == h) {
                    t = asmc.getContext("2d");
                    t.clearRect(0, 0, 80, 80);
                    t.fillStyle = "#FFFFFF";
                    for (var C =
                        e = 0; b < f && !(80 <= C);)
                        if (w = c[b++],
                            128 <= w)
                            for (w -= 128,
                                D = 0; D < w && !(e++,
                                    80 <= e && (e = 0,
                                        C++,
                                        80 <= C)); D++)
                        ;
                        else
                            for (D = 0; 7 > D && !(0 < (w & u_m[D]) && t.fillRect(e, C, 1, 1),
                                e++,
                                80 <= e && (e = 0,
                                    C++,
                                    80 <= C)); D++)
                        ;
                } else if ("s" == h) {
                    if (playing)
                        if (w = c[b] << 8 | c[b + 1],
                            b += 2,
                            6 < t) {
                            E = 2 * (c[b] << 16 | c[b + 1] << 8 | c[b + 2]) * Math.PI / 16777215;
                            b += 3;
                            b++;
                            u = 2 * (c[b] << 16 | c[b + 1] << 8 | c[b + 2]) * Math.PI / 16777215;
                            b += 3;
                            A = (c[b] << 8 | c[b + 1]) / 1E3;
                            b += 2;
                            B = (c[b] << 16 | c[b + 1] << 8 | c[b + 2]) / 16777215;
                            b += 3;
                            D = c[b];
                            b++;
                            L = [];
                            H = (c[b] << 16 | c[b + 1] << 8 | c[b + 2]) / 5;
                            b += 3;
                            K = (c[b] << 16 | c[b + 1] << 8 | c[b +
                                2]) / 5;
                            b += 3;
                            e = c[b];
                            b++;
                            h = "";
                            for (t = 0; t < e; t++)
                                h += String.fromCharCode(c[b]),
                            b++;
                            for (var J = t = C = e = 0, N = !1; b < f;)
                                t = e,
                            J = C,
                            N ? (e += (c[b] - 127) / 2,
                                b++,
                                C += (c[b] - 127) / 2,
                                b++) : (e = (c[b] << 16 | c[b + 1] << 8 | c[b + 2]) / 5,
                                b += 3,
                                C = (c[b] << 16 | c[b + 1] << 8 | c[b + 2]) / 5,
                                b += 3,
                                t = e,
                                J = C,
                                N = !0), (z = points_dp.get()) || (z = {
                                exs: [],
                                eys: [],
                                efs: [],
                                ems: []
                            }),
                            z.eiu = 0,
                            z.xx = e,
                            z.yy = C,
                            z.fx = 0,
                            z.fy = 0,
                            z.da = 0,
                            z.ebx = e - t,
                            z.eby = C - J,
                            L.push(z);
                            f = newSnake(w, H, K, D, E, L);
                            null == snake ? (view_xx = e,
                                view_yy = C,
                                snake = f,
                                snake.md = !1,
                                snake.wmd = !1,
                                f.nk = my_nick) : (f.nk = h,
                                gdnm(h) || (f.nk = ""));
                            f.eang = f.wang = u;
                            f.sp = A;
                            f.spang = f.sp / spangdv;
                            1 < f.spang && (f.spang = 1);
                            f.fam = B;
                            f.sc = Math.min(6, 1 + (f.sct - 2) / 106);
                            f.scang = .13 + .87 * Math.pow((7 - f.sc) / 6, 2);
                            f.ssp = nsp1 + nsp2 * f.sc;
                            f.fsp = f.ssp + .1;
                            f.wsep = 6 * f.sc;
                            c = nsep / gsc;
                            f.wsep < c && (f.wsep = c);
                            f.sep = f.wsep;
                            snl(f)
                        } else
                            for (c = 1 == c[b],
                                D = snakes.length - 1; 0 <= D; D--)
                                if (snakes[D].id == w) {
                                    snakes[D].id = -1234;
                                    c ? (snakes[D].dead = !0,
                                        snakes[D].dead_amt = 0,
                                        snakes[D].edir = 0) : snakes.splice(D, 1);
                                    delete os["s" + w];
                                    break
                                }
                } else if ("F" == h)
                    if (4 <= protocol_version)
                        for (h = !1; b < f;)
                            D = c[b],
                b++,
                e =
                    c[b] << 8 | c[b + 1],
                b += 2,
                C = c[b] << 8 | c[b + 1],
                b += 2,
                t = c[b] / 5,
                b++,
                w = C * grd * 3 + e,
                t = newFood(w, e, C, t, !0, D),
                h || (h = !0,
                    z = Math.floor(e / sector_size),
                    B = Math.floor(C / sector_size)),
                t.sx = z,
                t.sy = B;
                else
                    for (z = c[b] << 8 | c[b + 1],
                        b += 2,
                        B = c[b] << 8 | c[b + 1],
                        b += 2; b < f;)
                        w = c[b] << 16 | c[b + 1] << 8 | c[b + 2],
                b += 3,
                D = c[b],
                b++,
                e = sector_size * (z + c[b] / 255),
                b++,
                C = sector_size * (B + c[b] / 255),
                b++,
                t = c[b] / 5,
                b++,
                t = newFood(w, e, C, t, !0, D),
                t.sx = z,
                t.sy = B;
                else if ("b" == h || "f" == h)
                    4 <= protocol_version ? (D = c[b],
                        b++,
                        4 < t && (e = c[b] << 8 | c[b + 1],
                            b += 2,
                            C = c[b] << 8 | c[b + 1],
                            w = C * grd * 3 + e,
                            t = c[b +
                                2] / 5,
                            t = newFood(w, e, C, t, "b" == h, D),
                            t.sx = Math.floor(e / sector_size),
                            t.sy = Math.floor(C / sector_size))) : (w = c[b] << 16 | c[b + 1] << 8 | c[b + 2],
                        b += 3,
                        4 < t && (D = c[b],
                            b++,
                            z = c[b] << 8 | c[b + 1],
                            b += 2,
                            B = c[b] << 8 | c[b + 1],
                            b += 2,
                            e = sector_size * (z + c[b] / 255),
                            b++,
                            C = sector_size * (B + c[b] / 255),
                            b++,
                            t = c[b] / 5,
                            t = newFood(w, e, C, t, "b" == h, D),
                            t.sx = z,
                            t.sy = B));
                else if ("c" == h) {
                    4 <= protocol_version ? (e = c[b] << 8 | c[b + 1],
                        b += 2,
                        C = c[b] << 8 | c[b + 1],
                        b += 2,
                        w = C * grd * 3 + e) : (w = c[b] << 16 | c[b + 1] << 8 | c[b + 2],
                        b += 3);
                    for (D = cm1 = foods_c - 1; 0 <= D; D--)
                        if (t = foods[D],
                            t.id == w) {
                            t.eaten = !0;
                            b +
                                2 <= f ? (c = c[b] << 8 | c[b + 1],
                                    t.eaten_by = os["s" + c],
                                    t.eaten_fr = 0) : (D == cm1 ? foods[D] = null : (foods[D] = foods[cm1],
                                        foods[cm1] = null),
                                    foods_c--,
                                    cm1--);
                            w = -1;
                            break
                        } -
                        1 != w && console.log("wtf")
                } else if ("j" == h) {
                    w = c[b] << 8 | c[b + 1];
                    b += 2;
                    e = 1 + 3 * (c[b] << 8 | c[b + 1]);
                    b += 2;
                    C = 1 + 3 * (c[b] << 8 | c[b + 1]);
                    b += 2;
                    f = null;
                    for (D = preys.length - 1; 0 <= D; D--)
                        if (preys[D].id == w) {
                            f = preys[D];
                            break
                        }
                    if (f) {
                        z = etm / 8 * f.sp / 4;
                        z *= lag_mult;
                        h = f.xx;
                        w = f.yy;
                        15 == t ? (f.dir = c[b] - 48,
                            b++,
                            f.ang = 2 * (c[b] << 16 | c[b + 1] << 8 | c[b + 2]) * Math.PI / 16777215,
                            b += 3,
                            f.wang = 2 * (c[b] << 16 | c[b + 1] << 8 | c[b +
                                2]) * Math.PI / 16777215,
                            b += 3,
                            f.sp = (c[b] << 8 | c[b + 1]) / 1E3) : 11 == t ? (f.ang = 2 * (c[b] << 16 | c[b + 1] << 8 | c[b + 2]) * Math.PI / 16777215,
                            b += 3,
                            f.sp = (c[b] << 8 | c[b + 1]) / 1E3) : 12 == t ? (f.dir = c[b] - 48,
                            b++,
                            f.wang = 2 * (c[b] << 16 | c[b + 1] << 8 | c[b + 2]) * Math.PI / 16777215,
                            b += 3,
                            f.sp = (c[b] << 8 | c[b + 1]) / 1E3) : 13 == t ? (f.dir = c[b] - 48,
                            b++,
                            f.ang = 2 * (c[b] << 16 | c[b + 1] << 8 | c[b + 2]) * Math.PI / 16777215,
                            b += 3,
                            f.wang = 2 * (c[b] << 16 | c[b + 1] << 8 | c[b + 2]) * Math.PI / 16777215) : 9 == t ? f.ang = 2 * (c[b] << 16 | c[b + 1] << 8 | c[b + 2]) * Math.PI / 16777215 : 10 == t ? (f.dir = c[b] - 48,
                            b++,
                            f.wang = 2 * (c[b] << 16 | c[b + 1] <<
                                8 | c[b + 2]) * Math.PI / 16777215) : 8 == t && (f.sp = (c[b] << 8 | c[b + 1]) / 1E3);
                        f.xx = e + Math.cos(f.ang) * z;
                        f.yy = C + Math.sin(f.ang) * z;
                        c = f.xx - h;
                        b = f.yy - w;
                        w = f.fpos;
                        for (t = 0; t < rfc; t++)
                            f.fxs[w] -= c * rfas[t],
                        f.fys[w] -= b * rfas[t],
                        w++,
                        w >= rfc && (w = 0);
                        f.fx = f.fxs[f.fpos];
                        f.fy = f.fys[f.fpos];
                        f.ftg = rfc
                    }
                } else if ("y" == h)
                    if (w = c[b] << 8 | c[b + 1],
                        b += 2,
                        2 == t)
                        for (D = preys.length - 1; 0 <= D; D--) {
                            if (f = preys[D],
                                f.id == w) {
                                preys.splice(D, 1);
                                break
                            }
                        } else
                if (4 == t)
                    for (c = c[b] << 8 | c[b + 1],
                        D = preys.length - 1; 0 <= D; D--) {
                        if (f = preys[D],
                            f.id == w) {
                            f.eaten = !0;
                            f.eaten_by = os["s" +
                                c];
                            f.eaten_by ? f.eaten_fr = 0 : preys.splice(D, 1);
                            break
                        }
                    } else
                    D = c[b],
                b++,
                e = (c[b] << 16 | c[b + 1] << 8 | c[b + 2]) / 5,
                b += 3,
                C = (c[b] << 16 | c[b + 1] << 8 | c[b + 2]) / 5,
                b += 3,
                t = c[b] / 5,
                b++,
                z = c[b] - 48,
                b++,
                u = 2 * (c[b] << 16 | c[b + 1] << 8 | c[b + 2]) * Math.PI / 16777215,
                b += 3,
                E = 2 * (c[b] << 16 | c[b + 1] << 8 | c[b + 2]) * Math.PI / 16777215,
                b += 3,
                A = (c[b] << 8 | c[b + 1]) / 1E3,
                newPrey(w, e, C, t, D, z, u, E, A)
            }
        };
        ws.onerror = function(b) {};
        ws.onclose = function(b) {
            ws == this && (playing = connected = !1)
        };
        ws.onopen = function(b) {
            console.log('1231');
            if (ws == this) {
                b = asciize(nick.value);
                24 < b.length && (b = b.substr(0, 24));
                my_nick =
                    b;
                gdnm(b) || (b = "");
                var c = Math.floor(9 * Math.random());
                try {
                    var e = localStorage.snakercv;
                    e == "" + Number(e) && (c = Number(e))
                } catch (f) {}
                e = new Uint8Array(3 + b.length);
                e[0] = 115;
                e[1] = 7;
                e[2] = c;
                for (c = 0; c < b.length; c++)
                    e[c + 3] = b.charCodeAt(c);
                ws.send(e);
                high_quality = !0;
                gla = 1;
                wdfg = 0;
                qsm = 1;
                0 == want_quality && (high_quality = !1,
                    gla = 0,
                    qsm = 1.7);
                1 == render_mode && (high_quality = !1,
                    gla = 0);
                lpstm = Date.now()
            }
        }
        ws.on("message", ws.onmessage);
        ws.on("error", ws.onerror);
        ws.on("close", ws.onclose);
        ws.on("connect", ws.onopen)
    }
}

function asciize(c) {
    var f, b, h;
    b = c.length;
    var x = !1;
    for (f = 0; f < b; f++)
        if (h = c.charCodeAt(f),
            32 > h || 127 < h) {
            x = !0;
            break
        }
    if (x) {
        x = "";
        for (f = 0; f < b; f++)
            h = c.charCodeAt(f),
        x = 32 > h || 127 < h ? x + " " : x + String.fromCharCode(h);
        return x
    }
    return c
}

loadSos("amopagyfhelsatyubiphgkajfmcepuecjqypzszgnghirhdkacnscahowpuqxeldlgpfbiyalqayfmultovcjbmendzgwyjoywdksjqmtahodcldcsaebpnubiqhokryfmdajbaqycznlszgohmipwdwryhzyowaxljqxemdlgnubuywfxwmuyvjhovckblelszrqudtpwmldkhmtaibgcjqxposbrnukjbifkrygxhahovpmqzplsimsbeipwevfyfmtnsoxnjqgkqzcgnucvawdkrjpmvlhoekssaelsatyubipjsktjfmciqqycjqypxszgnibirhdkaakszahowpuqxeldegpfbiyciruyfmulsovcjtzendzgwvnurwdksjrmtahawclbxeuvcgtubiqjokryfxzajzvcsyggoszgofpipwdybyhxtaqqhcqqxemdkgnubpswfvryooygnovckbjelszsnudtpwmmwelmtaizjcjqxrusbrnuknulhkrygzeahovnnqzplsiknwpipwexcyfmtlkoxnjqgkqzcgnuctbwdkrjsmvjvsaqltlelsarzubipaqkuhtqyojrjcjqypwszgnueisfiwblhwwahowpuqxeldegxfnkxckwwyfmunsovcjbaenbesxhdsawdkslqmtahzvctzcqvfbqxubiqjokryfxvarxaotdzotszgohmipwdvrypohaltiquqxemfkgnubtuwftwkpzvklovckdielszroulruinxtilmtaibgcjqxplsjpsglvrgikrygzeahovmwqhnqejtpekipwexcyfmtktoflochrncggnucvawdkrjlmdlhoedjahelsatyubipgsktjopvgpxccjqyrwszgnwkiuhmntenwxahowpuqxelvfgsfklrcluyyfmunsovcjrmeqbzkzzfmewdkslqmtahzxclbghnyhpxubiqjokryfmwamzeflwfnuszgohmipwdkcykxcdjudlpqxemfkgnubjdwivabhsbknovckdielszhnugtyzfqzhqmtaibgcjqxeysesbfqrzyqkrygzeahovnnqgqzdopxwgipwexcyfmtljoeiqflnufngnucvawdkrjfmxamoedmxxelsatyubiphikthtqyojyccjqyrwszgnfgishdkafkmaahowpuqxelddgpfbiybomzyfmunsovcjbaeneghsyqxuwdkslqmtahzxcscefqwovbubiqjokryfxtaqzvcstzsnszgohmipwdvvyhyhlwxfhuqxemfkgnubtvwmwfjuvdcsovckdielszrrukudhstbalmtaibgcjqxppsitoxltwepkrygxhahovnnqbnqvhhrclipwexcyfmtlioypkthpsangnuctdwdkrjlmxjvsaqlbeelsatyubiphgkulgpdlowwcjqyrwszgnfhitzszcmiaxahowpuqxelcogwdglxxfsuyfmunsovcjbdeofajxfiquwdksjtmtahzycndyhvdgovubiqhrkryfxtalrkrueasqszgohmipwdvzyovydppyhuqxemdngnubtswgtwbnnvguovckdielszrsueruzllucqmtaizjcjqxoasctoxltweqkrygxhahovnlqbnqvhhrckipwexcyfmtlooypkthpsafgnuctdwdkrjimxmvzkltshelsatyubiphhkajfmcctagcjqyrwszgneqirirvghpocahowpuqxeldfgwdpmuzjsfyfmunsovcjbfeocijwcpowwdkslqmtahoicozchttdjcubiqjokryfxyakacdoumtsszgohmipwdvtyoyhlwxfhrqxemfkgnubtswmtwbnnxisovckdielszrrueruzllvcmmtaizjcjqxprscsbfqrzbrkrygzeahovnmqgryzipbgcipwexcyfmtllocoxbmnvxmgnucvawdkrjhmcmopagyfgelsatyubiphkkakmnyewdbcjqyrwszgnfciywikaypagahowpuqxeldggpfbiyclucyfmunsovcjamendzgwwltywdksjtmtahzyclcefqwovrubiqjokryfxzaqacdoumtyszgohmipwdvvyoxtaqqdhnqxemfkgnubtwwfvryoofaoovckdielszrnudmdyrmcnjmtaizjcjqxpnsbsuvgmellkrygzeahovnpqgeqsigtcfipwevfyfmtljoxnjqgllfagnucvawdkrjhmvlhoekyfzelsatyubipgsktjfmcirsicjqyrwszgnfbirjenbjmuxahownxqxeldagrdglxxhszyfmunsovcjbzeofajxfiqwwdksjtmtahzxcnclpabjizubiqjokryfxbaqzvcswmkrszgohmipwdvryhpipscyqtqxemfkgnubttwmkwyombikovckdielszrtududhstbammtaibgcjqxptsijcjmwskpkrygzeahovnjqgqstekcjmipwexcyfmtlkoenjqgktfggnucvawdkrjlmvbsrxhvykelsatyubiphdkyjfmccpobcjqyrwszgnfeirjenbjmuwahownxqxeldggrfbiyapmfyfmunsovcjbfendzgwznvswdkslqmtahzxcldyhvdgopubiqhrkryfwialajnyzhgtszgohmipwdvsyozudrzckuqxemdngnubtzwhvryovaaoovckdielszrvudruzlltetmtaizjcjqxppscsbfqrzyhkrygzeahovnpqgjtefjcueipwexcyfmtlsoxcoqgfxhdgnucvawdkrjomvjmrddnulelsarbubiphjkuatmxgpbacjqyrwszgnfbirhdkablmhahowpuqxelddgpwpitbmxuyfmunsovcjbbenenrcdlkdwdkslqmtahzdcstmtwgcuaubiqjokryfxaaqzvcswhktszgohmipwdvsyhzghqxvrmqxemfkgnubtqwkxefovhcqovckdielszrtuiowigqwehmtaibgcjqxpxsfrnukqxhekrygxhahovnkqzqzdopxzhipwexcyfmtlsoelotffpwmgnucvawdkrjkmwdwdgqmeeelsatyubiphekalstcjnracjqyrwszgnfgiwyrkvcnruahowpuqxeldhgpypkegjryyfmunsovcjbcendzgwajmswdkslqmtahzzclbxeuzalsubiqjokryfxvajzvcswfoaszgohmipwdvwyhzghqxvruqxemfkgnubtbwkkwyopfkuovckdielszrrudiuwmktehmtaibgcjqxposbjcjmwskokrygzeahovnpqgplsiiwdcipwexcyfmtlsoxoxbmnvxdgnucvawdkrjqmclhoefydxelsatyubiphfktirrggwyfcjqyrwszgnfmividqubuaiahowpuqxeldcgqfbiydkogyfmunsovcjbaendzgwcnwdwdkslqmtahzeclzliqgbjbubiqjokryfxzakoacsqkhqszgohmipwdvsyhxtaqwektqxemfkgnubtywfvryopzgkovckdielszrxudnxijwxhomtaibgcjqxprsbibufpqxdkrygzeahovnqqzgzsdlzcdipwexcyfmtlooxnjqgkwahgnucvawdkrjhmvfmofrpehelsatyubiphiktctohflsicjqyrwszgnfgirhdkacfnwahowpuqxeldagpypkdcotryfmunsovcjbjendzgwcmsdwdkslqmtahzxclbxeuuoovubiqjokryfxwajzvcsvksuszgohmipwdvsyhxtaqrjrnqxemfkgnubtxwfpwypzuknovckblelszrvudtpwmswhhmtaibgcjqxposbrnukmpikkrygzeahovntqzplsiiuipipwexcyfmtlhoxnjqgiafdgnucvawdkrjfmvltqdcvxcelsatyubiphkktjfmcdvtxcjqypzszgnfiirhdkabuwcahownxqxelddgpfbiybonvyfmunsovcjbeensegwvpjswdkslqmtahzyclbxeuullsubiqjokryfxfajzvcswcozszgohmipwdvbyhxtaqthknqxemfkgnubtwwfvryoodcpovckdielszrqudtpwmozajmtaibgcjqxpwsbrnukmpwlkrygzeahovnqqzeqsigpbgipwevfyfmtlmoxpwxgnlhignucvawdkrjmmalhoefpcaelsatyubiphgktjfmccwuacjqyrwszgnfiirhdkadjmfahowpuqxeldhgpugiywnsuyfmunsovcjbzencllaapwrwdkslqmtahzecpbxeuukpyubiqjokryfxyajxafrrahzszgohmipwdvayixtaqqjqtqxemfkgnubtywftwbnnuanovckdielszrqueowigqwhpmtaibgcjqxpmsfpsxjjtaikrygzeahovnqqaksecmrgdipwexcyfmtlnoblxuclxvmgnucvawdkrjhmwgoayioyhelsatyubiphfkxhkpbblsdcjqyrwszgnfnisckwueksdahowpuqxelddgtaiuscistyfmunsovcjbdervbhuvbvawdkslqmtahzxcrzchttckxubiqjokryfxcakxjgoxjmyszgohmipwdvdyisamkuzktqxemfkgnubtxwjtwbnnxerovckdielszrsueruzlludmmtaizjcjqxprscmugeouhfkrygzeahovnxqdksecmradipwexcyfmtljobojwahafjgnucvawdkrjkmwkttiiyuhelsatyubiphgkxhkpbbksicjqyrwszgnffisckwuektvahowpuqxeldigtaiusciutyfmunsovcjbzerygsqagrrwdkslqmtahzecpweqoydvxubiqjokryfxzanxafrrajqszgohmipwdvvyisamkuamtqxemfkgnubtzwjuddsshnjovckdielszqcuhowigqwfpmtaibgcjqxppsfjpvijpjjkrygzeahovntqfhntghnhfipwevfyfmtlpodflregadfgnucvawdkrjombdjpcdjdaelsatyubiphikzbhnabhbfcjqyrwszgnflixgqwscioyahowpuqxeldkgvxdjwxdxfyfmulvovcjbjetvbhuvbvxwdksjtmtahzacrtzfstztsubiqjokryfxyaprxdqrxrsszgofqipwdvvynpvbopvpsqxemdognubtuwlntzmntnuovckblelszrrujlrxklrlhmtaibgcjqxppshjpvijpjpkrygxhahovntqfnqejtpeeipwevdyfmtksofexqbjygkgnuctbwdkrjnmvltqdiqccelsarzubiphnkthkydnjyfcjqypxszgnfhizfiwblhweahownvqxelcngxdguzjfuzyfmultovcjbbevbesxhdstwdksjrmtahzvctzcqvfbqsubiqhpkryfxfarxaotdzouszgofnipwdugypvymrbxmpqxemdlgnubttwntwkpzvkoovckbjelszrvultyzfqzhpmtaizhcjqxersernukjpgnkrygxfahovnmqzeqsihqbbipwevdyfmtlooxiqflnufngnuctbwdkrjrmxjhshhnumelsarzubiphqktjfmcfsqdcjqypxszgnfmirhmntenwcahownvqxeltmgsdglxxhsbyfmultovcjxbeodijpajsuwdksjrmtahobcozliqgbruubiqhpkryfwcakxafrrzmoszgofnipwdqgyixcdjudmpqxemdlgnubjewixsbpxaimovckdielszrxufudhstbakmtaizhcjqxlwsisbfqrzyqkrygxfahovjtqgnqvhhpaoipwevdyfmtjnoypkthpsahgnucvawdkrkfmxmvzkltsgelsarzubipedkahkpbblwecjqypxszgnbmisjenbjmuzahowpuqxeldjgrdpmuzjsfyfmulvovcjcxeobejvvflewdksjrmtahxvcmbxeuzeguubiqhpkryfxeajxafrrbmwszgofnipwdpayivhemcxmqqxemdlgnubrwwgwyzkqipmovckbjelszlcukruzllvcmmtaibgcjqxqmscsuvgmelrkrygxfahovhwqgplsiizuiipwevdyfmtlqoxoxbmnvxkgnuctbwdkrjjmcmopagyfbelsarzubipclkalgpdlowhcjqyrwszgnfjitirvghpozahownvqxelzfgwgptefnmcyfmultovcjyheufajxfiqdwdkslqmtahawcnbxeuujrwubiqjokryfxfajzvcstzsnszgofnipwdvgyhvydppzkrqxemdlgnubqrwglcbhrfiuovckbjelszrcuivqznvygjmtaibgcjqxqlsdtoxltwekkrygzeahovnwqbhahkuqifipwevdyfmtgnoepkthpsakgnucvawdkrjpmxmopagyfhelsarzubiphmkalgpdlowycjqyrwszgnfjitfinzzhshahowpuqxeleagqhclzhkssyfmultovcjbjepfajxfiqrwdkslqmtahzdcnzchttdkbubiqjokryfxbakzvcssjqwszgofnipwdveyhpipscyqoqxemdlgnubpwwmxsbpxaiuovckdielszrbufruzlludqmtaibgcjqxpyscpsxjjsaokrygzeahovojqaouviobaiipwevdyfmtbkoaoxbmnvujgnuctbwdkreqmcmvzkltvfelsarzubipedkakmnyewdccjqypxszgnbdiyjqrahtyuahownvqxeldcgugptefnpfyfmultovcjwfeuenrcdlncwdksjrmtahuecsbxeuyhqyubiqhpkryfxzajzvcssfjpszgofnipwdvayhyabmskrsqxemdlgnubqswmkwyomdouovckbjelszrwudiuwmkxgjmtaibgcjqxpasbkbwpkalhkrygxfahovnyqzqstekcjhipwevdyfmtgpoenjqgmahbgnuctbwdkrjhmvlhoejjdyelsarzubiphpktjfmcirsicjqypxszgnflirhdkaanmzahownvqxeldigpugiywlsuyfmultovcjbkendzgwybkdwdksjrmtahzcclbxeuyomtubiqhpkryfqtajzvcswfrsszgofnipwdvbyhpipscyqvqxemdlgnubsvwmwyzkqipuovckbjelsznaukuwxiognnmtaizhcjqxjysirnukmbyrkrygxfahovnwqzplsilzheipwevdyfmtlwoxcoqgfxhdgnuctbwdkrjmmvmvzkltsjelsarzubipbikajfmcjooccjqypxszgnfoirzszcmiadahownvqxelycgwgptefnmyyfmultovcjyxeuxhstxqiswdksjrmtahzhclbxeuvcgtubiqhpkryfxzajqjcnwfrqszgofnipwdvbyhohaltepmqxemdlgnubtxwfwyzkqipsovckbjelsznquktpwmnxytmtaizhcjqxpwsbsbfqrzylkrygxfahovkuqgqzdopxwfipwevdyfmtgooepwxgnlhcgnuctbwdkrjomalhoeitwfelsarzubiphqkthkpbblsacjqypxszgncpiszszcmiagahownvqxelyigwgptefnmfyfmultovcjyaeufmnwdpkywdksjrmtahzgcqbxeuahroubiqjokryfxgajxafrrbiyszgofnipwdtbyisamkuailqxemdlgnubjcwjuabouhfhovckbjelszhtugleloyummmtaizhcjqxnusisbfqrzbjkrygxfahovjqqgryzipnjmipwevdyfmtkqocexqbitxagnuctbwdkrjnmvnuvelptcelsarzubiphfkyjfmchitacjqypxszgnfiirarmgiltaahownvqxelezgpfbiyclouyfmultovcjbkensegwudorwdksjrmtahzeclbxeuyhqcubiqhpkryfxhajzvcssgnmszgofnipwdvbyhxtaqvcgyqxemdlgnubtxwfkwyopfkuovckbjelszrbudtpwmsdmtmtaizhcjqxpysbgsukiczikrygxfahovojqzplsijchbipwevdyfmtluoxoxbmnvxdgnuctbwdkrfnmcfpabopzgelsarzubipidktjfmcfmdzcjqypxszgngcirhdkablswahownvqxeldngpfbiyemsbyfmultovcjbhendzgwwqouwdksjrmtahzecltmtwgcuyubiqhpkryfsbaqzvcswimtszgofnipwdvbyhohalvwdjqxemdlgnubtbwfvryoqtbkovckbjelszrzudnuwnzxmpmtaizhcjqxqlsbkbwpntaqkrygxfahovojqzgzsdlzcdipwevdyfmtlvoxnjqgjygignuctbwdkrjpmvlhoefxfbelsarzubiphpktjfmcewbzcjqypxszgnfoirhdkacfyaahownvqxeldhgpfbiyzsuayfmunsovcjbienwnibamrpwdksjrmtahzeclbjgtslnsubiqhpkryfxbajzvcsseszszgofnipwdveyhxtaqwgmxqxemdlgnubtywfvryooffmovckbjelszruudnuwnxsilmtaibgcjqxpxsbtabkrplmkrygxfahovnkqeplsiiccjipwevdyfmtlsoxnjqgmqbbgnuctbwdkrjqmvlhoehutbelsarzubiphrktjfmcdvtxcjqyrwszgngcirhdkaekwhahownvqxeldhgpfbiyzjwuyfmultovcjbjensegwvpjswdksjrmtahzhclbxeuwhirubiqhpkryfxdajoacsqzlqszgohmipwdvbyhxtaqsvcrqxemdlgnubtbwfvryorfilovckbjelszsoudtpwmmbanmtaizhcjqxpysbrnukntwpkrygxfahovnyqzeqsigxceipwevdyfmtlkoxlotffovngnuctbwdkrepmwlhoeeuzielsarzubiphpktirrggvcxcjqypxszgnxqivhdkaatadahownvqxeldigpdglxxekxyfmultovcjazeoygsqagrzwdksjrmtahrbcpweqoyeoxubiqhpkryfrdanucomwbqnszgofnipwdmuylvhemvhfwqxemdlgnubsrwgtwbnnxepovckbjelszpuueowigqwghmtaizhcjqxfusfmugeoucnkrygxfahovfpqdhntghnhmipwevdyfmtdmodlotffowjgnuctbwdkrgsmwjvsajvykelsarzubipelkuemywglwfcjqypxszgnzhividqubuaiahownvqxelyigqdglxxhobyfmultovcjbfeobejvvenwwdkslqmtahaycmweqoyerpubiqhpkryfscanucomwbknszgofnipwdrbylvydppygwqxemdlgnubpewguddssierovckbjelszmuuhowigqwfhmtaizhcjqxilsfsnaelejnkrygxfahovhwqaksecmsedipwevdyfmtgkobiqcakqcjgnuctbwdkrdimzjmrddmvcelsarzubipffkuemywgldfcjqypxszgnzlivckwuekvvahownvqxelvkgtennccrxtyfmultovcjrgerygsqagpzwdksjrmtahphcptzfstzttubiqhpkryfxuaprxdqrxrpszgohmipwdwrynpvbopvpmqxemdlgnubtdwlntzmntnrovckbjelszrbujscieouakmtaizhcjqxpxshjpvijpjrkrygzeahovnuqfhntghnhjipwevdyfmtlqodflreflfbgnuctbwdkrjlmbdjpcdjdeelsarbubiphskzbhnabhbacjqypxszgngdixzflyzfzfahowpuqxeleagvxdjwxdxayfmunsovcjbketvbhuvbvcwdkslqmtahzgcrtzfsuortubiqhpkryfwgapbwftbdnuszgofmipwdrzyjoepqqbhlqxemdkgnubvuwhvabhsbkpovckblelszhpugtpwmnfdhmtaizhcjqxqlsbpsglvrghkrygxeahovekqhpuvbmvdiipwevfyfmtbjoaiqflnuczgnuctawdkrkjmxevqkmpxeelsaryubipiiktlgpdlowgcjqypwszgnhiitjenbjmuxahownuqxelffgrfbiyadmfyfmulvovcjdgensegwuhqtwdksjqmtahbfclbxeuxkivubiqhokryfyyajoacsqhsyszgofmipwdwyyhxcdjudmpqxemdngnubjswikwyomdouovckblelsztrudvqznvygsmtaizgcjqxrnsdrwxdoxgkkrygxhahovctqcplsiknveipwevfyfmtnkoxpkthpsalgnuctawdkrlimxcvozirdcelsarbubipjnktjfmcewbzcjqypwszgngeirhmntenwbahownuqxeltcgswpitbqycyfmulvovcjdfendzgwwjivwdksjqmtahzkcldyhvdgosubiqhokryfyialzvcsyhiyszgofmipwdwyyhxtaqqfnsqxemdkgnubvswftwkpzvklovckblelsztpulkdwhpdghmtaizjcjqxrrsbpsglvrgkkrygxhahovppqhplsiivzfipwevcyfmtmnoxnstzktbkgnuctdwdkrzkmyjmafpladelsarbubipjdkbjfmccpobcjqypzszgnheirjenbjmuuahownyqxelfbgrfbiyeittyfmulvovcjdbendzgwwniwwdksjtmtahbecldyhvdgotubiqhokryfzbalzvcswfowszgofpipwdxyyhryardbqtqxemdngnubvuwfmfyjtubhovckblelsztrudtpwmnuylmtaizgcjqxqusbrnuklrkfkrygxhahovpnqzplsiixfkipwevdyfmtmnoxnjqghosfgnuctdwdkrlomvlhoektukelsarbubipjmktatmxftwxcjqypwszgngcirhdkabtbxahownuqxelefgphclzhjtdyfmultovcjdyepdzgwcjtqwdksjqmtahaaclzcqvfbqwubiqhokryfsearsjexwinlszgofpipwdxayhxtaqudmuqxemdkgnubuywfofatsejhovckbielszstudiuwmktehmtaizjcjqxrtsbrnuknaylkrygxhahovoyqzpuvbmvdiipwevcyfmtbjoanstzktcignuctdwdkryqmylqrxirzhelsaryubipxjkwlgpdlnxdcjqypwszgngpitfiwblhwwahownuqxeldhgxfbiybonvyfmulvovcjdgenbesxhdszwdksjqmtahuvctbxeuwhirubiqhrkryfzbajbwftbdnrszgofmipwdxzyjryarbwmpqxemdkgnubvzwfxsbpxaivovckbjelszspuftpwmnxkimtaizjcjqxrrsbrnuknckmkrygxeahovonqzeqsijzeoipwevfyfmtnnoxgxsljpwmgnuctawdkrkkmvfpabopzgelsarbubipjjktjrobgoaacjqypwszgngcirfiwblhwcahownxqxelfcgxfbiyxdubyfmulsovcjcyenbesxhdswwdksjqmtahaxctbxeuzztoubiqhokryfycajzvcssmmtszgofpipwdxayhxtaqukipqxemdkgnubuuwftwkpzvkmovckbielszjoultpwmrwymmtaizgcjqxpssbiyjkkwjokrygxeahovptqbrmvjruciipwevdyfmtmqoznjqghrycgnuctawdkrkhmvlhoekyfzelsaryubipigktatmxgpbacjqypwszgngbirhdkadrzwahownuqxelezgpwpitalpsyfmulvovcjdzenygvbdkvdwdksjqmtahaycnzcqvfbqqubiqhrkryfzxarzvcswfioszgofpipwdxyyhxtaqrbcxqxemdkgnubuxwfxsbpxailovckbjelszsqufvqznvygsmtaizhcjqxnusdlsulvqgjkrygxfahovoqqzjtefjcueipwevcyfmtmooxcoqgfxhdgnuctdwdkrlpmvltqdiqccelsarbubipjiktatmxfqbycjqypzszgnhhirfdoddjqiahownxqxelfdgpfbiydkogyfmulvovcjdcendzgwwiwdwdksjqmtahabclzcqvfbqvubiqhrkryfzaarzvcstmrlszgofmipwdwayhxtaqqhhoqxemdngnubvtwftwkpzvknovckbielszhpultpwmsdmtmtaizjcjqxrtsbibufnckokrygxeahovnxqzplsiiccjipwevcyfmtmhoxcoqgeradgnuctbwdkrkimvlhoejoqeelsarbubipjlktjfmcehqjcjqypwszgnggirjenbjmuvahownuqxelfggrhclzhkpfyfmulsovcjdgepwnibwmxtwdksjqmtahazclbxeuxmuwubiqhrkryfzzajsjexvbiyszgofpipwdxtyhxtaqrjhlqxemdkgnubvtwftrcrrxewovckbielszsnudruinxtiqmtaizjcjqxrqsjrnukougrkrygxhahovpuqzrmvjrucpipwevcyfmtnroznjqgiafdgnuctdwdkrllmvlhoeeuzielsaryubipilktjfmcdwbvcjqypzszgnhlirhpmzyrtyahownuqxeleggpfbiydepwyfmulsovcjccensegwvnxtwdksjqmtahzkclbxeuxdgzubiqhrkryfzyajoacsqfmoszgofmipwdwvyhsapvxelpqxemdkgnubvswhvryosdgpovckblelsztxudvqznvygrmtaizhcjqxqosdtabkrdymkrygxeahovgoqenqejtpelipwevfyfmtmwofnjqghngbgnuctawdkrkjmvbsrxhvykelsaryubipifkyembhjqbjcjqypaszgngqityozaalqiahownuqxelfbgrhclzhdmwyfmulsovcjceepdzgwwpwzwdksjqmtahacclbxeuxevrubiqhokryfybajbwftbemsszgofmipwdxxyjxtaqqkioqxemdngnubvswfuabouhfhovckblelszhsugiuwmlfzimtaizgcjqxqrsbtabkrplokrygxeahovooqeplsijbjfipwevfyfmtnjoxpwxgnlhcgnuctdwdkrlkmanirfnqyielsarzubiphqkvlstcjhdecjqypwszgndliwhdkaepsbahownuqxeleagpfbiyynmzyfmulsovcjcaenfmnwdhluwdksjtmtahbecqdklubnsoubiqhokryfnhaotactfdsvszgofmipwdwtyhmyaqofkmqxemdngnubvzwfvdanmfhmovckblelsztyudtpwmmddkmtaizgcjqxqtsbrnukkyfekrygxeahovonqzrmvjruchipwevdyfmtmiozlochrncegnuctdwdkrljmdlhoeevcielsaryubipifktjfmciqwfcjqypzszgnhjirarmfaqbxahowpuqxelfjgpugiywqnwyfmulvovcjdcendzgwcqxrwdksjtmtahbxclbxeuzztoubiqhrkryfzxajbwftbemtszgofnipwdwxyjzudrzckmqxemdkgnubvqwhvryoseipovckbielszrxudvqznvygnmtaizgcjqxqvsdrnukqagrkrygxhahovpsqzrmvjrtdpipwevdyfmtnhoziqflnuczgnuctewdkrlkmxlhoeiramelsaryubipijktjfmcfsrzcjqypwszgncpirjenbjmuvahownvqxelefgrwmxyykxdyfmultovcjdxepfmnwdpuqwdksjtmtahbgcqqceushoqubiqhrkryfzvajbwftbdnwszgofmipwdstyjxtaqrbimqxemdngnubvrwfxefovhcqovckblelsztsuitpwmtyymmtaizgcjqxqqsbrnukpqbikrygxhahovppqzeqsihbveipwevfyfmtnpoxpkthpsacgnuctbwdkrkkmxamoecwtcelsaryubipikktlgpdlowwcjqypwszgnwlitckzfhovuahownuqxeltogrhclzhkswyfmultovcjbkepfmnwdhluwdksjqmtahqdcqqceuvlqaubiqhokryfyaajzvcsujgzszgofpipwdxbyhxtaqwektqxemdkgnubuqwfvryosbnoovckbielszssudvcdmtrnqmtaizjcjqxrosgrnukmbyrkrygxeahovolqzplsiiwdcipwevfyfmtnjoxnjqggayegnuctawdkrklmvlhoekozzelsaryubipikktjfmcftbycjqypzszgnhiirhdkaenwiahownyqxelfjgpfbiyyiqxyfmulsovcjccendzgwznqtwdksjqmtahayclbxeuyomtubiqhrkryfzbajoacsrallszgofpipwdxuyhmyaqoxjoqxemdkgnubuvwfvryoqtbkovckbielszsoudtpwmpwnjmtaizjcjqxrwsblvghlewgkrygxiahovprqzplsijtupipwevfyfmtnroxnjqglswognuctawdkrkfmvlhoeioalelsaryubipidktjfmccsxgcjqypzszgnhhirwikayhsvahownuqxeldogpfbiyalmvyfmulsovcjczendzgwajmswdksjqmtahadclbxeuxlorubiqhrkryfzeajzvcssfjpszgofpipwdxbyhxtaqqhouqxemdngnubuewfvryoqtmoovckblelsztsudtpwmtyymmtaizjcjqxrnsbrnukoxjkkrygxiahovprqzplsihnelipwevfyfmtmwoxnjqgkwahgnuctdwdkrllmvfpabopzgelsaryubipihktykmcajvacjqypxszgnhcirhdkagnxuahownvqxelffgpfbiyzjwuyfmulsovcjcaendzgwcnwdwdksjqmtahacclbxeuvoqwubiqhokryfzaajzvcsseszszgofpipwdxwyhxtaqsvoqqxemdkgnubuvwfqykisyijovckblelsznxuhtpwmorynmtaizjcjqxrssbkbwqsvdkkrygxhahovplqzplsioyepipwevcyfmtmjoxexqblmtzgnuctawdkrkjmvlhoeetsfelsarbubipjmktjfmccvcfcjqypzszgnhjiryrkvcnruahownuqxeldngpugiywnsuyfmulsovcjccenungrzkvswdksjqmtahzjclbxeuwzgvubiqhokryfutajzvcstmouszgofnipwdwxyhxtaqtzcvqxemdkgnubnrwflcbhrfiuovckblelsztpuivcdmtrnomtaizjcjqxrxsgsbfqrzyqkrygxhahovpnqgryzipnjeipwevcyfmtaooclotffpaignuctdwdkrlfmwmhuyfydhelsaryubipxhkuhkpbblsdcjqypwszgnweisfinzzjucahownuqxeltfgqdglxxfqeyfmulsovcjszeoygsqagqzwdksjtmtahskcpzliqvfobubiqhpkryfxdakxafrrahzszgofpipwdxwyisamkuaklqxemdkgnubjvwjqykisxprovckblelszqruhleloyumpmtaizjcjqxrmsisuvgmelnkrygxhahovprqgnqvhhqymipwevdyfmtdvoyfyfisogggnuctdwdkrlhmcgoayioahelsarbubiphfkxbubeokczcjqypwszgnumiyirvghpozahownuqxelskgwdglxxhscyfmulsovcjrleobejvvdqswdksjqmtahzdcmtzfstztaubiqhpkryfxuapacdoumtsszgofpipwdxzyovydppzfyqxemdkgnubsswgtwbnnvguovckblelszscuelrxklrltmtaizhcjqxrnshpsxjjtarkrygxfahovjvqaksecmrclipwevcyfmtbhoblxuclxamgnuctdwdkrlqmwjvsajvtkelsaryubipbokububeokczcjqypzszgnhliyirvghprxahownxqxelfdgwdglxxgpyyfmultovcjyaeobejvvfqawdksjtmtahbgcmzchttckyubiqhokryftuakucomwbmvszgofpipwduyylvydppzktqxemdngnubvuwgtwbnnuanovckblelsztqueudhstbakmtaizjcjqxrosimugeotcfkrygxhahovjsqdnqvhhpceipwevfyfmtnmoyoxbmnvxdgnuctawdkrzhmcgoayiowzelsarbubipbekxirrggvbxcjqypwszgnumiviklwcubdahownuqxeldbgwdglxxhoyyfmulsovcjqzeovovyiewbwdksjqmtahaycsweqoyeppubiqhokryfnhanxafrraiyszgofpipwdxcyisamkuaktqxemdkgnubiywjwreipiowovckblelsztsueudhstbaomtaizjcjqxrlsisbfqrzykkrygxhahovpmqghntgicfhipwevfyfmtnmodoqrciahggnuctawdkrbsmcdjpcdjdbelsarzubiphikzbhnabhbzcjqypwszgnvmixfinzziryahownuqxeltjgqgijuaszwyfmulvovcjdxeubejvvdodwdksjrmtahwfcmzchttclsubiqhrkryfzvakajnyzhgsszgofmipwdvuyovydppzgwqxemdngnubvrwgqykisxmjovckblelszmtuhrdaiytimmtaizjcjqxrrscmugeoucfkrygxeahovdnqdnqvhhrylipwevfyfmtnkoyflreflfbgnuctdwdkrlombjmrddntmelsarbubipjdkuktxijrtbcjqypzszgnhhiyfinzzireahownuqxelsbgqaiusciutyfmulvovcjzberbnksidldwdksjtmtahbecmajjyyokxubiqhrkryfthanyhhwwmovszgofpipwdrcylvydppzkrqxemdngnubvqwgwfjuvdctovckblelszqzuklrxklrlimtaizgcjqxfmshjpvijpjikrygxhahovprqfnzweupfiipwevfyfmtnhoylotffoxkgnuctbwdkrfqmwjvsaqlaeelsaryubipwokuhkpbblsacjqypzszgnhcisfrowfrpgahownxqxelffgqdglxxhsbyfmulsovcjqjeoygsqagtrwdksjqmtahoxcpclpabjivubiqhrkryfzxaqucomwcnvszgofpipwdqdylvydppzgtqxemdkgnubjewgqykisyhrovckblelsznxuhrdaiytjmmtaizgcjqxfnscpsxjjtakkrygxfahovisqanqvhhqylipwevfyfmtnpoylotffpwhgnuctdwdkrlomwgoayiozhelsaryubipwikxbhnabhbgcjqypzszgnhjixidqubuzdahownxqxelffgqaiusciqbyfmulsovcjrbercllaapwrwdksjtmtahvdcpajjyyntpubiqhrkryfszanucomwckvszgofpipwdreylvydppzkrqxemdkgnubjewgtwbnnuanovckbielszhtueowigqwhhmtaizjcjqxjnsfmugeouhfkrygxhahovkuqdksecmsbdipwevfyfmtfnoboxbmnvxmgnuctawdkrkmmcdjpcdjdfelsatyubipjhkzisyuekqacjqypwszgnunixzszcmiaeahownuqxelecgwxdjwxdxeyfmulsovcjrietenrcdlnawdksjqmtahzycsclpabjiaubiqhokryfxdaqajnyzhgwszgofpipwdxxyoyabmskrxqxemdkgnubtzwmngnqawomovckbielszpquklrxklrlpmtaizjcjqxrushsbfqrzynkrygxhahovplqgoyeakqwgipwevfyfmtnjodoqrciahdgnuctewdkrlmmcdjpcdjddelsaryubipwkkzktxijrqjcjqypzszgnhfiyzszcmiayahownxqxeleogwgptefnpcyfmulvovcjdgeuenrcdlktwdksjtmtahbacstzfstztsubiqhokryfnxaprxdqrxrrszgofpipwdxvynyabmskrpqxemdngnubvtwmntzmntnoovckbjelszqzujuwxiognnmtaizjcjqxrpsisbfqrzbqkrygxhahovpmqgqstekcjpipwevfyfmtnhoeoxbmnvxhgnuctdwdkrlkmcmopagyfielsarbubipjikaktxijrtjcjqypwszgnaqiyirvghpohahownuqxelsfgwxdjwxdxuyfmulvovcjdcetvovyiewcwdksjtmtahbxcstmtwgcuxubiqhokryfmhaqacdoumtyszgofpipwdxyyopvbopvpsqxemdlgnubvwwlwfjuvdcqovckbielszivukleloyumqmtaizjcjqxrssisbfqrzyhkrygxeahovhsqgqstekcjmipwevcyfmtfkoeflreflfkgnuctawdkrafmbmopagyfgelsarbubipjikaktxijrqdcjqypwszgnyeiyirvghpozahownxqxelflgwxdjwxdxdyfmultovcjyietenrcdlndwdksjtmtahbxcstmtwgcuzubiqhrkryfzuaqacdoumtrszgofmipwdlzyo")




global.connect = connect
