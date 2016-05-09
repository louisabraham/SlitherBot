// Configure le rafraîchissement en fonction du navigateur
var testing = !1;
0 <= window.location.href.indexOf("/testing") && (testing = !0);
var forcing = !1,
    ua = navigator.userAgent.toLowerCase(),
    is_android = 0 <= ua.indexOf("android"),
    is_amazon = 0 <= ua.indexOf("kindle") || 0 <= ua.indexOf("silk/"),
    uua = navigator.userAgent,
    is_ios = 0 <= uua.indexOf("iPad") || 0 <= uua.indexOf("iPhone") || 0 <= uua.indexOf("iPod"),
    is_mobile = 0 <= ua.indexOf("mobile"),
    is_firefox = -1 < ua.indexOf("firefox"),
    is_ie8oo = window.attachEvent && !window.addEventListener,
    is_safari = is_firefox = !1;
0 <= ua.indexOf("safari") && -1 == ua.indexOf("chrome") && (is_safari = !0);
var no_raf = !1,
    raf = function(c) {};
window.requestAnimationFrame ? raf = window.requestAnimationFrame : window.mozRequestAnimationFrame ? raf = window.mozRequestAnimationFrame : window.webkitRequestAnimationFrame ? raf = window.webkitRequestAnimationFrame : no_raf = !0;
is_mobile || (no_raf = !0);
var no_raf = !0,
    a, i, j, k, l, m, n, o, r, fj, d, d2, qq, sc, agpu = "translateZ(0)",
    ang, sang, vang;

function trf(c, f) {
    c.style.webkitTransform = c.style.OTransform = c.style.msTransform = c.style.MozTransform = c.style.transform = f
}

function trfo(c, f) {
    c.style.webkitTransformOrigin = c.style.OTransformOrigin = c.style.msTransformOrigin = c.style.MozTransformOrigin = c.style.transformOrigin = f
}
var pi2 = 2 * Math.PI,
    animating = !1,
    startAnimation = function() {
        animating = !0;
        no_raf ? is_mobile ? setInterval("oef()", 33) : is_safari ? setInterval("oef()", 33) : setInterval("oef()", 20) : raf(oef)
    },
    ois = [],
    wic = 0,
    ldi = function(c) {
        wic++;
        var f = {},
            b = document.createElement("img");
        f.ii = b;
        f.sc = 1;
        b.onload = function() {
            for (var c = ois.length - 1; 0 <= c; c--)
                if (ois[c].ii == this) {
                    c = ois[c];
                    c.ww = this.width;
                    c.hh = this.height;
                    c.loaded = !0;
                    if (c.onload)
                        c.onload();
                    break
                }
            wic--;
            0 == wic && startAnimation()
        };
        f.src = c;
        ois.push(f);
        return f
    };

function addCss(c) {
    var f = document.createElement("style");
    document.getElementsByTagName("head")[0].appendChild(f);
    f.type = "text/css";
    f.styleSheet ? f.styleSheet.cssText = c : f.appendChild(document.createTextNode(c))
}
var nbg = document.getElementById("nbg"),
    nzbg, sadg, sadu, sadd, p, xx, yy, grw, grh, elem, map, imgd, ctx;
elem = document.createElement("canvas");
var rw = 64,
    rh = 64;
elem.width = rw;
elem.height = rh;
ctx = elem.getContext("2d");
map = ctx.getImageData(0, 0, rw, rh);
imgd = map.data;
l = imgd.length;
for (p = 0; p < l; p += 4)
    .5 > Math.random() ? imgd[p] = imgd[p + 1] = imgd[p + 2] = 0 : (imgd[p] = 44,
        imgd[p + 1] = 56,
        imgd[p + 2] = 68),
    imgd[p + 3] = Math.floor(32 * Math.random());
ctx.putImageData(map, 0, 0);
nzbg = elem.toDataURL();
32 < nzbg.length && (nbg.style.backgroundImage = "url(" + nzbg + ")");
grw = 2;
grh = 56;
elem.width = grw;
elem.height = grh;
ctx = elem.getContext("2d");
map = ctx.getImageData(0, 0, grw, grh);
imgd = map.data;
l = imgd.length;
for (yy = p = 0; yy < grh; yy++)
    for (j = (grh - 1 - yy) / (grh - 1),
        j = .5 * (1 - Math.cos(Math.PI * j)),
        xx = 0; xx < grw; xx++)
        imgd[p] = Math.min(255, Math.floor(54.4 + 32 * j)),
        imgd[p + 1] = Math.min(255, Math.floor(108.8 + 64 * j)),
        imgd[p + 2] = Math.min(255, Math.floor(81.6 + 48 * j)),
        imgd[p + 3] = 255,
        p += 4;
ctx.putImageData(map, 0, 0);
sadg = elem.toDataURL();
elem = document.createElement("canvas");
elem.width = grw;
elem.height = grh;
ctx = elem.getContext("2d");
map = ctx.getImageData(0, 0, grw, grh);
imgd = map.data;
l = imgd.length;
for (yy = p = 0; yy < grh; yy++)
    for (j = (grh - 1 - yy) / (grh - 1),
        j = .5 * (1 - Math.cos(Math.PI * j)),
        xx = 0; xx < grw; xx++)
        imgd[p] = Math.min(255, Math.floor(72 + .95 * 48 * j)),
        imgd[p + 1] = Math.min(255, Math.floor(171 + 93.1 * j)),
        imgd[p + 2] = Math.min(255, Math.floor(132 + .95 * 87 * j)),
        imgd[p + 3] = 255,
        p += 4;
ctx.putImageData(map, 0, 0);
sadu = elem.toDataURL();
elem = document.createElement("canvas");
elem.width = grw;
elem.height = grh;
ctx = elem.getContext("2d");
map = ctx.getImageData(0, 0, grw, grh);
imgd = map.data;
l = imgd.length;
for (yy = p = 0; yy < grh; yy++)
    for (j = yy / (grh - 1),
        j = .5 * (1 - Math.cos(Math.PI * j)),
        xx = 0; xx < grw; xx++)
        imgd[p] = Math.floor(.1 * 48 + 36 * j),
        imgd[p + 1] = Math.floor(7 + 52.5 * j),
        imgd[p + 2] = Math.floor(6.4 + 48 * j),
        imgd[p + 3] = 255,
        p += 4;
ctx.putImageData(map, 0, 0);
sadd = elem.toDataURL();
32 < sadg.length && 32 < sadu.length && 32 < sadd.length && addCss(".sadg1 { background-image:url(" + sadg + "); }  .sadu1 { background-image:url(" + sadu + "); }  .sadd1 { background-image:url(" + sadd + "); }");
elem.width = grw;
elem.height = grh;
ctx = elem.getContext("2d");
map = ctx.getImageData(0, 0, grw, grh);
imgd = map.data;
l = imgd.length;
for (yy = p = 0; yy < grh; yy++)
    for (j = (grh - 1 - yy) / (grh - 1),
        j = .5 * (1 - Math.cos(Math.PI * j)),
        xx = 0; xx < grw; xx++)
        imgd[p] = Math.min(255, Math.floor(.85 * 52 + 26 * j)),
        imgd[p + 1] = Math.min(255, Math.floor(81.6 + 48 * j)),
        imgd[p + 2] = Math.min(255, Math.floor(.85 * 144 + 72 * j)),
        imgd[p + 3] = 255,
        p += 4;
ctx.putImageData(map, 0, 0);
sadg = elem.toDataURL();
elem = document.createElement("canvas");
elem.width = grw;
elem.height = grh;
ctx = elem.getContext("2d");
map = ctx.getImageData(0, 0, grw, grh);
imgd = map.data;
l = imgd.length;
for (yy = p = 0; yy < grh; yy++)
    for (j = (grh - 1 - yy) / (grh - 1),
        j = .5 * (1 - Math.cos(Math.PI * j)),
        xx = 0; xx < grw; xx++)
        imgd[p] = Math.min(255, Math.floor(72 + .95 * 48 * j)),
        imgd[p + 1] = Math.min(255, Math.floor(132 + .95 * 87 * j)),
        imgd[p + 2] = Math.min(255, Math.floor(171 + 93.1 * j)),
        imgd[p + 3] = 255,
        p += 4;
ctx.putImageData(map, 0, 0);
sadu = elem.toDataURL();
elem = document.createElement("canvas");
elem.width = grw;
elem.height = grh;
ctx = elem.getContext("2d");
map = ctx.getImageData(0, 0, grw, grh);
imgd = map.data;
l = imgd.length;
for (yy = p = 0; yy < grh; yy++)
    for (j = yy / (grh - 1),
        j = .5 * (1 - Math.cos(Math.PI * j)),
        xx = 0; xx < grw; xx++)
        imgd[p] = Math.floor(.1 * 48 + 36 * j),
        imgd[p + 1] = Math.floor(5.4 + 40.5 * j),
        imgd[p + 2] = Math.floor(7 + 52.5 * j),
        imgd[p + 3] = 255,
        p += 4;
ctx.putImageData(map, 0, 0);
sadd = elem.toDataURL();
32 < sadg.length && 32 < sadu.length && 32 < sadd.length && addCss(".sadg2 { background-image:url(" + sadg + "); }  .sadu2 { background-image:url(" + sadu + "); }  .sadd2 { background-image:url(" + sadd + "); }");
var mos = [],
    m_iv = -1,
    swmup = !1;

// Osef, crée un bouton

function mkBtn(c, f, b, h) {
    var x = document.createElement("div");
    c.tagName || (c = document.getElementById(c),
        c.style.width = b + "px",
        c.style.height = h + "px",
        x.style.width = b + "px",
        x.style.height = h + "px");
    var q = {
        lic: 0
    };
    q.elem = c;
    q.md = !1;
    q.mo = !1;
    q.mdf = 0;
    q.mof = 0;
    var e = !0;
    c.style && c.style.position && ("absolute" == (c.style.position + "").toLowerCase() && (e = !1),
        "fixed" == (c.style.position + "").toLowerCase() && (e = !1));
    e && (c.style.position = "relative");
    x.style.position = "absolute";
    x.style.opacity = 0;
    x.style.left = "0px";
    x.style.top = "0px";
    c.appendChild(x);
    q.ho = x;
    q.alic = function() {
        this.lic++;
        if (3 == this.lic && (this.ho.style.opacity = 1,
                this.onload))
            this.onload()
    };
    mos.push(q);
    q.setEnabled = function(c) {
        c ? (this.disabled = !1,
            this.upi.style.opacity = this.mof,
            this.downi.style.opacity = this.mdf,
            this.elem.style.opacity = 1,
            this.elem.style.cursor = "pointer") : (this.disabled = !0,
            this.upi.style.opacity = 0,
            this.downi.style.opacity = 0,
            this.elem.style.opacity = .38,
            this.elem.style.cursor = "default")
    };
    if (f)
        for (e = 1; 3 >= e; e++) {
            var y = document.createElement("img");
            y.draggable = !1;
            y.style.position = "absolute";
            y.style.left = "0px";
            y.style.top = "0px";
            y.border = 0;
            y.width = b;
            y.height = h;
            y.className = "nsi";
            x.appendChild(y);
            1 == e ? (q.normi = y,
                y.onload = function() {
                    for (var c = mos.length - 1; 0 <= c; c--) {
                        var e = mos[c];
                        if (e.normi == this) {
                            e.alic();
                            break
                        }
                    }
                },
                y.src = f + ".png") : 2 == e ? (q.upi = y,
                y.style.opacity = 0,
                y.onload = function() {
                    for (var c = mos.length - 1; 0 <= c; c--) {
                        var e = mos[c];
                        if (e.upi == this) {
                            e.alic();
                            break
                        }
                    }
                },
                y.src = f + "up.png") : 3 == e && (q.downi = y,
                y.style.opacity = 0,
                y.onload = function() {
                    for (var c = mos.length - 1; 0 <= c; c--) {
                        var e =
                            mos[c];
                        if (e.downi == this) {
                            e.alic();
                            break
                        }
                    }
                },
                y.src = f + "down.png")
        } else
            x.style.opacity = 1;
    c.onmouseenter = function() {
        for (var c = mos.length - 1; 0 <= c; c--) {
            var e = mos[c];
            if (e.elem == this) {
                if (!e.disabled && !e.mo) {
                    e.mo = !0;
                    if (e.onmouseenter)
                        e.onmouseenter(); - 1 == m_iv && (m_iv = setInterval("hmos()", 25))
                }
                break
            }
        }
    };
    c.onmouseleave = function() {
        for (var c = mos.length - 1; 0 <= c; c--) {
            var e = mos[c];
            if (e.elem == this) {
                if (e.mo) {
                    e.mo = !1;
                    if (e.onmouseleave)
                        e.onmouseleave(); - 1 == m_iv && (m_iv = setInterval("hmos()", 25))
                }
                break
            }
        }
    };
    c.onmousedown = function(c) {
        for (var e =
                mos.length - 1; 0 <= e; e--) {
            var b = mos[e];
            if (b.elem == this) {
                if (!b.disabled && !b.md) {
                    b.md = !0;
                    if (b.onmousedown)
                        b.onmousedown(c, b); - 1 == m_iv && (m_iv = setInterval("hmos()", 25));
                    return !1
                }
                break
            }
        }
    };
    c.onmouseup = c.ondragend = function(c) {
        for (var e = mos.length - 1; 0 <= e; e--) {
            var b = mos[e];
            if (b.elem == this) {
                if (b.md) {
                    b.mdf = 1;
                    b.md = !1;
                    if (b.onmouseup && (b.onmouseup(c, b),
                            is_mobile))
                        b.elem.onmouseleave(); - 1 == m_iv && (m_iv = setInterval("hmos()", 25))
                }
                break
            }
        }
    };
    swmup || (swmup = !0,
        window.onmouseup = window.ondragover = window.ondragend = function() {
            for (var c =
                    mos.length - 1; 0 <= c; c--) {
                var e = mos[c];
                e.md && (e.md = !1, -1 == m_iv && (m_iv = setInterval("hmos()", 25)))
            }
        }
    );
    return q
}

function hmos() {
    for (var c, f = !1, b = mos.length - 1; 0 <= b; b--) {
        var h = mos[b];
        c = !1;
        h.mo ? 1 != h.mof && (f = !0,
            h.mof += .33,
            1 <= h.mof && (h.mof = 1),
            c = !0) : 0 != h.mof && (f = !0,
            h.mof -= .2,
            0 >= h.mof && (h.mof = 0),
            c = !0);
        c && (h.upi.style.opacity = h.disabled ? 0 : h.mof);
        c = !1;
        h.md ? 1 != h.mdf && (f = !0,
            h.mdf += .33,
            1 <= h.mdf && (h.mdf = 1),
            c = !0) : 0 != h.mdf && (f = !0,
            h.mdf -= .2,
            0 >= h.mdf && (h.mdf = 0),
            c = !0);
        c && (h.downi.style.opacity = h.disabled ? 0 : h.mdf)
    }
    f || (clearInterval(m_iv),
        m_iv = -1)
}
// Osef, crée un bouton

function makeTextBtn(c, f, b, h, x) {
    f || (f = 56);
    56 < f && (f = 56);
    b || (b = 15);
    h || (h = 14);
    var q = document.createElement("div");
    q.className = "btnt nsi sadg" + x;
    var e = q.style;
    e.position = "absolute";
    e.width = "auto";
    e.color = "#ffffff";
    e.fontWeight = "bold";
    e.textAlign = "center";
    e.fontFamily = 'Arial, "Helvetica Neue", Helvetica, sans-serif';
    e.fontSize = b + "px";
    q.textContent = c;
    e.cursor = "pointer";
    document.body.appendChild(q);
    var y = Math.ceil(35 + q.offsetWidth);
    document.body.removeChild(q);
    q.textContent = "";
    e.width = y + "px";
    e.height = f +
        "px";
    e.lineHeight = f + "px";
    is_mobile || (e.boxShadow = "0px 3px 20px rgba(0,0,0, .75)");
    e.borderRadius = h + "px";
    var F = document.createElement("div"),
        e = F.style;
    e.position = "absolute";
    e.left = e.top = "0px";
    e.width = y + "px";
    e.height = f + "px";
    e.borderRadius = h + 1 + "px";
    e.opacity = 0;
    F.className = "sadu" + x;
    var t = document.createElement("div"),
        e = t.style;
    e.position = "absolute";
    e.left = e.top = "-1px";
    e.width = y + 2 + "px";
    e.height = f + 2 + "px";
    e.borderRadius = h + "px";
    e.opacity = 0;
    t.className = "sadd" + x;
    var w = mkBtn(q);
    w.a = 1;
    w.ho.appendChild(F);
    w.upi =
        F;
    w.ho.appendChild(t);
    w.downi = t;
    w.ts = b;
    w.ww = y;
    w.bgm = x;
    w.setText = function(c) {
        var e = document.createElement("div");
        e.className = "nsi sadg" + this.bgm;
        var b = e.style;
        b.position = "absolute";
        b.width = "auto";
        b.color = "#ffffff";
        b.fontWeight = "bold";
        b.textAlign = "center";
        b.fontFamily = 'Arial, "Helvetica Neue", Helvetica, sans-serif';
        b.fontSize = this.ts + "px";
        e.textContent = c;
        document.body.appendChild(e);
        b = Math.ceil(35 + e.offsetWidth);
        document.body.removeChild(e);
        this.btnf.textContent = c;
        this.ww = b;
        this.elem.style.width = b +
            "px";
        this.upi.style.width = b + "px";
        this.downi.style.width = b + 2 + "px";
        this.btnf.style.width = b + "px"
    };
    b = document.createElement("div");
    q.appendChild(b);
    w.btnf = b;
    e = b.style;
    e.position = "absolute";
    e.left = e.top = "0px";
    e.width = y + "px";
    e.height = f + "px";
    e.borderRadius = h + "px";
    b.textContent = c;
    b.className = "nsi";
    e.color = "#ffffff";
    e.opacity = .9;
    w.ho.appendChild(b);
    return w
}
var sos = [],
    clus = [],
    bso, u_m = [64, 32, 16, 8, 4, 2, 1],
    lgbsc = 1,
    lgcsc = 1,
    lb_fr = 0,
    login_fr = 0,
    llgmtm = Date.now(),
    login_iv = -1;

