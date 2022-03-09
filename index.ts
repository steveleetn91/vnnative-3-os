import VnNativeOsindexInterface from "./VnNativeOsindexInterface";
export default class VnNativeOsindex implements VnNativeOsindexInterface {
    isOs() : string {
        let data : string;
        let platforms : any;
        platforms = window;
        data = platforms.device && platforms.device.platform ? platforms.device.platform : "browser";
        return data;
    }
}