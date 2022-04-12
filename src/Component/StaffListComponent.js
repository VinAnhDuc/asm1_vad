import react, {Component} from "react";
import { Card, CardImg, CardTitle, CardBody, CardText  } from "reactstrap";


class StaffList extends Component {
    constructor(props) {
        super(props);

        this.state ={
            onSelectedStaff: null,
            
        };
    }

    onStaffSelect(staff) {
        this.setState({
            onSelectedStaff: staff
        });
    }

    

    render (){
        const StaffList = this.props.staffs.map((staff) =>{
            return (
                <div className="col-12 col-md-5 mt-1">
                    <Card key={staff.id} onclick ={()=> this.onStaffSelect(staff)}>
                        <CardBody>
                            <CardTitle>{staff.name}</CardTitle>
                        </CardBody>
                    </Card>
                </div>
            );
        });
        return (
            <div class="container-fruit"> 
                <div class="row col-12 ">
                    {StaffList}
                </div>
            </div>
        );
    }

}

export default StaffList;
