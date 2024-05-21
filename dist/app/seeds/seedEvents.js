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
const mongoose_1 = __importDefault(require("mongoose"));
const models_1 = require("../models");
const { MONGO_CONNECTION_STRING } = process.env;
const data = [
    new models_1.EventModel({
        title: "Tech Conference 2024",
        description: "An annual conference bringing together technology enthusiasts and professionals from around the world to discuss the latest trends in technology.",
        eventDate: new Date("2024-09-12T09:00:00"),
        organizer: "Tech Innovators Inc.",
    }),
    new models_1.EventModel({
        title: "Art Exhibition: Modern Masters",
        description: "A month-long exhibition showcasing contemporary artworks by emerging and established artists.",
        eventDate: new Date("2024-07-01T10:00:00"),
        organizer: "City Art Museum",
    }),
    new models_1.EventModel({
        title: "Marathon for Charity",
        description: "Join us for a marathon to raise funds for local charities. Open to runners of all levels.",
        eventDate: new Date("2024-11-03T06:00:00"),
        organizer: "Run for a Cause Foundation",
    }),
    new models_1.EventModel({
        title: "Winter Music Festival",
        description: "Experience live performances from a variety of music genres at the annual Winter Music Festival.",
        eventDate: new Date("2024-12-20T17:00:00"),
        organizer: "Music Lovers Group",
    }),
    new models_1.EventModel({
        title: "Cooking Workshop: Italian Cuisine",
        description: "Learn to cook authentic Italian dishes with our expert chefs in this hands-on workshop.",
        eventDate: new Date("2024-06-15T14:00:00"),
        organizer: "Culinary Arts School",
    }),
    new models_1.EventModel({
        title: "Business Leadership Summit",
        description: "A summit for business leaders to discuss strategies and share insights on leadership in the modern corporate world.",
        eventDate: new Date("2024-10-05T09:00:00"),
        organizer: "Global Business Network",
    }),
    new models_1.EventModel({
        title: "Yoga Retreat 2024",
        description: "A weekend retreat focused on yoga, meditation, and wellness practices.",
        eventDate: new Date("2024-08-23T17:00:00"),
        organizer: "Peaceful Minds Yoga Center",
    }),
    new models_1.EventModel({
        title: "Science Fair",
        description: "A fair showcasing innovative science projects by students from various schools.",
        eventDate: new Date("2024-05-28T09:00:00"),
        organizer: "National Science Association",
    }),
    new models_1.EventModel({
        title: "Food Truck Festival",
        description: "A festival featuring a variety of food trucks offering diverse cuisines and dishes.",
        eventDate: new Date("2024-07-14T11:00:00"),
        organizer: "City Events Committee",
    }),
    new models_1.EventModel({
        title: "Film Screening: Classic Movies",
        description: "A series of screenings featuring classic movies from different eras.",
        eventDate: new Date("2024-11-10T18:00:00"),
        organizer: "Downtown Film Society",
    }),
    new models_1.EventModel({
        title: "Gardening Expo: Verdant Horizons",
        description: "Embark on a journey through a verdant labyrinth of gardens, discovering reimagined landscapes and intricate plant arrangements.",
        eventDate: new Date("2024-04-18T09:00:00"),
        organizer: "Green Thumb Society",
    }),
    new models_1.EventModel({
        title: "Victuals and Vintages: A Culinary Mosaic",
        description: "Delve into a kaleidoscopic array of flavors with gourmet dishes and fine wines that intertwine in a mesmerizing mosaic.",
        eventDate: new Date("2024-06-21T18:00:00"),
        organizer: "Epicurean Delights",
    }),
    new models_1.EventModel({
        title: "Literary Festival: Transcending Tales",
        description: "Authors and readers alike gather to delve into the crucible of storytelling, exploring narratives that transcend time and space.",
        eventDate: new Date("2024-09-07T10:00:00"),
        organizer: "National Literary Society",
    }),
    new models_1.EventModel({
        title: "Historical Tapestry: Reimagined",
        description: "A captivating exhibition that beckons visitors to explore an enigmatic labyrinth of history, reimagined through modern art and interactive displays.",
        eventDate: new Date("2024-03-12T11:00:00"),
        organizer: "Historical Society",
    }),
    new models_1.EventModel({
        title: "Music and Lights: An Orchestrated Evening",
        description: "An evening of orchestral music and light displays that intertwine to create an intricate and mesmerizing experience.",
        eventDate: new Date("2024-12-05T19:00:00"),
        organizer: "City Cultural Committee",
    }),
    new models_1.EventModel({ title: "Environmental Sustainability Summit",
        description: "A conference focused on sustainable practices and innovations to combat climate change.",
        eventDate: new Date("2024-10-18T09:00:00"),
        organizer: "Green Future Initiative" }),
    new models_1.EventModel({ title: "Astronomy Night: Stargazing and Lectures",
        description: "An evening of stargazing with telescopes, accompanied by lectures from leading astronomers.",
        eventDate: new Date("2024-08-12T20:00:00"),
        organizer: "Astronomical Society" }),
    new models_1.EventModel({ title: "Cultural Dance Festival",
        description: "A vibrant festival showcasing traditional dances from various cultures around the world.",
        eventDate: new Date("2024-05-30T14:00:00"),
        organizer: "Global Arts Council" }),
    new models_1.EventModel({ title: "Robotics Workshop for Kids",
        description: "A hands-on workshop where kids can learn the basics of robotics and build their own robots.",
        eventDate: new Date("2024-07-22T09:00:00"),
        organizer: "Youth Robotics Club" }),
    new models_1.EventModel({ title: "Wine and Cheese Tasting Evening",
        description: "An exclusive evening of tasting fine wines paired with gourmet cheeses.",
        eventDate: new Date("2024-11-15T18:00:00"),
        organizer: "Gourmet Experiences Inc." }),
    new models_1.EventModel({ title: "Virtual Reality Expo",
        description: "An expo showcasing the latest advancements in virtual reality technology, with demos and interactive experiences.",
        eventDate: new Date("2024-09-15T10:00:00"),
        organizer: "VR Innovators Group" }),
    new models_1.EventModel({ title: "Sustainable Living Workshop",
        description: "A workshop focused on sustainable living practices, including zero waste, minimalism, and eco-friendly products.",
        eventDate: new Date("2024-06-25T09:00:00"),
        organizer: "Eco Warriors" }),
    new models_1.EventModel({ title: "Jazz and Blues Night",
        description: "An evening of live jazz and blues music performances by local and international artists.",
        eventDate: new Date("2024-11-20T19:00:00"),
        organizer: "City Music Foundation" }),
    new models_1.EventModel({ title: "Startup Pitch Competition",
        description: "A competition where startups pitch their innovative ideas to a panel of investors and industry experts.",
        eventDate: new Date("2024-10-10T13:00:00"),
        organizer: "Startup Hub" }),
    new models_1.EventModel({ title: "Fitness Bootcamp Weekend",
        description: "A weekend of intensive fitness bootcamp sessions, including cardio, strength training, and yoga.",
        eventDate: new Date("2024-07-19T08:00:00"),
        organizer: "FitLife Community" }),
    new models_1.EventModel({ title: "Mountain Biking Adventure",
        description: "A thrilling mountain biking event through challenging trails and scenic landscapes.",
        eventDate: new Date("2024-08-05T08:00:00"),
        organizer: "Adventure Sports Club" }),
    new models_1.EventModel({ title: "Classical Music Concert",
        description: "An evening of classical music performances by renowned musicians and orchestras.",
        eventDate: new Date("2024-11-22T19:30:00"),
        organizer: "Symphony Orchestra" }),
    new models_1.EventModel({ title: "Tech Startups Networking Night",
        description: "A networking event for tech startups to connect with potential investors, partners, and mentors.",
        eventDate: new Date("2024-09-30T18:00:00"),
        organizer: "Tech Network" }),
    new models_1.EventModel({ title: "Beach Cleanup Day",
        description: "Join the community for a beach cleanup event to help preserve our coastal environment.",
        eventDate: new Date("2024-06-12T07:00:00"),
        organizer: "Ocean Conservancy" }),
    new models_1.EventModel({ title: "Autumn Harvest Festival",
        description: "Celebrate the autumn season with a festival featuring local produce, crafts, and entertainment.",
        eventDate: new Date("2024-10-15T10:00:00"),
        organizer: "Community Harvest Association" }),
];
mongoose_1.default
    .connect(MONGO_CONNECTION_STRING)
    .then(() => {
    console.log("connected to db");
})
    .then(() => models_1.EventModel.collection.drop())
    .then(() => {
    console.log("dropped event collection");
})
    .then(() => {
    saveDocuments(data).catch((err) => {
        console.error(err);
        mongoose_1.default.disconnect();
    });
})
    .catch((err) => {
    console.log(err);
    process.exit(1);
});
function saveDocuments(data) {
    return __awaiter(this, void 0, void 0, function* () {
        for (const [index, document] of data.entries()) {
            yield document.save();
            if (index === data.length - 1) {
                console.log("Event seed was sown!");
                mongoose_1.default.disconnect();
            }
        }
    });
}
//# sourceMappingURL=seedEvents.js.map