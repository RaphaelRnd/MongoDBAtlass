"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.connectToDatabase = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
// Remplacez les valeurs entre < > par vos informations
const connectionString = 'mongodb+srv://raphael:raphael141104@dbclusterraphael.2poqbl0.mongodb.net/?retryWrites=true&w=majority&appName=AtlasApp';
const connectToDatabase = () => __awaiter(void 0, void 0, void 0, function* () {
    try {
        yield mongoose_1.default.connect(connectionString);
        console.log('Connecté à MongoDB Atlas');
    }
    catch (error) {
        console.error('Erreur de connexion à MongoDB :', error);
        process.exit(1); // Quitte l'application en cas d'erreur de connexion
    }
});
exports.connectToDatabase = connectToDatabase;
