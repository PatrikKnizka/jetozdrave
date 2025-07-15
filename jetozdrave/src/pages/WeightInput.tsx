import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useFoodStore } from "../store/useFoodStore";
import style from "./../styles/formLayout.module.css";

function WeightInput() {
    const setWeight = useFoodStore((s) => s.setWeight);
    const navigate = useNavigate();
    const [w, setW] = useState("");

    const handleSubmit = () => {
        setWeight(parseFloat(w));
        console.log("Weight submitted:", w);
        navigate("/result");
    };

    return (
        <div className={style.productDetailContainer}>
            <h2 className={style.productDetailHeading}>Enter Product Weight</h2>
            <input
                value={w}
                type="number"
                placeholder="Weight in grams"
                className={style.productDetailInput}
                onChange={(e) => setW(e.target.value)}
            />
            <button
                className={style.productDetailSubmitButton}
                onClick={handleSubmit}
            >
                Show Result
            </button>
        </div>
    );
}

export default WeightInput;
