import cookie from 'js-cookie';

export function testLoginFunction() {
    var myCookie = cookie.get('mms_sid');
    return myCookie
}
