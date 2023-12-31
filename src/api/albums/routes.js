const routes = (handler) => [
    {
        method : 'POST',
        path : '/albums',
        handler : handler.postAlbumHandler,
    },
    {
        method : 'GET',
        path : '/albums/{id}',
        handler : handler.getAlbumByIdHandler,
    },
    {
        method : 'PUT',
        path : '/albums/{id}',
        handler : handler.putAlbumByIdHandler,
    },
    {
        method : 'DELETE',
        path : '/albums/{id}',
        handler : handler.deleteAlbumByIdHandler,
    },
    {
        method : 'GET',
        path : 'albums/{albumId}',
        handler : handler.getSongsByAlbumIdHandler,
    }
];

module.exports = routes;