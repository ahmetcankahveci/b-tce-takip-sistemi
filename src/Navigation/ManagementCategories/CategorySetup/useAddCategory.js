import { useLocalStorage } from "../../../common/utils/useLocalStorage";

export const useAddCategory = () => {
    const [categories, setCategories] = useLocalStorage("myCategories", ["Car", "Eğlence", "Yemek"]);

    const handleAddCategory = (newCategory) => {
        setCategories([...categories, newCategory]);
    };

    return { handleAddCategory, categories, setCategories }
};