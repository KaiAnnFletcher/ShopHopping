module.exports =
{
  "development": {
    "username": "root",
    "password": "root",
    "database": "sequelize_passport",
    "host": "127.0.0.1",
    "dialect": "mysql"
  },
  "test": {
    "username": "root",
    "password": "root",
    "database": "sequelize_passport",
    "host": "127.0.0.1",
    "dialect": "mysql",
    "logging": false
  },
  "production": {
    "use_env_variable": "JAWSDB_URL",
    "dialect": "mysql"
  }
}
