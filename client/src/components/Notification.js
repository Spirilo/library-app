export const Notification = ({msg}) => {
  const errStyle = {
    color: 'red'
  }
  return(
    <div style={errStyle}>
      <p>{msg}</p>
    </div>
  )
}