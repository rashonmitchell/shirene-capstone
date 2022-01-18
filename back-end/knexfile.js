/**
 * Knex configuration file.
 *
 * You will not need to make changes to this file.
 */

require('dotenv').config();
const path = require("path");

const {
  DATABASE_URL = "postgres://cmphyavl:q7p7njfaJMqUBsVn1FrYCdT5dalHWIcF@kashin.db.elephantsql.com/cmphyavl",
  DATABASE_URL_DEVELOPMENT = "postgres://ifhcmjuw:ZAEKB30zriTueYdhrGVe3JxHON0kqTRt@kashin.db.elephantsql.com/ifhcmjuw",
  DATABASE_URL_TEST = "postgres://crhjlzum:n2Ptpeeyk9hFkGMocYBcT_VyNzSAYg3O@kashin.db.elephantsql.com/crhjlzum",
  DATABASE_URL_PREVIEW = "postgres://pajdfszj:9hfZP1_a173sBHBAlkCGG0wuQA1IEB3J@kashin.db.elephantsql.com/pajdfszj",
  DEBUG,
} = process.env;

module.exports = {
  development: {
    client: "postgresql",
    pool: { min: 1, max: 5 },
    connection: DATABASE_URL_DEVELOPMENT,
    migrations: {
      directory: path.join(__dirname, "src", "db", "migrations"),
    },
    seeds: {
      directory: path.join(__dirname, "src", "db", "seeds"),
    },
    debug: !!DEBUG,
  },
  test: {
    client: "postgresql",
    pool: { min: 1, max: 5 },
    connection: DATABASE_URL_TEST,
    migrations: {
      directory: path.join(__dirname, "src", "db", "migrations"),
    },
    seeds: {
      directory: path.join(__dirname, "src", "db", "seeds"),
    },
    debug: !!DEBUG,
  },
  preview: {
    client: "postgresql",
    pool: { min: 1, max: 5 },
    connection: DATABASE_URL_PREVIEW,
    migrations: {
      directory: path.join(__dirname, "src", "db", "migrations"),
    },
    seeds: {
      directory: path.join(__dirname, "src", "db", "seeds"),
    },
    debug: !!DEBUG,
  },
  production: {
    client: "postgresql",
    pool: { min: 1, max: 5 },
    connection: DATABASE_URL,
    migrations: {
      directory: path.join(__dirname, "src", "db", "migrations"),
    },
    seeds: {
      directory: path.join(__dirname, "src", "db", "seeds"),
    },
    debug: !!DEBUG,
  },
};
