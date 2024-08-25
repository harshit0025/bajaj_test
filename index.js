import express from 'express';
import cors from 'cors';

const app = express();

app.use(cors());
app.use(express.json());


app.post('/bfhl', (req, res) => {
    const data = req.body.data;

    const numbers = [];
    const alphabets = [];
    let highestLowercase = '';

    data.forEach(item => {
        if (!isNaN(item)) {
            numbers.push(item);
        } else {
            alphabets.push(item);
            if (item === item.toLowerCase() && (highestLowercase === '' || item > highestLowercase)) {
                highestLowercase = item;
            }
        }
    });

    const response = {
        is_success: true,
        user_id: "Harshit_Yadav_25052004",
        email: "john@xyz.com",
        roll_number: "21BEC0101",
        numbers: numbers,
        alphabets: alphabets,
        highest_lowercase_alphabet: highestLowercase ? [highestLowercase] : []
    };

    res.json(response);
})

app.get('/bfhl', (req, res) => {
    const response = {
        operation_code: 1
    };
    res.status(200).json(response);
})



app.listen(5000, () => {
    console.log(`Server is running on port 5000`);
})



