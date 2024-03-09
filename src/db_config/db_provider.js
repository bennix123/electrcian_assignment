const mysql = require('mysql')
  class db_provider {
    constructor(db_name, username, password, db_hostname) {
        this.db_name = db_name
        this.username = username
        this.password = password
        this.db_hostname = db_hostname
        let con = mysql.createConnection({
            host: this.db_hostname,
            user: this.username,
            password: this.password,
            database: this.db_name,
        })

        con.connect((err) => {
            if (err) {
                console.error('Error connecting to MySQL database:', err)
                return
            }
            console.log('Connected to MySQL database')
        })
        this.connection = con
    }

    //to read the data from the database
    read_connection() {
        this.connection.query('SET SESSION TRANSACTION READ ONLY', (error) => {
            if (error) {
                console.error('Error setting read-only mode:', error)
                this.connection.end() // Close the connection if setting read-only mode fails
            }
        })
        return this.connection
    }

    //to write the data to the database
    write_connection() {
        this.connection.query('SET SESSION TRANSACTION READ WRITE', (error) => {
            if (error) {
                console.error('Error setting read-write mode:', error)
                this.connection.end() // Close the connection if setting read-write mode fails
            }
        })

        // Return the read-write MySQL connection
        return this.connection
    }
}
module.exports = db_provider
