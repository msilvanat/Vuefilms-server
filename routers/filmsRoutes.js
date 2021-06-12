const router = require('express').Router();
const { getFilms, getFilmById, createFilm, updateFilmById, updateFilmImage, deleteFilmById, deleteFilmImage } = require('../controllers/filmsControllers');

router.get('/', getFilms);
router.post('/', createFilm);
router.get('/:id', getFilmById);
router.put('/:id', updateFilmById);
router.put('/image/:id', updateFilmImage);
router.delete('/:filmId', deleteFilmById);
router.put('/image/delete/:id', deleteFilmImage);

module.exports = router;