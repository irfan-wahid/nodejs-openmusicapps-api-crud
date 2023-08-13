require('dotenv').config();

const Hapi = require('@hapi/hapi');
const albums = require('./api/albums')
const songs = require('./api/songs')
const AlbumsService = require('./services/AlbumsService');
const AlbumsValidator = require('./api/validator/albums');
const SongsService = require('./services/SongsService');
const SongsValidator = require('./api/validator/songs');

const init = async () => {
    const albumService = new AlbumsService();
    const songService = new SongsService();

    const server = Hapi.Server({

        port : process.env.PORT,
        host : process.env.HOST,
        routes : {
            cors : {
                origin : ['*'],
            },
        },
    });

    await server.register([
        {
            plugin: albums,
            options: {
                service : albumService,
                validator : AlbumsValidator,
            },
        },
        {
            plugin: songs,
            options: {
                service : songService,
                validator : SongsValidator,
            },
        },
    ]);

    await server.start();
    console.log(`Server berjalan pada ${server.info.uri}`);
}

init();