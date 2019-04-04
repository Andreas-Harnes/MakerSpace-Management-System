function getCookie() {
    var name = "mms_sid";
    var dc = document.cookie;
    var prefix = name + "=";
    var begin = dc.indexOf("; " + prefix);
    if (begin == -1) {
        begin = dc.indexOf(prefix);
        if (begin != 0) return null;
    }
    else
    {
        begin += 2;
        var end = document.cookie.indexOf(";", begin);
        if (end == -1) {
        end = dc.length;
        }
    }
    // because unescape has been deprecated, replaced with decodeURI
    //return unescape(dc.substring(begin + prefix.length, end));
    return decodeURI(dc.substring(begin + prefix.length, end));
} 

export function testLoginFunction() {
    var myCookie = getCookie();
    console.log(myCookie)
    // if (myCookie == null) {
    //     return "Not logged in"
    // }
    // else {
    //     return "Logged in";
    // }
}
