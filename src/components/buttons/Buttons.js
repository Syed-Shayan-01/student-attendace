import { PlusCircleFilled } from "@ant-design/icons";
import { Button, Radio } from "antd"
import { useState } from "react";
import { Link } from "react-router-dom";

const Buttons = () => {
    const [size, setsize] = useState('large');
    return (
        <>
            <Link to={'/form'} > <Radio.Group value={size} onChange={(e) => { setsize(e.target.value) }}>
                <Button type="primary" className="bg-blue-500 hover:text-white text-white" icon={<PlusCircleFilled />} size={size}>
                    Add Student
                </Button>
            </Radio.Group>
            </Link>
        </>
    )
}

export default Buttons;