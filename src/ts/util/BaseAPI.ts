import * as d3 from 'd3';
import * as R from 'ramda'

/**
 * Format the API URL based, assuming all backend calls are to the '/api' endpoint
 * 
 * @param host The host at which this app is deployed
 */
const urlFormat = (host) => {
    if (host == "localhost") return "http://localhost:5000/api";
    return `http://${host}/api`;
}

const baseurl = urlFormat(window.location.hostname)

/**
 * Create a GET URL based on an base URL and parameter object.
 * 
 * @param base Base URL on which to add get parameters
 * @param params Object to add to URL for get request
 */
export function makeUrl(base: string, params?: object):string {
    if (params){
        let out: string = base + "?";

        Object.keys(params).forEach( k => {
            out += k;
            out += '=';
            out += params[k];
            out += "&";
        })
        return out.replace(/&$/g, "");
    }
    else {
        return base;
    }
};

/**
 * Certain character symbols are not allowed to be sent via get request. This function correctly filters out the "#" symbol
 */
const filterHash = R.compose(
    R.replace(/\#/g, "%23"), 
    R.prop('text'));

/**
 * Template class for making API calls to a backend
 */
export class BaseAPI {
    constructor(private baseURL: string=null) {
        if (this.baseURL == null) {
            this.baseURL = baseurl;
        }
    }

    exampleCall<T extends any>(paramA:string, paramB:string): Promise<T>{
        const toSend = {
            paramA: paramA,
            paramB: paramB,
        };

        const url = makeUrl(this.baseURL + "/desired-route", toSend)
        console.log("--- GET " + url);

        return d3.json(url)
    }
};