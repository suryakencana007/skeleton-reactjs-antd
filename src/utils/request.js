import axios from 'axios';
import lodash from 'lodash';
import cookie from 'js-cookie';
import qs from 'qs';
import pathToRegexp from 'path-to-regexp';
import config from 'kao-config';

const {
  CORS,
  APIURL,
  APIPORT,
  APIPREFIX,
} = config;


const fetch = (req) => {
  const api = axios.create({
    baseURL: `${APIURL}:${APIPORT}/${APIPREFIX}`,
  });

  return (options) => {
  // `headers` are custom headers to be sent
  // headers: {'X-Requested-With': 'XMLHttpRequest'}
  // headers: { Authorization: `Bearer ${token}`}
  // api.defaults.headers.common['Authorization']
    let { url } = options;
    const {
      auth = false,
      req, // eslint-disable-line no-shadow
      method = 'get',
      data,
    } = options;

    const cloneData = lodash.cloneDeep(data);

    // for security header
    const token = this.token || cookie.get('Authorization') || (req && req.cookies.Authorization) || null;
    if (auth && token && token !== null) api.defaults.headers.common.Authorization = token;

    try {
      let domin = '';
      if (url.match(/[a-zA-z]+:\/\/[^/]*/)) {
        domin = url.match(/[a-zA-z]+:\/\/[^/]*/)[0];
        url = url.slice(domin.length);
      }
      const match = pathToRegexp.parse(url);
      url = pathToRegexp.compile(url)(data);
      match.map((item) => {
        if (item instanceof Object && item.name in cloneData) {
          delete cloneData[item.name];
        }
        return item;
      });
      url = domin + url;
    } catch (e) {
      console.log(e.message);
    }


    switch (method.toLowerCase()) {
      case 'get':
        return api.get(url, {
          params: cloneData,
        });
      case 'delete':
        return axios.delete(url, {
          data: cloneData,
        });
      case 'post':
        return api.post(url, qs.stringify(cloneData));
      case 'put':
        return api.put(url, cloneData);
      case 'patch':
        return api.patch(url, cloneData);
      default:
        return axios(options);
    }
  };
};

export default function request(req = null) {
  const api_fetch = fetch(req);

  return (options, dispatch) => {
    if (options.url && options.url.indexOf('//') > -1) {
      const origin = `${options.url.split('//')[0]}//${options.url.split('//')[1].split('/')[0]}`;
      if (window.location.origin !== origin) {
        if (CORS && CORS.indexOf(origin) > -1) {
          options.fetchType = 'CORS';
        }
      }
    }
    if (dispatch instanceof Function) {
      dispatch({ type: 'show' });
    }

    return api_fetch(options).then((response) => {
      const { statusText, status } = response;
      const data = response.data;
      return {
        success: true,
        message: statusText,
        status,
        ...data,
      };
    }).catch((error) => {
      const { response } = error;
      let msg;
      let status;
      let otherData = {};
      if (response) {
        const { data, statusText } = response;
        otherData = data;
        status = response.status;
        msg = data.message || statusText;
      } else {
        status = 600;
        msg = 'Network Error';
      }
      return {
        success: false, status, message: msg, ...otherData,
      };
    });
  };
}
