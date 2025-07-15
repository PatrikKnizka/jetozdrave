import { useState } from "react";
import { useNavigate } from "react-router-dom";
import style from "./../styles/formLayout.module.css";
import { useFoodStore } from "../store/useFoodStore";

function TableInput() {
    const setProduct = useFoodStore((s) => s.setProduct);
    const navigate = useNavigate();

    const [form, setForm] = useState({
        kcal: "",
        fat: "",
        carbs: "",
        sugars: "",
        fiber: "",
        protein: "",
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const handleSubmit = () => {
        const { kcal, fat, carbs, sugars, fiber, protein } = form;
        setProduct({
            kcal: parseFloat(kcal),
            fat: parseFloat(fat),
            carbs: parseFloat(carbs),
            sugars: parseFloat(sugars),
            fiber: parseFloat(fiber),
            protein: parseFloat(protein),
        });
        console.log("Form submitted:", form);
        navigate("/weight");
    };

    return (
        <div className={style.productDetailContainer}>
            <h2 className={style.productDetailHeading}>
                Enter Product Details
            </h2>
            <input
                className={style.productDetailInput}
                name="kcal"
                placeholder="Kalórie, kcals / 100g"
                onChange={handleChange}
            />
            <input
                className={style.productDetailInput}
                name="fat"
                placeholder="Tuky, Fats / 100g"
                onChange={handleChange}
            />
            <input
                className={style.productDetailInput}
                name="carbs"
                placeholder="Sacharidy, Carbs / 100g"
                onChange={handleChange}
            />
            <input
                className={style.productDetailInput}
                name="sugars"
                placeholder="Cukry, Sugars / 100g"
                onChange={handleChange}
            />
            <input
                className={style.productDetailInput}
                name="fibers"
                placeholder="Vlákniny, Fibers / 100g"
                onChange={handleChange}
            />
            <input
                name="protein"
                onChange={handleChange}
                placeholder="Bielkoviny, Protein / 100g"
                className={style.productDetailInput}
            />
            <button
                className={style.productDetailSubmitButton}
                onClick={handleSubmit}
            >
                Continue
            </button>
        </div>
    );
}

export default TableInput;