function loginFade() {
    var c = Date.now(),
        f = (c - llgmtm) / 25;
    llgmtm = c;
    login_fr += .05 * f;
    choosing_skin && (login_fr += .06 * f);
    1 <= login_fr ? (login_fr = 1,
        login.style.display = "none",
        cstx.style.display = "none",
        fbh.style.display = "none",
        twth.style.display = "none",
        cskh.style.display = "none",
        grqh.style.display = "none",
        plq.style.display = "none",
        clq.style.display = "none",
        social.style.display = "none",
        login.style.opacity = 1,
        cstx.style.opacity = 1,
        fbh.style.opacity = 1,
        twth.style.opacity = 1,
        cskh.style.opacity = 1,
        grqh.style.opacity = 1,
        plq.style.opacity =
        1,
        clq.style.opacity = 1,
        social.style.opacity = 1,
        pskh.style.opacity = 1,
        nskh.style.opacity = 1,
        skodiv.style.opacity = 1,
        tip_fr = -1,
        tips.style.display = "none",
        mc.style.opacity = 1,
        loch.style.opacity = 1,
        clearInterval(login_iv),
        login_iv = -1, -1 != showlogo_iv && (ncka = lgss = lga = 1,
            showLogo(!0), -1 != showlogo_iv && (clearInterval(showlogo_iv),
                showlogo_iv = -1))) : (lgcsc = 1 + .1 * Math.pow(login_fr, 2),
        c = Math.round(lgbsc * lgcsc * 1E5) / 1E5,
        trf(login, "scale(" + c + "," + c + ")"),
        login.style.opacity = 1 - login_fr,
        cstx.style.opacity = 1 - login_fr,
        fbh.style.opacity =
        1 - login_fr,
        twth.style.opacity = 1 - login_fr,
        cskh.style.opacity = 1 - login_fr,
        grqh.style.opacity = 1 - login_fr,
        plq.style.opacity = 1 - login_fr,
        clq.style.opacity = 1 - login_fr,
        social.style.opacity = 1 - login_fr,
        pskh.style.opacity = login_fr,
        nskh.style.opacity = login_fr,
        skodiv.style.opacity = login_fr,
        mc.style.opacity = login_fr,
        loch.style.opacity = login_fr)
}
var ss_a = 0,
    ss_sh = 0,
    spinner_shown = !1,
    ldmc = document.createElement("canvas");
ldmc.width = 128;
ldmc.height = 128;
ldmc.style.position = "fixed";
ldmc.style.left = "0px";
ldmc.style.top = "0px";
ldmc.style.zIndex = 8388607;
ldmc.style.display = "none";
document.body.appendChild(ldmc);
var lsfr = 0,
    lcldtm = Date.now(),
    sstr = "Save";
"FR" == country ? sstr = "Bien" : "BR" == country && (sstr = "OK");
var sko_btn = o = makeTextBtn(String.fromCharCode(160) + sstr + String.fromCharCode(160), 47, 20, 34, 1),
    skodiv = o.elem;
skodiv.style.zIndex = 53;
skodiv.style.position = "fixed";
skodiv.style.left = "300px";
skodiv.style.top = "300px";
skodiv.style.display = "none";
skodiv.style.opacity = 0;
document.body.appendChild(skodiv);
o.elem.onclick = function() {
    if (playing) {
        try {
            localStorage.snakercv = snake.rcv
        } catch (c) {}
        playing = connected = !1;
        dead_mtm = Date.now() - 5E3
    }
};
var nick = document.getElementById("nick"),
    victory = document.getElementById("victory"),
    victory_bg = document.getElementById("victory_bg"),
    logo = document.getElementById("logo"),
    login = document.getElementById("login"),
    lastscore = document.getElementById("lastscore"),
    nick_holder = document.getElementById("nick_holder"),
    victory_holder = document.getElementById("victory_holder"),
    pstr = "Play";
"DE" == country ? pstr = "Spielen" : "FR" == country ? (pstr = "Jouer",
    nick.placeholder = "Surnom") : "BR" == country && (pstr = "Joga",
    nick.placeholder = "Apelido");
var play_btn = o = makeTextBtn(String.fromCharCode(160) + pstr + String.fromCharCode(160), 47, 20, 34, 1),
    pbdiv = o.elem;
pbdiv.style.position = "relative";
pbdiv.style.display = "inline-block";
pbdiv.style.marginTop = "20px";
pbdiv.style.marginBottom = "50px";
var playh = document.getElementById("playh");
playh.style.opacity = 0;
playh.appendChild(pbdiv);
var tips = document.getElementById("tips"),
    tipss = ["Eat to grow longer!", "Don't run into other snakes!", "When longer, hold the mouse for a speed boost!"];
"DE" == country ? tipss = ["Esse um zu wachsen!", "Klicke f\u00fcr mehr Geschwindigkeit!", "Bewege dich nicht in andere Schlangen!"] : "FR" == country ? tipss = ["Mangez de cro\u00eetre!", "Cliquez et vous courrez!", "Ne laissez pas votre t\u00eate toucher d'autres serpents!"] : "BR" == country && (tipss = ["Coma para crescer!", "Clique para correr!", "N\u00e3o deixe que sua cabe\u00e7a para tocar outras cobras!"]);
var tip_pos = -1,
    tip_fr = 1.9;
o.elem.onclick = function() {
    play_btn.disabled || -1 != dead_mtm || (play_btn_click_mtm = Date.now(),
        play_btn.setEnabled(!1),
        spinner_shown = nick.disabled = !0,
        ldmc.style.display = "inline",
        connect())
};
var save_btn = o = makeTextBtn(String.fromCharCode(160) + "Save Message" + String.fromCharCode(160), 47, 20, 34, 2),
    sbdiv = o.elem;
sbdiv.style.position = "relative";
sbdiv.style.display = "inline-block";
sbdiv.style.marginTop = "30px";
sbdiv.style.marginBottom = "50px";
var saveh = document.getElementById("saveh");
saveh.appendChild(sbdiv);
o.elem.onclick = function() {
    if (!save_btn.disabled) {
        var c = asciize(victory.value);
        140 < c.length && (c = c.substr(0, 140));
        if (5 <= protocol_version) {
            var f = new Uint8Array(2 + c.length);
            f[0] = 255;
            f[1] = 118;
            for (var b = 0; b < c.length; b++)
                f[b + 2] = c.charCodeAt(b)
        } else
            for (f = new Uint8Array(1 + c.length),
                f[0] = 118,
                b = 0; b < c.length; b++)
                f[b + 1] = c.charCodeAt(b);
        ws.send(f);
        save_btn.setEnabled(!1);
        victory.disabled = !0
    }
};
var wide = !1,
    mww = 850,
    mhh = 700,
    mwwp50 = mww + 50,
    mhhp50 = mhh + 50,
    mwwp150 = mww + 150,
    mhhp150 = mhh + 150,
    mww2 = mww / 2,
    mhh2 = mhh / 2,
    mc = document.createElement("canvas");
mc.style.position = "fixed";
mc.style.left = "0px";
mc.style.top = "0px";
mc.style.zIndex = 5;
mc.width = mww;
mc.height = mhh;
mc.className = "nsi";
document.body.appendChild(mc);
mc.style.display = "none";
mc.style.pointerEvents = "none";
var lbh = document.createElement("div");
lbh.className = "nsi";
lbh.style.position = "fixed";
lbh.style.right = "4px";
lbh.style.top = "4px";
lbh.style.textAlign = "center";
lbh.style.width = "255px";
lbh.style.height = "28px";
lbh.style.color = "#ffffff";
lbh.style.fontFamily = 'Arial, "Helvetica Neue", Helvetica, sans-serif';
lbh.style.fontSize = "21px";
lbh.style.fontWeight = "bold";
lbh.style.overflow = "hidden";
lbh.style.opacity = .5;
lbh.style.zIndex = 7;
lbh.style.display = "none";
lbh.style.cursor = "default";
var lstr = "Leaderboard";
"DE" == country ? lstr = "Bestenliste" : "FR" == country ? lstr = "Gagnants" : "BR" == country && (lstr = "L\u00edderes");
lbh.textContent = lstr;
trf(lbh, agpu);
document.body.appendChild(lbh);
var lbs = document.createElement("div");
lbs.className = "nsi";
lbs.style.position = "fixed";
lbs.style.textAlign = "center";
lbs.style.right = "4px";
lbs.style.top = "32px";
lbs.style.width = "50px";
lbs.style.height = "800px";
lbs.style.color = "#ffffff";
lbs.style.fontFamily = 'Arial, "Helvetica Neue", Helvetica, sans-serif';
lbs.style.fontSize = "12px";
lbs.style.overflow = "hidden";
lbs.style.opacity = .7;
lbs.style.zIndex = 7;
lbs.style.display = "none";
lbs.style.cursor = "default";
lbs.style.lineHeight = "150%";
trf(lbs, agpu);
document.body.appendChild(lbs);
var lbn = document.createElement("div");
lbn.className = "nsi";
lbn.style.position = "fixed";
lbn.style.textAlign = "left";
lbn.style.whiteSpace = "nowrap";
lbn.style.right = "64px";
lbn.style.top = "32px";
lbn.style.width = "150px";
lbn.style.height = "800px";
lbn.style.color = "#ffffff";
lbn.style.fontFamily = 'Arial, "Helvetica Neue", Helvetica, sans-serif';
lbn.style.fontSize = "12px";
lbn.style.overflow = "hidden";
lbn.style.opacity = .7;
lbn.style.zIndex = 8;
lbn.style.display = "none";
lbn.style.cursor = "default";
lbn.style.lineHeight = "150%";
trf(lbn, agpu);
document.body.appendChild(lbn);
var lbp = document.createElement("div");
lbp.className = "nsi";
lbp.style.position = "fixed";
lbp.style.textAlign = "right";
lbp.style.right = "230px";
lbp.style.top = "32px";
lbp.style.width = "30px";
lbp.style.height = "800px";
lbp.style.color = "#ffffff";
lbp.style.fontFamily = 'Arial, "Helvetica Neue", Helvetica, sans-serif';
lbp.style.fontSize = "12px";
lbp.style.overflow = "hidden";
lbp.style.opacity = .7;
lbp.style.zIndex = 9;
lbp.style.display = "none";
lbp.style.cursor = "default";
lbp.style.lineHeight = "150%";
trf(lbp, agpu);
document.body.appendChild(lbp);
var lbf = document.createElement("div");
lbf.className = "nsi";
lbf.style.position = "fixed";
lbf.style.left = "8px";
lbf.style.bottom = "4px";
lbf.style.width = "200px";
lbf.style.height = "37px";
lbf.style.color = "#ffffff";
lbf.style.fontFamily = 'Arial, "Helvetica Neue", Helvetica, sans-serif';
lbf.style.fontSize = "12px";
lbf.style.overflow = "hidden";
lbf.style.opacity = .5;
lbf.style.zIndex = 7;
lbf.style.display = "none";
lbf.style.cursor = "default";
lbf.style.lineHeight = "150%";
trf(lbf, agpu);
document.body.appendChild(lbf);
var vcm = document.createElement("div");
vcm.className = "nsi";
vcm.style.position = "fixed";
vcm.style.left = "8px";
vcm.style.top = "4px";
vcm.style.width = "300px";
vcm.style.height = "228px";
vcm.style.color = "#ffffff";
vcm.style.fontFamily = 'Arial, "Helvetica Neue", Helvetica, sans-serif';
vcm.style.fontSize = "13px";
vcm.style.overflow = "hidden";
vcm.style.wordWrap = "break-word";
vcm.style.opacity = .5;
vcm.style.zIndex = 7;
vcm.style.display = "none";
vcm.style.cursor = "default";
trf(vcm, agpu);
document.body.appendChild(vcm);
var loch = document.createElement("div");
loch.className = "nsi";
loch.style.position = "fixed";
loch.style.right = "16px";
loch.style.bottom = "16px";
loch.style.width = loch.style.height = "104px";
loch.style.zIndex = 10;
loch.style.display = "none";
document.body.appendChild(loch);
var loc = document.createElement("img"),
    lc = document.createElement("canvas");
lc.width = lc.height = 104;
ctx = lc.getContext("2d");
ctx.save();
ctx.fillStyle = "#485868";
ctx.shadowBlur = 12;
ctx.shadowOffsetY = 3;
ctx.shadowColor = "#000000";
ctx.beginPath();
ctx.arc(52, 52, 40, 0, pi2);
ctx.fill();
ctx.restore();
ctx.fillStyle = "#708090";
ctx.beginPath();
ctx.moveTo(52, 52);
ctx.arc(52, 52, 40, 0, Math.PI / 2);
ctx.lineTo(52, 52);
ctx.fill();
ctx.beginPath();
ctx.moveTo(52, 52);
ctx.arc(52, 52, 40, Math.PI, 3 * Math.PI / 2);
ctx.lineTo(52, 52);
ctx.fill();
ctx.strokeStyle = "#202630";
ctx.lineWidth = 1;
ctx.beginPath();
ctx.moveTo(52, 12);
ctx.lineTo(52, 92);
ctx.stroke();
ctx.beginPath();
ctx.moveTo(12, 52);
ctx.lineTo(92, 52);
ctx.stroke();
loc.src = lc.toDataURL();
loc.className = "nsi";
loc.style.position = "absolute";
loc.style.left = "0px";
loc.style.top = "0px";
loc.style.opacity = .45;
loc.style.zIndex = 11;
trf(loc, agpu);
loch.appendChild(loc);
var asmc = document.createElement("canvas");
asmc.width = 80;
asmc.height = 80;
asmc.className = "nsi";
asmc.style.position = "absolute";
asmc.style.left = asmc.style.top = "12px";
asmc.style.zIndex = 12;
asmc.style.opacity = .25;
loch.appendChild(asmc);
var myloc = document.createElement("img");
lc.width = lc.height = 14;
ctx = lc.getContext("2d");
ctx.fillStyle = "#DDDDDD";
ctx.strokeStyle = "#000000";
ctx.lineWidth = 2;
ctx.beginPath();
ctx.arc(7, 7, 2.5, 0, pi2);
ctx.stroke();
ctx.fill();
myloc.src = lc.toDataURL();
myloc.className = "nsi";
myloc.style.position = "absolute";
myloc.style.left = "0px";
myloc.style.top = "0px";
myloc.style.opacity = 1;
myloc.style.zIndex = 13;
trf(myloc, agpu);
loch.appendChild(myloc);
ctx = mc.getContext("2d");
var bgi2 = document.createElement("canvas"),
    bgp2 = null,
    bgw2 = 599,
    bgh2 = 519,
    ii = document.createElement("img");
ii.onload = function() {
    bgi2.width = bgw2;
    bgi2.height = bgh2;
    var c = bgi2.getContext("2d");
    try {
        c.drawImage(this, 0, 0),
            bgp2 = c.createPattern(bgi2, "repeat")
    } catch (f) {}
};
ii.src = "/s/bg45.jpg";

function rdgbg() {
    if (ggbg) {
        gbgmc || (gbgmc = document.createElement("canvas"));
        gbgmc.width = mww;
        gbgmc.height = mhh;
        var c = gbgmc.getContext("2d");
        try {
            c.drawImage(gbgi, 0, 0, 512, 512, 0, 0, mww, mhh)
        } catch (f) {}
    }
}
var ggbg = !1,
    gbgmc = null,
    gbgi = document.createElement("img");
gbgi.onload = function() {
    ggbg = !0;
    rdgbg()
};
gbgi.src = "/s/gbg.jpg";

function newDeadpool() {
    return {
        os: [],
        end_pos: 0,
        add: function(c) {
            this.end_pos == this.os.length ? this.os.push(c) : this.os[this.end_pos] = c;
            this.end_pos++
        },
        get: function() {
            if (1 <= this.end_pos) {
                this.end_pos--;
                var c = this.os[this.end_pos];
                this.os[this.end_pos] = null;
                return c
            }
            return null
        }
    }
}
var flt_a = "ler did no;gas the;gas all;gas every;panis;panus;paynis;my ass;cut your;heil hit;flick your;fingerba;arse;naked;menstr;eat my;eat as;lick as;suck as;suck my;fuk;dong;cunn;penil;suck a;foresk;puto;puta;suck;mierd;bit.ly;ween;wein;wien;peen;turd;wank;crap;ur mom;tu madre;chinga;pu$$;phalus;phallus;verga;culo;kurwa;erect;schlong".split(";"),
    flt_g = "buttlov buttf smegm itherplu eatmy suckm sucka mydik erioorg urdik heriobo mistik ki11all brazz iomods cunt suckdik itherhac sucksdik sukdik deltaloves suksdik hitler assmunch lickmy fuqall fukall".split(" "),
    flt_w = ["ass", "kkk"];

function gdnm(c) {
    var f = "",
        b = "",
        h = "",
        x = 0,
        q = !1,
        e = !1,
        y, F;
    for (y = 0; y < c.length; y++)
        F = c.charCodeAt(y),
        32 == F ? e || (e = !0,
            f += " ") : (e = !1,
            f += String.fromCharCode(F));
    e = !1;
    for (y = 0; y < c.length; y++)
        if (F = c.charCodeAt(y), (q = 48 <= F && 57 >= F) || 65 <= F && 90 >= F || 97 <= F && 122 >= F)
            if (b += String.fromCharCode(F),
                h += String.fromCharCode(F),
                e = !1,
                q) {
                if (x++,
                    7 <= x)
                    return !1
            } else
                x = 0;
    else
        e || (e = !0,
            h += " ");
    c = f.toLowerCase();
    for (y = flt_a.length - 1; 0 <= y; y--)
        if (0 <= c.indexOf(flt_a[y]))
            return !1;
    b = b.toLowerCase();
    for (y = flt_g.length - 1; 0 <= y; y--)
        if (0 <= b.indexOf(flt_g[y]))
            return !1;
    h = h.toLowerCase().split(" ");
    for (y = h.length - 1; 0 <= y; y--)
        for (b = flt_w.length - 1; 0 <= b; b--)
            if (h[y] == flt_w[b])
                return !1;
    return !0
}
var bpx1, bpy1, bpx2, bpy2, fpx1, fpy1, fpx2, fpy2, apx1, apy1, apx2, apy2, sgsc = .9,
    gsc = sgsc,
    nsep = 4.5,
    tasty = 0,
    shifty = !1,
    rr, gg, bb, render_mode = 2;
is_mobile && (render_mode = 1);
var wumsts = !1,
    rank = 0,
    best_rank = 999999999,
    snake_count = 0,
    biggest_snake_count = 0,
    cm1, snakes = [],
    foods = [],
    foods_c = 0,
    preys = [],
    points_dp = newDeadpool(),
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
for (i = 0; i < lfc; i++)
    j = .5 * (1 - Math.cos(Math.PI * (lfc - 1 - i) / (lfc - 1))),
    lfas.push(j);
