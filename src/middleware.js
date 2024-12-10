import {NextResponse} from 'next/server'
export function middleware(request){
    // if (request.nextUrl.pathname != "/Component/Home") {
        return NextResponse.redirect(new URL('/Component/Home', request.url))
    // }
}

export const config = {
    matcher : ["/Component/About", "/Component/service"]
}