const router = require('express').Router();
const { getFilms, getFilmById, createFilm, updateFilmById, updateFilmImage, deleteFilmById } = require('../controllers/filmsControllers');

router.get('/', getFilms);
router.post('/', createFilm);
router.get('/:id', getFilmById);
router.put('/:id', updateFilmById);
router.put('/image/:id', updateFilmImage);
router.delete('/:filmId', deleteFilmById);

module.exports = router;