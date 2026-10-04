import api from "src/services/axios";

export const cartService = {
  getCart: async () => {
    const { data } = await api.get("/cart");

    return data || {};
  },

  addItem: async ({ itemId, quantity = 1 }) => {
    const { data } = await api.post(
      "/cart/add",
      {
        tire_id: itemId,
        quantity,
      },
      {
        skipToast: true,
      },
    );

    return data?.data?.cart;
  },

  updateItem: async ({ itemId, quantity }) => {
    const { data } = await api.put(
      `/cart/update/${itemId}`,
      {
        quantity,
      },
      {
        skipToast: true,
      },
    );

    return data?.data?.cart;
  },

  removeItem: async (itemId) => {
    const { data } = await api.delete(
      `/cart/remove/${itemId}`,
      {
        skipToast: true,
      },
    );

    return data?.data?.cart;
  },

  clearCart: async () => {
    const { data } = await api.delete(
      "/cart/clear",
      {
        skipToast: true,
      },
    );

    return data?.data?.cart;
  },
};