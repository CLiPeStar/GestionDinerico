import {DatosMock} from '../datosMock';
import {SQLite, SQLiteObject} from '@ionic-native/sqlite/ngx';
import {Injectable} from '@angular/core';

export interface SQLiteDatabaseConfig {
  /**
   * Name of the database. Example: 'my.db'
   */
  name: string;
  /**
   * Location of the database. Example: 'default'
   */
  location?: string;
  /**
   * iOS Database Location. Example: 'Library'
   */
  iosDatabaseLocation?: string;
}

export class SQLiteMock extends SQLite {
  /**
   * Open or create a SQLite database file.
   *
   * See the plugin docs for an explanation of all options: https://github.com/litehelpers/Cordova-sqlite-storage#opening-a-database
   *
   * @param config {SQLiteDatabaseConfig} database configuration
   * @return Promise<SQLiteObject>
   */
  create(config: SQLiteDatabaseConfig): Promise<SQLiteObject> {
    const theResult: SqliteObjectMock = new SqliteObjectMock(config);
    return new Promise((resolve, reject) => {
      resolve(theResult);
    });
  }

  /**
   * Verify that both the Javascript and native part of this plugin are installed in your application
   * @returns {Promise<any>}
   */
  echoTest(): Promise<any> {
    return new Promise((resolve, reject) => {
      resolve('');
    });
  }

  /**
   * Deletes a database
   * @param config {SQLiteDatabaseConfig} database configuration
   * @returns {Promise<any>}
   */
  deleteDatabase(config: SQLiteDatabaseConfig): Promise<any> {
    return new Promise((resolve, reject) => {
      resolve('');
    });
  }

}

export class SqliteObjectMock extends SQLiteObject {
  executeSql(statement: string, params: any): Promise<any> {

    const datosMock = new DatosMock();
    return new Promise<any>((resolve, reject) => {
      const datos = datosMock.executeQuery(statement);
      resolve(datos);
    });
  }

}
