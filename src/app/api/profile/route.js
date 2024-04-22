import { put } from '@vercel/blob';
import { getServerSession } from 'next-auth';
import { NextResponse } from 'next/server';
import { options } from '../auth/[...nextauth]/options';

export async function POST(request) {

    const session = await getServerSession(options);

    const filename = session.user.name;

    const blob = await put(filename, request.body, {
        access: 'public',
    });

    return NextResponse.json(blob);
}