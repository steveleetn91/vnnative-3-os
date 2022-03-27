import VnNativeOsindexInterface from "./VnNativeOsindexInterface";
export default class VnNativeOsindex implements VnNativeOsindexInterface {
    isOs() : string {
        let data : string;
        let platforms : any;
        platforms = window;
        data = platforms.device && platforms.device.platform ? platforms.device.platform : "browser";
        if (platforms.vnnativeos) {
            if (platforms.vnnativeos.getOsName()) {
                data = platforms.vnnativeos.getOsName();
            }
        }
        return data;
    }
}