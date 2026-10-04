import { useEffect, useRef, useState } from "react";
import { useCatalogStore } from "src/store/catalog";

const useBrandsCarousel = () => {

    const brands = useCatalogStore((state) => state.brands);

    const viewportRef = useRef(null);
    const trackRef = useRef(null);
    const [distance, setDistance] = useState(0);

    useEffect(() => {
        const track = trackRef.current;
        if (!track) return;

        // Clonamos el contenido UNA vez
        if (!track.dataset.cloned) {
            track.appendChild(track.children[0].cloneNode(true));
            track.dataset.cloned = "true";
        }

        // Medimos el ancho real del primer bloque
        const contentWidth = track.children[0].offsetWidth;
        setDistance(contentWidth);
    }, [brands]);

    return {
        brands,
        distance,
        trackRef,
        viewportRef,
    }
}

export default useBrandsCarousel