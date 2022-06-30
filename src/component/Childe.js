import m4 from "../imagg/m4.jpg";
import React from "react";
import { Card} from 'react-bootstrap';


class Childe extends React.Component {
    state={
        persone : {
            fullName : "Otman Al-Shawsh",
            Number: "55470"
        },
        sum:0,
    }
    componentDidMount=()=>{
        this.summetion = setInterval(()=>{
            this.setState({
           ...this.state,
           sum: this.state.sum + 1,
            })
        },1000)
    }
    componentWillUnmount(){
        clearInterval(this.summetion)
    }
    render() {
return (

<div className='card-cv'>
<Card style={{ width: '200px' }}>
  <Card.Img height="200px" variant="top" src={m4} />
  <Card.Body>
    <Card.Title>identification </Card.Title>
    <Card.Text>
    Employee name: {this.state.persone.fullName}  Number:{this.state.persone.Number} Counter:{this.state.sum}
 <br/>
 Nationality: Libyan
    </Card.Text>
    
  </Card.Body>
</Card>
</div>
)
    }
}
 export default Childe