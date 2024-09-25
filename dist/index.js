"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const dotenv_1 = __importDefault(require("dotenv"));
const db_1 = __importDefault(require("./config/db"));
const authRoutes_1 = __importDefault(require("./routes/authRoutes"));
const taskRoutes_1 = __importDefault(require("./routes/taskRoutes"));
dotenv_1.default.config();
(0, db_1.default)();
const app = (0, express_1.default)();
app.use((0, cors_1.default)({
    origin: 'http://localhost:3001',
    methods: 'GET,POST,PUT,PATCH,DELETE',
    credentials: true,
}));
app.use(express_1.default.json());
app.use('/api/auth', authRoutes_1.default);
app.use('/api/todos', taskRoutes_1.default);
const PORT = Number(process.env.PORT) || 3000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