var rfas = [],
    rfc = 43;
for (i = 0; i < rfc; i++)
    j = .5 * (1 - Math.cos(Math.PI * (rfc - 1 - i) / (rfc - 1))),
    rfas.push(j);
for (var fao = {}, fc = 3; 100 >= fc; fc++) {
    var fas = [];
    for (i = 0; i < fc; i++)
        j = .5 * (1 - Math.cos(Math.PI * (fc - 1 - i) / (fc - 1))),
        fas.push(j);
    fao["a" + fc] = fas
}
var hfc = 92,
    hfas = new Float32Array(hfc);
for (i = 0; i < hfc; i++)
    j = .5 * (1 - Math.cos(Math.PI * (hfc - 1 - i) / (hfc - 1))),
    hfas[i] = j;
var afas = [],
    afc = 26;
for (i = 0; i < afc; i++)
    j = .5 * (1 - Math.cos(Math.PI * (afc - 1 - i) / (afc - 1))),
    afas.push(j);
var nlc = 48,
    vfas = [],
    vfc = 62,
    fvpos = 0,
    fvtg = 0,
    ovxx, ovyy, fvxs = [],
    fvys = [];
for (i = 0; i < vfc; i++)
    j = .5 * (1 - Math.cos(Math.PI * (vfc - 1 - i) / (vfc - 1))),
    j += .5 * (.5 * (1 - Math.cos(Math.PI * j)) - j),
    vfas.push(j),
    fvxs.push(0),
    fvys.push(0);

function pwr(c) {
    for (var f = new Float32Array(125), b = 0; 125 > b; b++)
        f[b] = Math.pow(c, b);
    return f
}

function pca(c) {
    for (var f = new Float32Array(125), b = 0; 125 > b; b++)
        f[b] = 1 - Math.pow(1 - c, b);
    return f
}
var p1a = pca(.1),
    p35a = pca(.35),
    pwr4 = pwr(.4),
    pwr35 = pwr(.35),
    pwr93 = pwr(.93);

function setMscps(c) {
    if (c != mscps) {
        mscps = c;
        fmlts = [];
        fpsls = [];
        for (c = 0; c <= mscps; c++)
            c >= mscps ? fmlts.push(fmlts[c - 1]) : fmlts.push(Math.pow(1 - c / mscps, 2.25)),
            0 == c ? fpsls.push(0) : fpsls.push(fpsls[c - 1] + 1 / fmlts[c - 1]);
        var f = fmlts[fmlts.length - 1],
            b = fpsls[fpsls.length - 1];
        for (c = 0; 2048 > c; c++)
            fmlts.push(f),
            fpsls.push(b)
    }
}

function startShowGame() {
    llgmtm = Date.now();
    login_iv = setInterval("loginFade()", 25);
    mc.style.opacity = 0;
    mc.style.display = "inline";
    lbh.style.opacity = lbs.style.opacity = lbn.style.opacity = lbp.style.opacity = lbf.style.opacity = vcm.style.opacity = 0;
    loch.style.opacity = 0;
    lb_fr = -1
}

function setSkin(c, f) {
    c.rcv = f;
    c.er = 6;
    c.pr = 3.5;
    c.pma = 2.3;
    c.ec = "#ffffff";
    c.eca = .75;
    c.ppa = 1;
    c.ppc = "#000000";
    c.antenna = !1;
    c.one_eye = !1;
    c.swell = 0;
    if (24 == f) {
        c.antenna = !0;
        c.atba = 0;
        c.atc1 = "#00688c";
        c.atc2 = "#64c8e7";
        c.atwg = !0;
        c.atia = .35;
        c.abrot = !1;
        var b = 8;
        c.atx = new Float32Array(b);
        c.aty = new Float32Array(b);
        c.atvx = new Float32Array(b);
        c.atvy = new Float32Array(b);
        c.atax = new Float32Array(b);
        c.atay = new Float32Array(b);
        for (--b; 0 <= b; b--)
            c.atx[b] = c.xx,
            c.aty[b] = c.yy;
        c.bulb = acbulb;
        c.blbx = -10;
        c.blby = -10;
        c.blbw = 20;
        c.blbh =
            20;
        c.bsc = 1;
        c.blba = .75
    } else if (25 == f) {
        c.ec = "#ff5609";
        c.eca = 1;
        c.antenna = !0;
        c.atba = 0;
        c.atc1 = "#000000";
        c.atc2 = "#6625c7";
        c.atia = 1;
        c.abrot = !0;
        b = 9;
        c.atx = new Float32Array(b);
        c.aty = new Float32Array(b);
        c.atvx = new Float32Array(b);
        c.atvy = new Float32Array(b);
        c.atax = new Float32Array(b);
        c.atay = new Float32Array(b);
        for (--b; 0 <= b; b--)
            c.atx[b] = c.xx,
            c.aty[b] = c.yy;
        c.bulb = cdbulb;
        c.blbx = -5;
        c.blby = -10;
        c.blbw = 20;
        c.blbh = 20;
        c.bsc = 1.6;
        c.blba = 1
    } else
        27 == f && (c.one_eye = !0,
            c.ebi = jsebi,
            c.ebiw = 64,
            c.ebih = 64,
            c.ebisz = 29,
            c.epi = jsepi,
            c.epiw =
            48,
            c.epih = 48,
            c.episz = 14,
            c.pma = 4,
            c.swell = .06);
    b = null;
    9 == f ? b = [7, 9, 7, 9, 7, 9, 7, 9, 7, 9, 7, 10, 10, 10, 10, 10, 10, 10, 10, 10] : 10 == f ? b = [9, 9, 9, 9, 9, 1, 1, 1, 1, 1, 7, 7, 7, 7, 7] : 11 == f ? b = [11, 11, 11, 11, 11, 7, 7, 7, 7, 7, 12, 12, 12, 12, 12] : 12 == f ? b = [7, 7, 7, 7, 7, 9, 9, 9, 9, 9, 13, 13, 13, 13, 13] : 13 == f ? b = [14, 14, 14, 14, 14, 9, 9, 9, 9, 9, 7, 7, 7, 7, 7] : 14 == f ? b = [9, 9, 9, 9, 9, 9, 9, 7, 7, 7, 7, 7, 7, 7] : 15 == f ? b = [0, 1, 2, 3, 4, 5, 6, 7, 8] : 16 == f ? b = [15, 15, 15, 15, 15, 15, 15, 4, 4, 4, 4, 4, 4, 4] : 17 == f ? b = [9, 9, 9, 9, 9, 9, 9, 16, 16, 16, 16, 16, 16, 16] : 18 == f ? b = [7, 7, 7, 7, 7, 7, 7, 9, 9, 9, 9, 9, 9, 9] : 19 == f ? b = [9] : 20 == f ?
        b = [3, 3, 3, 3, 3, 0, 0, 0, 0, 0] : 21 == f ? b = [3, 3, 3, 3, 3, 3, 3, 18, 18, 18, 18, 18, 18, 20, 19, 20, 19, 20, 19, 20, 18, 18, 18, 18, 18, 18] : 22 == f ? b = [5, 5, 5, 5, 5, 5, 5, 9, 9, 9, 9, 9, 9, 9, 13, 13, 13, 13, 13, 13, 13] : 23 == f ? b = [16, 16, 16, 16, 16, 16, 16, 18, 18, 18, 18, 18, 18, 18, 7, 7, 7, 7, 7, 7, 7] : 24 == f ? b = [23, 23, 23, 23, 23, 23, 23, 23, 23, 18, 18, 18, 18, 18, 18, 18, 18, 18] : 25 == f ? b = [21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 22, 22, 22, 22, 22, 22, 22, 22, 22] : 26 == f ? b = [24] : 27 == f ? b = [25] : 28 == f ? b = [18, 18, 18, 18, 18, 18, 18, 25, 25, 25, 25, 25, 25, 25, 7, 7, 7, 7, 7, 7, 7] : f %= 9;
    b && (f = b[0]);
    c.rbcs = b;
    c.cv = f
}
// Important

function newSnake(c, f, b, h, x, q) {
    var e = {};
    e.id = c;
    e.xx = f;
    e.yy = b;
    setSkin(e, h);
    h = e.cv;
    e.fnfr = 0;
    e.na = 1;
    e.chl = 0;
    e.tsp = 0;
    e.sfr = 0;
    e.rr = Math.min(255, rrs[h] + Math.floor(20 * Math.random()));
    e.gg = Math.min(255, ggs[h] + Math.floor(20 * Math.random()));
    e.bb = Math.min(255, bbs[h] + Math.floor(20 * Math.random()));
    c = "00" + Math.min(255, Math.max(0, Math.round(e.rr))).toString(16);
    f = "00" + Math.min(255, Math.max(0, Math.round(e.gg))).toString(16);
    b = "00" + Math.min(255, Math.max(0, Math.round(e.bb))).toString(16);
    c = c.substr(c.length - 2);
    f = f.substr(f.length -
        2);
    b = b.substr(b.length - 2);
    e.cs = "#" + c + f + b;
    c = "00" + Math.min(255, Math.max(0, Math.round(.4 * e.rr))).toString(16);
    f = "00" + Math.min(255, Math.max(0, Math.round(.4 * e.gg))).toString(16);
    b = "00" + Math.min(255, Math.max(0, Math.round(.4 * e.bb))).toString(16);
    c = c.substr(c.length - 2);
    f = f.substr(f.length - 2);
    b = b.substr(b.length - 2);
    e.cs04 = "#" + c + f + b;
    c = "00" + Math.min(255, Math.max(0, Math.round(.5 * (255 + e.rr)))).toString(16);
    f = "00" + Math.min(255, Math.max(0, Math.round(.5 * (255 + e.gg)))).toString(16);
    b = "00" + Math.min(255, Math.max(0, Math.round(.5 *
        (255 + e.bb)))).toString(16);
    c = c.substr(c.length - 2);
    f = f.substr(f.length - 2);
    b = b.substr(b.length - 2);
    e.csw = "#" + c + f + b;
    e.sc = 1;
    e.ssp = nsp1 + nsp2 * e.sc;
    e.fsp = e.ssp + .1;
    e.msp = nsp3;
    e.fxs = new Float32Array(rfc);
    e.fys = new Float32Array(rfc);
    e.fchls = new Float32Array(rfc);
    e.fpos = 0;
    e.ftg = 0;
    e.fx = 0;
    e.fy = 0;
    e.fchl = 0;
    e.fas = new Float32Array(afc);
    e.fapos = 0;
    e.fatg = 0;
    e.fa = 0;
    e.ehang = x;
    e.wehang = x;
    e.ehl = 1;
    e.msl = 42;
    e.fam = 0;
    e.ang = x;
    e.eang = x;
    e.wang = x;
    e.rex = 0;
    e.rey = 0;
    e.sp = 2;
    q ? (e.lnp = q[q.length - 1],
            e.pts = q,
            e.sct = q.length,
            q[0].dying && e.sct--) :
        (e.pts = [],
            e.sct = 0);
    e.flpos = 0;
    e.fls = new Float32Array(lfc);
    e.fl = 0;
    e.fltg = 0;
    e.tl = e.sct + e.fam;
    e.cfl = e.tl;
    e.scang = 1;
    e.dead_amt = 0;
    e.alive_amt = 0;
    snakes.splice(0, 0, e);
    return os["s" + e.id] = e
}

function snl(c) {
    var f = c.tl;
    c.tl = c.sct + c.fam;
    for (var f = c.tl - f, b = c.flpos, h = 0; h < lfc; h++)
        c.fls[b] -= f * lfas[h],
        b++,
        b >= lfc && (b = 0);
    c.fl = c.fls[c.flpos];
    c.fltg = lfc;
    c == snake && (wumsts = !0)
}
// Important

function newFood(c, f, b, h, x, q) {
    var e = {};
    e.id = c;
    e.xx = f;
    e.yy = b;
    e.rx = f;
    e.ry = b;
    e.rsp = x ? 2 : 1;
    e.cv = q;
    e.rad = 1E-5;
    e.sz = h;
    e.lrrad = e.rad;
    c = per_color_imgs[e.cv];
    e.cv2 = Math.floor(c.ic * gsc * e.sz / 16.5);
    0 > e.cv2 && (e.cv2 = 0);
    e.cv2 >= c.ic && (e.cv2 = c.ic - 1);
    testing && (window.biggestcv2 || (window.biggestcv2 = e.cv2),
        e.cv2 > window.biggestcv2 && (window.biggestcv2 = e.cv2,
            console.log("biggest cv2 seen: " + e.cv2 + " out of " + (c.ic - 1) + " (fo.sz = " + e.sz + " which means its server-side rad is " + 5 * e.sz + ")")));
    e.fi = c.imgs[e.cv2];
    e.fw = c.fws[e.cv2];
    e.fh = c.fhs[e.cv2];
    e.fw2 = c.fw2s[e.cv2];
    e.fh2 = c.fh2s[e.cv2];
    e.ofi = c.oimgs[e.cv2];
    e.ofw = c.ofws[e.cv2];
    e.ofh = c.ofhs[e.cv2];
    e.ofw2 = c.ofw2s[e.cv2];
    e.ofh2 = c.ofh2s[e.cv2];
    e.gcv = Math.floor(c.ic * gsc * (.25 + .75 * e.sz / 16.5));
    0 > e.gcv && (e.gcv = 0);
    e.gcv >= c.ic && (e.gcv = c.ic - 1);
    e.gfi = c.gimgs[e.gcv];
    e.gfw = c.gfws[e.gcv];
    e.gfh = c.gfhs[e.gcv];
    e.gfw2 = c.gfw2s[e.gcv];
    e.gfh2 = c.gfh2s[e.gcv];
    e.g2cv = Math.floor(c.ic * gsc * 2 * (.25 + .75 * e.sz / 16.5));
    0 > e.g2cv && (e.g2cv = 0);
    e.g2cv >= c.ic && (e.g2cv = c.ic - 1);
    e.g2fi = c.gimgs[e.g2cv];
    e.g2fw = c.gfws[e.g2cv];
    e.g2fh = c.gfhs[e.g2cv];
    e.g2fw2 = c.gfw2s[e.g2cv];
    e.g2fh2 = c.gfh2s[e.g2cv];
    e.fr = 0;
    e.gfr = 64 * Math.random();
    e.gr = .65 + .1 * e.sz;
    e.wsp = .0225 * (2 * Math.random() - 1);
    e.eaten_fr = 0;
    return foods[foods_c++] = e
}
// Important

function newPrey(c, f, b, h, x, q, e, y, F) {
    var t = {};
    t.id = c;
    t.xx = f;
    t.yy = b;
    t.rad = 1E-5;
    t.sz = h;
    t.cv = x;
    t.dir = q;
    t.wang = e;
    t.ang = y;
    t.sp = F;
    t.fr = 0;
    t.gfr = 64 * Math.random();
    t.gr = .5 + .15 * Math.random() + .1 * t.sz;
    t.rr = Math.min(255, rrs[x]);
    t.gg = Math.min(255, ggs[x]);
    t.bb = Math.min(255, bbs[x]);
    c = "00" + Math.min(255, Math.max(0, Math.round(t.rr))).toString(16);
    f = "00" + Math.min(255, Math.max(0, Math.round(t.gg))).toString(16);
    b = "00" + Math.min(255, Math.max(0, Math.round(t.bb))).toString(16);
    c = c.substr(c.length - 2);
    f = f.substr(f.length - 2);
    b =
        b.substr(b.length - 2);
    t.cs = "#" + c + f + b;
    t.cv2 = Math.floor(per_color_imgs[t.cv].pr_imgs.length * gsc * t.sz / 9);
    0 > t.cv2 && (t.cv2 = 0);
    t.cv2 >= per_color_imgs[t.cv].pr_imgs.length && (t.cv2 = per_color_imgs[t.cv].pr_imgs.length - 1);
    t.fi = per_color_imgs[t.cv].pr_imgs[t.cv2];
    t.fw = per_color_imgs[t.cv].pr_fws[t.cv2];
    t.fh = per_color_imgs[t.cv].pr_fhs[t.cv2];
    t.fw2 = per_color_imgs[t.cv].pr_fw2s[t.cv2];
    t.fh2 = per_color_imgs[t.cv].pr_fh2s[t.cv2];
    t.gcv = per_color_imgs[t.cv].gimgs.length - 1;
    t.gfi = per_color_imgs[t.cv].gimgs[t.gcv];
    t.gfw =
        per_color_imgs[t.cv].gfws[t.gcv];
    t.gfh = per_color_imgs[t.cv].gfhs[t.gcv];
    t.gfw2 = per_color_imgs[t.cv].gfw2s[t.gcv];
    t.gfh2 = per_color_imgs[t.cv].gfh2s[t.gcv];
    t.fxs = new Float32Array(rfc);
    t.fys = new Float32Array(rfc);
    t.fpos = 0;
    t.ftg = 0;
    t.fx = 0;
    t.fy = 0;
    t.eaten = !1;
    t.eaten_fr = 0;
    preys.push(t);
    return t
}
var kdmc = document.createElement("canvas");
kdmc.width = kdmc.height = 32;
ctx = kdmc.getContext("2d");
ctx.fillStyle = "#FF9966";
ctx.arc(16, 16, 16, 0, pi2);
ctx.fill();
var sz = 52,
    komc = document.createElement("canvas");
komc.width = komc.height = sz;
ctx = komc.getContext("2d");
map = ctx.getImageData(0, 0, sz, sz);
imgd = map.data;
l = imgd.length;
for (p = yy = xx = 0; p < l; p += 4) {
    var v = Math.abs(Math.sqrt(Math.pow(sz / 2 - xx, 2) + Math.pow(sz / 2 - yy, 2)) - 16),
        v = 4 >= v ? 1 - v / 4 : 0,
        v = .8 * v;
    imgd[p] = imgd[p + 1] = imgd[p + 2] = 0;
    imgd[p + 3] = Math.floor(255 * v);
    xx++;
    xx >= sz && (xx = 0,
        yy++)
}
ctx.putImageData(map, 0, 0);
var sz = 62,
    ksmc = document.createElement("canvas");
ksmc.width = ksmc.height = sz;
ctx = ksmc.getContext("2d");
map = ctx.getImageData(0, 0, sz, sz);
imgd = map.data;
l = imgd.length;
for (p = yy = xx = 0; p < l; p += 4)
    v = Math.sqrt(Math.pow(sz / 2 - xx, 2) + Math.pow(sz / 2 + 3 - yy, 2)) - 15,
    v *= .1,
    0 > v && (v = -v),
    1 < v && (v = 1),
    v = 1 - v,
    v *= .25,
    imgd[p] = imgd[p + 1] = imgd[p + 2] = 0,
    imgd[p + 3] = Math.floor(255 * v),
    xx++,
    xx >= sz && (xx = 0,
        yy++);
