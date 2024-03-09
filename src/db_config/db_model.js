const db_provider = require('./db_provider')
require('dotenv').config(   {path: __dirname + '/.env'});
const { DB_NAME, DB_USER, DB_PASSWORD, DB_HOST } = process.env;

class db_model extends db_provider {
    constructor(connection_type) {
        super(DB_NAME, DB_USER, DB_PASSWORD, DB_HOST);
        this.query_res_obj = new query_response();
        if (connection_type === 'read') {
            this.dbcon = this.read_connection();
        } else if (connection_type === 'write') {
            this.dbcon = this.write_connection();
        }
    }

     fn__select_query(sql, params) {
        return new Promise((resolve, reject) => {
            this.dbcon.query(sql, params, (err, result) => {
                if (err) {
                    this.query_res_obj.is_success = false
                    this.query_res_obj.error = err
                    reject(this.query_res_obj)
                }
                this.query_res_obj.is_success = true
                this.query_res_obj.data_array = result
                resolve(this.query_res_obj)
            })
        })
    }

    fn__select_first_record(sql, params) {
        return new Promise((resolve, reject) => {
            this.dbcon.query(sql, params, (err, result) => {
                if (err) {
                    this.query_res_obj.is_success = false
                    this.query_res_obj.error = err
                    reject(this.query_res_obj)
                }
                this.query_res_obj.is_success = true
                this.query_res_obj.data_array = result[0]??[]
                resolve(this.query_res_obj)
            })
        })
    }

    fn__execute_query(sql, params) {
        return new Promise((resolve, reject) => {
            if (this.connection_type === 'read') {
                this.query_res_obj.is_success = false
                this.query_res_obj.error = 'Invalid Connection Type'
                reject(this.query_res_obj)
            }
            this.dbcon.query(sql, params, (err, result) => {
                if (err) {
                    this.query_res_obj.is_success = false
                    this.query_res_obj.error = err
                    reject(this.query_res_obj)
                }
                this.query_res_obj.is_success = true
                this.query_res_obj.data_array = result
                this.query_res_obj.rows_effected = result.affectedRows
                resolve(this.query_res_obj)
            })
        })
    }

    fn__commit() {
        return new Promise((resolve, reject) => {
            if (this.connection_type === 'read') {
                this.query_res_obj.is_success = false
                this.query_res_obj.error = 'Invalid Connection Type'
                return this.query_res_obj
            }
            this.dbcon.commit((err) => {
                if (err) {
                    this.query_res_obj.is_success = false
                    this.query_res_obj.error = err
                    reject(this.query_res_obj)
                }
                this.query_res_obj.is_success = true
                resolve(this.query_res_obj)
            })
        })
    }

    fn__rollback() {
        return new Promise((resolve, reject) => {
            if (this.connection_type === 'read') {
                this.query_res_obj.is_success = false
                this.query_res_obj.error = 'Invalid Connection Type'
                return this.query_res_obj
            }
            this.dbcon.rollback((err) => {
                if (err) {
                    this.query_res_obj.is_success = false
                    this.query_res_obj.error = err
                    reject(this.query_res_obj)
                }
                this.query_res_obj.is_success = true
                resolve(this.query_res_obj)
            })
        })
    }
}

class query_response {
    constructor() {
        this.is_success = null
        this.rows_effected = null
        this.data_array = []
        this.error = null
    }
}

module.exports = db_model