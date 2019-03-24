const express = require('express');
const router = express.Router();
const db = require('../models');


   
router.post('/:userid/name',  (req, res) => {

        // firstName

        let firstNameUser = db.User.find({ where: {firstName: req.body.firstName } })
                            .then(firstNameUser => {
                               if (firstNameUser) {
                                   return res.status(403).json({ error: 'Cant use this name' });
                               }
                               
                               db.User.set("firstName");
                           
                               db.User.updateAttributes()
                               //db.User.save();
                            
                            });
                        

        // lastName
        let lastNameUser = db.User.find({ where: {lastName: req.body.lastName } })
                        .then(lastNameUser => {
                           if (lastNameUser) {
                               return res.status(403).json({ error: 'Cant use this name' });
                           }
            
                 db.User.set("lastName");

                 db.User.updateAttributes()
                 //db.User.save();
        
        });

        // password
        let passwordUser = db.User.find({ where: {password: req.body.password } })
                        .then(passwordUser => {
                           if (passwordUser) {
                               return res.status(403).json({ error: 'Cant use this password' });
                           }
            
                 db.User.set("password");

                 db.User.updateAttributes()
                 //db.User.save();
        
        });


  //  res.send('TODO');
});

module.exports = router;