import VnNativeOsindexInterface from "./VnNativeOsindexInterface";
export default class VnNativeOsindex implements VnNativeOsindexInterface {
    isOs() : string {
        let data : string;
        let platforms : any;
        platforms = window;
        data = platforms.vnnativeos && platforms.vnnativeos.getOsName() ? platforms.vnnativeos.getOsName() : "web";
        return data;
    }
}