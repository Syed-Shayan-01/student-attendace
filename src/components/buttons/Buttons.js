import { PlusCircleFilled } from "@ant-design/icons";
import { Button, Radio } from "antd"
import { useState } from "react";

const Buttons = () => {
    const [size, setsize] = useState('large');
    return (
        <>
            <Radio.Group value={size} onChange={(e) => { setsize(e.target.value) }}>
                <Button type="primary" className="bg-blue-500 hover:text-white text-white" icon={<PlusCircleFilled />} size={size}>
                    Add Student
                </Button>
            </Radio.Group>
        </>
    )
}

export default Buttons