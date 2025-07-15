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

    const handleKeyDown = (e: React.KeyboardEvent) => {
        if (e.key === "Enter") {
            handleSubmit();
        }
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
            {error && (
                <p className={style.error} data-testid="error-message">
                    {error}
                </p>
            )}
            <input
                className={style.productDetailInput}
                name="kcals"
                type="number"
                step="0.1"
                min="0"
                tabIndex={1}
                value={form.kcals}
                placeholder="Kalórie, kcals / 100g"
                onChange={handleChange}
                onKeyDown={handleKeyDown}
            />
            <input
                className={style.productDetailInput}
                name="fats"
                type="number"
                step="0.1"
                min="0"
                tabIndex={2}
                value={form.fats}
                placeholder="Tuky, Fats / 100g"
                onChange={handleChange}
                onKeyDown={handleKeyDown}
            />
            <input
                className={style.productDetailInput}
                name="carbs"
                type="number"
                step="0.1"
                min="0"
                tabIndex={3}
                value={form.carbs}
                placeholder="Sacharidy, Carbs / 100g"
                onChange={handleChange}
                onKeyDown={handleKeyDown}
            />
            <input
                className={style.productDetailInput}
                name="sugars"
                type="number"
                step="0.1"
                min="0"
                tabIndex={4}
                value={form.sugars}
                placeholder="Cukry, Sugars / 100g"
                onChange={handleChange}
                onKeyDown={handleKeyDown}
            />
            <input
                name="fibers"
                type="number"
                step="0.1"
                min="0"
                tabIndex={5}
                value={form.fibers}
                onChange={handleChange}
                onKeyDown={handleKeyDown}
                placeholder="Vlákniny, Fibers / 100g"
                className={style.productDetailInput}
            />
            <input
                name="proteins"
                type="number"
                step="0.1"
                min="0"
                tabIndex={6}
                value={form.proteins}
                onChange={handleChange}
                onKeyDown={handleKeyDown}
                placeholder="Bielkoviny, Protein / 100g"
                className={style.productDetailInput}
            />
            <button
                className={style.productDetailSubmitButton}
                tabIndex={7}
                onClick={handleSubmit}
                onKeyDown={handleKeyDown}
            >
                Continue
            </button>
        </div>
    );
}

export default TableInput;
