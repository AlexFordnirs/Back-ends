const User = require('../models/User');
const bcrypt = require("bcryptjs");
const {checkAuth} = require("./admin-controller");

const handleError = (res, error) => {
    res.status(500).json({ error });
}

function getZodiacSign(dateString) {
    const dateParts = dateString.split('/');
    const year = parseInt(dateParts[0]);
    const month = parseInt(dateParts[1]);
    const day = parseInt(dateParts[2]);
  
    const zodiacSigns = [
      { sign: 'Aquarius', start: { month: 1, day: 20 }, end: { month: 2, day: 18 } },
      { sign: 'Pisces', start: { month: 2, day: 19 }, end: { month: 3, day: 20 } },
      { sign: 'Aries', start: { month: 3, day: 21 }, end: { month: 4, day: 19 } },
      { sign: 'Taurus', start: { month: 4, day: 20 }, end: { month: 5, day: 20 } },
      { sign: 'Gemini', start: { month: 5, day: 21 }, end: { month: 6, day: 20 } },
      { sign: 'Cancer', start: { month: 6, day: 21 }, end: { month: 7, day: 22 } },
      { sign: 'Leo', start: { month: 7, day: 23 }, end: { month: 8, day: 22 } },
      { sign: 'Virgo', start: { month: 8, day: 23 }, end: { month: 9, day: 22 } },
      { sign: 'Libra', start: { month: 9, day: 23 }, end: { month: 10, day: 22 } },
      { sign: 'Scorpio', start: { month: 10, day: 23 }, end: { month: 11, day: 21 } },
      { sign: 'Sagittarius', start: { month: 11, day: 22 }, end: { month: 12, day: 21 } },
      { sign: 'Capricorn', start: { month: 12, day: 22 }, end: { month: 1, day: 19 } }
    ];
  
    let sign = '';
  
    for (const zodiac of zodiacSigns) {
      if (
        (month === zodiac.start.month && day >= zodiac.start.day) ||
        (month === zodiac.end.month && day <= zodiac.end.day)
      ) {
        sign = zodiac.sign;
        break;
      }
    }
  
    return sign;
  }
const getUsers = async (req, res) => {
    const resuild = getZodiacSign(req.body)
        User
            .then((resuild) => {
                res
                    .status(200)
                    .json(resuild);
            })
            .catch((err) => handleError(res, err));
    
   
};


module.exports = {
    getUsers
};