

const Outside = () => {
  const myStyle = {
    border: '2px solid #E8E8E8', 
    width: "100%",
    height: "45px",
    borderRadius: "4px",
    fontSize: "13px",
  };

  const myP = {
   fontWeight: "bold",
   fontSize: "13px",
   color: "#8B8F96",
   lineHeight: "24px"
  }
  return (
    <div className="iban">
    <p style={myP}>IBAN</p>
    <input type="number" placeholder="DE98370440018929829032"  style={myStyle}/>
   </div>
  )
}

export default Outside