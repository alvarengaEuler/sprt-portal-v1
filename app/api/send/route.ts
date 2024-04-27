import { NextRequest, NextResponse } from 'next/server';
import { EmailTemplate } from '../../../components/email-template';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  const { name, email, message } = await req.json();
  console.log("init", email, name)
  try {
    const data = await resend.emails.send({
      from: 'Acme <onboarding@resend.dev>',
      to: ['euler.alvarenga.dev@gmail.com', 'euler.sistemas@gmail.com'],
      tags:['emprego', 'hire'],
      subject: 'Mensagem do site',
      text:"",
      react: EmailTemplate({ firstName: name, email: email,message: message }),
    });
    console.log("data",data)
    return Response.json(data);
  } catch (error) {
    console.log("error",error)
    return Response.json({ error });
  }
}
