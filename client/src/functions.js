import cookie from 'js-cookie';

export function testLoginFunction() {
    var myCookie = cookies.get('mms_sid');
    return myCookie
}
