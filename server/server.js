const express = require('express');
const app = express();
const cors = require('cors');
const PORT = 5001;
const { Pool } = require('pg');

const db_config = {
    user: 'postgres',
    host: 'localhost',
    database: 'event_tracker',
    password: 'adminpassword',
    port: 5432,
}

app.use(cors());
app.use(express.json());

const pool = new Pool(db_config);

app.get('/api/avg-time-per-page', async (req, res) => {
    try{

    }
}