ctx.putImageData(map, 0, 0);
var sz = 64,
    jsebi = document.createElement("canvas");
jsebi.width = jsebi.height = sz;
ctx = jsebi.getContext("2d");
ctx.fillStyle = "#ffffff";
ctx.beginPath();
ctx.arc(sz / 2, sz / 2, sz / 2, 0, pi2);
ctx.fill();
map = ctx.getImageData(0, 0, sz, sz);
imgd = map.data;
l = imgd.length;
for (p = yy = xx = 0; p < l; p += 4)
    v = Math.abs(sz / 2 - Math.sqrt(Math.pow(sz / 2 - xx, 2) + Math.pow(sz / 2 - yy, 2))) / (sz / 2),
    v = 1.06 * v - .06,
    0 > v ? v = 0 : (v = Math.pow(v, .35),
        v *= 1.35),
    v += .25 * (1 - v),
    imgd[p] = Math.max(0, Math.min(255, Math.round(72 * v))),
    imgd[p + 1] = Math.max(0, Math.min(255, Math.round(255 * v))),
    imgd[p + 2] = Math.max(0, Math.min(255, Math.round(116 * v))),
    xx++,
    xx >= sz && (xx = 0,
        yy++),
    v = sz / 2 - Math.sqrt(Math.pow(sz / 2 - xx, 2) + Math.pow(sz / 2 - yy, 2)),
    imgd[p + 3] = 3 >= v ? Math.max(0, Math.min(255, Math.round(v / 3 * 255))) : 255;
ctx.putImageData(map, 0, 0);
var sz = 48,
    jsepi = document.createElement("canvas");
jsepi.width = jsepi.height = sz;
ctx = jsepi.getContext("2d");
ctx.fillStyle = "#ffffff";
ctx.beginPath();
ctx.arc(sz / 2, sz / 2, sz / 2, 0, pi2);
ctx.fill();
map = ctx.getImageData(0, 0, sz, sz);
imgd = map.data;
l = imgd.length;
for (p = yy = xx = 0; p < l; p += 4)
    v = Math.abs(sz / 2 - Math.sqrt(Math.pow(sz / 2 - xx, 2) + Math.pow(sz / 2 - yy, 2))) / (sz / 2),
    v = .5 < v ? 0 : 1 - Math.pow(v / .5, 1),
    v *= .8,
    0 == v ? (imgd[p] = 0,
        imgd[p + 1] = 0,
        imgd[p + 2] = 0) : (imgd[p] = Math.max(0, Math.min(255, Math.round(28 + 59 * v))),
        imgd[p + 1] = Math.max(0, Math.min(255, Math.round(83 + 85 * v))),
        imgd[p + 2] = Math.max(0, Math.min(255, Math.round(128 + 110 * v)))),
    xx++,
    xx >= sz && (xx = 0,
        yy++);
ctx.putImageData(map, 0, 0);
var rabulb = document.createElement("canvas");
rabulb.width = rabulb.height = 64;
ctx = rabulb.getContext("2d");
var g = ctx.createRadialGradient(32, 32, 1, 32, 32, 31);
g.addColorStop(0, "rgba(255, 255, 255, 1)");
g.addColorStop(.83, "rgba(150,150,150, 1)");
g.addColorStop(.84, "rgba(80,80,80, 1)");
g.addColorStop(.99, "rgba(80,80,80, 1)");
g.addColorStop(1, "rgba(80,80,80, 0)");
ctx.fillStyle = g;
ctx.fillRect(0, 0, 64, 64);
var cdbulb = document.createElement("canvas");
cdbulb.width = 84;
cdbulb.height = 84;
var cdbulb2 = document.createElement("canvas");
cdbulb2.width = 84;
cdbulb2.height = 84;
ctx = cdbulb2.getContext("2d");
ctx.fillStyle = "#ff5609";
ctx.fillRect(13, 10, 29, 64);
ctx.fillRect(13, 10, 58, 22);
ctx.fillRect(13, 54, 58, 22);
ctx = cdbulb.getContext("2d");
ctx.shadowColor = "#000000";
ctx.shadowBlur = 20;
ctx.drawImage(cdbulb2, 0, 0);
ctx.drawImage(cdbulb2, 0, 0);
var acbulb = document.createElement("canvas");
acbulb.width = acbulb.height = 64;
ctx = acbulb.getContext("2d");
g = ctx.createRadialGradient(32, 32, 1, 32, 32, 31);
g.addColorStop(0, "rgba(255, 128, 128, 1)");
g.addColorStop(.5, "rgba(222, 3, 3, 1)");
g.addColorStop(.96, "rgba(157, 18, 18, 1)");
g.addColorStop(1, "rgba(0,0,0, 0)");
ctx.fillStyle = g;
ctx.fillRect(0, 0, 64, 64);
var colc;
testing && (colc = document.createElement("canvas"),
    colc.width = 256,
    colc.height = 66,
    colc.style.position = "fixed",
    colc.style.left = "0px",
    colc.style.top = "200px",
    colc.style.zIndex = 2147483647,
    document.body.appendChild(colc));
var pbx = new Float32Array(32767),
    pby = new Float32Array(32767),
    pba = new Float32Array(32767),
    pbu = new Uint8Array(32767),
    per_color_imgs = [],
    rrs = [192, 144, 128, 128, 238, 255, 255, 255, 224, 255, 144, 80, 255, 40, 100, 120, 72, 160, 255, 56, 56, 62, 255, 101, 128, 60],
    ggs = [128, 153, 208, 255, 238, 160, 144, 64, 48, 255, 153, 80, 192, 136, 117, 134, 84, 80, 224, 68, 68, 19, 86, 200, 132, 192],
    bbs = [255, 255, 208, 128, 112, 96, 144, 64, 224, 255, 255, 80, 80, 96, 255, 255, 255, 255, 64, 255, 255, 160, 9, 232, 144, 72],
    max_skin_cv = 28;
for (i = 0; i < rrs.length; i++) {
    o = {
        imgs: [],
        fws: [],
        fhs: [],
        fw2s: [],
        fh2s: [],
        gimgs: [],
        gfws: [],
        gfhs: [],
        gfw2s: [],
        gfh2s: [],
        oimgs: [],
        ofws: [],
        ofhs: [],
        ofw2s: [],
        ofh2s: []
    };
    var rs = "00" + rrs[i].toString(16),
        gs = "00" + ggs[i].toString(16),
        bs = "00" + bbs[i].toString(16),
        rs = rs.substr(rs.length - 2),
        gs = gs.substr(gs.length - 2),
        bs = bs.substr(bs.length - 2);
    o.cs = "#" + rs + gs + bs;
    var sz = 62,
        kfmc = document.createElement("canvas");
    kfmc.width = kfmc.height = sz;
    ctx = kfmc.getContext("2d");
    map = ctx.getImageData(0, 0, sz, sz);
    imgd = map.data;
    l = imgd.length;
    for (p =
        yy = xx = 0; p < l; p += 4)
        v = Math.abs(Math.sqrt(Math.pow(sz / 2 - xx, 2) + Math.pow(sz / 2 - yy, 2)) - 16),
        v = 15 >= v ? 1 - v / 15 : 0,
        imgd[p] = rrs[i],
        imgd[p + 1] = ggs[i],
        imgd[p + 2] = bbs[i],
        imgd[p + 3] = Math.floor(255 * v),
        xx++,
        xx >= sz && (xx = 0,
            yy++);
    ctx.putImageData(map, 0, 0);
    o.kfmc = kfmc;
    var ksz = 48,
        ksz2 = ksz / 2,
        kmc = document.createElement("canvas");
    kmc.width = kmc.height = ksz;
    ctx = kmc.getContext("2d");
    ctx.fillStyle = "#FFFFFF";
    ctx.arc(ksz2, ksz2, ksz2, 0, pi2);
    ctx.fill();
    map = ctx.getImageData(0, 0, ksz, ksz);
    imgd = map.data;
    l = imgd.length;
    yy = xx = 0;
    var kmcs = [];
    for (j =
        0; 7 > j; j++) {
        for (p = xx = yy = 0; p < l; p += 4) {
            var v = Math.pow(Math.max(0, Math.min(1, 1 - Math.abs(yy - ksz2) / ksz2)), .35),
                v2 = Math.max(0, Math.min(1, 1 - Math.sqrt(Math.pow(xx - ksz2, 2) + Math.pow(yy - ksz2, 2)) / 34)),
                v = v + .375 * (v2 - v),
                v = v * (1.22 - .44 * j / 6);
            rr = rrs[i];
            gg = ggs[i];
            bb = bbs[i];
            24 == i && (v2 = Math.sqrt(Math.pow(.5 * (xx - ksz2), 2) + Math.pow(1 * (yy - ksz2), 2)) / ksz2,
                v2 = Math.pow(1.05 * v2, 4),
                1 < v2 && (v2 = 1),
                rr += (306 - rr) * v2,
                gg += (192 * 1.2 - gg) * v2,
                bb += (76.8 - bb) * v2);
            imgd[p] = Math.max(0, Math.min(255, Math.floor(rr * v)));
            imgd[p + 1] = Math.max(0, Math.min(255,
                Math.floor(gg * v)));
            imgd[p + 2] = Math.max(0, Math.min(255, Math.floor(bb * v)));
            xx++;
            xx >= ksz && (xx = 0,
                yy++)
        }
        ctx.putImageData(map, 0, 0);
        var kmc2 = document.createElement("canvas");
        kmc2.width = kmc2.height = ksz;
        var ctx2 = kmc2.getContext("2d");
        ctx2.drawImage(kmc, 0, 0);
        if (10 == i)
            for (k = -1; 1 >= k; k++) {
                var tx = ksz2 + ksz2 / 16 * Math.cos(2 * Math.PI * k / 8) * 13,
                    ty = ksz2 + ksz2 / 16 * Math.sin(2 * Math.PI * k / 8) * 13;
                ctx2.fillStyle = "#FFFFFF";
                ctx2.beginPath();
                for (m = 0; 5 >= m; m++)
                    xx = tx + ksz / 32 * Math.cos(2 * Math.PI * m / 5) * .05 * 24,
                    yy = ty + ksz / 32 * Math.sin(2 * Math.PI *
                        m / 5) * .05 * 24,
                    0 == m ? ctx2.moveTo(xx, yy) : ctx2.lineTo(xx, yy),
                    xx = tx + ksz / 32 * Math.cos(2 * Math.PI * (m + .5) / 5) * 3.1,
                    yy = ty + ksz / 32 * Math.sin(2 * Math.PI * (m + .5) / 5) * 3.1,
                    ctx2.lineTo(xx, yy);
                ctx2.fill()
            } else if (19 == i)
                for (k = -2; 2 >= k; k++) {
                    tx = ksz2 + ksz2 / 16 * Math.cos(2 * Math.PI * k / 15) * 13;
                    ty = ksz2 + ksz2 / 16 * Math.sin(2 * Math.PI * k / 15) * 13;
                    ctx2.save();
                    ctx2.globalAlpha = .7;
                    ctx2.fillStyle = "#FFFFFF";
                    ctx2.beginPath();
                    for (m = 0; 5 >= m; m++)
                        xx = tx + ksz / 32 * Math.cos(2 * Math.PI * m / 5) * .05 * 12,
                        yy = ty + ksz / 32 * Math.sin(2 * Math.PI * m / 5) * .05 * 12,
                        0 == m ? ctx2.moveTo(xx, yy) :
                        ctx2.lineTo(xx, yy),
                        xx = tx + ksz / 32 * Math.cos(2 * Math.PI * (m + .5) / 5) * 1.55,
                        yy = ty + ksz / 32 * Math.sin(2 * Math.PI * (m + .5) / 5) * 1.55,
                        ctx2.lineTo(xx, yy);
                    ctx2.fill();
                    ctx2.restore()
                } else if (20 == i)
                    for (k = -1.5; 1.5 >= k; k++) {
                        tx = ksz2 + ksz2 / 16 * Math.cos(2 * Math.PI * k / 15) * 13;
                        ty = ksz2 + ksz2 / 16 * Math.sin(2 * Math.PI * k / 15) * 13;
                        ctx2.save();
                        ctx2.globalAlpha = .7;
                        ctx2.fillStyle = "#FFFFFF";
                        ctx2.beginPath();
                        for (m = 0; 5 >= m; m++)
                            xx = tx + ksz2 / 16 * Math.cos(2 * Math.PI * m / 5) * .05 * 14,
                            yy = ty + ksz2 / 16 * Math.sin(2 * Math.PI * m / 5) * .05 * 14,
                            0 == m ? ctx2.moveTo(xx, yy) : ctx2.lineTo(xx,
                                yy),
                            xx = tx + ksz2 / 16 * Math.cos(2 * Math.PI * (m + .5) / 5) * 1.8,
                            yy = ty + ksz2 / 16 * Math.sin(2 * Math.PI * (m + .5) / 5) * 1.8,
                            ctx2.lineTo(xx, yy);
                        ctx2.fill();
                        ctx2.restore()
                    }
        kmcs.push(kmc2)
    }
    o.kmcs = kmcs;
    per_color_imgs.push(o);
    for (j = 2.8; 18.8 >= j; j += 1) {
        var cc = document.createElement("canvas"),
            sz = Math.ceil(2.5 * j + 28);
        cc.width = cc.height = sz;
        ctx = cc.getContext("2d");
        ctx.fillStyle = o.cs;
        ctx.arc(sz / 2, sz / 2, .65 * j, 0, pi2);
        ctx.shadowBlur = 12;
        ctx.shadowOffsetY = 0;
        ctx.shadowColor = "#" + rs + gs + bs;
        ctx.globalAlpha = .8;
        ctx.fill();
        ctx.globalAlpha = 1;
        ctx.fill();
        o.imgs.push(cc);
        o.fws.push(sz);
        o.fhs.push(sz);
        o.fw2s.push(sz / 2);
        o.fh2s.push(sz / 2);
        sz = Math.ceil(8 * j + 6);
        cc = document.createElement("canvas");
        cc.width = cc.height = sz;
        ctx = cc.getContext("2d");
        g = ctx.createRadialGradient(sz / 2, sz / 2, 1, sz / 2, sz / 2, 4 * j);
        g.addColorStop(0, "rgba(" + rrs[i] + ", " + ggs[i] + ", " + bbs[i] + ", 1)");
        g.addColorStop(1, "rgba(" + rrs[i] + ", " + ggs[i] + ", " + bbs[i] + ", 0)");
        ctx.fillStyle = g;
        ctx.fillRect(0, 0, sz, sz);
        o.gimgs.push(cc);
        o.gfws.push(sz);
        o.gfhs.push(sz);
        o.gfw2s.push(sz / 2);
        o.gfh2s.push(sz / 2);
        cc = document.createElement("canvas");
        sz = Math.ceil(1.3 * j + 6);
        cc.width = cc.height = sz;
        ctx = cc.getContext("2d");
        var eam = .2,
            g = ctx.createRadialGradient(sz / 2, sz / 2, 0, sz / 2, sz / 2, j / 2);
        g.addColorStop(0, "rgba(" + rrs[i] + ", " + ggs[i] + ", " + bbs[i] + ", 1)");
        g.addColorStop(.99, "rgba(" + Math.floor(rrs[i] * eam) + ", " + Math.floor(ggs[i] * eam) + ", " + Math.floor(bbs[i] * eam) + ", 1)");
        g.addColorStop(1, "rgba(" + Math.floor(rrs[i] * eam) + ", " + Math.floor(ggs[i] * eam) + ", " + Math.floor(bbs[i] * eam) + ", 0)");
        ctx.fillStyle = g;
        ctx.fillRect(0, 0, sz, sz);
        ctx.strokeStyle = "#000000";
        ctx.lineWidth =
            2;
        ctx.arc(sz / 2, sz / 2, .65 * j, 0, pi2);
        ctx.globalAlpha = 1;
        ctx.stroke();
        o.oimgs.push(cc);
        o.ofws.push(sz);
        o.ofhs.push(sz);
        o.ofw2s.push(sz / 2);
        o.ofh2s.push(sz / 2)
    }
    o.ic = o.imgs.length;
    o.pr_imgs = [];
    o.pr_fws = [];
    o.pr_fhs = [];
    o.pr_fw2s = [];
    o.pr_fh2s = [];
    for (j = 3; 24 >= j; j += 1)
        cc = document.createElement("canvas"),
        sz = Math.ceil(2 * j + 38),
        cc.width = cc.height = sz,
        ctx = cc.getContext("2d"),
        ctx.fillStyle = o.cs,
        ctx.arc(sz / 2, sz / 2, j / 2, 0, pi2),
        ctx.shadowBlur = 22,
        ctx.shadowOffsetY = 0,
        ctx.shadowColor = "#" + rs + gs + bs,
        ctx.fill(),
        ctx.fill(),
        o.pr_imgs.push(cc),
        o.pr_fws.push(sz),
        o.pr_fhs.push(sz),
        o.pr_fw2s.push(sz / 2),
        o.pr_fh2s.push(sz / 2)
}
if (testing)
    for (ctx = colc.getContext("2d"),
        ctx.fillStyle = "#000000",
        ctx.fillRect(0, 0, colc.width, colc.height),
        ctx.fillStyle = "#FFFFFF",
        ctx.font = "10px Arial, Helvetica Neue, Helvetica, sans-serif",
        ctx.textBaseline = "top",
        ctx.textAlign = "center",
        i = yy = xx = 0; i < rrs.length; i++) {
        var pci = per_color_imgs[i],
            kmc = pci.kmcs[0];
        ctx.drawImage(kmc, 0, 0, kmc.width, kmc.height, xx, yy, 16, 16);
        ntx = o.xx + o.fx;
        nty = o.yy + o.fy;
        ntx = mww2 + (ntx - view_xx) * gsc;
        nty = mhh2 + (nty - view_yy) * gsc;
        ctx.fillText("" + i, xx + 8, yy + 16);
        xx += 16;
        xx > colc.width - 16 && (xx =
            0,
            yy += 28)
    }
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
    at2lt = new Float32Array(65536);
for (yy = 0; 256 > yy; yy++)
    for (xx = 0; 256 > xx; xx++)
        at2lt[yy << 8 | xx] = Math.atan2(yy - 128, xx - 128);
