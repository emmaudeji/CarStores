import Dealer from "../../../models/dealer";
import { connectToDB } from "../../../utils/dataBase";

export const GET = async (request) => {
    try {
        await connectToDB()

        const dealers = await Dealer.find({}).populate('user')

        return new Response(JSON.stringify(dealers), { status: 200 })
    } catch (error) {
        return new Response("Failed to fetch all dealers", { status: 500 })
    }

} 