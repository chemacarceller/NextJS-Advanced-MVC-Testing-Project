import { ApiController } from "@/MVC/controllers/apiController";

export async function GET(request) {
 
    const { searchParams } = new URL(request.url);
    const activeUserParam = searchParams.get('activeUser'); 
    const isFieldsActive = activeUserParam === 'true';

    return await new ApiController().listUsers(isFieldsActive); 
}