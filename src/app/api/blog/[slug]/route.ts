import { NextRequest, NextResponse } from "next/server";
import axios from "axios";

export async function GET(
  request: NextRequest,
  { params }: { params: { slug: string } }
) {
  const { slug } = params;
  const token = process.env.CMS_API_TOKEN;
  const baseUrl = process.env.NEXT_PUBLIC_BACKEND_API_URL;
  const apiUrl = `${baseUrl}/api/blogs?filters[slug][$eq]=${slug}&populate=*`;
  try {
    const response = await axios.get(apiUrl, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    const data = response.data;
    if (data.data && data.data.length > 0) {
      return NextResponse.json(data.data[0]);
    } else {
      return NextResponse.json(
        { error: "Blog post not found" },
        { status: 404 }
      );
    }
  } catch (error) {
    console.error("Error fetching blog post:", error);
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 }
    );
  }
}
