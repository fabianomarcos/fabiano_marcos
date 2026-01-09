'use server'

import { validateFields } from './schema'

export async function sendContactAction(_: unknown, formData: FormData) {
  const payload = {
    name: (formData.get('name') || '') as string,
    email: (formData.get('email') || '') as string,
    phone: (formData.get('phone') || '') as string,
    message: (formData.get('message') || '') as string,
  }

  const validate = validateFields(payload)

  if (!validate.success) {
    return {
      success: false,
      message: 'Erro de validação',
      firstErrors: validate.error.flatten().fieldErrors,
      inputs: payload,
    }
  }

  try {
    const response = await fetch(`http://localhost:3000/api/leads`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload),
    })

    if (!response.ok) throw new Error()

    return { success: true, message: 'Mensagem enviada com sucesso!' }
  } catch (error) {
    console.log('error: ', error)
    return { success: false, message: 'Erro ao conectar com o servidor.' }
  }
}
