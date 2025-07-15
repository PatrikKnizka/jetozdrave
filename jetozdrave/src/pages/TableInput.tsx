import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useFoodStore } from "../store/useFoodStore";
import style from "./../styles/formLayout.module.css";

function TableInput() {
    const navigate = useNavigate();
    const [error, setError] = useState("");
    const setProduct = useFoodStore((s) => s.setProduct);

    const [form, setForm] = useState({
        kcals: "",
        fats: "",
        carbs: "",
        sugars: "",
        fibers: "",
        proteins: "",
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const handleSubmit = () => {
        const { kcals, fats, carbs, sugars, fibers, proteins } = form;
        console.log("Form data:", form);

        if (!kcals || !fats || !carbs || !sugars || !fibers || !proteins) {
            setError("Please fill in all fields.");
            return;
        } else {
            setError("");
        }

        setProduct({
            kcals: parseFloat(kcals),
            fats: parseFloat(fats),
            carbs: parseFloat(carbs),
            sugars: parseFloat(sugars),
            fibers: parseFloat(fibers),
            proteins: parseFloat(proteins),
        });
        console.log("Form submitted:", form);
        navigate("/weight");
    };

    return (
        <div className={style.productDetailContainer}>
            <h2 className={style.productDetailHeading}>
                Enter Product Details
            </h2>
            {error && <p className={style.error}>{error}</p>}
            <input
                className={style.productDetailInput}
                name="kcals"
                value={form.kcals}
                placeholder="Kalórie, kcals / 100g"
                onChange={handleChange}
            />
            <input
                className={style.productDetailInput}
                name="fats"
                value={form.fats}
                placeholder="Tuky, Fats / 100g"
                onChange={handleChange}
            />
            <input
                className={style.productDetailInput}
                name="carbs"
                value={form.carbs}
                placeholder="Sacharidy, Carbs / 100g"
                onChange={handleChange}
            />
            <input
                className={style.productDetailInput}
                name="sugars"
                value={form.sugars}
                placeholder="Cukry, Sugars / 100g"
                onChange={handleChange}
            />
            <input
                name="fibers"
                value={form.fibers}
                onChange={handleChange}
                placeholder="Vlákniny, Fibers / 100g"
                className={style.productDetailInput}
            />
            <input
                name="proteins"
                value={form.proteins}
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