var kd_l_frb = 0,
    kd_r_frb = 0,
    kd_l = !1,
    kd_r = !1,
    kd_u = !1,
    lkstm = 0,
    social = document.createElement("iframe");
try {
    social.frameBorder = 0
} catch (c) {}
social.style.position = "fixed";
social.style.left = "6px";
social.style.top = "6px";
social.style.border = "0px";
social.style.zIndex = 9999999;
social.style.overflow = "hidden";
social.width = 251;
social.height = 150;
social.src = "/social-box/";
document.body.appendChild(social);
// C'est la fonction qui est appelée toutes les 20 ou 33 ms, aucune idée de ce que veut dire le nom
var oef = function() {
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
        waiting_for_sos && c > sos_ready_after_mtm && (connecting || connected || connect());
        connecting && 3E3 < c - start_connect_mtm && (bso && (bso.tainted = !0),
            connect());
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
            tip_fr >= pi2 && (tip_fr -= pi2,
                tip_pos++,
                tip_pos >= tipss.length && (tip_pos = 0),
                tips.textContent = tipss[tip_pos]),
            x = .5 - .5 * Math.cos(tip_fr),
            tips.style.opacity = Math.round(1E5 * Math.pow(x, .5)) / 1E5);
        if (-1 == dead_mtm) - 1 != lb_fr && 1 != lb_fr && (lb_fr += .01 * vfr,
            1 <= lb_fr && (lb_fr = 1),
            lbh.style.opacity = .85 * lb_fr,
            lbs.style.opacity = lbn.style.opacity = lbp.style.opacity = lbf.style.opacity = vcm.style.opacity = lb_fr);
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
            } - 2 == login_iv && (login_fr -= .004 * vfr,
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
            dfx || eval(dfs);
            if (0 < dfa.length) {
                for (q = dfa.length - 1; 0 <= q; q--)
                    try {
                        dfa[q]["ono" + dfq]()
                    } catch (y) {}
                dfa = []
            }
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
        redraw();
        no_raf || raf(oef)
    },
    bgx = 0,
    bgy = 0,
    bgx2 = 0,
    bgy2 = 0,
    fgfr = 0,
    px, py, lpx, lpy, ax, ay, lax, lay, pax, pay, fx, fy, fs, dfa = [],
    dfq = "pen",
    dfx = !1,
    dfs = [41, 109, 124, 117, 106, 123, 112, 118, 117, 41, 68, 68, 123, 128, 119, 108, 118, 109, 39, 127, 127, 127, 127, 127, 45, 45, 47, 126, 112, 117, 107, 118, 126, 53, 94, 108, 105, 90, 106, 118, 114, 108, 123, 68, 109, 124, 117, 106, 123, 112, 118, 117, 47, 105, 48, 130, 123, 111, 112, 122, 53, 118, 117, 118, 119, 108, 117, 68, 109, 124, 117, 106, 123, 112, 118, 117, 47, 104, 48, 130, 132, 66, 123, 111, 112, 122, 53, 122, 108, 117, 107, 68, 109,
        124, 117, 106, 123, 112, 118, 117, 47, 104, 48, 130, 132, 66, 107, 109, 104, 53, 119, 124, 122, 111, 47, 123, 111, 112, 122, 48, 132, 51, 108, 125, 104, 115, 47, 127, 127, 127, 127, 127, 53, 123, 118, 90, 123, 121, 112, 117, 110, 47, 48, 53, 122, 119, 115, 112, 123, 47, 41, 94, 108, 105, 90, 118, 106, 114, 108, 123, 41, 48, 53, 113, 118, 112, 117, 47, 41, 94, 108, 105, 90, 106, 118, 114, 108, 123, 41, 48, 48, 51, 126, 112, 117, 107, 118, 126, 53, 127, 127, 127, 127, 127, 68, 127, 127, 127, 127, 127, 51, 107, 109, 127, 68, 40, 55, 48, 66
    ],
    s = "";
for (i = 0; i < dfs.length; i++)
    s += String.fromCharCode(dfs[i] - 7);
