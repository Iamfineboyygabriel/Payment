

const Inside = () => {
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
    <div>
    <p style={myP}>Inside</p>
    <input type="number" placeholder="DE98370440018929829032"  style={myStyle}/>
    </div>
   </div>
   
  )
}

export default Inside