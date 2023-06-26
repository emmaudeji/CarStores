import Dealer from "../../../../models/dealer";
import { connectToDB } from "../../../../utils/dataBase";

export const POST = async (request) => {
    const { userId, firstName, lastName, bio, whatsAppNumber, address  } = await request.json();

    try {
        await connectToDB();
        const newDealer = new Dealer({ user: userId, fullName: `${firstName} ${lastName}`, bio, whatsAppNumber, address  });

        await newDealer.save();
        return new Response(JSON.stringify(newDealer), { status: 201 })
    } catch (error) {
        return new Response("Failed to create a new dealer", { status: 500 });
    }
}
