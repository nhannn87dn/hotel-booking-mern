/* load environment variables from .env file */
const dotenv = require('dotenv');
const Joi = require('joi');
const path = require('path');

dotenv.config({
    path: path.join(__dirname, "../.env")
});

/* validate env  */
const envVarSchema = Joi.object().keys({
    NODE_ENV: Joi.string().valid("development", "production","test").required().default("development"),
    PORT: Joi.number().default(3000),
    MONGO_URI: Joi.string().required().description("MongoDB connect URI"),
    MONGO_COLLECTION: Joi.string().required().description("MongoDB Collection Name"),
    JWT_SECURE_KEY: Joi.string().required().description('JWT Secret Key'),
}).unknown();

const { value: envVars, error} = envVarSchema
.prefs({
  errors:{label: "key"}
})
.validate(process.env);

if(error){
    throw new Error(`Config validation error: ${error.message} `);
}

module.exports = {
    publicUrl: envVars.PUBLIC_URL,
    env: envVars.NODE_ENV,
    port: envVars.PORT,
    timezone: {city: envVars.TIMEZONE_CITY, offset: envVars.TIMEZONE_OFFSET},
    mongoose: {url: envVars.MONGO_URI, name: envVars.MONGO_COLLECTION},
    jwt: {secure_key: envVars.JWT_SECURE_KEY},
    mail: {host: envVars.NODE_MAIL_HOST, port: envVars.NODE_MAIL_PORT, user: envVars.NODE_MAIL_USER, pass: envVars.NODE_MAIL_PASS},
    upload: {
        img_dir:  envVars.STORAGE_IMAGES_DIR,
        imgMaxSize: envVars.MAX_SIZE_IMAGES_BYTES,
        file_dir: envVars.STORAGE_FILES_DIR,
        fileMaxSize: envVars.MAX_SIZE_FILES_BYTES,

    },
}
