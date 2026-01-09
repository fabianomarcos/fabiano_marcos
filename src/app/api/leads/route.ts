import { NextResponse } from 'next/server'

export async function POST(req: Request) {
  try {
    const body = await req.json()

    const { name, email, phone, message } = body

    if (!name || !email || !phone || !message) {
      return NextResponse.json(
        { error: 'Nome, email, telefone e mensagem são obrigatórios' },
        { status: 400 },
      )
    }

    const response = await fetch('http://localhost:5678/webhook-test/lead', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        name,
        email,
        phone,
        message,
        source: 'portfolio',
        createdAt: new Date().toISOString(),
      }),
    })

    if (!response.ok) {
      const errorText = await response.text()
      console.error(`Erro no n8n (${response.status}):`, errorText)
      return NextResponse.json(
        { error: 'Falha ao processar lead no servidor de automação' },
        { status: response.status },
      )
    }

    console.log('response:', response)

    return NextResponse.json({ success: true, data: response }, { status: 201 })
  } catch (error) {
    console.error('Erro ao processar lead:', error)
    return NextResponse.json(
      { error: 'Falha ao processar lead' },
      { status: 500 },
    )
  }
}
