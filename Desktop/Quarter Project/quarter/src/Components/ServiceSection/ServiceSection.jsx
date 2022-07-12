import Button from "../Button";
import './ServiceSection.css';
function ServiceSection() {
    return (
        <>
            <div className="quar-Services">
                <form action="/action_page.php">
                    <select className="minimal" name="cars" id="cars">
                        <option value="choose">Choose Area</option>
                        <option value="chicago">chicago</option>
                        <option value="London">London</option>
                        <option value="New York">New York</option>
                        <option value="New Jersey">New Jersey</option>
                    </select>
        
                    <select className="minimal" name="cars" id="cars">
                        <option value=" Status"> Property Status</option>
                        <option value=" Open house"> Open house</option>
                        <option value="Rent">Rent</option>
                        <option value="Sale">Sale</option>
                        <option value="Sold">Sold</option>
                    </select>
           
                    <select className="minimal" name="cars" id="cars">
                        <option value=" Property"> Property Type</option>
                        <option value="Apartment">Apartment</option>
                        <option value="Co-op">Co-op</option>
                        <option value="Single Family Home">Single Family Home</option>
                        <option value="Single Family Home">ffff</option>
                    </select>
                    
                    <Button type='primary' text='Find Now' />
                   
                </form>
            </div>
        </>
    )
}
export default ServiceSection;