import Button from "./Button"

const SampleButton =

    <div className="buttons-container">
        <div>
            <Button variant="success" size="sm">Green</Button>
            <Button variant="success">Green</Button>
            <Button variant="success" size="lg">Green</Button>
        </div>

         <div>
             <Button variant="warning" size="sm">Yellow</Button>
                     <Button variant="warning">Yellow</Button>
                     <Button variant="warning" size="lg">Yellow</Button>
         </div>

         <div>
             <Button variant="danger" size="sm">Red Btn</Button>
                     <Button variant="danger">Red Btn</Button>
                     <Button variant="danger" size="lg">Red Btn</Button>
         </div>
    </div> 

export default SampleButton