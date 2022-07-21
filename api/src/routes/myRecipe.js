const { Router } = require('express');
const { Recipe, Diet } = require('../db.js')

const router = Router();


router.post("/", async (req, res, next) => {
    const {name,summary,steps,score,healthScore,dietTypes,image} = req.body
    try {
         let newRecipe = await Recipe.create({
            name,
            summary,
            steps,
            score,
            healthScore,
            image,
        });
        let dbDiets = await Diet.findAll({
            where: {
                name:
                dietTypes
            }
        })
        newRecipe.addDiet(dbDiets)
        res.send(newRecipe);
    } catch (e) {
        next(e)
    }
});






module.exports = router;