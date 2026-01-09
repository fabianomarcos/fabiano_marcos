import { z } from 'zod'

export const contactSchema = z.object({
  name: z.string().min(3, 'O nome deve ter pelo menos 3 caracteres'),
  email: z.email('E-mail inválido'),
  phone: z.string().min(11, 'O telefone deve ter pelo menos 11 caracteres'),
  message: z.string().min(10, 'A mensagem deve ter pelo menos 10 caracteres'),
})

export type ContactType = z.infer<typeof contactSchema>

export const validateFields = (data: Partial<ContactType>) =>
  contactSchema.safeParse(data)
