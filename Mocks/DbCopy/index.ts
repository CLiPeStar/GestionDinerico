import {IonicNativePlugin} from '@ionic-native/core';


export class SqliteDbCopyMock extends IonicNativePlugin {
    copy(dbname: string, location: number): Promise<any> {
        return new Promise<any>((resolve, reject) => {
            resolve('hola');
        });
    }
}