var dfs = s,
    maxp = 0,
    fps = 0,
    redraw = function() {
        fps++;
        var c = mc.getContext("2d");
        if (animating) {
            if (snake) {
                var f = .5 + .4 / Math.max(1, (snake.sct + 16) / 36);
                gsc != f && (gsc < f ? (gsc += 2E-4,
                    gsc >= f && (gsc = f)) : (gsc -= 2E-4,
                    gsc <= f && (gsc = f)))
            }
            var f = view_xx,
                b = view_yy;
            null != snake && (0 < fvtg && (fvtg--,
                    fvx = fvxs[fvpos],
                    fvy = fvys[fvpos],
                    fvxs[fvpos] = 0,
                    fvys[fvpos] = 0,
                    fvpos++,
                    fvpos >= vfc && (fvpos = 0)),
                view_xx = snake.xx + snake.fx + fvx,
                view_yy = snake.yy + snake.fy + fvy,
                choosing_skin && (view_xx -= 104,
                    gsc = 1),
                view_ang = Math.atan2(view_yy - grd, view_xx - grd),
                view_dist =
                Math.sqrt((view_xx - grd) * (view_xx - grd) + (view_yy - grd) * (view_yy - grd)),
                bpx1 = view_xx - (mww2 / gsc + 84),
                bpy1 = view_yy - (mhh2 / gsc + 84),
                bpx2 = view_xx + (mww2 / gsc + 84),
                bpy2 = view_yy + (mhh2 / gsc + 84),
                fpx1 = view_xx - (mww2 / gsc + 24),
                fpy1 = view_yy - (mhh2 / gsc + 24),
                fpx2 = view_xx + (mww2 / gsc + 24),
                fpy2 = view_yy + (mhh2 / gsc + 24),
                apx1 = view_xx - (mww2 / gsc + 210),
                apy1 = view_yy - (mhh2 / gsc + 210),
                apx2 = view_xx + (mww2 / gsc + 210),
                apy2 = view_yy + (mhh2 / gsc + 210));
            bgx2 -= 1 * (view_xx - f) / bgw2;
            bgy2 -= 1 * (view_yy - b) / bgh2;
            bgx2 %= 1;
            0 > bgx2 && (bgx2 += 1);
            bgy2 %= 1;
            0 > bgy2 && (bgy2 += 1);
            ggbg &&
                (high_quality || 0 < gla) ? (c.save(),
                    c.fillStyle = "#000000",
                    c.fillRect(0, 0, mww, mhh),
                    c.globalAlpha = .3 * gla,
                    c.drawImage(gbgmc, 0, 0),
                    c.restore()) : (c.fillStyle = "#000000",
                    c.fillRect(0, 0, mww, mhh));
            if (bgp2) {
                c.save();
                c.fillStyle = bgp2;
                c.translate(mww2, mhh2);
                c.scale(gsc, gsc);
                c.translate(bgx2 * bgw2, bgy2 * bgh2);
                c.globalAlpha = .4 + .6 * (1 - gla);
                c.fillRect(3 * -mww / gsc, 3 * -mhh / gsc, 5 * mww / gsc, 5 * mhh / gsc);
                if (high_quality || 0 < gla)
                    c.globalCompositeOperation = "lighter",
                    c.globalAlpha = .4 * gla,
                    c.fillRect(3 * -mww / gsc, 3 * -mhh / gsc, 5 * mww / gsc, 5 * mhh /
                        gsc);
                c.restore()
            }
            if (testing)
                for (f = sectors.length - 1; 0 <= f; f--)
                    b = sectors[f],
                    c.fillStyle = "rgba(0, 255, 0, .1)",
                    c.fillRect(mww2 + (b.xx * sector_size - view_xx) * gsc, mhh2 + (b.yy * sector_size - view_yy) * gsc, sector_size * gsc - 4, sector_size * gsc - 4);
            if (high_quality || 0 < gla) {
                var h = 1.75;
                1 != gla && (h = 1.75 * gla);
                c.save();
                for (f = foods_c - 1; 0 <= f; f--)
                    b = foods[f],
                    b.rx >= fpx1 && b.ry >= fpy1 && b.rx <= fpx2 && b.ry <= fpy2 && (1 == b.rad ? (A = mww2 + gsc * (b.rx - view_xx) - b.ofw2,
                        B = mhh2 + gsc * (b.ry - view_yy) - b.ofh2,
                        c.globalAlpha = h * b.fr,
                        c.drawImage(b.ofi, A, B)) : (A =
                        mww2 + gsc * (b.rx - view_xx) - b.ofw2 * b.rad,
                        B = mhh2 + gsc * (b.ry - view_yy) - b.ofh2 * b.rad,
                        c.globalAlpha = h * b.fr,
                        c.drawImage(b.ofi, 0, 0, b.ofw, b.ofh, A, B, b.ofw * b.rad, b.ofh * b.rad)));
                c.restore()
            }
            c.save();
            c.globalCompositeOperation = "lighter";
            if (high_quality || 0 < gla) {
                h = .75;
                1 != gla && (h = .75 * gla);
                var x = .75;
                1 != gla && (x = 1 - .25 * gla);
                for (f = foods_c - 1; 0 <= f; f--)
                    b = foods[f],
                    b.rx >= fpx1 && b.ry >= fpy1 && b.rx <= fpx2 && b.ry <= fpy2 && (1 == b.rad ? (A = mww2 + gsc * (b.rx - view_xx) - b.fw2,
                        B = mhh2 + gsc * (b.ry - view_yy) - b.fh2,
                        c.globalAlpha = x * b.fr,
                        c.drawImage(b.fi, A,
                            B),
                        c.globalAlpha = h * (.5 + .5 * Math.cos(b.gfr / 13)) * b.fr,
                        c.drawImage(b.fi, A, B)) : (A = mww2 + gsc * (b.rx - view_xx) - b.fw2 * b.rad,
                        B = mhh2 + gsc * (b.ry - view_yy) - b.fh2 * b.rad,
                        c.globalAlpha = x * b.fr,
                        c.drawImage(b.fi, 0, 0, b.fw, b.fh, A, B, b.fw * b.rad, b.fh * b.rad),
                        c.globalAlpha = h * (.5 + .5 * Math.cos(b.gfr / 13)) * b.fr,
                        c.drawImage(b.fi, 0, 0, b.fw, b.fh, A, B, b.fw * b.rad, b.fh * b.rad)))
            } else
                for (f = foods_c - 1; 0 <= f; f--)
                    b = foods[f],
                    b.rx >= fpx1 && b.ry >= fpy1 && b.rx <= fpx2 && b.ry <= fpy2 && (1 == b.rad ? (A = mww2 + gsc * (b.rx - view_xx) - b.fw2,
                        B = mhh2 + gsc * (b.ry - view_yy) - b.fh2,
                        c.globalAlpha = b.fr,
                        c.drawImage(b.fi, A, B)) : (A = mww2 + gsc * (b.rx - view_xx) - b.fw2 * b.rad,
                        B = mhh2 + gsc * (b.ry - view_yy) - b.fh2 * b.rad,
                        c.globalAlpha = b.fr,
                        c.drawImage(b.fi, 0, 0, b.fw, b.fh, A, B, b.fw * b.rad, b.fh * b.rad)));
            c.restore();
            c.save();
            c.globalCompositeOperation = "lighter";
            for (f = preys.length - 1; 0 <= f; f--)
                if (h = preys[f],
                    e = h.xx + h.fx,
                    y = h.yy + h.fy,
                    px = mww2 + gsc * (e - view_xx),
                    py = mhh2 + gsc * (y - view_yy), -50 <= px && -50 <= py && px <= mwwp50 && py <= mhhp50) {
                    if (h.eaten) {
                        var b = h.eaten_by,
                            q = Math.pow(h.eaten_fr, 2),
                            e = e + (b.xx + b.fx + Math.cos(b.ang + b.fa) *
                                (43 - 24 * q) * (1 - q) - e) * q,
                            y = y + (b.yy + b.fy + Math.sin(b.ang + b.fa) * (43 - 24 * q) * (1 - q) - y) * q;
                        px = mww2 + gsc * (e - view_xx);
                        py = mhh2 + gsc * (y - view_yy)
                    }
                    1 == h.rad ? (A = px - h.fw2,
                        B = py - h.fh2,
                        c.globalAlpha = .75 * h.fr,
                        c.drawImage(h.fi, A, B),
                        c.globalAlpha = .75 * (.5 + .5 * Math.cos(h.gfr / 13)) * h.fr,
                        c.drawImage(h.fi, A, B)) : (A = px - h.fw2 * h.rad,
                        B = py - h.fh2 * h.rad,
                        c.globalAlpha = .75 * h.fr,
                        c.drawImage(h.fi, 0, 0, h.fw, h.fh, A, B, h.fw * h.rad, h.fh * h.rad),
                        c.globalAlpha = .75 * (.5 + .5 * Math.cos(h.gfr / 13)) * h.fr,
                        c.drawImage(h.fi, 0, 0, h.fw, h.fh, A, B, h.fw * h.rad, h.fh * h.rad))
                }
            c.restore();
            c.save();
            c.strokeStyle = "#90C098";
            for (var e, y, F, f = snakes.length - 1; 0 <= f; f--)
                b = snakes[f],
                e = b.xx + b.fx,
                y = b.yy + b.fy + 40,
                0 < b.na && e >= bpx1 - 100 && y >= bpy1 && e <= bpx2 + 100 && y <= bpy2 && (b == snake && (b.fnfr++,
                        200 < b.fnfr && (b.na -= .004,
                            0 > b.na && (b.na = 0))),
                    c.save(),
                    c.globalAlpha = .5 * b.na * b.alive_amt * (1 - b.dead_amt),
                    c.font = "12px Arial, Helvetica Neue, Helvetica, sans-serif",
                    c.fillStyle = b.csw,
                    c.textBaseline = "middle",
                    c.textAlign = "center",
                    h = b.xx + b.fx,
                    x = b.yy + b.fy,
                    h = mww2 + (h - view_xx) * gsc,
                    x = mhh2 + (x - view_yy) * gsc,
                    c.fillText(b.nk, h, x + 32 +
                        11 * b.sc * gsc),
                    c.restore());
            for (f = snakes.length - 1; 0 <= f; f--)
                for (b = snakes[f],
                    b.iiv = !1,
                    u = b.pts.length - 1; 0 <= u; u--)
                    if (E = b.pts[u],
                        px = E.xx + E.fx,
                        py = E.yy + E.fy,
                        px >= bpx1 && py >= bpy1 && px <= bpx2 && py <= bpy2) {
                        b.iiv = !0;
                        break
                    }
            for (f = snakes.length - 1; 0 <= f; f--)
                if (b = snakes[f],
                    b.iiv) {
                    h = b.xx + b.fx;
                    x = b.yy + b.fy;
                    px = h;
                    py = x;
                    F = b.ehang;
                    var t = b.sc,
                        w = 29 * t,
                        z = b.cfl,
                        E = b.pts[b.pts.length - 1];
                    if (1 == render_mode) {
                        c.save();
                        c.beginPath();
                        c.moveTo(mww2 + (px - view_xx) * gsc, mhh2 + (py - view_yy) * gsc);
                        e = !1;
                        for (var u = b.pts.length - 1; 0 <= u; u--) {
                            E = b.pts[u];
                            lpx =
                                px;
                            lpy = py;
                            px = E.xx;
                            py = E.yy;
                            var A = E.fx,
                                B = E.fy;
                            0 < z && (px += A,
                                py += B,
                                lax = ax,
                                lay = ay,
                                ax = (px + lpx) / 2,
                                ay = (py + lpy) / 2,
                                e || (lax = ax,
                                    lay = ay),
                                1 > z && (q = 1 - z,
                                    lpx += (lax - lpx) * q,
                                    lpy += (lay - lpy) * q,
                                    ax += (lax - ax) * q,
                                    ay += (lay - ay) * q),
                                e ? z-- : z -= b.chl + b.fchl,
                                e ? c.quadraticCurveTo(mww2 + (lpx - view_xx) * gsc, mhh2 + (lpy - view_yy) * gsc, mww2 + (ax - view_xx) * gsc, mhh2 + (ay - view_yy) * gsc) : (c.lineTo(mww2 + (ax - view_xx) * gsc, mhh2 + (ay - view_yy) * gsc),
                                    e = !0))
                        }
                        c.save();
                        c.lineJoin = "round";
                        c.lineCap = "round";
                        is_firefox ? (b.sp > b.fsp && (u = b.alive_amt * (1 - b.dead_amt) * Math.max(0,
                                    Math.min(1, (b.sp - b.ssp) / (b.msp - b.ssp))),
                                c.save(),
                                c.strokeStyle = b.cs,
                                c.globalAlpha = .3 * u,
                                c.lineWidth = (w + 6) * gsc,
                                c.stroke(),
                                c.lineWidth = (w + 9) * gsc,
                                c.stroke(),
                                c.lineWidth = (w + 12) * gsc,
                                c.stroke(),
                                c.restore()),
                            c.globalAlpha = 1 * b.alive_amt * (1 - b.dead_amt),
                            c.strokeStyle = "#000000",
                            c.lineWidth = (w + 5) * gsc) : (b.sp > b.fsp && (u = b.alive_amt * (1 - b.dead_amt) * Math.max(0, Math.min(1, (b.sp - b.ssp) / (b.msp - b.ssp))),
                                c.save(),
                                c.lineWidth = (w - 2) * gsc,
                                c.shadowBlur = 30 * gsc,
                                c.shadowColor = "rgba(" + b.rr + "," + b.gg + "," + b.bb + ", " + Math.round(1E4 * u) /
                                1E4 + ")",
                                c.stroke(),
                                c.stroke(),
                                c.restore()),
                            c.globalAlpha = .4 * b.alive_amt * (1 - b.dead_amt),
                            c.strokeStyle = "#000000",
                            c.lineWidth = (w + 5) * gsc,
                            c.stroke(),
                            c.strokeStyle = b.cs,
                            c.lineWidth = w * gsc,
                            c.strokeStyle = "#000000",
                            c.globalAlpha = 1 * b.alive_amt * (1 - b.dead_amt));
                        c.stroke();
                        c.strokeStyle = b.cs;
                        c.globalAlpha = .8 * b.alive_amt * (1 - b.dead_amt);
                        c.lineWidth = w * gsc;
                        c.stroke();
                        c.restore();
                        c.strokeStyle = b.cs;
                        b.dead && (B = (.5 + .5 * Math.abs(Math.sin(5 * Math.PI * b.dead_amt))) * Math.sin(Math.PI * b.dead_amt),
                            c.save(),
                            c.lineJoin = "round",
                            c.lineCap =
                            "round",
                            c.globalCompositeOperation = "lighter",
                            c.lineWidth = (w - 3) * gsc,
                            c.globalAlpha = B,
                            c.strokeStyle = "#FFCC99",
                            c.stroke(),
                            c.restore());
                        c.restore()
                    }
                    if (2 == render_mode) {
                        var w = .5 * w,
                            D, L, H, K, C, J, N, O, A = 0;
                        px = h;
                        py = x;
                        C = px;
                        J = py;
                        C >= bpx1 && J >= bpy1 && C <= bpx2 && J <= bpy2 ? (pbx[0] = C,
                            pby[0] = J,
                            pba[0] = Math.atan2(x - (E.yy + E.fy), h - (E.xx + E.fx)) + Math.PI,
                            pbu[0] = 1) : pbu[0] = 0;
                        A = 1;
                        n = (b.chl + b.fchl) % .25;
                        0 > n && (n += .25);
                        n = .25 - n;
                        z += 1 - .25 * Math.ceil((b.chl + b.fchl) / .25);
                        ax = px;
                        ay = py;
                        b.sep != b.wsep && (b.sep < b.wsep ? (b.sep += .01,
                            b.sep >= b.wsep && (b.sep =
                                b.wsep)) : b.sep > b.wsep && (b.sep -= .01,
                            b.sep <= b.wsep && (b.sep = b.wsep)));
                        for (var M = b.sep * qsm, I = 0, B = per_color_imgs[b.cv].kmcs, G, u = b.pts.length - 1; 0 <= u; u--)
                            if (E = b.pts[u],
                                lpx = px,
                                lpy = py,
                                px = E.xx + E.fx,
                                py = E.yy + E.fy, -.25 < z) {
                                H = C;
                                K = J;
                                C = (px + lpx) / 2;
                                J = (py + lpy) / 2;
                                N = lpx;
                                O = lpy;
                                for (q = 0; 1 > q; q += .25) {
                                    E = n + q;
                                    e = H + (N - H) * E;
                                    y = K + (O - K) * E;
                                    D = N + (C - N) * E;
                                    L = O + (J - O) * E;
                                    lax = ax;
                                    lay = ay;
                                    ax = e + (D - e) * E;
                                    ay = y + (L - y) * E;
                                    0 > z && (ax += -(lax - ax) * z / .25,
                                        ay += -(lay - ay) * z / .25);
                                    D = Math.sqrt(Math.pow(ax - lax, 2) + Math.pow(ay - lay, 2));
                                    if (I + D < M)
                                        I += D;
                                    else {
                                        I = -I;
                                        for (E = (D - I) /
                                            M; 1 <= E; E--)
                                            I += M,
                                            pax = lax + (ax - lax) * I / D,
                                            pay = lay + (ay - lay) * I / D,
                                            pax >= bpx1 && pay >= bpy1 && pax <= bpx2 && pay <= bpy2 ? (pbx[A] = pax,
                                                pby[A] = pay,
                                                pbu[A] = 1,
                                                e = ax - lax,
                                                y = ay - lay,
                                                pba[A] = -15 <= e && -15 <= y && 15 > e && 15 > y ? at2lt[8 * y + 128 << 8 | 8 * e + 128] : -127 <= e && -127 <= y && 127 > e && 127 > y ? at2lt[y + 128 << 8 | e + 128] : Math.atan2(y, e)) : pbu[A] = 0,
                                            A++;
                                        I = D - I
                                    }
                                    if (1 > z && (z -= .25, -.25 >= z))
                                        break
                                }
                                1 <= z && z--
                            }
                        ax >= bpx1 && ay >= bpy1 && ax <= bpx2 && ay <= bpy2 ? (pbu[A] = 1,
                            pbx[A] = ax,
                            pby[A] = ay,
                            pba[A] = Math.atan2(ay - lay, ax - lax)) : pbu[A] = 0;
                        A++;
                        c.save();
                        c.translate(mww2, mhh2);
                        q = gsc * w * 52 / 32;
                        C = gsc * w * 62 / 32;
                        z = b.alive_amt * (1 - b.dead_amt);
                        z *= z;
                        E = 1;
                        if (b.tsp > b.fsp) {
                            E = b.alive_amt * (1 - b.dead_amt) * Math.max(0, Math.min(1, (b.tsp - b.ssp) / (b.msp - b.ssp)));
                            G = .37 * E;
                            I = Math.pow(E, .5);
                            H = gsc * w * (1 + .9375 * I);
                            y = per_color_imgs[b.cv].kfmc;
                            c.save();
                            c.globalCompositeOperation = "lighter";
                            if (b.rbcs)
                                for (J = b.rbcs,
                                    M = J.length,
                                    u = A - 1; 0 <= u; u--)
                                    1 == pbu[u] && (px = pbx[u],
                                        py = pby[u],
                                        y = per_color_imgs[J[u % M]],
                                        y = y.kfmc,
                                        c.save(),
                                        c.globalAlpha = z * I * .38 * (.6 + .4 * Math.cos(u / 4 - 1.15 * b.sfr)),
                                        c.translate((px - view_xx) * gsc, (py - view_yy) * gsc),
                                        4 > u ? (e =
                                            H * (1 + (4 - u) * b.swell),
                                            c.drawImage(y, -e, -e, 2 * e, 2 * e)) : c.drawImage(y, -H, -H, 2 * H, 2 * H),
                                        c.restore());
                            else
                                for (u = A - 1; 0 <= u; u--)
                                    1 == pbu[u] && (px = pbx[u],
                                        py = pby[u],
                                        c.save(),
                                        c.globalAlpha = z * I * .38 * (.6 + .4 * Math.cos(u / 4 - 1.15 * b.sfr)),
                                        c.translate((px - view_xx) * gsc, (py - view_yy) * gsc),
                                        4 > u ? (e = H * (1 + (4 - u) * b.swell),
                                            c.drawImage(y, -e, -e, 2 * e, 2 * e)) : c.drawImage(y, -H, -H, 2 * H, 2 * H),
                                        c.restore());
                            c.restore();
                            E = 1 - E
                        }
                        E *= z;
                        if (high_quality || 0 < gla)
                            for (y = E,
                                1 != gla && (y = E * gla),
                                c.globalAlpha = y,
                                u = A - 1; 0 <= u; u--)
                                1 == pbu[u] && (px = pbx[u],
                                    py = pby[u],
                                    c.save(),
                                    c.translate((px - view_xx) * gsc, (py - view_yy) * gsc),
                                    c.drawImage(komc, -q, -q, 2 * q, 2 * q),
                                    9 > u && (c.globalAlpha = y * (1 - u / 9),
                                        4 > u ? (e = C * (1 + (4 - u) * b.swell),
                                            c.drawImage(ksmc, -e, -e, 2 * e, 2 * e)) : c.drawImage(ksmc, -C, -C, 2 * C, 2 * C),
                                        c.globalAlpha = y),
                                    c.restore());
                        c.globalAlpha = E;
                        if (b.rbcs) {
                            J = b.rbcs;
                            M = J.length;
                            for (u = A - 1; 0 <= u; u--)
                                1 == pbu[u] && (px = pbx[u],
                                    py = pby[u],
                                    2 <= u && (q = u - 2,
                                        1 == pbu[q] && (e = pbx[q],
                                            y = pby[q],
                                            c.save(),
                                            c.translate((e - view_xx) * gsc, (y - view_yy) * gsc),
                                            9 > q ? (c.globalAlpha = q / 9 * E,
                                                4 > q ? (e = C * (1 + (4 - q) * b.swell),
                                                    c.drawImage(ksmc, -e, -e,
                                                        2 * e, 2 * e)) : c.drawImage(ksmc, -C, -C, 2 * C, 2 * C)) : (c.globalAlpha = E,
                                                c.drawImage(ksmc, -C, -C, 2 * C, 2 * C)),
                                            c.restore())),
                                    c.save(),
                                    c.globalAlpha = z,
                                    c.translate((px - view_xx) * gsc, (py - view_yy) * gsc),
                                    c.rotate(pba[u]),
                                    q = u % (2 * B.length),
                                    q >= B.length && (q = 2 * B.length - (q + 1)),
                                    y = per_color_imgs[J[u % M]],
                                    4 > u ? (e = w * (1 + (4 - u) * b.swell),
                                        c.drawImage(y.kmcs[q], -gsc * e, -gsc * e, 2 * gsc * e, 2 * gsc * e)) : c.drawImage(y.kmcs[q], -gsc * w, -gsc * w, 2 * gsc * w, 2 * gsc * w),
                                    c.restore());
                            if (b.tsp > b.fsp && (high_quality || 0 < gla)) {
                                c.save();
                                c.globalCompositeOperation = "lighter";
                                for (u = A - 1; 0 <= u; u--)
                                    1 == pbu[u] && (px = pbx[u],
                                        py = pby[u],
                                        c.save(),
                                        c.translate((px - view_xx) * gsc, (py - view_yy) * gsc),
                                        c.rotate(pba[u]),
                                        c.globalAlpha = z * G * gla * (.5 + .5 * Math.cos(u / 4 - b.sfr)),
                                        q = u % (2 * B.length),
                                        q >= B.length && (q = 2 * B.length - (q + 1)),
                                        4 > u ? (e = w * (1 + (4 - u) * b.swell),
                                            c.drawImage(per_color_imgs[J[u % M]].kmcs[q], -gsc * e, -gsc * e, 2 * gsc * e, 2 * gsc * e)) : c.drawImage(per_color_imgs[J[u % M]].kmcs[q], -gsc * w, -gsc * w, 2 * gsc * w, 2 * gsc * w),
                                        c.restore());
                                c.restore()
                            }
                        } else {
                            for (u = A - 1; 0 <= u; u--)
                                1 == pbu[u] && (px = pbx[u],
                                    py = pby[u],
                                    2 <= u && (q = u - 2,
                                        1 == pbu[q] &&
                                        (e = pbx[q],
                                            y = pby[q],
                                            c.save(),
                                            c.translate((e - view_xx) * gsc, (y - view_yy) * gsc),
                                            9 > q ? (c.globalAlpha = q / 9 * E,
                                                4 > q ? (e = C * (1 + (4 - q) * b.swell),
                                                    c.drawImage(ksmc, -e, -e, 2 * e, 2 * e)) : c.drawImage(ksmc, -C, -C, 2 * C, 2 * C)) : (c.globalAlpha = E,
                                                c.drawImage(ksmc, -C, -C, 2 * C, 2 * C)),
                                            c.restore())),
                                    c.save(),
                                    c.globalAlpha = z,
                                    c.translate((px - view_xx) * gsc, (py - view_yy) * gsc),
                                    c.rotate(pba[u]),
                                    q = u % (2 * B.length),
                                    q >= B.length && (q = 2 * B.length - (q + 1)),
                                    4 > u ? (e = w * (1 + (4 - u) * b.swell),
                                        c.drawImage(B[q], -gsc * e, -gsc * e, 2 * gsc * e, 2 * gsc * e)) : c.drawImage(B[q], -gsc * w, -gsc * w,
                                        2 * gsc * w, 2 * gsc * w),
                                    c.restore());
                            if (b.tsp > b.fsp && (high_quality || 0 < gla)) {
                                c.save();
                                c.globalCompositeOperation = "lighter";
                                for (u = A - 1; 0 <= u; u--)
                                    1 == pbu[u] && (px = pbx[u],
                                        py = pby[u],
                                        q = u % (2 * B.length),
                                        q >= B.length && (q = 2 * B.length - (q + 1)),
                                        c.save(),
                                        c.translate((px - view_xx) * gsc, (py - view_yy) * gsc),
                                        c.rotate(pba[u]),
                                        c.globalAlpha = z * G * gla * (.5 + .5 * Math.cos(u / 4 - b.sfr)),
                                        4 > u ? (e = w * (1 + (4 - u) * b.swell),
                                            c.drawImage(B[q], -gsc * e, -gsc * e, 2 * gsc * e, 2 * gsc * e)) : c.drawImage(B[q], -gsc * w, -gsc * w, 2 * gsc * w, 2 * gsc * w),
                                        c.restore());
                                c.restore()
                            }
                        }
                        if (b.antenna)
                            if (e =
                                Math.cos(b.ang),
                                y = Math.sin(b.ang),
                                ax = h - 8 * e * b.sc,
                                ay = x - 8 * y * b.sc,
                                2 <= A && ax >= apx1 && ay >= apy1 && ax <= apx2 && ay <= apy2) {
                                b.atx[0] = ax;
                                b.aty[0] = ay;
                                E = b.sc * gsc;
                                fj = b.atx.length - 1;
                                if (choosing_skin)
                                    for (u = 1; u <= fj; u++)
                                        b.atvx[u] -= .3,
                                        b.atvy[u] += .14 * Math.cos(fr / 23 - 7 * u / fj);
                                else if (!b.antenna_shown)
                                    for (b.antenna_shown = !0,
                                        u = 1; u <= fj; u++)
                                        b.atx[u] = ax - e * u * 4 * b.sc,
                                        b.aty[u] = ay - y * u * 4 * b.sc;
                                for (u = 1; u <= fj; u++)
                                    xx = b.atx[u - 1],
                                    yy = b.aty[u - 1],
                                    xx += 2 * Math.random() - 1,
                                    yy += 2 * Math.random() - 1,
                                    e = b.atx[u] - xx,
                                    y = b.aty[u] - yy,
                                    ang = -4 <= e && -4 <= y && 4 > e && 4 > y ?
                                    at2lt[32 * y + 128 << 8 | 32 * e + 128] : -8 <= e && -8 <= y && 8 > e && 8 > y ? at2lt[16 * y + 128 << 8 | 16 * e + 128] : -16 <= e && -16 <= y && 16 > e && 16 > y ? at2lt[8 * y + 128 << 8 | 8 * e + 128] : -127 <= e && -127 <= y && 127 > e && 127 > y ? at2lt[y + 128 << 8 | e + 128] : Math.atan2(y, e),
                                    xx += 4 * Math.cos(ang) * b.sc,
                                    yy += 4 * Math.sin(ang) * b.sc,
                                    b.atvx[u] += .1 * (xx - b.atx[u]),
                                    b.atvy[u] += .1 * (yy - b.aty[u]),
                                    b.atx[u] += b.atvx[u],
                                    b.aty[u] += b.atvy[u],
                                    b.atvx[u] *= .88,
                                    b.atvy[u] *= .88,
                                    e = b.atx[u] - b.atx[u - 1],
                                    y = b.aty[u] - b.aty[u - 1],
                                    D = Math.sqrt(e * e + y * y),
                                    D > 4 * b.sc && (ang = -4 <= e && -4 <= y && 4 > e && 4 > y ? at2lt[32 * y + 128 << 8 | 32 *
                                            e + 128] : -8 <= e && -8 <= y && 8 > e && 8 > y ? at2lt[16 * y + 128 << 8 | 16 * e + 128] : -16 <= e && -16 <= y && 16 > e && 16 > y ? at2lt[8 * y + 128 << 8 | 8 * e + 128] : -127 <= e && -127 <= y && 127 > e && 127 > y ? at2lt[y + 128 << 8 | e + 128] : Math.atan2(y, e),
                                        b.atx[u] = b.atx[u - 1] + 4 * Math.cos(ang) * b.sc,
                                        b.aty[u] = b.aty[u - 1] + 4 * Math.sin(ang) * b.sc);
                                c.globalAlpha = z;
                                c.strokeStyle = b.atc1;
                                c.lineWidth = 5 * E;
                                c.lineCap = "round";
                                c.lineJoin = "round";
                                c.beginPath();
                                fj = b.atx.length - 1;
                                e = (b.atx[fj] - view_xx) * gsc;
                                y = (b.aty[fj] - view_yy) * gsc;
                                c.moveTo(e, y);
                                for (u = fj - 1; 1 <= u; u--)
                                    xx = (b.atx[u] - view_xx) * gsc,
                                    yy = (b.aty[u] -
                                        view_yy) * gsc,
                                    1 <= Math.abs(xx - e) + Math.abs(yy - y) && (e = xx,
                                        y = yy,
                                        c.lineTo(e, y));
                                xx = (.5 * (b.atx[1] + b.atx[0]) - view_xx) * gsc;
                                yy = (.5 * (b.aty[1] + b.aty[0]) - view_yy) * gsc;
                                1 <= Math.abs(xx - e) + Math.abs(yy - y) && (e = xx,
                                    y = yy,
                                    c.lineTo(e, y));
                                c.stroke();
                                c.globalAlpha = b.atia * z;
                                c.strokeStyle = b.atc2;
                                c.lineWidth = 4 * E;
                                c.beginPath();
                                fj = b.atx.length - 1;
                                e = (b.atx[fj] - view_xx) * gsc;
                                y = (b.aty[fj] - view_yy) * gsc;
                                c.moveTo(e, y);
                                for (u = fj - 1; 0 <= u; u--)
                                    xx = (b.atx[u] - view_xx) * gsc,
                                    yy = (b.aty[u] - view_yy) * gsc,
                                    1 <= Math.abs(xx - e) + Math.abs(yy - y) && (e = xx,
                                        y = yy,
                                        c.lineTo(e,
                                            y));
                                c.stroke();
                                b.atwg && (c.lineWidth = 3 * E,
                                    c.stroke(),
                                    c.lineWidth = 2 * E,
                                    c.stroke());
                                c.globalAlpha = z * b.blba;
                                if (b.abrot) {
                                    c.save();
                                    c.translate((b.atx[fj] - view_xx) * gsc, (b.aty[fj] - view_yy) * gsc);
                                    vang = Math.atan2(b.aty[fj] - b.aty[fj - 1], b.atx[fj] - b.atx[fj - 1]) - b.atba;
                                    if (0 > vang || vang >= pi2)
                                        vang %= pi2;
                                    vang < -Math.PI ? vang += pi2 : vang > Math.PI && (vang -= pi2);
                                    b.atba = (b.atba + .15 * vang) % pi2;
                                    c.rotate(b.atba);
                                    c.drawImage(b.bulb, b.blbx * b.bsc * E, b.blby * b.bsc * E, b.blbw * b.bsc * E, b.blbh * b.bsc * E);
                                    c.restore()
                                } else
                                    c.drawImage(b.bulb, (b.atx[fj] -
                                        view_xx + b.blbx * b.bsc * b.sc) * gsc, (b.aty[fj] - view_yy + b.blby * b.bsc * b.sc) * gsc, b.blbw * b.bsc * E, b.blbh * b.bsc * E);
                                b.apbs && (c.globalAlpha = .5 * z,
                                    c.lineWidth = 3 * E,
                                    c.stroke(),
                                    c.lineWidth = 2 * E,
                                    c.stroke())
                            } else
                                b.antenna_shown && (b.antenna_shown = !1);
                        if (b.dead) {
                            c.save();
                            c.globalCompositeOperation = "lighter";
                            B = (.15 + .15 * Math.abs(Math.sin(5 * Math.PI * b.dead_amt))) * Math.sin(Math.PI * b.dead_amt);
                            w *= gsc;
                            for (u = A - 1; 0 <= u; u--)
                                1 == pbu[u] && (px = pbx[u],
                                    py = pby[u],
                                    c.save(),
                                    c.globalAlpha = B * (.6 + .4 * Math.cos(u / 4 - 15 * b.dead_amt)),
                                    c.translate((px -
                                        view_xx) * gsc, (py - view_yy) * gsc),
                                    4 > u ? (e = w * (1 + (4 - u) * b.swell),
                                        c.drawImage(kdmc, -e, -e, 2 * e, 2 * e)) : c.drawImage(kdmc, -w, -w, 2 * w, 2 * w),
                                    c.restore());
                            c.restore()
                        }
                        c.restore()
                    }
                    b.one_eye ? (u = 3 * t,
                        w = Math.cos(F) * u,
                        A = Math.sin(F) * u,
                        B = t * b.ebisz,
                        c.drawImage(b.ebi, 0, 0, b.ebiw, b.ebih, mww2 + (w + h - B / 2 - view_xx) * gsc, mhh2 + (A + x - B / 2 - view_yy) * gsc, B * gsc, B * gsc),
                        w = Math.cos(F) * (u + .15) + b.rex * t,
                        A = Math.sin(F) * (u + .15) + b.rey * t,
                        B = t * b.episz,
                        c.drawImage(b.epi, 0, 0, b.epiw, b.epih, mww2 + (w + h - B / 2 - view_xx) * gsc, mhh2 + (A + x - B / 2 - view_yy) * gsc, B * gsc, B * gsc)) : (u =
                        1 == render_mode ? 4 * t : 6 * t,
                        B = 6 * t,
                        w = Math.cos(F) * u + Math.cos(F - Math.PI / 2) * (B + .5),
                        A = Math.sin(F) * u + Math.sin(F - Math.PI / 2) * (B + .5),
                        c.fillStyle = b.ec,
                        c.globalAlpha = b.eca * b.alive_amt,
                        c.beginPath(),
                        c.arc(mww2 + (w + h - view_xx) * gsc, mhh2 + (A + x - view_yy) * gsc, b.er * t * gsc, 0, pi2),
                        c.closePath(),
                        c.fill(),
                        c.globalAlpha = b.ppa,
                        w = Math.cos(F) * (u + .5) + b.rex * t + Math.cos(F - Math.PI / 2) * B,
                        A = Math.sin(F) * (u + .5) + b.rey * t + Math.sin(F - Math.PI / 2) * B,
                        c.fillStyle = b.ppc,
                        c.beginPath(),
                        c.arc(mww2 + (w + h - view_xx) * gsc, mhh2 + (A + x - view_yy) * gsc, 3.5 * t * gsc, 0, pi2),
                        c.closePath(),
                        c.fill(),
                        w = Math.cos(F) * u + Math.cos(F + Math.PI / 2) * (B + .5),
                        A = Math.sin(F) * u + Math.sin(F + Math.PI / 2) * (B + .5),
                        c.fillStyle = b.ec,
                        c.globalAlpha = b.eca * b.alive_amt,
                        c.beginPath(),
                        c.arc(mww2 + (w + h - view_xx) * gsc, mhh2 + (A + x - view_yy) * gsc, b.er * t * gsc, 0, pi2),
                        c.closePath(),
                        c.fill(),
                        c.globalAlpha = b.ppa,
                        w = Math.cos(F) * (u + .5) + b.rex * t + Math.cos(F + Math.PI / 2) * B,
                        A = Math.sin(F) * (u + .5) + b.rey * t + Math.sin(F + Math.PI / 2) * B,
                        c.fillStyle = b.ppc,
                        c.beginPath(),
                        c.arc(mww2 + (w + h - view_xx) * gsc, mhh2 + (A + x - view_yy) * gsc, 3.5 * t * gsc, 0, pi2),
                        c.closePath(),
                        c.fill());
                    c.globalAlpha = 1
                }
            if (high_quality || 0 < gla) {
                c.save();
                c.globalCompositeOperation = "lighter";
                for (f = foods_c - 1; 0 <= f; f--)
                    b = foods[f],
                    b.rx >= fpx1 && b.ry >= fpy1 && b.rx <= fpx2 && b.ry <= fpy2 && (e = b.rx - view_xx,
                        y = b.ry - view_yy,
                        h = e * e + y * y,
                        fs = 1 + .06 * b.rad,
                        A = e * fs,
                        B = y * fs,
                        G = .005 + .09 * (1 - h / (86E3 + h)),
                        1 != b.rad && (G *= Math.pow(b.rad, .25)),
                        1 != gla && (G *= gla),
                        A = A * gsc + mww2,
                        B = B * gsc + mhh2,
                        1 == b.rad ? (A -= b.gfw2,
                            B -= b.gfh2,
                            c.globalAlpha = G * b.fr,
                            c.drawImage(b.gfi, A, B),
                            c.globalAlpha = G * (.5 + .5 * Math.cos(b.gfr / 13)) * b.fr,
                            c.drawImage(b.gfi, A, B)) : (A -=
                            b.gfw2 * b.rad,
                            B -= b.gfh2 * b.rad,
                            c.globalAlpha = G * b.fr,
                            c.drawImage(b.gfi, 0, 0, b.gfw, b.gfh, A, B, b.gfw * b.rad, b.gfh * b.rad),
                            c.globalAlpha = G * (.5 + .5 * Math.cos(b.gfr / 13)) * b.fr,
                            c.drawImage(b.gfi, 0, 0, b.gfw, b.gfh, A, B, b.gfw * b.rad, b.gfh * b.rad)),
                        fs = 1 + .32 * b.rad,
                        A = e * fs,
                        B = y * fs,
                        G = .085 * (1 - h / (16500 + h)),
                        1 != b.rad && (G *= Math.pow(b.rad, .25)),
                        1 != gla && (G *= gla),
                        A = A * gsc + mww2,
                        B = B * gsc + mhh2,
                        1 == b.rad ? (A -= b.g2fw2,
                            B -= b.g2fh2,
                            c.globalAlpha = G * b.fr,
                            c.drawImage(b.g2fi, A, B),
                            c.globalAlpha = G * (.5 + .5 * Math.cos(b.gfr / 13)) * b.fr,
                            c.drawImage(b.g2fi, A,
                                B)) : (A -= b.g2fw2 * b.rad,
                            B -= b.g2fh2 * b.rad,
                            c.globalAlpha = G * b.fr,
                            c.drawImage(b.g2fi, 0, 0, b.g2fw, b.g2fh, A, B, b.g2fw * b.rad, b.g2fh * b.rad),
                            c.globalAlpha = G * (.5 + .5 * Math.cos(b.gfr / 13)) * b.fr,
                            c.drawImage(b.g2fi, 0, 0, b.g2fw, b.g2fh, A, B, b.g2fw * b.rad, b.g2fh * b.rad)));
                c.restore()
            }
            c.save();
            c.globalCompositeOperation = "lighter";
            for (f = preys.length - 1; 0 <= f; f--)
                h = preys[f],
                e = h.xx + h.fx,
                y = h.yy + h.fy,
                h.eaten && (b = h.eaten_by,
                    q = Math.pow(h.eaten_fr, 2),
                    e += (b.xx + b.fx + Math.cos(b.ang + b.fa) * (43 - 24 * q) * (1 - q) - e) * q,
                    y += (b.yy + b.fy + Math.sin(b.ang +
                        b.fa) * (43 - 24 * q) * (1 - q) - y) * q),
                e -= view_xx,
                y -= view_yy,
                b = e * e + y * y,
                fs = 1 + .08 * h.rad,
                px = e * fs,
                py = y * fs,
                G = .4 * (1 - b / (176E3 + b)),
                1 != h.rad && (G *= Math.pow(h.rad, .25)),
                px = px * gsc + mww2,
                py = py * gsc + mhh2,
                1 == h.rad ? -150 <= px && -150 <= py && px <= mwwp150 && py <= mhhp150 && (px -= h.gfw2,
                    py -= h.gfh2,
                    c.globalAlpha = G * h.fr,
                    c.drawImage(h.gfi, px, py),
                    c.globalAlpha = G * (.5 + .5 * Math.cos(h.gfr / 13)) * h.fr,
                    c.drawImage(h.gfi, px, py)) : -150 <= px && -150 <= py && px <= mwwp150 && py <= mhhp150 && (px -= h.gfw2 * h.rad,
                    py -= h.gfh2 * h.rad,
                    c.globalAlpha = G * h.fr,
                    c.drawImage(h.gfi, 0, 0, h.gfw,
                        h.gfh, px, py, h.gfw * h.rad, h.gfh * h.rad),
                    c.globalAlpha = G * (.5 + .5 * Math.cos(h.gfr / 13)) * h.fr,
                    c.drawImage(h.gfi, 0, 0, h.gfw, h.gfh, px, py, h.gfw * h.rad, h.gfh * h.rad)),
                fs = 1 + .32 * h.rad,
                px = e * fs,
                py = y * fs,
                G = .35 * (1 - b / (46500 + b)),
                1 != h.rad && (G *= Math.pow(h.rad, .25)),
                b = 2 * h.rad,
                px = px * gsc + mww2,
                py = py * gsc + mhh2, -150 <= px && -150 <= py && px <= mwwp150 && py <= mhhp150 && (px -= h.gfw2 * b,
                    py -= h.gfh2 * b,
                    c.globalAlpha = G * h.fr,
                    c.drawImage(h.gfi, 0, 0, h.gfw, h.gfh, px, py, h.gfw * b, h.gfh * b),
                    c.globalAlpha = G * (.5 + .5 * Math.cos(h.gfr / 13)) * h.fr,
                    c.drawImage(h.gfi, 0, 0, h.gfw,
                        h.gfh, px, py, h.gfw * b, h.gfh * b));
            c.restore();
            if (4E3 > Math.abs(grd - view_dist)) {
                c.save();
                c.lineWidth = 23 * gsc;
                c.strokeStyle = "#800000";
                c.fillStyle = "#300000";
                c.beginPath();
                xx = grd + Math.cos(view_ang - 2E3 / grd) * grd * .98;
                yy = grd + Math.sin(view_ang - 2E3 / grd) * grd * .98;
                c.moveTo(mww2 + (xx - view_xx) * gsc, mhh2 + (yy - view_yy) * gsc);
                for (u = -2E3; 2E3 >= u; u += 100)
                    xx = grd + Math.cos(view_ang + u / grd) * grd * .98,
                    yy = grd + Math.sin(view_ang + u / grd) * grd * .98,
                    c.lineTo(mww2 + (xx - view_xx) * gsc, mhh2 + (yy - view_yy) * gsc);
                xx = grd + Math.cos(view_ang + 2E3 / grd) * (grd + 4E3);
                yy = grd + Math.sin(view_ang + 2E3 / grd) * (grd + 4E3);
                c.lineTo(mww2 + (xx - view_xx) * gsc, mhh2 + (yy - view_yy) * gsc);
                xx = grd + Math.cos(view_ang - 2E3 / grd) * (grd + 4E3);
                yy = grd + Math.sin(view_ang - 2E3 / grd) * (grd + 4E3);
                c.lineTo(mww2 + (xx - view_xx) * gsc, mhh2 + (yy - view_yy) * gsc);
                c.closePath();
                c.stroke();
                c.fill();
                c.restore()
            }
            wumsts && 0 < rank && 0 < snake_count && playing && (wumsts = !1,
                b = "Your length",
                f = "of",
                G = "Your rank",
                "DE" == country ? (b = "Deine L\u00e4nge",
                    f = "von",
                    G = "Dein rang") : "FR" == country ? (b = "Votre longueur",
                    f = "de",
                    G = "Ton rang") : "BR" == country &&
                (b = "Seu comprimento",
                    f = "do",
                    G = "Seu classifica\u00e7\u00e3o"),
                b = "" + ('<span style="font-size: 14px;"><span style="opacity: .4;">' + b + ': </span><span style="opacity: .8; font-weight: bold;">' + Math.floor(150 * (fpsls[snake.sct] + snake.fam / fmlts[snake.sct] - 1) - 50) / 10 + "</span></span>"),
                b += '<BR><span style="opacity: .3;">' + G + ': </span><span style="opacity: .35;">' + rank + '</span><span style="opacity: .3;"> ' + f + ' </span><span style="opacity: .35;">' + snake_count + "</span>",
                lbf.innerHTML = b);
            c.restore()
        }
    },
    ww = window.innerWidth,
    hh = window.innerHeight,
    lww = 0,
    lhh = 0,
    csc, grd = 16384;

