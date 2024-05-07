function Area({name, children}: {name: string, children?: React.ReactNode}) {
  return <div className={`area ${name}`}>{children}</div>
}

export default Area