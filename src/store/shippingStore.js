import { create } from "zustand";

const initialShipping = {
  customer_name: "",
  email: "",
  customer_phone: "",

  shipping_address: "",

  shipping_postal_code: "",
  shipping_state: "",
  shipping_city: "",
  shipping_neighborhood: "",

  shipping_references: "",

  notes: "",
};

const useShippingStore = create((set) => ({
  shipping: JSON.parse(localStorage.getItem("shipping")) || initialShipping,

  setShipping: (shipping) => {
    localStorage.setItem("shipping", JSON.stringify(shipping));

    set({
      shipping,
    });
  },

  clearShipping: () => {
    localStorage.removeItem("shipping");

    set({
      shipping: initialShipping,
    });
  },
}));

export default useShippingStore;
