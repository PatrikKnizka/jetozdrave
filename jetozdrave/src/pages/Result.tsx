import { useNavigate } from "react-router-dom";
import { useFoodStore } from "../store/useFoodStore";
import style from "./../styles/resultLayout.module.css";

// Function to determine color class based on nutritional value and type
const getColorClass = (type: string, value: number): string => {
    switch (type) {
        case "kcal":
            if (value <= 100) return style.excellent;
            if (value <= 200) return style.good;
            if (value <= 300) return style.moderate;
            if (value <= 400) return style.poor;
            return style.bad;

        case "fat":
            if (value <= 3) return style.excellent;
            if (value <= 10) return style.good;
            if (value <= 17) return style.moderate;
            if (value <= 25) return style.poor;
            return style.bad;

        case "carbs":
            if (value <= 5) return style.excellent;
            if (value <= 15) return style.good;
            if (value <= 25) return style.moderate;
            if (value <= 35) return style.poor;
            return style.bad;

        case "sugars":
            if (value <= 2) return style.excellent;
            if (value <= 5) return style.good;
            if (value <= 12) return style.moderate;
            if (value <= 20) return style.poor;
            return style.bad;

        case "fiber":
            if (value >= 6) return style.excellent;
            if (value >= 4) return style.good;
            if (value >= 2) return style.moderate;
            if (value >= 1) return style.poor;
            return style.bad;

        case "protein":
            if (value >= 10) return style.excellent;
            if (value >= 7) return style.good;
            if (value >= 4) return style.moderate;
            if (value >= 2) return style.poor;
            return style.bad;

        default:
            return "";
    }
};

function Result() {
    const navigate = useNavigate();
    const product = useFoodStore((s) => s.product);

    if (!product || product.weight === null) {
        return (
            <div className={style.resultContainer}>
                <h2>No product selected</h2>
                <p>
                    Please go{" "}
                    <a
                        onClick={() => {
                            navigate("/");
                        }}
                        className={style.resultLink}
                    >
                        back
                    </a>{" "}
                    and enter product details.
                </p>
            </div>
        );
    }

    const factor = product.weight / 100;
    const fat = product.fat * factor;
    const kcal = product.kcal * factor;
    const carbs = product.carbs * factor;
    const fiber = product.fiber * factor;
    const sugars = product.sugars * factor;
    const protein = product.protein * factor;

    return (
        <div className={style.resultContainer}>
            <h2 className={style.resultHeading}>
                {product.weight}g of this product
            </h2>
            <p className={`${style.resultItem} ${getColorClass("kcal", kcal)}`}>
                kcal: {Math.round(kcal)} kcal
            </p>
            <p className={`${style.resultItem} ${getColorClass("fat", fat)}`}>
                Fats: {fat.toFixed(1)} g
            </p>
            <p
                className={`${style.resultItem} ${getColorClass(
                    "carbs",
                    carbs
                )}`}
            >
                Carbs: {carbs.toFixed(1)} g
            </p>
            <p
                className={`${style.resultItem} ${getColorClass(
                    "sugars",
                    sugars
                )}`}
            >
                Sugars: {sugars.toFixed(1)} g
            </p>
            <p
                className={`${style.resultItem} ${getColorClass(
                    "fiber",
                    fiber
                )}`}
            >
                Fiber: {fiber.toFixed(1)} g
            </p>
            <p
                className={`${style.resultItem} ${getColorClass(
                    "protein",
                    protein
                )}`}
            >
                Proteins: {protein.toFixed(1)} g
            </p>
        </div>
    );
}

export default Result;
