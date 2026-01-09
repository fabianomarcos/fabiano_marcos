interface Props extends React.InputHTMLAttributes<HTMLInputElement> {
  error?: string
}

export const Input = ({ error, ...props }: Props) => {
  return (
    <section className="w-full flex flex-col">
      {error && <p className="text-red-500 mt-1">{error}</p>}
      <input
        {...props}
        className="p-3 rounded bg-black border border-green-500"
      />
    </section>
  )
}
