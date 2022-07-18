const { Router } = require('express');
const { Recipe, Diet } = require('../db.js')

const router = Router();


router.post("/", async (req, res) => {
    const {name,summary,steps,score,healthScore,dietTypes,image} = req.body
    try {
        // if(!name){
        // return res.status(404).send("Incomplete recipe, please complete all fields")
        //}
        let newRecipe = await Recipe.create({
            name,
            summary,
            steps,
            score,
            healthScore,
            image,
        });
        let dbDiets = await Diet.findAll({
            where: {name:dietTypes}
        })
        //console.log(dbDiets)
        newRecipe.addDiet(dbDiets)
        res.send(newRecipe);
    } catch (e) {
        console.log(e)
    }
});

// router.delete("/", async(req, res) => {
//     const { name } = req.body
//     if (!name) {
//         return res.status(404).send("there is no recipe with that name")
//     }

// });




module.exports = router;