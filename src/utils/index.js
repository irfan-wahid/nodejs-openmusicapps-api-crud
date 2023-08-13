const mapAlbumDBToModel = ({
    id,
    name,
    year,
    createdAt,
    updatedAt,
}) => ({
    id,
    name,
    year,
    created_at : createdAt,
    updated_at : updatedAt,
});

const mapSongDBToModel = ({
    id,
    title,
    year,
    genre,
    performer,
    duration,
    albumId,
    createdAt,
    updatedAt,
}) => ({
    id,
    title,
    year,
    genre,
    performer,
    duration,
    albumId,
    created_at : createdAt,
    updatedAt : updatedAt,
});

module.exports = {mapAlbumDBToModel, mapSongDBToModel};

