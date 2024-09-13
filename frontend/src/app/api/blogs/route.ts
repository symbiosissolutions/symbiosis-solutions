import { NextResponse } from "next/server";
import axios from "axios";

export async function GET() {
  const baseUrl = process.env.NEXT_PUBLIC_BACKEND_API_URL;
  const endpoint = `${baseUrl}/api/blogs?populate=*&filters[isFeatured][$eq]=true`;
  const token = process.env.CMS_API_TOKEN;

  try {
    const response = await axios.get(endpoint, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    return NextResponse.json(response.data);
  } catch (error) {
    console.error("Error fetching blogs:", error);
    return NextResponse.json(
      { error: "Failed to fetch blogs" },
      { status: 500 }
    );
  }
}
