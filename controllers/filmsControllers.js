const { Film } = require('../db');
const cloudinary = require('cloudinary').v2;
cloudinary.config(process.env.CLOUDINARY_URL);

async function getFilms(req, res) {
    try {
        const films = await Film.findAll();

        return res.json({
            ok: true,
            films: films
        });

    } catch (error) {
        res.status(500).json({
            ok: false,
            message: 'Somethin goes wrong.'
        })
    }
};

async function getFilmById(req, res) {
    const { id } = req.params;

    try {
        let film = await Film.findOne({
            where: {
                id
            }
        });

        return res.json({
            ok: true,
            film: film
        });

    } catch (error) {
        res.status(500).json({
            ok: false,
            message: 'Somethin goes wrong.'
        })
    }

}

async function createFilm(req, res) {

    const {
        title,
        description,
        score,
        director,
    } = req.body;

    let newFilm = {
        title,
        description,
        score,
        director,
    }

    if (!req.files || Object.keys(req.files).length === 0) {
        return res.status(400).json({
            ok: false,
            error: 'The image is required.'
        });
    }

    const image = req.files.image;
    const dividedName = image.name.split('.');
    const imageExtension = dividedName[dividedName.length - 1];

    const validExtensions = [
        'png', 'jpg', 'gif', 'jpeg'
    ];

    if (validExtensions.indexOf(imageExtension.toLowerCase()) < 0) {
        return res.status(400).json({
            ok: false,
            error: 'The attached image does not have a valid extension. Valid extensions are: ' + validExtensions.join(', ') + '.'
        });
    }

    try {
        const response = await cloudinary.uploader.upload(image.tempFilePath);

        const imgUrl = response?.secure_url ? response?.secure_url : '';

        newFilm.image = imgUrl;

        const film = await Film.create(newFilm);
        res.status(201).json(film);

    } catch (error) {
        return res.status(500).json({
            ok: false,
            error: 'Failed to save the attached file.'
        });
    }

};


async function updateFilmById(req, res) {
    const { id } = req.params;
    const {
        title,
        description,
        score,
        director,
    } = req.body;

    try {

        const updatedFilm = await Film.update(
            {
                title,
                description,
                score,
                director,
            },
            {
                where: {
                    id
                },
                fields: ['title', 'description', 'score', 'director'],
                returning: true
            }
        );

        return res.json({
            ok: true,
            film: updatedFilm[1]
        });

    } catch (error) {
        console.log("Update error: ", error);
        res.status(500).json({
            ok: false,
            message: 'Somethin goes wrong.'
        })
    }
}

async function updateFilmImage(req, res) {
    const { id } = req.params;

    const { savedImage } = req.body;

    // si no se recibe un archivo o el objeto recibido esta vacio se devuelve un error
    if (!req.files || Object.keys(req.files).length === 0) {
        return res.status(400).json({
            ok: false,
            error: 'The image is required.'
        });
    }

    console.log("req.files: ", JSON.stringify(req.files, null, 2));
    const image = req.files.image;
    const dividedName = image.name.split('.');
    const imageExtension = dividedName[dividedName.length - 1];

    const validExtensions = [
        'png', 'jpg', 'gif', 'jpeg'
    ];

    if (validExtensions.indexOf(imageExtension.toLowerCase()) < 0) {
        return res.status(400).json({
            ok: false,
            error: 'The attached image does not have a valid extension. Valid extensions are: ' + validExtensions.join(', ') + '.'
        });
    }

    console.log("image: ", JSON.stringify(image, null, 2));

    try {

        // Limpiar imágenes previas
        if (savedImage) {
            // Hay que borrar la imagen del servidor
            const nameArr = savedImage.split('/');
            const name = nameArr[nameArr.length - 1];
            const [public_id] = name.split('.');
            await cloudinary.uploader.destroy(public_id);
        }

        const response = await cloudinary.uploader.upload(image.tempFilePath);

        console.log("cloudinary response: ", JSON.stringify(response, null, 2));

        const imgUrl = response?.secure_url ? response?.secure_url : '';

        const updatedFilm = await Film.update(
            {
                image: imgUrl
            },
            {
                where: {
                    id
                },
                fields: ['image'],
                returning: true
            }
        );

        console.log("Updated film: ", updatedFilm);

        return res.json({
            ok: true,
            film: updatedFilm[1]
        });

    } catch (error) {
        console.log("Update image error: ", error);
        res.status(500).json({
            ok: false,
            message: 'Somethin goes wrong.'
        })
    }

}

async function deleteFilmById(req, res) {
    const { filmId } = req.params;

    try {
        await Film.destroy({
            where: { id: filmId }
        });

        return res.json({
            ok: true,
            success: 'Film deleted.'
        });

    } catch (error) {
        res.status(500).json({
            ok: false,
            message: 'Somethin goes wrong.'
        })
    }

}

module.exports = {
    getFilms, getFilmById, createFilm, updateFilmById, updateFilmImage, deleteFilmById
};