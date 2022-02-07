import React from 'react';

class InfoForm extends React.Component {
    constructor() {
        super();

        this.state = {
            _id:"",
            Name:"",
            Age:"",
            City:"",
            isEdit:false
        }

}

infoChange = event =>
{
    const { name,value} = event.target;

    this.setState({
        [name] : value
    })
} 
InfoSubmit = event =>
{
    // event.preventDefault();
    // console.log(this.state.Name);
    if(!this.state.isEdit)
    {
    let data = {
        isEdit:this.state.isEdit,
        Name:this.state.Name,
        Age:this.state.Age,
        City:this.state.City
    }
    this.props.myData(data);
   }
   else
   {
  
    let data = {
        isEdit:this.state.isEdit,
        _id:this.state._id,
        Name:this.state.Name,
        Age:this.state.Age,
        City:this.state.City
    }
    this.props.myData(data);

   }
}   

componentWillReceiveProps(props)
{
    // console.log(props.setForm);
    if(props.setForm._id !=null)
    {
        this.setState({
            isEdit:true,
            _id:props.setForm._id,
            Name:props.setForm.Name,
            City:props.setForm.City,
            Age:props.setForm.Age,
        })

    }
}

render() {
        return (

            <form onSubmit={this.InfoSubmit} autoComplete='off'>
                <div className="form-group">
                    <label>Name:</label>
                    <input type="text" className="form-control" placeholder="Enter Name" 
                    onChange = {this.infoChange}
                    name ="Name"
                    value ={this.state.Name}
                    />
                </div><br />

                <div className="form-group">
                    <label >City:</label>
                    <input type="text" className="form-control" placeholder="Enter City"
                    onChange = {this.infoChange}
                    name ="City"
                    value ={this.state.City}
                     />
                </div><br />

                <div className="form-group">
                    <label >Age:</label>
                    <input type="text" className="form-control" placeholder="Enter Age" 
                    onChange = {this.infoChange}
                    name ="Age"
                    value ={this.state.Age}
                    />
                </div><br /><br />

                <button type="submit" className="btn btn-primary">{this.state.isEdit ? 'Update':'Create'}</button>
            </form>
        )

    }
}

export default InfoForm;