const db = require('./db');

class Timer {
    constructor(id, time, level, id_category, id_user) {
        this.id = id;
        this.time = time;
        this.level = level;
        this.id_category = id_category;
        this.id_user = id_user;
    }

    // === ===  CREATE  === ===  [[START]]

    // Inserts a new record in the Timers table
    // Returns a new instance of the Timer class
    static createTimer(time, level, id_category, id_user) {
        return db.one(`
                INSERT INTO timers 
                    (time, level, id_category, id_user)
                VALUES 
                    ($1, $2, $3, $4)
                RETURNING id`,
                [time, level, id_category, id_user]
            )
            .then(data => {
                return new Timer (data.id, time, level, id_category, id_user);
            });
    }
    // === ===  CREATE  === ===  [[END]]


    // === ===  RETRIEVE  === ===  [[START]]
    
    // Gets all records from Timers table
    // Returns an array of Timer class instances 
    static getAll() {
        return db.any(`
                SELECT * FROM timers`
            )
            .then(timerArray => {
                const instanceArray = timerArray.map(timerObj => {
                    return new Timer(timerObj.id, timerObj.time, timerObj.level, timerObj.id_category, timerObj.id_user);
                });
                return instanceArray;
            });
    }

    // Gets individual record from Timers table for a specific ID
    // Returns a Timer class instance
    static getById(id) {
        return db.one(`
                SELECT * FROM timers WHERE id = $1`,
                [id]
            )
            .then(result => {
                return new Timer(result.id, result.time, result.level, result.id_category, result.id_user);
            });
        }

    // Gets all records from Timers table for a specific User ID
    // The returnAllData flag determines what is returned:
    //   - Returns an array of Timer IDs if returnAllData is false
    //   - Returns an array of Timer class instances if returnAllData is true or omitted
    static getByUserId(userID, returnAllData=true) {
        if (returnAllData) {
            return db.any(`
                    SELECT * FROM timers WHERE id_user = $1`,
                    [userID]
                )
                .then(tArray => {
                    const instanceArray = tArray.map(t => {
                        return new Timer(t.id, t.time, t.level, t.id_category, t.id_user);
                    });
                    return instanceArray;
                });
        } else {
            return db.any(`
                    SELECT id FROM timers WHERE id_user = $1`,
                    [userID]
                )
                .then(result => {
                    return result.map(r => r.id);
                });
        }
    }

    // Gets the IDs all records from Timers table for a specific User ID
    // Returns an array of Timer IDs for all timers the user owns
    static getByCategory(catID) {
        return db.any(`
                SELECT id FROM timers WHERE id_category = $1`,
                [catID]
            )
            .then(result => {
                return result.map(r => r.id);
            });
    }




// !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
//         CODE BELOW HAS NOT BEEN UPDATED YET      !!
// !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!

// Need instance functions for allowing a User instance to request list of its timers and its categories

    // Gets the IDs all records from Timers table for a specific User ID
    // Returns an array of Timer IDs for all timers the user owns
    static getByCat(catID) {
        return db.any(`
                SELECT id FROM timers WHERE id_category = $1`,
                [catID]
            )
            .then(result => {
                return result.map(r => r.id);
            });
    }

    // === ===  RETRIEVE  === ===  [[END]]


    // === ===  UPDATE  === ===  [[START]]

    // Updates the time for THIS category
    // Returns boolean True if successful, False if unsuccessful
    updateCategoryType(newType) {
        return db.result(`
                UPDATE categories SET time=$2 WHERE id=$1`,
                [this.id, newType]
            )
            .then(result => {
                return result.rowCount === 1;
            });
    }

    // Updates the level for THIS category
    // Returns boolean True if successful, False if unsuccessful
    updateLevels(newLevels) {       // newLevels should be boolean (true or false)
        return db.result(`
                UPDATE categories SET level=$2 WHERE id=$1`,
                [this.id, newLevels]
            )
            .then(result => {
                return result.rowCount === 1;
            });
    }

    // Could add an updateUserId for admin purposes, but not needed now

    // === ===  UPDATE  === ===  [[END]]

    
    // === ===  DELETE  === ===  [[START]]
    
    // Delete THIS category
    delete() {
        return db.result(`
                DELETE FROM categories WHERE id = $1`,
               [this.id]
        );
    }

    // Delete a specific category by ID
    static deleteById(id) {
        return db.result(`
                DELETE FROM categories WHERE id = $1`,
                [id]
        );
    }

    // Delete all the categories owned by a specific User ID
    static deleteByUserId(id_user) {
        return db.result(`
                DELETE FROM categories WHERE id_user = $1`,
                [id_user]
        );
    }

    // === ===  DELETE  === ===  [[END]]



}
module.exports = Timer;