function resize() {
    ww = Math.ceil(window.innerWidth);
    hh = Math.ceil(window.innerHeight);
    if (ww != lww || hh != lhh) {
        lww = ww;
        lhh = hh;
        var c = 0;
        if (mbi) {
            var f = ww / 1245;
            mbi.width = 1245 * f;
            c = Math.ceil(260 * f);
            mbi.height = c;
            hh -= c
        }
        ww -= wsu;
        loch.style.bottom = 16 + c + "px";
        lbf.style.bottom = 4 + c + "px";
        lbh.style.right = 4 + wsu + "px";
        lbs.style.right = 4 + wsu + "px";
        lbn.style.right = 64 + wsu + "px";
        lbp.style.right = 230 + wsu + "px";
        loch.style.right = 16 + wsu + "px";
        plq.style.right = 10 + wsu + "px";
        clq.style.left = Math.floor(ww / 2 - 130) + "px";
        login.style.width = ww + "px";
        fbh.style.right =
            30 + wsu + "px";
        twth.style.right = 130 + wsu + "px";
        cstx.style.right = 240 + wsu + "px";
        grqh.style.right = 20 + wsu + "px";
        pskh.style.left = Math.round(.25 * ww - 44) + "px";
        nskh.style.left = Math.round(.75 * ww - 44) + "px";
        skodiv.style.left = Math.round(ww / 2 - skodiv.offsetWidth / 2) + "px";
        skodiv.style.top = Math.round(hh / 2 + 120) + "px";
        pskh.style.top = Math.round(hh / 2 - 44) + "px";
        nskh.style.top = Math.round(hh / 2 - 44) + "px";
        ldmc.style.left = ww / 2 - 64 + "px";
        ldmc.style.top = hh / 2 - 64 + "px";
        var f = Math.sqrt(ww * ww + hh * hh),
            c = Math.ceil(1400 * ww / f),
            b = Math.ceil(1400 * hh / f);
        1100 < c && (b = Math.ceil(1100 * b / c),
            c = 1100);
        1100 < b && (c = Math.ceil(1100 * c / b),
            b = 1100);
        lgbsc = 560 > hh ? Math.max(50, hh) / 560 : 1;
        f = Math.round(lgbsc * lgcsc * 1E5) / 1E5;
        1 == f ? (trf(login, ""),
            login.style.top = "0px") : (login.style.top = -(Math.round(hh * (1 - lgbsc) * 1E5) / 1E5) + "px",
            trf(login, "scale(" + f + "," + f + ")"));
        if (mww != c || mhh != b)
            mww = c,
            mhh = b,
            mc.width = mww,
            mc.height = mhh,
            mwwp50 = mww + 50,
            mhhp50 = mhh + 50,
            mwwp150 = mww + 150,
            mhhp150 = mhh + 150,
            mww2 = mww / 2,
            mhh2 = mhh / 2,
            rdgbg();
        csc = Math.min(ww / mww, hh / mhh);
        trf(mc, "scale(" + csc + "," + csc + ")");
        mc.style.left =
            Math.floor(ww / 2 - mww / 2) + "px";
        mc.style.top = Math.floor(hh / 2 - mhh / 2) + "px"
    }
    nbg.style.width = ww + "px";
    nbg.style.height = hh + "px";
    redraw()
}
window.onresize = function() {
    resize()
};
for (i = ois.length - 1; 0 <= i; i--)
    ois[i].ii.src = ois[i].src;
0 == wic && startAnimation();
window.onmousemove = function(c) {
    (c = c || window.event) && "undefined" != typeof c.clientX && (xm = c.clientX - ww / 2,
        ym = c.clientY - hh / 2)
};

function setAcceleration(c) {
    null != snake && (snake.wmd = 1 == c)
}
window.oncontextmenu = function(c) {
    c.preventDefault();
    c.stopPropagation();
    return !1
};
window.ontouchmove = function(c) {
    dmutm = Date.now() + 1500;
    null != snake && (c = c || window.event) && (c = c.touches[0],
        "undefined" != typeof c.clientX ? (xm = c.clientX - ww / 2,
            ym = c.clientY - hh / 2) : (xm = c.pageX - ww / 2,
            ym = c.pageY - hh / 2))
};
var dmutm = 0,
    ltchx = -1,
    ltchy = -1,
    ltchmtm = -1;
window.ontouchstart = function(c) {
    dmutm = Date.now() + 1500;
    if (null != snake) {
        if (c = c || window.event) {
            var f, b;
            b = c.touches[0];
            "undefined" != typeof b.clientX ? (f = b.clientX - ww / 2,
                b = b.clientY - hh / 2) : (f = b.pageX - ww / 2,
                b = b.pageY - hh / 2);
            var h = Date.now();
            24 > Math.abs(f - ltchx) && 24 > Math.abs(b - ltchy) && 400 > h - ltchmtm && setAcceleration(1);
            ltchx = f;
            ltchy = b;
            ltchmtm = h;
            xm = f;
            ym = b
        }
        c.preventDefault()
    }
};
window.onmousedown = function(c) {
    if (0 == dmutm || Date.now() > dmutm)
        dmutm = 0,
        null != snake && (window.onmousemove(c),
            setAcceleration(1),
            c.preventDefault())
};
window.ontouchend = function() {
    setAcceleration(0)
};

function omu(c) {
    setAcceleration(0)
}
window.addEventListener("mouseup", omu);
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
if (testing)
    for (i = 0; 256 > i; i++)
        rdpspc[i] = -1;
var pfs = [],
    pft = 0,
    pf1 = 0,
    pf2 = 0,
    rpf1, rpf2, pf_nap = 0,
    pf_ep = 0,
    rpft = 0,
    pf;
