import axios from "axios";

export const dynamic = 'force-dynamic'; // static by default, unless reading the request

export const runtime = 'nodejs';

export async function GET(request: Request) {

    console.log("hello")
    try {
        const response = await axios.request({
            method: "get",
            url: `https://talkies-frontend.onrender.com/`
        })
        const response1 = await axios.request({
            method: "get",
            url: `https://talkies-1.onrender.com/`
        })
        const response2 = await axios.request({
            method: "get",
            url: `https://medicare-server-2u9y.onrender.com/user/getAllUsers`
        })

        if (response.status == 200 && response1.status == 200 && response2.status == 200) {
            console.log("talkies server is awake")
        }
    } catch (error) {
        console.log(error)
    }

    return new Response(`Hello from cron job`);
}
