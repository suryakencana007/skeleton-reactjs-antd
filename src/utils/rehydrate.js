import Cookies from 'js-cookie';
import { UUID } from './uuid';


export function setCookie(cname, cvalue, exdays) {
    // var d = new Date();
    // d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
    // var expires = 'expires=' + d.toGMTString();
    // document.cookie = cname + '=' + cvalue + '; ' + expires;
    Cookies.set(cname, cvalue, { expires: exdays });
}

export function getCookie(cname) {
    // var name = cname + '=';
    // var ca = document.cookie.split(';');
    // for (var i = 0; i < ca.length; i++) {
    //     var c = ca[i];
    //     while (c.charAt(0) == ' ') c = c.substring(1);
    //     if (c.indexOf(name) == 0) {
    //         return c.substring(name.length, c.length);
    //     }
    // }
    const cookies = Cookies.get(cname);
    return cookies ? cookies : null;
}

export const rehydrate = () => (getCookie('auth-token') ||
    getCookie('rehydrate-token') ||
    setCookie('rehydrate-token', UUID(), 1));
