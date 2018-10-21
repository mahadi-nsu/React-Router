import React, {Component} from "react";

class Postitems extends Component{

	constructor(props)
	{
		super(props);
	}
  
     //console.log(props);

	render(){
		// console.log(this.props);
		return <div> PostItems <br />
          {this.props.match.params.id}
		 </div>
	}
}

export default Postitems;