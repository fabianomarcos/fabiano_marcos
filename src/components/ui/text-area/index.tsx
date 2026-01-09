interface Props extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  error?: string
}

export const TextArea = ({ error, ...props }: Props) => {
  return (
    <section className="w-full flex flex-col">
      {error && <p className="text-red-500 mt-1">{error}</p>}
      <textarea
        name="message"
        placeholder="Sua mensagem"
        className="p-3 rounded bg-black border border-green-500"
        rows={4}
        {...props}
      />
    </section>
  )
}
