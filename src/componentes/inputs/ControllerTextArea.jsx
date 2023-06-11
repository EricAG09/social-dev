import { useController } from "react-hook-form";
import Textarea from "./TextArea"

const ControllerTextaera = ({name, control, defaultValue="", ...props}) => {
    const { 
        field: {value, onChange}
    } = useController({name, control, defaultValue})

    return(
        <Textarea {...props} value={value} onChange={onChange}/>
    )
}

export default ControllerTextaera