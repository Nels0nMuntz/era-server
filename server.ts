import { connectDB } from "./app/lib";
import app from "./app";

const port = process.env.PORT || 5000;

main();

async function main() {
  try {
    await connectDB();
    app.listen(port, () => {
      console.log(`[server]: Server is running at ${process.env.API_URL}`);
    });
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
}
