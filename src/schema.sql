CREATE TABLE IF NOT EXISTS todos (
    id INTEGER PRIMARY KEY AUTOINCREMENT, 
    name TEXT,
    description TEXT,
    due_date TEXT,
    priority INTEGER,
    created_at TEXT
);

CREATE TABLE IF NOT EXISTS users (
    id INTEGER PRIMARY KEY AUTOINCREMENT, 
    email TEXT,
    password TEXT,
    created_at TEXT
);