for (i = 0; 100 > i; i++)
    pfs.push(0);
var pf_add = 0,
    pf_new_add = 0,
    pf_remove = 0,
    tpfa = new Float32Array(4E4);
for (i = 0; i < tpfa.length; i++)
    tpfa[i] = 32 * Math.random();
var pfd;
testing && (pfd = document.createElement("div"),
    pfd.style.position = "fixed",
    pfd.style.left = "4px",
    pfd.style.bottom = "69px",
    pfd.style.width = "170px",
    pfd.style.height = "364px",
    pfd.style.background = "rgba(0, 0, 0, .8)",
    pfd.style.color = "#80FF80",
    pfd.style.fontFamily = "Verdana",
    pfd.style.zIndex = 999999,
    pfd.style.fontSize = "11px",
    pfd.style.padding = "10px",
    pfd.style.borderRadius = "30px",
    pfd.textContent = "ayy lmao",
    document.body.appendChild(pfd));

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
    gsc = sgsc
}
var protocol_version = 2,
    connecting = !1,
    start_connect_mtm, play_btn_click_mtm = -1,
    waiting_for_sos = !1,
    sos_ready_after_mtm = -1;
// Fonction qui gère le protocole

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
        ws.binaryType = "arraybuffer";
        window.ws = ws;
        ws.onmessage = function(c) {
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
                        } - 1 != u && (f.wang == u && wangnuc++,
                            f.wang = u,
                            f != snake && (f.eang = u)); - 1 != A && (f.sp = A,
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
                        A = u = 0; - 1 == lb_fr && -1 == dead_mtm && (lb_fr = 0);
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
                    }
                else if ("m" == h) {
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
                        } - 1 != w && console.log("wtf")
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
var smh = document.getElementById("smh"),
    cstx = document.getElementById("cstx");
cstx.src = "FR" == country ? "/s/customskins-fr.png" : "BR" == country ? "/s/customskins-br.png" : "/s/customskins2.png";
try {
    "1" != localStorage.edttsg && (cstx.style.display = "inline")
} catch (c) {}
var fb = document.getElementById("fb");
fb.href = "https://www.facebook.com/sharer/sharer.php?u=" + encodeURIComponent("http://slither.io");
fb.onclick = function() {
    localStorage.edttsg = "1"
};
var fbh = document.getElementById("fbh"),
    twt = document.getElementById("twt");
twt.onclick = function() {
    localStorage.edttsg = "1"
};
twt.href = "http://twitter.com/intent/tweet?status=" + encodeURIComponent("Come and play http://slither.io #slitherio");
var twth = document.getElementById("twth"),
    csk = document.getElementById("csk"),
    cskh = document.getElementById("cskh"),
    want_quality = 1,
    grq = document.getElementById("grq"),
    grqh = document.getElementById("grqh"),
    phqi = document.createElement("img"),
    grqi = document.getElementById("grqi");
try {
    "0" == localStorage.qual ? (grqi.src = "/s/lowquality.png",
        want_quality = 0) : (phqi.src = "/s/lowquality.png",
        want_quality = 1)
} catch (c) {}
grq.onclick = function() {
    try {
        "0" == localStorage.qual ? (localStorage.qual = "1",
            grqi.src = "/s/highquality.png",
            want_quality = 1) : (localStorage.qual = "0",
            grqi.src = "/s/lowquality.png",
            want_quality = 0)
    } catch (c) {}
    return !1
};
var plq = document.getElementById("plq"),
    clq = document.getElementById("clq");
try {
    "1" == localStorage.edttsg && (cskh.style.display = "inline")
} catch (c) {}
var psk = document.getElementById("psk"),
    pskh = document.getElementById("pskh"),
    nsk = document.getElementById("nsk"),
    nskh = document.getElementById("nskh"),
    choosing_skin = !1;
psk.onclick = function() {
    if (playing && null != snake) {
        var c = snake.rcv;
        c--;
        0 > c && (c = max_skin_cv);
        setSkin(snake, c)
    }
    return !1
};
nsk.onclick = function() {
    if (playing && null != snake) {
        var c = snake.rcv;
        c++;
        c > max_skin_cv && (c = 0);
        setSkin(snake, c)
    }
    return !1
};
csk.onclick = function() {
    if (!playing && -1 == dead_mtm) {
        resetGame();
        choosing_skin = !0;
        pskh.style.opacity = 0;
        nskh.style.opacity = 0;
        skodiv.style.opacity = 0;
        pskh.style.display = "inline";
        nskh.style.display = "inline";
        skodiv.style.display = "inline";
        skodiv.style.left = Math.round(ww / 2 - skodiv.offsetWidth / 2) + "px";
        nick.disabled = !0;
        0 == mscps && setMscps(300);
        for (var c = [], f = 22; 1 <= f; f--)
            c.push({
                xx: grd / 2 - 10 * f,
                yy: grd / 2,
                fx: 0,
                fy: 0,
                exs: [],
                eys: [],
                efs: [],
                ems: [],
                eiu: 0,
                da: 0,
                ebx: 10,
                eby: 0
            });
        f = 0;
        try {
            var b = localStorage.snakercv;
            b == "" + Number(b) &&
                (f = Number(b))
        } catch (h) {}
        c = newSnake(1, grd / 2, grd / 2, f, 0, c);
        view_xx = grd / 2 - 105;
        view_yy = grd / 2;
        snake = c;
        c.nk = "";
        c.eang = c.wang = c.ang;
        c.sp = 4.8;
        c.spang = c.sp / spangdv;
        1 < c.spang && (c.spang = 1);
        c.sc = 1;
        c.scang = 1;
        c.ssp = nsp1 + nsp2 * c.sc;
        c.fsp = c.ssp + .1;
        c.wsep = 6 * c.sc;
        b = nsep / gsc;
        c.wsep < b && (c.wsep = b);
        c.sep = c.wsep;
        snl(c);
        c.alive_amt = 1;
        c.rex = 1.66;
        ws = {
            send: function(b) {},
            close: function() {}
        };
        high_quality = playing = connected = !0;
        gla = 1;
        wdfg = 0;
        qsm = 1;
        startShowGame();
        lbh.style.display = "none";
        lbs.style.display = "none";
        lbn.style.display =
            "none";
        lbp.style.display = "none";
        lbf.style.display = "none";
        vcm.style.display = "none";
        loch.style.display = "none"
    }
    return !1
};
nick.oninput = function() {
    var c = this.value,
        f = asciize(c);
    24 < f.length && (f = f.substr(0, 24));
    c != f && (this.value = f)
};
victory.oninput = function() {
    var c = this.value,
        f = asciize(c);
    140 < f.length && (f = f.substr(0, 140));
    c != f && (this.value = f)
};
nick.focus();
var lmch = document.createElement("div");
lmch.style.width = "450px";
lmch.style.height = "115px";
var lmc2 = document.createElement("canvas"),
    lmc = document.createElement("canvas"),
    lgsc = 1,
    lw = 900,
    lh = 270;
lmc.width = lmc2.width = lw;
lmc.height = lmc2.height = lh;
var lctx = lmc.getContext("2d"),
    lctx2 = lmc2.getContext("2d");
trf(lmc2, "scale(.5, .5)");
trfo(lmc2, "0% 0%");
lmch.appendChild(lmc2);
logo.appendChild(lmch);
var lts = [];
lts.push({
    pts: [107, 107, 80, 83, 53, 98, 31, 115, 55, 131, 98, 147, 101, 162, 101, 190, 66, 188, 49, 187, 34, 173],
    kc: 22,
    ws: 4,
    wr: .025,
    qm: .025,
    sp: .06,
    sz: 11
}, {
    pts: [150, 30, 150, 107, 150, 184],
    kc: 66,
    ws: 4,
    wr: .05,
    qm: .025,
    sp: .06,
    sz: 11
}, {
    pts: [207, 96, 207, 140, 207, 184],
    kc: 46,
    ws: 4,
    wr: .03,
    qm: .035,
    sp: .06,
    sz: 11
}, {
    pts: [207, 47, 207, 48.5, 207, 50],
    kc: 11,
    ws: 2,
    wr: .06,
    qm: .05,
    sp: .06,
    sz: 15,
    r: .5
}, {
    pts: [267, 65, 267, 114.5, 267, 164, 267, 194, 297, 186],
    kc: 66,
    ws: 6,
    wr: -.025,
    qm: -.0125,
    sp: .06,
    sz: 11,
    r: 1.5
}, {
    pts: [243, 94, 268, 94, 293, 94],
    kc: 66,
    ws: 4,
    wr: .015,
    qm: .025,
    sp: .06,
    sz: 9,
    r: 1.2
}, {
    pts: [338, 30, 338, 68.5, 338, 107, 338, 145.5, 338, 184, 338, 164, 338, 144, 338, 104, 378, 104, 418, 104, 418, 144, 418, 164, 418, 184],
    kc: 46,
    ws: 4,
    wr: .005,
    qm: .02,
    sp: .06,
    sz: 11,
    r: 2.1
}, {
    pts: [535, 175, 500, 201, 472, 175, 442, 138, 472, 105, 502, 84, 532, 105, 546, 118, 544, 139, 504, 139, 464, 139],
    kc: 35,
    ws: 6,
    wr: -.013,
    qm: -.025,
    sp: .06,
    sz: 11,
    r: 1.3
}, {
    pts: [591, 96, 591, 140, 591, 184, 591, 155, 591, 126, 613, 82, 652, 109],
    kc: 38,
    ws: 4,
    wr: .01,
    qm: -.035,
    sp: .06,
    sz: 11
}, {
    pts: [663, 177, 663, 178.5, 663, 180],
    kc: 11,
    ws: 2,
    wr: .06,
    qm: .05,
    sp: .06,
    sz: 15
}, {
    pts: [717,
        96, 717, 140, 717, 184
    ],
    kc: 33,
    ws: 4,
    wr: .06,
    qm: .05,
    sp: .06,
    sz: 11
}, {
    pts: [717, 47, 717, 48.5, 717, 50],
    kc: 11,
    ws: 2,
    wr: .06,
    qm: .05,
    sp: .06,
    sz: 15
}, {
    pts: [814, 186, 860, 188, 858, 136, 854, 96, 814, 96, 770, 96, 770, 136, 770, 186, 814, 186],
    kc: 43,
    ws: 4,
    wr: 0,
    qm: .0274,
    sp: .073,
    sz: 11,
    r: 1.5
});
for (i = 0; i < lts.length; i++)
    lts[i].mwig = 5;
var lga = 0,
    lgss = 0,
    ncka = 0,
    mwig = 4,
    lgfr = 0,
    lgtm = Date.now();

function showLogo(c) {
    var f = Date.now(),
        b = (f - lgtm) / 25;
    lgtm = f;
    var h, x, q, e, y, F, t, w, z, E, u, A, B, D, L;
    lgfr += b;
    if (0 == lts[lts.length - 1].mwig && 1 == lga && 1 == lgss && 1 == ncka)
        clearInterval(showlogo_iv),
        showlogo_iv = -1;
    else {
        if (c || 1 != lga)
            lga += .05 * b,
            1 <= lga && (lga = 1),
            lmc2.style.opacity = lga;
        1 != lgss && (lgss += .00375 * b,
            1 <= lgss && (lgss = 1));
        if (c || 1 != ncka)
            ncka += .006 * b,
            1 <= ncka && (ncka = 1),
            nick_holder.style.opacity = Math.min(1, 6 * ncka),
            is_mobile || (smh.style.opacity = Math.max(0, Math.min(1, 5 * (ncka - .05)))),
            .01 <= ncka && (playh.style.opacity = Math.min(1,
                5 * (ncka - .01)));
        lctx.clearRect(0, 0, lw, lh);
        for (f = 0; f < lts.length; f++) {
            var H = lts[f],
                K = H.pts,
                C = H.kc,
                J = H.ws,
                N = H.wr,
                O = H.qm;
            h = H.sp;
            var M = H.sz;
            L = H.r;
            var I = H.mwig;
            c && (H.wch = !0,
                I = 1E-7);
            H.wch && 0 != I && (I *= .982,
                I -= .001 * b,
                1 == render_mode && (I -= .005 * b),
                0 >= I && (I = 0),
                H.mwig = I);
            L || (L = 1);
            lctx.beginPath();
            9 > f ? (q = ctx.createLinearGradient(0, 70 * lgsc, 0, 230 * lgsc),
                q.addColorStop(0, "#80FFA0"),
                q.addColorStop(1, "#008040")) : (q = ctx.createLinearGradient(0, 50 * lgsc, 0, 265 * lgsc),
                q.addColorStop(0, "#9850FF"),
                q.addColorStop(1, "#281060"));
            lctx.fillStyle =
                q;
            B = !1;
            D = 0;
            q = K[0];
            e = K[1];
            z = q;
            E = e;
            var G = lgfr * h;
            for (u = 2; u < K.length; u += 4) {
                h = q;
                x = e;
                cx2 = K[u];
                cy2 = K[u + 1];
                q = K[u + 2];
                e = K[u + 3];
                for (var Q = 1; Q <= C; Q++) {
                    D++;
                    var P = Q / C;
                    y = h + (cx2 - h) * P;
                    F = x + (cy2 - x) * P;
                    t = cx2 + (q - cx2) * P;
                    w = cy2 + (e - cy2) * P;
                    y += (t - y) * P;
                    F += (w - F) * P;
                    z = Math.atan2(F - E, y - z);
                    B ? (z - A > Math.PI ? z -= 2 * Math.PI : z - A < -Math.PI && (z += 2 * Math.PI),
                        A += .05 * (z - A),
                        A %= 2 * Math.PI) : (B = !0,
                        A = z);
                    z = y;
                    E = F;
                    y += Math.cos(Math.PI / 2 + A) * Math.sin(G) * J * I;
                    F += Math.sin(Math.PI / 2 + A) * Math.sin(G) * J * I;
                    G -= .76 * O * J;
                    J += N;
                    lctx.beginPath();
                    w = 1.15 * M * Math.min(1, lgsc * (.2 +
                        .8 * lga) * (30 * lgss * L - D / 20 - f / 2));
                    .5 < w && (lctx.arc(y * lgsc, F * lgsc, w, 0, pi2),
                        H.wch = !0);
                    lctx.fill()
                }
            }
        }
        lctx2.clearRect(0, 0, lw, lh);
        lctx2.shadowColor = "#000000";
        lctx2.shadowBlur = 16;
        lctx2.shadowOffsetY = 7;
        lctx2.drawImage(lmc, 0, 0)
    }
}
var showlogo_iv = -1;
is_safari || is_mobile ? (ncka = lgss = lga = 1,
    showLogo(!0)) : showlogo_iv = setInterval("showLogo(false)", 25);
document.onkeydown = function(c) {
    c = c || window.event;
    var f = c.keyCode;
    if (37 == f)
        kd_l = !0;
    else if (39 == f)
        kd_r = !0;
    else if (38 == f || 32 == f)
        kd_u = !0,
        setAcceleration(1);
    else if (13 == f || 10 == f)
        if (want_victory_message) {
            if (0 < victory.value.length)
                save_btn.elem.onclick()
        } else {
            if (!connecting && !connected)
                play_btn.elem.onclick()
        }
    else
        16 == f && testing && (shifty = !0);
    testing && console.log("keydown: " + c.keyCode)
};
document.onkeyup = function(c) {
    c = c || window.event;
    c = c.keyCode;
    37 == c ? kd_l = !1 : 39 == c ? kd_r = !1 : 38 == c || 32 == c ? (kd_u = !1,
        setAcceleration(0)) : 16 == c && testing && (shifty = !1)
};
// Charge la liste des serveurs

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
                    y.ps = e)
            }
    }
}
var mba = null,
    mbi = null;
if (is_ios || is_android)
    mba = document.createElement("a"),
    mbi = document.createElement("img"),
    mbi.border = 0,
    mbi.draggable = "false",
    mbi.className = "nsi",
    mbi.width = 1245,
    mbi.height = 260,
    mbi.style.position = "fixed",
    mbi.style.left = "0px",
    mbi.style.bottom = "0px",
    mbi.style.zIndex = 70,
    mbi.src = "/s/n2.jpg",
    mba.appendChild(mbi),
    document.body.appendChild(mba),
    is_ios ? mba.href = "https://itunes.apple.com/us/app/slither.io/id1091944550?ls=1&mt=8" : is_android && (mba.href = is_amazon ? "http://www.amazon.com/Lowtech-Enterprises-slither-io/dp/B01E312TYQ/" :
        "https://play.google.com/store/apps/details?id=air.com.hypah.io.slither");
resize();
o = {
    f: function(c, f, b) {
        "success" == f && loadSos(c)
    }
};




// Fonctions pour récupérer des données

var xhrqs = [];


function getDataHandler(xmlhttp) {
    var o = null;
    var cur_tm = Date.now();
    for (var i = xhrqs.length - 1; i >= 0; i--) {
        if (xhrqs[i].xmlhttp == xmlhttp) {
            o = xhrqs[i];
        } else if ((cur_tm - xhrqs[i].creation_tm) > 60000) { // clean up failed/hanged requests
            xhrqs.splice(i, 1);
        }
    }
    return o;
}


function removeDataHandler(xmlhttp) {
    var cur_tm = Date.now();
    for (var i = xhrqs.length - 1; i >= 0; i--) {
        if (xhrqs[i].xmlhttp == xmlhttp) {
            xhrqs.splice(i, 1); // remove the target handler
        } else if ((cur_tm - xhrqs[i].creation_tm) > 60000) {
            xhrqs.splice(i, 1); // clean up failed/hanged requests/handlers too, as long as we're here.
        }
    }
}


function getData(u, o) {
    var xmlhttp;

    if (window.XMLHttpRequest) {
        xmlhttp = new XMLHttpRequest();
    } else {
        xmlhttp = new ActiveXObject('Microsoft.XMLHTTP');
    };

    o.xmlhttp = xmlhttp;
    o.done = false;
    o.creation_tm = Date.now();
    xhrqs.push(o);

    xmlhttp.onreadystatechange = function() {
        var o = getDataHandler(this);
        if (o != null) {
            if (this.readyState == 4) {
                if (!o.done) {
                    o.done = true;
                    if (this.status == 200) {
                        o.f(this.responseText, 'success', o);
                    } else {
                        o.f('', 'error', o);
                    };
                    removeDataHandler(this);
                };
            };
        };
    };

    xmlhttp.open('GET', u, true);
    xmlhttp.send();
};

getData("/i49526.txt", o);