import { NextResponse } from "next/server";
import axios from "axios";

// Newsletter subscription
export async function POST(request: Request) {
  const { email } = await request.json();

  const authToken = process.env.EMAIL_API_TOKEN;
  const listId = process.env.SUBSCRIBER_LIST_ID;
  const baseUrl = process.env.API_URL;
  const endpoint = process.env.API_ENDPOINT;

  try {
    const response = await axios.post(
      `${baseUrl}/${listId}/${endpoint}`,
      {
        Data: {
          Email: email,
          FirstName: "",
          LastName: "",
          EmailPerm: 1,
        },
      },
      {
        headers: {
          AuthToken: authToken,
          "Content-Type": "application/json",
        },
      }
    );

    return NextResponse.json({
      message: "Subscription successful",
      data: response.data,
    });
  } catch (error: any) {
    console.error("Error submitting email:", error.message);
    return NextResponse.json(
      { message: "Error submitting email", error: error.message },
      { status: 500 }
    );
  }
}
