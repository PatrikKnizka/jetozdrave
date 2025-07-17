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
                min="0"
                step="0.1"
                name="kcals"
                type="number"
                tabIndex={1}
                value={form.kcals}
                autoComplete="off"
                onChange={handleChange}
                onKeyDown={handleKeyDown}
                placeholder="Kalórie, kcals / 100g"
                className={style.productDetailInput}
            />
            <input
                min="0"
                step="0.1"
                type="number"
                name="fats"
                tabIndex={2}
                value={form.fats}
                autoComplete="off"
                onChange={handleChange}
                onKeyDown={handleKeyDown}
                placeholder="Tuky, Fats / 100g"
                className={style.productDetailInput}
            />
            <input
                min="0"
                step="0.1"
                tabIndex={3}
                name="carbs"
                type="number"
                value={form.carbs}
                autoComplete="off"
                onChange={handleChange}
                onKeyDown={handleKeyDown}
                className={style.productDetailInput}
                placeholder="Sacharidy, Carbs / 100g"
            />
            <input
                min="0"
                step="0.1"
                tabIndex={4}
                name="sugars"
                type="number"
                autoComplete="off"
                value={form.sugars}
                onChange={handleChange}
                onKeyDown={handleKeyDown}
                placeholder="Cukry, Sugars / 100g"
                className={style.productDetailInput}
                />
            <input
                min="0"
                step="0.1"
                tabIndex={5}
                name="fibers"
                type="number"
                autoComplete="off"
                value={form.fibers}
                onChange={handleChange}
                onKeyDown={handleKeyDown}
                className={style.productDetailInput}
                placeholder="Vlákniny, Fibers / 100g"
            />
            <input
                min="0"
                step="0.1"
                tabIndex={6}
                type="number"
                name="proteins"
                autoComplete="off"
                value={form.proteins}
                onChange={handleChange}
                onKeyDown={handleKeyDown}
                className={style.productDetailInput}
                placeholder="Bielkoviny, Protein / 100g"
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
