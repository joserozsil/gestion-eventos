'use strict'

export const SECRET = process.env.SECRET || "SECRET KEY HERE"

export const SETTINGS = {
    "PROD_MODE": process.env.PROD_MODE || false,
    "MANT_MODE": process.env.MANT_MODE || false,
    "APP_PORT": process.env.APP_PORT || "8080",
    "DB_NAME": process.env.DB_NAME || "test",
    "DB_HOST": process.env.DB_URL || "localhost",
    "DB_USER": process.env.DB_USER || "root",
    "DB_PASSWORD": process.env.DB_PASSWORD || ""

}