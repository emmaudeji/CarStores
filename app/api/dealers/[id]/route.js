import Dealer from "../../../../models/dealer";
import { connectToDB } from "../../../../utils/dataBase";

import { getServerSession } from "next-auth";


// fetch a dealer 
export const GET = async (request, { params }) => {

  const session = await getServerSession();
 
  if (session) {
    
    try {
        await connectToDB()
        const dealer = await Dealer.findOne({ user: params.id });

        if (dealer) {
            return new Response(JSON.stringify(dealer), { status: 200 })
        } else {
            return new Response("Dealer Not Found", { status: 404 }); // User is not a dealer
        }
        } catch (error) {
            return new Response("Failed to retrieve dealer", { status: 500 });
        
        }
    } else {
        return new Response("Unauthorized", { status: 401 });
    }
    }

// PATCH performed by user with the dealer Id.
export const PATCH = async (request, { params }) => {
    const {firstName, lastName, bio, whatsAppNumber, address  } = await request.json();

    try {
        await connectToDB();

        // Find the existing prompt by ID
        const existingDealer = await Dealer.findById(params.id);

        if (!existingDealer) {
            return new Response("Dealer not found", { status: 404 });
        }

        // Update the prompt with new data
        existingDealer.fullname = `${firstName} ${lastName}`;
        existingDealer.bio = bio;
        existingDealer.whatsAppNumber = whatsAppNumber;
        existingDealer.address = address;


        await existingDealer.save();

        return new Response("Successfully updated the Dealer", { status: 200 });
    } catch (error) {
        return new Response("Error Updating Dealer", { status: 500 });
    }
};

// delete a dealer by Super admin
export const DELETE = async (request, { params }) => {
    try {
        await connectToDB();

        // Find the dealer by ID and remove it
        await Dealer.findByIdAndRemove(params.id);

        return new Response("Dealer deleted successfully", { status: 200 });
    } catch (error) {
        return new Response("Error deleting dealer", { status: 500 });
    }
};
