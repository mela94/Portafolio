import { Router } from 'express';

const router = Router();

router.get('/', (req, res) => res.render('index', {title: 'Home'}) )

router.get('/about', (req, res) => res.render('about', { title: 'Sobre mi'}) )

router.get('/curriculum', (req, res) => res.render('curriculum', {title: 'Curriculum'}))

router.get('/Proyectos', (req, res) => res.render('Proyectos', {title: 'Proyectos'}))

export default router