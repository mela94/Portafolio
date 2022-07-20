import { Router } from 'express';

const router = Router();

router.get('/', (req, res) => res.render('index', {title: 'Home'}) )

router.get('/about', (req, res) => res.render('about', { title: 'Sobre mi'}) )

router.get('/curriculum', (req, res) => res.render('curriculum', {title: 'Curriculum'}))

export default router