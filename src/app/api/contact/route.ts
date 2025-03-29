import { type NextRequest, NextResponse } from 'next/server';

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { name, email, message, isPassed } = body;

    if (!name || !email || !message || isPassed === false) {
      return NextResponse.json(
        {
          error:
            'Bad Request: required fields name, email, message and isPassed',
        },
        { status: 400 }
      );
    }

    /* Отправляем данные формы в лог консоли сервера */
    console.log(body);

    return NextResponse.json(
      { message: `Thank you for your interest, ${name}.` },
      { status: 200 }
    );
  } catch (error) {
    return NextResponse.json(
      { error: 'Internal Server: something went wrong' },
      { status: 500 }
    );
  }
}
