// SDK initialization
const dotenv = require('dotenv-safe');
dotenv.config();

const ImageKit = require("imagekit");

exports.ImageKitUploader = new ImageKit({
    publicKey: process.env.IK_PUB_KEY,
    privateKey: process.env.IK_PRI_KEY,
    urlEndpoint: process.env.IK_ENDPOINT
});