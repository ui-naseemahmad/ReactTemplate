function Button(props) {

    let buttonType
    switch (props.type) {
      case "listing":
        buttonType = "listing";
        break;
      case "primary":
        buttonType = "primary";
        break;
      case "secondary":
        buttonType = "secondary";
        break;
      default:
        buttonType = "";
    }
  
    return(
        <>
          <a href="https://google.com" title='button' className={`quar-Btn ${buttonType}`}>{props.text}</a>
        </>
    )
  }
  
  export default Button;
