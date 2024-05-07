function Area({name, children}: {name: string, children?: React.ReactNode}) {
  return (
    <fieldset className={`area ${name}`}>
      <legend>{name}</legend>
      {children}
    </fieldset>
  )
}

export default Area