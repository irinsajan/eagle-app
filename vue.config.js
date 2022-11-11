//proxy helps tp avoid CORS error while calling APIs

module.exports = {
    devServer: {
        proxy: 'http://rest.cameramanager.com/'
    }
}



