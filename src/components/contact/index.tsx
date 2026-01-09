'use client'
import { useActionState, useEffect, useRef } from 'react'
import { sendContactAction } from './action'

import { Input } from '../ui/input'
import { TextArea } from '../ui/text-area'
import { SubmitButton } from './submit-button'

export function Contact() {
  const formRef = useRef<HTMLFormElement>(null)

  const [state, formAction] = useActionState(sendContactAction, {
    success: false,
    message: '',
  })

  useEffect(() => {
    if (state.success) formRef.current?.reset()
  }, [state.success])

  return (
    <section id="contact" className="py-20 bg-gray-900 text-white text-center">
      <h2 className="text-2xl font-bold mb-6">Entre em contato</h2>
      <form
        ref={formRef}
        action={formAction}
        className="max-w-md mx-auto flex flex-col gap-4"
      >
        <Input
          name="name"
          type="text"
          placeholder="Seu nome"
          defaultValue={state.inputs?.name}
          error={state?.firstErrors?.name?.join(' ')}
        />
        <Input
          name="email"
          placeholder="Seu email"
          type="email"
          defaultValue={state.inputs?.email}
          error={state?.firstErrors?.email?.join(' ')}
        />
        <Input
          name="phone"
          type="phone"
          placeholder="Seu telefone"
          defaultValue={state.inputs?.phone}
          error={state?.firstErrors?.phone?.join(' ')}
        />
        <TextArea
          name="message"
          placeholder="Sua mensagem"
          className="p-3 rounded bg-black border border-green-500"
          defaultValue={state.inputs?.message}
          rows={4}
          error={state?.firstErrors?.message?.join(' ')}
        />
        <SubmitButton />
      </form>
    </section>
  )
}
