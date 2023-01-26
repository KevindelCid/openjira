import { NextRequest, NextResponse } from "next/server";




export function middleware(req: NextRequest){


    if(req.nextUrl.pathname.startsWith('/api/entries/')){
        const id = req.nextUrl.pathname.replace('/api/entries/','')
        const checkMongoIDRegExp = new RegExp("^[0-9a-fA-F]{24}$");
        if(!checkMongoIDRegExp.test(id)){
            const url = req.nextUrl.clone()
            url.pathname = '/api/bad-request'
            url.search = `?message=${id} is not a valid id`
            return NextResponse.rewrite(url)
        }
        console.log({id})
    }

    return NextResponse.next()
}


export const config = {
    // matcher: '/about/:path*'
    matcher: ['/api/:path*', '/api/entries/:path']
}